/* ============================================================
   PHASE 3 — WALLS: MASONRY & FRAMING
   Content from: ABCB Housing Provisions Standard 2025,
   Section 5 (Masonry) and Section 6 (Framing), plus the NCC 2025
   Volume Two layer (H1D5, H1D6, H2D4, H2D5).
   ------------------------------------------------------------
   Editing guide: docs/CONTENT-GUIDE.md
   Coverage ledger: docs/COVERAGE.md
   NCC figures are used as images where they beat hand drawings,
   credited "Source: ABCB Housing Provisions Standard 2025".
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["walls"] = {
  id: "walls",
  title: "Walls — masonry & framing",
  intro:
    "The slab has cured — now the house grows walls. Australian homes are mostly a frame (timber or steel) " +
    "wearing a single skin of brick: 'masonry veneer'. The bricks keep weather out and look good; the frame " +
    "holds the house up. The NCC's obsessions in this phase: keeping the two connected (wall ties), keeping " +
    "water that gets behind the bricks moving back OUT (cavities, damp-proof courses, weepholes), and letting " +
    "brittle masonry crack where YOU choose (articulation joints) instead of where it chooses.",
  learnList: [
    "Veneer, cavity and single-leaf masonry — and their height and wind limits",
    "Bricks, mortar, wall ties, lintels and articulation joints",
    "The cavity drainage system: damp-proof courses and weepholes",
    "Subfloor ventilation, and where timber and steel framing rules really live"
  ],

  questions: [

  /* ---------- 5.2.2 / 5.3.2 height limits ---------- */
  {
    id: "veneer-height",
    media: { kind: "svg", src: "assets/svg/q-veneer-height.svg",
             alt: "A masonry veneer wall with its overall height marked",
             caption: "How tall can a veneer or cavity wall be?" },
    type: "quiz",
    topic: "Masonry basics",
    question: "Both [[masonry veneer]] and [[cavity wall|cavity masonry]] walls share the same overall height limit under the Housing Provisions. Measured from the adjacent finished ground, walls must not be taller than…",
    choices: [
      { text: "8.5 m", correct: true,
        feedback: "Correct — 8.5 m covers a generous two storeys. Beyond it, wind loads and slenderness push the wall outside the pre-engineered recipes and into AS 3700 design." },
      { text: "3 m", correct: false,
        feedback: "3 m is a different rule — the maximum height between LATERAL SUPPORTS (floor or ceiling) within a cavity wall. The whole wall can be 8.5 m." },
      { text: "There's no limit if the bricks are strong enough", correct: false,
        feedback: "Brick strength isn't the issue — wind pushing on a tall, thin wall is. The recipes stop at 8.5 m; taller walls need engineered design." }
    ],
    explanation:
      "8.5 m above finished ground for both veneer (5.2.2) and cavity masonry (5.3.2). Within that, cavity walls also need a lateral support — a floor, ceiling or roof diaphragm — at least every 3 m of height, and cross walls or steel mullions to brace long runs against wind.",
    source: {
      clause: "5.2.2 & 5.3.2", clauseTitle: "Height of wall limitation", page: 82,
      quote:
"5.2.2 — Masonry veneer walls must not be greater than 8.5 m in height when measured above the adjacent finished ground level.\n\n" +
"5.3.2 — Cavity masonry walls must not be greater than 8.5 m in height when measured above the adjacent finished ground level.\n\n" +
"5.3.3(1)(a) — The height of the wall between lateral supports (floor or ceiling or roof diaphragm) must be not more than 3 m."
    }
  },

  /* ---------- 5.2.3 / 5.3.5 openings ---------- */
  {
    id: "openings-lintels",
    media: { kind: "svg", src: "assets/svg/q-openings-lintels.svg",
             alt: "A window opening in masonry with its width marked",
             caption: "An opening in the brickwork — when does it need a lintel?" },
    type: "quiz",
    topic: "Masonry basics",
    question: "Every window and door is a hole in the brickwork, and bricks can't hang in mid-air. Openings in veneer and cavity masonry must be spanned by steel [[lintel|lintels]] — except openings up to what width?",
    choices: [
      { text: "500 mm — small openings just need adequate support, like bearing on the window head", correct: true,
        feedback: "Correct. Up to 500 mm, the masonry can arch over or bear directly on a timber window head or steel frame. Anything wider gets a sized steel lintel." },
      { text: "1.2 m — about a small window", correct: false,
        feedback: "1.2 m is a weephole-spacing number, not a lintel one. The lintel exemption stops at 500 mm — barely wider than a meter box." },
      { text: "There's no exemption — every opening needs a lintel", correct: false,
        feedback: "There's one small mercy: openings not more than 500 mm wide, provided they're adequately supported. Everything wider needs steel." }
    ],
    explanation:
      "The rule is identical for veneer (5.2.3) and cavity masonry (5.3.5): steel lintels over openings, with a 500 mm exemption where the masonry is adequately supported — the explanatory note accepts masonry bearing directly on a timber window head or steel frame. How the lintel itself must be installed is its own clause, coming up.",
    source: {
      clause: "5.2.3 & 5.3.5", clauseTitle: "Openings in masonry veneer / cavity masonry", page: 82,
      quote:
"5.2.3 — (1) Except where excluded by (2), openings in masonry veneer must be spanned by steel lintels.\n" +
"(2) Openings in masonry veneer not more than 500 mm wide need not be provided with a steel lintel provided the opening is adequately supported.\n\n" +
"5.3.5 — (1) Except where excluded by (2), openings in cavity masonry must be spanned by steel lintels in accordance with 5.6.7.\n" +
"(2) Openings in cavity masonry not more than 500 mm wide need not be provided with a steel lintel provided the opening is adequately supported.\n" +
"(Explanatory: An opening of not more than 500 mm is considered to be adequately supported if the masonry bears directly on a timber window head or steel frame.)"
    }
  },

  /* ---------- 5.6.7 lintel installation ---------- */
  {
    id: "lintel-install",
    media: { kind: "svg", src: "assets/svg/q-opening-lintel.svg",
             alt: "Two cross-sections of the L-shaped steel angle lintel under brickwork: A with the long leg standing vertical, B with the long leg lying flat horizontal — long and short legs labelled",
             caption: "Same L-shaped angle, two ways up (A and B). Which is right?" },
    figure: { src: "assets/photos/ncc-fig-5-6-7.png",
             alt: "NCC Figure 5.6.7",
             caption: "How a steel lintel is installed — long leg vertical, 150 mm end bearing, 3 courses over. Source: ABCB Housing Provisions Standard 2025, Figure 5.6.7." },
    type: "quiz",
    topic: "Masonry basics",
    question: "The steel angle lintel for a 1.8 m window opening has arrived — an L-shaped bar with a LONG leg and a SHORT leg. The picture shows the two ways it could go in (A: long leg standing up vertical; B: long leg lying flat). Which is the REAL installation rule?",
    choices: [
      { text: "Long leg of the angle vertical, and at least 150 mm of end bearing for spans over 1 m", correct: true,
        feedback: "Correct. The long leg standing up gives the angle its bending strength, and 150 mm of bearing each end (100 mm for spans up to 1 m) spreads the load into the brickwork." },
      { text: "Long leg horizontal so more brick sits on it", correct: false,
        feedback: "Tempting but structurally backwards — an angle bends about its vertical leg. Laid flat, the lintel sags, and the crack telegraphs up the brickwork from the corner of the opening." },
      { text: "Any orientation, as long as it's well mortared in", correct: false,
        feedback: "Orientation is half the strength. Long leg vertical, masonry overhanging the horizontal leg by no more than 25 mm, at least 3 courses of masonry above, and proper end bearing." }
    ],
    explanation:
      "Picture the L-shaped steel angle in cross-section: the LONG leg stands up vertically, hidden BEHIND the brick skin (that upstand is what gives the angle its bending strength); the short HORIZONTAL leg tucks in BENEATH the bottom of the bricks and carries them — see the section in the figure below. Lintel rules in one breath: sized from Table 5.6.7a, long leg vertical, bricks overhang the horizontal leg by max 25 mm, no more than 3 m of masonry above, end bearing of 100 mm (spans ≤1 m) or 150 mm (spans >1 m), minimum three courses of masonry over the opening, and corrosion protection to suit the location. A $50 piece of steel holding up a tonne of bricks deserves the attention.",
    source: {
      clause: "5.6.7", clauseTitle: "Lintels", page: 102,
      quote:
"Where a lintel is required it must comply with the following:\n" +
"(a) Steel lintels must comply with this Part or H1D6(3).\n" +
"(b) Steel lintels must— (i) be sized in accordance with Table 5.6.7a; and (ii) be installed with the long leg of lintel angle vertical; and (iii) be wide enough so that the masonry does not overhang the horizontal leg of the lintel by more than 25 mm; and (iv) not support masonry more than 3 m in height when measured above the opening; and (v) have a minimum bearing length at each end of the lintel of— (A) for clear spans not more than 1 m - 100 mm; or (B) for clear spans more than 1 m - 150 mm (See Figure 5.6.7); and (vi) have a minimum of three courses of masonry over openings; and (vii) comply with the corrosion protection requirements of Table 5.6.7b."
    }
  },

  /* ---------- 5.2.6 engaged piers ---------- */
  {
    id: "engaged-piers",
    type: "quiz",
    topic: "Masonry basics",
    media: { kind: "photo", src: "assets/photos/ncc-fig-5-2-6.png",
             alt: "NCC figure showing an engaged pier bonded or tied to a masonry wall, supporting a timber bearer with an ant cap",
             caption: "An engaged pier carrying a floor bearer. Source: ABCB Housing Provisions Standard 2025, Figure 5.2.6." },
    question: "In the NCC's own figure above, a brick [[engaged pier|pier]] built against the wall ('engaged') carries a timber floor bearer. What are the key limits on engaged piers supporting subfloor framing?",
    choices: [
      { text: "Max 1.2 m high, at max 3 m centres, single storey only — and one under each side of openings and under concentrated roof loads", correct: true,
        feedback: "Correct. Short, regularly spaced, and always under the heavy spots — the pier is a mini column, and the same 'concentrated loads need concentrated support' logic from Phase 2 applies." },
      { text: "Any height, as long as they're grouted solid", correct: false,
        feedback: "Grout helps (hollow units must be grout-filled) but height is capped at 1.2 m — a taller slender brick pier buckles. Note the ant cap in the figure too: termite Phase 1 never ends." },
      { text: "They only work with double-storey homes", correct: false,
        feedback: "Opposite — engaged piers must NOT support more than a single storey (with roof span up to 12 m). Heavier jobs need engineered masonry or different structure." }
    ],
    explanation:
      "Engaged piers: footings per Section 4, single storey with roof framing span ≤12 m, spacing ≤3 m, height ≤1.2 m, minimum 100 mm thick, wider than the bearer they carry, tied or bonded to the wall, grout-filled if hollow units — and positioned beside every opening and under every girder truss or roof beam. Spot the ant cap in the figure: a termite shield from Phase 1 doing its quiet job.",
    source: {
      clause: "5.2.6", clauseTitle: "Engaged piers", page: 82,
      quote:
"Where engaged piers are installed to support subfloor framing, they must comply with the provisions of this Part and be constructed as follows:\n" +
"(a) Footings for piers must comply with Section 4.\n" +
"(b) Engaged piers must not support more than a single storey with a roof framing span of not more than 12 m.\n" +
"(c) Piers must be spaced at not more than 3 m centres...\n" +
"(d) Piers must be— (i) not more than 1.2 m high; and (ii) a minimum thickness of 100 mm inclusive of mortar; and (iii) a width greater than the depth of the timber or steel section which it is supporting (see Figure 5.2.6).\n" +
"(e) Notwithstanding (c), engaged piers must be located beneath— (i) each side of window and door openings; and (ii) concentrated roof loads, inclusive of any roof beams and girder trusses.\n" +
"(f) Piers must be tied or bonded to the external masonry wall, and where ties are used they must comply with 5.6.5.\n" +
"(g) Piers formed from hollow-core masonry units must be filled with grout."
    }
  },

  /* ---------- 5.3.3 / 5.3.4 cavity walls ---------- */
  {
    id: "cavity-walls",
    media: { kind: "svg", src: "assets/svg/q-cavity-walls.svg",
             alt: "Two masonry leaves with a cavity gap between them",
             caption: "Double brick: two leaves and a gap." },
    type: "quiz",
    topic: "Cavity masonry",
    question: "Old-school double-brick: a [[cavity wall]] is two complete brick walls ('leaves') with an air gap between. What's the minimum build-up the Housing Provisions accepts?",
    choices: [
      { text: "Two leaves each at least 90 mm thick, with a cavity of 35–75 mm between them", correct: true,
        feedback: "Correct. Two real walls, a real gap. The gap is the weatherproofing: water that gets through the outer leaf runs down the cavity and drains out, never touching the inner leaf." },
      { text: "One 90 mm leaf outside, anything inside — the outer leaf does the work", correct: false,
        feedback: "Both leaves must be at least 90 mm — they share the structural job through wall ties, and internal masonry walls have their own 75 mm minimum." },
      { text: "Two leaves touching, mortared together for strength", correct: false,
        feedback: "Filling or closing the cavity destroys the whole point — water crosses wherever the leaves touch. The 35 mm minimum gap must stay clear, even past insulation or services." }
    ],
    explanation:
      "Cavity masonry: two leaves ≥90 mm, cavity 35–75 mm kept clear, lateral support (floor/ceiling) every 3 m of height, and wind resistance from masonry cross walls (≥2 m long, spaced per Table 5.3.3) or steel mullions. Internal masonry walls: ≥75 mm, bonded at junctions or articulated. The cavity is sacred — it's the drainage gap that makes double-brick weatherproof.",
    source: {
      clause: "5.3.3 & 5.3.4", clauseTitle: "External walls / Internal walls (cavity masonry)", page: 84,
      quote:
"5.3.3(2) Cavity masonry walls must be constructed of two leaves, with each leaf not less than 90 mm wide.\n" +
"(3) In cavity masonry construction, a cavity must be provided between the inner and outer masonry leaves as follows:\n" +
"(a) The cavity must be not less than 35 mm and not more than 75 mm in width, in accordance with 5.7.2.\n" +
"(b) Except for steel mullions, the minimum cavity width specified in (a) is to be maintained between the outer masonry leaf and any insulation or services located in the cavity. ...\n\n" +
"5.3.4(1) Where internal masonry walls intersect with other internal or external walls they must comply with the relevant provisions of this Part and be— (a) not less than 75 mm thick; and (b) either— (i) bonded at the junctions of the intersecting walls; or (ii) provided with an articulation joint in accordance with 5.6.8."
    }
  },

  /* ---------- 5.4.2 + 5.7.6 single leaf ---------- */
  {
    id: "single-leaf",
    media: { kind: "svg", src: "assets/svg/q-single-leaf.svg",
             alt: "A single-skin masonry wall braced by engaged piers",
             caption: "One thin brick skin — what braces it?" },
    type: "quiz",
    topic: "Single leaf masonry",
    question: "A single-skin brick garage (Class 10a): one 90 mm leaf of masonry, no frame, no cavity. The recipes allow it — with strict conditions. Which of these is among them?",
    choices: [
      { text: "Engaged piers or return walls bracing it, max 9 m roof span, max 2.7 m height, wind class N2 or calmer", correct: true,
        feedback: "Correct. One thin leaf can't stand alone against wind — piers and returns are its skeleton, and the size/wind caps keep loads small. Note the roof also must not push outward thrust onto the walls." },
      { text: "It must be double height to counterweight the roof", correct: false,
        feedback: "Backwards — height is capped (2.7 m for the Class 10a case) precisely because a tall single skin is a sail. Piers and returns do the bracing, not mass." },
      { text: "No special rules — a shed is a shed", correct: false,
        feedback: "Single leaf has MORE rules than veneer, not fewer: piers/returns each side of openings, sizes from tables by wind class, continuous roof connection, and a waterproof coating (it has no cavity to drain)." }
    ],
    explanation:
      "Single leaf masonry survives by bracing: engaged piers or return walls at the spacings of Tables 5.4.2a–d, on both sides of every opening, roof connected continuously along the top. And because there's no cavity to catch water, 5.7.6 makes the wall itself waterproof: three coats of exterior acrylic gloss (or cement paint + two acrylic coats, or clear repellent under a ≥1500 mm roof overhang).",
    source: {
      clause: "5.4.2 & 5.7.6", clauseTitle: "External walls (single leaf) / Weatherproofing for single leaf masonry walls", page: 87,
      quote:
"5.4.2(2) A Class 10a building containing not more than 1 storey may be enclosed with single leaf masonry external walls not less than 90 mm in thickness, provided that—\n" +
"(a) the building measured in the direction of the span of the roof is not more than 9 m and the height is not more than 2.7 m; and\n" +
"(b) engaged piers are provided that are in accordance with Tables 5.4.2c and 5.4.2d; and\n" +
"(c) the roof does not place any spreading thrust onto the external walls; and\n" +
"(d) the Class 10a building is located in an area with a wind class of not more than N2.\n\n" +
"5.7.6(1)(b) Acceptable external waterproof finishes are— (i) three coats of 100% acrylic based exterior quality gloss paint; or (ii) one complete coat of cement based paint and two coats of 100% acrylic based exterior quality gloss paint; or (iii) clear water repellent, provided the wall is protected by a roof overhang of not less than 1500 mm."
    }
  },

  /* ---------- 5.5 isolated piers ---------- */
  {
    id: "isolated-piers",
    media: { kind: "svg", src: "assets/svg/q-carport-piers.svg",
             alt: "A carport roof held up by free-standing brick piers",
             caption: "A carport roof on free-standing brick piers — what are the limits?" },
    figure: { src: "assets/photos/ncc-fig-5-5-2.png",
             alt: "NCC Figure 5.5.2 — piers under main roof",
             caption: "Piers under a main roof: 290 × 290 mm, max 2.7 m high, max 3 m centres. Source: ABCB Housing Provisions Standard 2025, Figure 5.5.2." },
    type: "quiz",
    topic: "Masonry basics",
    question: "The carport roof out front is held up by free-standing brick [[isolated pier|piers]] — no walls, just columns of brickwork. For piers under a roof attached to the house, the minimums are…",
    choices: [
      { text: "290 × 290 mm section, max 2.7 m high, max 3 m apart, 150 mm bearing for whatever they carry", correct: true,
        feedback: "Correct — that's a pier two bricks square. And it's strapped down: a galvanised steel strap or rod runs the FULL height of the pier and is cast into the footing, so the roof can't lift the pier apart in wind." },
      { text: "One brick (230 × 110 mm) is fine — carports are light", correct: false,
        feedback: "Carport roofs are light going DOWN but huge sails going UP. A single-brick pier snaps. 290 × 290 minimum, with a tie-down strap or rod cast into the footing running its full height." },
      { text: "Any size, if the mortar is exposure class", correct: false,
        feedback: "Mortar grade is about durability, not stability. Geometry rules here: 290 × 290, ≤2.7 m, ≤3 m centres — plus the full-height tie-down anchoring roof to footing." }
    ],
    explanation:
      "Isolated piers are masonry's loneliest job — no wall to lean on. So (see Figure 5.5.2 below): 290 × 290 minimum section, 2.7 m max height, 3 m max centres, 150 mm bearing for supported members, and a continuous tie-down (strap or threaded rod, cast into the footing, full height of the pier) sized by roof type. Subfloor isolated piers under floors have their own ladder: 190 × 190 up to 1.2 m, bigger sections for taller piers per Figure 5.5.6.",
    source: {
      clause: "5.5.2 & 5.5.6", clauseTitle: "Isolated piers", page: 93,
      quote:
"5.5.2 — Isolated piers supporting carports, verandahs, porches and similar roof structures, or vehicle access door openings, which form part of the main roof, or are attached to a wall of a Class 1 building must—\n" +
"(a) be not less than 290 x 290 mm in section; and\n" +
"(b) be not more than 2.7 m high (see Figure 5.5.2); and\n" +
"(c) be spaced at not more than 3 m centres (see Figure 5.5.2); and\n" +
"(d) provide a bearing length of not less than 150 mm for any supported members; and\n" +
"(e) comply with the relevant provisions of this Part.\n\n" +
"5.5.6 — Subfloor isolated piers must be not less than 190 x 190 mm in section and comply with Figure 5.5.6 for height requirements."
    }
  },

  /* ---------- 5.6.2 masonry units ---------- */
  {
    id: "masonry-units",
    type: "quiz",
    topic: "Components",
    question: "Bricks come durability-graded: Protected (P), General Purpose (GP) and Exposure class (Exp). Your client's block is two streets from the beach, walls catching salt spray. Which bricks?",
    choices: [
      { text: "Exposure class (Exp) — the only grade rated for salt attack", correct: true,
        feedback: "Correct. Sea-front salt spray, salty groundwater below the DPC, heavy industrial pollution, freeze-thaw — all Exp territory. Salt crystallising inside lesser bricks pops their faces off (fretting)." },
      { text: "General Purpose (GP) — it says 'all locations'", correct: false,
        feedback: "Almost: GP is for all locations EXCEPT where Exposure class is required — and sea fronts exposed to salt spray are the textbook Exp case." },
      { text: "Protected (P) with a coat of paint", correct: false,
        feedback: "P-grade belongs in internal walls and rendered/coated walls protected from weather. Paint on a beachfront wall is a maintenance promise, not a durability classification." }
    ],
    explanation:
      "The grades map to misery: P for sheltered duty (internal, rendered, protected tops), GP for ordinary weather, Exp for salt and severe exposure — below the DPC in salty ground, sea fronts, polluted air, freeze-thaw. Strength minimums also apply (veneer units 3 MPa solid/10 MPa hollow; cavity and single skin 5/10 MPa), and clay panels must never mix with concrete/calcium-silicate panels without control joints — they shrink and grow in opposite directions over time.",
    source: {
      clause: "5.6.2", clauseTitle: "Masonry units", page: 96,
      quote:
"(1) Masonry veneer masonry units must have a minimum compressive strength of— (a) 3 MPa for solid or cored units; or (b) 10 MPa for hollow units.\n" +
"(2) Cavity masonry and single skin masonry units must have a minimum compressive strength of— (a) 5 MPa for solid or cored units; or (b) 10 MPa for hollow units. ...\n" +
"(6) Masonry unit exposure classifications and corresponding masonry unit applications are as follows:\n" +
"(a) Protected (P) masonry units are suitable for use in locations such as— (i) internal walls; and (ii) external walls that are coated or rendered; and (iii) walls above damp-proof courses provided the wall is protected at the top by a roof, eaves, coping, topping or the like.\n" +
"(b) General Purpose (GP) masonry units are suitable for use in all locations except those where ‘Exposure class’ (Exp) is required.\n" +
"(c) Exposure class (Exp) masonry units are suitable for use in all locations including severe local conditions such as— (i) below the damp-proof course in areas where walls are expected to be attacked by salts in the ground water or masonry itself (salt attack or salt damp); and (ii) on sea fronts where walls are exposed to attack from salt spray; and (iii) in heavily polluted areas subject to deposition of atmospheric pollution; and (iv) under regular cyclic freeze and thaw conditions."
    }
  },

  /* ---------- 5.6.3 / 5.6.4 mortar ---------- */
  {
    id: "mortar",
    type: "quiz",
    topic: "Components",
    question: "The brickie is batching [[mortar]] by bucket for general-purpose bricks. The classic recipe — and the standard joint it gets laid in — is…",
    choices: [
      { text: "1 cement : 1 lime : 6 sand, in nominal 10 mm joints", correct: true,
        feedback: "Correct — the famous 1:1:6. Lime makes the mix workable and a little self-healing; 10 mm is the bed and perpend standard the whole brick module is designed around." },
      { text: "1 cement : 3 sand, joints as thin as possible", correct: false,
        feedback: "Strong-but-brittle isn't the goal — mortar should be slightly weaker than the bricks so movement cracks the joints (repointable), not the units. And thin joints can't absorb coursing tolerances; 10 mm nominal is the rule." },
      { text: "Whatever's wet enough to stick", correct: false,
        feedback: "The mixes are specified by exposure class: 1:2:9 protected, 1:1:6 general purpose, 1:0.5:4.5 exposure class — richer in cement as conditions get harsher." }
    ],
    explanation:
      "Mortar by volume from Table 5.6.3: 1:2:9 (P), 1:1:6 (GP), 1:0.5:4.5 (Exp) — cement:lime:sand. Joints: 10 mm nominal beds and perpends. Raked (recessed) joints have limits — max 5 mm deep for 90 mm units, 10 mm for 110 mm units, never in saline or heavy-industrial environments — because raking thins the wall's weather seal at a million points.",
    source: {
      clause: "5.6.3 & 5.6.4", clauseTitle: "Mortar mixes / Mortar joints", page: 97,
      quote:
"5.6.3 — Mortar used for masonry construction must comply with AS 3700 or AS 4773 except that the mortar may be mixed by volume in the proportions stated in Table 5.6.3.\n" +
"Table 5.6.3 (cement : lime : sand): Protected — 1:2:9; General purpose — 1:1:6; Exposure class — 1:0.5:4.5.\n\n" +
"5.6.4 — (1) Unless otherwise specified, masonry bed and perpend joints must have a nominal thickness of 10 mm.\n" +
"(2) Raked joints are not to be used in saline environments or areas subject to heavy industrial airborne pollution.\n" +
"(3) Where raked joints are used the depth of raking must not be— (a) closer than 5 mm to any perforation in cored unit masonry or 20 mm in hollow unit masonry; or (b) more than 5 mm for masonry units at least 90 mm wide; or (c) more than 10 mm for masonry units at least 110 mm wide."
    }
  },

  /* ---------- 5.6.5 wall ties ---------- */
  {
    id: "wall-ties",
    media: { kind: "svg", src: "assets/svg/q-walltie-detail.svg",
             alt: "A wall tie spanning the cavity to link the brick skin to the timber frame",
             caption: "A wall tie linking the brick skin to the frame — which type must you use?" },
    figure: { src: "assets/photos/ncc-fig-5-6-5a.png",
             alt: "NCC Figure 5.6.5a",
             caption: "Wall tie spacing on a lowset wall. Source: ABCB Housing Provisions Standard 2025, Figure 5.6.5a." },
    type: "quiz",
    topic: "Components",
    question: "[[wall tie|Wall ties]] are the little steel connectors marrying the brick skin to the frame (or leaf to leaf). Two things decide which tie you must use — what are they?",
    choices: [
      { text: "The wind class (tie duty rating) and the distance to the coast (corrosion protection)", correct: true,
        feedback: "Correct. Windier sites need stronger ties (light duty up to N2 for veneer, medium duty above), and saltier air needs better metal — within 1 km of breaking surf it's stainless steel or engineered polymer." },
      { text: "Brick colour and mortar mix", correct: false,
        feedback: "Neither loads nor corrodes the tie. The two real selectors: wind class sets the DUTY rating; distance from salt water sets the CORROSION protection, from ordinary galvanised up to 316 stainless." },
      { text: "Just the builder's preference — a tie is a tie", correct: false,
        feedback: "Rusted-out wall ties are one of Australia's classic hidden building failures — whole veneer skins have peeled off in storms. Duty by wind class, corrosion grade by exposure, spacing about every 600 mm, embedded 50 mm into the mortar." }
    ],
    explanation:
      "Ties to AS 2699.1, duty by wind class (veneer: light duty to N2, medium above; cavity: light at N1, medium above), spaced per the tables (typically ≤600 mm each way, tighter near edges, openings and articulation joints), embedded 50 mm into each leaf, and installed so moisture can't ride the tie across to the frame. Corrosion grades by location: within 1 km of surf — 316L stainless or polymer; 1–10 km — heavy galvanising (470 g/m²) or 304L; elsewhere — standard 300 g/m² galvanised.",
    source: {
      clause: "5.6.5", clauseTitle: "Wall ties", page: 97,
      quote:
"Masonry wall ties must—\n" +
"(a) comply with AS 2699.1 and— (i) for masonry veneer walls be— (A) a minimum of light duty veneer ties in areas where the design wind speed is not more than N2; and (B) a minimum of medium duty veneer ties in areas where the design wind speed is more than N2; and (ii) for cavity masonry walls be— (A) a minimum of light duty cavity ties in areas where the design wind speed is N1; and (B) a minimum of medium duty cavity ties in areas where the design wind speed is more than N1; ...\n" +
"(b) be spaced and fixed in accordance with Tables 5.6.5a, 5.6.5b and 5.6.5c ...; and\n" +
"(c) be protected against corrosion in accordance with Table 5.6.5d.\n\n" +
"Table 5.6.5d (extract): Areas less than 1 km from breaking surf ... — Grade 316L stainless steel; or engineered polymer. Areas 1 km or more but less than 10 km from breaking surf — galvanised 470 g/m² or Grade 304L stainless. All other areas — galvanised 300 g/m²."
    }
  },

  /* ---------- 5.6.6 tie-down ---------- */
  {
    id: "roof-tiedown",
    media: { kind: "svg", src: "assets/svg/q-roof-tiedown.svg",
             alt: "A roof tie-down strap running down into a masonry wall",
             caption: "Strapping the roof down into the wall." },
    type: "quiz",
    topic: "Components",
    question: "In masonry construction the roof must be strapped DOWN into the walls — wind wants to take it. For cavity masonry (wind class N1–N2, building up to 10 m wide), the deemed-to-satisfy strap detail is…",
    choices: [
      { text: "Galvanised straps at each truss, max 1.2 m apart, anchored to rods built into the masonry at least 900 mm below the top of the wall", correct: true,
        feedback: "Correct — and the 900 mm is the clever part: the strap recruits the WEIGHT of nearly a metre of brickwork to hold the roof down, not just the strength of one mortar joint." },
      { text: "The roof's own weight is enough — brick houses are heavy", correct: false,
        feedback: "The WALLS are heavy; the roof is a light lid on top. In an uplift gust the roof leaves first — unless straps tie it deep into that heavy brickwork." },
      { text: "A bead of construction adhesive along the wall plate", correct: false,
        feedback: "Adhesive resists nothing like wind uplift. The code wants steel: 30 mm galvanised straps at ≤1.2 m centres at truss positions, embedded or rodded ≥900 mm down into the masonry." }
    ],
    explanation:
      "Tie-down for masonry: 30 × 0.8 mm galvanised straps at ≤1.2 m centres matching truss/rafter positions, looped around 10 mm rods built across the cavity at least 900 mm below the top of the wall (or 30 × 1 mm straps built 50 mm into the inner leaf, same 900 mm). Single-leaf walls anchor the whole way down — strap or threaded rod cast into the FOOTING, full pier height. Timber frames abutting masonry get their own kinked straps every 400 mm.",
    source: {
      clause: "5.6.6", clauseTitle: "Fixing straps and tie-down systems", page: 100,
      quote:
"(2) For areas with a wind class of N1 or N2 and a building width from outside wall to outside wall of not more than 10 m in the direction of the roof span (see Figure 5.6.6a), sheet metal and tiled roofs must be tied down using one of the following methods:\n" +
"(a) 30 mm x 0.8 mm galvanised steel straps at not more than 1.2 m centres and corresponding with truss or rafter positions, looped around 10 mm diameter galvanised mild steel rods— (i) built-in across the cavity at a course not less than 900 mm below the top of the wall; and (ii) embedded not less than 50 mm into each leaf.\n" +
"(b) 30 mm x 1 mm galvanised steel straps at not more than 1.2 m centres and corresponding with truss or rafter positions, built-in to masonry inner leaf not less than 50 mm and at a course not less than 900 mm below the top of the wall (see Figure 5.6.6b)."
    }
  },

  /* ---------- 5.6.8 articulation joints ---------- */
  {
    id: "articulation-joints",
    type: "quiz",
    topic: "Movement",
    media: { kind: "photo", src: "assets/photos/ncc-fig-5-6-8a.png",
             alt: "NCC figure: floor plan of a house showing vertical articulation joint locations along the masonry walls",
             caption: "Where the joints go on a real floor plan. Source: ABCB Housing Provisions Standard 2025, Figure 5.6.8a." },
    question: "[[articulation joint|Articulation joints]] are deliberate vertical breaks in the brickwork, filled with flexible sealant, that let wall panels move without cracking. On which sites can you SKIP them entirely?",
    choices: [
      { text: "Class A and S sites — ground stable enough that the walls aren't forced to flex", correct: true,
        feedback: "Correct — Phase 2's site classes echo through the whole build. On reactive M-class ground the footing flexes as soil moisture changes, and articulation joints are how the brittle brickwork survives the ride." },
      { text: "Nowhere — every masonry wall needs them", correct: false,
        feedback: "There's a genuine exemption: soil classification A or S (see 4.2.2). Stable ground, stiff raft, no forced movement — no joints required." },
      { text: "Windy sites — the joints would weaken the wall", correct: false,
        feedback: "Joints don't weaken walls against wind (ties and returns handle that); they RELIEVE the slow bending that reactive soils impose. The trigger is the soil class, not the wind class." }
    ],
    explanation:
      "Where required (any site not A or S): joints ≥10 mm wide, at ≤6 m centres in plain walls (≤5 m where openings exceed 900 × 900, within 1.2 m of such openings), within 4.5 m of corners (but not closer than 470 mm), wherever height changes >20%, thickness changes, footing joints occur, or masonry materials change — and never beside arched openings. Filled with flexible sealant over a backer rod or compressible filler. The figure shows the rhythm on a real plan.",
    source: {
      clause: "5.6.8", clauseTitle: "Vertical articulation joints", page: 104,
      quote:
"(1) Vertical articulation joints must be provided in masonry walls in accordance with (2), except in walls constructed on sites where the soil classification is A or S (see 4.2.2).\n" +
"(2) Articulation joints between masonry elements must have a width of not less than 10 mm and be provided (see Figures 5.6.8a and 5.6.8b)—\n" +
"(a) in straight, continuous walls without openings or with openings not more than 900 mm x 900 mm — at not more than 6 m centres and within 4.5 m, but not closer than 470 mm, of all corners; and\n" +
"(b) in straight, continuous walls with openings more than 900 mm x 900 mm — at not more than 5 m centres and located so that they are not more than 1.2 m away from openings; and\n" +
"(c) where the height of the wall changes by more than 20% — at the position of change in height; and (d) where a wall changes in thickness; and (e) at control or construction joints in footings or slabs; and (f) at junctions of walls constructed of different masonry materials.\n" +
"(3) Articulation joints must not be located adjacent to arched openings."
    }
  },

  /* ---------- 5.7.2 cavity width (number) ---------- */
  {
    id: "cavity-width",
    type: "number",
    topic: "Keeping water out",
    question: "Brick veneer: between the back of the brick skin and the frame there must be a clear drainage gap — the cavity. Insulation, sarking and services must never pinch it. Set the MINIMUM clear cavity width for veneer.",
    slider: { min: 0, max: 100, step: 25, unit: "mm", start: 0, target: 25,
      hints: {
        "0":   "No gap means every drop that gets through the bricks (and some always does) soaks straight into the frame. The cavity IS the weatherproofing.",
        "50":  "A common real-world width, but more than the minimum — the code's floor for veneer is half this.",
        "75":  "That's the MAXIMUM cavity width, not the minimum — wider and the ties start working as long levers.",
        "100": "Past the maximum entirely — ties can't span that reliably."
      }
    },
    explanation:
      "25 mm minimum, 75 mm maximum for veneer (cavity masonry runs 35–75 mm, since two rigid leaves need more breathing room). The clear width must survive everything installed in it — sarking, sheet bracing, services. On a slab, the cavity must drain to the outside through weepholes, and the brick skin may overhang the slab edge by at most 15 mm. Phase 2's edge rebate is where this cavity lands.",
    source: {
      clause: "5.7.2", clauseTitle: "Cavities", page: 109,
      quote:
"(1) For masonry veneer, the clear width of a cavity between the masonry veneer and the exterior face of the supporting frame must not be— (a) less than 25 mm wide; and (b) more than 75 mm wide.\n" +
"(2) For cavity masonry, the clear width of a cavity between the inner and outer masonry leaves must not be— (a) less than 35 mm; and (b) more than 75 mm.\n" +
"(3) Where masonry veneer and cavity masonry in (1) and (2) are constructed on a slab-on-ground, the cavity must be drained to the outside in accordance with 5.7.5.\n" +
"(4) The exterior masonry leaf must not overhang the edge of the slab by more than 15 mm."
    }
  },

  /* ---------- 5.7.3 / 5.7.4 DPC ---------- */
  {
    id: "dpc",
    media: { kind: "svg", src: "assets/svg/q-dpc.svg",
             alt: "A damp-proof course in a brick wall above the ground, seen from the face of the wall",
             caption: "Looking at the FACE of the wall: the DPC strip — how high above the ground?" },
    type: "quiz",
    topic: "Keeping water out",
    question: "The [[damp-proof course]] (DPC) is a waterproof strip in the mortar bed stopping ground moisture climbing the wall. Above ordinary adjacent ground, the DPC must sit at least…",
    choices: [
      { text: "150 mm above ground — or 75 mm above paving that slopes away", correct: true,
        feedback: "Correct, and the numbers should feel familiar — they're the slab-height logic from Phase 1 applied to the wall: the harder and better-drained the surface below, the lower the DPC may sit (down to 15 mm or even 0 in low-rainfall, sheltered cases)." },
      { text: "It can sit at ground level — it's waterproof, after all", correct: false,
        feedback: "A DPC at ground level gets buried by the first garden bed and bridged by soil splash. Height keeps it working AND visible — the code requires it visible from outside, which is also how inspectors (and termite checkers) audit it." },
      { text: "One metre up, to be safe", correct: false,
        feedback: "That would leave a metre of unprotected masonry wicking ground moisture (salt damp territory). 150 mm above ground does the job — what matters is continuity and staying clear of the dirt." }
    ],
    explanation:
      "DPC materials (5.7.3): AS/NZS 2904 membranes, 0.5 mm embossed polyethylene, poly-coated aluminium, bitumen-impregnated materials — or a termite sheet doing double duty. Installation (5.7.4): a CONTINUOUS barrier around wall bases, under suspended floors, where walls pass through or meet roofs, and at window/door heads and sills (flashings extending 150 mm past each reveal); continuous through the wall and visible outside; heights 150 mm above ground / 75 mm above sloping paving / 50 mm sheltered / down to 15–0 mm in low-rainfall cases.",
    source: {
      clause: "5.7.4", clauseTitle: "Damp-proof courses and flashings – installation", page: 109,
      quote:
"(1) Damp-proof courses and flashings must be— (a) located so as to form a continuous damp-proofing barrier— (i) around the bottom perimeter of walls where constructed on a concrete slab; and (ii) in walls and piers below suspended floors; and (iii) where a masonry wall passes through a roof; and (iv) where a roof abuts an external masonry wall; and (v) to the bottom and tops of windows and doors and the like ...; and (b) continuous through the wall or pier and be visible from the outside face of the wall.\n" +
"(2) The location of a damp-proof course, or flashing serving as a damp-proof course, must be not less than—\n" +
"(a) 150 mm above the adjacent ground level; or\n" +
"(b) 75 mm above the finished surface level of adjacent paved, concreted or landscaped areas that slope away from the wall; or\n" +
"(c) 50 mm above finished paved, concreted or landscaped areas complying with 3.3.3(b)(ii) and protected from the direct effects of the weather by a carport, verandah or the like; or\n" +
"(d) in low rainfall intensity areas— (i) 15 mm above finished paved, concreted or landscaped areas; or (ii) 0 mm ... if the damp-proof course is protected from the direct effects of the weather by a carport, verandah or the like."
    }
  },

  /* ---------- 5.7.5 weepholes ---------- */
  {
    id: "weepholes",
    media: { kind: "svg", src: "assets/svg/q-weephole.svg",
             alt: "Open perpend joints in the bottom course of brickwork above a flashing, seen from the face of the wall",
             caption: "Looking at the FACE of the wall: the little gaps in the bottom course." },
    type: "quiz",
    topic: "Keeping water out",
    question: "Look closely at a brick house and you'll see small vertical gaps in the bottom course of mortar joints — [[weephole|weepholes]]. What are they, and what's the spacing rule?",
    choices: [
      { text: "Open perpend joints draining the cavity — in the course right above any flashing, at max 1.2 m centres, min 50 mm tall", correct: true,
        feedback: "Correct. They're the exits of the cavity drainage system: water runs down inside the cavity, lands on the flashing, and steps OUT through the weepholes. Block them and the system silently fills." },
      { text: "Mistakes — joints the brickie forgot to mortar", correct: false,
        feedback: "The single most common myth in housing! They're required openings: deliberately unfilled perpends draining the cavity. Rendering or mortaring over them disables the wall's weatherproofing." },
      { text: "Ventilation for the frame, optional in dry climates", correct: false,
        feedback: "They do ventilate a little, but their required job is drainage — and they're mandatory above every flashing wherever the cavity needs to drain, dry climate or not." }
    ],
    explanation:
      "Weepholes: open perpends in the course immediately above any flashing or DPC-acting-as-flashing, at least 50 mm tall (the full joint width), at no more than 1.2 m centres. Not required over openings less than 1.2 m wide, beneath window/door sills, or where the outside surface is raised for step-free access. The whole cavity system — DPC, flashing, weepholes — is one machine: catch, collect, eject.",
    source: {
      clause: "5.7.5", clauseTitle: "Weepholes", page: 110,
      quote:
"(1) Except where excluded by (2), open perpend joints (weepholes) must be created in the course immediately above any flashing (including above any damp-proof course acting as a flashing) and be—\n" +
"(a) a minimum of 50 mm in height, by the width of the vertical mortar joint; and\n" +
"(b) at not more than 1.2 m centres; and ...\n" +
"(2) Weepholes are not required in the following locations:\n" +
"(a) Where head openings are less than 1.2 m wide.\n" +
"(b) Beneath window and door sills.\n" +
"(c) Where the level of the external impervious surface is elevated for the purpose of providing step-free access required by H8P1."
    }
  },

  /* ---------- 6.2.1 subfloor ventilation ---------- */
  {
    id: "subfloor-vent",
    type: "quiz",
    topic: "Subfloor",
    media: { kind: "photo", src: "assets/photos/ncc-fig-6-2-1a.png",
             alt: "NCC map of Australia divided into humidity zones A, B and C used to set subfloor ventilation amounts",
             caption: "The NCC's humidity zones — your city sets your vent area. Source: ABCB Housing Provisions Standard 2025, Figure 6.2.1a." },
    question: "Suspended floors need vents in the subfloor walls, sized by the humidity zone on the NCC's map above (e.g. Sydney and Brisbane sit in damp Zone C: 6000 mm²/m of wall). What HALVES the required vent area?",
    choices: [
      { text: "Sealing the ground inside the subfloor with an impervious membrane", correct: true,
        feedback: "Correct — half the moisture problem IS the soil breathing water vapour into the space. Seal the ground and Zone C drops from 6000 to 3000 mm² per metre of wall." },
      { text: "Painting the subfloor timbers", correct: false,
        feedback: "Paint slows surface wetting but the damp air still condenses everywhere else. The halving comes from stopping moisture at its source: a membrane over the ground." },
      { text: "Installing a single large vent instead of many small ones", correct: false,
        feedback: "Opposite of the design intent — CROSS-ventilation needs openings spread evenly around the perimeter, within 600 mm of corners, aligned through both masonry leaves, so air sweeps the whole space." }
    ],
    explanation:
      "Subfloor ventilation by zone: A — 2000, B — 4000, C — 6000 mm² per metre of wall (halved with a ground membrane). Plus: space cleared of debris, ground graded per Phase 1's 3.3.3, no dead air pockets, vents even and within 600 mm of corners, aligned openings in both leaves of masonry, matching openings through internal subfloor walls. Volume Two's H2D5 names this Part as how suspended floors satisfy the rising damp requirement — the same H2P3 the slab's vapour barrier serves.",
    source: {
      clause: "6.2.1 (+ V2 H2D5)", clauseTitle: "Subfloor ventilation", page: 115,
      quote:
"(1) Subfloor spaces must— (a) be provided with openings in external walls and internal subfloor walls in accordance with Table 6.2.1a for the climatic zones given in Figure 6.2.1a; ...\n" +
"Table 6.2.1a: Zone A — 2000 mm²/m of wall (1000 with ground sealed by impervious membrane); Zone B — 4000 (2000); Zone C — 6000 (3000).\n" +
"(2) In addition to (1), a subfloor space must— (a) be cleared of all building debris and vegetation; and (b) have the ground beneath the suspended floor graded in accordance with 3.3.3; and (c) contain no dead air spaces; and (d) have openings evenly spaced as far as practicable; and (e) have openings placed not more than 600 mm in from corners.\n" +
"(3) In double leaf masonry walls, openings specified in (1) must be provided in both leaves of the masonry, with openings being aligned to allow an unobstructed flow of air.\n\n" +
"NCC Volume Two H2D5 — Performance Requirement H2P3 is satisfied for subfloor ventilation if it is in accordance with Part 6.2 of the ABCB Housing Provisions."
    }
  },

  /* ---------- 6.2.1(1)(b) ground clearance (number) ---------- */
  {
    id: "ground-clearance",
    media: { kind: "svg", src: "assets/svg/q-ground-clearance.svg",
             alt: "A suspended floor on stumps with crawl clearance to the ground",
             caption: "Crawl space under a suspended floor." },
    type: "number",
    topic: "Subfloor",
    question: "Under the suspended floor, there must be crawl-and-look room: clearance between the ground and the lowest timber. Where a termite management system needs INSPECTING under there, set the minimum clearance.",
    slider: { min: 0, max: 600, step: 50, unit: "mm", start: 0, target: 400,
      hints: {
        "150": "150 mm is the minimum where NO termite inspection is needed. This house needs its barrier checked annually — a human head has to fit under there with a torch.",
        "200": "Not enough to crawl and inspect. Think about what has to happen under this floor once a year.",
        "300": "Closer — but the inspection clearance is a little more generous.",
        "450": "More than required. The code's number is just below this.",
        "500": "Comfortable, but well past the minimum.",
        "0":   "Timber on dirt is a termite buffet with no witnesses. Clearance is non-negotiable.",
        "550": "Nearly double the requirement.",
        "600": "Far past the minimum — you've built a basement."
      }
    },
    explanation:
      "150 mm minimum in general — but 400 mm where a termite management system must be inspected, because an inspector physically crawls under there. On sloping sites the 400 mm may taper to 150 mm within 2 m of external walls. Phase 1's termite logic (visible barriers, annual inspections) literally shapes the dimensions of Phase 3's floor.",
    source: {
      clause: "6.2.1(1)(b) + Table 6.2.1b", clauseTitle: "Subfloor ventilation — ground clearance", page: 115,
      quote:
"(1)(b) [Subfloor spaces must] have clearance between the ground surface and the underside of the lowest horizontal member in the subfloor in accordance with Table 6.2.1b (see Figure 6.2.1b and Figure 6.2.1c).\n\n" +
"Table 6.2.1b — Ground clearance (zones A, B and C): minimum ground clearance height where termite inspection or management system is not required — 150 mm; where termite inspection is required — 400 mm.\n" +
"Table Notes: (1) 400 mm clearance required only where termite management systems are installed that need to be inspected. (2) On sloping sites the 400 mm clearance required by (1) may be reduced to 150 mm within 2 m of external walls in accordance with Figure 6.2.1b."
    }
  },

  /* ---------- 6.3.2-6.3.6 structural steel members ---------- */
  {
    id: "steel-members",
    media: { kind: "svg", src: "assets/svg/q-steel-bearer.svg",
             alt: "A steel bearer on columns carrying floor load",
             caption: "A steel bearer carrying a floor." },
    type: "quiz",
    topic: "Steel members",
    question: "Part 6.3 covers the heavy steel in a house — bearers, strutting beams, [[lintel|lintels]] and columns — with span tables for each. To pick a bearer from the tables you need its steel section AND one more number. Which?",
    choices: [
      { text: "The 'effective load width' — how much floor each metre of bearer actually carries", correct: true,
        feedback: "Correct. A bearer carrying 4.2 m of floor either side works much harder than one carrying 1.8 m — same beam, shorter allowable span. Every span table in the NCC runs on this idea." },
      { text: "The colour code of the steel", correct: false,
        feedback: "Paint colour is corrosion protection, not capacity. The tables are indexed by steel section and effective load width — the strip of floor the bearer is responsible for." },
      { text: "The brand of the steel supplier", correct: false,
        feedback: "Any supplier, same physics: minimum 250 MPa yield strength, then section + effective load width into the table, out comes the maximum span." }
    ],
    explanation:
      "Part 6.3's structural steel members all need ≥250 MPa nominal yield strength and corrosion protection per 6.3.9. The tables work the same way every time: pick the member's job (bearer under timber floor, strutting beam, lintel, column), find your section, read across at your effective load width, get the maximum span. Loads must be evenly distributed, and continuous-span supports can't differ by more than 10% of the span. Learning to drive one NCC span table means you can drive them all — including the timber ones in AS 1684.",
    source: {
      clause: "6.3.2 & 6.3.3", clauseTitle: "Structural steel members / Bearers", page: 119,
      quote:
"6.3.2 — (1) Structural steel members may be used as follows: (a) Bearers supporting a timber floor or non-loadbearing stud wall — in accordance with 6.3.3. (b) Strutting beams supporting roof and ceiling loads — in accordance with 6.3.4. (c) Lintels supporting roof, ceiling, frame and timber floor — in accordance with 6.3.5. (d) Columns — in accordance with 6.3.6.\n" +
"(2) Structural steel members in (1)(a), (b) and (c) must have a minimum nominal yield strength of 250 MPa. ...\n" +
"(4) Structural steel members described in this Part must be protected against corrosion in accordance with 6.3.9.\n\n" +
"6.3.3 — Structural steel bearers must comply with the following: (a) Effective bearer spacing must be determined in accordance with— (i) for single span joists — Table H1D6a and Figure H1D6d; ... (c) All loads along the bearer must be evenly distributed. (d) The difference in distance between supports for continuous span bearers must not be more than 10% of the span."
    }
  },

  /* ---------- 6.3.7 fixings & bearing ---------- */
  {
    id: "steel-bearing",
    media: { kind: "svg", src: "assets/svg/q-steel-bearing.svg",
             alt: "A steel beam sitting on a column support, with the bearing length marked",
             caption: "How much of the beam must sit on its support?" },
    type: "quiz",
    topic: "Steel members",
    question: "A steel bearer lands on its column supports. The bearer is one structural [[structural member|member]]. A member's 'width' is simply how WIDE it is across the section (see the inset — not its length, and not its depth). How much of the bearer must actually SIT on each support — the bearing distance?",
    choices: [
      { text: "At least the member's own width at the ends — and twice its width at internal supports of continuous spans", correct: true,
        feedback: "Correct. End reactions are modest; internal supports of continuous beams carry the reactions of TWO spans meeting, so they get double the seat. All connection bolts hot-dip galvanised at 300 g/m²." },
      { text: "25 mm is plenty — steel is strong", correct: false,
        feedback: "Strong in bending, but a beam perched on a sliver crushes its web or slips off under vibration. The seat scales with the member: one width at ends, two at internal supports." },
      { text: "It must be welded, never just bearing", correct: false,
        feedback: "Bearing plus bolted fixings per the figures is the deemed-to-satisfy way — with members restrained against twisting by the joists or rafters fixed to their top flange." }
    ],
    explanation:
      "6.3.7: bolts hot-dip galvanised 300 g/m²; bearers fixed per Figure 6.3.7a; members restrained against lateral movement and twist by the joists/rafters on their top flange; bearing distance ≥1× member width at single-span ends, ≥2× at continuous internal supports. Note WHICH way that distance runs: the 'bearing distance' is measured ALONG the bearer (the span direction) — how far the bearer's end laps onto the support — and that overlap must be ≥ the bearer's width (so a 75 mm-wide bearer needs ≥75 mm of seat along its length, 150 mm over a continuous internal support). The support's OTHER dimension (across the bearer's width) is NOT set by this clause: it just has to be wide enough to carry the bearer's full width, and the column's actual section size comes from the column design table (6.3.6) for the load it carries. So 6.3.7 fixes how far along the bearer must sit; the column section itself is a separate design step. Steel fails at connections far more often than mid-span — which is why the figures fuss over them.",
    source: {
      clause: "6.3.7", clauseTitle: "Fixings and bearing for structural steel members", page: 146,
      quote:
"(1) All bolts used in connections must be hot dip galvanised 300 g/m2.\n" +
"(2) Bearer connections must be fixed in accordance with Figure 6.3.7a.\n" +
"(3) Joists, bearers and lintels must be restrained from lateral movement or twisting along their length by fixing rafters or joists to the top flange of the member so as to prevent the member from moving laterally.\n" +
"(4) End supports for bearers and lintels must transfer loads to the footings and have a bearing distance as follows:\n" +
"(a) For single spans, the bearing distance must be not less than the width of the member.\n" +
"(b) For continuous spans, internal bearing must be not less than two times the width of the member."
    }
  },

  /* ---------- 6.3.8 penetrations ---------- */
  {
    id: "steel-penetrations",
    media: { kind: "svg", src: "assets/svg/q-steel-penetration.svg",
             alt: "A steel beam on two supports with a proposed hole drilled right next to one support",
             caption: "The plumber wants to drill a hole right next to the support." },
    figure: { src: "assets/photos/ncc-fig-6-3-8.png",
             alt: "NCC Figure 6.3.8 — allowable and prohibited penetration zones in a structural steel member",
             caption: "The allowable zone is the middle third of the web depth, mid-span — clear of the supports and never through a flange. Source: ABCB Housing Provisions Standard 2025, Figure 6.3.8." },
    type: "quiz",
    topic: "Steel members",
    question: "The plumber wants to run a pipe through the steel beam and is about to drill a hole right next to a support (as pictured). Is a penetration allowed there?",
    choices: [
      { text: "No — that's a prohibited zone; the web near a support carries the shear", correct: true,
        feedback: "Correct. The region near each support is doing the hard shear work, so it's a prohibited zone. Holes are only allowed in the calm middle-of-web, middle-of-span 'allowable zone' (see the figure below) — never through a flange or near a support." },
      { text: "Yes — you can drill a steel beam anywhere", correct: false,
        feedback: "No. Steel doesn't crack like concrete, but a hole in the wrong place (a flange, or the web near a support) can halve the member's capacity. Penetrations are only allowed in the zones of Figure 6.3.8 — and right by a support is prohibited." },
      { text: "Yes, but only if it's a small hole", correct: false,
        feedback: "Size isn't the issue here — LOCATION is. Next to a support is a prohibited zone regardless of hole size. The allowable zone is mid-web, mid-span." }
    ],
    explanation:
      "Figure 6.3.8 (below) splits each member into allowable and prohibited zones: holes live in the middle third of the web's depth, clear of the support regions (about the outer quarters of the span) and never through flanges. The intuition: flanges carry bending, web-at-supports carries shear, middle-of-web-mid-span is on light duties — so a hole right next to the support is firmly in the prohibited zone. When in doubt, ask an engineer before the hole saw spins.",
    source: {
      clause: "6.3.8", clauseTitle: "Penetrations through structural steel members", page: 146,
      quote:
"Penetrations through structural steel members must be within the allowable zones in Figure 6.3.8.\n\n" +
"(Explanatory Information: Cutting and penetrations in structural steel should be avoided where possible. Figure 6.3.8 provides permissible zones for penetrations through structural steel. However, it is recommended that a suitable qualified professional be consulted where penetrations or cuts are required to be made on site.)"
    }
  },

  /* ---------- 6.3.9 corrosion ---------- */
  {
    id: "steel-corrosion",
    type: "quiz",
    topic: "Steel members",
    question: "A steel lintel gets cut to length on site with an angle grinder, slicing through its galvanised coating. Compliance-wise, that cut edge is…",
    choices: [
      { text: "A problem until repaired — cut, welded or damaged areas must be restored to the original protection level", correct: true,
        feedback: "Correct. Corrosion doesn't read averages — it starts at the one bare edge and creeps under the coating from there. Every site cut gets re-protected to match." },
      { text: "Fine — the rest of the coating protects it galvanically", correct: false,
        feedback: "Zinc does offer some sacrificial protection, but the code doesn't accept it as a fix: damaged and cut areas must be restored to the original coating's protection level." },
      { text: "Fine if it's indoors", correct: false,
        feedback: "The protection LEVEL varies by environment (heavier coatings near the coast — same logic as wall ties), but the repair rule is universal: any cut, weld or damage gets restored." }
    ],
    explanation:
      "6.3.9: members not built into masonry are protected per the tables — hot-dip galvanising, duplex systems or paint systems graded by environment (low/medium/high corrosivity, largely by distance from salt water, mirroring the wall-tie table). Paint goes on rust-free steel; zinc gets a barrier coat before enamels; and anything cut, welded or damaged on site is restored to the original protection. One unpainted cut on a coastal lintel outlives the warranty, not the building.",
    source: {
      clause: "6.3.9", clauseTitle: "Corrosion protection", page: 147,
      quote:
"Structural steel members that are not built in to a masonry wall must—\n" +
"(a) be protected against corrosion in accordance with Tables 6.3.9a, 6.3.9b and 6.3.9c; and\n" +
"(b) where a paint finish is applied to the surface, be free from rust; and\n" +
"(c) where zinc coatings are applied to the surface, be provided with a barrier coat to prevent domestic enamels from peeling; and\n" +
"(d) when cut or welded on-site, have those areas and any other areas of damage to protective coatings comply with (a)."
    }
  },

  /* ---------- Volume Two: H1D5 + H2D4 rule book ---------- */
  {
    id: "rulebook-masonry",
    type: "quiz",
    topic: "The rule book",
    question: "Up to the rule book. Volume Two's [[ncc clause numbering|H1D5]] is the gatekeeper for masonry, exactly as H1D4 was for footings. Which house can use the Housing Provisions' veneer recipes (Part 5.2)?",
    choices: [
      { text: "A veneer home in wind class N3 or calmer, on compliant footings, on a Class A, S or M site, outside alpine and earthquake-special areas", correct: true,
        feedback: "Correct — the same gatekeeper pattern as footings: ordinary site, ordinary wind, everything beneath it compliant. Tick every condition or design to AS 3700 / AS 4773 instead." },
      { text: "Any house — brick veneer is brick veneer", correct: false,
        feedback: "Above wind class N3 (think exposed coastal or cyclonic) the pre-engineered ties, piers and tables stop applying, and the design moves to AS 3700 or AS 4773." },
      { text: "Only single-storey homes", correct: false,
        feedback: "Storeys aren't the trigger here (the 8.5 m height cap handles that) — the H1D5 conditions are wind class ≤N3, compliant footings and framing, site class A/S/M, non-alpine, no special earthquake requirements." }
    ],
    explanation:
      "H1D5 gives each masonry type its pathways: AS 3700, or AS 4773.1 & .2, or the Housing Provisions Part (5.2 veneer / 5.3 cavity / 5.4 single leaf / 5.5 piers / 5.6 accessories) under conditions — wind class ≤N3, footings per H1D4, components per Parts 5.6–5.7, site class A/S/M, framing per H1D6, non-alpine, no AS 1170.4 earthquake specifics. Weatherproofing has its own twin: H2D4 satisfies the weatherproofing PRs via AS 3700, AS 4773, or Part 5.7. Reinforced masonry isn't in the Housing Provisions at all — H1D5(4) sends it straight to the Standards.",
    source: {
      doc: "v2",
      clause: "H1D5(1)", clauseTitle: "Masonry", page: 98,
      quote:
"(1) Performance Requirement H1P1 is satisfied for masonry veneer if it is designed and constructed in accordance with—\n" +
"(a) AS 3700; or\n" +
"(b) AS 4773.1 and AS 4773.2; or\n" +
"(c) Part 5.2 of the ABCB Housing Provisions provided—\n" +
"  (i) the building is located in an area with a wind class of not more than N3; and\n" +
"  (ii) masonry veneer walls— (A) are constructed on footings and/or slabs that comply with H1D4; and (B) comply with Part 5.6 using components that comply with Part 5.7 of the ABCB Housing Provisions; and\n" +
"  (iii) the building site soil classification is A, S or M in accordance with AS 2870; and\n" +
"  (iv) the framing that the masonry wall is tied to complies with H1D6; and\n" +
"  (v) the building is not constructed in an alpine area; and\n" +
"  (vi) the building is one for which Appendix A of AS 1170.4 contains no specific earthquake design requirements."
    }
  },

  /* ---------- Volume Two: H1D6 — where framing rules live ---------- */
  {
    id: "rulebook-framing",
    type: "quiz",
    topic: "The rule book",
    media: { kind: "photo", src: "assets/photos/own-steel-framing.jpg",
             alt: "Blue steel wall framing of a house under construction",
             caption: "A steel-framed wall going up. Where are ITS rules written?" },
    question: "Surprise of the phase: flip through the entire Housing Provisions and you will NOT find stud sizes, joist spans or truss rules for ordinary wall framing. Where do timber and steel framing rules actually live?",
    choices: [
      { text: "In referenced standards: AS 1684 for timber, the NASH Standard for light steel — Volume Two's H1D6 points to them", correct: true,
        feedback: "Correct. Framing is so big it has whole books of its own: AS 1684 (four volumes of timber span tables) and NASH Parts 1–2 for steel. The NCC plugs them in by reference — they're law too." },
      { text: "Housing Provisions Section 6 — it's literally called 'Framing'", correct: false,
        feedback: "Sneaky, but Section 6 only covers subfloor ventilation and STRUCTURAL STEEL members (heavy beams and columns). The everyday stud-and-truss rules live in AS 1684 (timber) and NASH (steel), via H1D6." },
      { text: "There are no rules — framing is the carpenter's craft", correct: false,
        feedback: "Framing rules fill more pages than the rest of the house combined — just not NCC pages. AS 1684's span tables decide every joist, stud and batten; H1D6 is the legal hook that makes them mandatory." }
    ],
    explanation:
      "H1D6 satisfies H1P1 for: steel framing via the NASH Standard (or AS 4100 / AS/NZS 4600); timber framing via AS 1684.2/.4 (non-cyclonic) or AS 1684.3 (cyclonic), with AS 1720.1 design and AS 1720.5 trusses; structural steel sections via AS 4100, AS/NZS 4600 or HP Part 6.3. The lesson for navigating the code: the NCC is the hub, the Australian Standards are the spokes — and 'referenced documents' carry the same force as the code itself.",
    source: {
      doc: "v2",
      clause: "H1D6(3)–(4)", clauseTitle: "Framing", page: 100,
      quote:
"(3) Performance Requirement H1P1 is satisfied for steel framing if it is designed and constructed in accordance with one of the following:\n" +
"(a) Residential and low-rise steel framing: (i) Design: NASH Standard ‘Residential and Low-Rise Steel Framing’ Part 1. (ii) Design solutions: NASH Standard ‘Residential and Low-Rise Steel Framing’ Part 2.\n" +
"(b) Steel structures: AS 4100.\n" +
"(c) Cold-formed steel structures: AS/NZS 4600.\n" +
"(4) Performance Requirement H1P1 is satisfied for timber framing if it is designed and constructed in accordance with the following, as appropriate:\n" +
"(a) Design of timber structures: AS 1720.1.\n" +
"(b) Design of nailplated timber roof trusses: AS 1720.5.\n" +
"(c) Residential timber-framed construction — non-cyclonic areas: AS 1684.2 or AS 1684.4.\n" +
"(d) Residential timber-framed construction — cyclonic areas: AS 1684.3.\n" +
"(e) Installation of particleboard flooring: AS 1860.2."
    }
  },

  /* ---------- finale: brickwork inspection (defect) ---------- */
  {
    id: "brickwork-inspection",
    type: "defect",
    topic: "Brickwork inspection",
    media: { kind: "svg", src: "assets/svg/defect-brickwall.svg",
             alt: "Drawing of a brick veneer wall under construction with several details to inspect, some compliant and some not" },
    question: "The veneer is halfway up — time to walk the wall. Inspect the five marked spots: three breach the rules you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 6,  y: 58, w: 16, h: 27, defect: true,  label: "Garden soil burying the weepholes and DPC",
        feedback: "Defect. The garden bed has been piled against the wall, burying the weepholes and leaving the DPC below ground level (it must be ≥150 mm above the soil, and the cavity must drain). The cavity's exits are blocked exactly like the slab edge in earlier phases. (5.7.4(2), 5.7.5)" },
      { x: 72, y: 15, w: 24, h: 33, defect: true,  label: "Lintel laid flat, bricks overhanging",
        feedback: "Defect. The end-on cut-away shows the angle lintel installed with its long leg lying HORIZONTAL (flat), and the bricks hanging out past the front edge well over the 25 mm limit. It should be long leg VERTICAL, masonry overhang max 25 mm, proper end bearing. (5.6.7)" },
      { x: 72, y: 51, w: 24, h: 32, defect: true,  label: "Mortar droppings bridging the cavity",
        feedback: "Defect. The cavity cut-away shows mortar droppings piled on a wall tie, bridging the gap from the wet brick skin straight to the frame — a footbridge for water. Ties must stay clean and the clear cavity width maintained. (5.7.2, 5.6.5)" },
      { x: 24, y: 12, w: 6, h: 58, defect: false, label: "Articulation joint, sealed over backer rod",
        feedback: "That one's fine. A clean 10 mm vertical articulation joint with flexible sealant over a backer rod — exactly where a long wall needs its movement break. (5.6.8)" },
      { x: 53, y: 64, w: 14, h: 12, defect: false, label: "Weepholes clear above the flashing",
        feedback: "That one's fine. Open perpends at regular spacing in the course above the flashing, nothing blocking them — the cavity can drain. (5.7.5)" }
    ],
    explanation:
      "Everything on this wall was about the same invisible machine: the cavity. Water WILL get through brickwork — the design assumes it — so the cavity stays clear (no mortar bridges), the DPC and flashings stay above ground and continuous, and the weepholes stay open to let it all back out. The brickie's tidiness behind the face of the wall matters more than the joints you can see.",
    source: {
      clause: "5.6.7, 5.7.2, 5.7.4 & 5.7.5", clauseTitle: "Lintels / Cavities / DPC installation / Weepholes", page: 102,
      quote:
"5.6.7(b)(ii) [Steel lintels must] be installed with the long leg of lintel angle vertical; (iii) be wide enough so that the masonry does not overhang the horizontal leg of the lintel by more than 25 mm.\n\n" +
"5.7.2(1) For masonry veneer, the clear width of a cavity ... must not be less than 25 mm wide ...\n\n" +
"5.7.4(2) The location of a damp-proof course ... must be not less than (a) 150 mm above the adjacent ground level ...\n\n" +
"5.7.5(1) ... open perpend joints (weepholes) must be created in the course immediately above any flashing ... at not more than 1.2 m centres."
    }
  }

  ]
};
