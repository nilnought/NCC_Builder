# Architecture — how the code works

Read this before changing any code. It's short because the code is small — that's
deliberate. Total engine size is about 600 lines of plain JavaScript.

## The one design rule

> **Code renders; data describes.**

Everything a player sees — questions, answers, feedback, clause quotes, dictionary
entries, phase names — lives in the `data/` files as plain JavaScript objects.
The `js/` files only know *how to display* those objects. Adding a whole new phase
of the game requires **zero** changes to `js/`.

## Why there is no framework, no build step, no server

- The game must run by double-clicking `index.html`, including offline, on a school
  computer with nothing installed. `fetch()`-ing `.json` files fails on `file://`
  pages in most browsers, which is why the data files are `.js` files that assign to
  a global `NCC` object instead of `.json` — they load with plain `<script>` tags.
- Every file stays small and self-contained so it can be pasted whole into a free AI
  chat tool for modification.
- No dependencies means nothing to update, nothing to break, nothing to pay for.

## Load order (see the bottom of index.html)

```
data/edition.js      → NCC.edition       which NCC version content is based on
data/glossary.js     → NCC.glossary      dictionary entries
data/phase1-*.js     → NCC.phaseData[id] the questions for each playable phase
data/phases.js       → NCC.phases        the phase map (home screen list)
js/glossary.js       → NCC.jargonize(), NCC.openJargon(), NCC.esc()
js/questions.js      → NCC.renderQuestion()
js/app.js            → screens, NCC.store, boot (runs last)
```

Data files load before engine files. Every file guards with
`window.NCC = window.NCC || {}` so the order within each group doesn't matter.

## The global namespace: `NCC`

One global object holds everything. Key members:

| Member | Defined in | What it is |
|---|---|---|
| `NCC.edition` | data/edition.js | NCC version info shown in every source panel + footer |
| `NCC.glossary` | data/glossary.js | `{ "term": {plain, official?, image?, caption?, credit?} }` |
| `NCC.phases` | data/phases.js | array of phase metadata (id, title, status, houseLayer) |
| `NCC.phaseData` | data/phase*.js | `{ phaseId: {title, intro, learnList, questions[]} }` |
| `NCC.esc(s)` | js/glossary.js | HTML-escapes a string. Use it for ANY text put into innerHTML |
| `NCC.jargonize(s)` | js/glossary.js | escapes text AND turns `[[term]]` markers into tappable links |
| `NCC.openJargon(term)` | js/glossary.js | opens the dictionary popup for a term |
| `NCC.renderQuestion(q, el, cb)` | js/questions.js | renders one question; calls `cb({firstTry})` when solved |
| `NCC.store` | js/app.js | `load()`/`save()` of progress in localStorage |

## js/app.js — screens and flow

A tiny screen "router": each screen is a function that overwrites
`<main id="screen">.innerHTML` and wires its buttons.

```
renderHome ──click phase──▶ renderIntro ──start──▶ renderCurrentQuestion
    ▲                            ▲                      │ ▲  back/skip/exit move qIndex;
    │                            exit                   │ │  solving fills results[qIndex]
    │                            └──── renderChecklist ◀┘ │ (shown at end of list while
    │                                       └─tap a check─┘  skipped checks remain)
    └────────────── renderCertificate ◀── every results slot filled
```

- `run` holds the current play-through: `{phaseId, qIndex, results[]}` where
  `results[i]` is `null` (not yet passed) or `{firstTry}`. Players can skip
  around freely. Reaching the end of the list with skipped checks left shows
  `renderChecklist` — the status index (completed / skipped) from which the
  player jumps back to unfinished checks or exits. The certificate appears once
  no `null` slots remain; only the first pass of each question counts toward
  the score.
- `NCC.store` persists `{ done: {phaseId: {score,total,date}} }`
  under the localStorage key `ncc-site-boss-v1`. Bump that key name if you ever
  change the shape incompatibly — old saves will then be ignored, not crash.
- `HOUSE_SVG` is the home-screen house. Each `<g data-layer="...">` is revealed
  when the phase whose `houseLayer` matches is completed.

## js/questions.js — the three question types

`NCC.renderQuestion(q, container, onComplete)` dispatches on `q.type`:

- **quiz** — multiple choice. Wrong picks show that choice's `feedback` and stay
  disabled; the right pick shows the success block.
- **number** — a slider plus a "check" button. Wrong values show the matching
  entry from `slider.hints` (keyed by the value as a string) or a generic
  higher/lower nudge.
- **defect** — an image with invisible rectangle hotspots (positioned in % of the
  image, so they scale with any screen size). Defect hotspots turn red when found;
  compliant ones turn green and cost the player their "first try" flag only.

All three share `buildSuccess()` → explanation + **`buildSource()`** + Next button.
`buildSource()` is the most important function in the file: it renders the
collapsible panel quoting the full clause text with document, clause number, page
and edition, plus the "NCC gets amended" warning. Every question gets it for free.

`onComplete({firstTry})` is the only contract between a question and the app.
A new question type only needs: a renderer function, one `if` line in the
dispatcher, and documentation in CONTENT-GUIDE.md.

## js/glossary.js — jargon links

- `NCC.jargonize(text)` walks the text, HTML-escaping everything and replacing
  `[[term]]` / `[[term|display words]]` with `<button class="jargon">`.
  Unknown terms render as plain text — a typo can never crash the game.
- One **delegated** click listener on `document` handles every jargon link on any
  screen (including links inside feedback that appears later), the popup close
  button, tap-outside-to-close and the Escape key.

## Security note (yes, even for a toy)

All content passes through `NCC.esc()` / `NCC.jargonize()` before reaching
`innerHTML`. Keep it that way: if you add a renderer, never concatenate raw data
into HTML. This means a malicious (or just badly copy-pasted) content file can't
inject scripts into players' browsers once the game is hosted online.

## CSS

One file, `css/style.css`, mobile-first. All colours are CSS variables in the
`:root` block at the top — re-theme the entire game by editing ~10 lines.
Class names map 1:1 to concepts (`.choice`, `.hotspot`, `.source-quote`,
`.jargon`...), so you can find anything by searching the class you see in DevTools.
