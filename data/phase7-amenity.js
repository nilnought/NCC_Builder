/* ============================================================
   PHASE 7 — WET AREAS & AMENITY
   Content from: ABCB Housing Provisions Standard 2025, Section 10
   (wet areas, room heights, facilities, light, ventilation, sound
   insulation, condensation) plus the NCC 2025 Volume Two layer
   (Part H4: H4P1–H4P7, H4D3–H4D9).
   Editing guide: docs/CONTENT-GUIDE.md · Ledger: docs/COVERAGE.md
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["amenity"] = {
  id: "amenity",
  title: "Wet areas & amenity",
  intro:
    "Weathertight and fire-safe — now the house has to be a healthy place to LIVE. This big section is about " +
    "the everyday: keeping water inside the bathroom (the most-failed detail in all of housing), giving rooms " +
    "enough height, light and fresh air, providing the basic facilities a home needs, keeping the neighbours' " +
    "noise out of attached dwellings, and stopping the hidden damp — condensation — that rots modern airtight " +
    "homes from the inside.",
  learnList: [
    "Wet-area waterproofing: waterproof vs water-resistant, shower zones, floor falls",
    "Room heights, required facilities, natural light and ventilation",
    "Sound insulation between attached dwellings",
    "Condensation management: exhausts and breathable walls"
  ],

  questions: [

  /* ---------- V2 H4 rule book ---------- */
  {
    id: "rulebook-amenity",
    type: "quiz",
    topic: "The rule book",
    question: "Volume Two's Part H4 ('Health and amenity') bundles SEVEN performance requirements that Section 10 satisfies. They cover wet areas, room heights, facilities, lighting, ventilation, sound and condensation. What's the single idea tying them together?",
    choices: [
      { text: "A house must be healthy and amenable to live in — dry, tall enough, lit, ventilated, equipped, quiet and damp-free", correct: true,
        feedback: "Correct. Everything earlier kept the house standing and safe; H4 makes it fit to LIVE in. Each performance requirement (H4P1 wet areas … H4P7 condensation) maps to one deemed-to-satisfy Part of Section 10." },
      { text: "They're all about fire safety", correct: false,
        feedback: "Fire was Part H3, last phase. H4 is health and amenity — the conditions that make a building a comfortable, healthy home rather than just a safe shell." },
      { text: "They only apply to bathrooms", correct: false,
        feedback: "Wet areas are just H4P1. The Part also governs room heights, facilities, light, ventilation, sound insulation between dwellings, and condensation — the whole liveability of the home." }
    ],
    explanation:
      "H4 is the liveability chapter: H4P1 wet areas, H4P2 room heights, H4P3 facilities, H4P4 lighting, H4P5 ventilation, H4P6 sound insulation, H4P7 condensation. Each is satisfied by the matching Part of Housing Provisions Section 10 (via H4D3–H4D9). It's the NCC's broadest 'comfort' section — and the one whose failures (a leaking shower, a mouldy wall) homeowners notice most.",
    source: {
      doc: "v2",
      clause: "H4P1 & H4D3–H4D9", clauseTitle: "Health and amenity", page: 128,
      quote:
"H4P1 Wet areas — To protect the structure of the building and to maintain the amenity of the occupants, water must be prevented from penetrating behind fittings and linings ...\n" +
"H4P2 Room heights — A room or space must be of a height that does not unduly interfere with its intended function.\n" +
"H4P3 Personal hygiene and other facilities ... H4P4 Lighting ... H4P5 Ventilation ... H4P6 Sound insulation ... H4P7 Condensation ...\n\n" +
"H4D3–H4D9 — Compliance with Parts 10.2–10.8 of the ABCB Housing Provisions satisfies the corresponding Performance Requirements H4P1–H4P7."
    }
  },

  /* ---------- 10.2.1 waterproof vs water resistant ---------- */
  {
    id: "wet-area-principle",
    media: { kind: "svg", src: "assets/svg/q-wet-zones.svg",
             alt: "A bathroom split into a soaked shower zone and a splashed floor zone",
             caption: "Soaked shower vs splashed floor." },
    type: "quiz",
    topic: "Wet areas",
    question: "The two key words of wet-area design are [[waterproof]] and [[water resistant]]. They are NOT the same thing. What's the difference?",
    choices: [
      { text: "Waterproof stops water completely (for areas that get soaked); water resistant only restricts it (for areas that get splashed)", correct: true,
        feedback: "Correct. The shower floor and lower walls cop direct water — they must be fully waterproof. The rest of the bathroom floor just gets the odd splash — water resistant is enough. Matching the right grade to each zone is the whole skill." },
      { text: "They mean the same thing, just different brands", correct: false,
        feedback: "They're defined differently and used in different zones: waterproof = water can't get through at all; water resistant = water is restricted but the substrate tolerates incidental moisture. Using the wrong one is how showers leak." },
      { text: "Waterproof is for walls, water resistant is for floors", correct: false,
        feedback: "It's about exposure, not walls-vs-floors. Inside the shower, both walls AND floor are waterproof; outside it, floors can be merely water resistant." }
    ],
    explanation:
      "10.2.1: building elements in wet areas must be protected by a waterproofing system that is either waterproof or water resistant, zone by zone (10.2.2–10.2.6). Waterproof = an impervious barrier; water resistant = a system that restricts moisture to a substrate that can cope with it. The art of a dry bathroom is putting full waterproofing exactly where water lands, and water-resistant systems where it only splashes.",
    source: {
      clause: "10.2.1", clauseTitle: "Wet areas", page: 250,
      quote:
"(1) Building elements in wet areas within a building must be protected with a waterproofing system.\n" +
"(2) The waterproofing system in (1) must be either waterproof or water resistant in accordance with 10.2.2 to 10.2.6."
    }
  },

  /* ---------- 10.2.2 shower waterproofing (number) ---------- */
  {
    id: "shower-wall-height",
    type: "number",
    topic: "Wet areas",
    media: { kind: "svg", src: "assets/svg/q-shower-wp.svg",
             alt: "Cross-section of a shower showing the waterproof zone running up the wall, height marked with a question mark",
             caption: "Inside the shower: how far up the wall must be waterproof?" },
    question: "Inside an enclosed shower, the floor is fully waterproof — and so are the walls, up to a height. Set the minimum height the shower walls must be waterproof above the floor substrate.",
    slider: { min: 0, max: 2400, step: 300, unit: "mm", start: 0, target: 1800,
      hints: {
        "0":   "Tiled but not waterproofed behind, the wall soaks up every shower and rots the frame — the classic hidden bathroom failure.",
        "600": "That's about tap height — water runs and splashes far higher than that in a shower.",
        "1200":"Halfway up — but shower spray reaches well above head-height fittings. The code wants higher.",
        "1500":"That's the waterproofing height for the floor area OUTSIDE an unenclosed shower, not the shower wall itself. The enclosed shower wall goes higher.",
        "2100":"Above the requirement — generous, but not the minimum the code names.",
        "2400":"Full ceiling height isn't required (though never wrong) — find the code minimum."
      }
    },
    explanation:
      "1800 mm — head height — for the shower walls, with the floor (including any hob or step-down) fully waterproof and all wall/floor and wall/wall junctions within the shower waterproof too. Outside the shower, the broader wet-area floor is waterproofed to 1500 mm around an unenclosed shower. The shower is the wettest spot in the house, so its waterproofing reaches highest.",
    source: {
      clause: "10.2.2", clauseTitle: "Shower area (enclosed and unenclosed)", page: 250,
      quote:
"(1) For a shower area with a hob, step-down or level threshold, the following applies:\n" +
"(a) The floor of the shower area must be waterproof, including any hob or step-down (see Figure 10.2.2); and\n" +
"(b) The walls of the shower area must be waterproof not less than 1800 mm above the floor substrate (see Figure 10.2.2).\n" +
"(c) Wall junctions and joints within the shower area must be waterproof (see Figure 10.2.2).\n" +
"(d) Wall/floor junctions within the shower area must be waterproof (see Figure 10.2.2)."
    }
  },

  /* ---------- 10.2.12 floor falls ---------- */
  {
    id: "wet-floor-falls",
    media: { kind: "svg", src: "assets/svg/q-wet-falls.svg",
             alt: "A wet-area floor falling toward a floor waste",
             caption: "Floor falling to the drain." },
    type: "quiz",
    topic: "Wet areas",
    question: "A wet-area floor with a [[floor waste]] (drain) must slope toward it so water actually leaves. The NCC sets BOTH a minimum and maximum fall. Why a maximum?",
    choices: [
      { text: "Too steep (steeper than 1:50) and the floor feels unsafe and tiles are hard to lay flat; too flat (flatter than 1:80) and water won't drain", correct: true,
        feedback: "Correct. The window is 1:80 to 1:50 — enough slope to drain reliably, not so much that you feel like you're standing on a hill or the vanity won't sit level. A Goldilocks range." },
      { text: "There's no maximum — steeper is always better for drainage", correct: false,
        feedback: "Steeper does drain faster, but a floor that falls more than 1:50 is uncomfortable and unsafe underfoot, and fixtures won't sit level. The code caps it at 1:50." },
      { text: "The maximum is about saving water", correct: false,
        feedback: "It's about usability and safety, not water saving. Between 1:80 (min, to drain) and 1:50 (max, to stay usable) is the required range to the floor waste." }
    ],
    explanation:
      "10.2.12: where a floor waste is installed, the floor plane falls between 1:80 (minimum, so water reaches the drain) and 1:50 (maximum, so the floor stays comfortable and fixtures sit level). Every wet area with a drain — and every shower (10.2.14 requires a floor waste with these falls) — lives inside that band. Compare the slab-edge and ground falls from earlier phases: drainage is always a slope toward where you want the water.",
    source: {
      clause: "10.2.12", clauseTitle: "Construction of wet area floors — falls", page: 257,
      quote:
"Where a floor waste is installed—\n" +
"(a) the minimum continuous fall of a floor plane to the waste must be 1:80; and\n" +
"(b) the maximum continuous fall of a floor plane to the waste must be 1:50."
    }
  },

  /* ---------- 10.3.1 room heights ---------- */
  {
    id: "room-heights",
    type: "quiz",
    topic: "Room heights",
    media: { kind: "svg", src: "assets/svg/q-room-height.svg",
             alt: "Two rooms side by side, a living room and a bathroom, with their ceiling heights marked with question marks",
             caption: "Different rooms, different minimum ceilings." },
    question: "Ceiling heights aren't one number — they depend on the room. What's the minimum height for a habitable room like a living room or bedroom (excluding kitchens)?",
    choices: [
      { text: "2.4 m — while kitchens, bathrooms, laundries and hallways need only 2.1 m", correct: true,
        feedback: "Correct. Rooms you spend hours in get 2.4 m so they don't feel oppressive; utility rooms you pass through or work in briefly manage with 2.1 m. Stairways need just 2.0 m of headroom over the nosing line." },
      { text: "2.1 m for every room", correct: false,
        feedback: "2.1 m is the utility-room minimum (kitchen, bathroom, laundry, hallway). Habitable rooms — living rooms, bedrooms — need the more generous 2.4 m." },
      { text: "3.0 m, like heritage homes", correct: false,
        feedback: "Old homes were lofty by choice, not code. The modern minimums are 2.4 m habitable, 2.1 m utility, 2.0 m stair headroom." }
    ],
    explanation:
      "10.3.1: habitable rooms (excluding kitchens) 2.4 m; kitchens, corridors, bathrooms, laundries, sanitary compartments, garages and the like 2.1 m; stairways/ramps 2.0 m over the nosing line. Sloping ceilings and attics get two-thirds-of-floor-area rules (2.2 m over two-thirds in an attic habitable room). This satisfies H4P2 — a room must be tall enough not to interfere with its use.",
    source: {
      clause: "10.3.1", clauseTitle: "Height of rooms and other spaces", page: 271,
      quote:
"(1) Heights of rooms and other spaces (see Figure 10.3.1) must be not less than—\n" +
"(a) in a habitable room excluding a kitchen — 2.4 m; and\n" +
"(b) in a kitchen — 2.1 m; and\n" +
"(c) in a corridor, passageway or the like — 2.1 m; and\n" +
"(d) in a bathroom, shower room, laundry, sanitary compartment, airlock, pantry, storeroom, garage, car parking area or the like — 2.1 m; and\n" +
"(e) [sloping ceilings/attics — two-thirds of floor area rules]; and\n" +
"(f) in a stairway, ramp ..., landing, or the like — 2.0 m measured vertically above the nosing line of stairway treads or the floor surface of a ramp, landing or the like."
    }
  },

  /* ---------- 10.4.1 required facilities ---------- */
  {
    id: "required-facilities",
    media: { kind: "svg", src: "assets/svg/q-facilities.svg",
             alt: "Icons of a sink, shower, washtub, toilet and basin",
             caption: "What makes a building a home?" },
    type: "quiz",
    topic: "Facilities",
    question: "What makes a building legally a HOME? The NCC lists the minimum facilities every Class 1 building must have. Which set is correct?",
    choices: [
      { text: "Kitchen sink + cooking, a bath or shower, laundry washtub + space for a machine, a toilet, and a washbasin", correct: true,
        feedback: "Correct — the irreducible list of a dwelling. Note the precision: a kitchen sink or washbasin can't double as the laundry washtub, because the washtub is what legally provides waste-water disposal." },
      { text: "Just a toilet and a tap", correct: false,
        feedback: "Too few — a home needs cooking facilities, bathing, laundry, a toilet AND a washbasin. That's what separates a dwelling from a shed." },
      { text: "A kitchen, two bathrooms and a garage", correct: false,
        feedback: "That's a nice house, not the legal minimum. The required set is: kitchen sink + cooking, bath/shower, laundry washtub + machine space, closet pan, washbasin." }
    ],
    explanation:
      "10.4.1: every Class 1 building must have a kitchen sink and food-prep/cooking facilities, a bath or shower, clothes-washing facilities (at least a washtub plus space for a machine), a closet pan (toilet) and a washbasin. The washtub matters specifically because it provides waste-water disposal — a sink or basin can't be counted as one. This satisfies H4P3 (personal hygiene and other facilities).",
    source: {
      clause: "10.4.1", clauseTitle: "Required facilities", page: 273,
      quote:
"(1) A Class 1 building must be provided with—\n" +
"(a) a kitchen sink and facilities for the preparation and cooking of food; and\n" +
"(b) a bath or shower; and\n" +
"(c) clothes washing facilities, comprising at least one washtub and space in the same room for a washing machine; and\n" +
"(d) a closet pan; and\n" +
"(e) a washbasin.\n" +
"(Explanatory: A kitchen sink or washbasin must not be counted as a laundry washtub. A laundry washtub is considered to provide the necessary means to dispose of waste water as required by H4P3(2).)"
    }
  },

  /* ---------- 10.5.1 natural light ---------- */
  {
    id: "natural-light",
    media: { kind: "svg", src: "assets/svg/q-natural-light.svg",
             alt: "A room with a window letting in light",
             caption: "Natural light into a habitable room." },
    type: "quiz",
    topic: "Light & air",
    question: "Habitable rooms need natural light from windows. How much window does the NCC require, as a fraction of the room's floor area?",
    choices: [
      { text: "Window glass area at least 10% of the floor area (or 3% for roof lights, which face straight up)", correct: true,
        feedback: "Correct. A 20 m² living room needs at least 2 m² of glass. Roof lights count more efficiently (3%) because they face the open sky and gather light all day." },
      { text: "At least 50% of the wall must be glass", correct: false,
        feedback: "The rule is tied to FLOOR area, not wall area, and it's 10% — a 20 m² room needs 2 m² of window glass, not half a wall." },
      { text: "Any window is enough", correct: false,
        feedback: "A token porthole won't make a room liveable. The measure is 10% of floor area in window glass (3% for roof lights), measured clear of framing." }
    ],
    explanation:
      "10.5.1: natural light to all habitable rooms via windows with light-transmitting area ≥10% of the room's floor area (open to the sky or a suitable court/verandah), or roof lights ≥3%, or a proportional mix. Artificial lighting (10.5.2) covers the rest. This satisfies H4P4 (lighting). The 10% rule is why open-plan living areas need big windows or a borrowed-light arrangement.",
    source: {
      clause: "10.5.1", clauseTitle: "Natural light", page: 275,
      quote:
"(1) Natural light must be provided to all habitable rooms, in accordance with the requirements of (2) to (5).\n" +
"(2) Natural light must be provided by— (a) windows, excluding roof lights that— (i) have an aggregate light transmitting area measured exclusive of framing members, glazing bars or other obstructions of not less than 10% of the floor area of the room; and (ii) are open to the sky or face a court or other space open to the sky or an open verandah, carport or the like; or (b) roof lights that— (i) have an aggregate light transmitting area ... of not less than 3% of the floor area of the room; and (ii) are open to the sky; or (c) a proportional combination of windows and roof lights required by (a) and (b)."
    }
  },

  /* ---------- 10.6.2 ventilation ---------- */
  {
    id: "natural-ventilation",
    media: { kind: "svg", src: "assets/svg/q-ventilation.svg",
             alt: "A room with an openable window for fresh air",
             caption: "Fresh air into a room." },
    type: "quiz",
    topic: "Light & air",
    question: "Rooms also need fresh air. For natural ventilation, the openable area (windows, doors, vents that can open) must be at least what fraction of the room's floor area?",
    choices: [
      { text: "5% of the floor area, opening to the sky or a suitable open space", correct: true,
        feedback: "Correct — half the natural-light figure. A 20 m² room needs 1 m² of openable area. Alternatively, an exhaust fan or mechanical ventilation can do the job, especially in windowless bathrooms." },
      { text: "10%, same as natural light", correct: false,
        feedback: "Light needs 10%; ventilation needs 5%. You need more glass to light a room than openable area to air it — and a single window often provides both at once." },
      { text: "No requirement if there's air conditioning", correct: false,
        feedback: "Air-con isn't ventilation (it recirculates). The rule is 5% openable area to outdoor air, OR a compliant mechanical ventilation/exhaust system — a sealed, AC-only room doesn't satisfy it." }
    ],
    explanation:
      "10.6.2: ventilation to habitable rooms, bathrooms, laundries and the like via openings ≥5% of the floor area to outdoor air (or borrowed from an adjoining room under strict conditions), OR an exhaust fan / mechanical system. Sanitary compartments, kitchens, bathrooms and laundries commonly use exhaust fans — whose discharge must comply with the condensation rules (next). This satisfies H4P5 (ventilation).",
    source: {
      clause: "10.6.2", clauseTitle: "Ventilation requirements", page: 279,
      quote:
"Ventilation must be provided to a habitable room, sanitary compartment, bathroom, shower room, laundry and any other room occupied by a person for any purpose by any of the following means:\n" +
"(a) Openings, windows, doors or other devices which can be opened— (i) with a ventilating area not less than 5% of the floor area of the room required to be ventilated; and (ii) open to— (A) a suitably sized court, or space open to the sky; or (B) an open verandah, carport, or the like; or (C) an adjoining room in accordance with (b).\n" +
"... (c) An exhaust fan or other means of mechanical ventilation may be used to ventilate a sanitary compartment, laundry, kitchen or bathroom ... provided contaminated air exhausts comply with 10.8.2."
    }
  },

  /* ---------- 10.7.1 sound insulation ---------- */
  {
    id: "sound-insulation",
    media: { kind: "svg", src: "assets/svg/q-sound-discontinuous.svg",
             alt: "Two attached dwellings sharing a separating wall built as two structurally separate leaves with an air gap, noise from one side stopped at the gap",
             caption: "A 'discontinuous' separating wall — which room pairing forces it?" },
    figure: { src: "assets/photos/ncc-fig-10-7-1.png",
             alt: "NCC Figure 10.7.1",
             caption: "Required sound insulation between two attached dwellings. Source: ABCB Housing Provisions Standard 2025, Figure 10.7.1." },
    type: "quiz",
    topic: "Sound",
    question: "Between two attached homes, the separating wall must block sound as well as fire: an airborne rating ([[rw|Rw + Ctr]]) of at least 50, PLUS 'discontinuous construction' — the wall built as two structurally separate leaves (as pictured) — where one type of room backs onto another. Which room pairing forces that discontinuous wall?",
    choices: [
      { text: "A wet room or kitchen on one side backing a habitable room (not a kitchen) next door — the wall must be 'discontinuous'", correct: true,
        feedback: "Correct. A neighbour's flushing toilet or clattering kitchen against your bedroom wall needs more than mass — it needs discontinuous (structurally separated) construction so impact and water noise can't travel through the structure." },
      { text: "Two bedrooms back to back", correct: false,
        feedback: "Bedroom-to-bedroom just needs the Rw + Ctr ≥ 50 wall. The discontinuous-construction trigger is a NOISY room (bathroom, toilet, laundry, kitchen) backing a quiet habitable room next door." },
      { text: "Any two rooms — all separating walls must be discontinuous", correct: false,
        feedback: "Only the noisy-against-quiet pairing needs discontinuous construction. Other separating walls just need the ≥50 airborne rating and to run full height to the roof or an equivalent ceiling." }
    ],
    explanation:
      "10.7.1: a wall separating Class 1 dwellings needs Rw + Ctr (airborne) ≥ 50, and must be discontinuous construction where it separates a bathroom, sanitary compartment, laundry or kitchen from a habitable room (other than a kitchen) next door. It must continue to the underside of the roof or to a ceiling providing equivalent insulation. Note it's the SAME separating wall as the fire rules in Phase 6 — it now has two jobs, fire and sound. This satisfies H4P6.",
    source: {
      clause: "10.7.1", clauseTitle: "Sound insulation requirements", page: 282,
      quote:
"(1) A separating wall between Class 1 buildings, or a wall that separates a Class 1 building from a Class 10a building which is not associated with the Class 1 building must—\n" +
"(a) have an Rw + Ctr (airborne) not less than 50; and\n" +
"(b) be of discontinuous construction if it separates a bathroom, sanitary compartment, laundry or kitchen in one Class 1 building from a habitable room (other than a kitchen) in an adjoining Class 1 building (see Figure 10.7.1).\n" +
"(2) A wall required to have sound insulation must continue to— (a) the underside of the roof above; or (b) a ceiling that provides the sound insulation required for the wall."
    }
  },

  /* ---------- 10.8 condensation ---------- */
  {
    id: "condensation",
    media: { kind: "svg", src: "assets/svg/q-condensation.svg",
             alt: "A bathroom exhaust fan ducting up into the roof space",
             caption: "Where should the exhaust go?" },
    type: "quiz",
    topic: "Condensation",
    question: "Modern homes are sealed tight for energy efficiency — which traps moisture and breeds hidden mould. One key condensation rule: where does a bathroom exhaust fan or clothes dryer have to discharge?",
    choices: [
      { text: "Directly to outdoor air (via a duct if needed) — never into the roof space", correct: true,
        feedback: "Correct. Dumping warm, wet exhaust into the roof cavity is how modern ceilings grow black mould and roof timbers rot. The moisture must go all the way outside." },
      { text: "Into the roof space, where it disperses", correct: false,
        feedback: "That's the classic mistake the rule exists to stop. Roof spaces are cold; the moist air condenses on the underside of the roof and timbers, breeding mould and rot. Exhaust must reach outdoor air." },
      { text: "It doesn't matter as long as the fan works", correct: false,
        feedback: "Where it discharges is the whole point — a powerful fan venting into the ceiling just moves the moisture problem somewhere you can't see it. Outdoors, directly or by duct." }
    ],
    explanation:
      "Part 10.8 manages condensation, the modern airtight-home disease. Exhaust fans and venting dryers must discharge directly (or by duct) to outdoor air; non-continuous bathroom fans interlock with the light switch; and external walls must meet vapour-permeance values by climate zone (zones 6–8 even require a drained, ventilated cavity) so walls can dry outward. This satisfies H4P7 — letting the building breathe so trapped moisture doesn't rot it from within.",
    source: {
      clause: "10.8.2", clauseTitle: "Exhaust systems / Condensation management", page: 294,
      quote:
"(2) [An exhaust system] must discharge directly or via a shaft or duct to outdoor air.\n" +
"(3) Where a venting clothes dryer is installed, it must discharge directly or via a shaft or duct to outdoor air.\n" +
"(4) An exhaust system that is not run continuously and is serving a bathroom or sanitary compartment that is not ventilated in accordance with 10.6.2(a) must— (a) be interlocked with the room's light switch ...\n\n" +
"(Table 10.8 — external wall vapour permeance by climate zone; Note: a cavity must be provided in climate zones 6, 7 and 8.)"
    }
  },

  /* ---------- finale: bathroom inspection (defect) ---------- */
  {
    id: "bathroom-inspection",
    type: "defect",
    topic: "Bathroom inspection",
    media: { kind: "svg", src: "assets/svg/defect-bathroom.svg",
             alt: "Cutaway of a bathroom showing shower waterproofing, floor fall, exhaust fan and window, some details compliant and some not",
             caption: "" },
    question: "Final check of the bathroom — the room most likely to fail. Inspect the five marked spots: three breach what you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 6,  y: 30, w: 14, h: 26, defect: true,  label: "Shower walls waterproofed only to 1000 mm",
        feedback: "Defect. The waterproofing membrane on the shower wall stops about 1000 mm up — well short of the required 1800 mm. Spray above the line soaks straight into the wall and frame. (10.2.2(1)(b))" },
      { x: 44, y: 64, w: 20, h: 14, badge: "below", defect: true,  label: "Bathroom floor falls AWAY from the floor waste",
        feedback: "Defect. The floor slopes away from the drain, so water pools in the corner instead of draining. The floor plane must fall toward the waste, between 1:80 and 1:50. (10.2.12)" },
      { x: 70, y: 12, w: 16, h: 14, badge: "below", defect: true,  label: "Exhaust fan ducted into the roof space",
        feedback: "Defect. The exhaust fan dumps warm, moist air straight into the roof cavity — a mould and rot factory. It must discharge directly, or by duct, to outdoor air. (10.8.2)" },
      { x: 24, y: 70, w: 16, h: 12, badge: "below", defect: false, label: "Floor waste at the low point, correct fall",
        feedback: "That one's fine. The floor waste sits at the low point of a floor falling to it within the 1:80–1:50 range — water drains as it should. (10.2.12, 10.2.14)" },
      { x: 88, y: 40, w: 10, h: 22, badge: "below", defect: false, label: "Openable window for light and air",
        feedback: "That one's fine. The window gives the bathroom both natural light and 5% openable ventilation area to outdoor air — though a wet room like this usually has an exhaust fan as well. (10.5.1, 10.6.2)" }
    ],
    explanation:
      "Bathrooms fail more often than any other room, always for the same reasons: waterproofing that stops too low, floors that don't drain, and moist air dumped where it can't escape. Get the membrane to 1800 mm, fall the floor to the waste (1:80–1:50), and vent the fan outside — and the wettest room in the house stays sound for decades.",
    source: {
      clause: "10.2.2, 10.2.12 & 10.8.2", clauseTitle: "Shower waterproofing / Floor falls / Exhaust", page: 250,
      quote:
"10.2.2(1)(b) The walls of the shower area must be waterproof not less than 1800 mm above the floor substrate ...\n" +
"10.2.12 Where a floor waste is installed— (a) the minimum continuous fall of a floor plane to the waste must be 1:80; and (b) the maximum continuous fall ... must be 1:50.\n" +
"10.8.2(2) [An exhaust system] must discharge directly or via a shaft or duct to outdoor air."
    }
  }

  ]
};
