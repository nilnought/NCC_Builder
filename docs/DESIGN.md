# Game design — what this game is and why

## The problem

The NCC is the rulebook for all building work in Australia, but it's thousands of
pages of legal-technical prose split across volumes, and reading it cold is both
boring and disorienting — especially for people who don't yet know what a footing,
a weep hole or an ag drain *looks like*. Students end up memorising fragments
without a mental picture of the building they attach to.

## The concept: "pass the inspection"

You are the site supervisor on one house build. The game follows real construction
order, because the **ABCB Housing Provisions is already organised that way** —
each game phase maps to one Section:

| Phase | Housing Provisions | Status |
|---|---|---|
| 1. Site preparation | Section 3 | **playable (pilot)** |
| 2. Footings & slabs | Section 4 | planned |
| 3. Walls — masonry & framing | Sections 5–6 | planned |
| 4. Roof & cladding | Section 7 | planned |
| 5. Windows & glazing | Section 8 | planned |
| 6. Fire safety | Section 9 | planned |
| 7. Wet areas & amenity | Section 10 | planned |
| 8. Stairs & barriers | Section 11 | planned |
| 9. Energy efficiency | Section 13 | planned |

Each phase ends in an "inspection passed" certificate, and the house drawing on the
home screen visibly grows — ground works, then slab, then walls, roof, windows…
That growing house is the progress bar, the reward, and a quiet preview of
construction sequencing, all in one cheap SVG.

## Design principles (in priority order)

1. **Easy to get on.** No timer, no lives, no fail state, unlimited retries.
   The only "score" is how many checks you passed first try — replayable for a
   clean sheet, ignorable otherwise. A complete newcomer must never get stuck.
2. **The document is the destination.** The real goal isn't memorising 150 mm —
   it's building a mental map of *where rules live* so the NCC stops being scary.
   Hence the source panel under every answer: the full clause, quoted word for
   word, with document, clause number, page and edition. Players absorb the
   code's own structure and language as a side effect.
3. **Wrong answers are the curriculum.** Distractors are chosen to be *plausibly
   right* (usually a number from a neighbouring concession — 50/100/150 mm), and
   their feedback explains the trap. The fastest learning in the game happens on
   a wrong tap.
4. **Show the real world.** People outside the industry have never seen a subsoil
   drain or a termite shield. Real photos are used wherever a photo genuinely
   shows the thing (photos = "what it looks like"); flat labelled SVG cutaways are
   used where a camera can't help (dimensions, what's underground, before/after).
5. **Jargon is one tap away, always.** Every trade term is a dotted link to a
   plain-English popup, often with a picture. One rule: a glossary entry must
   never reveal the answer to a question that links to it.
6. **Why, not just what.** Every explanation gives the failure the rule prevents
   (water ponding against the slab, fill settling, rotting subfloors). Rules with
   reasons stick; rules without reasons evaporate after the exam.

## The three question mechanics

Three reusable templates cover everything, so new phases are pure content work:

- **Picture quiz** — the workhorse (~70% of questions). Image, question, 2–4
  choices, instant feedback either way.
- **Set the number** — a slider on a dimensioned diagram. The NCC is full of magic
  numbers; physically setting them beats reading them. Each wrong slider stop
  teaches its own concession via a targeted hint.
- **Spot the defect** — a scene with mistakes hidden in it; tap to find them.
  This is the phase finale: it rehearses the *inspector's* way of seeing, and
  including compliant details (that turn green when tapped) teaches that knowing
  what's FINE is half the skill.

## Tone

Friendly site-banter, never jokey about safety. The inspector is a benign
recurring character ("The inspector shakes their head", "didn't even get their
red pen out"). Failure text never shames; it explains.

## Audience and scope decisions

- Built around **Class 1 housing** (Volume Two + Housing Provisions) because the
  pilot audience is Cert IV building students and curious homeowners. Volume One
  (commercial) is out of scope for now.
- State/Territory variations are mentioned in the disclaimer but not modelled in
  questions — pilot questions stick to the national base provisions.
- A future "Phase 0" teaching the NCC's own structure (building classes,
  Performance Requirements vs Deemed-to-Satisfy) is worth adding once a couple of
  construction phases exist; its concepts are currently introduced via dictionary
  entries instead.

## Deliberate technical constraints

Plain HTML/CSS/JS, no framework, no build, no server, no accounts, no analytics.
Rationale in docs/ARCHITECTURE.md — in short: runs anywhere (double-click or
GitHub Pages), maintainable by one person with a text editor and a free AI tool,
and costs exactly $0 to host forever.

## Ideas parked for later (cheap first, expensive last)

- Phase 0: "How the NCC works" (building classes picture quiz is a natural fit).
- A "find it in the code" question type: show a scenario, ask WHICH Part applies
  (trains document navigation directly).
- Per-phase glossary warm-up: 4 term-to-picture matches before the questions.
- Sound effects (one success chirp, one "hmm") — a single <audio> tag each.
- Shareable certificate image (canvas render) for class group chats.
- State variation toggles (NSW/QLD/etc.) — only after several phases exist.
