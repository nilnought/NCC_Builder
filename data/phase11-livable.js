/* ============================================================
   PHASE 11 — LIVABLE & ACCESSIBLE HOUSING
   Content from: NCC 2025 Volume Two, Part H8 (Livable housing
   design) — H8O1, H8F1, H8P1, H8D2 — which calls up the ABCB
   Standard for Livable Housing Design. New mandatory content in
   recent NCC editions.
   NOTE: specific dimensions live in the ABCB Standard for Livable
   Housing Design (a separate document). Questions here stay at the
   verifiable H8P1 outcome level and point to that Standard for the
   exact figures, rather than quoting numbers we can't verify here.
   Editing guide: docs/CONTENT-GUIDE.md · Ledger: docs/COVERAGE.md
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["livable"] = {
  id: "livable",
  title: "Livable & accessible housing",
  intro:
    "Last phase, and one of the newest in the code. A house can be perfectly built and still be a trap for " +
    "anyone with a pram, a walking frame, a wheelchair or a bad knee. Volume Two's Part H8 now requires every " +
    "new home to be designed so it's easy to enter, easy to move around, and cheap to adapt later as the " +
    "occupants age or their needs change — without ripping the place apart. The detailed dimensions live in the " +
    "ABCB Standard for Livable Housing Design; this phase teaches what the code actually demands.",
  learnList: [
    "What 'livable housing' means and which homes it applies to",
    "A step-free path and entrance into the dwelling",
    "Internal doors and corridors that allow unimpeded movement",
    "An accessible toilet and shower, and walls ready for future grabrails"
  ],

  questions: [

  /* ---------- V2 H8 rule book ---------- */
  {
    id: "rulebook-livable",
    type: "quiz",
    topic: "The rule book",
    question: "Volume Two's [[ncc clause numbering|H8P1]] (Livable housing design) is a recent mandatory addition. What's its goal, and which homes does it apply to?",
    choices: [
      { text: "Make every new Class 1a house easy to enter, navigate and adapt — for occupants and visitors, including those with mobility needs", correct: true,
        feedback: "Correct. It applies to Class 1a dwellings (houses and townhouses) and bakes in basic accessibility from day one, when it's nearly free — rather than expensive retrofits later. The detailed figures are in the ABCB Standard for Livable Housing Design." },
      { text: "It only applies to aged-care facilities", correct: false,
        feedback: "Aged-care is a commercial class (Volume One). H8 applies to ordinary new HOUSES — Class 1a — so every new home has baseline accessibility." },
      { text: "It's an optional bonus standard", correct: false,
        feedback: "It's mandatory for Class 1a dwellings via H8P1/H8D2. The point is that designing-in access from the start costs almost nothing, while retrofitting a finished house costs a fortune." }
    ],
    explanation:
      "Part H8: the objective (H8O1) is housing that meets the community's needs including older people and those with a mobility-related disability; the functional statement (H8F1) is a home easy to enter, navigate, and cost-effectively adapt. H8P1 makes it a requirement for Class 1a buildings, satisfied (H8D2) by complying with the ABCB Standard for Livable Housing Design. It's the same 'cheaper now than later' logic as termite barriers and slab heights — design it in once.",
    source: {
      doc: "v2",
      clause: "H8O1, H8F1 & H8P1", clauseTitle: "Livable housing design", page: 156,
      quote:
"H8O1 Objective — The Objective of this Part is to ensure that housing is designed to meet the needs of the community, including older people and those with a mobility-related disability. (Applications: H8O1 only applies to a Class 1a building.)\n" +
"H8F1 — A dwelling should be designed such that it is— (a) easy to enter; and (b) easy to navigate in and around; and (c) capable of easy and cost effective adaptation; and (d) responsive to the changing needs of occupants.\n" +
"H8D2 — (1) A Class 1a dwelling must comply with the ABCB Standard for Livable Housing Design."
    }
  },

  /* ---------- H8P1(a) step-free path ---------- */
  {
    id: "step-free-path",
    type: "quiz",
    topic: "Getting in",
    media: { kind: "svg", src: "assets/svg/q-stepfree-path.svg",
             alt: "A path from the street and garage to the front door, asking whether it can have steps",
             caption: "From the street (or garage) to the front door — what kind of path?" },
    question: "H8P1 requires a particular kind of path to a dwelling entrance, from the street entry, the garage, or the resident's car space. What kind?",
    choices: [
      { text: "A continuous, step-free path", correct: true,
        feedback: "Correct. 'Step-free' means no steps anywhere along it — a pram, wheelchair or walking frame can roll all the way from the car or gate to the door. Even one step breaks the chain. (Ramps from Phase 8, at gentle gradients, do the level changes.)" },
      { text: "A path with no more than three steps", correct: false,
        feedback: "Even one step defeats a wheelchair or a walker. The requirement is a CONTINUOUS step-free path — level the whole way, using gentle ramps for any change in height." },
      { text: "Any paved path", correct: false,
        feedback: "Paving isn't the point — being step-free is. The path from the pedestrian entry, garage or resident car space to a dwelling entrance must be continuous and step-free." }
    ],
    explanation:
      "H8P1(a): a continuous and step-free path to a dwelling entrance door, from the pedestrian entry at the boundary, OR an appurtenant garage/carport, OR the resident's exclusive car space. There's a narrow exemption where site conditions make it genuinely impossible. This is the lead domino of accessibility — if you can't get to the door, nothing inside matters. The detailed widths and gradients are in the Livable Housing Design Standard.",
    source: {
      doc: "v2",
      clause: "H8P1(a)", clauseTitle: "Livable housing design", page: 157,
      quote:
"A Class 1a building must be provided with—\n" +
"(a) a continuous and step-free path to a dwelling entrance door from either— (i) the pedestrian entry at the allotment boundary; or (ii) an appurtenant Class 10a garage or carport; or (iii) a car parking space provided for the exclusive use of the occupants of the dwelling ..."
    }
  },

  /* ---------- H8P1(b) step-free entrance ---------- */
  {
    id: "step-free-entrance",
    media: { kind: "svg", src: "assets/svg/q-stepfree-entrance.svg",
             alt: "A level step-free entrance door",
             caption: "The entrance itself." },
    type: "quiz",
    topic: "Getting in",
    question: "The step-free path reaches the house. What does H8P1 then require of the entrance itself?",
    choices: [
      { text: "At least one level, step-free entrance door into the dwelling", correct: true,
        feedback: "Correct. Not every door — but at least ONE entrance must be level and step-free, so the accessible path actually leads inside. The traditional raised threshold and front step would block exactly the people the rule protects." },
      { text: "Every external door must be step-free", correct: false,
        feedback: "Only at least ONE entrance door needs to be level and step-free — enough to get everyone in with dignity. The others can be conventional." },
      { text: "A stairlift at the front step", correct: false,
        feedback: "The rule designs the step OUT, rather than bolting machinery on: at least one level, step-free entrance door served by the accessible path." }
    ],
    explanation:
      "H8P1(b): at least one level and step-free entrance door into the dwelling, served by the step-free path from (a). Together they guarantee a dignified, roll-in entry for someone with a pram, wheelchair or frame. It connects to Phase 7's threshold/drainage details — a step-free door still has to keep water out, which is why threshold drainage and the slab-height concessions matter.",
    source: {
      doc: "v2",
      clause: "H8P1(b)", clauseTitle: "Livable housing design", page: 157,
      quote:
"A Class 1a building must be provided with— ...\n" +
"(b) at least one level and step-free entrance door into the dwelling from the access path required by (a) ..."
    }
  },

  /* ---------- H8P1(c) internal movement ---------- */
  {
    id: "internal-movement",
    type: "quiz",
    topic: "Moving around",
    media: { kind: "svg", src: "assets/svg/q-doorway-width.svg",
             alt: "A wheelchair approaching a doorway, asking about clear width for unimpeded movement",
             caption: "Internal doors and corridors on the entry level — wide enough for whom?" },
    question: "Once inside, H8P1 requires internal doors and corridors (on the ground or entrance level) to do what?",
    choices: [
      { text: "Facilitate unimpeded movement between spaces", correct: true,
        feedback: "Correct. Doors and halls on the entry level must be wide enough for someone using a wheelchair or walker to move between rooms without getting stuck — the exact clear widths are set in the Livable Housing Design Standard." },
      { text: "Be exactly 600 mm wide", correct: false,
        feedback: "600 mm barely fits a person walking — a wheelchair needs far more. The rule requires unimpeded movement; the Standard specifies generous clear widths for doors and corridors." },
      { text: "Only the bedroom doors matter", correct: false,
        feedback: "It's about the path through the home on the entry level — doors AND corridors that let someone move unimpeded between spaces, not just one room." }
    ],
    explanation:
      "H8P1(c): internal doors and corridors on the ground or entrance level must facilitate unimpeded movement between spaces. The ABCB Standard for Livable Housing Design sets the specific clear door widths and corridor widths that achieve this. The goal is that the accessible journey continues past the front door — into the living areas, the accessible toilet and the shower that the next questions cover.",
    source: {
      doc: "v2",
      clause: "H8P1(c)", clauseTitle: "Livable housing design", page: 157,
      quote:
"A Class 1a building must be provided with— ...\n" +
"(c) internal doors and corridors on the ground or entrance level which facilitate unimpeded movement between spaces ..."
    }
  },

  /* ---------- H8P1(d) accessible toilet ---------- */
  {
    id: "accessible-toilet",
    media: { kind: "svg", src: "assets/svg/q-accessible-toilet.svg",
             alt: "A two-level house asking which level the accessible toilet is on",
             caption: "Which level for the accessible toilet?" },
    type: "quiz",
    topic: "Bathroom",
    question: "H8P1 requires an accessible sanitary compartment (toilet). Two things define it — what are they?",
    choices: [
      { text: "It facilitates independent access and use, and it's on the ground or entry level", correct: true,
        feedback: "Correct. A toilet up a flight of stairs is useless to someone who can't climb them, so it must be on the entry level — and laid out so a person can get to and use it independently, without help." },
      { text: "It must have gold taps", correct: false,
        feedback: "Fittings aren't the point — function is: independent access and use, located on the ground or entry level so it's reachable without stairs." },
      { text: "It can be on any floor", correct: false,
        feedback: "It must be on the GROUND or ENTRY level specifically — an upstairs-only toilet fails anyone who can't manage the stairs. And it must allow independent access and use." }
    ],
    explanation:
      "H8P1(d): a sanitary compartment that facilitates independent access and use, located on the ground or entry level. 'Independent' means a person can use it without assistance — enough space to approach and transfer. Combined with the step-free path, entrance and internal movement, it means a visitor or resident with limited mobility can actually get in and use the toilet. Dimensions: the Livable Housing Design Standard.",
    source: {
      doc: "v2",
      clause: "H8P1(d)", clauseTitle: "Livable housing design", page: 157,
      quote:
"A Class 1a building must be provided with— ...\n" +
"(d) a sanitary compartment that— (i) facilitates independent access and use; and (ii) is located on the ground or entry level ..."
    }
  },

  /* ---------- H8P1(e)+(f) shower + grabrail reinforcement ---------- */
  {
    id: "grabrail-reinforcement",
    type: "quiz",
    topic: "Bathroom",
    media: { kind: "svg", src: "assets/svg/q-grabrail-wall.svg",
             alt: "A bathroom wall with reinforcement noggings behind the lining, ready for future grabrails",
             caption: "Behind the bathroom lining — what's built in for later?" },
    question: "H8P1 requires the bathroom shower (and toilet, and bath) walls to be built so that grabrails can be ADDED later. Why design for grabrails now rather than just fitting them when needed?",
    choices: [
      { text: "So the walls already have the backing to take grabrails, without ripping off linings later", correct: true,
        feedback: "Correct. A grabrail must be bolted into solid backing (noggings or sheeting), not just plasterboard. Building that backing in now means a future grabrail is a quick fix — not a demolition job tearing out tiles and linings." },
      { text: "Grabrails must be installed in every new home immediately", correct: false,
        feedback: "Not installed now — the walls just have to be READY for them. The rule is about future-proofing: backing built in so grabrails can be added cheaply if and when they're needed." },
      { text: "It's only about appearance", correct: false,
        feedback: "It's structural future-proofing: the shower, toilet and bath walls are constructed to take future grabrails in a way that minimises removing existing wall linings. Cheap now, hugely expensive to retrofit." }
    ],
    explanation:
      "H8P1(e)+(f): a shower that facilitates independent access and use (typically step-free/hobless — note the link to Phase 7's level-threshold shower), AND the walls of the toilet, the shower and any built-in bath constructed so future grabrails can be installed in a way that minimises removing existing wall linings. It's the 'easy and cost-effective adaptation' idea (H8F1) made concrete: put the backing in the wall now, so a grabrail is a 10-minute job later instead of a bathroom rebuild.",
    source: {
      doc: "v2",
      clause: "H8P1(e)–(f)", clauseTitle: "Livable housing design", page: 157,
      quote:
"A Class 1a building must be provided with— ...\n" +
"(e) a shower that facilitates independent access and use; and\n" +
"(f) the walls of the sanitary compartment referred to in (d), the shower referred to in (e) and a bath (where installed, other than a freestanding bath) constructed so as to facilitate future installation of grabrails, or the like, in a way that minimises the removal of existing wall linings."
    }
  },

  /* ---------- finale: livable defect ---------- */
  {
    id: "livable-inspection",
    type: "defect",
    topic: "Livable housing inspection",
    media: { kind: "svg", src: "assets/svg/defect-livable.svg",
             alt: "Cutaway of a house entry and bathroom showing the accessible path, entrance, doorways and bathroom, some details compliant and some not",
             caption: "" },
    question: "Final inspection of the home's livability. Inspect the five marked spots: three breach what you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 10, y: 72, w: 11, h: 14, badge: "below", defect: true,  label: "A step in the path from the garage",
        feedback: "Defect. There's a single step where the path meets the entry — that one step breaks the continuous step-free path a wheelchair or walker needs. Level it or ramp it. (H8P1(a))" },
      { x: 40, y: 48, w: 10, h: 26, defect: true,  label: "Narrow internal doorway",
        feedback: "Defect. This internal door on the entry level is too narrow for unimpeded movement — a wheelchair can't pass. Entry-level doors and corridors must allow unimpeded movement (widths per the Livable Housing Design Standard). (H8P1(c))" },
      { x: 70, y: 30, w: 14, h: 16, defect: true,  label: "Only toilet is upstairs",
        feedback: "Defect. The home's only toilet is on the upper level — unreachable for anyone who can't climb stairs. An accessible sanitary compartment must be on the ground or entry level. (H8P1(d))" },
      { x: 22, y: 64, w: 14, h: 12, badge: "below", defect: false, label: "Step-free entrance door",
        feedback: "That one's fine. At least one entrance is level and step-free, served by the accessible path — a dignified roll-in entry. (H8P1(b))" },
      { x: 84, y: 56, w: 13, h: 18, badge: "below", defect: false, label: "Shower walls reinforced for grabrails",
        feedback: "That one's fine. The shower walls have backing built in for future grabrails, so they can be added later without tearing out the tiling — and the shower is step-free. (H8P1(e), (f))" }
    ],
    explanation:
      "Livable housing is a chain: get to the door (step-free path), get in (level entrance), move around (wide doors), and use the bathroom (accessible toilet and shower, walls ready for grabrails). One broken link — a single step, a narrow door, an upstairs-only toilet — locks someone out of part of their own home. Designed in now, it costs almost nothing; retrofitted later, it costs a fortune.",
    source: {
      doc: "v2",
      clause: "H8P1(a)–(f)", clauseTitle: "Livable housing design", page: 157,
      quote:
"A Class 1a building must be provided with— (a) a continuous and step-free path to a dwelling entrance door ...; (b) at least one level and step-free entrance door ...; (c) internal doors and corridors on the ground or entrance level which facilitate unimpeded movement between spaces; and (d) a sanitary compartment that— (i) facilitates independent access and use; and (ii) is located on the ground or entry level; and (e) a shower that facilitates independent access and use; and (f) the walls ... constructed so as to facilitate future installation of grabrails ..."
    }
  }

  ]
};
