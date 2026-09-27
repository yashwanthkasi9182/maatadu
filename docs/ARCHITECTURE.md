# Implementation notes

## Flow

`authored units → bilingual lessons → course-specific question bank → eligible selected-day pool → balanced quiz snapshot → persistent attempt → completed history → derived statistics`

The app ships content rather than requesting it from a server. Language direction chooses target script/transliteration and the opposite language as familiar meaning. The two courses share themes and semantic pairs but keep separate grammar notes and learner data.

`Question.required` lists the IDs needed to answer a question, including distractors. The selected-day pool checks all of them. Model sentences are taught as a grammar item; sentence-building, gaps and constrained translation depend on that explicitly taught item. Consolidation days expand to the preceding four source days, with deduplication.

Selection balances source days, prioritises a third exercise type when possible, then uncovered items, and finally questions not seen in the preceding attempt. Ordering avoids consecutive instances of the same item when possible. Retakes preserve all question IDs and snapshots; the order must differ from the source attempt for sets with more than one question. Choices, tiles and matching columns are independently mixed and persisted.

## Persistence

Storage uses one versioned snapshot under `maatadu.progress.v1`. Only one active attempt exists per course. Draft answers and submitted feedback are saved along with the displayed orders. A completed scored attempt is moved into history and the active attempt is removed in the same state update. Duplicate finalisation checks both active attempt identity and historical IDs. Scores shown on Progress are derived from historical answers.

Zod checks imported structure, course ownership, unique question/attempt IDs, resume position, submitted-answer correctness, completion, score consistency, matching definitions and tile composition. Imports validate before confirmation and replace only after local storage accepts the data. Corrupt stored data is not silently overwritten. Storage failures preserve in-memory state for export. A storage event from another tab locks writes until reload or explicit recovery.

There is no background sync or cryptographic tamper protection. Points are a private learning convenience, not a competitive or trusted external score.

## Scheduling

Newly studied items are due the next day. Independent recall types are typed word recall, gap fill and constrained translation. Recognition, matching and sentence tiles do not advance recall intervals. Outcomes aggregate per skill per attempt; one failure prevents that attempt advancing the skill. Same-day recalls and early practice do not repeatedly increase the interval. Immediate mistake sessions cannot promote a skill, but mistakes still make it due tomorrow.

Unscored reviews are not included in quiz history or points. Difficult-items practice includes skills with prior recorded mistakes, even after subsequent improvement; it is a historical weak-spot list. Personal notes are self-assessed.

## Future changes

Audio can add optional phrase-level assets and listening question kinds without changing existing question IDs. Account sync would need conflict handling and a server persistence adapter. Neither exists in this version. Before changing schema version, write a migration; do not remove version validation or silently replace stored data. Archived quizzes intentionally retain old snapshots; fresh quizzes use the latest bundled content.

## Validation status

Implementation only. No typecheck, build, automated tests, browser rendering checks, or linguistic sign-off have been executed. See the manual verification guide for the intended acceptance scenarios.
