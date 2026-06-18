/* ============================================================
   PHASE 8 — STAIRS & BARRIERS
   Content from: ABCB Housing Provisions Standard 2025, Section 11
   (Safe movement and access) plus the NCC 2025 Volume Two layer
   (Part H5: H5P1, H5D2–H5D3).
   Editing guide: docs/CONTENT-GUIDE.md · Ledger: docs/COVERAGE.md
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["stairs"] = {
  id: "stairs",
  title: "Stairs & barriers",
  intro:
    "Liveable and healthy — now make it safe to move around. This is the NCC's magic-numbers section: " +
    "the most precise dimensions in the whole code live here, because a 20 mm error in a stair tread or a " +
    "10 mm gap in a balustrade is the difference between a safe home and a fall. Two ideas dominate: stairs " +
    "must have a rhythm your feet can trust, and anywhere you could fall a metre or more needs a barrier a " +
    "small child can't slip through. Hence the famous 125 mm sphere.",
  learnList: [
    "Stair geometry: risers, goings, the 2R+G rule, the 125 mm gap limit",
    "Ramps and landings",
    "When a fall barrier is required, and how high it must be",
    "The 125 mm sphere rule, handrails, and openable-window fall protection"
  ],

  questions: [

  /* ---------- V2 H5 rule book ---------- */
  {
    id: "rulebook-stairs",
    type: "quiz",
    topic: "The rule book",
    question: "Volume Two's [[ncc clause numbering|H5P1]] states the goal of this whole section in one sentence. What is it?",
    choices: [
      { text: "People must be able to move to, into and around the building safely — without falling or slipping", correct: true,
        feedback: "Correct. Every dimension in Section 11 — riser heights, the sphere, barrier heights — serves that one plain idea: safe movement and access. Part 11 satisfies it via the deemed-to-satisfy route (H5D2/H5D3)." },
      { text: "Buildings must have lifts", correct: false,
        feedback: "No lift requirement for houses. H5 is about safe MOVEMENT — stairs, ramps, landings and the barriers that stop falls — not vertical transport." },
      { text: "Stairs must be timber", correct: false,
        feedback: "Material isn't specified. H5P1 is a safety outcome: move about the building safely. The how — riser/going limits, barriers, handrails — is the deemed-to-satisfy detail of Part 11." }
    ],
    explanation:
      "H5 ('Safe movement and access') is short: H5P1 requires that people can move to, into and within a building, and access its facilities, without risk of injury from falling or slipping. Housing Provisions Part 11 (stairs/ramps + barriers/handrails) is the deemed-to-satisfy way to achieve it. After comfort (H4), the code returns to safety — this time the everyday safety of not falling down the stairs.",
    source: {
      doc: "v2",
      clause: "H5P1 & H5D2–H5D3", clauseTitle: "Movement to and within a building", page: 135,
      quote:
"H5P1 Movement to and within a building — So that people can move safely to and within a building— (a) walking surfaces must have safe gradients; and (b) any stairway or ramp (other than a threshold ramp) must— (i) have suitable handrails where necessary to assist and provide stability to people using the stairway or ramp; and (ii) have suitable landings ...; and [barriers must be provided where people could otherwise fall].\n\n" +
"H5D2 / H5D3 — Compliance with Parts 11.2 and 11.3 of the ABCB Housing Provisions satisfies Performance Requirement H5P1 for stairway/ramp construction and for barriers and handrails."
    }
  },

  /* ---------- 11.2.2 stair geometry ---------- */
  {
    id: "stair-geometry",
    type: "quiz",
    topic: "Stairs",
    media: { kind: "svg", src: "assets/svg/q-stair-geom.svg",
             alt: "Side view of a stair showing the riser (R, vertical) and going (G, horizontal) of one step",
             caption: "One step: the riser (R) goes up, the going (G) goes along." },
    question: "A stair step has a [[riser]] (R, the vertical rise) and a [[going]] (G, the horizontal tread depth). The NCC bounds both — what are the riser limits for a normal stair?",
    choices: [
      { text: "Riser between 130 mm and 225 mm (going 215–355 mm), and 2R+G between 540 and 700", correct: true,
        feedback: "Correct. Too short a riser and you scuff and trip; too tall and it's a clamber. The clever bit is 2R+G (the slope relationship): it ties riser and going together so the stair matches a natural stride — 540–700." },
      { text: "Any size, as long as they're consistent", correct: false,
        feedback: "Consistency IS required (variations within a flight are capped at 5 mm between adjacent steps), but each dimension also has hard limits: riser 130–225, going 215–355, 2R+G 540–700." },
      { text: "Riser exactly 200 mm always", correct: false,
        feedback: "There's a range, not a fixed value: riser 130–225 mm. What matters is staying in range AND keeping 2R+G between 540 and 700 so the rhythm suits a human stride." }
    ],
    explanation:
      "11.2.2 + Table 11.2.2a: risers (R) 130–225 mm, goings (G) 215–355 mm, slope relationship 2R+G between 540 and 700 mm. A flight has 2–18 risers, kept constant (≤5 mm variation between adjacent steps, ≤10 mm across the flight). The 2R+G rule is biomechanics in a formula — it's why a stair that's out of range simply feels wrong to climb. And gaps between open treads can't pass a 125 mm sphere (the rule that runs the whole section).",
    source: {
      clause: "11.2.2 + Table 11.2.2a", clauseTitle: "Stairway construction", page: 304,
      quote:
"(1) A stairway must be designed to take loading forces in accordance with AS/NZS 1170.1 and must have—\n" +
"(a) not more than 18 and not less than 2 risers in each flight; and\n" +
"(b) goings (G), risers (R) and a slope relationship quantity (2R + G) in accordance with Table 11.2.2a ...; and\n" +
"(c) constant goings and risers throughout each flight ...; and\n" +
"(d) risers which do not have any openings that would allow a 125 mm sphere to pass through between the treads ...\n\n" +
"Table 11.2.2a — Riser (R): max 225, min 130. Going (G): max 355, min 215. Slope relationship (2R+G): max 700, min 540."
    }
  },

  /* ---------- 11.2.2(1)(d) 125mm sphere on stairs ---------- */
  {
    id: "stair-sphere",
    media: { kind: "svg", src: "assets/svg/q-stair-sphere.svg",
             alt: "Side view of an open-tread stair with gaps between the treads and a ball being tested against a gap, the gap size marked as a question",
             caption: "Open treads with gaps between — what must NOT fit through?" },
    type: "quiz",
    topic: "Stairs",
    question: "Open-tread ('floating') stairs have gaps between the treads. The NCC limits those gaps so that…",
    choices: [
      { text: "A 125 mm sphere cannot pass through — a small child's head won't fit", correct: true,
        feedback: "Correct. 125 mm is the section's signature number, used everywhere: a child's head is bigger than 125 mm, so any gap that stops the sphere stops a child slipping (or getting stuck) through it." },
      { text: "A hand cannot fit through", correct: false,
        feedback: "It's sized for a child's head, not a hand — 125 mm. The same sphere governs gaps in tread openings, balustrades and barriers throughout the section." },
      { text: "There's no limit on open stairs", correct: false,
        feedback: "There absolutely is: no opening between treads may pass a 125 mm sphere. (And tall stairs — over 10 m or more than 3 storeys — must have solid treads entirely.)" }
    ],
    explanation:
      "11.2.2(1)(d)–(e): tread openings can't pass a 125 mm sphere, and stairways over 10 m high or connecting more than 3 storeys must have solid (non-perforated) treads. Meet the 125 mm sphere here and you've met the single most-repeated safety rule in the code — it returns for balustrades and barriers in Part 11.3.",
    source: {
      clause: "11.2.2(1)(d)–(e)", clauseTitle: "Stairway construction", page: 305,
      quote:
"(1) ... (d) risers which do not have any openings that would allow a 125 mm sphere to pass through between the treads; and\n" +
"(e) treads of solid construction (not mesh or other perforated material) if the stairway is more than 10 m high or connects more than 3 storeys."
    }
  },

  /* ---------- 11.2.3 ramps ---------- */
  {
    id: "ramps",
    media: { kind: "svg", src: "assets/svg/q-ramp.svg",
             alt: "A ramp rising to a doorway",
             caption: "A ramp to the entrance." },
    type: "quiz",
    topic: "Ramps & landings",
    question: "Instead of steps, an external ramp leads to the front door. How steep is the steepest a ramp may be?",
    choices: [
      { text: "1:8 — and it needs landings at top, bottom and at least every 15 m", correct: true,
        feedback: "Correct. 1:8 (one up for eight along) is the steepest a general ramp may go; landings give a flat place to rest and stop a runaway wheelchair or pram. (Accessible ramps for livable housing are gentler still.)" },
      { text: "1:2 — as steep as a wheelchair can manage", correct: false,
        feedback: "1:2 is a cliff for any wheeled thing. The general ramp maximum is a much gentler 1:8, with landings to break up the run." },
      { text: "Any gradient with a handrail", correct: false,
        feedback: "A handrail doesn't make a steep ramp safe. The gradient cap is 1:8, plus landings at top, bottom and every 15 m max." }
    ],
    explanation:
      "11.2.3: ramps designed to AS/NZS 1170.1 loads, gradient no steeper than 1:8, with landings (per 11.2.5) at top and bottom and at intervals ≤15 m (threshold, step and kerb ramps excepted). Landings also serve stairs — a flat pause where a fall would otherwise gather speed. Ramps built for accessibility under the Livable Housing provisions are gentler again.",
    source: {
      clause: "11.2.3", clauseTitle: "Ramps", page: 310,
      quote:
"An external ramp serving an external doorway or a ramp within a building must—\n" +
"(a) be designed to take loading forces in accordance with AS/NZS 1170.1; and\n" +
"(b) have a gradient not steeper than 1:8; and\n" +
"(c) except for threshold ramps, step ramps and kerb ramps, be provided with landings complying with 11.2.5 at the top and bottom of the ramp and at intervals not greater than 15 m."
    }
  },

  /* ---------- 11.3.3 when a barrier is needed (number) ---------- */
  {
    id: "barrier-trigger",
    type: "number",
    topic: "Barriers",
    media: { kind: "svg", src: "assets/svg/q-barrier-fall.svg",
             alt: "A raised deck with the drop to the ground below marked with a question mark, asking when a barrier is required",
             caption: "How big a drop before a barrier becomes mandatory?" },
    question: "A barrier (balustrade) is required along any trafficable edge — deck, balcony, stair, landing — where you could fall how far or more? Set the trigger height.",
    slider: { min: 0, max: 2000, step: 250, unit: "mm", start: 0, target: 1000,
      hints: {
        "0":   "Not every step-down needs a balustrade — a low edge isn't a serious fall risk. There's a threshold.",
        "250": "A 250 mm drop is a kerb, not a fall hazard. The trigger is higher.",
        "500": "Still below the threshold — half a metre isn't where the rule kicks in.",
        "750": "Close, but the round-number trigger is a touch higher.",
        "1250":"Past it — the rule starts at a lower drop than this.",
        "1500":"Well past the trigger — barriers are required from a smaller drop than this.",
        "2000":"Far past it."
      }
    },
    explanation:
      "1 m (1000 mm): a continuous barrier is required wherever you could fall 1 m or more from a trafficable surface — stairs, ramps, floors, balconies, decks, verandahs, mezzanines, access paths. Below 1 m the code accepts the risk; at 1 m and above, a barrier is mandatory. (Retaining walls not on an access path, and openable windows under their own rules, are excepted.)",
    source: {
      clause: "11.3.3", clauseTitle: "Barriers to prevent falls", page: 315,
      quote:
"(1) A continuous barrier must be provided along the side of a trafficable surface, such as—\n" +
"(a) a stairway, ramp or the like; and\n" +
"(b) a floor, corridor, hallway, balcony, deck, verandah, mezzanine, access bridge or the like; and\n" +
"(c) a roof top space or the like to which general access is provided; and\n" +
"(d) any delineated path of access to a building,\n" +
"where it is possible to fall 1 m or more measured from the level of the trafficable surface to the surface beneath."
    }
  },

  /* ---------- 11.3.4 barrier height + sphere ---------- */
  {
    id: "barrier-height",
    figure: { src: "assets/photos/ncc-fig-11-3-4a.png",
             alt: "NCC Figure 11.3.4a/b",
             caption: "Barrier heights (865 mm / 1 m) and the 125 mm sphere. Source: ABCB Housing Provisions Standard 2025, Figure 11.3.4a/b." },
    type: "quiz",
    topic: "Barriers",
    media: { kind: "svg", src: "assets/svg/q-barrier-height.svg",
             alt: "A balcony barrier and a stair barrier side by side, both heights marked with question marks",
             caption: "Two barriers, two heights — balcony versus stair." },
    question: "Barrier heights differ by location. What are the two key minimums — for a balcony/landing, and along a stair flight?",
    choices: [
      { text: "1 m above a balcony/landing floor, 865 mm above the stair nosings", correct: true,
        feedback: "Correct. The stair barrier is measured lower (865 mm above the angled nosing line) because you're already holding a handrail and moving; the balcony's 1 m is for standing at a static edge. A transition zone blends the two." },
      { text: "Both exactly 1 m", correct: false,
        feedback: "Close — balcony/landing is 1 m, but along the stair FLIGHT it's 865 mm above the nosings. The two heights meet at a transition zone where flight joins landing." },
      { text: "500 mm everywhere", correct: false,
        feedback: "Far too low — that's barely knee height. Barriers are 1 m above floors/landings, 865 mm above stair nosings, and openings still can't pass a 125 mm sphere." }
    ],
    explanation:
      "11.3.4: barrier height ≥1 m above any floor, landing, balcony, deck or access path; ≥865 mm above stair nosings or a ramp floor (a transition zone blends 865 mm to 1 m where flight meets landing). And the 125 mm sphere returns: openings in the barrier — including decorative balustrades — must not pass it (measured above the nosing line on stairs). Same child-safety number, third appearance.",
    source: {
      clause: "11.3.4", clauseTitle: "Construction of barriers to prevent falls", page: 317,
      quote:
"(2) The height of a barrier must be in accordance with the following:\n" +
"(a) The height must not be less than 865 mm above the nosings of the stair treads, the floor of a ramp or the like.\n" +
"(b) The height must not be less than— (i) 1 m above the floor of any landing, corridor, hallway, balcony, deck, verandah, access path, mezzanine, access bridge, roof top space or the like ...; or (ii) 865 mm above the floor of a landing to a stairway or ramp where the barrier is ... along the inside edge ... and does not exceed a length of 500 mm.\n" +
"(4) Openings in barriers (including decorative balustrades) must be constructed so that they do not permit a 125 mm sphere to pass through it ..."
    }
  },

  /* ---------- 11.3.5 handrails ---------- */
  {
    id: "handrails",
    media: { kind: "svg", src: "assets/svg/q-handrail.svg",
             alt: "A stair flight asking where the handrail must run",
             caption: "Where must the handrail run?" },
    type: "quiz",
    topic: "Barriers",
    question: "Every stairway flight and ramp needs a handrail. What's the minimum the NCC asks for?",
    choices: [
      { text: "A handrail along at least one side, for the full length of the flight or ramp", correct: true,
        feedback: "Correct — at least one continuous handrail the whole way, so there's always something to grab. (Wider or accessible stairs may need both sides, but one full-length rail is the floor.)" },
      { text: "A handrail only at the top step", correct: false,
        feedback: "A rail you let go of halfway down is no rail at all. It must run the FULL length of the flight or ramp, on at least one side." },
      { text: "Handrails are optional in homes", correct: false,
        feedback: "Not optional — at least one full-length handrail per stair flight and ramp. It's the thing you instinctively reach for when a foot slips." }
    ],
    explanation:
      "11.3.5: handrails along at least one side, the full length of each stair flight or ramp (a handrail associated with a barrier may stop where the barrier does). It's the partner to the barrier — the barrier stops you falling sideways off the edge, the handrail stops you falling down the slope. Together with the riser/going rhythm and the 125 mm sphere, they make a stair survivable.",
    source: {
      clause: "11.3.5", clauseTitle: "Handrails", page: 318,
      quote:
"(1) Handrails to a stairway or ramp must—\n" +
"(a) be located along at least one side of the stairway flight or ramp; and\n" +
"(b) be located along the full length of the stairway flight or ramp, except in the case where a handrail is associated with a barrier the handrail may terminate where the barrier [does]."
    }
  },

  /* ---------- 11.3.7 openable windows ---------- */
  {
    id: "openable-windows",
    media: { kind: "svg", src: "assets/svg/q-window-restrictor.svg",
             alt: "A bedroom window above a 2 m drop",
             caption: "A bedroom window above a drop." },
    type: "quiz",
    topic: "Window falls",
    question: "A tragically common injury: small children falling from windows. Where a bedroom window sits more than 2 m above the ground outside, and its opening is less than 1.7 m above the floor inside, the openable part must…",
    choices: [
      { text: "Be restricted or screened so a 125 mm sphere can't pass, resisting 250 N of outward push", correct: true,
        feedback: "Correct — the 125 mm sphere again, now guarding windows. A restrictor limits how far the sash opens, or a screen covers it; either must resist a child's 250 N shove and (if removable) have a child-resistant release." },
      { text: "Be permanently sealed shut", correct: false,
        feedback: "Windows still need to open for ventilation (Phase 7's 5% rule!). The fix is a restrictor or screen that stops a child getting through — 125 mm sphere, 250 N — not sealing the window." },
      { text: "Have bars like a prison", correct: false,
        feedback: "Bars would block escape and ventilation. The deemed-to-satisfy answer is an opening restrictor or a screen: stops the 125 mm sphere, resists 250 N, child-resistant release if removable." }
    ],
    explanation:
      "11.3.7: a bedroom window with a fall of 2 m or more to the surface below, and an opening lower than 1.7 m above the floor, must have its openable portion protected — restricted or screened so a 125 mm sphere can't pass, able to resist a 250 N outward action, with a child-resistant release if removable. 11.3.8 covers other rooms. The whole section, from stair gaps to window screens, is really one rule: don't let a small child through a gap bigger than 125 mm.",
    source: {
      clause: "11.3.7", clauseTitle: "Protection of openable windows — bedrooms", page: 322,
      quote:
"(1) A window opening in a bedroom must be provided with protection, where the floor below the window is 2 m or more above the surface beneath.\n" +
"(2) Where the lowest level of the window opening covered by (1) is less than 1.7 m above the floor, the window opening must comply with the following: The openable portion of the window must be protected by a device or screen that— (i) does not permit a 125 mm sphere to pass through the window opening or screen; and (ii) resists an outward horizontal action of 250 N against the [device/screen]; and [has a child resistant release mechanism if removable]."
    }
  },

  /* ---------- finale: stairs inspection (defect) ---------- */
  {
    id: "stairs-inspection",
    type: "defect",
    topic: "Stairs & barriers inspection",
    media: { kind: "svg", src: "assets/svg/defect-stairs.svg",
             alt: "Cutaway of an internal stair with a balustrade and a landing, some details compliant and some not",
             caption: "" },
    question: "Final safety check on the new staircase and landing. Inspect the five marked spots: three breach what you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 9,  y: 77, w: 11, h: 14, badge: "below", defect: true,  label: "Riser far too tall (260 mm)",
        feedback: "Defect. This riser measures 260 mm — over the 225 mm maximum, and the 2R+G works out above 700. The stair is a clamber that fails the slope-relationship rule. Risers 130–225 mm, 2R+G 540–700. (11.2.2)" },
      { x: 33, y: 50, w: 10, h: 12, badge: "below", defect: true,  label: "Balustrade gaps pass a 125 mm sphere",
        feedback: "Defect. The vertical bars are spaced ~160 mm apart — a 125 mm sphere (a child's head) slips straight through. Openings in any barrier must not pass the 125 mm sphere. (11.3.4(4))" },
      { x: 74, y: 29, w: 15, h: 12, defect: true,  label: "Landing barrier only 700 mm high",
        feedback: "Defect. The landing is over 1 m above the floor below, so a barrier is required — and along a landing it must be at least 1 m tall. This one is only 700 mm: easy to topple over. (11.3.3, 11.3.4(2)(b))" },
      { x: 33, y: 17, w: 10, h: 20, badge: "below", defect: false, label: "Full-length handrail on the flight",
        feedback: "That one's fine. The edge-side handrail runs the full length of the flight on top of the balustrade — always something to grab as you descend the open side. (11.3.5)" },
      { x: 23, y: 62, w: 9, h: 12, badge: "below", defect: false, label: "Comfortable going in range",
        feedback: "That one's fine. This going (G) is inside the 215–355 mm range and a comfortable 2R+G — a stair your feet can trust. (11.2.2)" }
    ],
    explanation:
      "Stairs and barriers are pure dimensions, and three are wrong here: a riser outside 130–225 mm (and 2R+G over 700), barrier gaps that pass the 125 mm sphere, and a landing barrier under 1 m. Get the stair rhythm right, keep every gap under 125 mm, and make edge barriers a metre tall — and nobody falls. The compliant details show the rhythm and the full-length handrail done correctly.",
    source: {
      clause: "11.2.2, 11.3.4", clauseTitle: "Stairway construction / Construction of barriers", page: 304,
      quote:
"Table 11.2.2a — Riser (R): max 225, min 130 ... Slope relationship (2R+G): max 700, min 540.\n" +
"11.3.4(2)(b)(i) The height must not be less than 1 m above the floor of any landing, ... balcony, deck ...\n" +
"11.3.4(4) Openings in barriers (including decorative balustrades) must be constructed so that they do not permit a 125 mm sphere to pass through it ..."
    }
  }

  ]
};
