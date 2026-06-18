/* ============================================================
   PHASE 5 — WINDOWS & GLAZING
   Content from: ABCB Housing Provisions Standard 2025, Section 8
   plus the NCC 2025 Volume Two layer (H1D8, H2D7).
   Editing guide: docs/CONTENT-GUIDE.md · Ledger: docs/COVERAGE.md
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["glazing"] = {
  id: "glazing",
  title: "Windows & glazing",
  intro:
    "The house has walls and a roof — now it gets its eyes. Glazing rules come in two flavours: " +
    "keeping the WEATHER out (windows built and installed to standard, glass thick enough for the wind), " +
    "and keeping PEOPLE safe — because ordinary glass breaks into daggers, and people walk into glass " +
    "they can't see. Almost every rule in this short, sharp Section exists because someone once went " +
    "through a glass door.",
  learnList: [
    "Who makes windows compliant (AS 2047) and how they're installed",
    "Glass thickness versus wind and panel size",
    "Where Grade A safety glass is mandatory: doors, side panels, low panels, wet areas",
    "Making glass visible, and proving it's safety glass"
  ],

  questions: [

  /* ---------- V2 H1D8 rule book ---------- */
  {
    id: "rulebook-glazing",
    type: "quiz",
    topic: "The rule book",
    question: "Volume Two's [[ncc clause numbering|H1D8]] handles windows differently from everything you've built so far: the window itself arrives as a manufactured PRODUCT. Who is responsible for the window assembly complying?",
    choices: [
      { text: "The manufacturer — windows in external walls must be made to AS 2047; the site's job is installing them per Part 8.2", correct: true,
        feedback: "Correct. AS 2047 covers the engineering of the assembly (frame, glass, seals, wind rating); the builder's deemed-to-satisfy duties are choosing the right rating and installing it without wrecking it." },
      { text: "The glazier on site engineers each window from scratch", correct: false,
        feedback: "Custom glazing exists (via AS 1288 design), but the standard path for external windows and glazed doors is a tested AS 2047 product with the site handling selection and installation." },
      { text: "Nobody — glass is decorative", correct: false,
        feedback: "Windows are structure (they carry wind), weatherproofing (H2D7 sends their weatherproofing to AS 2047 too) AND a safety system — three chapters of rules for one hole in the wall." }
    ],
    explanation:
      "H1D8: glazed assemblies in external walls — windows, framed sliding/swinging/French/bi-fold doors, louvres, window walls — satisfy the structural requirement when designed and built to AS 2047 and installed per AS 2047 plus Housing Provisions Part 8.2. Glass selection itself runs through AS 1288 or HP Parts 8.3–8.4. H2D7 closes the loop: weatherproofing of glazing is satisfied via the same AS 2047 route. The pattern from framing repeats: big topics live in referenced standards, the NCC wires them in.",
    source: {
      doc: "v2",
      clause: "H1D8(1)", clauseTitle: "Glazing", page: 107,
      quote:
"(1) Performance Requirement H1P1 is satisfied for glazing and windows if they are—\n" +
"(a) designed and constructed in accordance with AS 2047 for glazed assemblies in an external wall including—\n" +
"(i) windows, other than those listed in (2); and\n" +
"(ii) sliding and swinging glazed doors with a frame, including French and bi-fold doors with a frame; and\n" +
"(iii) adjustable louvres; and\n" +
"(iv) window walls with one-piece framing; and\n" +
"(b) installed such that they comply with— (i) AS 2047; and (ii) Part 8.2 of the ABCB Housing Provisions ..."
    }
  },

  /* ---------- 8.2.2 installation ---------- */
  {
    id: "window-install",
    media: { kind: "svg", src: "assets/svg/q-window-install.svg",
             alt: "A window with a gap above its head below the loadbearing wall",
             caption: "The gap above the window head." },
    type: "quiz",
    topic: "Installation",
    question: "A perfectly good window can be ruined by its installation: the wall above deflects, timber shrinks and frames settle. So the Housing Provisions ([[ncc clause numbering|clause 8.2.2]]) require a gap above the top of the window assembly, below the loadbearing framing or masonry. What's the rule for that gap?",
    choices: [
      { text: "At least a 10 mm gap, so the building's loads can never come to rest on the window", correct: true,
        feedback: "Correct. A minimum 10 mm clear over the head (more over wide openings). If the structure comes to rest ON the window, the frame racks, glass cracks and seals open. The gap is the window's safety margin." },
      { text: "No gap — pack it tight so the window helps carry the wall above", correct: false,
        feedback: "Backwards. The rule's words are blunt: 'Structural building loads must not be transferred to the window assembly.' A window is a precision appliance, not a lintel — a ≥10 mm gap keeps wall loads off it." },
      { text: "A gap, but only for ventilation around the frame", correct: false,
        feedback: "The gap gets sealed and covered — it's not an air path. It's a STRUCTURAL disconnection: a minimum 10 mm clear above the head so loads never transfer to the window." }
    ],
    explanation:
      "8.2.2: no structural loads into the window; ≥10 mm clear over the head (more over wide openings, for settlement); packers — if used — along sides and bottom only, fixed so the assembly stays straight, and kept clear of flashing materials. How this fits the LINTEL rule from Phase 3: the lintel spans the opening and carries the masonry ABOVE it, and the window sits BELOW the lintel. The 10 mm gap is between the TOP of the window frame and that lintel (or loadbearing wall) — so the lintel does the carrying, and the gap guarantees its deflection (plus timber shrinkage and settlement) never comes to rest on the window. A window is a precision appliance set into a moving structure; installation is the art of connecting them without coupling them.",
    source: {
      clause: "8.2.2", clauseTitle: "Installation of windows", page: 197,
      quote:
"Windows must be installed in accordance with the following:\n" +
"(a) Structural building loads must not be transferred to the window assembly.\n" +
"(b) A minimum 10 mm gap must be provided between the top of the window assembly and any loadbearing framing or masonry wall element.\n" +
"(c) The requirements of (b) may be increased where necessary to allow for frame settlement over wide openings.\n" +
"(d) Packing, if provided between each window assembly and the frame, must be— (i) located along each side and bottom; and (ii) fixed to ensure the sides and bottom of the window assembly remain straight; and (iii) clear of any flashing material."
    }
  },

  /* ---------- 8.3.2 / 8.3.3 glass sizes ---------- */
  {
    id: "glass-sizes",
    type: "quiz",
    topic: "Glass strength",
    question: "Ordinary 3 mm [[annealed glass|annealed]] window glass: how big is a single pane allowed to be?",
    choices: [
      { text: "0.85 m² maximum — bigger panes need thicker glass, sized from Tables 8.3.3a–c by wind class", correct: true,
        feedback: "Correct. A pane is a diaphragm: double its area and the wind bends it far more than twice as much. The 8.3.3 tables trade thickness against size and shape for wind classes N1–N3." },
      { text: "Unlimited, if the frame is strong", correct: false,
        feedback: "The frame holds the edges; the middle of the pane still bows under gusts. Area, aspect ratio and wind class set the thickness — 3 mm tops out at 0.85 m²." },
      { text: "1 m × 1 m exactly", correct: false,
        feedback: "0.85 m², and it's not just area — the tables also weigh aspect ratio and slenderness, because a long thin pane behaves differently from a square one of equal area." }
    ],
    explanation:
      "Part 8.3: glazing on the building perimeter, supported on all sides, sizes per Tables 8.3.3a–c by wind class (N1/N2/N3); 3 mm monolithic annealed capped at 0.85 m²; and anywhere humans might hit it, Part 8.4 takes over — which is the rest of this phase.",
    source: {
      clause: "8.3.2 & 8.3.3", clauseTitle: "Glazing sizes and installation", page: 198,
      quote:
"8.3.2 — Glazing used in buildings must comply with the following:\n" +
"(a) Glazing used in the perimeter of buildings and supported on all sides must comply with the appropriate provisions listed in 8.3.3.\n" +
"(b) Glazing used in areas where the potential for human impact could occur must comply with the appropriate provisions listed in Part 8.4.\n" +
"(c) For 3 mm monolithic annealed glass, the maximum area must not be more than 0.85 m2.\n\n" +
"8.3.3 — Fully framed (supported on all sides) monolithic annealed glass installed in the perimeter of buildings must comply with— (a) if the building is located in an area with a wind class not exceeding N1 — Table 8.3.3a; ..."
    }
  },

  /* ---------- 8.4.2 doors (+8.4.8 marking) ---------- */
  {
    id: "safety-doors",
    figure: { src: "assets/photos/ncc-fig-8-4-2.png",
             alt: "NCC Figure 8.4.2",
             caption: "Safety glazing zones around doors and side panels. Source: ABCB Housing Provisions Standard 2025, Figure 8.4.2." },
    type: "quiz",
    topic: "Human impact",
    question: "The headline rule of the whole Section: glass in DOORS. People push doors, lean on them, and walk into them — so glass in a door must be…",
    choices: [
      { text: "Grade A safety glazing — toughened or laminated, sized per Table 8.4.2", correct: true,
        feedback: "Correct. Toughened glass breaks into blunt crumbs; laminated cracks but hangs together on its interlayer. Either way, nobody gets the daggers that annealed glass makes. Tiny decorative annealed panels survive only with strict size limits." },
      { text: "Any glass over 4 mm thick", correct: false,
        feedback: "Thicker annealed glass breaks into BIGGER daggers. The fix isn't thickness, it's the breaking pattern — Grade A safety glass by type, with the table setting size by thickness." },
      { text: "Glass is banned in doors", correct: false,
        feedback: "Glass doors are everywhere — they're just all safety glass. Even frameless shower doors: 10 mm toughened minimum." }
    ],
    explanation:
      "8.4.2: door glass is Grade A safety glazing per Table 8.4.2; unframed doors need ≥10 mm toughened; leadlight pieces ≤0.05 m² and narrow annealed feature panels (≤0.1 m² at 125 mm wide) are the only annealed survivors. And 8.4.8 makes it provable: every piece of safety glass carries a permanent etch or tamper-proof label stating its standard, maker, grade, thickness and type — the inspector reads the corner of the glass, not the invoice.",
    source: {
      clause: "8.4.2 (+8.4.8)", clauseTitle: "Doors, side panels and other framed glazed panels / Identification of safety glass", page: 200,
      quote:
"Glass in doors must be Grade A safety glazing material in accordance with Table 8.4.2 and Figure 8.4.2, except that—\n" +
"(a) unframed doors, other than those incorporated in shower screens or bath enclosures, must be glazed with toughened safety glass with a minimum nominal thickness of 10 mm or laminated toughened safety glass with a minimum total thickness of 10 mm; and\n" +
"(b) individual pieces of monolithic annealed glass incorporated in leadlights may be used, to a maximum area of 0.05 m2 with a minimum nominal thickness of 3 mm; ...\n\n" +
"8.4.8 — Safety glass must be marked in the form of either permanent etching or a label that cannot be reused once removed. The permanent etching or label must state ... (i) The Standard to which the safety glass has been tested. (ii) Registered name of the manufacturer or supplier. (iii) Grade of the safety glass. (iv) Nominal thickness ... (v) The type of safety glass."
    }
  },

  /* ---------- 8.4.3 / 8.4.4 side & full-height panels ---------- */
  {
    id: "side-panels",
    media: { kind: "svg", src: "assets/svg/q-side-panels.svg",
             alt: "A glass door with a glass side panel beside it",
             caption: "Glass beside a door." },
    type: "quiz",
    topic: "Human impact",
    question: "Beside the front door is a tall glass side panel, its edge just 200 mm from the doorway. Down the hall, a full-height glass panel could easily be mistaken for an open walkway. What do both need?",
    choices: [
      { text: "Grade A safety glass — near-door panels and anything mistakable for an opening are treated like doors", correct: true,
        feedback: "Correct. People aiming for a doorway miss by centimetres (side panels within 300 mm cop the impact), and people walk straight at glass that reads as an opening. Both are door-grade hazards." },
      { text: "Ordinary glass — only the door itself is the hazard", correct: false,
        feedback: "Emergency departments disagree: walking into the FIXED glass beside or near a door is the classic injury. Within 300 mm of a doorway, or mistakable for an opening: safety glass." },
      { text: "Wired glass for visibility", correct: false,
        feedback: "Wired glass is a fire-rating product, not Grade A impact glass. The answers here are toughened or laminated — plus the visibility tricks of 8.4.4(2): bars, motifs, or a chair rail." }
    ],
    explanation:
      "8.4.3: framed glass in side panels with a sight line within 300 mm of the doorway — Grade A (small high panels excepted). 8.4.4: any panel mistakable for an unobstructed opening — Grade A, UNLESS it can't be mistaken: under 500 mm wide, sill above 500 mm, glass made apparent by transoms/motifs/opaque pattern, or a solid chair rail. The code's two-track logic: make glass safe to hit, or make it impossible to not see.",
    source: {
      clause: "8.4.3 & 8.4.4", clauseTitle: "Door side panels / Full height framed glazed panels", page: 202,
      quote:
"8.4.3(1) All framed glass (except leadlight panels) in side panels with their nearest vertical sight line less than 300 mm from the nearest edge of the doorway opening must be Grade A safety glazing material in accordance with Table 8.4.2 and Figure 8.4.2 ...\n\n" +
"8.4.4(1) A glazed panel located in a building so that it is capable of being mistaken for an unobstructed opening must be glazed with Grade A safety glazing material in accordance with Table 8.4.2.\n" +
"(2) Glazed panels are not considered an unobstructed opening where any of the following apply: (a) The clear opening width is not more than 500 mm. (b) The lowest sight line of the opening is not less than 500 mm above the highest abutting finished floor level. (c) The glass is made apparent by means of transoms, colonial bars ... permanent motifs or other decorative treatment ... (d) A chair rail or handrail not less than 40 mm thick, or the like, is provided ..."
    }
  },

  /* ---------- 8.4.5 low panels ---------- */
  {
    id: "low-panels",
    media: { kind: "svg", src: "assets/svg/q-low-panels.svg",
             alt: "A floor-to-ceiling window whose glass runs down close to the floor, with the lowest glass edge (sight line) marked and the trigger height above the floor shown as a question",
             caption: "Floor-to-ceiling glass — how low before it needs safety treatment?" },
    figure: { src: "assets/photos/ncc-fig-8-4-5.png",
             alt: "NCC Figure 8.4.5",
             caption: "Low glazed panels: the 500 mm sight-line trigger. Source: ABCB Housing Provisions Standard 2025, Figure 8.4.5." },
    type: "quiz",
    topic: "Human impact",
    question: "A floor-to-ceiling lounge window: its glass starts just above the skirting. The trigger height — below which framed glazing needs special treatment — is a [[sight line]] less than…",
    choices: [
      { text: "500 mm above the floor: then it's Grade A safety glass, or ≥5 mm annealed capped at 1.2 m²", correct: true,
        feedback: "Correct. Below knee height, glass takes toddlers, trips, vacuum cleaners and furniture — impacts a normal window never sees. 500 mm is the line between 'window' and 'wall you can fall through'." },
      { text: "2 m — anything reachable", correct: false,
        feedback: "2 m is the WET-AREA trigger (next question), where slippery floors raise the stakes. For ordinary rooms, the low-glass line is 500 mm." },
      { text: "There's no height rule for fixed windows", correct: false,
        feedback: "There is, and it's why modern floor-level glazing is all toughened: sight line under 500 mm means safety glass or thick small-area annealed." }
    ],
    explanation:
      "8.4.5: framed glazing with its lowest sight line under 500 mm from the floor must be Grade A safety glass, or monolithic annealed of at least 5 mm and no more than 1.2 m². ('Sight line' = the lowest visible edge of glass.) The progression across Part 8.4: doors (always), beside doors (300 mm), looks-like-a-doorway (visibility), low glass (500 mm), wet rooms (2 m) — each rule mapping one way humans meet glass.",
    source: {
      clause: "8.4.5", clauseTitle: "Glazed panels, other than doors or side panels, on the perimeter of rooms", page: 203,
      quote:
"All framed glazing where the lowest sight line of the glazing panel is less than 500 mm from the highest abutting finished floor level (see Figure 8.4.5) must be—\n" +
"(a) Grade A safety glazing material in accordance with Table 8.4.2; or\n" +
"(b) monolithic annealed glass not less than 5 mm nominal thickness provided that the area of the glazing panel is not more than 1.2 m2."
    }
  },

  /* ---------- 8.4.6 wet areas ---------- */
  {
    id: "wet-area-glass",
    media: { kind: "svg", src: "assets/svg/q-wet-area-glass.svg",
             alt: "A shower screen in a bathroom",
             caption: "Glass in a wet, slippery bathroom." },
    type: "quiz",
    topic: "Human impact",
    question: "Bathrooms: wet, slippery, and full of glass. ALL glazing in bathrooms, ensuites and kitchens with a sight line lower than 2 m above the floor (or shower base) must be safety glass. Why is this trigger so much higher than the 500 mm rule elsewhere?",
    choices: [
      { text: "People slip and fall INTO glass in wet rooms — the impact can land at any height", correct: true,
        feedback: "Correct. A slip throws a whole adult sideways; shower screens and bathroom windows take body-weight impacts at shoulder height. So the safety zone climbs to 2 m, and edge-exposed shower panels must be ≥6 mm toughened." },
      { text: "Steam weakens ordinary glass", correct: false,
        feedback: "Glass shrugs off steam. The hazard is humans plus water plus hard floors — falls, not vapour, drive the 2 m rule." },
      { text: "It's about privacy, not safety", correct: false,
        feedback: "Frosting is taste; toughening is law. Everything glazed below 2 m in wet rooms — screens, doors, windows, even cabinet doors — is Grade A, with mirrors excepted only when a solid vanity (≥760 mm high, fixed) keeps bodies away." }
    ],
    explanation:
      "8.4.6: in kitchens, bathrooms, ensuites and spa rooms, all glazing with a sight line below 2.0 m (measured from floor, bath bottom or shower base) is Grade A safety glass — and frameless/edge-exposed panels are toughened ≥6 mm per Table 8.4.6. Annealed survives only as mirrors protected by a fixed vanity or bench (≥760 mm high). The shower screen is the single most safety-regulated pane of glass in the house.",
    source: {
      clause: "8.4.6", clauseTitle: "Kitchen, bathroom, ensuite, spa room and splash-back glazing", page: 204,
      quote:
"(1) All glazing in kitchens, bathrooms, ensuites, spa rooms or the like, including shower doors, shower screens, bath enclosures, and associated windows and doors (including cabinet doors), where the lowest sight line is less than 2.0 m above the highest abutting finished level of the floor, bottom of the bath, or shower base, must—\n" +
"(a) for framed panels, be glazed with Grade A safety glazing material in accordance with Table 8.4.2; or\n" +
"(b) for panels or doors with any edge exposed, be toughened safety glass in accordance with Table 8.4.6 with a minimum nominal thickness of 6 mm.\n" +
"(2) Monolithic annealed glass may be used for— (a) mirrors, provided a fixed vanity or bench with a height of not less than 760 mm ..."
    }
  },

  /* ---------- 8.4.7 visibility ---------- */
  {
    id: "glass-visibility",
    media: { kind: "svg", src: "assets/svg/q-glass-band.svg",
             alt: "A large glass panel with an opaque marking band across it",
             caption: "Making glass visible with a band." },
    type: "quiz",
    topic: "Human impact",
    question: "Last line of defence: stopping the collision entirely. Where clear glazing could be mistaken for a doorway and isn't otherwise made apparent, it must be marked with…",
    choices: [
      { text: "An opaque band at least 20 mm tall, positioned between 700 mm and 1.2 m above the floor", correct: true,
        feedback: "Correct — eye-line for a walking adult, and within a child's view too. That's the frosted stripe across every glass shop front and office partition: not decor, a mandated collision-avoidance system." },
      { text: "A red warning sticker in one corner", correct: false,
        feedback: "A corner dot vanishes against a busy background. The band runs across the glass at approach height — its upper edge no lower than 700 mm, lower edge no higher than 1.2 m." },
      { text: "Nothing — safety glass makes marking unnecessary", correct: false,
        feedback: "Safety glass makes the impact survivable; the band makes it not happen. The code wants both: panes under 1 m tall or 500 mm wide, or already visually broken up, are the only exemptions." }
    ],
    explanation:
      "8.4.7: where glazing could read as an opening and isn't made apparent under 8.4.4(2), an opaque band ≥20 mm high, upper edge ≥700 mm and lower edge ≤1.2 m above floor. Exemptions: glazing ≤1 m high or ≤500 mm wide. Part 8.4's full architecture: make it survivable (safety glass), make it visible (bands, rails, motifs), make it provable (8.4.8's etched corner stamp).",
    source: {
      clause: "8.4.7", clauseTitle: "Visibility of glazing", page: 205,
      quote:
"(1) If the presence of glazing in a door, side panel or panel capable of being mistaken for a doorway or opening is not made apparent in accordance with 8.4.4(2)(c), the glass must be marked to make it readily visible in accordance with (2).\n" +
"(2) Marking must be in the form of an opaque band not less than 20 mm in height located so that— (a) the upper edge is not less than 700 mm above the floor; and (b) the lower edge is not more than 1.2 m above the floor.\n" +
"(3) A band or marking is not required where any of the following applies: (a) The height of the glazing is not more than 1 m in any part. (b) The width of the glazing panel is not more than 500 mm in any part. ..."
    }
  },

  /* ---------- finale: glazing inspection (defect) ---------- */
  {
    id: "glazing-inspection",
    type: "defect",
    topic: "Glazing inspection",
    media: { kind: "svg", src: "assets/svg/defect-glazing.svg",
             alt: "Drawing of a hallway with a glass door, side panel, full-height glass panel and a window, some details compliant and some not" },
    question: "Walk the hallway with the glazing schedule in hand. Inspect the five marked spots: three breach what you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 6,  y: 22, w: 17, h: 56, defect: true,  label: "Full-height clear panel, no marking",
        feedback: "Defect. This floor-to-ceiling clear panel sits right beside the walkway with no band, rail or motif — it reads as an open doorway. It needs Grade A glass AND an opaque band between 700 mm and 1.2 m (or a chair rail/motifs). (8.4.4, 8.4.7)" },
      { x: 39, y: 30, w: 15, h: 48, defect: true,  label: "Door glass with no safety stamp",
        feedback: "Defect. The glass in this door carries no etched safety mark or permanent label — there's no evidence it's Grade A. Door glass must be safety glazing, and the proof must be ON the pane. (8.4.2, 8.4.8)" },
      { x: 56, y: 34, w: 12, h: 44, defect: true,  label: "Annealed side panel hard against the doorway",
        feedback: "Defect. The schedule says this side panel is 4 mm annealed, and its glass starts 150 mm from the doorway edge and runs to the floor — well inside the 300 mm zone. Grade A safety glazing required. (8.4.3)" },
      { x: 74, y: 26, w: 11, h: 30, badge: "below", defect: false, label: "High window, ordinary glass",
        feedback: "That one's fine. This window's sill is 1.4 m above the floor — outside every human-impact zone — and its 3 mm annealed pane is under 0.85 m². Ordinary glass is allowed to be ordinary here. (8.3.2, 8.4.5)" },
      { x: 88, y: 48, w: 10, h: 26, defect: false, label: "Etched safety stamp on the low panel",
        feedback: "That one's fine. Its sight line is under 500 mm, so 8.4.5 makes it safety glass — and it carries the etched corner stamp (standard, maker, grade, thickness, type) that 8.4.8 demands. It needs NO visibility band: bands and motifs (8.4.7) are only for glass that could be mistaken for a doorway or opening, which a low panel beside a stair is not. (8.4.5, 8.4.7, 8.4.8)" }
    ],
    explanation:
      "Three ways glazing fails people, all in one hallway: glass you can't see (mark it), glass you can't prove (stamp it), and glass where bodies land (toughen it). The compliant details show the system working — ordinary glass is fine where humans can't reach it, and the etched corner stamp turns compliance into something you can read with a torch.",
    source: {
      clause: "8.4.2, 8.4.3, 8.4.7 & 8.4.8", clauseTitle: "Human impact safety / Visibility / Identification", page: 200,
      quote:
"8.4.2 — Glass in doors must be Grade A safety glazing material in accordance with Table 8.4.2 ...\n" +
"8.4.3(1) — All framed glass ... in side panels with their nearest vertical sight line less than 300 mm from the nearest edge of the doorway opening must be Grade A safety glazing material ...\n" +
"8.4.7(2) — Marking must be in the form of an opaque band not less than 20 mm in height ... upper edge ... not less than 700 mm above the floor ... lower edge ... not more than 1.2 m above the floor.\n" +
"8.4.8 — Safety glass must be marked in the form of either permanent etching or a label that cannot be reused once removed ..."
    }
  }

  ]
};
