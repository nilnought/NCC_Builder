# NCC Builder — learn the National Construction Code by building a house

A free, no-install learning game for the Australian **National Construction Code (NCC)**,
aimed at people studying building and construction (and anyone who finds the NCC PDFs
hard going). You play the site supervisor on one house build: each construction phase is
a game unit based on one Section of the **ABCB Housing Provisions**, and you pass an
"inspection" (a short round of illustrated questions) to advance the build.

**Current state:** Complete. All **11 phases** are fully playable, each at 100%
coverage of its topic across both NCC 2025 Volume Two and the Housing Provisions
(145 questions in total):

| # | Phase | NCC content |
|---|-------|-------------|
| 1 | Site preparation | HP 3 + Vol Two H1D3/H2D2/H2P1/H2P4 |
| 2 | Footings & slabs | HP 4 + H1P1/H1D4/H2P3/H2D3 |
| 3 | Walls — masonry & framing | HP 5–6 + H1D5/H1D6/H2D4/H2D5 |
| 4 | Roof & cladding | HP 7 + H1D7/H2D6 |
| 5 | Windows & glazing | HP 8 + H1D8/H2D7 |
| 6 | Fire safety | HP 9 + Part H3 |
| 7 | Wet areas & amenity | HP 10 + Part H4 |
| 8 | Stairs & barriers | HP 11 + Part H5 |
| 9 | Energy efficiency | HP 13 + Part H6 |
| 10 | Decks, fireplaces & hazards | HP 2 & 12 + H1D2/Part H7 |
| 11 | Livable & accessible housing | Vol Two Part H8 |

Three question types (picture quiz, set-the-number slider, spot-the-defect scene),
real construction photos, hand-drawn diagrams, reproduced NCC figures (in answers),
and tap-to-learn jargon popups. You can skip questions and come back via the
checklist; completing every check passes the phase, and finishing all 11 shows a
"you're up to code" congratulations screen. Coverage is tracked clause-by-clause in
`docs/COVERAGE.md`.

## How to run it

No installation, no server, no internet needed:

1. Open `index.html` in any modern browser (double-click it). That's it.

Progress (passed phases and best scores) is saved in the browser's
localStorage. To reset, clear the browser's site data for the page (or open it in a
private window for a fresh run).

## How to put it online (free)

1. Create a free account at [github.com](https://github.com), make a new repository,
   and upload this whole folder.
2. In the repository: Settings → Pages → Source: *Deploy from a branch* → branch
   `main`, folder `/ (root)` → Save.
3. A few minutes later the game is live at `https://<your-name>.github.io/<repo-name>/`
   — share that link; it works on phones.

## Project layout

```
index.html                      the one page; lists every script the game loads
css/style.css                   all styling (colours are CSS variables at the top)
js/app.js                       screens, navigation, saved progress, house drawing
js/questions.js                 the 3 question-type renderers + the source panel
js/glossary.js                  [[jargon]] links and the popup dictionary card
data/edition.js                 WHICH NCC edition the content is based on (read this!)
data/phases.js                  the phase map (one entry per construction phase)
data/phase1-site-preparation.js Phase 1's 12 questions, with full clause quotes
data/glossary.js                the site dictionary entries
assets/svg/                     concept diagrams (flat, labelled cutaways)
assets/photos/                  real construction photos + CREDITS.md (licences!)
docs/ARCHITECTURE.md            how the code works, file by file
docs/CONTENT-GUIDE.md           how to add/edit questions, phases, photos, terms
docs/DESIGN.md                  the game design and the reasoning behind it
docs/COVERAGE.md                clause-by-clause ledger of NCC content covered
```

## Editing it (including with free AI tools)

The project is deliberately plain HTML + CSS + JavaScript with **no framework, no build
step and no dependencies**, specifically so that:

- every file can be opened, read and edited in any text editor;
- each file is small enough to paste into a free AI chat tool in one go;
- changing game **content** never requires touching game **code** — questions, phases
  and dictionary entries are data files in `data/`.

Start with `docs/CONTENT-GUIDE.md` — it includes copy-paste prompts for asking an AI
tool to write new questions in the correct format.

## Important: NCC versions and accuracy

All content is verified against **NCC 2025**
(see `data/edition.js`). Every question's "Show the actual NCC clause" panel quotes its
source word-for-word with clause number and page, so players and editors can verify
everything. The NCC is amended over time — when a new edition lands, re-check the
quotes (the process is described in `docs/CONTENT-GUIDE.md`).

This is a study aid, not professional advice. The official, free, always-current NCC
lives at [ncc.abcb.gov.au](https://ncc.abcb.gov.au/).

NCC content is © Commonwealth of Australia and the States and Territories of Australia,
administered by the Australian Building Codes Board (ABCB), and is reproduced here for
educational purposes. Photo licences are listed in `assets/photos/CREDITS.md`.
