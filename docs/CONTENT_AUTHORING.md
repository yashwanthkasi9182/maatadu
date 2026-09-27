# Authoring and correcting course content

All current content is **draft**, independently unverified for both languages. No generated sentence has been certified by a fluent reviewer. Thirty days is an introductory course, not a promise of fluency.

## Where to edit

- `src/content/authored.ts`: 24 teaching units. Each has six original entries, separate Kannada/Telugu grammar notes, three model sentences, conversation questions, and a personal task. Review days are assembled from the previous four teaching days.
- `src/content/examples.ts`: contextual vocabulary examples. `src/content/index.ts` also holds first-week examples and the conversation answer pairs.
- `src/content/index.ts`: course assembly and fixed exercise recipes. `src/types.ts`: content and progress interfaces.

Each phrase row uses `English|Kannada script|Kannada Roman|Telugu script|Telugu Roman`. Do not put `|` inside a field. The shared semantic inventory aligns themes, while target scripts, transliterations, grammar explanations, and answer forms are independently authored.

Vocabulary IDs are `d<day>-w<zero-based index>`. Grammar IDs are `d<day>-grammar`. Questions use `<course>-<day>-<exercise>-<index>`. Do not reuse or reorder existing IDs to represent different meanings. Add a new ID when the meaning changes. Increment `CONTENT_VERSION` after editing published content.

## Review workflow

1. Open a lesson in each course. Compare the target language, Roman pronunciation aid, English meaning, and familiar-language equivalent independently.
2. Check respectful versus casual usage, agreement, idiomatic translation, dialogue question/answer fit, and whether inflected forms are explained. Keep regional variants labelled.
3. Review every vocabulary example, including optional examples. A one-word greeting is an acceptable utterance; a pronoun needs context.
4. Review the question bank and accepted responses. A grammar example is explicitly taught as a whole phrase in the selected lesson; its words are not silently assumed known. Add a gloss where a learner needs more help.
5. Add legitimate Roman alternatives to `VocabularyItem.variants`. Do not accept English translations as Roman answers or use fuzzy string matching. Sentence-order alternatives belong in the question’s authored `answers`.
6. For gap questions, the final Roman token is omitted. The answer list contains the Roman final token and corresponding script token. Check alignment whenever changing a sentence.
7. Review distractors for ambiguity. Multiple-choice distractors come from the same day; options are target-language Roman forms. Matching questions use four same-day pairs.
8. Record reviewer name, date, course, issues and fixes in `CONTENT_REVIEW.md`. Set the lesson’s status to reviewed only for an actual completed review; if reviews differ by language, split status into a per-course field before using it in the UI.

The current application deliberately displays a draft notice. Canonical answers and script equivalents are authored; additional accepted variants must be reviewed before broadening answer acceptance. “I think my answer is valid” records a local report for export from Preferences.

## Transliteration conventions

Roman text is a practical reading aid, not a phonetic transcription. Doubled vowels generally distinguish length (`aa`, `ee`, `oo`); `ch`, `sh`, and `th` are conventional digraphs. Retroflex and dental consonants are not fully distinguished in this simplified system. Do not assume Roman text alone teaches accurate pronunciation. Audio is deferred.

Keep each word’s spelling consistent across cards, examples, accepted answers, and tiles. Names can be substituted in personal practice; scored translation questions expect the displayed lesson pattern.

## Content provenance and references

All lesson wording and sentence pairs in this repository are original authored drafts. These institutional reference entry points were located for the review workflow; they do **not** substantiate a claim that each phrase has been checked:

- [CIIL regional language centre](https://www.ciil.org/srlc): Kannada and Telugu instructional-programme reference.
- [CIIL primer catalogue](https://www.ciil.org/primers_book): script and early-literacy reference materials.
- [CIIL Telugu primer](https://www.ciil.org/primers/Telugu_Primer.pdf): Telugu script-review resource.

Record the specific dictionary, grammar, page, or fluent-speaker judgment used for each correction. Generic source links are reference leads, not sentence-level citations or endorsements. No reference course has been copied.

## Content-to-quiz boundary

Selecting Day 5 explicitly includes Days 1–4; similarly for every fifth day. Selecting Day 4 alone includes its six words and taught grammar examples, not the entire earlier vocabulary bank. Questions require IDs from the permitted content set, and recognition distractor IDs are included in those requirements. The shared grammar item comprises the three fully displayed model sentences, which makes their complete sentence exercises eligible for the day that teaches them.

There are 22 deterministic question variants per teaching day per course: six recognition, six word recall, three sentence building, three gap fill, three constrained translation, and one matching question. These are compiled from the authored facts; no runtime AI or network-generated exercises are used. A consolidation day reuses its source questions rather than duplicating IDs.
