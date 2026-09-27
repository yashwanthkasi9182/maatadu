# Maatadu · A little closer

A mobile-first Kannada ↔ Telugu learning app for two people learning each other’s language. Thirty daily lessons per course, reciprocal native-language support, mixed practice, day selection, points, history, and reshuffled retakes. All learner data stays in browser local storage.

## Run locally

Use Node.js 22 LTS and npm.

```sh
npm install
npm run dev
```

Open the URL printed by Vite. The development server listens on your local network so you can use a phone on the same Wi-Fi. Different hostnames, browsers and devices have separate local storage; export/import to transfer your progress.

```sh
npm run build
npm run preview
```

The build command performs TypeScript checking and creates `dist/`. These commands are provided for you to run. **Dependencies have not been installed; build, tests and browser verification have not been run**, per the requested handoff. The app has not been deployed.

## What is included

- Kannada and Telugu courses: 24 teaching days and six consolidation days each.
- 144 core entries per course, with target script, Roman reading aid, familiar-language equivalent, English meaning and examples.
- Separate language-specific grammar explanations, sentence examples, short dialogues and personal tasks.
- Six quiz formats, 528 compiled question variants per course, selected-day filtering and balanced selection.
- Ten points per correct question; pass at 70%; skipped/incorrect answers earn zero.
- Local quiz resume, question snapshots, completed history, new quizzes and same-set reshuffled retakes.
- Unscored due reviews and mistake practice, saved words, lesson progress and independent course statistics.
- Versioned storage, validated backup import/export, reset confirmation and visible storage-failure recovery.
- Responsive warm-neutral/teal UI with keyboard controls and reduced-motion support.

## Content status

**All language content is an authored draft awaiting fluent-speaker review.** No linguistic accuracy or test success is claimed. Roman text is a simplified reading aid; audio and pronunciation scoring are deferred. Both native equivalents are available in the lessons, but quiz clues hide answer-revealing target text until submission.

The 22 quiz variants per teaching day are deterministic recipes built from authored entries and model sentences. No AI API or dynamic content service is used. A grammar example is taught as a complete phrase within its own lesson; selected-day eligibility includes those explicitly taught phrases.

## Project map

- `src/App.tsx`: navigation and learning flows.
- `src/components/`: shared cards, quiz interaction and results.
- `src/content/`: original bilingual curriculum, examples and question-bank compilation.
- `src/engine.ts`: selection, randomisation, evaluation, scoring and revision scheduling.
- `src/storage.ts`: versioned persistence, backup validation and export.
- `src/styles.css`: responsive design system and layout.
- `docs/VERIFICATION.md`: manual acceptance checklist.
- `docs/CONTENT_AUTHORING.md`: content conventions, IDs, provenance and correction workflow.
- `docs/CONTENT_REVIEW.md`: course review/sign-off worksheet.

## Local data and privacy

Storage key: `maatadu.progress.v1`. There is no login, server database, analytics, or automatic sync. Browser storage is finite; the app warns if saving fails and offers export without silently deleting history. Backups contain learner names, notes, submitted answers and history; keep them somewhere you trust.

Google Fonts is the only optional runtime external request. Remove the `@import` at the top of the stylesheet for a system-font-only build. There is no service worker; offline installation is not included. Storage isolation depends on origin, including hostname and port.

## Intentional boundaries

No audio, speech recognition, unrestricted AI tutor, accounts, shared partner dashboard, cross-device sync, leaderboard, or production hosting. Personal sentences use a model answer and self-check instead of automatic grammar grading. Points measure activity, not fluency.
