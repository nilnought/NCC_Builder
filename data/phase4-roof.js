/* ============================================================
   PHASE 4 — ROOF & CLADDING
   Content from: ABCB Housing Provisions Standard 2025, Section 7
   (sheet roofing, roof tiles, gutters & downpipes, wall cladding)
   plus the NCC 2025 Volume Two layer (H1D7, H2D6).
   Editing guide: docs/CONTENT-GUIDE.md · Ledger: docs/COVERAGE.md
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["roof"] = {
  id: "roof",
  title: "Roof & cladding",
  intro:
    "Frames up, brickwork rising — now the lid goes on. A roof is a machine for catching water and " +
    "throwing it exactly where Phase 1's drains are waiting: sheet or tile sheds it, [[sarking]] catches " +
    "what sneaks under, [[flashing|flashings]] seal every joint and penetration, gutters collect it and " +
    "downpipes deliver it. Most of this phase's rules are about one fact: metal + wrong metal + rain = " +
    "battery. And one design secret: gutters are DESIGNED to overflow — outwards.",
  learnList: [
    "Metal sheet roofing: pitch, fixing, laying and galvanic compatibility",
    "Roof tiles: fixing by wind class, flashing, sarking and anti-ponding",
    "Gutters and downpipes: sizing by rainfall, the 12 m rule, overflow measures",
    "Wall cladding: weatherboards, sheets, flashed openings and ground clearance"
  ],

  questions: [

  /* ---------- V2 H1D7 + H2D6 rule book ---------- */
  {
    id: "rulebook-roof",
    type: "quiz",
    topic: "The rule book",
    question: "Volume Two's [[ncc clause numbering|H1D7]] gates the roofing recipes, as usual. For ROOF TILES, the Housing Provisions route (Part 7.3) comes with a pitch window. Tiled roofs qualify only between…",
    choices: [
      { text: "15 and 35 degrees", correct: true,
        feedback: "Correct. Flatter than 15° and tiles can't shed water faster than wind drives it uphill between them; steeper than 35° and gravity starts winning against the fixings. Outside the window: AS 2050 design." },
      { text: "1 and 90 degrees — tiles work anywhere", correct: false,
        feedback: "Tiles are loose-lapped armour, not a sealed skin — they only work in their pitch window: 15°–35° for the recipes, wind class N3 or less, tiles to AS 2049." },
      { text: "45 degrees minimum, like European snow roofs", correct: false,
        feedback: "That's snow logic; Australian tile recipes run 15°–35°. Sheet metal handles the low-slung roofs — down to 1° or 2° depending on profile." }
    ],
    explanation:
      "H1D7's pathways: sheet roofing — AS 1562.1, or HP Part 7.2 up to wind class N3 (cyclonic B2/C/D regions get extra pressure-sequence testing); roof tiles — AS 2050, or HP Part 7.3 if wind ≤N3, tiles to AS 2049, pitch 15–35°; wall cladding — HP Part 7.5, AAC panels to AS 5146.1, metal wall cladding to AS 1562.1. And H2D6 twins it for drainage: gutters and downpipes via AS/NZS 3500.3 or HP Part 7.4 — with box gutters explicitly excluded from the recipes.",
    source: {
      doc: "v2",
      clause: "H1D7(3) & H2D6", clauseTitle: "Roof and wall cladding (structure / rainwater)", page: 106,
      quote:
"H1D7(3) Performance Requirement H1P1 is satisfied for roof cladding if it complies with one or a combination of the following:\n" +
"(a) Terracotta, fibre-cement and timber slates and shingles: AS 4597.\n" +
"(b) For roof tiles— (i) AS 2050; or (ii) Part 7.3 of the ABCB Housing Provisions, provided— (A) the building is located in an area with a wind class of not more than N3; and (B) the roof tiles comply with AS 2049; and (C) the roof has a pitch of not less than 15 degrees and not more than 35 degrees.\n\n" +
"H2D6(1) Performance Requirement H2P1 is satisfied for gutters and downpipes if they are designed and constructed in accordance with one of the following: (a) Subject to (2), AS/NZS 3500.3. (b) Subject to (2) and (3), Part 7.4 of the ABCB Housing Provisions.\n" +
"(3) Part 7.4 of the ABCB Housing Provisions— (a) may only be used provided the roof drainage system is connected to a stormwater drainage system that complies with H2D2; and (b) excludes box gutters."
    }
  },

  /* ---------- 7.2.2 metal compatibility ---------- */
  {
    id: "metal-compat",
    type: "quiz",
    topic: "Sheet roofing",
    question: "Galvanic corrosion: when rain connects two different metals, one sacrifices itself. Which of these roofing combinations does the NCC BAN outright?",
    choices: [
      { text: "Lead flashing upstream of an aluminium/zinc-coated (Colorbond-style) roof", correct: true,
        feedback: "Correct — rainwater washing over lead picks up ions that eat zincalume coatings downstream. Also banned: lead anywhere on a drinking-water catchment roof, and copper upstream of galvanised steel." },
      { text: "Stainless steel screws in a steel roof", correct: false,
        feedback: "Compatible per the tables — the issue is specific pairs where runoff from one attacks the other: lead over zincalume, copper over galvanised." },
      { text: "Two sheets of the same product overlapping", correct: false,
        feedback: "Same metal, no battery. The chemistry problem needs DIFFERENT metals plus water flowing from one to the other — which is why the rules talk about 'upstream'." }
    ],
    explanation:
      "7.2.2: coating grade by environment (inland to surf-side, same geography as wall ties and steel members), and compatibility per the tables with three hard bans — no lead upstream of aluminium/zinc-coated materials, no lead at all on drinking-water catchment roofs, no copper upstream of galvanised. 'Upstream' is the key word: corrosion travels with the water.",
    source: {
      clause: "7.2.2", clauseTitle: "Corrosion protection and compatibility requirements for roofing", page: 153,
      quote:
"(1) Metal sheet roofing must be protected from corrosion in accordance with Table 7.2.2a.\n" +
"(2) Where different metals are used in a roofing system, including flashings, fasteners, guttering, downpipes, etc., they must be compatible with each other as described in Table 7.2.2b, Table 7.2.2c, Table 7.2.2d, and Table 7.2.2e; and—\n" +
"(a) no lead materials can be used upstream from aluminium/zinc coated materials; and\n" +
"(b) no lead materials can be used on roofs that form part of a drinking water catchment area; and\n" +
"(c) no copper materials can be used upstream from galvanized coated materials."
    }
  },

  /* ---------- 7.2.3 minimum pitch ---------- */
  {
    id: "min-pitch",
    type: "quiz",
    topic: "Sheet roofing",
    media: { kind: "photo", src: "assets/photos/own-sheet-roofing.jpg",
             alt: "Corrugated metal sheet roofing on a house, with a lower roof section meeting a higher one",
             caption: "Corrugated sheet on a real roof. How flat is too flat?" },
    question: "Metal sheet can run much flatter than tiles — but every profile has a floor. For classic CORRUGATED sheet (pictured), the minimum pitch is…",
    choices: [
      { text: "5 degrees", correct: true,
        feedback: "Correct. Corrugated's shallow ribs hold less water, so it needs 5°. Trapezoidal profiles with taller ribs go to 2°, and concealed-fastened decking reaches 1° — deeper channel, flatter roof." },
      { text: "15 degrees, same as tiles", correct: false,
        feedback: "That's the tile threshold. Continuous sheets seal far better than thousands of lapped tiles — corrugated needs only 5°, and deeper profiles less still." },
      { text: "Dead flat is fine — metal is waterproof", correct: false,
        feedback: "The sheet is waterproof; the LAPS aren't. Below minimum pitch, water sits and wicks sideways and uphill through side laps. Pitch keeps it moving." }
    ],
    explanation:
      "Figure 7.2.3's ladder: corrugated 5°, close-pitched trapezoidal 2°, trapezoidal 2°, concealed-fastened 1°. The deeper the profile's ribs, the more water it can channel without spilling over the laps, the flatter it may lie. Long flat runs also deserve a check of drainage capacity — minimum pitch is the floor, not always enough.",
    source: {
      clause: "7.2.3 + Figure 7.2.3", clauseTitle: "Minimum pitches for metal sheet roofing profiles", page: 156,
      quote:
"Metal sheet roofing must comply with the minimum pitch requirements for the associated roof profile in accordance with Figure 7.2.3.\n\n" +
"Figure 7.2.3 (values): Corrugated — minimum pitch 5 degrees; Close pitched trapezoidal — 2 degrees; Trapezoidal — 2 degrees; Concealed fastened — 1 degree.\n" +
"Figure Notes: (1) For minimum end lap requirements see 7.2.6(b)(ii). (2) Consideration should be given to the drainage run off capacity of the roof sheeting when determining the minimum pitch and total length of the roof sheet."
    }
  },

  /* ---------- 7.2.4 + 7.2.5 spans & fixing ---------- */
  {
    id: "sheet-fixing",
    media: { kind: "svg", src: "assets/svg/q-sheet-fixing.svg",
             alt: "Corrugated roof profile asking whether the screw goes through the crest or valley",
             caption: "Crest or valley — where does the screw go?" },
    type: "quiz",
    topic: "Sheet roofing",
    question: "Fixing the sheets down: screws go through the sheet into the battens. WHERE on the corrugation must a pierce-fixed screw land?",
    choices: [
      { text: "Through the crest (the high point of the rib)", correct: true,
        feedback: "Correct — crest fastening keeps every screw hole up out of the water channel. A screw through the valley is a permanent hole exactly where all the water runs." },
      { text: "Through the valley, where the sheet sits firmly on the batten", correct: false,
        feedback: "Firm, yes — and permanently underwater. The code's two options are crest (pierced) fastening or concealed fasteners. Valleys carry the water; you don't perforate them." },
      { text: "Anywhere, with plenty of silicone", correct: false,
        feedback: "Sealant ages; geometry doesn't. Crest fixing or concealed clips, at the spacings of Table 7.2.5, with an anti-capillary break in the side laps where clip and pierced systems mix." }
    ],
    explanation:
      "7.2.5: crest fastening or concealed fasteners, spacings per Table 7.2.5 (e.g. 0.42 mm corrugated: supports at max 900 mm at sheet ends, 1200 mm internally — ends work harder because wind peels from edges), fixings galvanically compatible with the sheet, and an anti-capillary feature in side laps. 7.2.4 adds span limits and a 25 m maximum sheet run for pierced-fixed profiles — thermal expansion needs somewhere to go.",
    source: {
      clause: "7.2.5 (+7.2.4)", clauseTitle: "Fixing of metal sheet roofing / Maximum spans", page: 157,
      quote:
"Metal sheet roofing must—\n" +
"(a) be either fixed through the roofing (crest fastening) or have concealed fasteners; and\n" +
"(b) be fixed at spacings in accordance with Table 7.2.5; and\n" +
"(c) use fixings of a compatible metal to the roof in accordance with Tables 7.2.2b, 7.2.2c, 7.2.2d and 7.2.2e; and\n" +
"(d) when using both clipped and pierced fastening systems, employ an anti-capillary feature in the side lap of the sheet (see Figure 7.2.5).\n\n" +
"Table 7.2.5 (extract): Corrugated 0.42 mm — max end span 900 mm, max internal span 1200 mm.\n" +
"7.2.4 Table Note (2): Thermal expansion - Maximum sheet run for pierced fixed metal roofing profiles must be not greater than 25 m when measured between the fasteners at the ends of the sheet."
    }
  },

  /* ---------- 7.2.6 laying ---------- */
  {
    id: "sheet-laying",
    media: { kind: "svg", src: "assets/svg/q-sheet-laying.svg",
             alt: "Side section of a roof slope where two sheets meet at an end lap, the upper sheet lapping over the lower, with the lap length marked as a question",
             caption: "Two sheets meet part-way up a long roof — how big is the end lap?" },
    figure: { src: "assets/photos/ncc-fig-7-2-6.png",
             alt: "NCC Figure 7.2.6",
             caption: "Sheet laying sequence and end laps. Source: ABCB Housing Provisions Standard 2025, Figure 7.2.6." },
    type: "quiz",
    topic: "Sheet roofing",
    question: "Best practice — and the actual rule — is to roof each run in single sheets from fascia to ridge. When a roof is too long and sheets MUST be end-lapped, the lap on a 20° roof is at least…",
    choices: [
      { text: "150 mm, laid bottom-to-top so upper sheets overlap lower ones", correct: true,
        feedback: "Correct. Above 15° gravity helps, so 150 mm suffices; flatter roofs (5–15°) need 200 mm because wind-driven water climbs further up the lap. And always shingle-style: water must step DOWN at every joint." },
      { text: "50 mm — same as the gutter overhang", correct: false,
        feedback: "50 mm is the overhang INTO the gutter at the bottom edge. End laps mid-roof fight capillary rise and wind: 150 mm at this pitch, 200 mm on flatter roofs." },
      { text: "No lap needed if you run a bead of sealant", correct: false,
        feedback: "Sealant supplements, never replaces, lap geometry. 150/200 mm by pitch, runs completed bottom-to-top, and sheets stop-ended (valleys turned up 60°) at the ridge so wind can't drive water over the top." }
    ],
    explanation:
      "7.2.6: full lengths fascia-to-ridge wherever possible; otherwise each run laid bottom to top, end laps ≥150 mm above 15° or ≥200 mm at 5–15°, and every sheet stop-ended at the ridge (each valley turned up 60°) so gusts can't push water over the crest into the ceiling.",
    source: {
      clause: "7.2.6", clauseTitle: "Installation of roofing sheets", page: 158,
      quote:
"Sheets must be—\n" +
"(a) laid wherever possible using complete lengths from the fascia to ridge; or\n" +
"(b) where a complete length cannot be laid— (i) each run must be laid from bottom to top before moving on to the next run (see Figure 7.2.6); and (ii) the minimum end lap must be— (A) for roof slopes above 15 degrees (1:4) — 150 mm; and (B) for roof slopes between 5–15 degrees (1:12-1:4) — 200 mm; and\n" +
"(c) stop ended (i.e. each valley turned up 60 degrees) at the ridge line of each length."
    }
  },

  /* ---------- 7.2.7 + 7.3.3 flashings ---------- */
  {
    id: "roof-flashings",
    media: { kind: "svg", src: "assets/svg/q-roof-flashing.svg",
             alt: "A flashing where the roof meets a wall",
             caption: "Flashing where the roof meets a wall." },
    type: "quiz",
    topic: "Flashings",
    question: "[[flashing|Flashings]] seal every place the roof plane is interrupted — walls, pipes, ridges. Where a flashing meets a wall and steps along the roof line, its joints must overlap…",
    choices: [
      { text: "At least 75 mm, lapped in the direction the water flows", correct: true,
        feedback: "Correct — the universal flashing number. Sheet-roof flashings: 75 mm laps, wedged into masonry at ≤500 mm intervals. Tile flashings: 75 mm upturn against the wall, 150 mm width onto the tiles, 75 mm joint laps. Always shingled with the flow." },
      { text: "10 mm, sealed with silicone", correct: false,
        feedback: "A 10 mm sealed butt joint is a future leak with a warranty period. Flashings work by geometry: 75 mm of overlap, arranged so water stepping down can never step INTO a joint." },
      { text: "They must be welded into one continuous piece", correct: false,
        feedback: "Continuous would fight thermal movement. Lapped 75 mm in the direction of fall lets pieces move while water keeps stepping downhill over every joint." }
    ],
    explanation:
      "Flashings and cappings: purpose-made machine-folded metal, compatible with everything up- and downstream, joints ≥75 mm lapped with the fall, masonry fixings wedged at ≤500 mm — and the lead bans from 7.2.2 apply here hardest, since flashings were traditionally lead. For tiles (7.3.3): 75 mm up the wall, 150 mm wide moulded into the tiles, penetrations collar- or apron-flashed.",
    source: {
      clause: "7.2.7 & 7.3.3", clauseTitle: "Flashings and cappings / Flashing (tiles)", page: 159,
      quote:
"7.2.7(1)(d) Joints in flashings and cappings must be not less than 75 mm, lapped in the direction of the fall of the roof ...\n" +
"(e) Wall and step flashings must be fastened into masonry walls with galvanized or zinc/aluminium sheet metal wedges at each end of each length and at intermediate intervals of not more than 500 mm and must overlap by not less than 75 mm in the direction of flow.\n" +
"(f) Lead flashings must not be used with prepainted steel or zinc/aluminium steel or on any roof if the roof is part of a drinking water catchment area.\n\n" +
"7.3.3(2)(a) For masonry or similar walls, flashing must— (i) follow the roof line, allowing not less than 75 mm upturn to the wall and a minimum of 150 mm in width and moulded into the tiles; ... (iii) have joints overlap the one below by not less than 75 mm in the direction of flow."
    }
  },

  /* ---------- 7.2.8 + 7.3.6 water discharge ---------- */
  {
    id: "gutter-overhang",
    media: { kind: "svg", src: "assets/svg/q-gutter-overhang.svg",
             alt: "A roof sheet overhanging into the eaves gutter",
             caption: "Roof sheet meeting the gutter." },
    type: "quiz",
    topic: "Into the gutter",
    question: "The hand-off moment: roof water must actually LAND in the eaves gutter. Sheets and tiles must overhang the fascia by at least…",
    choices: [
      { text: "50 mm for sheets, 35 mm for tiles", correct: true,
        feedback: "Correct. Too short and water clings to the sheet edge (surface tension is sneaky), curls back under and runs down the fascia. The overhang launches the water cleanly into the gutter's middle." },
      { text: "They must stop flush with the fascia for a clean line", correct: false,
        feedback: "Flush looks tidy and drips behind the gutter forever — rotting fascia, streaked walls. Sheets 50 mm, tiles 35 mm into the gutter." },
      { text: "200 mm, to be sure", correct: false,
        feedback: "That overshoots the gutter entirely in a storm. 50/35 mm puts the drip line over the gutter, not past it." }
    ],
    explanation:
      "7.2.8: sheets overhang the fascia (or end batten) ≥50 mm where an eaves gutter is provided. 7.3.6: tiles ≥35 mm. Note both clauses say 'where an eaves gutter is provided in accordance with H2D6(1)' — the rule book deciding whether gutters exist at all, the recipe deciding the geometry once they do.",
    source: {
      clause: "7.2.8 & 7.3.6", clauseTitle: "Water discharge", page: 162,
      quote:
"7.2.8 — Where an eaves gutter is provided in accordance with H2D6(1), sheets must overhang the fascia, or end batten where there is no fascia, by not less than 50 mm.\n\n" +
"7.3.6 — Where an eaves gutter is provided in accordance with H2D6(1), tiles must overhang the fascia or tiling batten by not less than 35 mm (See Figure 7.3.5)."
    }
  },

  /* ---------- 7.3.2 tile fixing ---------- */
  {
    id: "tile-fixing",
    media: { kind: "svg", src: "assets/svg/q-tile-fixing.svg",
             alt: "One roof slope seen from straight above, with the whole perimeter (ridge, hip, barge and eaves) shaded as one band and the middle tiles labelled the field",
             caption: "One roof slope from above — perimeter band vs the field in the middle." },
    type: "quiz",
    topic: "Roof tiles",
    question: "Wind doesn't lift a tiled roof evenly — some tiles feel far more uplift than others. The NCC's tile-fixing table (Table 7.3.2) is a lookup that tells you how every tile must be tied down — nail, screw, clip or pointing — based on the wind class AND where the tile sits on the roof. Which tiles ALWAYS get mechanically fixed, even in gentle wind class N1?",
    choices: [
      { text: "The edges: ridge, hip, barge and the perimeter courses", correct: true,
        feedback: "Correct. Wind accelerating over edges creates the strongest uplift, so the perimeter and capping tiles clip or nail down first; field tiles in the middle may rely on weight in low wind classes." },
      { text: "The field tiles in the middle of the roof", correct: false,
        feedback: "The middle is the calmest place on the roof. Fixing intensity grows from field to edge — by N3, everything's fixed, but edges are fixed everywhere." },
      { text: "None — tiles are heavy enough everywhere", correct: false,
        feedback: "Weight holds tiles in still air. In gusts, edge suction can exceed a tile's weight several times over — nails 15 mm into battens, screws or clips per the wind-class table." }
    ],
    explanation:
      "Fixings per Table 7.3.2 by wind class and roof zone: galvanised clouts (≥2.8 mm, penetrating ≥15 mm into the batten), 8-18 gauge screws, purpose-made corrosion-protected clips, or flexible pointing to AS 2050. The pattern to remember: edge of roof ≥ field of roof, and everything tightens as wind class climbs — the same edges-first logic as sheet-roofing's shorter end spans.",
    source: {
      clause: "7.3.2", clauseTitle: "Fixing of roof tiles and ancillaries", page: 163,
      quote:
"(1) Roof tiles and hip, ridge, barge and capping tiles must be fixed in accordance with Table 7.3.2 and Figures 7.3.2a–7.3.2e.\n" +
"(2) Fixing required by Table 7.3.2 must consist of one or a combination of the following:\n" +
"(a) Galvanized clout nails with a minimum diameter of 2.8 mm and of a length so that the nail will penetrate not less than 15 mm into the batten.\n" +
"(b) Self embedding head screws of 8-18 gauge and of a length so that the screw will penetrate not less than 15 mm into the batten.\n" +
"(c) Purpose made clips of non-ferrous metal, stainless steel or steel protected from corrosion ...\n" +
"(d) Flexible pointing material complying with AS 2050."
    }
  },

  /* ---------- 7.3.4 sarking ---------- */
  {
    id: "sarking",
    type: "quiz",
    topic: "Roof tiles",
    media: { kind: "svg", src: "assets/svg/q-sarking.svg",
             alt: "Cross-section through a tiled roof showing the layers — tiles on battens, battens on the sarking membrane, sarking on the rafter — with two sheets of sarking overlapping and the overlap marked as a question",
             caption: "Section through a tiled roof: tile, batten, sarking, rafter. Where two sarking sheets meet, how big is the overlap?" },
    question: "[[sarking|Sarking]] is the membrane under the battens — the roof's secret second skin, catching wind-driven rain and dust that gets past the tiles. When sheets of it join, the overlap must be at least…",
    choices: [
      { text: "150 mm (or the joint taped)", correct: true,
        feedback: "Correct — same shingle principle as everything else on this roof: each sheet laps over the one below so the trickle it catches steps downhill to the gutter, never through a joint." },
      { text: "10 mm — it's only a backup", correct: false,
        feedback: "The backup catches real water (storm-driven rain spits between every tile lap on a windy day). 150 mm laps or taped joints, material to AS 4200.1." },
      { text: "Sarking sheets must never overlap — they'd trap moisture", correct: false,
        feedback: "Vapour-permeable sarking breathes; overlaps don't trap anything. They're what makes hundreds of square metres of membrane act as one continuous drainage plane." }
    ],
    explanation:
      "Sarking: required per Table 7.3.4 (by rainfall intensity and pitch), complying with AS 4200.1, laps ≥150 mm or taped, fixed to supports. Its low-pitch companion: the anti-ponding board (7.3.5) — where sarking is installed on roofs under 20° (or any roof without eaves), a water-resistant board holds the sarking's eaves edge up so the water it catches drains over the fascia instead of ponding in a sag behind it.",
    source: {
      clause: "7.3.4 (+7.3.5)", clauseTitle: "Sarking / Anti-ponding device", page: 169,
      quote:
"7.3.4 — Sarking must— (a) be provided in accordance with Table 7.3.4; and (b) comply with AS 4200.1 and be installed with— (i) each adjoining sheet or roll being— (A) overlapped not less than 150 mm; or (B) taped together; ...\n\n" +
"7.3.5 — (1) An anti-ponding device/board must be provided where sarking is installed on— (a) roofs with a pitch less than 20°; and (b) roofs with no eaves overhang, regardless of the roof pitch.\n" +
"(2) An anti-ponding device required by (1) must be water resistant and fixed along the eaves line from the top of the fascia back up the rafter with a clearance of approximately 50 mm below the first batten."
    }
  },

  /* ---------- 7.4.3 gutter sizing ---------- */
  {
    id: "gutter-sizing",
    type: "quiz",
    topic: "Gutters & downpipes",
    question: "Gutter sizes come from sizing tables in Part 7.4 (Tables 7.4.3a–d) — you cross your town's 5-minute rainfall intensity with the roof area draining to each downpipe, then read off the gutter profile and downpipe size. The storms those tables are built around are rated by [[annual exceedance probability|AEP]] (how rare a storm is). They should sound familiar from Phase 1: gutters handle the ___ storm, overflow measures handle the ___ storm.",
    choices: [
      { text: "5% AEP (1-in-20-year) for gutters; 1% AEP (1-in-100-year) for overflow", correct: true,
        feedback: "Correct — the exact pair from Phase 1's performance requirement H2P1. Gutters carry the ordinary big storm; when the monster storm (or a handful of leaves) defeats them, the overflow path takes over." },
      { text: "Gutters must handle any storm; overflow is for blockages only", correct: false,
        feedback: "No gutter is sized for 'any storm' — that's the H2P1 philosophy from Phase 1: design for 5% AEP, then control where the 1% AEP excess goes." },
      { text: "Whatever size matches the fascia", correct: false,
        feedback: "Looks are free; capacity is calculated — Table 7.4.3d lists each locality's 5-minute rainfall intensity, and the gutter/downpipe tables convert that plus catchment area into a size." }
    ],
    explanation:
      "Table 7.4.3d is the same rainfall-intensity table that H2D2 referenced back in Phase 1 — the whole water story is one system. Sizing: look up your locality's intensity, divide the roof into catchments per downpipe, read the gutter profile and downpipe size from Tables 7.4.3a–c. Gutters to the 5% AEP storm; the overflow measures (next question) to the 1% AEP storm.",
    source: {
      clause: "7.4.3", clauseTitle: "Selection of guttering", page: 173,
      quote:
"(1) The size of guttering must—\n" +
"(a) for eaves gutters, be in accordance with Table 7.4.3a, Table 7.4.3b and Table 7.4.3c; and\n" +
"(b) be suitable to remove rainwater falling at the appropriate 5 minute duration rainfall intensity listed in Table 7.4.3d as follows—\n" +
"(i) for eaves gutters — 5% annual exceedance probability; and\n" +
"(ii) for eaves gutter overflow measures — 1% annual exceedance probability."
    }
  },

  /* ---------- 7.4.5 downpipes (number) ---------- */
  {
    id: "downpipe-spacing",
    media: { kind: "svg", src: "assets/svg/q-downpipe.svg",
             alt: "One downpipe serving a length of gutter",
             caption: "One downpipe per length of gutter." },
    type: "number",
    topic: "Gutters & downpipes",
    question: "Downpipes drain the gutters, and each one can only serve so much gutter before the far end backs up. Set the maximum length of gutter a single downpipe may serve.",
    slider: { min: 0, max: 24, step: 3, unit: "m", start: 0, target: 12,
      hints: {
        "0":  "A gutter with no downpipe is a long thin bathtub. Every run needs an exit.",
        "3":  "That would put a downpipe every few metres — neat, expensive, and four times stricter than the code.",
        "6":  "Still tighter than required. The code allows double this.",
        "9":  "Close — one notch more.",
        "15": "Past the limit: by the time water travels that far along a gutter's gentle fall, the gutter is brim-full mid-run.",
        "18": "Half as much again as allowed — the middle of that run overflows in a decent storm.",
        "21": "Nearly double the limit.",
        "24": "Double the limit — guaranteed waterfall at the midpoint."
      }
    },
    explanation:
      "12 m of gutter maximum per downpipe — that's what keeps fall and capacity workable along the run. Downpipes also sit as close as possible to valley gutters (valleys concentrate two roof planes into one stream) and must match the gutter system per Tables 7.4.3a–c. The commentary calls insufficient, badly placed downpipes the most frequent cause of roof drainage failure.",
    source: {
      clause: "7.4.5", clauseTitle: "Downpipes — size and installation", page: 179,
      quote:
"Downpipes must—\n" +
"(a) not serve more than 12 m of gutter length for each downpipe; and\n" +
"(b) be located as close as possible to valley gutters; and\n" +
"(c) be selected in accordance with the appropriate eaves gutter section as shown in Table 7.4.3a, Table 7.4.3b and Table 7.4.3c."
    }
  },

  /* ---------- 7.4.6 overflow ---------- */
  {
    id: "gutter-overflow-design",
    media: { kind: "svg", src: "assets/svg/q-back-gap-options.svg",
             alt: "Three cut-away sections of a gutter hung behind a fascia: A sealed tight with no gap, B with a small gap, C with a clear gap held open by a spacer with the gutter back set below the fascia top",
             caption: "Three ways to hang the gutter behind the fascia — which lets a storm overflow spill OUTWARD?" },
    figure: { src: "assets/photos/ncc-fig-7-4-6a.png",
             alt: "NCC Figure 7.4.6a",
             caption: "A front-face slotted gutter as a continuous overflow measure. Source: ABCB Housing Provisions Standard 2025, Figure 7.4.6a." },
    type: "quiz",
    topic: "Gutters & downpipes",
    question: "Design secret of this whole Part: gutters are MEANT to overflow — the code just dictates which way. One deemed-to-satisfy 'continuous overflow measure' is installing the gutter with…",
    choices: [
      { text: "A permanent 10 mm gap between the gutter back and the fascia, the gutter back set below the fascia top", correct: true,
        feedback: "Correct — counterintuitive and brilliant. The deliberate back gap means when the gutter brims (storm, leaves, tennis ball), water spills OUTSIDE the building line, not over the back into the eaves and ceiling." },
      { text: "Sealing the gutter watertight against the fascia", correct: false,
        feedback: "That's the classic DIY mistake: a sealed high back turns the fascia into a dam wall, and the overflow's only exit is inward — into the roof space. The code wants the spill path OUT." },
      { text: "A taller gutter that simply can't overflow", correct: false,
        feedback: "Phase 1's lesson again: everything overflows eventually. The design job is choosing the failure direction — slots in the gutter face, or that humble 10 mm back gap." }
    ],
    explanation:
      "Acceptable overflow measures: a front-face slotted gutter (≥1200 mm² of slots per metre, slots ≥25 mm below the fascia top) for 0.5 L/s/m of capacity, or the controlled back gap (permanent 10 mm spacers at each bracket, gutter back ≥10 mm below the fascia top). 7.4.7 adds per-downpipe devices like rainheads. The roof's whole water story ends as it began in Phase 1: the rare storm is allowed to win, but only outward.",
    source: {
      clause: "7.4.6", clauseTitle: "Acceptable continuous overflow measure", page: 179,
      quote:
"(1) For a front face slotted gutter with— (a) a minimum slot opening area of 1200 mm2 per metre of gutter; and (b) the lower edge of the slots installed a minimum of 25 mm below the top of the fascia, the acceptable overflow capacity must be 0.5 L/s/m, constructed in accordance with Figure 7.4.6a.\n" +
"(2) For a controlled back gap with— (a) a permanent minimum 10 mm spacer installed between the gutter back and the fascia; and (b) one spacer per bracket, with the spacer not more than 50 mm wide; and (c) the back of the gutter installed a minimum of 10 mm below the top of the fascia ..."
    }
  },

  /* ---------- 7.5.2-7.5.4 weatherboards ---------- */
  {
    id: "weatherboards",
    media: { kind: "photo", src: "assets/photos/photo-weatherboard.jpg",
             alt: "Close-up of a timber weatherboard (clapboard) wall: horizontal boards each lapping over the top of the board below",
             caption: "Timber weatherboards — each board laps over the one below. How big must that lap be?",
             credit: { text: "Daniel Case, CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Stained_wooden_clapboard_siding.jpg" } },
    figure: { src: "assets/photos/ncc-fig-7-5-2a.png",
             alt: "NCC Figure 7.5.2a",
             caption: "Splayed weatherboard fixing and lap. Source: ABCB Housing Provisions Standard 2025, Figure 7.5.2a." },
    type: "quiz",
    topic: "Wall cladding",
    question: "Splayed timber [[weatherboard|weatherboards]] weatherproof a wall the same way tiles roof a roof: each board laps over the one below. For hardwood or treated pine boards, the minimum lap is…",
    choices: [
      { text: "30 mm (Western Red Cedar gets away with 20 mm, Baltic pine 25 mm)", correct: true,
        feedback: "Correct — and the species differences are about movement: timbers that swell and cup more need more lap in reserve so a dry summer never opens a gap to daylight." },
      { text: "5 mm — just enough to shed", correct: false,
        feedback: "Boards shrink across their width with every dry season; a 5 mm lap opens into a gap by February. 30 mm keeps the wall closed through the timber's whole moisture cycle." },
      { text: "Boards butt edge-to-edge with sealant", correct: false,
        feedback: "Butt-jointed timber + sun + rain = open seams. The lap IS the weatherproofing — and vertically-fixed profiled boards need vapour-permeable sarking behind them as backup." }
    ],
    explanation:
      "7.5.2: splayed weatherboards lap ≥30 mm (hardwood, cypress, treated pine), ≥20 mm (Western Red Cedar), ≥25 mm (Baltic pine); profiled boards fix tongue-up, and vertical or diagonal boards get vapour-permeable sarking (AS 4200.1) behind them. Fibre-cement boards and sheets (7.5.3–7.5.4) follow their own fixing tables by wind class; eaves linings per 7.5.5; parapets capped per 7.5.8.",
    source: {
      clause: "7.5.2", clauseTitle: "Timber wall cladding", page: 183,
      quote:
"(1) Timber wall cladding must be installed in accordance with (2), (3), (4) and (5).\n" +
"(2) Splayed timber weatherboards must be fixed in accordance with Figure 7.5.2a and Figure 7.5.2b and with a lap not less than—\n" +
"(a) 30 mm for hardwood, Cypress and treated pine; and\n" +
"(b) 20 mm for Western Red Cedar; and\n" +
"(c) 25 mm for Baltic Pine.\n" +
"(3) Profiled timber boards must be— ... (b) with tongue and groove profile, fixed with tongue edge up, where they are fixed in a horizontal or diagonal direction; and (c) where fixed in a vertical or diagonal direction, provided with a vapour permeable sarking complying with AS 4200.1 ..."
    }
  },

  /* ---------- 7.5.6 opening flashings ---------- */
  {
    id: "opening-flashings",
    type: "quiz",
    topic: "Wall cladding",
    media: { kind: "photo", src: "assets/photos/own-panel-window.jpg",
             alt: "A window installed in lightweight panel wall cladding, with fixing washers visible around it",
             caption: "A window in panel cladding — every edge of this hole needs managing." },
    question: "Every window in clad walls (like the one pictured) is a hole punched through the weatherproof layer. Flashings around openings must extend past the reveals on each side by at least…",
    choices: [
      { text: "110 mm — and be attached to both the window and the wall framing", correct: true,
        feedback: "Correct. Water tracking sideways along a head flashing must be carried well clear of the opening's corners — the leakiest pixels of any wall — before it's released back onto the cladding face." },
      { text: "Flush with the reveal is fine", correct: false,
        feedback: "Flush means water leaving the flashing's end lands exactly on the unprotected corner joint. 110 mm of extension carries it past the danger zone." },
      { text: "Flashings are only needed on the bottom of openings", correct: false,
        feedback: "Bottom, top AND sides — with one exemption echoing the masonry rules: the head flashing may be omitted where the eaves overhang is generous relative to the height of cladding above the opening." }
    ],
    explanation:
      "7.5.6: openings in cladding exposed to weather get AS/NZS 2904 flashings to bottom, tops and sides, extending ≥110 mm beyond the reveals where practicable, attached to window and framing. The head-flashing exemption (eave width ≥3× the cladding height above the opening) is the same sheltered-by-the-roof logic as masonry's 5.7.4. Below it all, 7.5.7's ground clearance — next question.",
    source: {
      clause: "7.5.6", clauseTitle: "Flashings to wall openings", page: 191,
      quote:
"Openings in external wall cladding exposed to the weather must be flashed with materials complying with AS/NZS 2904 and in accordance with the following:\n" +
"(a) Flashings must be provided to bottom, tops and sides of openings, except as permitted by (d), and must be installed so that the flashing—\n" +
"(i) extends not less than 110 mm beyond the reveals on each side of the opening where practicable; and\n" +
"(ii) is attached to the window and wall framing; ...\n" +
"(Figure note: Flashing to the top of an opening may be omitted if A is not less than 3 x B.)"
    }
  },

  /* ---------- 7.5.7 cladding clearance (number) ---------- */
  {
    id: "cladding-clearance",
    media: { kind: "svg", src: "assets/svg/q-cladding-clearance.svg",
             alt: "Wall cladding stopping above the ground",
             caption: "Cladding stopping above the ground." },
    type: "number",
    topic: "Wall cladding",
    question: "Third time's the pattern: like the slab edge (Phase 2) and the DPC (Phase 3), wall cladding must stop short of the dirt. Over ordinary garden soil, set the minimum gap between the cladding's bottom edge and the ground.",
    slider: { min: 0, max: 300, step: 50, unit: "mm", start: 0, target: 150,
      hints: {
        "0":   "Cladding touching soil wicks moisture like a straw and hides termite highways. Daylight under the wall is the rule.",
        "50":  "50 mm only works above paving that slopes away — the same concession as the slab edge and the DPC. Soil needs more.",
        "100": "100 mm is the low-rainfall / sandy well-drained concession. Ordinary soil: one notch more.",
        "200": "Past the minimum — the code's number is lower.",
        "250": "Well past it.",
        "300": "Double the requirement."
      }
    },
    explanation:
      "150 mm over soil, 100 mm in low-rainfall or sandy well-drained areas, 50 mm above paving that slopes away — by now you could have written this clause yourself: it's the identical ladder from 3.3.3 (slab) and 5.7.4 (DPC). One extra: on suspended floors, cladding must run DOWN past the bearer by ≥50 mm, so wind-driven rain can't get up under the floor.",
    source: {
      clause: "7.5.7", clauseTitle: "Clearance between cladding and ground", page: 192,
      quote:
"(1) The minimum clearance from the bottom of the wall cladding to the adjoining finished ground level must be—\n" +
"(a) 100 mm in low rainfall intensity areas or sandy, well-drained areas; or\n" +
"(b) 50 mm above impermeable (paved or concreted) areas that slope away from the building in accordance with 3.3.3(a); or\n" +
"(c) 150 mm in any other case.\n" +
"(2) Wall cladding must extend a minimum of 50 mm below the bearer or lowest horizontal part of the suspended floor framing."
    }
  },

  /* ---------- finale: roof inspection (defect) ---------- */
  {
    id: "roof-inspection",
    type: "defect",
    topic: "Roof inspection",
    media: { kind: "svg", src: "assets/svg/defect-roof.svg",
             alt: "Oblique drawing of two metal sheet-roof planes meeting at a central valley, with labelled ridge, fascia, gutter, a pipe with apron flashing, a downpipe at the valley foot, and a cut-away of the gutter back-gap — five spots to inspect" },
    question: "Up the ladder for the roof walk. Inspect the five marked spots: three breach what you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 4, y: 70, w: 30, h: 27, defect: true,  label: "Sheets stop flush with the fascia",
        feedback: "Defect. The eaves cut-away shows the sheet ending flush at the fascia — its edge never reaches out over the gutter, so rainwater curls back and runs down the fascia instead of dripping into the gutter. Sheets must overhang the fascia by at least 50 mm. (7.2.8)" },
      { x: 21, y: 34, w: 12, h: 8, defect: true,  label: "Lead apron flashing on a zincalume roof",
        feedback: "Defect. The dull-grey apron flashing at the chimney base is lead, dressed over the bright zincalume (aluminium/zinc-coated) sheet — banned: rain washing over lead poisons the coating downstream (and lead is banned outright on drinking-water roofs). (7.2.2, 7.2.7(f))" },
      { x: 36, y: 70, w: 30, h: 27, defect: true,  label: "Screws driven through the valleys",
        feedback: "Defect. The fixing detail shows the screws driven through the corrugation VALLEYS (the low troughs) — permanent holes exactly where all the water runs. Pierced fixing must go through the CRESTS (the high ribs), or use concealed fasteners. (7.2.5)" },
      { x: 77, y: 54, w: 8, h: 14, defect: false, label: "Downpipe at the valley",
        feedback: "That one's fine. The downpipe sits at the foot of the valley, where the two roof planes' water is concentrated into one stream — exactly where the code wants it, and the run it serves is under 12 m. (7.4.5)" },
      { x: 67, y: 70, w: 30, h: 27, defect: false, label: "Gutter set with a back gap",
        feedback: "That one's fine (see the cut-away). The gutter back sits 10 mm below and clear of the fascia on spacers — a deliberate continuous overflow measure, so storm excess spills outward. (7.4.6)" }
    ],
    explanation:
      "The roof's three commandments, all broken once here: water must LEAVE (overhang into the gutter), metals must AGREE (no lead over zincalume), and holes belong on the high ground (crest fixing only). The two compliant details are the quiet good habits — downpipes at valleys, gutters that overflow outward by design.",
    source: {
      clause: "7.2.2, 7.2.5, 7.2.8 & 7.4.6", clauseTitle: "Compatibility / Fixing / Water discharge / Overflow", page: 153,
      quote:
"7.2.2(2)(a) no lead materials can be used upstream from aluminium/zinc coated materials ...\n" +
"7.2.5(a) [Metal sheet roofing must] be either fixed through the roofing (crest fastening) or have concealed fasteners ...\n" +
"7.2.8 ... sheets must overhang the fascia, or end batten where there is no fascia, by not less than 50 mm.\n" +
"7.4.6(2) For a controlled back gap with— (a) a permanent minimum 10 mm spacer installed between the gutter back and the fascia ..."
    }
  }

  ]
};
