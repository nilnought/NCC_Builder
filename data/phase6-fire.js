/* ============================================================
   PHASE 6 — FIRE SAFETY
   Content from: ABCB Housing Provisions Standard 2025, Section 9
   plus the NCC 2025 Volume Two layer (Part H3: H3P1, H3P2,
   H3D3–H3D6).
   Editing guide: docs/CONTENT-GUIDE.md · Ledger: docs/COVERAGE.md
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["fire"] = {
  id: "fire",
  title: "Fire safety",
  intro:
    "The house is weathertight — now make it fire-safe. For houses, the NCC's fire job is narrow but vital: " +
    "stop a fire jumping to (or from) the neighbours, stop it spreading between attached dwellings, and wake " +
    "the people inside in time to get out. Two numbers run almost the whole show: a fire-resistance level of " +
    "60/60/60, and the boundary distances (900 mm and 1.8 m) that decide when a wall needs it. Everything else " +
    "is detail around those two ideas.",
  learnList: [
    "When an external wall must be fire-resisting (the 900 mm and 1.8 m rules)",
    "What 'fire-resisting' means in practice: FRL 60/60/60 or 90 mm masonry",
    "Separating walls between attached homes, and garage-top dwellings",
    "Smoke alarms: where they go, how they're powered and interconnected"
  ],

  questions: [

  /* ---------- V2 H3P1 + H3D3 rule book ---------- */
  {
    id: "rulebook-fire",
    type: "quiz",
    topic: "The rule book",
    question: "Volume Two's [[ncc clause numbering|H3P1]] states the fire-spread goal in raw physics: a house must withstand a [[design heat flux|design heat flux]] of 92.6 kW/m² for 60 minutes when it sits within the danger distances of a boundary or another building. What are those trigger distances?",
    choices: [
      { text: "Within 900 mm of an allotment boundary, or 1.8 m of another building on the same allotment", correct: true,
        feedback: "Correct — these two distances run all of Part 9.2. Closer than this and radiant heat from a neighbour's fire (or yours) is fierce enough to ignite across the gap, so the facing wall must be fire-resisting." },
      { text: "Within 6 m of any other building anywhere", correct: false,
        feedback: "That's a commercial-scale separation. For houses the triggers are tight: 900 mm to a boundary, 1.8 m to another building on the same block." },
      { text: "Only if the houses share a wall", correct: false,
        feedback: "Shared walls are a separate rule (separating walls, Part 9.3). This is about DETACHED buildings close enough that fire radiates across the gap — 900 mm / 1.8 m." }
    ],
    explanation:
      "The H3 architecture: H3P1 (spread of fire) and H3P2 (automatic smoke warning) are the performance requirements; H3D3–H3D6 satisfy them via Housing Provisions Parts 9.2–9.5. H3P1's vivid number — survive 92.6 kW/m² for 60 minutes — is exactly why the deemed-to-satisfy answer is a wall rated 60/60/60. The boundary distances (900 mm / 1.8 m) decide which walls face enough radiant heat to need it.",
    source: {
      doc: "v2",
      clause: "H3P1 & H3D3", clauseTitle: "Spread of fire / Fire separation of external walls", page: 120,
      quote:
"H3P1 Spread of fire (1) A Class 1 building must be protected from the spread of fire such that the probability of a building not being able to withstand the design heat flux of 92.6 kW/m2 for a period of 60 minutes shall not exceed 0.01, when located within 900 mm from the allotment boundary or within 1.8 m from another building on the same allotment ...\n\n" +
"H3D3 Fire separation of external walls — Compliance with Part 9.2 of the ABCB Housing Provisions satisfies Performance Requirement H3P1 for fire separation of external walls."
    }
  },

  /* ---------- 9.2.1 when walls need protection ---------- */
  {
    id: "external-wall-trigger",
    type: "quiz",
    topic: "Boundary walls",
    media: { kind: "svg", src: "assets/svg/q-fire-setback.svg",
             alt: "Plan view of a house near an allotment boundary, with the 900 mm setback distance marked",
             caption: "How close to the boundary before the wall needs fire protection?" },
    question: "Your house wall runs parallel to the side boundary, 700 mm away. Does that wall need to be fire-resisting?",
    choices: [
      { text: "Yes — it's less than 900 mm from the boundary, so it must comply with 9.2.3", correct: true,
        feedback: "Correct. Under 900 mm to a (non-road) boundary triggers fire-resisting construction: a fire next door could radiate across that narrow gap and ignite your wall, or vice versa." },
      { text: "No — only walls actually ON the boundary need protection", correct: false,
        feedback: "The trigger is a distance, not contact: anything closer than 900 mm to the boundary. At 700 mm this wall is well inside the danger zone." },
      { text: "Only if the neighbour's house is also close", correct: false,
        feedback: "The boundary rule doesn't ask what's next door yet — a future build could go right up to their side. 900 mm from the boundary is the line, regardless of what's there now. (A separate 1.8 m rule covers existing buildings on your own block.)" }
    ],
    explanation:
      "9.2.1: a Class 1 external wall (and its openings) must comply with 9.2.3 if it's less than 900 mm from an allotment boundary (except a boundary facing a road or public space), OR less than 1.8 m from another building on the same allotment. The road exception makes sense — a street is a permanent fire gap nobody can build across. Distances are measured at right angles to the boundary (9.2.2).",
    source: {
      clause: "9.2.1", clauseTitle: "External walls of Class 1 buildings", page: 209,
      quote:
"An external wall of a Class 1 building, and any openings in that wall, must comply with 9.2.3 if the wall is less than—\n" +
"(a) 900 mm from an allotment boundary other than the boundary adjoining a road alignment or other public space; or\n" +
"(b) 1.8 m from another building on the same allotment other than a Class 10 building associated with the Class 1 building or a detached part of the same Class 1 building."
    }
  },

  /* ---------- 9.2.3 construction / FRL ---------- */
  {
    id: "frl-meaning",
    media: { kind: "svg", src: "assets/svg/q-frl.svg",
             alt: "Three ways a wall can fail in fire: standing, flame, heat",
             caption: "FRL 60/60/60 — three things measured." },
    type: "quiz",
    topic: "Boundary walls",
    question: "A wall too close to the boundary must be 'fire-resisting'. The headline deemed-to-satisfy option is an [[frl|FRL]] of 60/60/60. What do those three numbers mean?",
    choices: [
      { text: "Minutes the wall resists: structural adequacy / integrity / insulation — 60 each", correct: true,
        feedback: "Correct. 60 minutes standing up (structural adequacy), 60 holding back flame and hot gases (integrity), 60 keeping the far face cool enough not to ignite contents (insulation). One hour on all three counts." },
      { text: "The wall's thickness in millimetres, three layers", correct: false,
        feedback: "They're durations in minutes, not dimensions. FRL = Fire Resistance Level, three numbers for the three ways a wall can fail in a fire — and a 90 mm masonry wall achieves it without testing." },
      { text: "A product code for fire-rated plasterboard", correct: false,
        feedback: "It's a performance measure any system can meet. 60/60/60 = structural adequacy / integrity / insulation, each for 60 minutes — or simply build the wall of masonry at least 90 mm thick." }
    ],
    explanation:
      "9.2.3: a fire-resisting external wall starts at the footings, extends to the underside of a non-combustible roof (within 200 mm if the gap is sealed), and either has an FRL of 60/60/60 tested from the outside, or is masonry-veneer with ≥90 mm of external masonry, or solid masonry ≥90 mm. FRL's three numbers — structural adequacy, integrity, insulation, in minutes — recur throughout the whole NCC. Here, 60 minutes matches H3P1's 60-minute heat-flux survival target exactly.",
    source: {
      clause: "9.2.3", clauseTitle: "Construction of external walls", page: 212,
      quote:
"(1) An external wall (including a gable) required to be fire-resisting (referred to in 9.2.1 or 9.2.4) must—\n" +
"(a) commence at the footings or ground slab ...; and (b) extend to— (i) the underside of a non-combustible roof covering, except that a wall may terminate not more than 200 mm from the underside ... where ... sealed with a non-combustible fascia, gutter or flashing; or (ii) the underside of a non-combustible eaves lining ...; and (c) be constructed in accordance with (2).\n" +
"(2) A wall required by (1) must— (a) have an FRL of not less than 60/60/60 when tested from the outside; or (b) be of masonry-veneer construction in which the external masonry veneer is not less than 90 mm thick; or (c) be of masonry construction not less than 90 mm thick."
    }
  },

  /* ---------- 9.2.9 allowable encroachments ---------- */
  {
    id: "encroachments",
    figure: { src: "assets/photos/ncc-fig-9-2-9a.png",
             alt: "NCC Figure 9.2.9a",
             caption: "Allowable encroachments: non-combustible eaves, fascia set back 450 mm. Source: ABCB Housing Provisions Standard 2025, Figure 9.2.9a." },
    type: "quiz",
    topic: "Boundary walls",
    question: "Within the 900 mm boundary zone, some bits of building are allowed to 'encroach' even though they're close. Which of these is an allowable encroachment?",
    choices: [
      { text: "Non-combustible eaves, with a combustible fascia kept at least 450 mm from the boundary", correct: true,
        feedback: "Correct. Eaves and gutters of non-combustible material may reach into the zone; a combustible timber fascia is tolerated only if it stays 450 mm clear of the boundary — far enough that radiant heat won't reliably ignite it." },
      { text: "A timber deck right up to the boundary", correct: false,
        feedback: "Explicitly NOT allowed — the NCC notes a deck isn't an 'unroofed terrace' and can't encroach, combustible or not. Only specific elements (eaves, fascia/gutter, unroofed pergolas) qualify." },
      { text: "The main living-room wall, if it has a big window", correct: false,
        feedback: "An openable window in the danger zone is the opposite of an encroachment — openings in fire-resisting walls are tightly restricted. Encroachments are minor edge elements like eaves and gutters." }
    ],
    explanation:
      "9.2.9 lists what may legitimately sit inside the boundary/separation zone: non-combustible eaves and gutters, combustible fascia kept ≥450 mm from the boundary, unroofed pergolas. The logic is radiant heat plus fuel — non-combustible parts can't ignite, and the 450 mm setback keeps the one tolerated combustible element (the fascia) far enough from the heat source. A deck, being a usable combustible platform, is specifically excluded.",
    source: {
      clause: "9.2.9", clauseTitle: "Allowable encroachments", page: 231,
      quote:
"(1) An encroachment is any construction— (a) between the external wall of the building and the allotment boundary other than a boundary adjoining a road or other public space; or (b) between the external walls of two buildings on the same allotment; ...\n" +
"Figure 9.2.9a: Allowable encroachments for non-combustible construction — Combustible fascia up to but not closer than 450 mm to an allotment boundary [with non-combustible eaves lining, gutter and roof].\n" +
"(Explanatory: A deck is not considered an unroofed terrace and is therefore not permitted as an allowable encroachment under 9.2.9 whether combustible or not. The term 'pergola' is a reference to an unroofed structure.)"
    }
  },

  /* ---------- 9.3.1 separating walls ---------- */
  {
    id: "separating-walls",
    type: "quiz",
    topic: "Attached dwellings",
    media: { kind: "svg", src: "assets/svg/q-separating-wall.svg",
             alt: "Cross-section of two attached townhouses sharing a separating wall that runs from footing to roof",
             caption: "Two attached homes — the shared wall has a hard job." },
    question: "Two attached townhouses share a wall between them (a [[separating wall]]). Beyond being FRL 60/60/60 or 90 mm masonry, where must that wall start and stop?",
    choices: [
      { text: "From the footings/ground slab right up to the underside of the roof (or 450 mm above a combustible roof)", correct: true,
        feedback: "Correct. A separating wall must be a complete, unbroken fire barrier from the ground to the sky — a gap at top or bottom is a chimney for fire and smoke to bypass it through the roof space or subfloor." },
      { text: "Just between the ceilings of the two homes", correct: false,
        feedback: "Stopping at the ceiling leaves the whole connected roof space open — fire races across above the ceilings. The wall must reach the underside of the roof (or 450 mm above a combustible one)." },
      { text: "From floor to ceiling on the ground level only", correct: false,
        feedback: "Fire climbs. The barrier has to be continuous full-height: footings to roof, on every storey, with any gap at the top packed with mineral fibre." }
    ],
    explanation:
      "9.3.1: a separating wall between Class 1 dwellings (or isolating a non-associated Class 10a garage) must be FRL 60/60/60 or masonry ≥90 mm, commence at the footings/slab, and extend to the underside of a non-combustible roof — or 450 mm above a combustible roof covering. It mustn't be crossed by combustible elements (small roof battens and sarking excepted), and top gaps get packed with mineral fibre. 9.3.2 controls services (pipes, cables, power points) punched through it, each penetration sealed.",
    source: {
      clause: "9.3.1", clauseTitle: "Separating walls", page: 236,
      quote:
"(1) A separating wall between Class 1 buildings, or a wall that separates a Class 1 building from a Class 10a building which is not associated with the Class 1 building must—\n" +
"(a) be constructed— (i) having an FRL of not less than 60/60/60; or (ii) of masonry not less than 90 mm thick; and\n" +
"(b) commence at the footings or ground slab ...; and\n" +
"(c) extend— (i) if the building has a non-combustible roof covering, to the underside of the roof covering; or (ii) if the building has a combustible roof covering, to not less than 450 mm above the roof covering; and\n" +
"(d) comply with (2) to (5) and 9.3.2 as applicable."
    }
  },

  /* ---------- 9.4.1 garage-top dwellings ---------- */
  {
    id: "garage-top",
    figure: { src: "assets/photos/ncc-fig-9-4-2.png",
             alt: "NCC Figure 9.4.2",
             caption: "Separating wall and floor construction for a garage-top dwelling. Source: ABCB Housing Provisions Standard 2025, Figure 9.4.2." },
    type: "quiz",
    topic: "Attached dwellings",
    question: "An apartment sits above a private garage belonging to ANOTHER dwelling (a 'garage-top dwelling'). Why does the NCC single this arrangement out for fire protection?",
    choices: [
      { text: "A garage is a high fire-load room (cars, fuel, chemicals) directly under someone's living space", correct: true,
        feedback: "Correct. Petrol, oil, paint, batteries, the car itself — a garage is the most fire-prone room in a home, and here it's beneath people who don't even own it. The separating floor/wall must be FRL 60/60/60 from the garage side." },
      { text: "Garages are noisy", correct: false,
        feedback: "Noise is a Phase 7 amenity matter. This is fire: a garage's fuel and chemicals make it a serious ignition source directly below habitable rooms." },
      { text: "Cars are heavy and need extra structure", correct: false,
        feedback: "Structure is Phase 2's job. Part 9.4 is purely about fire: protecting the dwelling above (and adjacent garages) from a fire starting in a garage that isn't theirs." }
    ],
    explanation:
      "9.4.1–9.4.2: where a Class 1a dwelling sits above a Class 10a private garage not associated with it, the separating wall and floor/ceiling must achieve FRL 60/60/60 tested from the garage side. Same 60-minute, 60/60/60 logic as boundary and separating walls — applied vertically, because the fire risk here comes from below.",
    source: {
      clause: "9.4.1", clauseTitle: "Walls requiring protection (garage top dwellings)", page: 241,
      quote:
"(1) Where parts of a Class 1a dwelling are located above a Class 10a private garage that is not associated with the Class 1a dwelling—\n" +
"(a) any wall separating parts of the Class 1a dwelling from the private garage not associated with the dwelling must comply with (2); and\n" +
"(b) any private garage associated with and located below the Class 1a dwelling must be separated from the private garage not associated with the dwelling by a wall complying with (2).\n" +
"(2) A wall required by (1) must— (a) have either— (i) an FRL of not less than 60/60/60 when tested from the private garage associated with another dwelling side; or be of masonry construction not less than 90 mm thick."
    }
  },

  /* ---------- 9.5.1 smoke alarm requirements ---------- */
  {
    id: "smoke-alarm-power",
    media: { kind: "svg", src: "assets/svg/q-smoke-alarm.svg",
             alt: "Interconnected smoke alarms across bedrooms and hallway",
             caption: "Smoke alarms through the home." },
    type: "quiz",
    topic: "Smoke alarms",
    question: "Smoke alarms are the one fire measure that actually saves lives in houses. Beyond complying with AS 3786, what two things does the NCC demand of how they're powered and connected?",
    choices: [
      { text: "Powered from the mains (where mains is supplied), and interconnected so all sound together", correct: true,
        feedback: "Correct. Mains power means no dead battery on the night it matters; interconnection means the laundry alarm wakes the far bedroom. A battery-only, standalone alarm is exactly what fails in fatal house fires." },
      { text: "Battery-powered only, so they work in a blackout", correct: false,
        feedback: "Backwards — mains-powered (with battery backup per AS 3786) is required wherever mains is available, precisely because flat batteries are the classic failure. Interconnection is also mandatory." },
      { text: "One alarm in the kitchen is enough", correct: false,
        feedback: "Kitchens are actually avoided (cooking causes false alarms). Alarms go on every storey and near bedrooms, mains-powered and interconnected so the whole house sounds at once." }
    ],
    explanation:
      "9.5.1: smoke alarms comply with AS 3786, are powered from the consumer mains where available, and are interconnected wherever there's more than one — so a detection anywhere sounds everywhere. (A Class 10a garage prone to false alarms may use an AS 1670.1 alternative there, provided proper alarms protect the rest of the house.) This satisfies Volume Two's H3P2: automatic smoke warning with efficacy and reliability both above 0.95.",
    source: {
      clause: "9.5.1", clauseTitle: "Smoke alarm requirements", page: 243,
      quote:
"Smoke alarms must—\n" +
"(a) be located in— (i) a Class 1a building in accordance with 9.5.2 and 9.5.4; and (ii) a Class 1b building in accordance with 9.5.3 and 9.5.4; and\n" +
"(b) comply with AS 3786, except that in a Class 10a private garage where the use of the area is likely to result in smoke alarms causing spurious signals, any other alarm deemed suitable in accordance with AS 1670.1 may be installed provided that smoke alarms complying with AS 3786 are installed elsewhere ...; and\n" +
"(c) be powered from the consumer mains source where a consumer mains source is supplied to the building; and\n" +
"(d) be interconnected where there is more than one alarm."
    }
  },

  /* ---------- 9.5.2 smoke alarm location ---------- */
  {
    id: "smoke-alarm-location",
    figure: { src: "assets/photos/ncc-fig-9-5-2a.png",
             alt: "NCC Figure 9.5.2a",
             caption: "Smoke alarm locations in a Class 1a home (alarms shown as dots). Source: ABCB Housing Provisions Standard 2025, Figure 9.5.2a." },
    type: "quiz",
    topic: "Smoke alarms",
    question: "Where in a Class 1a house must smoke alarms go?",
    choices: [
      { text: "On every storey, and in/near the bedrooms — in corridors or hallways serving bedrooms", correct: true,
        feedback: "Correct. The deadly fire is the one that starts while you sleep, so alarms guard the escape path between bedrooms and the rest of the house, on every level — including a storey with no bedrooms at all." },
      { text: "Only inside each bedroom", correct: false,
        feedback: "Close — alarms guard the path OUT: corridors and hallways serving bedrooms (and a storey with no bedrooms still needs one). Inside-the-bedroom is allowed but the corridor coverage is the requirement." },
      { text: "Just one, central to the house", correct: false,
        feedback: "One alarm can't wake a person two doors and a closed door away in time. Every storey, and the bedroom approaches — interconnected so they all sound together." }
    ],
    explanation:
      "9.5.2: in a Class 1a building, alarms go in any storey containing bedrooms — in every corridor/hallway serving a bedroom (or, with no hallway, between the bedrooms and the rest of the dwelling) — AND on any storey without bedrooms. 9.5.4 sets the install geometry: on or near the ceiling, ≥300 mm from any wall-ceiling corner, 500–1500 mm from ceiling apexes; wall-mounted only where ceiling mounting isn't possible, then 300–500 mm down from the ceiling.",
    source: {
      clause: "9.5.2 & 9.5.4", clauseTitle: "Location — Class 1a buildings / Installation", page: 243,
      quote:
"9.5.2 — In a Class 1a building, smoke alarms must be located in— (a) any storey containing bedrooms, every corridor or hallway associated with a bedroom, or if there is no corridor or hallway, in an area between the bedrooms and the rest of the dwelling ...\n\n" +
"9.5.4 — [Smoke alarms required by] 9.5.2 and 9.5.3 must be installed on or near the ceiling, in accordance with the following: (a) Where a smoke alarm is located on the ceiling it must be— (i) a minimum of 300 mm away from the corner junction of the wall and ceiling; and (ii) between 500 mm and 1500 mm away from the high point and apexes of the ceiling, if the room has a sloping ceiling. (b) Where (a) is not possible, the smoke alarm may be installed on the wall, and located a minimum of 300 mm and a maximum of 500 mm off the ceiling at the junction with the wall."
    }
  },

  /* ---------- finale: fire inspection (defect) ---------- */
  {
    id: "fire-inspection",
    type: "defect",
    topic: "Fire safety inspection",
    media: { kind: "svg", src: "assets/svg/defect-fire.svg",
             alt: "Cutaway of a house showing a boundary wall, a separating wall to an attached dwelling, and smoke alarm positions, some compliant and some not",
             caption: "" },
    question: "Final fire check across this attached pair of homes. Inspect the five marked spots: three breach what you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 10, y: 54, w: 7,  h: 12, badge: "below", defect: true,  label: "Boundary wall has an openable window, 600 mm off the boundary",
        feedback: "Defect. This wall is 600 mm from the boundary — inside the 900 mm zone — so it must be fire-resisting with restricted openings. A standard openable window here is a hole straight through the fire barrier. (9.2.1, 9.2.3)" },
      { x: 47, y: 32, w: 9,  h: 22, defect: true,  label: "Separating wall stops at the ceiling",
        feedback: "Defect. The party wall between the two dwellings stops at ceiling level, leaving the roof space open across both homes — fire and smoke pass straight over the top. It must extend to the underside of the roof. (9.3.1)" },
      { x: 71, y: 39, w: 10, h: 12, badge: "below", defect: true,  label: "Smoke alarm in the kitchen only",
        feedback: "Defect. The only alarm is over the cooktop — guaranteed false alarms (so it gets disconnected) and nothing guarding the bedrooms. Alarms belong in hallways serving bedrooms, on every storey, mains-powered and interconnected. (9.5.1, 9.5.2)" },
      { x: 27, y: 39, w: 10, h: 12, badge: "below", defect: false, label: "Interconnected alarm in the bedroom hallway",
        feedback: "That one's fine. A mains-powered alarm in the hallway serving the bedrooms, interconnected with the others — exactly where and how 9.5.2 wants it. (9.5.2, 9.5.4)" },
      { x: 85, y: 30, w: 12, h: 14, defect: false, label: "Non-combustible eaves with fascia set back",
        feedback: "That one's fine. Non-combustible eaves lining and gutter encroach into the boundary zone, with the combustible fascia held 450 mm clear of the boundary — a listed allowable encroachment. (9.2.9)" }
    ],
    explanation:
      "Fire safety for houses comes down to barriers and warning. The barriers must be complete — a wall with a hole in it (the window) or a gap at the top (the ceiling-height party wall) isn't a barrier at all. And the warning must be where sleeping people need it (bedroom approaches), not where it gets switched off (the kitchen). The compliant details show both done right.",
    source: {
      clause: "9.2.1, 9.3.1 & 9.5.2", clauseTitle: "External walls / Separating walls / Smoke alarm location", page: 209,
      quote:
"9.2.1 — An external wall of a Class 1 building, and any openings in that wall, must comply with 9.2.3 if the wall is less than— (a) 900 mm from an allotment boundary ...\n" +
"9.3.1(1)(c) — [A separating wall must] extend— (i) if the building has a non-combustible roof covering, to the underside of the roof covering ...\n" +
"9.5.2 — In a Class 1a building, smoke alarms must be located in— (a) any storey containing bedrooms, every corridor or hallway associated with a bedroom ..."
    }
  }

  ]
};
