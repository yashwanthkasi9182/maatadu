import { CONTENT_VERSION, poolFor } from './content';
import type { CourseProgress, Language, Question, QuizAttempt, Response, ReviewItem } from './types';
export const uid = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
  return result;
}
export function normalise(value: string) {
  return value.normalize('NFC').toLowerCase().replace(/[.,!?;:"“”‘’'।。]/gu, '').replace(/\s+/gu, ' ').trim();
}
export function evaluate(q: Question, value: string): boolean {
  if (q.kind === 'match') {
    try { const map = JSON.parse(value) as Record<string, string>; return q.pairs.every(p => map[p.left] === p.right); } catch { return false; }
  }
  return q.answers.some(a => normalise(a) === normalise(value));
}
function mixedSelection(pool: Question[], length: number, previous?: QuizAttempt) {
  const recent = new Set(previous?.definition.questions.map(q => q.id) ?? []);
  let remaining = shuffle(pool); const result: Question[] = []; const dayCounts = new Map<number, number>(); const itemCounts = new Map<string,number>(); const kinds = new Set<string>();
  while (remaining.length && result.length < length) {
    const minDay = Math.min(...remaining.map(q => dayCounts.get(q.day) ?? 0));
    const candidates = remaining.filter(q => (dayCounts.get(q.day) ?? 0) === minDay);
    const weight = (q: Question) => (kinds.size < 3 && !kinds.has(q.kind) ? 100 : 0) + (!itemCounts.has(q.itemId) ? 40 : 0) + (!recent.has(q.id) ? 5 : 0) - (q.itemId === result.at(-1)?.itemId ? 20 : 0);
    candidates.sort((a,b) => weight(b) - weight(a));
    const next = candidates[0]; result.push(next); dayCounts.set(next.day, (dayCounts.get(next.day) ?? 0) + 1); itemCounts.set(next.itemId, (itemCounts.get(next.itemId) ?? 0) + 1); kinds.add(next.kind);
    remaining = remaining.filter(q => q.id !== next.id);
  }
  return result;
}
function reshuffleValues<T>(items: readonly T[], key: (item: T) => string): T[] {
  const next = shuffle(items);
  if (new Set(items.map(key)).size > 1 && next.every((item, i) => key(item) === key(items[i]))) next.push(next.shift()!);
  return next;
}
function reorder(questions: Question[], previousIds?: string[]) {
  const pending = shuffle(questions); const ordered: Question[] = [];
  while (pending.length) { const i = Math.max(0,pending.findIndex(q => q.itemId !== ordered.at(-1)?.itemId)); ordered.push(pending.splice(i,1)[0]); }
  if (ordered.length > 1 && previousIds?.every((id,i) => ordered[i]?.id === id)) ordered.push(ordered.shift()!);
  return ordered.map(q => ({ ...q, choices: reshuffleValues(q.choices, x=>x), tiles: reshuffleValues(q.tiles, x=>x), pairs: reshuffleValues(q.pairs, x=>x.left) }));
}
export function createAttempt(course: Language, days: number[], length: number, options: { previous?: QuizAttempt; retake?: QuizAttempt; pool?: Question[]; scored?: boolean; reason?: string; lessonDay?: number } = {}): QuizAttempt {
  const original = options.retake;
  const raw = original ? original.definition.questions : mixedSelection(options.pool ?? poolFor(course,days),length,options.previous);
  const questions = reorder(raw, (original ?? options.previous)?.definition.questions.map(q=>q.id));
  if (!questions.length) throw new Error('There are no eligible questions for this selection.');
  // Independent right-column order is persisted in choices; refresh never re-randomises it.
  for (const q of questions) if(q.kind === 'match' && !q.choices.length) q.choices = shuffle(q.pairs.map(p=>p.right));
  return { id:uid(), definition:{id:original?.definition.id ?? uid(),course,days:[...(original?.definition.days ?? days)],version:original?.definition.version ?? CONTENT_VERSION,questions},
    scored:options.scored ?? true, reason:options.reason ?? 'Selected days', lessonDay:options.lessonDay, parentId:original ? original.parentId ?? original.id : undefined,
    startedAt:new Date().toISOString(),status:'active',index:0,responses:{},draft:'',score:0 };
}
export const resultOf = (a: QuizAttempt) => {
  const responses = Object.values(a.responses); const correct = responses.filter(r=>r.correct).length; const skipped = responses.filter(r=>r.skipped).length;
  const total = a.definition.questions.length;
  return {correct,skipped,incorrect:responses.length-correct-skipped,total,points:correct*10,percent:Math.round(correct/total*100),passed:correct >= Math.ceil(total*0.7)};
};
export const localDate = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
function tomorrow(days=1) { const d=new Date(); d.setDate(d.getDate()+days); return localDate(d); }
export const initialReview = (): ReviewItem => ({stage:0,due:tomorrow(),misses:0});
export function schedule(old: ReviewItem | undefined, correct: boolean, recall: boolean): ReviewItem {
  const current = old ?? initialReview();
  if (!correct) return {...current,stage:0,due:tomorrow(),misses:current.misses+1};
  if (!recall || current.lastRecall === localDate() || (old && old.due > localDate())) return current;
  const stage = Math.min(4,old ? current.stage+1 : 0);
  return {...current,stage,due:tomorrow([1,3,7,14,30][stage]),lastRecall:localDate()};
}
export function submitResponse(a: QuizAttempt, value: string, skipped=false): QuizAttempt {
  const q = a.definition.questions[a.index]; if(a.responses[q.id]) return a;
  const response: Response = {value,correct:!skipped && evaluate(q,value),skipped,at:new Date().toISOString()};
  return {...a,responses:{...a.responses,[q.id]:response},draft:value};
}
export function finishAttempt(progress: CourseProgress, attempt: QuizAttempt): CourseProgress {
  if (progress.active?.id !== attempt.id) return progress;
  if(progress.history.some(h=>h.id===attempt.id)) return {...progress,active:undefined};
  const completed: QuizAttempt = {...attempt,status:'completed',finishedAt:new Date().toISOString(),score:resultOf(attempt).points};
  const reviews={...progress.reviews};
  // Aggregate per skill before scheduling, so repeated questions cannot advance it multiple times.
  const grouped = new Map<string,{correct:boolean;recall:boolean}>();
  for(const q of attempt.definition.questions) {
    const answer=attempt.responses[q.id]; if(!answer) continue;
    const independent=['recall','gap','translate'].includes(q.kind);
    const ids=q.kind==='match'?q.required:[q.itemId];
    for (const id of ids) { const prior=grouped.get(id); grouped.set(id,{correct:(prior?.correct ?? true)&&answer.correct,recall:(prior?.recall ?? false)||independent}); }
  }
  for(const [id,r] of grouped) reviews[id]=schedule(reviews[id],r.correct, attempt.reason!=='Mistake practice' && r.recall);
  const next={...progress,reviews,active:undefined,history:attempt.scored?[completed,...progress.history]:progress.history};
  if(attempt.lessonDay) {
    const previous=next.lessons[attempt.lessonDay] ?? {step:3,complete:false};
    next.lessons={...next.lessons,[attempt.lessonDay]:{...previous,practiceDone:true,step:4}};
  }
  return next;
}
export function readableResponse(q: Question, value: string) {
  if(q.kind!=='match') return value;
  try{return Object.entries(JSON.parse(value)).map(([a,b])=>`${a} → ${b}`).join('; ');}catch{return value;}
}
