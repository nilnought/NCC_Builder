/* ============================================================
   PHASE 2 — FOOTINGS & SLABS
   Content from: ABCB Housing Provisions Standard 2025, Section 4
   (Part 4.2 Footings, slabs and associated elements) plus the
   NCC 2025 Volume Two layer (H1P1, H1D4, H2P3, H2D3).
   Verified against NCC 2025 (note: 4.2.22 was rewritten in 2025).
   ------------------------------------------------------------
   Editing guide: docs/CONTENT-GUIDE.md
   Coverage ledger: docs/COVERAGE.md (aim = 100% of relevant
   provisions in BOTH documents).
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["footings"] = {
  id: "footings",
  title: "Footings & slabs",
  intro:
    "The site is ready — time to give the house its feet. Everything above (walls, roof, the lot) " +
    "stands on what gets poured in this phase, and the ground it stands on moves: clay swells when wet " +
    "and shrinks when dry. Footings are how a house rides that movement without cracking. " +
    "Concrete is also wonderfully unforgiving: once it's poured, every shortcut is sealed inside forever. " +
    "That's why this phase ends at a real legal milestone: before any concrete is poured, the building " +
    "surveyor (certifier) must carry out a mandatory pre-pour inspection of the steel, membrane and " +
    "excavations — no sign-off, no pour. The final question of this phase IS that inspection.",
  learnList: [
    "Site classes A to P, and why the soil report drives everything",
    "When the Housing Provisions recipes may be used at all (Volume Two's conditions)",
    "Excavation, fill, bearing pressure and sloping sites",
    "Vapour barriers, reinforcement, cover and concrete spec",
    "Rafts, strip footings, stumps, and slabs with special loads"
  ],

  questions: [

  /* ---------- 4.2.2 site classification ---------- */
  {
    id: "site-classification",
    type: "quiz",
    topic: "Know your soil",
    media: { kind: "svg", src: "assets/svg/site-classes.svg",
             alt: "A scale of site classes from A to E plus P, with ground movement increasing along the scale",
             caption: "The site class scale — movement increases from A to E, P is 'problem'." },
    question: "The soil report for your block says [[site classification|Class M]]. Before any footing is designed, what does that actually tell you?",
    choices: [
      { text: "Moderately reactive clay — the ground moves a moderate amount as moisture changes", correct: true,
        feedback: "Correct. The classes run A (stable sand/rock), S (slightly reactive), M (moderately), H (highly), E (extremely reactive), and P for problem sites — soft soils, landslip, erosion. Footings are designed for that movement." },
      { text: "M is for 'medium-strength rock'", correct: false,
        feedback: "Rock is the calmest site there is — that's Class A. The letters mostly grade [[reactive soil|clay reactivity]]: how much the ground swells and shrinks with moisture." },
      { text: "M means a 'moist' site needing drainage works", correct: false,
        feedback: "Moisture is the cause but not the meaning — Class M describes how much the soil MOVES as its moisture changes. Drainage was last phase; this classification drives the footing design." }
    ],
    explanation:
      "Everything in this phase starts with the site class, done in accordance with AS 2870. A, S and M sites can use the Housing Provisions footing recipes. H, E and P are beyond this book — those need an engineer working from AS 2870 directly. One letter on a soil report decides which path the whole footing design takes.",
    source: {
      clause: "4.2.2 + Table 4.2.2", clauseTitle: "Site classification", page: 52,
      quote:
"The foundations where footings and slabs are to be located must be classified in accordance with AS 2870.\n\n" +
"Table 4.2.2 (explanatory) — General definition of site classes:\n" +
"A — Most sand and rock sites with little or no ground movement from moisture changes\n" +
"S — Slightly reactive clay sites with only slight ground movement from moisture changes\n" +
"M — Moderately reactive clay or silt sites which can experience moderate ground movement from moisture changes\n" +
"H — Highly reactive clay sites which can experience high ground movement from moisture changes\n" +
"E — Extremely reactive clay sites which can experience extreme ground movement from moisture changes\n" +
"A to P — Filled sites — see AS 2870\n" +
"P — Sites which include soft soils, such as soft clay or silt or loose sands; landslip; mine subsidence; collapsing soils; soils subject to erosion; reactive sites subject to abnormal moisture conditions or sites which cannot be classified otherwise."
    }
  },

  /* ---------- Volume Two: H1D4 conditions (+ H1P1) ---------- */
  {
    id: "h1d4-limits",
    type: "quiz",
    topic: "The rule book",
    question: "Volume Two's clause [[ncc clause numbering|H1D4]] only lets you use this Section's pre-engineered footing recipes for fairly ordinary houses — anything else goes to an engineer with the Australian Standards. Which of these projects CAN use the Housing Provisions recipes?",
    choices: [
      { text: "A single-storey rectangular house on a Class M site", correct: true,
        feedback: "Correct — Class A, S or M site, simple right-angled shape, no more than 18 m long, max two storeys: that's exactly the 'ordinary house' the recipes were engineered for." },
      { text: "A house with sweeping curved walls on a Class H site", correct: false,
        feedback: "Twice outside the rules: Class H (highly reactive) sites are beyond the Housing Provisions entirely, and the recipes only cover shapes made of external right angles. This one's an AS 2870 engineering job." },
      { text: "A 24 m-long slab for a sprawling single-storey home on Class A", correct: false,
        feedback: "Good site, but too long — the recipes stop at 18 m of slab. Long slabs shrink and bend more than the standard designs allow for, so past 18 m an engineered design takes over." }
    ],
    explanation:
      "This is the gatekeeper clause. H1D4 says footings satisfy the structural Performance Requirement (H1P1 — the building must reliably resist all the loads it will face) if designed to AS 2870 or AS 3600, OR via Housing Provisions Section 4 — but the Section 4 route has a checklist: Class A, S or M site, slab not over 18 m, right-angled shape, at most one re-entrant corner, no aggressive soils, max two storeys, walls under 8 m, not in an alpine area. Fail any item and the recipes don't apply.",
    source: {
      doc: "v2",
      clause: "H1D4", clauseTitle: "Footings and slabs", page: 96,
      quote:
"(1) Performance Requirement H1P1 is satisfied for the design and construction of footings and slabs if they comply with either (a) or (b):\n" +
"(a) One of the following: (i) AS 2870. (ii) AS 3600.\n" +
"(b) Subject to (2), Section 4 of the ABCB Housing Provisions.\n" +
"(2) Section 4 of the ABCB Housing Provisions may only be used where—\n" +
"(a) the footing is on a Class A, S or M site (classified in accordance with AS 2870) with a uniform bearing capacity; and\n" +
"(b) any slab— (i) is not more than 18 m long or wide; and (ii) does not contain permanent joints excluding construction joints; and (iii) is of a geometric shape containing only external right angles, other than a slab in (c); and\n" +
"(c) any footing and slab in (b) has not more than one re-entrant corner; and\n" +
"(d) the footing and slab are not constructed on soil classified as an aggressive soil type; and\n" +
"(e) the structure supported by the footing does not contain— (i) more than two trafficable floors; or (ii) a wall height exceeding 8 m, excluding any gable; and ...\n" +
"(j) the site is not located in an alpine area; ...\n\n" +
"[H1P1 (excerpt): By resisting the actions to which it may reasonably be expected to be subjected, a building or structure, during construction and use, with appropriate degrees of reliability, must— (a) perform adequately under all reasonably expected design actions; and (b) withstand extreme or frequently repeated design actions; ...]"
    }
  },

  /* ---------- 4.2.3 excavation for footings ---------- */
  {
    id: "excavation-footings",
    media: { kind: "svg", src: "assets/svg/q-excavation.svg",
             alt: "Footing trench before the pour with roots and loose soil in the base",
             caption: "Footing trench, pre-pour — what must be fixed first?" },
    type: "quiz",
    topic: "Excavation",
    question: "The footing trenches are dug and you're doing the pre-pour walk. One of these three things you see MUST be fixed before any concrete goes in. Which?",
    choices: [
      { text: "Tree roots and loose crumbled soil in the bottom of the trench", correct: true,
        feedback: "Correct. The base must be free of loose earth, tree roots, mud and debris — roots rot away leaving voids, and loose soil compresses, so the footing would settle. Clean it out, then pour." },
      { text: "On this flat site, the trench base falls gently — about 1:40 — toward one end", correct: false,
        feedback: "That's allowed: on flat sites the base may slope up to 1:40 specifically so rainwater can drain out of the trench instead of ponding in it." },
      { text: "The trench sides are cut clean and vertical", correct: false,
        feedback: "That's not a problem — it's the requirement! Clean vertical sides mean the footing's width is exactly what was designed, with no soft backfilled edges." }
    ],
    explanation:
      "A footing is only as good as the surface it's poured on. So: clean vertical cuts, a base that's level (or up to 1:40 on flat sites, 1:10 on sloping sites), no loose earth, roots, mud or debris, and topsoil with grass roots stripped from under the whole foundation. On loose sandy sites prone to erosion, footings must also reach at least 300 mm below finished ground so the soil around them can't blow or wash away.",
    source: {
      clause: "4.2.3", clauseTitle: "Excavation for footings", page: 53,
      quote:
"(1) Excavation for footings, including thickenings for slabs and pads must be clean cut with vertical sides, wherever possible.\n" +
"(2) The base of the excavation must be— (a) for flat sites, generally level but may slope not more than 1:40 to allow excavations to drain; and (b) for sloping sites at an angle of not more than 1:10; and (c) for stepped footings in accordance with 4.2.7.\n" +
"(3) Footing excavations must be free of loose earth, tree roots, mud or debris.\n" +
"(4) Topsoil containing grass roots must be removed from the site of the foundation.\n" +
"(5) Excavation depths and soil cuts must comply with Part 3.2.\n" +
"(6) On loose sand sites or sites subject to wind or water erosion, the depth below finished ground level to the bottom of footings must be not less than 300 mm.\n" +
"(7) The height of a finished slab-on-ground must be in accordance with 3.3.3(b)."
    }
  },

  /* ---------- 4.2.4 filling under slabs ---------- */
  {
    id: "fill-under-slab",
    media: { kind: "svg", src: "assets/svg/q-fill-slab.svg",
             alt: "Layers of compacted fill under a slab with a thin top layer below the membrane",
             caption: "Under-slab fill — what goes on top before the membrane?" },
    type: "quiz",
    topic: "Fill",
    question: "The platform under the slab is built up with [[controlled fill]], compacted layer by layer (sound familiar from Phase 1?). What must go ON TOP of the fill before the [[vapour barrier]] is laid?",
    choices: [
      { text: "A level layer of clean quarry sand, at least 20 mm deep", correct: true,
        feedback: "Correct. The [[sand blinding]] gives the plastic vapour barrier a smooth bed — without it, sharp stones in the fill puncture the membrane the moment workers walk on it." },
      { text: "A layer of builder's rubble to save sand", correct: false,
        feedback: "The exact opposite of the goal — rubble is all sharp edges. The whole point of the layer is to protect the membrane above it from punctures." },
      { text: "Nothing — the vapour barrier lies straight on the compacted fill", correct: false,
        feedback: "The membrane would be lying on compacted earth and stone, and every sharp point becomes a hole. The NCC requires a cushion: 20 mm of clean sand (or a graded-stone termite layer doing double duty)." }
    ],
    explanation:
      "Under-slab fill has its own tighter rules than general earthworks: sand fill in layers up to 300 mm (max 800 mm total for controlled fill), clay fill moist and in 150 mm layers (max 400 mm) — then the 20 mm sand blinding on top. Neatly, a graded-stone termite management system from Part 3.4 can substitute for the sand — one layer, two jobs.",
    source: {
      clause: "4.2.4", clauseTitle: "Filling under concrete slabs", page: 53,
      quote:
"Filling placed under a slab (except where the slab is suspended) must comply with the following:\n" +
"(a) Filling must be either controlled fill or rolled fill as follows:\n" +
"  (i) Sand used in controlled fill or rolled fill must not contain any gravel size material and achieve a blow count of 7 or more per 300 mm using the test method described in AS 1289.6.3.3.\n" +
"  (ii) Clay used in controlled fill or rolled fill must be moist during compaction.\n" +
"  (iii) Controlled fill: (A) Sand fill up to 800 mm deep — well compacted in layers not more than 300 mm deep by vibrating plate or vibrating roller. (B) Clay fill up to 400 mm deep — well compacted in layers of not more than 150 mm by a mechanical roller.\n" +
"  (iv) Rolled fill: (A) Sand fill up to 600 mm deep — compacted in layers of not more than 300 mm by repeated rolling by an excavator or other suitable mechanical equipment. (B) Clay fill up to 300 mm deep — compacted in layers of not more than 150 mm by repeated rolling by an excavator or similar machine.\n" +
"(b) A level layer of clean quarry sand must be placed on top of the fill, with a depth of not less than 20 mm.\n" +
"(c) A graded stone termite management system complying with Part 3.4 may be substituted for the sand required in (b)."
    }
  },

  /* ---------- 4.2.5 foundations / bearing pressure ---------- */
  {
    id: "bearing-pressure",
    media: { kind: "svg", src: "assets/svg/q-bearing.svg",
             alt: "A wide slab panel and a small pad footing pressing on soil",
             caption: "Spread panel vs concentrated footing — how strong must the soil be?" },
    type: "quiz",
    topic: "Foundations",
    question: "Soil strength is measured as [[bearing pressure]] (in kilopascals). The NCC sets one minimum for soil under slab panels and internal beams, and DOUBLE that for soil under pad and strip footings. What are the two numbers?",
    choices: [
      { text: "50 kPa under slab panels; 100 kPa under pad and strip footings", correct: true,
        feedback: "Correct. A slab panel spreads its load over a huge area, so 50 kPa soil carries it fine. Pad and strip footings concentrate the building's weight onto small patches, so their soil must work twice as hard." },
      { text: "100 kPa under slab panels; 50 kPa under pad and strip footings", correct: false,
        feedback: "Backwards. Think about who's carrying more per square metre: the big spread-out slab panel barely presses on the ground, while a small pad footing carries a whole column's load — the pad needs the stronger soil." },
      { text: "Both need 50 kPa — soil is soil", correct: false,
        feedback: "Concentration matters. A footing squeezes the building's weight onto a small area, so the soil under it (100 kPa) must be twice as strong as under spread-out slab panels (50 kPa)." }
    ],
    explanation:
      "Same logic as high heels versus snowshoes: the load is identical, the pressure isn't. Edge beams sitting on fill get an extra rule — the controlled fill must extend at least 1 m past the building's perimeter, sloping out no steeper than 2 horizontal to 1 vertical, so the beam's load can spread safely inside the compacted zone.",
    source: {
      clause: "4.2.5", clauseTitle: "Foundations for footings and slabs", page: 53,
      quote:
"Footings and slabs, including internal and edge beams, must be founded on soil with an allowable bearing pressure as follows:\n" +
"(a) Slab panels, load support panels and internal beams — natural soil with an allowable bearing pressure of not less than 50 kPa or controlled fill or rolled fill compacted in accordance with 4.2.4.\n" +
"(b) Edge beams connected to the slab — natural soil with an allowable bearing pressure of not less than 50 kPa or controlled fill compacted in accordance with 4.2.4(a)(iii) and extending past the perimeter of the building 1 m with a slope ratio not steeper than 2 horizontal to 1 vertical (see Figure 4.2.5).\n" +
"(c) Pad footings, strip footings and edge beams not connected to the slab, must be— (i) founded in natural soil with an allowable bearing pressure of not less than 100 kPa; or (ii) for Class A and S sites they may be founded on controlled sand fill in accordance with 4.2.4(a)."
    }
  },

  /* ---------- 4.2.6 slab edge support on sloping sites ---------- */
  {
    id: "sloping-edge-beams",
    type: "quiz",
    topic: "Sloping sites",
    media: { kind: "svg", src: "assets/svg/q-sloping-fill.svg",
             alt: "Cross-section of a cut-and-fill platform with the slab's downhill edge beam landing over the filled half, marked with a question mark",
             caption: "The downhill edge beam lands over the fill — now what?" },
    question: "Cut-and-fill platform (Phase 1's handiwork). The slab's downhill [[edge beam]] lands over the filled half. Plain rolled fill isn't enough to carry an edge beam — what does the NCC accept?",
    choices: [
      { text: "Controlled fill, OR a deepened beam / piers reaching natural soil, OR stepping the footing down", correct: true,
        feedback: "Correct — all four listed options share one idea: the edge beam's load must end up in ground of known strength, either properly compacted controlled fill or the undisturbed natural soil below." },
      { text: "Just pour the edge beam on the rolled fill — it'll settle evenly", correct: false,
        feedback: "Rolled fill is acceptable under spread-out slab panels, but edge beams carry walls and roof. On fill of uncertain strength the heavy edge sinks, the light middle doesn't, and the slab cracks along that line." },
      { text: "Cantilever the slab edge over the fill so nothing touches it", correct: false,
        feedback: "Not one of the deemed-to-satisfy options — a cantilevered edge would need its own engineering. The listed solutions all put the load INTO solid ground rather than avoiding it." }
    ],
    explanation:
      "The downhill edge of a cut-and-fill slab is the classic failure point of sloping-site houses. The four acceptable fixes: (1) controlled fill under the beam per 4.2.5(b); (2) deepened edge beams or bulk piers designed to AS 3600; (3) deepen the beam itself until it reaches natural soil; (4) step the footing down the slope per AS 2870. And any cut for the platform still has to obey Part 3.2 — Phase 1 never really ends.",
    source: {
      clause: "4.2.6", clauseTitle: "Slab edge support on sloping sites", page: 55,
      quote:
"Footings and slabs installed on the low side of sloping sites must be as follows:\n" +
"(a) Slab panels — in accordance with 4.2.5(a).\n" +
"(b) Edge beams— (i) supported by controlled fill in accordance with 4.2.5(b) (see Figure 4.2.5, Option 1); or (ii) supported by deepened edge beams or bulk piers designed in accordance with AS 3600 (see Figure 4.2.5, Option 2); or (iii) deepened (as per AS 2870) to extend into the natural soil level with a bearing capacity in accordance with 4.2.5(b) (see Figure 4.2.5, Option 3); or (iv) stepped in accordance with AS 2870.\n" +
"(c) Edge beams not connected to the slab, pad footings and strip footings — founded in accordance with 4.2.5(c).\n" +
"(d) Where an excavation (cut) of the natural ground is used it must be in accordance with Part 3.2."
    }
  },

  /* ---------- 4.2.7 stepped footings ---------- */
  {
    id: "stepped-footings",
    type: "quiz",
    topic: "Sloping sites",
    media: { kind: "svg", src: "assets/svg/q-stepped-footing.svg",
             alt: "Side view of a wall on a sloping block; the strip footing in the trench below steps down like a staircase, with the height of one step marked",
             caption: "Side-on view of the wall (the house is behind it): the footing steps down the slope — how tall can a step be?" },
    question: "Down the slope, the [[strip footing]] steps like a staircase instead of one long ramp. Without any special reinforcement detailing, how tall can each step be?",
    choices: [
      { text: "200 mm maximum", correct: true,
        feedback: "Correct. Up to 200 mm, a step is small enough that the footing still acts like one continuous beam. Bigger steps (up to 2× the footing depth) are allowed, but only with the overlap details from Figure 4.2.7 — the sections must overlap by 1.5 times the footing depth." },
      { text: "There's no limit — concrete is concrete", correct: false,
        feedback: "Every step is an interruption in the footing-beam. Small ones (≤200 mm) are harmless; tall ones create a weak joint that must be stitched together with overlapping reinforcement per the figure." },
      { text: "Steps aren't allowed — sloping sites must use a sloped footing base", correct: false,
        feedback: "Both are allowed: a base sloped up to 1:10, or steps. Stepping is often easier to excavate and form — it just comes with the 200 mm simple-step limit." }
    ],
    explanation:
      "(The diagram is a side-on view along the wall — you're looking at the face of the wall, with the house behind it and the footing in its trench below ground.) A strip footing is really a continuous concrete beam, and beams hate sudden breaks. The footing base may slope at up to 1:10, or step — plain steps up to 200 mm, or engineered steps up to twice the footing depth (D) provided the upper and lower runs overlap by 1.5D with continuous reinforcement, as drawn in Figure 4.2.7's methods A to D.",
    source: {
      clause: "4.2.7 + Figure 4.2.7", clauseTitle: "Stepped footings", page: 55,
      quote:
"Stepped strip footings must—\n" +
"(a) have a base that is horizontal or be sloped at not more than 1:10; or\n" +
"(b) be stepped in accordance with one of the methods shown in Figure 4.2.7.\n\n" +
"Figure 4.2.7 (key dimensions): Step ≤ 200 with slope ≤ 1:10; Step ≤ 200 plain; Step > 200 but ≤ 2 D with overlap 1.5 D and extensions 300 or 25 bar diameters. All dimensions in millimetres."
    }
  },

  /* ---------- 4.2.8 vapour barrier — lap (number) ---------- */
  {
    id: "vapour-barrier-lap",
    type: "number",
    topic: "Vapour barrier",
    media: { kind: "photo", src: "assets/photos/own-vapour-barrier.jpg",
             alt: "Waffle pods sitting on black plastic vapour barrier inside edge formwork, with pipes penetrating the membrane",
             caption: "The black plastic under everything is the vapour barrier — this one wraps out under the edge formwork." },
    question: "The [[vapour barrier]] (the black plastic in the photo) comes in rolls, so sheets must overlap. Set the minimum lap at every joint.",
    slider: { min: 0, max: 400, step: 100, unit: "mm", start: 0, target: 200,
      hints: {
        "0":   "Sheets just butted edge-to-edge leave a moisture highway straight up into the slab. They must overlap.",
        "100": "Some overlap, but ground moisture migrates sideways through a narrow lap. The NCC wants double this.",
        "300": "Generous, but not the minimum the code asks for — wind it back.",
        "400": "That's nearly half a metre of doubled-up plastic — way past the requirement."
      }
    },
    explanation:
      "200 mm of lap at every joint, taped or sleeved tight around every pipe penetration, and any accidental puncture patched with more polyethylene and tape. The membrane must underlie the entire slab — including under the internal and edge beams — and finish at ground level, so the slab sits in a complete plastic bathtub (upside down).",
    source: {
      clause: "4.2.8(4)–(5)", clauseTitle: "Vapour barriers", page: 55,
      quote:
"(4) Installation: A vapour barrier must be installed as follows:\n" +
"(a) Lap not less than 200 mm at all joints.\n" +
"(b) Tape or seal with a close-fitting sleeve around all service penetrations.\n" +
"(c) Fully seal where punctured (unless for service penetrations) with additional polyethylene film and tape.\n" +
"(5) The vapour barrier must be placed beneath the slab so that the bottom surface of the slab is entirely underlaid and must extend under internal and edge beams to finish at ground level in accordance with Figure 4.2.8."
    }
  },

  /* ---------- 4.2.8 vapour barrier — material & repairs ---------- */
  {
    id: "vapour-barrier-repair",
    media: { kind: "svg", src: "assets/svg/q-vapour-repair.svg",
             alt: "A torn vapour barrier over fill",
             caption: "The membrane got torn — what now?" },
    type: "quiz",
    topic: "Vapour barrier",
    question: "A plumber's shovel just tore a hole in the [[vapour barrier]] next to a pipe. Also, the roll on site has no markings on it at all. What's the NCC-compliant path forward?",
    choices: [
      { text: "Patch the tear with extra polyethylene and tape — but the unbranded roll itself is a problem", correct: true,
        feedback: "Correct on both counts. Punctures get sealed with additional film and tape. But a compliant membrane must be continuously branded 'AS 2870 Concrete underlay, 0.2 mm Medium impact resistance' — an unmarked roll can't show it's the right material." },
      { text: "A bit of cloth duct tape over the hole and she'll be right", correct: false,
        feedback: "The repair must restore the membrane: additional POLYETHYLENE film plus tape. Tape alone over a hole, on dusty plastic, against ground moisture for the life of the building? No." },
      { text: "Small holes don't matter — concrete will fill them", correct: false,
        feedback: "Concrete touching wet ground through every hole is exactly the disease this membrane prevents — moisture wicks up through the slab for decades. Every puncture must be fully sealed." }
    ],
    explanation:
      "The vapour barrier is 0.2 mm polyethylene, medium impact resistant, tested to AS 2870, and the proof is printed on the plastic itself — 'AS 2870 Concrete underlay, 0.2 mm Medium impact resistance', branded continuously along the roll. That branding is the inspector's friend: no brand, no evidence, no pass.",
    source: {
      clause: "4.2.8(1)–(4)", clauseTitle: "Vapour barriers", page: 55,
      quote:
"(1) A vapour barrier must be installed under slab-on-ground construction for a Class 1 building and for a Class 10 building where the slab is continuous with the slab of a Class 1 building in accordance with (2), (3), (4) and (5).\n" +
"(2) Materials: A vapour barrier must be— (a) 0.2 mm nominal thickness polyethylene film; and (b) medium impact resistant, determined in accordance with criteria specified in clause 5.3.3.3 of AS 2870.\n" +
"(3) A vapour barrier must be branded continuously “AS 2870 Concrete underlay, 0.2 mm Medium impact resistance”.\n" +
"(4) Installation: ... (c) Fully seal where punctured (unless for service penetrations) with additional polyethylene film and tape."
    }
  },

  /* ---------- Volume Two: H2P3 rising damp + H2D3 ---------- */
  {
    id: "rising-damp-pr",
    type: "quiz",
    topic: "The rule book",
    question: "Zoom out: that sheet of black plastic ultimately serves a [[performance requirement]] in Volume Two — [[ncc clause numbering|H2P3]], 'Rising damp'. What outcome does it demand?",
    choices: [
      { text: "Moisture from the ground must be stopped from causing unhealthy conditions or damaging the building", correct: true,
        feedback: "Correct. H2P3 doesn't mention plastic at all — it demands the OUTCOME: ground moisture must never make the home unhealthy or quietly rot its parts. The vapour barrier is simply the standard recipe for achieving it." },
      { text: "All concrete must be kept perfectly dry forever", correct: false,
        feedback: "Concrete itself doesn't mind moisture — it actually cures better damp. The requirement protects the OCCUPANTS and the building elements above: no damp floors, mouldy carpets, or rotting frames." },
      { text: "Slabs must be elevated above the ground on piers", correct: false,
        feedback: "That's one conceivable design response, but the requirement doesn't dictate any method. Slab-on-ground with a vapour barrier satisfies it — that's the whole deemed-to-satisfy deal." }
    ],
    explanation:
      "The chain: H2P3 (Volume Two) states the outcome — ground moisture must not cause unhealthy conditions or deterioration. H2D3 says footings and slabs built per H1D4's pathways satisfy it. And inside that pathway sits clause 4.2.8's humble plastic sheet. Performance Requirement → Deemed-to-Satisfy clause → the thing the apprentice unrolls on a Tuesday. That's the NCC's whole architecture in one example.",
    source: {
      doc: "v2",
      clause: "H2P3 & H2D3", clauseTitle: "Rising damp / Footings and slabs", page: 112,
      quote:
"H2P3 — Rising damp:\n" +
"Moisture from the ground must be prevented from causing—\n" +
"(a) unhealthy or dangerous conditions, or loss of amenity for occupants; and\n" +
"(b) undue dampness or deterioration of building elements.\n\n" +
"H2D3 — Footings and slabs:\n" +
"Performance Requirement H2P3 is satisfied for footings and slabs if they are installed in accordance with H1D4(1)(a) or (b)."
    }
  },

  /* ---------- 4.2.9 edge rebates (+ 4.2.21 edge beam width) ---------- */
  {
    id: "edge-rebate",
    type: "quiz",
    topic: "Slab details",
    media: { kind: "svg", src: "assets/svg/edge-rebate.svg",
             alt: "Cross-section of a slab edge with a stepped-down ledge where the outer brick skin will sit, its depth marked with a question mark",
             caption: "The little step in the slab edge — what is it, and how small can it be?" },
    question: "For a brick-veneer house, the slab edge gets a step cast into its top outside corner — the [[edge rebate]] — a ledge for the outer brick skin to sit on, a little below floor level. How DEEP must that step down be (the vertical drop from floor level to the ledge)?",
    choices: [
      { text: "At least 20 mm deep, and it must be flashed and drained (or mortar-filled where it can't be flashed)", correct: true,
        feedback: "Correct. Even a 20 mm drop puts the brick seat below the inside floor level, so water coming down behind the bricks is caught below floor height — provided the rebate is flashed and drained so that water can get OUT." },
      { text: "At least 100 mm deep — bricks are heavy", correct: false,
        feedback: "It's not about carrying weight (the whole edge beam does that) — it's a water-management step. A 20 mm drop is enough to keep cavity moisture below floor level." },
      { text: "Rebates are decorative; any depth or none is fine", correct: false,
        feedback: "For cavity or veneer masonry they're required, minimum 20 mm deep — they're the detail that keeps water draining down the cavity from stepping over the slab edge into the house." }
    ],
    explanation:
      "Don't confuse the two numbers here — they measure different directions. The REBATE DEPTH is vertical: the step down from floor level to the brick ledge, minimum 20 mm (clause 4.2.9). The BEAM WIDTH is horizontal: cutting the ledge eats into the edge beam, so a separate clause (4.2.21) demands at least 200 mm of solid concrete width remaining at the level of the rebate's base — or 150 mm if steel ties (R10/N10 at 900 mm) reinforce it. Small vertical step, wide horizontal beam. Single-skin and clad-frame walls don't need rebates at all.",
    source: {
      clause: "4.2.9 & 4.2.21", clauseTitle: "Edge rebates / Minimum edge beam dimensions", page: 56,
      quote:
"4.2.9 — Edge rebates for slab-on-ground and stiffened raft with masonry cavity or veneer construction must comply with the following:\n" +
"(a) The rebate must not be less than 20 mm.\n" +
"(b) The edge rebate must be flashed and drained in accordance with H2D4 and where it cannot be flashed, it must be filled with mortar.\n\n" +
"4.2.21 — For footing slabs, the width of the edge beam at the base of the rebate must not be less than 200 mm, except that if R10 or N10 ties at 900 mm spacing (or equivalent) are provided to resist vertical forces, the width of the edge beam at the base of the rebate can be reduced to 150 mm."
    }
  },

  /* ---------- 4.2.10 concrete ---------- */
  {
    id: "concrete-spec",
    type: "quiz",
    topic: "Concrete",
    media: { kind: "photo", src: "assets/photos/own-slab-pour.jpg",
             alt: "Workers screeding wet concrete across a house slab during the pour",
             caption: "Pour day. The truck driver has an offer for you…" },
    question: "Pour day. The concrete's stiff, the pump's straining, and the truck driver offers to \"add a splash of water to get it flowing\". The slab was ordered as standard N20 with a 100 mm [[slump]]. What's the call?",
    choices: [
      { text: "No — adding water to push the slump past what was specified is prohibited", correct: true,
        feedback: "Correct, and it's written in exactly those terms. Extra water makes concrete flow beautifully — by weakening it. The water that doesn't react with cement leaves behind pores, and strength drops fast." },
      { text: "A splash is fine — water is an ingredient anyway", correct: false,
        feedback: "Water IS the strength dial: more water = weaker, more shrinkage, more cracking. That's why the clause bans adding water beyond the specified slump — 'a splash' on every truck is how a N20 slab quietly becomes N14." },
      { text: "Fine, as long as it's mixed for another 10 minutes", correct: false,
        feedback: "Mixing time doesn't undo chemistry — the water-to-cement ratio is what sets strength, and extra water permanently lowers it no matter how long the drum turns." }
    ],
    explanation:
      "The deemed-to-satisfy concrete is N20 grade (20 MPa at 28 days), 20 mm maximum aggregate, 100 mm nominal slump — slump being the wetness test where a cone of fresh concrete slouches 100 mm when unmolded. If the mix needs to flow better, that's a conversation with the batching plant (plasticisers), not a hose on site. Then place it, compact it (vibration drives out air pockets), and cure it properly.",
    source: {
      clause: "4.2.10", clauseTitle: "Concrete", page: 57,
      quote:
"Concrete must comply with the following:\n" +
"(a) Concrete must comply with AS 3600; and— (i) have a strength at 28 days of not less than 20 MPa (denoted as N20 grade); and (ii) have a 20 mm maximum nominal aggregate size; and (iii) have a nominal 100 mm slump.\n" +
"(b) Water must not be added to the mix to increase the slump to a value in excess of that specified.\n" +
"(c) Concrete must be placed, compacted and cured in accordance with good building practice."
    }
  },

  /* ---------- 4.2.11(5) reinforcement cover ---------- */
  {
    id: "rebar-cover",
    type: "quiz",
    topic: "Reinforcement",
    media: { kind: "svg", src: "assets/svg/rebar-cover.svg",
             alt: "Cross-section of a footing showing reinforcement inside concrete, with cover distances to the ground, to the membrane and to the top surface marked with question marks",
             caption: "Cover: the concrete 'skin' between the steel and the world." },
    question: "Steel inside concrete needs [[concrete cover|cover]] — a minimum skin of concrete between the bars and the outside world, or the steel rusts and bursts the concrete. Match the situation to the minimum cover:",
    choices: [
      { text: "40 mm to bare ground, 30 mm where a membrane separates, 20 mm to internal surfaces", correct: true,
        feedback: "Correct — and the pattern is the lesson: the harsher and wetter the exposure, the thicker the protective skin. Bare earth is worst (40), plastic-protected is better (30), dry indoor air is easiest (20)." },
      { text: "20 mm everywhere — steel is steel", correct: false,
        feedback: "Cover scales with exposure. Direct ground contact means constant moisture and salts attacking the steel — that face needs double the protection of an internal surface." },
      { text: "100 mm everywhere, to be safe", correct: false,
        feedback: "Too much cover is its own failure: the steel ends up so deep it can't do its job of catching cracks near the surface. Cover is a precise window, not 'more is better'." }
    ],
    explanation:
      "Rust is iron growing — corroding steel expands several times over and cracks the concrete off from inside (called spalling). The minimum covers: 40 mm to unprotected ground, 30 mm to a membrane against the ground, 20 mm to internal surfaces, 40 mm to external exposure. This is the real reason bar chairs exist — cover only happens if someone holds the steel in position while the concrete goes in.",
    source: {
      clause: "4.2.11(5)–(6)", clauseTitle: "Steel reinforcement", page: 57,
      quote:
"(5) Footings and slabs-on-ground must have concrete cover between the outermost edge of the reinforcement (including ligatures, tie wire etc.) and the surface of the concrete of not less than—\n" +
"(a) 40 mm to unprotected ground; and\n" +
"(b) 30 mm to a membrane in contact with the ground; and\n" +
"(c) 20 mm to an internal surface; and\n" +
"(d) 40 mm to external exposure.\n" +
"(6) Reinforcement must be free of loose rust, mud, paints and oils."
    }
  },

  /* ---------- 4.2.11(7) bar chairs ---------- */
  {
    id: "bar-chairs",
    type: "quiz",
    topic: "Reinforcement",
    media: { kind: "photo", src: "assets/photos/own-mesh-chairs.jpg",
             alt: "Slab mesh held up on small black plastic supports over white waffle pods, ready for the pour",
             caption: "The little black clips holding the mesh up — that's the whole question." },
    question: "In the photo, the slab mesh sits up on little plastic [[bar chair|bar chairs]]. Concreters walk all over this mesh during the pour. What are the chairs actually for, and how far apart can they be under mesh?",
    choices: [
      { text: "They hold the steel at its designed height so cover is maintained — max 800 mm apart for fabric", correct: true,
        feedback: "Correct. Mesh that gets walked flat onto the membrane ends up with zero bottom cover and sits uselessly at the bottom of the slab. Chairs at 800 mm centres keep it where the design needs it — even underfoot." },
      { text: "They stop the mesh rusting by keeping it off the damp plastic", correct: false,
        feedback: "A bit of pre-pour surface rust is actually fine (it helps concrete grip the steel). The chairs are about POSITION — height in the slab and cover all around — not about staying dry." },
      { text: "They're spacers for the waffle pods, nothing to do with the steel", correct: false,
        feedback: "The pods have their own spacers. Bar chairs belong to the reinforcement: they're the only thing standing between 'steel at design height' and 'steel trampled to the bottom of the pour'." }
    ],
    explanation:
      "Reinforcement only works where it was designed to be. So: firmly fixed so concreting can't shift it, supported on chairs of wire, concrete or plastic, wire chairs getting their own cover and flat bases on soft ground or membrane, and spacing not more than 800 mm under steel fabric. Cheap parts, load-bearing job.",
    source: {
      clause: "4.2.11(7)", clauseTitle: "Steel reinforcement", page: 57,
      quote:
"(7) Reinforcement must be placed as follows:\n" +
"(a) All reinforcement must be firmly fixed in place to prevent it moving during concreting operations.\n" +
"(b) Reinforcement must be supported off the ground or the forms by bar chairs made from wire, concrete or plastic.\n" +
"(c) When using wire chairs, the minimum concrete cover (see (5)) to the uncoated portion of the chair must be obtained.\n" +
"(d) Wire chairs on soft ground or plastic membrane must be placed on flat bases.\n" +
"(e) Bar chairs must be spaced at not more than 800 mm centres for steel fabric."
    }
  },

  /* ---------- 4.2.11(3) laps (number) ---------- */
  {
    id: "reo-laps",
    type: "number",
    topic: "Reinforcement",
    media: { kind: "svg", src: "assets/svg/q-reo-lap.svg",
             alt: "Two lengths of trench mesh overlapping in a footing trench, the overlap length marked with a question mark",
             caption: "Two lengths of trench mesh meet — how much overlap?" },
    question: "Where two lengths of [[trench mesh]] (or bars up to 12 mm) continue a run, they can't just touch end-to-end — they must overlap so the force can pass from one to the other through the concrete. Set the minimum splice lap.",
    slider: { min: 0, max: 1000, step: 250, unit: "mm", start: 0, target: 500,
      hints: {
        "0":    "Butted ends transfer nothing — under load, the joint simply opens. Steel hands force to steel THROUGH the surrounding concrete, and that needs overlap length.",
        "250":  "Some grip, but not enough embedded length to develop the bar's full strength. The code wants double this.",
        "750":  "Past the requirement — extra lap wastes steel without adding strength once full force transfer is reached.",
        "1000": "A full metre of doubled steel — twice what's needed."
      }
    },
    explanation:
      "500 mm splice lap for trench mesh and for bars up to 12 mm (700 mm for thicker bars up to 16 mm). At T-intersections, mesh laps the full width across the junction; at L-corners, one outer bar bends and continues 500 mm around the corner — corners are where footings try to tear apart, so the steel must turn the corner with them.",
    source: {
      clause: "4.2.11(3) + Table 4.2.11b", clauseTitle: "Steel reinforcement", page: 57,
      quote:
"(3) Minimum laps for reinforcement as shown in Table 4.2.11b and Figure 4.2.11a must be provided where reinforcing is used.\n\n" +
"Table 4.2.11b — Minimum lap for reinforcement:\n" +
"Steel reinforcing bars ≤12 mm diameter — Minimum splice 500 mm; at “T” intersections full width across the junction; at “L” intersections one outer bar must be bent and continue 500 mm (min) around corner.\n" +
"Steel reinforcing bars >12 mm to ≤16 mm diameter — Minimum splice 700 mm; (T and L as above).\n" +
"Trench mesh — Minimum splice 500 mm; full width across the junction at T and L intersections.\n" +
"Square and rectangular mesh — The two outermost transverse wires of one sheet must overlap the two outermost transverse wires of the other."
    }
  },

  /* ---------- 4.2.11(4) re-entrant corners ---------- */
  {
    id: "re-entrant-bars",
    type: "quiz",
    topic: "Reinforcement",
    media: { kind: "svg", src: "assets/svg/q-reentrant-plan.svg",
             alt: "Top view of an L-shaped slab with a crack starting from the internal corner and a question mark at that corner",
             caption: "An L-shaped slab, seen from above — trouble brews at the internal corner." },
    question: "Your slab is L-shaped, so it has one [[re-entrant corner]] — an internal corner pointing INTO the slab. Concrete slabs love to crack diagonally out of exactly that corner. What does the NCC require there?",
    choices: [
      { text: "Extra reinforcement — e.g. 3-N12 bars, 2 m long, laid at 45° across the corner", correct: true,
        feedback: "Correct. The bars lie perpendicular to the crack that wants to form, centred on the corner — so when the slab tries to tear diagonally, it finds 2 m of steel stitched across the line." },
      { text: "A control joint cut into the corner so it cracks tidily", correct: false,
        feedback: "Joints are a real crack-control tool elsewhere, but here the deemed-to-satisfy answer is reinforcement across the corner — and remember H1D4 barely tolerates this shape at all (max ONE re-entrant corner)." },
      { text: "Nothing special — corners are corners", correct: false,
        feedback: "Re-entrant corners are the single most predictable crack location in any slab. Stress concentrates at the notch — every L-shaped driveway crack you've ever seen started exactly there." }
    ],
    explanation:
      "Stress flows through a slab like water; an internal corner is a rock in the stream where it concentrates. The fix: two strips of 3-L8TM, or one of 3-L11TM, or 3-N12 bars — 2 m long, at 45° across the corner, centred on it. This is also why H1D4 allows the recipes at most ONE re-entrant corner: each one is a managed weakness.",
    source: {
      clause: "4.2.11(4)", clauseTitle: "Steel reinforcement", page: 57,
      quote:
"(4) Any slab in H1D4 with a re-entrant corner must have—\n" +
"(a) two strips of 3-L8TM; or\n" +
"(b) one strip of 3-L11TM; or\n" +
"(c) 3-N12 bars,\n" +
"not less than 2 m in length and placed at an angle of 45° across the corner such that the centre of the 2 m length is at the location of the internal angle of the slab in accordance with Figure 4.2.11b."
    }
  },

  /* ---------- 4.2.13 stumps ---------- */
  {
    id: "stump-embedment",
    type: "quiz",
    topic: "Stumps",
    media: { kind: "svg", src: "assets/svg/q-stump-embed.svg",
             alt: "A stump standing 1.8 metres above ground with its below-ground depth marked with a question mark",
             caption: "1.8 m above ground — how deep below?" },
    question: "Not every floor is a slab — this design has a [[suspended floor]] on [[stump|stumps]]. A stump stands 1.8 m above the ground. How deep must it go INTO the ground?",
    choices: [
      { text: "At least 540 mm — that's 30% of its 1.8 m above-ground height, and more than the 450 mm minimum", correct: true,
        feedback: "Correct. The rule says: embed 30% of the above-ground height, OR 450 mm — whichever is GREATER. Here 30% of 1800 mm = 540 mm, which is more than 450 mm, so 540 mm wins. Tall stump, deep socket — it's resisting being levered over." },
      { text: "450 mm flat, regardless of height", correct: false,
        feedback: "450 mm is only the minimum for short stumps. A taller stump is a longer lever for wind and floor loads to push on, so the embedment grows with it: 30% of the above-ground height takes over once that works out greater than 450 mm." },
      { text: "Just sit it on a concrete pad at the surface", correct: false,
        feedback: "A stump on the surface is a domino. Embedment is what lets it resist sideways forces — and there are extra details: steel stumps need sealed tops, a concrete collar finishing 100 mm above ground, and corrosion protection." }
    ],
    explanation:
      "Stumps are mini-columns, and the tables size everything about them — pad footing dimensions by floor and roof load area, maximum heights by material (steel manages 3 m; low-grade timber gives up much sooner). The universal rule: embed at least 30% of the above-ground height or 450 mm, whichever is greater, and brace per the material's standard. Steel stumps additionally must be sealed with a welded top plate and encased in concrete sloping away, finishing 100 mm above ground.",
    source: {
      clause: "4.2.13(3), (6)", clauseTitle: "Stump footing details", page: 60,
      quote:
"(3) Steel stumps must be— (a) designed in accordance with— (i) AS 4100; or (ii) Tables 4.2.13d, 4.2.13e or 4.2.13f; and (b) fully enclosed and sealed with a welded top plate; and (c) encased in concrete sloping away from the stump and finishing not less than 100 mm above finished ground level; and (d) corrosion protected in accordance with Part 6.3.\n" +
"(6) Stumps must be embedded into the foundation material not less than 30% of their height above ground level or 450 mm, whichever is the greater."
    }
  },

  /* ---------- 4.2.14 stiffened rafts ---------- */
  {
    id: "raft-depth-logic",
    type: "quiz",
    topic: "Footing systems",
    media: { kind: "svg", src: "assets/svg/q-raft.svg",
             alt: "Cutaway of a stiffened raft slab showing the slab and its grid of deepened beams, with beam depth marked with a question mark",
             caption: "A stiffened raft: slab on top, grid of beams below. How deep must the beams be?" },
    question: "A [[stiffened raft]] is the standard modern slab: a grid of concrete beams under a slab, all poured as one. The NCC's tables pick how DEEP those beams must be using two inputs: what the walls are made of, and the site class of the soil. Which of these houses needs the DEEPEST edge beams?",
    choices: [
      { text: "Full double-brick masonry on a Class M (moderately reactive) site", correct: true,
        feedback: "Correct — 850 mm deep, the biggest number in the tables. Heavy, crack-brittle walls on mobile ground need a raft stiff enough to bridge the movement, and stiffness comes from beam depth." },
      { text: "A lightweight clad frame on a Class A (stable) site", correct: false,
        feedback: "That's the EASIEST case in the book — 300 mm beams. Light, flexible walls on ground that barely moves: the raft has almost nothing to fight." },
      { text: "Brick veneer on Class S — brick is brick", correct: false,
        feedback: "Veneer is one brick skin on a flexible frame — far more forgiving than full masonry. On slightly-reactive S it needs just 300 mm; the punishing combination is rigid walls PLUS reactive ground." }
    ],
    explanation:
      "The whole table compresses into one idea: beam depth = wall brittleness × ground mobility. Class A full masonry needs 400 mm; Class M clad frame just 300 mm; Class M full masonry needs 850 mm of concrete beam. The raft is a stiff tray that makes swelling, shrinking ground feel flat to the fragile walls riding on it. ('Articulated' walls — built with movement joints — earn shallower beams, because the wall itself absorbs some movement.)",
    source: {
      clause: "4.2.14 + Tables 4.2.14a–c", clauseTitle: "Stiffened rafts Class A, S and M sites", page: 67,
      quote:
"Footing and stiffened raft slabs must comply with— (a) For Class A and S sites — Tables 4.2.14a, 4.2.14b and Figure 4.2.14a; and (b) For Class M sites — Table 4.2.14c and Figure 4.2.14b.\n\n" +
"Table 4.2.14a (Class A) — Depth D: Clad frame 300; Articulated masonry veneer 300; Masonry veneer 300; Articulated full masonry 400; Full masonry 400 (bottom reinf. 3-L8TM, slab fabric SL72).\n" +
"Table 4.2.14c (Class M) — Depth D: Clad frame 300 (3-L11TM, SL72); Articulated masonry veneer 400; Masonry veneer 400; Articulated full masonry 500 (3-L12TM, SL82); Full masonry 850 (3-N16, spacing 4.0 m, SL92)."
    }
  },

  /* ---------- 4.2.15 strip footings ---------- */
  {
    id: "strip-infill",
    type: "quiz",
    topic: "Footing systems",
    media: { kind: "svg", src: "assets/svg/q-strip-infill.svg",
             alt: "Cross-section of strip footings under masonry walls with separate infill floor panels between them",
             caption: "Strips under the walls, loose infill floor panels between them." },
    question: "Older-style alternative: [[strip footing|strip footings]] under all the masonry walls, with separate 'infill' floor panels (concrete, brick paving, even stabilised earth) between them. On which site classes are infill floors allowed?",
    choices: [
      { text: "Class A and S only", correct: true,
        feedback: "Correct. Infill panels just sit between the footings, structurally independent. On stable A and S ground that's fine; on a moving Class M site the strips and the loose panels would ride the waves separately and tear apart at every junction." },
      { text: "Any class — the strips do all the work", correct: false,
        feedback: "On reactive ground that independence is the problem: the footings and the unconnected floor panels move differently, and every wall-to-floor junction grinds. Class M strip systems exist, but their floors aren't loose infill." },
      { text: "Class M and worse — that's what strips are for", correct: false,
        feedback: "Backwards — Class M strip footings get DEEPER (up to 900 mm for full masonry) and their note explicitly limits infill floors to Class A and S sites." }
    ],
    explanation:
      "Strip systems put a continuous reinforced concrete strip under every masonry wall — internal strips matching the external ones and running footing-to-footing, with 'side slip joints' of doubled polyethylene so the moving soil can slide past the sides without gripping. Dimensions scale exactly like rafts: Class A full masonry 300 deep × 400 wide; Class M full masonry 900 deep. And infill floors: A and S sites only.",
    source: {
      clause: "4.2.15 + Tables 4.2.15a–c", clauseTitle: "Strip footings Class A, S and M sites", page: 69,
      quote:
"Strip footings for Class A, S and M sites must comply with— (a) for Class A and S sites — Tables 4.2.15a, 4.2.15b and Figure 4.2.15a; and (b) for Class M sites — Table 4.2.15c and Figure 4.2.15b.\n\n" +
"Table notes (extracts):\n" +
"(1) All masonry walls must be supported on strip footings.\n" +
"(2) Internal strip footings must be of the same proportions as the external footings and run from external footing to external footing. ‘Side slip joints’ consisting of a double layer of polyethylene must be provided at the sides of the footing only.\n" +
"(3) [Class M] Infill floors must only be used for Class A and S sites.\n" +
"Table 4.2.15c (Class M) — D × B: Clad frame 400×300 (3-L11TM); Masonry veneer 500×300 (3-L12TM); Full masonry 900×400 (4-L12TM)."
    }
  },

  /* ---------- 4.2.16 footing slabs Class A ---------- */
  {
    id: "footing-slab-mesh",
    type: "quiz",
    topic: "Footing systems",
    media: { kind: "svg", src: "assets/svg/q-slab-length.svg",
             alt: "Plan view of two slabs, one short and one long, with mesh grade marked with question marks",
             caption: "Two Class A footing slabs — different lengths, different mesh?" },
    question: "Cheapest option of all, for Class A (stable) sites only: the 'footing slab' — a simple 100 mm slab with edge beams. Its mesh is chosen by SLAB LENGTH: SL63 mesh up to 12 m, heavier SL62 up to 18 m. Why would length set the steel?",
    choices: [
      { text: "Concrete shrinks as it cures — a longer slab accumulates more total shrinkage to restrain", correct: true,
        feedback: "Correct. Every metre of curing concrete tries to shorten a little. Over 18 m those little pulls add up to a big tug-of-war, and the mesh is the rope that holds it together instead of letting it crack." },
      { text: "Longer slabs carry more people and furniture", correct: false,
        feedback: "Live loads are spread per square metre — a long slab also has more slab to carry them. The length effect is about SHRINKAGE: total shortening grows with length even when loads don't." },
      { text: "Longer slabs need heavier mesh to lift by crane", correct: false,
        feedback: "Nobody lifts a slab-on-ground! The mesh fights the slab's own curing shrinkage — and the longer the slab, the more shrinkage there is to fight." }
    ],
    explanation:
      "On a Class A site the ground does so little that the slab mainly has to survive itself: SL63 (lighter) for slabs under 12 m, SL62 (closer-spaced wires, stronger) under 18 m — and past 18 m you've left the recipes entirely (remember H1D4's limit). Mesh codes decode like SL62 = 6 mm wires at 200 mm spacing. This same shrinkage logic returns when someone wants to tile a big floor — next question.",
    source: {
      clause: "4.2.16 + Figure 4.2.16", clauseTitle: "Footing slabs for Class A sites", page: 72,
      quote:
"Footing slabs for Class A sites supporting the following external wall types must comply with Figure 4.2.16: (a) Clad frame. (b) Articulated masonry. (c) Masonry veneer. (d) Articulated full masonry. (e) Full masonry.\n\n" +
"Figure 4.2.16 Notes:\n" +
"(1) Use SL63 when slab length is less than 12 m.\n" +
"(2) Use SL62 when slab length is less than 18 m.\n" +
"(3) In parts of Western Australia (around Perth) and other locations where the site consists of extremely stable sands, and where specified by a professional engineer, the slab thickness may be reduced to 85 mm and reinforced as follows: (a) Use SL53 when slab length is less than or equal to 12 m.\n" +
"(4) Dune sands may require compaction."
    }
  },

  /* ---------- 4.2.19 shrinkage control ---------- */
  {
    id: "shrinkage-tiles",
    type: "quiz",
    topic: "Slab details",
    media: { kind: "svg", src: "assets/svg/q-tile-crack.svg",
             alt: "A large tiled floor with a crack telegraphing through the tiles from the slab below",
             caption: "Slab shrinkage telegraphing straight through brittle tiles." },
    question: "The owners want large ceramic tiles across their 40 m² open-plan living area — laid as soon as possible after the pour. Tiles are brittle: slab shrinkage cracks telegraph straight through them. For brittle coverings over 16 m², what does the NCC accept?",
    choices: [
      { text: "Upgrade the slab mesh (e.g. to SL92), OR use a movement-tolerant bedding system, OR wait at least 3 months", correct: true,
        feedback: "Correct — three different philosophies: restrain the shrinkage with more steel, decouple the tiles from it with flexible bedding and expansion joints, or simply let most of the shrinkage happen before tiling. Pick one." },
      { text: "Seal the slab with paint so it can't shrink", correct: false,
        feedback: "Shrinkage is the concrete itself consuming water as it cures — no coating stops it. You can resist it (steel), absorb it (bedding), or outwait it (3 months), and those are exactly the listed options." },
      { text: "Tiles under 300 mm × 300 mm are exempt", correct: false,
        feedback: "The trigger is the tiled AREA (more than 16 m² of brittle covering), not the tile size — it's the whole field of grout lines that cracks as one when the slab beneath moves." }
    ],
    explanation:
      "Concrete shrinks for months after the pour — most of it early. Small tiled rooms ride it out; big tiled fields concentrate it into visible cracks. So over 16 m²: more shrinkage steel (SL92 or mesh top and bottom), or a bedding system chosen for the expected movement (with expansion joints), or a minimum 3-month delay before tiling. The cheapest fix is patience.",
    source: {
      clause: "4.2.19", clauseTitle: "Shrinkage control", page: 74,
      quote:
"Where brittle floor coverings, such as ceramic tiles, are to be used over an area greater than 16 m2, one of the following additional measures must be taken to control the effect of shrinkage cracking—\n" +
"(a) the amount of shrinkage reinforcement (steel reinforcement mesh in the slab panel) must be— (i) increased to SL92 or equivalent throughout the affected slab area; or (ii) reinforced top and bottom with sheets of slab mesh throughout the affected slab area; or\n" +
"(b) the bedding system for brittle coverings must be selected on the basis of the expected slab movement and the characteristics of the floor covering (including the use of expansion joints etc.); or\n" +
"(c) the placement of floor covering must be delayed for not less than 3 months after the concrete has been poured."
    }
  },

  /* ---------- 4.2.20 concentrated loads (+ 4.2.18 fireplaces) ---------- */
  {
    id: "point-loads",
    type: "quiz",
    topic: "Slab details",
    media: { kind: "svg", src: "assets/svg/q-point-load.svg",
             alt: "A steel column landing on a thin slab with a question mark under the landing point",
             caption: "A steel column lands mid-slab — what happens underneath?" },
    question: "The design has a structural steel column landing in the middle of the slab, carrying a chunk of the upper floor. A normal 100 mm slab would crack under that point load. What does the NCC require under the column?",
    choices: [
      { text: "Localised thickening — a deeper pad cast into the slab, centred under the column, with SL72 mesh at 50 mm cover", correct: true,
        feedback: "Correct. The slab grows a hidden footing exactly where the load lands, sized from the tables by floor and roof area — like a snowshoe under the column's stiletto heel." },
      { text: "A steel spreader plate on top of the slab", correct: false,
        feedback: "A plate spreads load across the surface but the slab beneath is still only 100 mm thick — the punching force needs depth of concrete, which is why the thickening goes INTO the slab, centred under the column." },
      { text: "Nothing special — concrete is strong in compression", correct: false,
        feedback: "In pure compression, yes — but a point load on a thin slab fails by PUNCHING through, like a pencil through cardboard. Concentrated loads always need concentrated footings." }
    ],
    explanation:
      "Anything heavy and concentrated gets its own thickening: steel columns per the 4.2.20 tables (centred, SL72, minimum 50 mm cover), and masonry fireplaces per 4.2.18 — a pad 150 mm thick for single storey or 200 mm for two storeys, reinforced SL72 top and bottom, extending 300 mm past the masonry edges, cast integrally with the slab. Same principle, different heavy object.",
    source: {
      clause: "4.2.20 & 4.2.18", clauseTitle: "Concentrated loads / Footings for fireplaces", page: 74,
      quote:
"4.2.20 — Where a footing or slab supports a concentrated load from a structural steel column, localised thickening must—\n" +
"(a) be provided in accordance with— (i) for tiled floor and tiled roof, Tables 4.2.20a, 4.2.20b or 4.2.20c; or (ii) for timber floor and metal roof, Tables 4.2.20d, 4.2.20e or 4.2.20f; and\n" +
"(b) be centred under the structural steel column; and\n" +
"(c) have SL72 reinforcement with a minimum 50 mm of concrete cover (see Figure 4.2.20).\n\n" +
"4.2.18 — (1) Fireplaces on Class A and S sites must be supported on a pad footing— (a) 150 mm thick for single storey (one trafficable floor and a wall height not more than 4.2 m) construction; and (b) 200 mm thick for 2 storey (two trafficable floors and a wall height not more than 8 m) construction; and (c) reinforced top and bottom with SL72 mesh; and (d) extending 300 mm past the edges of the masonry except for any edge flush with the outer wall.\n" +
"(2) The pad footing must form an integral part of the slab."
    }
  },

  /* ---------- 4.2.17 equivalent wall construction ---------- */
  {
    id: "equivalent-walls",
    type: "quiz",
    topic: "Footing systems",
    media: { kind: "svg", src: "assets/svg/q-equivalent-flow.svg",
             alt: "Flow diagram: a wall type not listed in the footing tables is translated by the equivalent wall construction tables into a standard wall type",
             caption: "Your wall type isn't in the footing tables — the code has a translator." },
    question: "Code-navigation skill check. Your design uses reinforced single leaf masonry walls — but the footing tables only list types like 'clad frame', 'masonry veneer' and 'full masonry'. Your wall type isn't a column heading anywhere. What's the move?",
    choices: [
      { text: "Use the 'Equivalent wall construction' tables (Tables 4.2.17a, b and c) — they translate unlisted wall types into one of the standard types the footing tables know", correct: true,
        feedback: "Correct. E.g. reinforced single leaf masonry with framed internal walls reads as 'articulated masonry veneer' — you size the footings as if for that wall type. The code anticipated the gap and built the bridge." },
      { text: "Pick the table column that looks closest and hope", correct: false,
        feedback: "No guessing required — 4.2.17's three tables ARE the official 'closest match', worked out from how stiff and heavy each wall system actually is (including mixed and earth-wall construction)." },
      { text: "Unlisted wall type = automatic engineer's design", correct: false,
        feedback: "Not yet — that's the fallback when you're genuinely outside the book (like Class H sites). For these known wall types the equivalence tables keep you inside the deemed-to-satisfy recipes." }
    ],
    explanation:
      "A quiet but valuable clause: it teaches that the NCC's tables are written for ARCHETYPES, and 4.2.17 maps real-world variants onto them — single leaf masonry, mixed construction, and earth walls (rammed earth/mudbrick) each get translated. Loadbearing earth walls, for instance, size their footings as 'articulated full masonry'.",
    source: {
      clause: "4.2.17 + Tables 4.2.17a–c", clauseTitle: "Footings for single leaf masonry, mixed construction and earth wall construction", page: 73,
      quote:
"Footings supporting the following external wall types must comply with the equivalent wall construction set out in Tables 4.2.17a, 4.2.17b and 4.2.17c: (a) Single leaf masonry. (b) Mixed construction. (c) Earth wall structures.\n\n" +
"Table 4.2.17a (extract): Reinforced single leaf masonry external + framed internal (or articulated masonry on Class A and S) → equivalent: Articulated masonry veneer. Articulated single leaf masonry + articulated masonry internal → equivalent: Articulated full masonry.\n" +
"Table 4.2.17b (extract): Full masonry external + framed internal → equivalent: Articulated full masonry.\n" +
"Table 4.2.17c (extract): Loadbearing earth wall construction → equivalent: Articulated full masonry."
    }
  },

  /* ---------- 4.2.22 recessed slabs ---------- */
  {
    id: "recessed-slab",
    type: "quiz",
    topic: "Slab details",
    media: { kind: "svg", src: "assets/svg/q-recess.svg",
             alt: "Cross-section of a slab with a stepped-down recess for a shower, with a question mark in the thinner zone beneath it",
             caption: "The slab steps down 40 mm for the shower — what about the slab below it?" },
    question: "The bathroom slab is poured 40 mm lower than the rest (a recess), so the tiled shower floor finishes flush. A recess makes the slab locally thinner — what does NCC 2025 require there?",
    choices: [
      { text: "A local thickening: the full slab depth must continue BELOW the recess, extending at least 400 mm beyond each side, with the mesh carried through it", correct: true,
        feedback: "Correct. The slab dives down under the recess so it's never actually thinner — the full required depth sits below the recessed surface, and the thickening reaches 400 mm past each side. The mesh is bent to follow the dive (or lapped top-over-bottom for deep recesses)." },
      { text: "Stop the mesh either side of the recess — thin concrete can't fit steel anyway", correct: false,
        feedback: "That would leave an unreinforced hinge line exactly where the slab changes level. The opposite is required: the slab thickens locally and the steel is bent or lapped to stay continuous through the recess." },
      { text: "Recesses aren't allowed — build the floor up with screed instead", correct: false,
        feedback: "Recesses are fully allowed and common (showers, garages, tiled areas) — they just must not thin the slab: the full slab depth is maintained by thickening beneath them." }
    ],
    explanation:
      "Heads-up: this clause was REWRITTEN in NCC 2025 (the 2022 edition only asked for a 400 mm mesh lap). Now a recess must come with a thickening: total depth at the recess = recess depth + the full required slab depth, with the full slab depth provided BELOW the recess, extending 400 mm horizontally from each side. For shallow recesses (up to half the slab) the mesh is simply bent to follow; for deeper ones the top mesh laps the bottom mesh 400 mm and the bottom layer doubles to two sheets of SL72. A good reminder of why this game shows you its sources — clauses do change.",
    source: {
      clause: "4.2.22", clauseTitle: "Recessed areas of slabs", page: 77,
      quote:
"(1) Where a recess in a slab is provided, a thickening must be provided in accordance with one of the following:\n" +
"(a) For recess depths (d) less than or equal to half the nominal slab thickness (see Figure 4.2.22a)— (i) a thickening must be provided not less than 400 mm measured horizontally from the inside face of each side of the recess (L); and (ii) the reinforcing mesh must— (A) be bent to accommodate the recess (see Figure 4.2.22a); or (B) be installed in accordance with (b)(i) and (ii).\n" +
"(b) For recess depths (d) greater than half the nominal slab thickness (see Figure 4.2.22b)— (i) top reinforcing mesh must overlap the bottom reinforcing mesh by not less than 400 mm; and (ii) bottom reinforcing mesh must be two layers of SL72.\n" +
"(2) Concrete cover to reinforcing in (1)(a) and (b) must comply with 4.2.11(5).\n" +
"(3) Thickening required by (1) must be not less than the sum of recess depth (d) and the required slab depth (D).\n" +
"(4) Required slab depth (D) must be provided below the recess."
    }
  },

  /* ---------- finale: pre-pour inspection (defect) ---------- */
  {
    id: "pre-pour-inspection",
    type: "defect",
    topic: "Pre-pour inspection",
    media: { kind: "svg", src: "assets/svg/defect-slabprep.svg",
             alt: "Cutaway drawing of a slab set up ready for pouring, with several details to inspect, some compliant and some not" },
    question: "The pump truck arrives in an hour — this is your last look before everything disappears into concrete forever. Inspect the five marked spots: three breach what you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 3,  y: 42, w: 15, h: 38, defect: true,  label: "Roots and loose soil in the trench",
        feedback: "Defect. The edge beam trench has tree roots and crumbled loose soil in the base — it must be clean before pouring, or the footing settles as the rubbish below it compresses and rots. (4.2.3(3))" },
      { x: 35, y: 52, w: 14, h: 22, badge: "below", defect: true,  label: "Torn vapour barrier, not repaired",
        feedback: "Defect. The membrane is torn with soil showing through and no patch. Punctures must be fully sealed with additional polyethylene film and tape — every hole is a permanent moisture path into the slab. (4.2.8(4))" },
      { x: 70, y: 35, w: 22, h: 25, defect: true,  label: "Mesh lying flat on the pods — no chairs",
        feedback: "Defect. On this side the mesh has been walked flat — it's lying directly on the [[waffle pod|pods]] with no bar chairs. Poured like this, the steel sits uselessly at the bottom of the slab with no cover. Chairs at max 800 mm centres. (4.2.11(7))" },
      { x: 51, y: 30, w: 14, h: 25, defect: false, label: "Mesh up on bar chairs",
        feedback: "That one's fine. Here the mesh sits on properly spaced bar chairs at its design height — exactly how the whole sheet should look. (4.2.11(7))" },
      { x: 18, y: 64, w: 13, h: 14, defect: false, label: "Sand blinding under the membrane",
        feedback: "That one's fine. A neat layer of clean sand (≥20 mm) cushions the membrane from the stones in the fill below — that's required, not optional. (4.2.4(b))" }
    ],
    explanation:
      "Pre-pour is the one inspection you can't redo: in an hour, every one of these details is sealed in concrete for the life of the house. The habit to build: walk the membrane (whole, lapped, taped), walk the steel (on chairs, lapped, covered), look in every trench (clean, dry, vertical). Then — and only then — wave the truck in.",
    source: {
      clause: "4.2.3, 4.2.8 & 4.2.11", clauseTitle: "Excavation / Vapour barriers / Steel reinforcement", page: 53,
      quote:
"4.2.3(3) Footing excavations must be free of loose earth, tree roots, mud or debris.\n\n" +
"4.2.8(4)(c) [A vapour barrier must be] fully sealed where punctured (unless for service penetrations) with additional polyethylene film and tape.\n\n" +
"4.2.11(7) Reinforcement must be placed as follows: (a) All reinforcement must be firmly fixed in place to prevent it moving during concreting operations. (b) Reinforcement must be supported off the ground or the forms by bar chairs made from wire, concrete or plastic. ... (e) Bar chairs must be spaced at not more than 800 mm centres for steel fabric."
    }
  }

  ]
};
