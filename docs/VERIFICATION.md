# Manual verification guide

**Status: NOT RUN.** No installation, build, automated test, browser test, or fluent-speaker review is represented as passed. Use this checklist for your own verification. Audio, accounts, sync, and service-worker/offline installation are intentionally absent.

## Start

1. Install Node.js 22 LTS (or a compatible runtime for the selected Vite release).
2. In the project directory run `npm install`, then `npm run dev`.
3. Open the local address printed by Vite. To use a phone on the same network, open the network address printed by the dev server; allow the server through your local firewall if prompted.
4. `npm run build` performs TypeScript checking and a production build. Run `npm run preview` to inspect the built app. These are commands for you to execute.
5. Pick Kannada and enter a name. Complete Day 1; repeat the checks in Telugu.

## Display and content

- [ ] Kannada cards show Kannada script, Kannada Roman, Telugu equivalent, and English meaning.
- [ ] Telugu cards show Telugu script, Telugu Roman, Kannada equivalent, and English meaning.
- [ ] Grammar examples, dialogues, vocabulary examples, library entries, and submitted-answer feedback preserve this format.
- [ ] Quiz clues do not display the target answer before submission.
- [ ] Review all 30 lesson screens in each course using `CONTENT_REVIEW.md`.
- [ ] Each teaching day has six entries, one explained pattern, three examples, four dialogue lines, a partner task and a 22-question pool.
- [ ] Day 5, 10, 15, 20, 25 and 30 consolidate previous material without duplicating question IDs.
- [ ] Roman spellings and native-language translations are natural and accurate; content stays draft until reviewed.

## Lesson flow

- [ ] Start a lesson, advance, refresh, and return through the course map: the saved stage appears.
- [ ] Save a word and locate it under Words → Saved.
- [ ] Finish daily practice, continue to the partner activity, write a note, and complete the lesson.
- [ ] Trying the partner activity first does not allow completion until daily practice has been finished.
- [ ] Revisit a completed lesson without erasing completion or notes.
- [ ] Change learning language and confirm progress, saved words, schedules, points and history remain separate.

## Selected-day boundaries

- [ ] Choose Day 6 only: pool is 22 questions and covers only that day’s words and model sentences.
- [ ] Choose Days 6 and 8: pool is 44; questions do not include unrelated Day 7 vocabulary exercises.
- [ ] Choose Day 10: pool is 88 from Days 6–9. Also selecting Day 6 does not increase the pool.
- [ ] Choose all days: there are 528 unique questions per course.
- [ ] Select no days: starting is disabled. Custom reduced pools never borrow other-day questions.
- [ ] Select a single teaching day and ten questions: confirm item coverage and at least three exercise types.
- [ ] Across selected days, question counts should be as balanced as the eligible pools permit.

## Answers, randomness and resume

- [ ] Try all six exercise types. Matching requires all four pairs to be correct.
- [ ] Choose an answer and refresh before submitting: the draft, options and question order persist.
- [ ] Submit then refresh: the answer remains locked and feedback is visible.
- [ ] Save & exit, close/reopen the browser, and resume at the correct question.
- [ ] Sentence tiles with repeated words use each token once; undoing restores the token.
- [ ] Case, extra whitespace and harmless punctuation are accepted; target script is accepted for typed questions.
- [ ] Unauthorised synonyms are not fuzzily accepted. The answer-report action records an exportable report locally.
- [ ] Starting another quiz asks before discarding the current one. Discarding earns no points and adds no history.

## Scoring and history

- [ ] In a ten-question quiz, answer seven correctly: 70 points, 70%, passed.
- [ ] Answer six correctly: 60 points, 60%, failed.
- [ ] For 22 questions, 15 correct fails and 16 correct passes; the decision uses ceil(22 × 0.7), not a rounded displayed percentage.
- [ ] Skipped answers earn zero, count as skipped, and are not also counted as incorrect.
- [ ] A completed quiz appears once in history. Refreshing results does not duplicate points or history.
- [ ] Progress statistics equal the sum/count of completed scored attempts only.
- [ ] Open history and expand every answer, including matching and skipped questions.
- [ ] Retake a completed quiz: same question IDs and content, different order, newly mixed options/tiles/columns. Complete it to add a separate score and retake badge.
- [ ] New quiz from these days selects fresh questions when the pool permits; it does not promise different questions when all available questions are selected.
- [ ] Change content version in a development copy: old history retains snapshots, displays an older-content notice, and can still be retaken.
- [ ] Practise mistakes: these retries add no points and do not affect quiz pass/fail totals.

## Revision

- [ ] Studied vocabulary and patterns are initially due tomorrow.
- [ ] A failed item enters tomorrow’s review and appears under difficult items.
- [ ] Independent recall on a due item progresses through 1, 3, 7, 14, 30 day intervals.
- [ ] Repeating a successful recall on the same day does not advance it again.
- [ ] Recognition, matching, sentence tiles, revealed warm-up answers, and immediate mistake retries do not advance independent recall.
- [ ] Several questions for one item in an attempt schedule it once; an error prevents that attempt advancing the item.
- [ ] Due-review and difficult-item sessions are unscored and stay out of quiz history.

## Storage and recovery

- [ ] Export a backup, reset all local data, import it, and recover both courses, active quiz, history, notes, saved words and reports.
- [ ] Invalid JSON, wrong schema version, invalid course history and oversized imports fail without replacing existing state.
- [ ] Cancel an import or reset confirmation: data is unchanged.
- [ ] Simulate unavailable or full local storage: warning persists; current in-memory work remains exportable.
- [ ] Start with corrupt stored JSON: app does not overwrite it, and recovery/export/reset actions are available.
- [ ] Change progress in another tab: the stale tab stops saving and offers export/reload rather than silently overwriting it.
- [ ] Browser clearing removes data as disclosed. No backend or cross-device sync is implied.

## Responsive and accessible UI

- [ ] Inspect at 360px, 390px, tablet and desktop widths; no horizontal page overflow.
- [ ] Confirm bottom navigation on phones and side navigation on desktop.
- [ ] Use keyboard only: course switch, word filters, lesson stages, each quiz type, results and settings.
- [ ] Focus remains visible, form fields have labels, feedback is readable without colour, and touch controls are comfortable.
- [ ] Increase text size to 200%; script is readable and controls remain reachable.
- [ ] Enable reduced motion and check no essential state depends on animation.
- [ ] Block Google Fonts: system font fallbacks remain usable. Font downloads are optional; no learner progress is sent to them.
