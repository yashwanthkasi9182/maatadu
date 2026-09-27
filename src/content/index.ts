import { phrase, units } from './authored';
import { extraExamples } from './examples';
import type { Course, Language, Lesson, Phrase, Question, VocabularyItem } from '../types';
export const CONTENT_VERSION = '2026.09.26-draft.1';
export const courses: Record<Language, Course> = {
  kn: { id: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', familiar: 'te' },
  te: { id: 'te', name: 'Telugu', native: 'తెలుగు', familiar: 'kn' },
};
export const roman = (p: Phrase, course: Language) => course === 'kn' ? p.knr : p.ter;
export const lines = (s: string) => s.trim().split('\n').map(phrase);
const wordExamples: Record<string, string> = {
  '2-0': 'I am well.|ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ.|naanu chennaagiddene|నేను బాగున్నాను.|nenu baagunnaanu',
  '2-1': 'How are you?|ನೀವು ಚೆನ್ನಾಗಿದ್ದೀರಾ?|neevu chennaagiddeeraa|మీరు బాగున్నారా?|meeru baagunnaaraa',
  '2-2': 'My name is Ravi.|ನನ್ನ ಹೆಸರು ರವಿ.|nanna hesaru ravi|నా పేరు రవి.|naa peru ravi',
  '2-3': 'What is your name?|ನಿಮ್ಮ ಹೆಸರು ಏನು?|nimma hesaru enu|మీ పేరు ఏమిటి?|mee peru emiti',
  '2-4': 'We are well.|ನಾವು ಚೆನ್ನಾಗಿದ್ದೇವೆ.|naavu chennaagiddeve|మేము బాగున్నాము.|memu baagunnaamu',
  '2-5': 'How are you? (casual)|ನೀನು ಚೆನ್ನಾಗಿದ್ದೀಯಾ?|neenu chennaagiddeeyaa|నువ్వు బాగున్నావా?|nuvvu baagunnaavaa',
  '4-0': 'What is this?|ಇದು ಏನು?|idu enu|ఇది ఏమిటి?|idi emiti',
  '4-1': 'Who are you?|ನೀವು ಯಾರು?|neevu yaaru|మీరు ఎవరు?|meeru evaru',
  '4-2': 'Where is the book?|ಪುಸ್ತಕ ಎಲ್ಲಿದೆ?|pustaka ellide|పుస్తకం ఎక్కడ ఉంది?|pustakam ekkada undi',
  '4-3': 'When shall we meet?|ಯಾವಾಗ ಸಿಗೋಣ?|yaavaaga sigona|ఎప్పుడు కలుద్దాం?|eppudu kaluddaam',
  '4-4': 'Why not?|ಯಾಕೆ ಬೇಡ?|yaake beda|ఎందుకు వద్దు?|enduku vaddu',
  '4-5': 'How are you?|ನೀವು ಹೇಗಿದ್ದೀರಿ?|neevu hegiddeeri|మీరు ఎలా ఉన్నారు?|meeru elaa unnaaru',
  '9-0': 'I like coffee.|ನನಗೆ ಕಾಫಿ ಇಷ್ಟ.|nanage kaafi ishta|నాకు కాఫీ ఇష్టం.|naaku kaafee ishtam',
  '9-1': 'I want water.|ನನಗೆ ನೀರು ಬೇಕು.|nanage neeru beku|నాకు నీళ్లు కావాలి.|naaku neellu kaavaali',
  '9-2': 'I do not want coffee.|ನನಗೆ ಕಾಫಿ ಬೇಡ.|nanage kaafi beda|నాకు కాఫీ వద్దు.|naaku kaafee vaddu',
  '9-3': 'I want a little water.|ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಬೇಕು.|nanage swalpa neeru beku|నాకు కొంచెం నీళ్లు కావాలి.|naaku konchem neellu kaavaali',
  '9-4': 'Do you want more?|ಇನ್ನೂ ಬೇಕಾ?|innoo bekaa|ఇంకా కావాలా?|inkaa kaavaalaa',
  '9-5': 'That is enough.|ಅಷ್ಟು ಸಾಕು.|ashtu saaku|అంతే చాలు.|ante chaalu',
};
const dialogueAnswers: Record<number, [string, string]> = {
  1: ['I am well.|ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ.|naanu chennaagiddene|నేను బాగున్నాను.|nenu baagunnaanu', 'See you again.|ಮತ್ತೆ ಸಿಗೋಣ.|matte sigona|మళ్లీ కలుద్దాం.|malli kaluddaam'],
  2: ['My name is Ravi.|ನನ್ನ ಹೆಸರು ರವಿ.|nanna hesaru ravi|నా పేరు రవి.|naa peru ravi', 'My name is Anu.|ನನ್ನ ಹೆಸರು ಅನು.|nanna hesaru anu|నా పేరు అను.|naa peru anu'],
  3: ['This is a book.|ಇದು ಪುಸ್ತಕ.|idu pustaka|ఇది పుస్తకం.|idi pustakam', 'That is a chair.|ಅದು ಕುರ್ಚಿ.|adu kurchi|అది కుర్చీ.|adi kurchee'],
  4: ['This is a book.|ಇದು ಪುಸ್ತಕ.|idu pustaka|ఇది పుస్తకం.|idi pustakam', 'The book is here.|ಪುಸ್ತಕ ಇಲ್ಲಿದೆ.|pustaka illide|పుస్తకం ఇక్కడ ఉంది.|pustakam ikkada undi'],
  6: ['I want a mango.|ನನಗೆ ಮಾವಿನ ಹಣ್ಣು ಬೇಕು.|nanage maavina hannu beku|నాకు మామిడి పండు కావాలి.|naaku maamidi pandu kaavaali','I do not want grapes.|ನನಗೆ ದ್ರಾಕ್ಷಿ ಬೇಡ.|nanage draakshi beda|నాకు ద్రాక్ష వద్దు.|naaku draaksha vaddu'],
  7: ['There is curd.|ಮೊಸರು ಇದೆ.|mosaru ide|పెరుగు ఉంది.|perugu undi','There is milk.|ಹಾಲು ಇದೆ.|haalu ide|పాలు ఉన్నాయి.|paalu unnaayi'],
  8: ['Two books.|ಎರಡು ಪುಸ್ತಕಗಳು.|eradu pustakagalu|రెండు పుస్తకాలు.|rendu pustakaalu','Two.|ಎರಡು.|eradu|రెండు.|rendu'],
  9: ['I like coffee.|ನನಗೆ ಕಾಫಿ ಇಷ್ಟ.|nanage kaafi ishta|నాకు కాఫీ ఇష్టం.|naaku kaafee ishtam','That is enough.|ಅಷ್ಟು ಸಾಕು.|ashtu saaku|అంతే చాలు.|ante chaalu'],
  11: ['This is my mother.|ಇವರು ನನ್ನ ಅಮ್ಮ.|ivaru nanna amma|ఈమె మా అమ్మ.|eeme maa amma','This is my father.|ಇವರು ನನ್ನ ಅಪ್ಪ.|ivaru nanna appa|ఈయన మా నాన్న.|eeyana maa naanna'],
  12: ['This is my house.|ಇದು ನನ್ನ ಮನೆ.|idu nanna mane|ఇది నా ఇల్లు.|idi naa illu','My room is here.|ನನ್ನ ಕೋಣೆ ಇಲ್ಲಿದೆ.|nanna kone illide|నా గది ఇక్కడ ఉంది.|naa gadi ikkada undi'],
  13: ['This is a new book.|ಇದು ಹೊಸ ಪುಸ್ತಕ.|idu hosa pustaka|ఇది కొత్త పుస్తకం.|idi kotta pustakam','The room is small.|ಕೋಣೆ ಚಿಕ್ಕದಾಗಿದೆ.|kone chikkadaagide|గది చిన్నగా ఉంది.|gadi chinnagaa undi'],
  14: ['The book is on the table.|ಪುಸ್ತಕ ಮೇಜಿನ ಮೇಲೆ ಇದೆ.|pustaka mejina mele ide|పుస్తకం బల్ల మీద ఉంది.|pustakam balla meeda undi','The bag is below the table.|ಚೀಲ ಮೇಜಿನ ಕೆಳಗೆ ಇದೆ.|cheela mejina kelage ide|సంచి బల్ల కింద ఉంది.|sanchi balla kinda undi'],
  16: ['Please sit here.|ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ.|dayavittu illi kulithukolli|దయచేసి ఇక్కడ కూర్చోండి.|dayachesi ikkada koorchondi','Please drink water.|ದಯವಿಟ್ಟು ನೀರು ಕುಡಿಯಿರಿ.|dayavittu neeru kudiyiri|దయచేసి నీళ్లు తాగండి.|dayachesi neellu taagandi'],
  17: ['I read every day.|ನಾನು ಪ್ರತಿದಿನ ಓದುತ್ತೇನೆ.|naanu pratidina oduttene|నేను ప్రతిరోజూ చదువుతాను.|nenu pratirojoo chaduvutaanu','I drink coffee in the morning.|ನಾನು ಬೆಳಿಗ್ಗೆ ಕಾಫಿ ಕುಡಿಯುತ್ತೇನೆ.|naanu beligge kaafi kudiyuttene|నేను ఉదయం కాఫీ తాగుతాను.|nenu udayam kaafee taagutaanu'],
  18: ['This is not my book.|ಇದು ನನ್ನ ಪುಸ್ತಕ ಅಲ್ಲ.|idu nanna pustaka alla|ఇది నా పుస్తకం కాదు.|idi naa pustakam kaadu','I do not want coffee now.|ನನಗೆ ಈಗ ಕಾಫಿ ಬೇಡ.|nanage eega kaafi beda|నాకు ఇప్పుడు కాఫీ వద్దు.|naaku ippudu kaafee vaddu'],
  19: ['I am at home.|ನಾನು ಮನೆಯಲ್ಲಿದ್ದೇನೆ.|naanu maneyalliddene|నేను ఇంట్లో ఉన్నాను.|nenu intlo unnaanu','I work at home.|ನಾನು ಮನೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತೇನೆ.|naanu maneyalli kelasa maaduttene|నేను ఇంట్లో పని చేస్తాను.|nenu intlo pani chestaanu'],
  21: ['Let us meet tomorrow.|ನಾಳೆ ಸಿಗೋಣ.|naale sigona|రేపు కలుద్దాం.|repu kaluddaam','Let us meet at six.|ಆರು ಗಂಟೆಗೆ ಸಿಗೋಣ.|aaru gantege sigona|ఆరు గంటలకు కలుద్దాం.|aaru gantalaku kaluddaam'],
  22: ['Please give one mango.|ಒಂದು ಮಾವಿನ ಹಣ್ಣು ಕೊಡಿ.|ondu maavina hannu kodi|ఒక మామిడి పండు ఇవ్వండి.|oka maamidi pandu ivvandi','Please give the bill.|ಬಿಲ್ ಕೊಡಿ.|bil kodi|బిల్లు ఇవ్వండి.|billu ivvandi'],
  23: ['Go straight.|ನೇರವಾಗಿ ಹೋಗಿ.|neravaagi hogi|నేరుగా వెళ్లండి.|nerugaa vellandi','Turn right.|ಬಲಕ್ಕೆ ತಿರುಗಿ.|balakke tirugi|కుడి వైపు తిరగండి.|kudi vaipu tiragandi'],
  24: ['Please help.|ದಯವಿಟ್ಟು ಸಹಾಯ ಮಾಡಿ.|dayavittu sahaaya maadi|దయచేసి సహాయం చేయండి.|dayachesi sahaayam cheyandi','Please say it again.|ದಯವಿಟ್ಟು ಮತ್ತೆ ಹೇಳಿ.|dayavittu matte heli|దయచేసి మళ్లీ చెప్పండి.|dayachesi malli cheppandi'],
  26: ['I am hungry.|ನನಗೆ ಹಸಿವಾಗಿದೆ.|nanage hasivaagide|నాకు ఆకలిగా ఉంది.|naaku aakaligaa undi','I am happy.|ನನಗೆ ಸಂತೋಷವಾಗಿದೆ.|nanage santoshavaagide|నాకు సంతోషంగా ఉంది.|naaku santoshangaa undi'],
  27: ['I came yesterday.|ನಾನು ನಿನ್ನೆ ಬಂದೆ.|naanu ninne bande|నేను నిన్న వచ్చాను.|nenu ninna vachchaanu','I ate rice.|ನಾನು ಅನ್ನ ತಿಂದೆ.|naanu anna tinde|నేను అన్నం తిన్నాను.|nenu annam tinnaanu'],
  28: ['I will come tomorrow.|ನಾನು ನಾಳೆ ಬರುತ್ತೇನೆ.|naanu naale baruttene|నేను రేపు వస్తాను.|nenu repu vastaanu','Let us go together.|ಒಟ್ಟಿಗೆ ಹೋಗೋಣ.|ottige hogona|కలిసి వెళ్దాం.|kalisi veldaam'],
  29: ['I like coffee and tea.|ನನಗೆ ಕಾಫಿ ಮತ್ತು ಚಹಾ ಇಷ್ಟ.|nanage kaafi mattu chahaa ishta|నాకు కాఫీ మరియు టీ ఇష్టం.|naaku kaafee mariyu tee ishtam','I will also come.|ನಾನೂ ಬರುತ್ತೇನೆ.|naanoo baruttene|నేను కూడా వస్తాను.|nenu koodaa vastaanu'],
};
const sourceLinks = ['https://www.ciil.org/primers_book', 'https://www.ciil.org/srlc'];
export const lessons: Lesson[] = [];
for (let day = 1; day <= 30; day++) {
  const u = units.find(x => x.day === day);
  if (u) {
    const examples = lines(u.examples);
    const words = lines(u.words).map((w, i): VocabularyItem => {
      // Examples are teaching material, not unseen distractors. Explicit examples override noun frames.
      const matched = examples.find(e => e.kn.includes(w.kn) && e.te.includes(w.te));
      const authoredExample = extraExamples[`${day}-${i}`] ?? wordExamples[`${day}-${i}`];
      const example = authoredExample ? phrase(authoredExample) : matched ?? (u.noun ? {
        en: `This is ${/^[aeiou]/i.test(w.en) ? "an" : "a"} ${w.en.toLowerCase()}.`, kn: `ಇದು ${w.kn}.`, knr: `idu ${w.knr}`, te: `ఇది ${w.te}.`, ter: `idi ${w.ter}`,
      } : w);
      return { ...w, id: `d${day}-w${i}`, day, example };
    });
    const qs = lines(u.questions); const answers = dialogueAnswers[day].map(phrase);
    lessons.push({ id: `day-${day}`, day, title: u.title, category: u.category, objective: u.objective,
      reviewDays: [], words, grammar: { id: `d${day}-grammar`, title: u.pattern, notes: { kn: u.kn, te: u.te }, examples },
      dialogue: [qs[0], answers[0], qs[1], answers[1]], prompt: u.prompt, check: u.check, status: 'draft', sources: sourceLinks });
  } else {
    const reviewed = lessons.filter(l => l.day >= day - 4 && l.day < day);
    lessons.push({ id: `day-${day}`, day, title: ['Your first conversation','A table for two','Make yourself at home','Tell me about your day','Out in the world','Look how far you came'][day / 5 - 1],
      category: reviewed[0].category, objective: 'Bring the last four lessons together in a short conversation.', reviewDays: reviewed.map(l => l.day), words: reviewed.flatMap(l => l.words),
      grammar: { id: `d${day}-review`, title: 'Bring it together', notes: { kn: 'Revisit the four patterns below. Use the complete examples first, then change one familiar word.', te: 'Revisit the four patterns below. Use the complete examples first, then change one familiar word.' }, examples: reviewed.map(l => l.grammar.examples[0]) },
      dialogue: reviewed[reviewed.length - 1].dialogue, prompt: `Together: ${reviewed.map(l => l.prompt).join(' ')}`, check: 'Try a short conversation without reading. Then compare with the examples and switch roles.', status: 'draft', sources: sourceLinks });
  }
}
export const allWords = lessons.filter(l => !l.reviewDays.length).flatMap(l => l.words);
export const expandDays = (days: number[]) => [...new Set(days.flatMap(day => lessons[day - 1]?.reviewDays.length ? lessons[day - 1].reviewDays : [day]))];
export const lessonItems = (days: number[]) => new Set(expandDays(days).flatMap(day => {
  const l = lessons[day - 1]; return [...l.words.map(w => w.id), l.grammar.id];
}));
function questionsFor(l: Lesson, course: Language): Question[] {
  const name = courses[course].name; const familiar = courses[course].familiar;
  const base = (id: string, itemId: string, p: Phrase): Question => ({ id: `${course}-${l.day}-${id}`, day: l.day, itemId, kind: 'recall', prompt: '', answers: [roman(p, course), p[course]], choices: [], pairs: [], tiles: [], required: [itemId], phrase: p, explanation: `${p.en} · ${l.grammar.notes[course]}` });
  const questions: Question[] = [];
  l.words.forEach((w, i) => {
    const distractors = [1, 2, 3].map(offset => l.words[(i + offset) % l.words.length]);
    questions.push({ ...base(`choice-${i}`, w.id, w), kind: 'choice', prompt: `Which means “${w.en.toLowerCase()}”?`, clue: w[familiar], answers: [roman(w, course)], choices: [w, ...distractors].map(x => roman(x, course)), required: [w.id, ...distractors.map(x => x.id)], explanation: `“${roman(w, course)}” means “${w.en.toLowerCase()}”. ${w.example.en}` });
    questions.push({ ...base(`recall-${i}`, w.id, w), prompt: `Write “${w.en.toLowerCase()}” in ${name}.`, clue: w[familiar], answers: [roman(w, course), w[course], ...(w.variants?.[course] ?? [])], explanation: `Use “${roman(w, course)}” for “${w.en.toLowerCase()}”.` });
  });
  l.grammar.examples.forEach((p, i) => {
    const words = roman(p, course).split(' '); const scripts = p[course].replace(/[.!?。]/g, '').split(' ');
    const common = base(`build-${i}`, l.grammar.id, p);
    questions.push({ ...common, kind: 'build', prompt: `Build: “${p.en}”`, clue: p[familiar], tiles: words });
    questions.push({ ...common, id: `${course}-${l.day}-gap-${i}`, kind: 'gap', prompt: [...words.slice(0, -1), '_____'].join(' '), clue: p.en, answers: [words.at(-1)!, scripts.at(-1)!] });
    questions.push({ ...common, id: `${course}-${l.day}-translate-${i}`, kind: 'translate', prompt: `Translate using this lesson’s pattern: “${p.en}”`, clue: p[familiar] });
  });
  questions.push({ ...base('match', l.words[0].id, l.words[0]), kind: 'match', prompt: 'Match each word to its meaning.', pairs: l.words.slice(0,4).map(w => ({left: roman(w,course),right:w.en})), required:l.words.slice(0,4).map(w=>w.id), explanation:'Compare each pair with the lesson’s word cards.' });
  return questions;
}
export const questionBank: Record<Language, Question[]> = {
  kn: lessons.filter(l => !l.reviewDays.length).flatMap(l => questionsFor(l, 'kn')),
  te: lessons.filter(l => !l.reviewDays.length).flatMap(l => questionsFor(l, 'te')),
};
export function poolFor(course: Language, days: number[]) {
  const allowed = lessonItems(days); const sources = new Set(expandDays(days));
  return questionBank[course].filter(q => sources.has(q.day) && q.required.every(id => allowed.has(id)));
}
