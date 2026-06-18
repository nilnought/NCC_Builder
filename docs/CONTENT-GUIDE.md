# Content guide — adding and editing questions, phases, photos and terms

This file is for content work. You never need to touch `js/` or `css/` for any of it.

## Golden rules

1. **Quote the real clause.** Every question's `source.quote` must be the actual NCC
   wording, copied from the PDF, not a paraphrase. The game's credibility rests on
   players being able to tap "Show the actual NCC clause" and see the real thing.
2. **Plain English everywhere else.** Question text, feedback and explanations are
   written for someone who has never set foot on a building site.
3. **Wrap jargon.** Any trade term in question text, feedback or explanations gets
   `[[double brackets]]` so it becomes a tappable dictionary link. Use
   `[[term|display words]]` when the sentence needs different wording.
   The term (lowercased) must exist in `data/glossary.js` — unknown terms display
   as plain text (safe, but no link). A glossary entry must NEVER contain the
   answer to a question that links to it (no limit values, no clause outcomes) —
   players read the popup before answering.
4. **Wrong answers teach.** Every wrong choice's `feedback` should explain *why
   someone might think that* and what the real rule is. Never just "Incorrect".
5. **Photos show reality, diagrams explain concepts.** Prefer a real photo when one
   clearly shows what the thing looks like in the real world; use an SVG diagram
   when you need labels, dimensions or a cutaway view. Both can carry a caption.

## Anatomy of a question

All questions live in a phase file, e.g. `data/phase1-site-preparation.js`, inside
the `questions: [...]` array. Common fields:

```js
{
  id: "unique-kebab-case-id",       // must be unique within the phase
  type: "quiz",                     // "quiz" | "number" | "defect"
  topic: "Drainage",                // the little chip above the question
  media: {                          // OPTIONAL picture
    kind: "photo",                  // "photo" or "svg" (informational only)
    src: "assets/photos/x.jpg",
    alt: "describe the image for screen readers",
    caption: "one line under the image",
    credit: {                       // REQUIRED for CC-licensed photos
      text: "Photo: Name, Wikimedia Commons, CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:..."
    }
  },
  question: "The question text, with [[jargon]] wrapped.",
  explanation: "Shown after solving: the WHY behind the rule.",
  source: {                         // the full-detail citation
    clause: "3.3.3(b)",
    clauseTitle: "Surface water drainage",
    page: 33,                       // printed page in the source PDF
    quote: "(b) Slab-on-ground — finished slab heights: ...", // word-for-word
    doc: "v2"                       // OPTIONAL: "v2" = NCC Volume Two;
  }                                 // omit for the Housing Provisions (default)
}
```

The edition (NCC 2025 etc.) is NOT stored per question — it comes from
`data/edition.js` so it can be updated in one place.

### Optional `figure` — a picture shown in the ANSWER (not the prompt)

```js
figure: { src: "assets/photos/ncc-fig-5-6-7.png",
          alt: "NCC Figure 5.6.7",
          caption: "How a steel lintel is installed. Source: ABCB Housing Provisions Standard 2025, Figure 5.6.7." }
```

`figure` renders inside the green success box AFTER the player answers — so it is
the right home for **reproduced NCC figures that print the answer on themselves**
(dimensions, the 125 mm sphere, FRL values…). Never put an answer-revealing figure
in `media` (the prompt); use `figure` instead. A question can have both a `media`
prompt and an explanatory `figure`. Extract NCC figures with PyMuPDF
(`page.search_for("Figure X.Y.Z")` then crop) and always credit the source in the
caption.

Every phase should include 1–2 "rule book" questions on the Volume Two layer
(the relevant H_P Performance Requirement and H_D Deemed-to-Satisfy pathway
clause) — the coverage rule in docs/COVERAGE.md counts Volume Two content too.

### type: "quiz" — extra fields

