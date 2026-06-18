/* ============================================================
   GLOSSARY — plain-English jargon explanations.
   ------------------------------------------------------------
   HOW IT WORKS
   - Any question text can mark a term like this:  [[finished ground level]]
     or with different display text:  [[slab-on-ground|slab]]
   - The marked words become tappable. Tapping shows the entry below
     in a popup (the key must match exactly, lowercase).
   - IMPORTANT: a glossary entry must never reveal a question's
     answer (no clause numbers or limit values in `plain`).

   FIELDS (only `plain` is required)
   plain    : everyday-English explanation. Avoid other jargon here!
   official : (optional) note about the formal NCC meaning.
   image    : (optional) path to a photo or diagram.
   caption  : (optional) one line shown under the image.
   credit   : (optional) photo attribution {text, url} — REQUIRED for
              CC-licensed photos, see assets/photos/CREDITS.md.
   ============================================================ */
window.NCC = window.NCC || {};

NCC.glossary = {

  "allotment": {
    plain: "The block of land you are building on — what most people call 'the block' or 'the property'.",
    official: "The NCC uses 'allotment' to mean the legally defined parcel of land."
  },

  "natural ground level": {
    plain: "The level the ground was at BEFORE any digging or filling started. Earthwork limits are measured from this level, not from the new surface."
  },

  "finished ground level": {
    plain: "The level of the soil or paving once all the building and landscaping work is done — not the level during construction."
  },

  "slab-on-ground": {
    plain: "A concrete floor poured directly on the ground. Most modern Australian houses sit on one. The concrete is poured over plastic sheeting, foam pods and steel mesh.",
    image: "assets/photos/own-slab-pour.jpg",
    caption: "A house slab being poured and finished on an Australian site — note the formwork boards around the edge."
  },

  "suspended floor": {
    plain: "A floor that sits up on supports (stumps, piers or walls) with an air space underneath, instead of resting on the ground. Common in older homes and on sloping blocks."
  },

  "footing": {
    plain: "The part of the building that sits in or on the ground and carries the weight of everything above it down into the soil. Usually concrete.",
    official: "Don't confuse it with 'foundation' — in the NCC the foundation is the GROUND that the footing sits on."
  },

  "foundation": {
    plain: "In the NCC, the foundation is the soil or rock that supports the building. (In everyday speech people say 'foundations' for the concrete — the NCC calls that the footing.)"
  },

  "surface water": {
    plain: "Rainwater that runs across the top of the ground — across lawns, paving and driveways — before it soaks in or reaches a drain.",
    image: "assets/photos/own-ponding-water.jpg",
    caption: "Why the rules exist: surface water ponding in an ungraded side yard next to a new build."
  },

  "subsoil drain": {
    plain: "A slotted pipe buried in a gravel-filled trench that collects water moving THROUGH the soil and carries it away. Also called an 'ag drain' or 'French drain'.",
    image: "assets/photos/photo-subsoil-drain.jpg",
    caption: "A real subsoil drain under construction: slotted pipes laid in a trench and surrounded by gravel.",
    credit: { text: "Photo: Scooter133, Wikimedia Commons, public domain", url: "https://commons.wikimedia.org/wiki/File:FrenchDrain-02.jpg" }
  },

  "stormwater": {
    plain: "Rainwater collected from the roof (via gutters and downpipes) and hard surfaces, carried away in pipes to the street drain, a tank or a soak well."
  },

  "silt pit": {
    plain: "A small underground box that a subsoil drain empties into. Soil particles settle to the bottom (so they don't block pipes downstream) and can be cleaned out through a lid."
  },

  "invert level": {
    plain: "The level of the LOWEST point inside a pipe or pit — the surface the water actually runs along. Plumbers measure pipe heights to the invert."
  },

  "embankment": {
    plain: "A sloped bank of soil — either the face left after cutting into a slope, or the side of a mound of fill."
  },

  "batter": {
    plain: "The deliberate slope given to the side of a pile of fill or a cutting so it doesn't collapse. A 'batter angle' is how steep that slope is."
  },

  "cut and fill": {
    plain: "The common way to create a flat building platform on a sloping block: dig soil out of the high side (the cut) and use it to build up the low side (the fill)."
  },

  "compaction": {
    plain: "Squashing loose soil down firmly (with rollers or plate compactors) so it won't sink later. Fill that isn't compacted properly settles — and the building on top cracks.",
    image: "assets/photos/photo-compactor.jpg",
    caption: "A compactor roller working layers of fill on a building site.",
    credit: { text: "Photo: U.S. Air Force, MSgt. Rickie D. Bickle, public domain", url: "https://commons.wikimedia.org/wiki/File:Seabees_compactor_roller.jpg" }
  },

  "zone of influence": {
    plain: "An invisible wedge of soil under and around a footing that carries the building's weight. Digging into this zone can undermine the footing, so cuts and trenches must stay outside it."
  },

  "termite management system": {
    plain: "A barrier or treatment that stops termites ('white ants') getting into the building unseen — for example a metal shield, a graded stone layer, or treated chemical zones.",
    image: "assets/photos/photo-termite-shield.jpg",
    caption: "A real termite shield: the metal layer forces termites out into the open where their mud tunnels can be seen at inspections.",
    credit: { text: "Photo: Johnmuncaster, Wikimedia Commons, CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:A_termite_shield_with_termite_barrier_sealant.jpg" }
  },

  "primary building element": {
    plain: "A part of the building that holds it up or keeps it standing — like footings, floor framing, wall framing and roof framing. These are the parts termites must not be allowed to eat."
  },

  "durable notice": {
    plain: "A permanent label (usually fixed in the electricity meter box) recording what termite protection was installed, when, and how often it must be inspected. Future owners rely on it.",
    image: "assets/photos/own-meter-box.jpg",
    caption: "The meter box on a new build — the prominent spot where the durable notice gets fixed."
  },

  "appropriate authority": {
    plain: "The NCC's neutral term for 'whoever has legal power to approve this where you are' — usually the local council or a private building surveyor/certifier."
  },

  "deemed-to-satisfy provisions": {
    plain: "The NCC's 'recipe book' rules. Follow them exactly and your building automatically counts as complying — no extra proof needed. This game teaches mostly these.",
    official: "Abbreviated DTS. The alternative is a Performance Solution, where you prove compliance another way."
  },

  "performance requirement": {
    plain: "The actual law part of the NCC — WHAT the building must achieve (for example, that occupants can escape safely in a fire), without saying how. You comply either via the Deemed-to-Satisfy recipes or by proving your own solution works."
  },

  "class 1 building": {
    plain: "The NCC's name for a normal house (detached, or a townhouse/row house). A garage or shed is Class 10a. Every NCC rule starts with knowing your building's class."
  },

  "ncc clause numbering": {
    plain: "NCC clause codes read like a postcode. Take H2P1: 'H' = the Section (Section H of Volume Two covers houses — Class 1 and 10 buildings); '2' = Part 2 of that Section (damp and weatherproofing); the second letter = the clause type — P is a Performance Requirement (the law: what must be achieved), D is a Deemed-to-Satisfy provision (a pre-approved recipe), V is a Verification Method; the final number is just the clause's position. So H2P1 = Volume Two, houses, damp and weatherproofing, Performance Requirement number 1."
  },

  "annual exceedance probability": {
    plain: "How rare a storm is, as a yearly chance: a '5% AEP' storm has a 5-in-100 chance of happening in any year (people casually say 'a 1-in-20-year storm'). 1% AEP is the once-in-a-century monster. The NCC sets different demands for different rarities."
  },

  "overflow relief gully": {
    plain: "A drain fitting in the yard with a loose grate, set lower than the house's lowest drain. If the sewer blocks, sewage overflows here — outside — instead of into your shower. Often shortened to ORG."
  },

  /* ---------- terms introduced in Phase 2 (footings & slabs) ---------- */

  "site classification": {
    plain: "The letter grade a soil report gives a block (A, S, M, H, E or P) describing how much the ground moves as moisture changes. It's done to the rules of AS 2870 and drives the whole footing design."
  },

  "reactive soil": {
    plain: "Clay that swells when it gets wet and shrinks as it dries — the ground literally rises and falls with the seasons. The more reactive the clay, the tougher the footing needs to be."
  },

  "bearing pressure": {
    plain: "How hard soil can safely be pressed before it squashes or gives way, measured in kilopascals (kPa). A soil rated 100 kPa can carry twice the load per square metre of one rated 50 kPa."
  },

  "controlled fill": {
    plain: "Imported or reused soil placed in thin layers, each compacted by machine to a known standard. Unlike random dumped fill, its strength is reliable enough to build on."
  },

  "vapour barrier": {
    plain: "The heavy black plastic sheet laid under a concrete slab. It stops moisture in the ground from slowly wicking up through the concrete into the house.",
    image: "assets/photos/own-vapour-barrier.jpg",
    caption: "Vapour barrier on a real site — the black plastic under the pods, wrapping out at the slab edge."
  },

  "sand blinding": {
    plain: "A thin, level layer of clean sand spread over compacted fill before the vapour barrier goes down. It's a cushion: without it, sharp stones in the fill puncture the plastic."
  },

  "waffle pod": {
    plain: "Lightweight foam blocks laid out in a grid on top of the vapour barrier. Concrete is poured over and between them, creating a slab with a grid of stiffening ribs — like a waffle, upside down.",
    image: "assets/photos/own-mesh-chairs.jpg",
    caption: "Waffle pods (white foam) under the slab mesh, ready for the pour."
  },

  "slump": {
    plain: "The standard wetness test for fresh concrete: fill a 300 mm cone, lift it off, and measure how far the concrete slumps down. A 100 mm slump is a normal workable house mix — runnier means weaker."
  },

  "edge beam": {
    plain: "The thickened, reinforced strip of concrete around the perimeter of a slab — the deep part you can see at the slab's edge. It carries the walls and stiffens the whole slab like a picture frame."
  },

  "strip footing": {
    plain: "A continuous strip of reinforced concrete cast in a trench, running under a wall and following it everywhere it goes. The wall is built up from the footing — first below ground, then rising past the surface. The traditional footing for brick walls.",
    image: "assets/photos/illu-strip-footing.jpg",
    caption: "A wall rising from its continuous strip footing — the footing sits in a trench below ground.",
    credit: { text: "Illustration: WikiDork78, Wikimedia Commons, CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Wall_Footing.jpg" }
  },

  "stiffened raft": {
    plain: "A concrete slab and a grid of deep beams (around the edge and across the middle) poured as one piece. The whole house floats on it like a stiff tray — the standard modern Australian house footing."
  },

  "bar chair": {
    plain: "A small plastic, wire or concrete support that holds steel reinforcement up off the ground at its designed height, so it ends up in the right place inside the concrete with cover all around.",
    image: "assets/photos/own-mesh-chairs.jpg",
    caption: "Slab mesh held at height by bar chairs (the small black clips)."
  },

  "trench mesh": {
    plain: "A long, narrow ribbon of welded steel bars (e.g. 3 bars, 8 mm each — written 3-L8TM) made to drop straight into footing trenches as reinforcement."
  },

  "concrete cover": {
    plain: "The thickness of concrete between the steel reinforcement and the outside surface. It's the steel's protective skin — too little cover and moisture reaches the steel, which rusts, expands, and cracks the concrete apart."
  },

  "edge rebate": {
    plain: "A small step cast into the top outside edge of a slab, where the outer brick skin sits. It puts the bottom brick course below floor level so cavity moisture stays out of the house."
  },

  "re-entrant corner": {
    plain: "An internal corner of a slab — where the outline turns INTO the building's footprint, like the inside corner of an L-shape. Stress concentrates there, so slabs love to crack diagonally out of these corners."
  },

  /* ---------- terms introduced in Phase 10 (ancillary) ---------- */

  "waling plate": {
    plain: "A horizontal beam bolted along a wall to carry a deck or balcony. The deck's joists sit on it, so the deck's weight is spread into the building's structure instead of hanging off a few screws."
  },

  "hearth": {
    plain: "The non-combustible floor area in front of and around a fireplace — stone, concrete or masonry — that catches sparks and embers so they can't land on a combustible floor."
  },

  "alpine area": {
    plain: "A snow-prone region (declared by the NCC) where extra rules apply: snow loads on the structure, gentler stairs for icy footing, and clear spaces around buildings."
  },

  /* ---------- terms introduced in Phase 11 (livable housing) ---------- */
  /* (livable-housing concepts are explained inline; no extra jargon needed) */

  /* ---------- terms introduced in Phase 9 (energy efficiency) ---------- */

  "r-value": {
    plain: "A measure of how well insulation resists heat flow — the higher the number, the better it keeps heat in (winter) or out (summer). The NCC sets minimum R-Values for roofs, walls and floors, rising in colder or harsher climate zones."
  },

  "ceiling fan": {
    plain: "A low-energy cooling device: it uses a tiny fraction of an air conditioner's power, and its breeze makes a room feel several degrees cooler. NCC 2025 requires them in bedrooms and living areas in the warm northern climate zones."
  },

  /* ---------- terms introduced in Phase 8 (stairs & barriers) ---------- */

  "riser": {
    plain: "The vertical face of a step — how far your foot lifts from one tread to the next. The NCC bounds it so the stair is neither a scuff-trip nor a clamber."
  },

  "going": {
    plain: "The horizontal depth of a step — how much room your foot has on each tread (measured tread-nosing to tread-nosing). The NCC bounds it, and ties it to the riser with the 2R+G slope rule so the stair fits a natural stride."
  },

  /* ---------- terms introduced in Phase 7 (wet areas & amenity) ---------- */

  "waterproof": {
    plain: "A grade of waterproofing system, rated so water cannot pass through the surface it protects."
  },

  "water resistant": {
    plain: "A grade of waterproofing system that limits water reaching the surface behind it, sitting on a substrate that can cope with some moisture."
  },

  "floor waste": {
    plain: "A drain set into a wet-area floor. The floor is sloped toward it so water runs to the drain instead of pooling — required in every shower."
  },

  "rw": {
    plain: "A sound-insulation rating: how many decibels a wall knocks off noise passing through it (higher = quieter). 'Rw + Ctr' adds a correction for low-frequency sound like traffic and bass; separating walls between homes must reach Rw + Ctr of 50."
  },

  /* ---------- terms introduced in Phase 6 (fire safety) ---------- */

  "frl": {
    plain: "Fire Resistance Level — how long a building element survives a standard fire, given as three numbers in minutes: structural adequacy / integrity / insulation. So '60/60/60' means it stays standing, holds back flame, and keeps its far side cool, each for 60 minutes."
  },

  "design heat flux": {
    plain: "The intensity of radiant heat the NCC assumes a neighbouring fire throws at your wall — 92.6 kW/m². The fire-spread rules are calibrated so a wall can take that blast for 60 minutes without letting fire across."
  },

  "separating wall": {
    plain: "The fire-resisting wall between two attached homes (or isolating a garage that belongs to someone else). Its job is to be one unbroken fire barrier between the dwellings, so fire and smoke can't pass from one to the other."
  },

  /* ---------- terms introduced in Phase 5 (glazing) ---------- */

  "safety glass": {
    plain: "Glass engineered to fail kindly: toughened glass shatters into small blunt crumbs, laminated glass cracks but hangs together on a plastic interlayer. 'Grade A' is the highest impact rating — mandatory wherever people might hit glass."
  },

  "annealed glass": {
    plain: "Ordinary, everyday window glass. Strong enough for weather, but it breaks into long sharp daggers — which is why the code chases it out of doors, low panels and bathrooms."
  },

  "sight line": {
    plain: "The lowest (or nearest) visible edge of the glass in a panel — the point where, as your eye or body moves toward it, you first meet the glass. The code measures its human-impact safety triggers (heights and distances) from this line."
  },

  /* ---------- terms introduced in Phase 4 (roof & cladding) ---------- */

  "sarking": {
    plain: "A strong membrane laid under roof tiles or behind cladding — the building's secret second skin. It catches the wind-driven rain and dust that inevitably sneaks past the outer layer and drains it safely to the gutter.",
    image: "assets/svg/sarking-layers.svg",
    caption: "Section through a tiled roof: the sarking membrane sits under the battens, beneath the visible tiles."
  },

  "flashing": {
    plain: "Folded metal (or membrane) strips that seal every interruption in a roof or wall — where a roof meets a wall, around pipes and chimneys, over windows and doors. Flashings work by overlapping in the direction water flows, so it steps downhill over every joint."
  },

  "structural member": {
    plain: "A 'member' is one piece of the building's frame — a single beam, bearer, joist, lintel, post or column. Each beam in the picture is one member.",
    official: "A member has three sizes: how far it RUNS (its length/span), how DEEP it is (top to bottom of the section) and how WIDE it is (the breadth across the section). The 'width' in the bearing rule is that last one — how wide the steel is across, not its length or its depth."
  },

  "weatherboard": {
    plain: "Horizontal timber (or fibre-cement) boards cladding a wall, each one lapping over the board below — shedding water exactly the way roof tiles do, one small step at a time."
  },

  /* ---------- terms introduced in Phase 3 (walls) ---------- */

  "masonry veneer": {
    plain: "The standard modern Australian wall: a structural frame (timber or steel) wearing a single decorative-and-weatherproofing skin of brickwork outside it. The frame holds the house up; the bricks keep the weather out."
  },

  "cavity wall": {
    plain: "Traditional 'double brick': two complete walls of masonry (leaves) with an air gap (the cavity) between them. Water that gets through the outer leaf runs down inside the cavity and drains out without ever reaching the inner leaf."
  },

  "lintel": {
    plain: "The small beam (usually a steel angle) bridging over a window or door opening, carrying the bricks above it. Without one, masonry over an opening would simply fall."
  },

  "engaged pier": {
    plain: "A column of brickwork built against and tied to a wall — like a buttress — to stiffen it or carry a concentrated load such as a floor bearer."
  },

  "isolated pier": {
    plain: "A free-standing column of brickwork with no wall attached — like the piers holding up a carport roof or a suspended floor."
  },

  "mortar": {
    plain: "The cement-lime-sand 'glue' between bricks, mixed to recipes that match the bricks' exposure grade. Deliberately a little weaker than the bricks, so any movement cracks the (repairable) joints rather than the bricks."
  },

  "wall tie": {
    plain: "A small steel (or polymer) connector embedded in the mortar that ties the brick skin to the frame, or one masonry leaf to the other. Hundreds of them quietly stop the brickwork peeling off in wind — until they rust, which is why their corrosion grade matters."
  },

  "articulation joint": {
    plain: "A deliberate vertical break in the brickwork, about 10 mm wide and filled with flexible sealant, that lets wall panels move slightly as the ground and frame move — so cracks happen at the joint (invisibly) instead of through the wall."
  },

  "damp-proof course": {
    plain: "A waterproof strip (often embossed plastic) laid in a mortar bed near the bottom of a wall, stopping ground moisture from wicking up through the masonry — the wall's version of the slab's vapour barrier. Usually shortened to DPC."
  },

  "weephole": {
    plain: "A deliberately unfilled vertical joint in the lowest brick course above the flashing — the drain hole where water collected inside the wall cavity escapes. They look like missing mortar; they're required, and must never be blocked or rendered over."
  },

  "stump": {
    plain: "A short post (timber, steel or concrete) standing in the ground, supporting a suspended floor. Old Queenslanders sit on dozens of them; each one is a tiny column with its own footing."
  }
};
