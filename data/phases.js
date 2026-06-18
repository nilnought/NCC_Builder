/* ============================================================
   PHASES — the construction-phase map of the whole game.
   ------------------------------------------------------------
   Each entry is one game unit, in real construction order.
   The `sub` line follows one consistent format:
     "<areas covered> — HP Section N + Volume Two <clauses>"

   status: "ready"        playable — its questions live in a
                          data/phaseN-*.js file loaded by index.html
           "coming-soon"  shown locked on the home screen

   houseLayer: which layer of the house drawing appears when the
   phase is completed (see HOUSE_SVG in js/app.js).
   photo: (optional) a real site photo of this stage, shown on the
   home screen once the phase is passed ("on site now…").

   TO ADD A NEW PHASE — see docs/CONTENT-GUIDE.md.
   ============================================================ */
window.NCC = window.NCC || {};

NCC.phases = [
  { id: "site-prep",  num: 1,  title: "Site preparation",
    sub: "Earthworks, drainage, termites — HP Section 3 + Volume Two H1D3, H2D2",
    status: "ready", houseLayer: "ground",
    photo: { src: "assets/photos/photo-compactor.jpg", caption: "compacting the building pad during earthworks" } },

  { id: "footings",   num: 2,  title: "Footings & slabs",
    sub: "Excavation, fill, vapour barriers, concrete, rafts — HP Section 4 + Volume Two H1D4",
    status: "ready", houseLayer: "slab",
    photo: { src: "assets/photos/own-slab-pour.jpg", caption: "the slab being poured and screeded" } },

  { id: "walls",      num: 3,  title: "Walls — masonry & framing",
    sub: "Brickwork, framing, subfloor ventilation — HP Sections 5–6 + Volume Two H1D5, H1D6",
    status: "ready", houseLayer: "walls",
    photo: { src: "assets/photos/own-steel-framing.jpg", caption: "steel wall frames standing, ready for their brick or panel skin" } },

  { id: "roof",       num: 4,  title: "Roof & cladding",
    sub: "Sheet roofing, tiles, gutters, wall cladding — HP Section 7 + Volume Two H1D7, H2D6",
    status: "ready", houseLayer: "roof",
    photo: { src: "assets/photos/own-sheet-roofing.jpg", caption: "corrugated sheet roofing going down" } },

  { id: "glazing",    num: 5,  title: "Windows & glazing",
    sub: "Windows, safety glass, human impact — HP Section 8 + Volume Two H1D8, H2D7",
    status: "ready", houseLayer: "windows",
    photo: { src: "assets/photos/own-panel-window.jpg", caption: "windows in, awaiting their final seal and trim" } },

  { id: "fire",       num: 6,  title: "Fire safety",
    sub: "Fire spread between homes, smoke alarms — HP Section 9 + Volume Two Part H3",
    status: "ready", houseLayer: "alarm" },

  { id: "amenity",    num: 7,  title: "Wet areas & amenity",
    sub: "Waterproofing, room heights, light, ventilation — HP Section 10 + Volume Two Part H4",
    status: "ready", houseLayer: "door" },

  { id: "stairs",     num: 8,  title: "Stairs & barriers",
    sub: "Stairs, ramps, barriers, handrails — HP Section 11 + Volume Two Part H5",
    status: "ready", houseLayer: "path" },

  { id: "energy",     num: 9,  title: "Energy efficiency",
    sub: "Insulation, sealing, whole-of-home energy — HP Section 13 + Volume Two Part H6",
    status: "ready", houseLayer: "sun" },

  { id: "ancillary",  num: 10, title: "Decks, fireplaces & hazards",
    sub: "Decks, fireplaces, alpine, pools, bushfire — HP Sections 2 & 12 + Volume Two H1D2, Part H7",
    status: "ready", houseLayer: "deck" },

  { id: "livable",    num: 11, title: "Livable & accessible housing",
    sub: "Step-free access, accessible bathroom — NCC Volume Two Part H8 + Livable Housing Design Standard",
    status: "ready", houseLayer: "ramp" }
];
