/* ============================================================
   PHASE 10 — DECKS, FIREPLACES & HAZARDS (ancillary provisions)
   Content from: ABCB Housing Provisions Standard 2025, Section 2
   (structure) and Section 12 (ancillary: alpine areas, deck
   attachment, fireplaces/chimneys), plus the NCC 2025 Volume Two
   layer (H1D2 structure, Part H7: swimming pools H7D2, heating
   appliances H7D5, bushfire H7D4; H1D9 earthquake / H1D10 flood).
   Editing guide: docs/CONTENT-GUIDE.md · Ledger: docs/COVERAGE.md
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["ancillary"] = {
  id: "ancillary",
  title: "Decks, fireplaces & hazards",
  intro:
    "The house itself is finished and up to code. This phase is the extras and the hazards: the deck bolted to " +
    "the back wall, the fireplace and chimney, building in the snow — and the dangerous-site rules for swimming " +
    "pools, bushfire and flood. They live in their own corners of the code (Housing Provisions Section 12 and " +
    "Volume Two Part H7), but they're where some of the most serious safety failures happen: decks collapse, " +
    "fireplaces start house fires, and unfenced pools drown toddlers.",
  learnList: [
    "The umbrella structural rule (resist all actions) behind every phase",
    "Attaching decks and balconies to walls; alpine-area construction",
    "Fireplaces, hearths and chimneys",
    "Hazard sites: swimming pool barriers, bushfire (BAL) and flood"
  ],

  questions: [

  /* ---------- HP Section 2 / V2 H1D2 structure umbrella ---------- */
  {
    id: "structure-umbrella",
    type: "quiz",
    topic: "The rule book",
    question: "Underneath every phase you've played sits one structural principle (Housing Provisions Section 2, Volume Two [[ncc clause numbering|H1P1]]). In plain terms, what must a building's structure always do?",
    choices: [
      { text: "Its resistance must be greater than the most critical combination of actions (loads) it could face", correct: true,
        feedback: "Correct. 'Actions' are loads — gravity, wind, earthquake, the weight of people and furniture. The structure must out-resist the worst realistic combination of them, worked out via AS/NZS 1170. Every footing, wall and beam rule traces back to this." },
      { text: "It must never move at all", correct: false,
        feedback: "Everything moves a little — the rule isn't zero movement, it's that resistance must exceed the most critical action effect (load combination) with appropriate reliability." },
      { text: "It must be made of concrete", correct: false,
        feedback: "Material-neutral. The principle is performance: resistance > the most critical combination of actions. Timber, steel, masonry all qualify if they meet it." }
    ],
    explanation:
      "Section 2 (and H1D2) is the structural umbrella: a building must resist the most critical effect from different combinations of actions (dead load, live load, wind, earthquake…), determined using AS/NZS 1170. The footing, masonry, framing and roof recipes in earlier phases are all pre-engineered ways of satisfying it. It also points to the special-hazard structural clauses — earthquake areas (H1D9) and flood hazard areas (H1D10) — for sites that need them.",
    source: {
      clause: "2.2.2 (HP) / H1D2 (V2)", clauseTitle: "Resistance to actions / Structural provisions", page: 28,
      quote:
"2.2.2 Resistance to actions — The resistance of a building or structure must be greater than the most critical action effect resulting from different combinations of actions, where— (a) the most critical action effect ... must be determined in accordance with 2.2.3 and the general design procedures contained in AS/NZS 1170.0; and (b) the resistance ... is determined in accordance with 2.2.4.\n\n" +
"NCC Volume Two H1D2 — A Class 1 or Class 10 building must be constructed in accordance with— (a) Section 2 of the ABCB Housing Provisions; or (b) the relevant provisions of H1D3 to H1D12; or (c) any combination thereof."
    }
  },

  /* ---------- 12.3 deck attachment ---------- */
  {
    id: "deck-attachment",
    type: "quiz",
    topic: "Decks",
    figure: { src: "assets/photos/ncc-fig-12-3-2a.png",
             alt: "NCC Figure 12.3.2a",
             caption: "Attaching a deck to a wall with a waling plate. Source: ABCB Housing Provisions Standard 2025, Figure 12.3.2a." },
    question: "A timber deck is being bolted to the back wall of the house. Deck collapses almost always start at this connection. What does the Housing Provisions require for attaching it with a [[waling plate]]?",
    choices: [
      { text: "A sized waling plate fixed with specified anchors/screws, and the joist span nearest the wall limited to 3 m", correct: true,
        feedback: "Correct. The waling plate (a beam bolted along the wall) spreads the deck's load into the structure, the anchors are sized to the wall type, and capping the nearest joist span at 3 m limits how much load lands on that critical connection." },
      { text: "A couple of bugle screws into the cladding", correct: false,
        feedback: "Screwing into cladding (not structure) is exactly how decks pull off walls and collapse. The load must go through a proper waling plate into solid framing or core-filled masonry, with sized fixings." },
      { text: "Nothing special — it's just a deck", correct: false,
        feedback: "Deck-to-wall failures are among the deadliest residential structural failures. Part 12.3 sets the waling plate size, the fixing type for each wall material, and the 3 m joist-span limit precisely because this joint is so commonly botched." }
    ],
    explanation:
      "12.3: framed decks and balconies attached to a wall use a waling plate (e.g. 140 × 35 F5/MGP10 to core-filled masonry, 90 × 35 to timber frames), with the joist span nearest the wall ≤3 m, and fixings to suit the wall — M12 chemical/mechanical anchors into masonry, No. 14 screws ≥44 mm into timber framing, M12 bolts into steel — staggered along the plate. It satisfies the structural Performance Requirement via H1D11. The figure shows the assembly.",
    source: {
      clause: "12.3.2", clauseTitle: "Attachment of framed decks and balconies to external walls using a waling plate", page: 331,
      quote:
"(b) The joist span nearest the external wall must not be more than 3 m (single or continuous span).\n" +
"(c) The size of a waling plate ... must be not less than— (i) for a timber waling plate— (A) 140 x 35 mm with a minimum stress grade of F5 or MGP10 when fixed to concrete core-filled masonry using M12 chemical or expanding/mechanical anchors; or (B) 90 x 35 mm ... when fixed to timber frames ...\n" +
"(e) Fixings for attaching a waling plate to an external wall must be— (i) for timber external wall frames ... No. 14 partial threaded self-drilling screws so that each screw is embedded not less than 44 mm into the joist or bearer member; and (ii) for steel external wall frames, 8.8/S M12 bolts ...; and [for masonry] 4.6/S M12 chemical or expanding/mechanical anchors ..."
    }
  },

  /* ---------- 12.4.2 fireplace hearth ---------- */
  {
    id: "fireplace-hearth",
    type: "quiz",
    topic: "Fireplaces",
    figure: { src: "assets/photos/ncc-fig-12-4-2.png",
             alt: "NCC Figure 12.4.2",
             caption: "Fireplace hearth clearances from combustible materials. Source: ABCB Housing Provisions Standard 2025, Figure 12.4.2." },
    question: "An open fireplace is being built. The non-combustible [[hearth]] in front must extend far enough that sparks and embers land on stone, not carpet. How far must it reach?",
    choices: [
      { text: "At least 300 mm beyond the front of the opening and 150 mm beyond each side", correct: true,
        feedback: "Correct. A popping ember needs somewhere safe to land. The hearth (stone, concrete or masonry) extends 300 mm out front and 150 mm past each side, and combustible flooring/framing must stay 150 mm clear of its upper surface." },
      { text: "It just needs to be under the firebox", correct: false,
        feedback: "Embers spit OUT of an open fire onto the floor in front. The hearth must reach 300 mm past the front and 150 mm past the sides — well beyond the opening itself." },
      { text: "Any tiled area is fine", correct: false,
        feedback: "Tiles over a timber floor still conduct and let combustibles sit too close. The hearth must be genuinely non-combustible (stone/concrete/masonry), sized 300 mm front / 150 mm sides, with combustibles ≥150 mm from its surface." }
    ],
    explanation:
      "12.4.2: an open fireplace needs a non-combustible hearth extending ≥300 mm beyond the front of the opening and ≥150 mm beyond each side, not sloping away from the back hearth, with combustible flooring/framing kept ≥150 mm from its upper surface. The side and back walls are two leaves of solid masonry (≥180 mm combined), built on footings to 4.2.18 (Phase 2's fireplace pad). Volume Two's H7D5 also lets a manufactured solid-fuel heater be installed to AS/NZS 2918 instead.",
    source: {
      clause: "12.4.2", clauseTitle: "Open fireplace construction", page: 336,
      quote:
"An open fireplace ... must have— (a) all masonry constructed in accordance with H1D5; and (b) a hearth constructed of stone, concrete, masonry or similar non-combustible material so that— (i) it extends not less than 300 mm beyond the front of the fireplace opening and not less than 150 mm beyond each side of that opening; and (ii) its upper surface does not slope away from the back hearth ...; and (iii) combustible material, such as flooring or framing members below or around the external edge of the hearth, is situated not less than 150 mm from the upper surface of the hearth; and (c) walls forming the sides and back ... constructed in 2 separate leaves of solid masonry with a total combined thickness not less than 180 mm ...; and (d) the fireplace must be constructed on footings complying with 4.2.18."
    }
  },

  /* ---------- 12.4.3 chimney ---------- */
  {
    id: "chimney",
    media: { kind: "svg", src: "assets/svg/q-chimney.svg",
             alt: "A masonry chimney flue lined inside",
             caption: "Inside a masonry chimney." },
    type: "quiz",
    topic: "Fireplaces",
    question: "Above the firebox rises the chimney. Why does the NCC require the inside of a masonry chimney to be lined with at least 10 mm of mortar 'parging'?",
    choices: [
      { text: "To seal the joints so hot smoke and embers can't leak through the brickwork into the roof space", correct: true,
        feedback: "Correct. Raw brickwork has porous mortar joints; over years, hot flue gases find every gap. A continuous parge coat seals the flue so sparks and carbon monoxide go up and out, not into the roof cavity or wall." },
      { text: "To make it look neat — nobody sees inside a chimney", correct: false,
        feedback: "It's purely functional and safety-critical: the smooth, sealed parge lining stops hot gas and embers escaping through the masonry joints. Chimney leaks are a classic cause of house fires." },
      { text: "To insulate the house", correct: false,
        feedback: "Not insulation — sealing. The 10 mm composition-mortar parge lining makes the flue gas-tight so embers and smoke can't penetrate the brickwork. The chimney must also terminate well clear of the roof." }
    ],
    explanation:
      "12.4.3: a masonry chimney complies with H1D5 (masonry) and is lined internally with ≥10 mm of composition mortar parging (1 cement : 1 lime : 5 sand), and must terminate a set distance above the roof so sparks clear the roofing and draught works. It's the same 'seal every joint' instinct as the cavity weepholes and roof flashings — here, keeping fire INSIDE the flue.",
    source: {
      clause: "12.4.3", clauseTitle: "Chimney construction", page: 336,
      quote:
"The construction of a chimney must comply with H1D5 and the following:\n" +
"(a) The walls of the chimney above the level referred to in 12.4.2(c) must be lined internally to a thickness of not less than 10 mm with composition mortar parging.\n" +
"(b) The composition mortar in (a) must comply with AS 3700 or AS 4773 except that the mortar must be mixed by volume in the proportions of 1 part cement : 1 part lime : 5 parts sand.\n" +
"(c) The chimney or flue must terminate not less than 300 [mm above the roof] ..."
    }
  },

  /* ---------- 12.2 alpine ---------- */
  {
    id: "alpine",
    media: { kind: "svg", src: "assets/svg/q-alpine.svg",
             alt: "Snow on a flight of steps in an alpine area",
             caption: "Snow on the steps." },
    type: "quiz",
    topic: "Alpine areas",
    question: "Building in an [[alpine area]] (snow country) adds special rules. One is that stairs get a GENTLER geometry than normal — why?",
    choices: [
      { text: "Snow and ice make steep steps treacherous, so risers are lower and goings deeper (R 115–150, G 355–375)", correct: true,
        feedback: "Correct. A normal stair (riser up to 225) is lethal under ice. Alpine stairs cap the riser at 150 and deepen the going, giving a flatter, surer footing — plus the snow-load and clearance rules for the building itself." },
      { text: "To save timber in remote areas", correct: false,
        feedback: "It's about ice safety, not material. Alpine stairs use lower risers (115–150) and deeper goings than the normal 130–225 range, because steep steps are deadly when snow-covered." },
      { text: "Snow makes people shorter", correct: false,
        feedback: "The gentler geometry is for traction on ice and snow underfoot. Alpine areas also add snow-load structural rules and clear-space requirements around buildings." }
    ],
    explanation:
      "Part 12.2: in alpine areas, stairs use a modified, gentler geometry (riser 115–150 mm, going 355–375 mm, 2R+G 605–675 — flatter than the standard 130–225 / 215–355 / 540–700), plus clear-space rules around buildings and snow-load considerations. Alpine sites are one of the cases that push a build beyond the ordinary recipes — like Class H soil or wind above N3 in earlier phases.",
    source: {
      clause: "12.2.3 & 12.2.4", clauseTitle: "Construction in alpine areas", page: 328,
      quote:
"Construction in alpine areas — [stair geometry] Maximum risers (R) 150 mm; Minimum risers (R) 115 mm; Maximum going (G) 375 mm; Minimum going (G) 355 mm; Maximum slope relationship (2R + G) 675 mm; Minimum slope relationship (2R + G) 605 mm.\n\n" +
"12.2.4 Clear spaces around buildings — A building must be constructed so that— (a) for any external walls more than 3.6 m above the natural ground level, the distance of that part of the building from the allotment boundary (other than a road alignment) must be not less than 2.5 m plus an additional 100 mm for each 300 mm or part by which that part of the external wall exceeds a height of [3.6 m] ..."
    }
  },

  /* ---------- H7 pool barrier ---------- */
  {
    id: "pool-barrier",
    media: { kind: "svg", src: "assets/svg/q-pool-barrier.svg",
             alt: "A pool with a safety barrier and gate",
             caption: "A backyard pool and its barrier." },
    type: "quiz",
    topic: "Hazard sites",
    question: "A swimming pool goes in out the back. Volume Two's [[ncc clause numbering|H7P1]] demands a barrier. What must a pool barrier achieve?",
    choices: [
      { text: "A continuous barrier that resists impact and restricts young children's access to the pool", correct: true,
        feedback: "Correct. Toddler drowning is the hazard. The barrier must be continuous (no gaps a child slips through — echoes of the 125 mm sphere), strong enough to take impact, and have a self-closing, self-latching gate. The recipe is AS 1926.1." },
      { text: "A 'no swimming' sign", correct: false,
        feedback: "Signs don't stop a two-year-old. H7P1 requires a physical barrier that is continuous, impact-resistant and restricts young children — built to AS 1926.1 (and 1926.2 for the water-recirculation safety)." },
      { text: "Only required for public pools", correct: false,
        feedback: "It applies to a backyard pool with water more than 300 mm deep associated with a house. The barrier (to AS 1926.1) is one of the most safety-critical items in the whole code — drowning is fast and silent." }
    ],
    explanation:
      "H7P1 + H7D2: a pool with water deeper than 300 mm must have a barrier that is continuous for the full extent of the hazard, rigid enough to withstand impact, and restricts young children's access — satisfied by building to AS 1926.1 (barriers) and AS 1926.2 (water recirculation, against entrapment). It's the same child-safety logic as stair gaps and window restrictors in Phase 8, applied to the deadliest backyard hazard.",
    source: {
      doc: "v2",
      clause: "H7P1 & H7D2", clauseTitle: "Swimming pool access / Swimming pools", page: 148,
      quote:
"H7P1 Swimming pool access — A barrier must be provided to a swimming pool and must— (a) be continuous for the full extent of the hazard; and (b) be of a strength and rigidity to withstand the foreseeable impact of people; and (c) restrict the access of young children to the pool ... (Applications: H7P1 only applies to a swimming pool with a depth of water more than 300 mm.)\n\n" +
"H7D2 (1) Performance Requirement H7P1 is satisfied for a swimming pool with a depth of water more than 300 mm and which is associated with a Class 1 building, if it has safety barriers installed in accordance with— (a) AS 1926.1 ...; and (b) AS 1926.2."
    }
  },

  /* ---------- H7 bushfire ---------- */
  {
    id: "bushfire",
    media: { kind: "svg", src: "assets/svg/q-bushfire.svg",
             alt: "A house near a bushfire",
             caption: "A house in a bushfire-prone area." },
    type: "quiz",
    topic: "Hazard sites",
    question: "The block is in a designated bushfire-prone area. How does the NCC decide how much fire protection the house needs?",
    choices: [
      { text: "By its Bushfire Attack Level (BAL) — the construction must comply with AS 3959, which sets requirements by BAL rating", correct: true,
        feedback: "Correct. The site is assessed for its BAL (from BAL-LOW up to BAL-FZ, flame zone), and AS 3959 then dictates the construction — ember screens, shutters, non-combustible materials — scaled to that exposure. Higher BAL, tougher build." },
      { text: "Every bushfire-area house must be made of brick", correct: false,
        feedback: "It's graded, not one-size: the BAL rating (from radiant-heat exposure) sets the requirements via AS 3959. A low-BAL site needs far less than a flame-zone (BAL-FZ) site." },
      { text: "Bushfire isn't covered by the NCC", correct: false,
        feedback: "It is — Volume Two H7D4 sends designated bushfire-prone areas to AS 3959 (or the NASH steel standard), with requirements scaled to the site's Bushfire Attack Level." }
    ],
    explanation:
      "H7D4: in a designated bushfire-prone area, a Class 1 building (or associated Class 10a/deck) must be built to AS 3959 (or the NASH steel-framed bushfire standard). AS 3959 assesses the site's Bushfire Attack Level — BAL-LOW, 12.5, 19, 29, 40, FZ — from predicted radiant heat and ember attack, then scales the construction (ember-proofing, screens, shutters, materials) to match. Like wind class and soil class before it, BAL is a site rating that drives the build.",
    source: {
      doc: "v2",
      clause: "H7D4", clauseTitle: "Construction in bushfire prone areas", page: 154,
      quote:
"(1) The requirements of (2) only apply in a designated bushfire prone area.\n" +
"(2) Performance Requirement H7P5 is satisfied for a Class 1 building, or a Class 10a building or deck associated with a Class 1 building, if it is constructed in accordance with—\n" +
"(a) AS 3959; or\n" +
"(b) NASH Standard — Steel Framed Construction in Bushfire Areas."
    }
  },

  /* ---------- finale: ancillary defect ---------- */
  {
    id: "ancillary-inspection",
    type: "defect",
    topic: "Ancillary inspection",
    media: { kind: "svg", src: "assets/svg/defect-ancillary.svg",
             alt: "Cutaway of a backyard with a deck attached to the house, a pool with a barrier, and a fireplace hearth inside, some details compliant and some not",
             caption: "" },
    question: "Final walk-around of the extras: deck, fireplace and pool. Inspect the five marked spots: three breach what you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 34, y: 58, w: 8,  h: 10, defect: true,  label: "Deck ledger screwed into the cladding, not the frame",
        feedback: "Defect. The deck ledger is screwed straight into the weatherboard cladding, not through a waling plate into the wall framing. This is the classic deck-collapse detail — the load must reach solid framing via a sized waling plate. (12.3.2)" },
      { x: 48, y: 62, w: 14, h: 16, defect: true,  label: "Fireplace hearth too short at the front",
        feedback: "Defect. The non-combustible hearth stops barely past the firebox, with combustible flooring right up to the opening. It must extend at least 300 mm beyond the front and 150 mm each side, with combustibles kept 150 mm clear. (12.4.2)" },
      { x: 79, y: 62, w: 15, h: 18, defect: true,  label: "Pool gate propped open",
        feedback: "Defect. The pool barrier gate is propped open — a continuous, child-resistant, self-closing barrier is meaningless if it's wedged ajar. The barrier must restrict young children at all times. (H7P1, AS 1926.1)" },
      { x: 45, y: 13, w: 11, h: 15, badge: "below", defect: false, label: "Chimney lined and clear of the roof",
        feedback: "That one's fine. The chimney is parge-lined and terminates well above the roof — sparks and smoke go up and out, not into the roof space. (12.4.3)" },
      { x: 23, y: 62, w: 10, h: 10, badge: "below", defect: false, label: "Deck joist span within 3 m",
        feedback: "That one's fine. The joist span nearest the wall is under 3 m, keeping the load on the wall connection within the deemed-to-satisfy limit. (12.3.2)" }
    ],
    explanation:
      "The extras kill people in ways the main house doesn't: a deck pulling off a wall, embers on the carpet, a toddler through an open pool gate. The fixes are unglamorous — a proper waling plate into the frame, a hearth that reaches past the opening, a gate that always latches — but they're among the most important details in the whole build.",
    source: {
      clause: "12.3.2, 12.4.2 & H7P1", clauseTitle: "Deck attachment / Fireplace hearth / Pool barrier", page: 331,
      quote:
"12.3.2(b) The joist span nearest the external wall must not be more than 3 m ... [fixed via a waling plate into framing/masonry].\n" +
"12.4.2(b)(i) [the hearth] extends not less than 300 mm beyond the front of the fireplace opening and not less than 150 mm beyond each side ...\n" +
"H7P1 — A barrier must be provided to a swimming pool and must— (a) be continuous for the full extent of the hazard; ... (c) restrict the access of young children to the pool ..."
    }
  }

  ]
};