```js
choices: [
  { text: "150 mm", correct: true,  feedback: "Why this is right." },
  { text: "300 mm", correct: false, feedback: "Why people guess this, and why it's wrong." }
]
```
2–4 choices, exactly one `correct: true`. Order is kept as written (put the
recommended reading order in, don't worry about shuffling).

### type: "number" — extra fields

```js
slider: {
  min: 0, max: 300, step: 50, unit: "mm",
  start: 0,                 // where the slider begins
  target: 150,              // the only accepted answer
  hints: {                  // OPTIONAL per-value coaching, keyed by value AS A STRING
    "50":  "50 mm is only allowed above paving that slopes away...",
    "100": "100 mm is only for low-rainfall or sandy areas..."
  }                         // values without a hint get a generic higher/lower nudge
}
```
Pick `step` so the target is reachable and the wrong values are *meaningfully*
wrong (each one ideally maps to a different NCC concession — that's where the
learning is).

### type: "defect" — extra fields

```js
defectsToFind: 3,           // how many hotspots have defect: true
media: { src: "assets/svg/scene.svg", alt: "..." },
hotspots: [
  { x: 4, y: 55, w: 27, h: 22,   // rectangle in % of image width/height
    defect: true,                 // true = a problem; false = compliant detail
    badge: "below",               // OPTIONAL: hang the ? marker under the spot
                                  // instead of centred on it (use when the ?
                                  // would cover the detail being judged)
    label: "Ground slopes TOWARD the house",
    feedback: "What's wrong + the clause reference." }
]
```
Getting hotspot rectangles right: open the image, estimate the rectangle as
percentages of the full width/height (e.g. "starts 4% in from the left, 55% down
from the top, spans 27% wide and 22% tall"). Test by clicking in the browser —
hotspots highlight on hover, so misplaced ones are easy to spot and nudge.
Include 1–2 `defect: false` hotspots of *compliant* details — finding out that
something is fine is also learning.

## Adding a whole new phase

1. Copy `data/phase1-site-preparation.js` to `data/phase2-footings.js`.
2. Change the key: `NCC.phaseData["footings"] = { id: "footings", ... }` —
   the id must match the phase's `id` in `data/phases.js`.
3. Write the questions from the matching Housing Provisions Section
   (the phase map in `data/phases.js` says which Section each phase covers).
4. Add the script tag in `index.html` next to the phase 1 one:
   `<script src="data/phase2-footings.js"></script>`
5. In `data/phases.js`, flip that phase's `status` to `"ready"`.
6. Play it. Fix what reads badly. Done.

A good phase size is 8–14 questions: mostly quiz, 1–2 number, 1 defect scene as
the finale.

## Adding a dictionary term

Add an entry to `data/glossary.js` (key must be lowercase):

```js
"weep hole": {
  plain: "A small gap left in the mortar at the bottom of a brick wall so water inside the cavity can drain out.",
  official: "Optional: the formal NCC meaning if it differs.",
  image: "assets/photos/photo-weep-hole.jpg",   // optional
  caption: "...", credit: { text: "...", url: "..." }
}
```

Then wrap the word as `[[weep hole]]` wherever it appears in question text.

## Adding photos (and staying legal)

Photos must be ones you may legally republish:

- **Your own site photos** — best option, especially Australian construction.
  No credit block needed (but caption it).
- **Wikimedia Commons** ([commons.wikimedia.org](https://commons.wikimedia.org)) —
  search the term, check the file page's licence box. *Public domain / CC0*: no
  credit required (we add one anyway). *CC BY / CC BY-SA*: the `credit` block is
  **mandatory** — author, source, licence, link.
- Avoid Google Images results, builders' marketing photos, and anything without an
  explicit licence.

Keep files under ~300 KB (resize to ~1000 px wide) so the game stays fast on
phones. Record every third-party photo in `assets/photos/CREDITS.md`.

## Asking a free AI tool to write content for you

These prompts work well. Always paste the *real clause text from the PDF* into the
prompt, and always verify the output against it — AI tools misremember numbers.

**New quiz question:**
> Here is a JavaScript object format for a quiz question in my learning game,
> and one example question: [paste one question object from a phase file].
> Here is the exact text of clause X.X.X from the ABCB Housing Provisions:
> [paste clause]. Write one new question object about [topic] in exactly the same
> format. Plain English, friendly tone, each wrong answer's feedback must explain
> why it's wrong. Wrap trade jargon in [[double brackets]]. Use the clause text
> word-for-word in source.quote.

**Checking content after an NCC update:**
> Here is a question object from my NCC learning game based on the previous NCC edition: [paste].
> Here is the corresponding clause from the new NCC edition: [paste new clause].
> Tell me: (1) did the requirement change, (2) did the clause number change,
> (3) rewrite the object if anything needs updating.

**New dictionary entry:**
> Write a glossary entry in this format: [paste one entry from data/glossary.js].
> The term is "[term]". Explain it in plain English for someone who has never
> been on a building site, in 1–2 sentences, without using other jargon.

## When a new NCC edition is released

1. Download the new Housing Provisions / Volume Two PDFs from ncc.abcb.gov.au.
2. Update `data/edition.js` (code, amendment, document titles).
3. For each phase file, walk the questions and compare each `source.quote` and
   `clause`/`page` against the new PDF (the AI prompt above speeds this up).
4. Values sometimes change between editions — if a target number changed, update
   the question, choices/slider and explanation together, not just the quote.
