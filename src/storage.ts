import { z } from 'zod';
import type { LearnerProgress } from './types';
import { evaluate, normalise } from './engine';
export const STORAGE_KEY='maatadu.progress.v1';
const text=z.string().max(10000); const id=z.string().min(1).max(200); const language=z.enum(['kn','te']);
const phrase=z.object({en:text,kn:text,te:text,knr:text,ter:text});
const question=z.object({id,day:z.number().int().min(1).max(30),itemId:id,kind:z.enum(['choice','recall','build','gap','translate','match']),prompt:text,clue:text.optional(),answers:z.array(text).min(1).max(100),choices:z.array(text).max(100),pairs:z.array(z.object({left:text,right:text})).max(50),tiles:z.array(text).max(100),required:z.array(id).min(1).max(100),phrase,explanation:text}).superRefine((q,ctx)=>{
  if(q.kind==='choice' && (q.choices.length<2 || !q.answers.some(a=>q.choices.includes(a)))) ctx.addIssue({code:'custom',message:'Invalid answer options'});
  if(q.kind==='build' && (!q.tiles.length || !q.answers.some(a=>normalise(a).split(' ').sort().join(' ')===q.tiles.map(normalise).sort().join(' ')))) ctx.addIssue({code:'custom',message:'Invalid sentence tiles'});
  if(q.kind==='match' && (q.pairs.length<2 || new Set(q.pairs.map(p=>p.left)).size!==q.pairs.length || q.choices.length!==q.pairs.length || q.pairs.some(p=>!q.choices.includes(p.right)))) ctx.addIssue({code:'custom',message:'Invalid matching question'});
});
const response=z.object({value:text,correct:z.boolean(),skipped:z.boolean(),at:z.string().datetime()});
const attempt=z.object({id,definition:z.object({id,course:language,days:z.array(z.number().int().min(1).max(30)).min(1).max(30),version:id,questions:z.array(question).min(1).max(2000)}),scored:z.boolean(),reason:text,lessonDay:z.number().int().min(1).max(30).optional(),parentId:id.optional(),startedAt:z.string().datetime(),finishedAt:z.string().datetime().optional(),status:z.enum(['active','completed']),index:z.number().int().min(0),responses:z.record(id,response),draft:text,score:z.number().int().min(0)}).superRefine((a,ctx)=>{
  const ids=a.definition.questions.map(q=>q.id);
  if(new Set(ids).size!==ids.length || a.index>=ids.length || Object.keys(a.responses).some(k=>!ids.includes(k)))ctx.addIssue({code:'custom',message:'Invalid quiz question references'});
  for (const [key,r] of Object.entries(a.responses)) {
    const q=a.definition.questions.find(q=>q.id===key);
    if(q && r.correct !== (!r.skipped && evaluate(q,r.value))) ctx.addIssue({code:'custom',message:'Stored answer result is inconsistent'});
  }
  if(a.status==='active' && (ids.slice(0,a.index).some(id=>!a.responses[id]) || ids.slice(a.index+1).some(id=>a.responses[id]))) ctx.addIssue({code:'custom',message:'Invalid resume position'});
  const points=Object.values(a.responses).filter(r=>r.correct).length*10;
  if(a.status==='completed' && (!a.finishedAt || Object.keys(a.responses).length!==ids.length || a.score!==points))ctx.addIssue({code:'custom',message:'Incomplete quiz history'});
  if(Object.values(a.responses).some(r=>r.skipped&&r.correct))ctx.addIssue({code:'custom',message:'Invalid skipped answer'});
});
const lessonKey=z.string().regex(/^([1-9]|[12][0-9]|30)$/);
const progress=z.object({lessons:z.record(lessonKey,z.object({step:z.number().int().min(0).max(4),complete:z.boolean(),practiceDone:z.boolean().optional(),note:text.optional()})),saved:z.array(id),reviews:z.record(id,z.object({stage:z.number().int().min(0).max(4),due:z.string().regex(/^\d{4}-\d{2}-\d{2}$/),misses:z.number().int().min(0),lastRecall:z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional()})),active:attempt.optional(),history:z.array(attempt)});
const schema=z.object({schema:z.literal(1),name:z.string().max(60),onboarded:z.boolean(),course:language,courses:z.object({kn:progress,te:progress}),reports:z.array(z.object({id,course:language,questionId:id,answer:text,at:z.string().datetime()}))}).superRefine((s,ctx)=>{
  for(const lang of ['kn','te'] as const){const p=s.courses[lang];const ids=p.history.map(h=>h.id);
    if(new Set(ids).size!==ids.length || p.history.some(h=>h.status!=='completed'||!h.scored||h.definition.course!==lang) || (p.active && (p.active.status!=='active'||p.active.definition.course!==lang||ids.includes(p.active.id)))) ctx.addIssue({code:'custom',message:'Invalid course history'});
  }
});
export const emptyState=():LearnerProgress=>({schema:1,name:'',onboarded:false,course:'kn',courses:{kn:{lessons:{},saved:[],reviews:{},history:[]},te:{lessons:{},saved:[],reviews:{},history:[]}},reports:[]});
export function parseBackup(raw:string):LearnerProgress {
  if(raw.length>15_000_000) throw new Error('This backup is too large. Choose a Maatadu JSON backup under 15 MB.');
  try{return schema.parse(JSON.parse(raw)) as LearnerProgress;}catch{throw new Error('This is not a valid version 1 Maatadu backup. Nothing has been replaced.');}
}
export function loadState():{state:LearnerProgress;error:string} {
  try {const raw=localStorage.getItem(STORAGE_KEY);return {state:raw?parseBackup(raw):emptyState(),error:''};}
  catch{return {state:emptyState(),error:'Saved data could not be read. It has not been overwritten. Export the stored data or import a valid backup before continuing.'};}
}
export function saveState(state:LearnerProgress){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
export function downloadJson(value:unknown,filename:string){
  const blob=new Blob([typeof value==='string'?value:JSON.stringify(value,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
