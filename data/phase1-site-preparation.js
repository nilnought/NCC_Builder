/* ============================================================
   PHASE 1 — SITE PREPARATION
   Content from: ABCB Housing Provisions Standard 2025, Section 3
   (Part 3.2 Earthworks, Part 3.3 Drainage, Part 3.4 Termite risk
   management) plus the NCC 2025 Volume Two layer. Verified
   against NCC 2025.
   ------------------------------------------------------------
   HOW TO EDIT / ADD QUESTIONS — see docs/CONTENT-GUIDE.md.
   Quick reference of the three question types:

   type:"quiz"   multiple choice. `choices` is a list of
                 {text, correct:true|false, feedback}.
   type:"number" slider. Player sets a value, checks it.
                 Needs min/max/step/unit/target (+ hints).
   type:"defect" spot-the-problem picture. `hotspots` are
                 rectangles in % of the image width/height.

   EVERY question must have a `source` block quoting the real
   clause word-for-word, so players never need to go hunting
   through the NCC, and so future editors can re-verify content
   when the NCC is amended. `page` is the printed page number in
   the source PDF.
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["site-prep"] = {
  id: "site-prep",
  title: "Site preparation",
  intro:
    "Before anything is built, the block has to be made ready: a level platform is cut and filled, " +
    "water is given somewhere to go, and termites are locked out. Get this phase wrong and the house " +
    "cracks, floods or gets eaten — years later, when it's expensive to fix. " +
    "You're the site boss. The inspector is coming. Let's make sure everything passes.",
  learnList: [
    "How deep you can cut and how high you can fill without a retaining wall",
    "How to keep rainwater away from the house (falls and slab heights)",
    "What subsoil and stormwater drains must do",
    "When termite protection is required and how it's recorded"
  ],

  questions: [

  /* ---------- Q1: earthworks — site cut depth ---------- */
  {
    id: "site-cut-depth",
    type: "quiz",
    topic: "Earthworks",
    media: { kind: "svg", src: "assets/svg/site-cut.svg",
             alt: "Cross-section of a sloping block with a vertical cut made into the high side, depth marked with a question mark",
             caption: "Cutting a flat platform into a sloping block — with no retaining wall." },
    question: "Your sloping block needs a flat platform. The excavator driver asks how deep the [[cut and fill|site cut]] can go if nobody is building a retaining wall. From [[natural ground level]], an un-retained cut must be no deeper than…",
    choices: [
      { text: "1 m", correct: false,
        feedback: "Deeper than that is allowed — the NCC lets an un-retained cut go further before a retaining wall becomes mandatory." },
      { text: "2 m", correct: true,
        feedback: "Correct. An un-retained cut can be up to 2 m deep, measured from natural ground level — and it must stay inside the block and clear of the zone of influence of footings and boundaries." },
      { text: "3 m", correct: false,
        feedback: "Too deep — soil that high can collapse onto workers or undermine neighbouring property. The limit is lower." }
    ],
    explanation:
      "Un-retained means nothing is holding the soil back except its own slope. The deeper the cut, the more likely the exposed face collapses — onto a worker, or taking the neighbour's fence (or house) with it. Past the limit you must build an engineered retaining wall.",
    source: {
      clause: "3.2.1(1)", clauseTitle: "Un-retained bulk earthworks – site cut and fill", page: 35,
      quote:
"(1) A site cut using an un-retained embankment must be—\n" +
"(a) within the allotment; and\n" +
"(b) not within the zone of influence of any existing structure on the property, or the allotment boundary as defined in Table 3.2.1 and Figure 3.2.1a; and\n" +
"(c) not deeper than 2 m from the natural ground level at any point."
    }
  },

  /* ---------- earthworks — zone of influence at the boundary ---------- */
  {
    id: "cut-near-boundary",
    type: "quiz",
    topic: "Earthworks",
    media: { kind: "svg", src: "assets/svg/cut-boundary.svg",
             alt: "A neighbouring house behind a boundary fence, with a planned site cut nearby and a question mark over the distance between them",
             caption: "The neighbour's place is just over the fence — how close can the cut go?" },
    question: "Depth isn't the only limit on a site cut. Your neighbour's house sits close to the fence. Besides staying inside your own [[allotment]], the un-retained cut must also stay clear of…",
    choices: [
      { text: "The zone of influence — a wedge of load-bearing soil spreading down from the boundary and from any structure's footing", correct: true,
        feedback: "Correct. The cut must not enter the [[zone of influence]], which Figure 3.2.1a draws as a line angled down from the boundary (or from the bottom of a footing) at the same soil slope ratio as Table 3.2.1. Dig inside it and you can undermine the fence — or the neighbour's house." },
      { text: "A flat 1 m setback from the boundary in all cases", correct: false,
        feedback: "There's no fixed setback distance — it depends on the soil and the depth of the cut. A deep cut in weak soil needs much more clearance than 1 m; a shallow cut in rock needs almost none. That's why the rule is a geometric wedge, not a number." },
      { text: "Nothing else — under 2 m deep, you can cut right at the fence line", correct: false,
        feedback: "The 2 m rule and the zone-of-influence rule BOTH apply. Cut a 2 m face right at the fence and the neighbour's soil — and whatever stands on it — can slump into your excavation." }
    ],
    explanation:
      "Soil near a boundary or footing is doing a job: it's carrying the neighbour's fence, paving or house. The 'zone of influence' is the wedge of soil doing that carrying, drawn from the bottom of the footing (or the boundary) downward at the slope ratio your soil can hold (Table 3.2.1 — steep for rock, shallow for clay). Keep the cut outside the wedge and the load path stays intact. The same wedge logic protected the footing in the drain-trench question — it's one of the most reused ideas in earthworks.",
    source: {
      clause: "3.2.1(1) & Figure 3.2.1a", clauseTitle: "Un-retained bulk earthworks – site cut and fill", page: 35,
      quote:
"(1) A site cut using an un-retained embankment must be—\n" +
"(a) within the allotment; and\n" +
"(b) not within the zone of influence of any existing structure on the property, or the allotment boundary as defined in Table 3.2.1 and Figure 3.2.1a; and\n" +
"(c) not deeper than 2 m from the natural ground level at any point.\n\n" +
"Figure 3.2.1a Notes:\n" +
"(1) The angle for line A-A is defined as the maximum embankment slope ratio H:L in Table 3.2.1 and is taken from the bottom of the footing and identifies the area suitable for excavation.\n" +
"(2) Consideration must be given for drainage of surface water, particularly where fill affects an adjoining property."
    }
  },

  /* ---------- Q2: earthworks — fill compaction layers ---------- */
  {
    id: "fill-layers",
    type: "quiz",
    topic: "Earthworks",
    media: { kind: "photo", src: "assets/photos/photo-compactor.jpg",
             alt: "A heavy compactor roller with spiked drum working soil on a construction site",
             caption: "A compactor roller squashing fill down firm, one layer at a time.",
             credit: { text: "Photo: U.S. Air Force, MSgt. Rickie D. Bickle, Wikimedia Commons, public domain",
                       url: "https://commons.wikimedia.org/wiki/File:Seabees_compactor_roller.jpg" } },
    question: "The low side of your block needs to be built up with fill. The roller (pictured) can only squash soil properly to a limited depth, so the fill must be placed and [[compaction|compacted]] in layers no thicker than…",
    choices: [
      { text: "150 mm per layer", correct: true,
        feedback: "Correct. Thin layers, compacted one at a time, is the only way machinery can make fill solid all the way down." },
      { text: "300 mm per layer", correct: false,
        feedback: "Too thick — the roller only compacts the top of a layer that deep. The soil underneath stays loose and settles later." },
      { text: "One single layer, then compact the lot", correct: false,
        feedback: "That's how driveways and slabs end up cracking. Deep fill compacted only from the top stays loose at the bottom." }
    ],
    explanation:
      "Loose fill keeps settling for years. If a slab or footing sits on it, the building sinks unevenly and cracks. That's why fill is built up like a layer cake: place 150 mm, compact it hard, repeat. Fill also can't be higher than 2 m un-retained — same collapse logic as the cut.",
    source: {
      clause: "3.2.1(2)", clauseTitle: "Un-retained bulk earthworks – site cut and fill", page: 35,
      quote:
"(2) Fill, using an un-retained embankment must—\n" +
"(a) be placed within the allotment; and\n" +
"(b) be placed at a gradient which complies with Table 3.2.1 and Figure 3.2.1b; and\n" +
"(c) be placed and mechanically compacted in layers not more than 150 mm; and\n" +
"(d) be not more than 2 m in height from the natural ground level at any point; and\n" +
"(e) where used to support footings or slabs, be placed and compacted in accordance with Part 4.2; and\n" +
"(f) have surface water diverted away from any existing structure on the property or adjoining allotment in accordance with 3.3.3."
    }
  },

  /* ---------- earthworks — embankment slope ratios ---------- */
  {
    id: "embankment-slopes",
    type: "quiz",
    topic: "Earthworks",
    question: "Different soils hold different slopes. Your block is soft clay, and the plan shows the leftover soil being reused as un-retained fill with a gently sloped [[batter]]. What does the NCC's slope table say about that?",
    choices: [
      { text: "Soft clay is 'not suitable' as un-retained fill at any slope", correct: true,
        feedback: "Correct. Soft clay squeezes and slumps under load, so Table 3.2.1 simply rules it out for un-retained fill — use a retaining wall or better material." },
      { text: "It's fine at a 1:2 batter, same as sand", correct: false,
        feedback: "1:2 is the fill batter for sand and firm clay. Soft clay doesn't get a ratio at all — the table marks it 'Not suitable'." },
      { text: "Any soil is fine if the batter is flat enough", correct: false,
        feedback: "Almost — but not soft clay, which creeps and slumps even at gentle slopes. And if a soil type isn't in the table at all, a retaining wall is mandatory." }
    ],
    explanation:
      "The stronger the soil, the steeper it can safely stand: stable rock can be cut nearly vertical (8:1), sand holds 1:2, firm clay 1:1. Soft clay can be CUT at 2:3 but never reused as un-retained fill. If your slope is steeper than the table allows — or your soil isn't in the table — a retaining wall designed under H1D3(2) is required.",
    source: {
      clause: "Table 3.2.1", clauseTitle: "Un-retained embankment slope ratios", page: 35,
      quote:
"Table 3.2.1: Un-retained embankment slope ratios (soil class — site cut / compacted fill, H:L)\n" +
"Stable rock (Class A) — site cut 8:1; compacted fill 3:3\n" +
"Sand (Class A) — site cut 1:2; compacted fill 1:2\n" +
"Firm clay (Class M-E) — site cut 1:1; compacted fill 1:2\n" +
"Soft clay (Class M-E) — site cut 2:3; compacted fill: Not suitable\n\n" +
"Table Notes: ... (2) Retaining walls must be installed in accordance with H1D3(2) where—\n" +
"(a) the embankment slope is steeper than described in this Table; or\n" +
"(b) the soil type is not described in this Table."
    }
  },

  /* ---------- Q3: drainage — surface fall (slider) ---------- */
  {
    id: "surface-fall",
    type: "number",
    topic: "Drainage",
    media: { kind: "svg", src: "assets/svg/surface-fall.svg",
             alt: "Cross-section showing ground next to a house slab falling away over the first metre, drop marked with a question mark",
             caption: "The ground next to the slab must fall away from the house." },
    question: "Set the slope: over the first 1 m out from the building, the finished ground (a normal lawn/soil surface, not in a low-rainfall area) must drop at least how many millimetres so [[surface water]] runs AWAY from the house?",
    slider: { min: 0, max: 100, step: 25, unit: "mm", start: 0, target: 50,
      hints: {
        "0":  "Dead flat ground means every storm leaves a puddle against the slab. The NCC requires a real fall.",
        "25": "25 mm over 1 m is only allowed on reasonably impermeable surfaces (like concrete paving) in low-rainfall areas, or on accessible paths. For ordinary ground the requirement is steeper.",
        "75": "More fall than this never hurts, but it's not the NCC minimum — wind the slider back to the smallest value that complies.",
        "100": "That's a noticeably steep apron! The NCC minimum is gentler — find the smallest complying value."
      }
    },
    explanation:
      "Water is the number one enemy of a house. A 50 mm drop over the first metre (a 1-in-20 slope) is enough to keep stormwater moving away from the slab instead of soaking down beside it. The gentler 25 mm fall is only allowed for hard, sealed surfaces in low-rainfall areas, and for accessible paths and ramps.",
    source: {
      clause: "3.3.3(a)", clauseTitle: "Surface water drainage", page: 39,
      quote:
"Surface water must be diverted away from a Class 1 building as follows:\n" +
"(a) Slab-on-ground — finished ground level adjacent to a building: the external finished surface surrounding the slab must be drained to move surface water away from the building and graded to give a slope of not less than (see Figure 3.3.3a)—\n" +
"  (i) 25 mm over the first 1 m from the building—\n" +
"    (A) in low rainfall intensity areas for surfaces that are reasonably impermeable (such as concrete or clay paving); or\n" +
"    (B) for any reasonably impermeable surface that forms part of an access path or ramp provided for the purposes of Clauses 1.1(2) or (4)(c) of the ABCB Standard for Livable Housing Design; or\n" +
"  (ii) 50 mm over the first 1 m from the building in any other case."
    }
  },

  /* ---------- Q4: drainage — slab height (slider) ---------- */
  {
    id: "slab-height",
    type: "number",
    topic: "Drainage",
    media: { kind: "svg", src: "assets/svg/slab-height.svg",
             alt: "Cross-section of a concrete slab edge with the height above the finished ground marked with a question mark",
             caption: "How high must the slab finish above the ground around it?" },
    question: "Same house, next check. The land around the [[slab-on-ground|slab]] is ordinary garden soil (not a low-rainfall or sandy, well-drained area). Set the minimum height of the slab top above the [[finished ground level]].",
    slider: { min: 0, max: 300, step: 50, unit: "mm", start: 0, target: 150,
      hints: {
        "0":   "Ground level with the floor? Water (and termites) would walk straight in. The slab must stand clear of the ground.",
        "50":  "50 mm is only allowed above impermeable paving that slopes away from the building. Over ordinary soil you need more.",
        "100": "100 mm is only allowed in low rainfall intensity areas or sandy, well-drained areas. This block is neither — go higher.",
        "200": "Higher than needed. Find the NCC minimum for ordinary ground.",
        "250": "Way above the minimum. Wind it back.",
        "300": "That's a big step up into the house! The minimum is half of this."
      }
    },
    explanation:
      "The slab edge is the house's waterline. 150 mm of freeboard above ordinary ground keeps ponding storm water, splash and soil moisture below floor level. The NCC trims it to 100 mm where rain is light or soil drains freely, and 50 mm above paving that already sheds water away. This height also leaves a visible band for spotting termite mud tunnels.",
    source: {
      clause: "3.3.3(b)", clauseTitle: "Surface water drainage", page: 39,
      quote:
"(b) Slab-on-ground — finished slab heights: the height of the slab-on-ground above external finished surfaces must be not less than (see Figure 3.3.3a)—\n" +
"  (i) 100 mm above the finished ground level in low rainfall intensity areas or sandy, well-drained areas; or\n" +
"  (ii) 50 mm above impermeable (paved or concrete) areas that slope away from the building in accordance with (a); or\n" +
"  (iii) 150 mm in any other case."
    }
  },

  /* ---------- Q5: drainage — slab above paving ---------- */
  {
    id: "slab-above-paving",
    type: "quiz",
    topic: "Drainage",
    media: { kind: "svg", src: "assets/svg/slab-paving.svg",
             alt: "Cross-section of a slab edge next to concrete paving that slopes away from the building, gap marked with a question mark",
             caption: "Concrete paving laid against the slab, sloping away from the house." },
    question: "The owner wants a concrete path right up against the house, and the path will slope away from the building as required. How high must the slab top sit above this paving?",
    choices: [
      { text: "At least 50 mm", correct: true,
        feedback: "Correct. Because sealed paving that slopes away already sheds water, the slab only needs 50 mm of clearance above it." },
      { text: "At least 150 mm", correct: false,
        feedback: "150 mm is the rule for ordinary ground. Impermeable paving that drains away from the house earns a concession — the answer is smaller." },
      { text: "Level is fine — the path slopes away anyway", correct: false,
        feedback: "Never level. Heavy rain sheets across paving faster than it can drain; without a step up, water rides straight over the slab edge into the house." }
    ],
    explanation:
      "The NCC scales the required slab height to the risk: 150 mm over soil, 100 mm where rainfall is low or soil drains well, and 50 mm above sealed paving that slopes away. Spot the pattern — the better the surface sheds water, the less freeboard you need.",
    source: {
      clause: "3.3.3(b)", clauseTitle: "Surface water drainage", page: 39,
      quote:
"(b) Slab-on-ground — finished slab heights: the height of the slab-on-ground above external finished surfaces must be not less than (see Figure 3.3.3a)—\n" +
"  (i) 100 mm above the finished ground level in low rainfall intensity areas or sandy, well-drained areas; or\n" +
"  (ii) 50 mm above impermeable (paved or concrete) areas that slope away from the building in accordance with (a); or\n" +
"  (iii) 150 mm in any other case."
    }
  },

  /* ---------- Q6: drainage — under suspended floors ---------- */
  {
    id: "suspended-floor-ground",
    type: "quiz",
    topic: "Drainage",
    media: { kind: "svg", src: "assets/svg/suspended-floor.svg",
             alt: "Cross-section of a house on stumps over flat ground, with wind-blown rain reaching under the floor and a question mark underneath",
             caption: "A house on stumps — rain can and does get under there." },
    question: "This house has a [[suspended floor]] on stumps instead of a slab. What does the NCC require for the ground UNDERNEATH the house?",
    choices: [
      { text: "It must be paved with concrete", correct: false,
        feedback: "No paving required — the NCC only cares about where water sits. Plain graded soil is fine." },
      { text: "It must be graded higher than the surrounding ground so water can't pond under there", correct: true,
        feedback: "Correct. The subfloor must be the high ground, so any water that gets under the house drains straight back out." },
      { text: "Nothing — rain can't reach under a house", correct: false,
        feedback: "It can and does: wind-blown rain, garden runoff and rising damp all end up under there. A permanently damp subfloor rots bearers and joists from below." }
    ],
    explanation:
      "A damp subfloor is a slow disaster: timber rots, mould grows, and the moisture feeds straight into the floor above. The fix is dirt-cheap during site prep — grade the ground under the building slightly higher than the yard around it, so water always has a way out and can never pond.",
    source: {
      clause: "3.3.3(c)", clauseTitle: "Surface water drainage", page: 39,
      quote:
"(c) The ground beneath suspended floors must be graded so that the area beneath the building is above the adjacent external finished ground level and surface water is prevented from ponding under the building (see Figure 3.3.3b)."
    }
  },

  /* ---------- drainage — trenching next to a footing ---------- */
  {
    id: "trench-near-footing",
    type: "quiz",
    topic: "Drainage",
    media: { kind: "svg", src: "assets/svg/trench-footing.svg",
             alt: "Cross-section of a wall and footing with a planned drain trench beside it and a question mark over the digging area",
             caption: "A sewer trench is planned right beside the existing footing." },
    question: "A plumber needs to trench for a sewer pipe close to the house's existing [[footing]]. How close and how deep can the trench safely go?",
    choices: [
      { text: "It must stay inside the area defined as 'safe for excavation' — clear of the wedge of soil spreading down from the bottom of the footing", correct: true,
        feedback: "Correct. The footing's load spreads down and out through a wedge of soil (the [[zone of influence]]). Dig into that wedge and the footing can drop — so the trench must stay in the safe area shown in Figure 3.3.2." },
      { text: "Anywhere, as long as the trench is less than 2 m deep", correct: false,
        feedback: "The 2 m limit is for bulk site cuts in open ground. Right beside a footing the controlling rule is different: stay out of the soil wedge that carries the footing's load." },
      { text: "Trenches can never be dug near footings", correct: false,
        feedback: "They can — sewer and stormwater pipes have to reach the house somehow. The NCC just defines WHERE beside the footing it's safe to dig." }
    ],
    explanation:
      "A footing doesn't just press straight down — its load spreads through a widening wedge of soil below it. Cut a trench into that wedge and the soil can shear away, letting the footing (and the wall on it) settle and crack. The safe area is worked out using the same soil slope ratios as Table 3.2.1, taken from the bottom of the footing. Digging deeper than the safe area needs protection designed by appropriately qualified people.",
    source: {
      clause: "3.3.2(d)", clauseTitle: "Drainage requirements", page: 38,
      quote:
"Drainage systems must be installed as follows: ...\n" +
"(d) Excavation for drains adjacent to existing footings must be within the area described in Figure 3.3.2 as being safe for excavation.\n\n" +
"Figure 3.3.2 Notes:\n" +
"(1) Any excavation below the area defined as being safe for excavation will need additional protection measures to be determined by appropriately qualified persons.\n" +
"(2) Slope ratio H:L is determined using Table 3.2.1."
    }
  },

  /* ---------- Q7: drainage — subsoil drains ---------- */
  {
    id: "subsoil-drain-fall",
    type: "quiz",
    topic: "Drainage",
    media: { kind: "photo", src: "assets/photos/photo-subsoil-drain.jpg",
             alt: "A trench on a building site with two black drainage pipes laid in a bed of blue-grey gravel",
             caption: "A real subsoil drain being built: slotted pipes in a gravel-filled trench collect water moving through the soil.",
             credit: { text: "Photo: Scooter133, Wikimedia Commons, public domain",
                       url: "https://commons.wikimedia.org/wiki/File:FrenchDrain-02.jpg" } },
    question: "Your block has water seeping through the soil toward the house, so a [[subsoil drain]] (pictured) is going in. For the water inside the pipe to actually flow somewhere, the drain must be laid with a uniform fall of at least…",
    choices: [
      { text: "1:300 (about 3 mm per metre)", correct: true,
        feedback: "Correct. A gentle but UNIFORM fall of 1:300 keeps the water moving. Uniform matters — a single flat or backwards dip becomes a silt trap that blocks the drain." },
      { text: "1:20 (50 mm per metre)", correct: false,
        feedback: "That's the fall for the GROUND SURFACE next to the house (50 mm over 1 m). A buried pipe only needs a tiny fraction of that." },
      { text: "No fall needed — water finds its own way", correct: false,
        feedback: "In a flat pipe, water sits still and the silt it carries settles and blocks the pipe. Every drain needs fall." }
    ],
    explanation:
      "Subsoil drains deal with water you can't see — moving through the ground itself. The pipe must fall at least 1:300 along its whole length and discharge into a silt pit, where soil particles settle out and can be cleaned away. The pit's outlet must be at least 50 mm below its inlet so settled silt never backs up into the drain.",
    source: {
      clause: "3.3.4", clauseTitle: "Subsoil drainage", page: 40,
      quote:
"Where a subsoil drainage system is installed to divert subsurface water away from the area beneath a building, the subsoil drain must—\n" +
"(a) be graded with a uniform fall of not less than 1:300; and\n" +
"(b) discharge into an external silt pit or sump with—\n" +
"  (i) the level of discharge from the silt pit or sump into an impervious drainage line not less than 50 mm below the invert level of the inlet (see Figure 3.3.4); and\n" +
"  (ii) provision for cleaning and maintenance."
    }
  },

  /* ---------- Q8: drainage — stormwater overflow ---------- */
  {
    id: "stormwater-overflow",
    type: "quiz",
    topic: "Drainage",
    question: "A once-in-a-decade storm hits and the [[stormwater]] pipes can't cope. By design, where is the excess water allowed to go?",
    choices: [
      { text: "Anywhere outside — as long as it cannot flow back into the building", correct: true,
        feedback: "Correct. Pipes are allowed to be overwhelmed; the design rule is that overflow must escape OUTSIDE and never be pushed back into the house." },
      { text: "It must never overflow — pipes must handle any possible storm", correct: false,
        feedback: "No pipe system is sized for every conceivable storm; that would be absurdly expensive. The NCC instead controls WHERE the overflow goes." },
      { text: "Into the sewer system", correct: false,
        feedback: "Stormwater and sewage are strictly separate systems in Australia. Cross-connecting them is illegal — it floods treatment plants and pushes sewage into yards." }
    ],
    explanation:
      "This is a classic NCC way of thinking: don't demand the impossible, control the failure mode. Gutters, downpipes and drains will all eventually meet a storm too big for them — the design just has to guarantee the spill happens outside the building, not inside it. Where the system discharges (street kerb, soak well, tank) must satisfy the local [[appropriate authority]].",
    source: {
      clause: "3.3.5(a)–(b)", clauseTitle: "Stormwater drainage", page: 42,
      quote:
"Where a stormwater drainage system is installed, it must comply with the following:\n" +
"(a) The position and manner of discharge of the stormwater drainage system must be to the satisfaction of the appropriate authority.\n" +
"(b) The stormwater drainage system must be designed so that any overflow during heavy rain periods is prevented from flowing back into the building."
    }
  },

  /* ---------- Volume Two: swimming pool drainage (new DTS in NCC 2025) ---------- */
  {
    id: "pool-drainage",
    type: "quiz",
    topic: "Drainage",
    question: "The owners are adding a swimming pool. One day it will need to be pumped out — thousands of litres of chlorinated water. You just learned stormwater must NEVER be connected to the sewer… so where does the NCC send the pool's pumped discharge?",
    choices: [
      { text: "Into the sanitary drainage system (the sewer), in accordance with AS/NZS 3500.2", correct: true,
        feedback: "Correct — and yes, it's the exact opposite of the stormwater rule. Pool water is treated water full of chlorine and salts; sending it to the stormwater system would flush those chemicals straight into creeks. The sewer leads to a treatment plant, which is exactly where it belongs." },
      { text: "Into the stormwater system — it's just water", correct: false,
        feedback: "It's chemically treated water. Stormwater pipes discharge untreated into waterways — a pool's worth of chlorinated water down the street drain is a fish kill. The system split runs on what the water CONTAINS: rainwater out, treated/dirty water to the sewer." },
      { text: "Onto the lawn — it'll soak away", correct: false,
        feedback: "Thousands of litres in one go pond, flow next door and kill the garden — H2P4 requires draining 'in a manner which will not cause illness to people or affect other property'. The deemed-to-satisfy route is the sanitary drainage system." }
    ],
    explanation:
      "A neat lesson in WHY the two pipe systems exist: stormwater (clean rain, straight to waterways) versus sanitary drainage (anything treated or dirty, off to the treatment plant). Rainwater into the sewer overloads treatment plants — illegal. Pool chemicals into the stormwater — pollution. NCC 2025 newly gives this a Deemed-to-Satisfy answer: H2D2(2) sends the pool's pumped discharge to the sanitary system per AS/NZS 3500.2. (In NCC 2022, performance requirement H2P4 existed but had no pre-approved recipe at all.)",
    source: {
      doc: "v2",
      clause: "H2P4 & H2D2(2)", clauseTitle: "Drainage from swimming pools / Drainage", page: 113,
      quote:
"H2P4 — Drainage from swimming pools:\n" +
"A swimming pool must have adequate means of draining the pool in a manner which will not—\n" +
"(a) cause illness to people; or\n" +
"(b) affect other property.\n\n" +
"H2D2(2) — Performance Requirement H2P4 is satisfied for swimming pool drainage if the swimming pool's pumped discharge is discharged to the sanitary drainage system in accordance with AS/NZS 3500.2.\n\n" +
"(Explanatory Information: Where a Network Utility Operator does not permit swimming pool discharge to the sanitary drainage system, a Performance Solution will be necessary to demonstrate the suitability of the alternative drainage method.)"
    }
  },

  /* ---------- Q9: drainage — pipe cover ---------- */
  {
    id: "pipe-cover",
    type: "quiz",
    topic: "Drainage",
    media: { kind: "svg", src: "assets/svg/pipe-cover.svg",
             alt: "Cross-section of a buried stormwater pipe in a trench under a lawn, with the depth of soil above the pipe marked with a question mark",
             caption: "A 90 mm PVC stormwater pipe buried under the lawn." },
    question: "A standard 90 mm PVC stormwater pipe runs under the lawn to the street. So that a garden fork or foot traffic can't crack it, the pipe needs soil cover on top of at least…",
    choices: [
      { text: "50 mm", correct: false,
        feedback: "50 mm is the allowance under PAVED or CONCRETE areas — the hard surface itself protects the pipe. Bare soil gives no such protection." },
      { text: "100 mm", correct: true,
        feedback: "Correct. Under open soil the pipe needs 100 mm of cover. Under paving it drops to 50 mm, and under a driveway it depends on the surface: 75 mm under reinforced concrete, 100 mm under pavers." },
      { text: "300 mm", correct: false,
        feedback: "Burying it that deep doesn't hurt, but it isn't required — and deeper trenches cost money and can clash with footings. The minimum is shallower." }
    ],
    explanation:
      "Cover is measured from the TOP of the pipe to the finished surface. The logic: the tougher the surface above, the less soil cushioning the pipe needs — 100 mm under garden beds and lawn, 50 mm under paving, and under light vehicle traffic 75 mm (reinforced concrete) or 100 mm (pavers).",
    source: {
      clause: "3.3.5(c)", clauseTitle: "Stormwater drainage", page: 42,
      quote:
"(c) Cover to stormwater drains: the cover to 90 mm Class 6 UPVC stormwater drains installed underground must be not less than—\n" +
"  (i) under soil — 100 mm; or\n" +
"  (ii) under paved or concrete areas — 50 mm; or\n" +
"  (iii) under areas subject to light vehicle traffic—\n" +
"    (A) reinforced concrete — 75 mm; or\n" +
"    (B) paved — 100 mm."
    }
  },

  /* ---------- Volume Two — the two DTS pathways ---------- */
  {
    id: "two-pathways",
    type: "quiz",
    topic: "The rule book",
    question: "Plot twist: your hydraulic consultant ignored the Housing Provisions' drainage rules completely — the whole [[stormwater]] system was designed to the Australian Standard AS/NZS 3500.3 instead. NCC Volume Two's drainage clause, [[ncc clause numbering|H2D2]], settles the argument. Is the house non-compliant?",
    choices: [
      { text: "No — Volume Two accepts either AS/NZS 3500.3 OR Part 3.3 of the Housing Provisions", correct: true,
        feedback: "Correct. H2D2 in Volume Two offers two [[deemed-to-satisfy provisions|Deemed-to-Satisfy]] routes for drainage: the Australian Standard, or the Housing Provisions (which is the simpler route, with some limits). Either one satisfies the code." },
      { text: "Yes — the Housing Provisions rules are mandatory for houses", correct: false,
        feedback: "A common misconception. The Housing Provisions is ONE acceptable pathway, not the only one — Volume Two's clause H2D2 lists the Australian Standard as an equal alternative." },
      { text: "Only if the council grants a special exemption", correct: false,
        feedback: "No exemption needed — both routes are pre-approved by the code itself. That's exactly what 'Deemed-to-Satisfy' means." }
    ],
    explanation:
      "This is how the whole NCC is wired: Volume Two holds the legal requirements and, for each topic, lists the acceptable ways to comply — usually an Australian Standard and/or a Section of the Housing Provisions. The Housing Provisions route also has conditions: for roof drainage it only applies up to a certain rainfall intensity (255 mm/hr for a 5-minute storm), beyond which you're back to the Standard.",
    source: {
      doc: "v2",
      clause: "H2D2", clauseTitle: "Drainage", page: 116,
      quote:
"(1) Performance Requirement H2P1 is satisfied for drainage if it is designed and constructed in accordance with—\n" +
"(a) AS/NZS 3500.3; or\n" +
"(b) provided the stormwater drainage system otherwise complies with (a), Part 3.3 of the ABCB Housing Provisions for drainage of—\n" +
"  (i) roofs in areas subject to 5 minute duration rainfall intensities of not more than 255 mm per hour over an annual exceedance probability of 5% (as per Table 7.4.3d of the ABCB Housing Provisions) where a drainage system is required; and\n" +
"  (ii) sub-soil areas where excessive soil moisture problems may occur; and\n" +
"  (iii) land adjoining and under buildings.\n" +
"(2) Performance Requirement H2P4 is satisfied for swimming pool drainage if the swimming pool's pumped discharge is discharged to the sanitary drainage system in accordance with AS/NZS 3500.2."
    }
  },

  /* ---------- Volume Two — the Performance Requirement behind it all ---------- */
  {
    id: "performance-requirement",
    type: "quiz",
    topic: "The rule book",
    question: "All those drainage numbers exist to satisfy one [[performance requirement]] — the actual law layer. It lives in NCC Volume Two and its clause code is [[ncc clause numbering|H2P1]] (tap the code to see how to read it). For a huge, once-in-100-years storm ([[annual exceedance probability|1% annual exceedance probability]]), what does H2P1 demand?",
    choices: [
      { text: "Surface water from that storm must not enter the building", correct: true,
        feedback: "Correct. The bar moves with the storm: an ordinary big storm (5% AEP) must be carried away without damaging other property; the rare monster storm (1% AEP) is allowed to overwhelm the drains — but it still must not get inside the house." },
      { text: "The drainage pipes must carry the whole storm away", correct: false,
        feedback: "Not required — pipes sized for a 1-in-100-year deluge would be absurd. The Performance Requirement targets the OUTCOME (water stays out of the building), not pipe capacity." },
      { text: "Nothing — storms that rare are 'acts of God'", correct: false,
        feedback: "The NCC explicitly covers them: H2P1(2) says surface water from a 1% AEP storm must not enter the building. That's why slab heights and ground falls give the house freeboard." }
    ],
    explanation:
      "Now you can see the machine from the top. H2P1 decodes as: Volume Two, Section H (houses), Part 2 (damp and weatherproofing), Performance Requirement 1 — and it states the outcome: ordinary storms managed without damage, rare storms kept out of the building. The Housing Provisions numbers you've been learning (50 mm fall, 150 mm slab height...) are pre-engineered ways to achieve that outcome. Follow them and you're 'deemed to satisfy' H2P1; or a designer can prove some other solution achieves it — that's a Performance Solution.",
    source: {
      doc: "v2",
      clause: "H2P1", clauseTitle: "Rainwater management", page: 112,
      quote:
"(1) Surface water, resulting from a storm having an annual exceedance probability of 5% and which is collected or concentrated by a building or sitework, must be disposed of in a way that avoids the likelihood of damage or nuisance to any other property.\n" +
"(2) Surface water, resulting from a storm having an annual exceedance probability of 1% must not enter the building.\n" +
"(3) A drainage system for the disposal of surface water resulting from a storm having an annual exceedance probability of—\n" +
"(a) 5% must— (i) convey surface water to an appropriate outfall; and (ii) avoid surface water damaging the building; and\n" +
"(b) 1% must avoid the entry of surface water into a building."
    }
  },

  /* ---------- Q10: termites — which materials are at risk ---------- */
  {
    id: "termite-materials",
    type: "quiz",
    topic: "Termites",
    media: { kind: "photo", src: "assets/photos/own-steel-framing.jpg",
             alt: "Blue steel wall framing of a house under construction, with black bracing straps and window openings",
             caption: "Steel wall framing on an Australian house build — one of the materials termites can't eat." },
    question: "You're in a declared termite risk area. Termite protection is only required if a [[primary building element]] (the parts holding the house up) can actually be eaten. Which of these frames would REQUIRE a [[termite management system]]?",
    choices: [
      { text: "Untreated pine wall framing", correct: true,
        feedback: "Correct. Ordinary untreated pine is termite food. Since it's a primary building element, the building needs a termite management system." },
      { text: "Steel wall framing", correct: false,
        feedback: "Termites can't eat steel — the NCC lists steel and other metals as not subject to termite attack, so no system is required for it." },
      { text: "Concrete and masonry walls", correct: false,
        feedback: "Concrete and masonry are on the NCC's 'not subject to termite attack' list. (Termites can still sneak through joints — but the material itself doesn't need protecting.)" }
    ],
    explanation:
      "The NCC's termite logic is a two-question flowchart: (1) Is the building in a termite risk area? (2) Can the primary building elements be eaten? Only if BOTH answers are yes is a termite management system required. Steel, concrete, masonry, fibre-cement, and naturally resistant or preservative-treated timber are all deemed safe; ordinary untreated framing pine is not.",
    source: {
      clause: "3.4.1", clauseTitle: "Requirements for termite management systems", page: 44,
      quote:
"(1) The requirements of this Part apply where:\n" +
"(a) a Class 1 or 10 building is constructed in an area where subterranean termites are known to present a potential risk of attack; and\n" +
"(b) a primary building element of a Class 1 or 10 building is considered susceptible to termite attack.\n" +
"(2) For the purposes of (1), a primary building element consisting entirely of, or a combination of, any of the following materials is considered not subject to termite attack:\n" +
"(a) Steel, aluminium or other metals.\n(b) Concrete.\n(c) Masonry.\n(d) Fibre-reinforced cement.\n" +
"(e) Timber — naturally termite resistant in accordance with Appendix C of AS 3660.1.\n" +
"(f) Timber — preservative treated in accordance with Appendix D of AS 3660.1."
    }
  },

  /* ---------- termites — acceptable systems ---------- */
  {
    id: "termite-options",
    type: "quiz",
    topic: "Termites",
    question: "Your slab-on-ground house needs its perimeter protected against termites. Table 3.4.2 lists four acceptable options for the slab perimeter — and one of them costs almost nothing. Which of these is a real, listed option?",
    choices: [
      { text: "Leaving the slab edge exposed to view ('slab edge exposure')", correct: true,
        feedback: "Correct — and it's free. Termites can't get past concrete, so they must build mud tunnels OVER the exposed edge to reach the timber above. Keep the edge visible and every inspection catches them in the act." },
      { text: "Paving or garden beds built up over the slab edge to block termites' path", correct: false,
        feedback: "The exact opposite of a system — covering the edge gives termites a hidden highway. This is also why slab heights matter: a buried edge can't be inspected." },
      { text: "A ring of termite-repelling mulch around the house", correct: false,
        feedback: "Not a listed system. Chemical options exist, but they must comply with AS 3660.1 and be on the official pesticides register — garden mulch doesn't qualify." }
    ],
    explanation:
      "For the slab perimeter, Table 3.4.2 accepts four options: slab edge exposure, sheet material (like the metal shield you'll see in the next question), graded granular material, or a registered chemical system. 'Slab edge exposure' is the elegant one — the concrete itself is termite-proof, so simply keeping its edge visible turns every termite attack into something an inspection can spot.",
    source: {
      clause: "3.4.2 / Table 3.4.2", clauseTitle: "Termite management systems", page: 45,
      quote:
"Where a termite management system is required it must—\n" +
"(a) be selected appropriate to Table 3.4.2; and\n" +
"(b) comply with— (i) AS 3660.1; or (ii) have been tested and passed the tests required by Section 5 of AS 3660.3; and\n" +
"(c) have a durable notice installed in accordance with 3.4.3; and\n" +
"(d) where a chemical termite management system is used, the chemical must be included on the appropriate authority's pesticides register.\n\n" +
"Table 3.4.2 (extract): Concrete slab-on-ground, slab perimeter or external wall perimeter — Slab edge exposure; Sheet material; Granular material; Chemical.\n" +
"Suspended floors — Sheet material; Granular material; Chemical.\n" +
"Attachments to buildings — Termite management system to the attachment; Inspection zone between attachment and building."
    }
  },

  /* ---------- Q11: termites — durable notice ---------- */
  {
    id: "durable-notice",
    type: "quiz",
    topic: "Termites",
    media: { kind: "photo", src: "assets/photos/photo-termite-shield.jpg",
             alt: "A shiny metal termite shield capping masonry foundation walls on a building site, sealed around a steel starter bar",
             caption: "Part of a termite management system: a metal termite shield capping the foundation walls.",
             credit: { text: "Photo: Johnmuncaster, Wikimedia Commons, CC BY-SA 4.0",
                       url: "https://commons.wikimedia.org/wiki/File:A_termite_shield_with_termite_barrier_sealant.jpg" } },
    question: "A termite management system like this shield (pictured) has been installed. In 15 years the house will have new owners who never saw it go in. What does the NCC require so they know it exists?",
    choices: [
      { text: "A durable notice fixed in a prominent spot, like the meter box", correct: true,
        feedback: "Correct. A [[durable notice]] must be permanently fixed in a prominent location and state the system used, the install date, any chemical's life expectancy, and how often to inspect." },
      { text: "A note in the sales contract is enough", correct: false,
        feedback: "Contracts get lost and never reach the next-plus-one owner. The NCC wants the information ON the building itself, where any inspector or owner can find it." },
      { text: "Nothing — the system protects the house either way", correct: false,
        feedback: "No system lasts forever: chemicals expire and barriers only work if someone inspects for mud tunnels. Protection without a maintenance record quietly becomes no protection." }
    ],
    explanation:
      "Termite protection is unusual in the NCC: it only keeps working if future people maintain it. The durable notice is the handover document, permanently fixed to the building (typically in the meter box). It must state which system was used, when it was installed, the chemical's life expectancy if one was used, and the recommended inspection frequency.",
    source: {
      clause: "3.4.3", clauseTitle: "Durable notice", page: 46,
      quote:
"A durable notice must be permanently fixed to the building in a prominent location, such as in a meter box or the like, indicating—\n" +
"(a) the termite management system used; and\n" +
"(b) the date of installation of the system; and\n" +
"(c) where a chemical is used, its life expectancy as listed on the appropriate authority's register label; and\n" +
"(d) the installer's or manufacturer's recommendations for the scope and frequency of future inspections for termite activity."
    }
  },

  /* ---------- Q12: final inspection — spot the defects ---------- */
  {
    id: "yard-inspection",
    type: "defect",
    topic: "Final walk-around",
    media: { kind: "svg", src: "assets/svg/defect-backyard.svg",
             alt: "Drawing of a finished house and yard with several site drainage details, some compliant and some not" },
    question: "Final walk-around before the inspector arrives. Inspect the five spots marked with a ? — tap each one to judge it. Three of them breach the rules you've just learned; the others are built correctly, and tapping those simply confirms they pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 4,  y: 55, w: 27, h: 22, defect: true,  label: "Ground slopes TOWARD the house",
        feedback: "Defect. The yard falls toward the building, so every storm drains against the slab. The finished surface must be graded to carry surface water AWAY — at least 50 mm of fall over the first metre. (3.3.3(a))" },
      { x: 32, y: 47, w: 8,  h: 30, defect: true,  label: "Downpipe dumping at the wall",
        feedback: "Defect. This downpipe just ends at the ground, feeding the roof's whole catchment straight into the soil beside the footing. Stormwater must be carried to a proper discharge point that satisfies the appropriate authority. (3.3.5(a))" },
      { x: 72, y: 57, w: 24, h: 16, defect: true,  label: "Garden bed built up to the slab",
        feedback: "Defect. The garden bed has been piled up to within a few centimetres of the floor level. Over soil, the slab top must sit at least 150 mm above the finished ground — and a buried slab edge also hides the strip where termite mud tunnels would be spotted. (3.3.3(b))" },
      { x: 62, y: 43, w: 8,  h: 14, badge: "below", defect: false, label: "Durable notice in the meter box",
        feedback: "That one's fine. The termite system's durable notice is fixed in the meter box, exactly where the NCC wants it. (3.4.3)" },
      { x: 55, y: 42, w: 7,  h: 32, defect: false, label: "Downpipe connected to stormwater",
        feedback: "That one's fine. This downpipe is connected to an underground stormwater drain that carries roof water away to a legal discharge point. (3.3.5)" }
    ],
    explanation:
      "Every defect in this yard was about one thing: water being allowed to sit against the building. That's the heart of Part 3.3 — fall the ground away (50 mm over the first metre), keep the slab edge proud of the ground (150 mm over soil), and pipe roof water to a legal discharge point.",
    source: {
      clause: "3.3.3 & 3.3.5", clauseTitle: "Surface water drainage / Stormwater drainage", page: 39,
      quote:
"3.3.3 Surface water must be diverted away from a Class 1 building as follows:\n" +
"(a) ...the external finished surface surrounding the slab must be drained to move surface water away from the building and graded to give a slope of not less than... 50 mm over the first 1 m from the building...\n" +
"(b) ...the height of the slab-on-ground above external finished surfaces must be not less than... 150 mm in any other case.\n\n" +
"3.3.5 Where a stormwater drainage system is installed... (a) The position and manner of discharge... must be to the satisfaction of the appropriate authority. (b) ...any overflow during heavy rain periods is prevented from flowing back into the building."
    }
  }

  ]
};
