/* ============================================================
   PHASE 9 — ENERGY EFFICIENCY
   Content from: ABCB Housing Provisions Standard 2025, Section 13
   (building fabric, glazing, sealing, ceiling fans, whole-of-home,
   services) plus the NCC 2025 Volume Two layer (Part H6: H6P1,
   H6P2, H6D2).
   Editing guide: docs/CONTENT-GUIDE.md · Ledger: docs/COVERAGE.md
   ============================================================ */
window.NCC = window.NCC || {};
NCC.phaseData = NCC.phaseData || {};

NCC.phaseData["energy"] = {
  id: "energy",
  title: "Energy efficiency",
  intro:
    "Now the running costs — and the section that's grown the most. The house stands, sheds water, resists fire and is safe " +
    "and healthy to live in. Now it has to be cheap to run and easy on the planet. NCC 2025 raised the bar to " +
    "7 stars and added a 'whole-of-home' budget covering not just the building shell but its appliances and " +
    "even rooftop solar. Two ideas: wrap the house in a thermal blanket (insulation, good glazing, sealing) so " +
    "it barely needs heating or cooling, then make sure the equipment that remains is efficient.",
  learnList: [
    "The two compliance pathways: the fabric recipes vs whole-of-home energy budget",
    "Building fabric: insulation R-Values by climate zone",
    "Building sealing, and ceiling fans as low-energy cooling",
    "Glazing, services and the 7-star / whole-of-home requirements"
  ],

  questions: [

  /* ---------- V2 H6 rule book ---------- */
  {
    id: "rulebook-energy",
    type: "quiz",
    topic: "The rule book",
    question: "Volume Two's Part H6 sets TWO separate energy targets a home must hit. What are they?",
    choices: [
      { text: "Thermal performance (the shell — heating/cooling loads, ~7 stars) AND energy usage (the appliances — whole-of-home)", correct: true,
        feedback: "Correct. H6P1 governs the building SHELL (how little heating and cooling it needs), and H6P2 governs the ENERGY the home's services use (hot water, heating, cooling, pools) offset by solar. NCC 2025's big change was adding that second, whole-of-home target." },
      { text: "Just insulation thickness", correct: false,
        feedback: "Insulation is one input to the thermal-performance half (H6P1). But H6 also has a whole second requirement, H6P2, covering the energy your appliances actually use." },
      { text: "Only the cost of the power bill", correct: false,
        feedback: "It's about modelled energy, not dollars: H6P1 caps the shell's heating/cooling loads (the star rating), H6P2 caps the services' energy use (whole-of-home, offset by solar)." }
    ],
    explanation:
      "H6 has two performance requirements: H6P1 thermal performance (the building fabric must keep heating and cooling loads under the Specification 44 limits — the '7-star' shell) and H6P2 energy usage (the home's services must come in under an energy budget). H6D2 satisfies them via either house-energy-rating software OR the Housing Provisions recipes (Parts 13.2–13.5 for the shell, Part 13.6 for whole-of-home). NCC 2025 lifted the shell to 7 stars and added the whole-of-home budget — the biggest change in the 2025 edition.",
    source: {
      doc: "v2",
      clause: "H6P1, H6P2 & H6D2", clauseTitle: "Energy efficiency", page: 140,
      quote:
"H6P1 Thermal performance — (1) The total heating load of the habitable rooms and conditioned spaces in a building must not exceed the heating load limit in Specification 44. (2) The total cooling load ... must not exceed the cooling load limit in Specification 44. ...\n" +
"H6P2 Energy usage — (1) The energy value of a building's domestic services must not exceed 70% of the energy value with [reference 3-star heat-pump services] ...\n\n" +
"H6D2 — (1) Performance Requirement H6P1 ... is satisfied by— (a) complying with S42C2, using house energy rating software ...; or (b) complying with ... Part 13.2 (building fabric); Part 13.3 (external glazing and shading); Part 13.4 (building sealing); Part 13.5 (ceiling fans)."
    }
  },

  /* ---------- two pathways ---------- */
  {
    id: "two-pathways-energy",
    type: "quiz",
    topic: "Two pathways",
    question: "There are two ways to prove a house's shell is efficient enough. One is the 'recipe' path (follow the insulation/glazing/sealing tables). What's the other?",
    choices: [
      { text: "House energy rating software (NatHERS) — model the actual design and hit the star rating", correct: true,
        feedback: "Correct. Either follow the prescriptive Housing Provisions tables (Parts 13.2–13.5), OR have the design modelled in accredited software to demonstrate it meets the load limits. Software gives freedom (big windows, unusual shapes); the tables give certainty." },
      { text: "Just install a big solar system", correct: false,
        feedback: "Solar helps the whole-of-home energy budget (H6P2), but the SHELL still has to perform — via the fabric recipes or energy-rating software. You can't insulate a house with solar panels." },
      { text: "Pay a higher council fee", correct: false,
        feedback: "There's no buy-out. The two genuine pathways are: the prescriptive Housing Provisions recipes, or modelling in house energy rating software to the required star rating." }
    ],
    explanation:
      "This is the NCC's recurring 'recipe vs performance' choice, applied to energy. The recipe path: meet the Section 13 tables for fabric (13.2), glazing (13.3), sealing (13.4) and fans (13.5). The performance path: model the home in NatHERS-accredited software and show it meets the heating/cooling load limits. Most project homes use the recipes; architecturally adventurous houses (lots of glass) use software to trade one element off against another.",
    source: {
      doc: "v2",
      clause: "H6D2(1)", clauseTitle: "Application of Part H6", page: 145,
      quote:
"(1) Performance Requirement H6P1 for the thermal performance of the building is satisfied by—\n" +
"(a) complying with S42C2, using house energy rating software and S42C4(1); or\n" +
"(b) complying with the following parts of the ABCB Housing Provisions—\n" +
"(i) Part 13.2, for the building fabric; and (ii) Part 13.3, for the external glazing and shading; and (iii) Part 13.4, for building sealing; and (iv) Part 13.5, for ceiling fans."
    }
  },

  /* ---------- 13.2.3 insulation R-value ---------- */
  {
    id: "insulation-rvalue",
    type: "quiz",
    topic: "Building fabric",
    media: { kind: "svg", src: "assets/svg/q-insulation-zone.svg",
             alt: "The same house drawn twice, once in a cold climate and once in a hot climate, asking whether the insulation R-Value is the same",
             caption: "The NCC splits Australia into 8 energy climate zones — location drives the required R-Value." },
    question: "Roof and wall insulation is rated by [[r-value]] (resistance to heat flow — higher = better). Why does the required R-Value change depending on WHERE in Australia you build?",
    choices: [
      { text: "Different climate zones have different heating/cooling needs — cold Tasmania needs far more insulation than tropical Darwin", correct: true,
        feedback: "Correct. The NCC splits Australia into 8 climate zones; the insulation tables (13.2.3 onward) demand higher R-Values in zones with harsh winters or summers. Same house, different zone, different blanket." },
      { text: "Insulation is cheaper in some states", correct: false,
        feedback: "Price isn't it — it's climate. A house in alpine Tasmania loses heat fast and needs thick insulation; one in Darwin has different (cooling-dominated) needs. The required R-Value follows the climate zone." },
      { text: "It doesn't — R-Value is the same everywhere", correct: false,
        feedback: "It very much depends on location: the Housing Provisions has separate insulation tables for each of the 8 climate zones. Where you build determines how much thermal resistance the roof, walls and floor need." }
    ],
    explanation:
      "13.2.2–13.2.6: insulation complying with AS/NZS 4859.1, installed continuously (abutting, no gaps), with minimum Total R-Values for roofs/ceilings, walls and floors set by climate zone (the tables run zone 1 tropical to zone 8 alpine). The detail rules matter too — insulation must form a continuous barrier and account for thermal bridging through the framing. R-Value is to heat what the FRL minutes were to fire: the headline performance number.",
    source: {
      clause: "13.2.2 & 13.2.3", clauseTitle: "Building fabric thermal insulation / Roofs and ceilings", page: 345,
      quote:
"13.2.2(1) Where required, insulation must comply with AS/NZS 4859.1 and be installed so that it— (a) abuts or overlaps adjoining insulation other than at supporting members ...; and (b) forms a continuous barrier with ceilings, walls, bulkheads, floors or the like ...; and (c) does not affect the safe or effective operation of a domestic service or fitting.\n\n" +
"13.2.3(1) Roof and ceiling insulation must achieve the minimum R-Value— (a) in climate zone 1, in accordance with Tables 13.2.3a, 13.2.3b ...; [through] (h) in climate zone 8 ... — i.e. a different required R-Value table for each of the 8 climate zones."
    }
  },

  /* ---------- 13.4 building sealing ---------- */
  {
    id: "building-sealing",
    media: { kind: "svg", src: "assets/svg/q-building-sealing.svg",
             alt: "A house with doors, windows, a fan and chimney to be sealed",
             caption: "Every deliberate hole — what gets sealed?" },
    type: "quiz",
    topic: "Sealing",
    question: "Insulation is wasted if the warm (or cool) air just leaks out through gaps. The Housing Provisions' Part 13.4 ('building sealing') tackles draughts. Which of these must be sealed against air leakage?",
    choices: [
      { text: "External doors and openable windows serving conditioned spaces (and habitable rooms in cooler zones), plus exhaust fans, chimneys and roof lights", correct: true,
        feedback: "Correct. Every deliberate hole — doors, windows, vented appliances, the chimney damper — gets a seal so conditioned air stays in. A house can be beautifully insulated and still leak like a sieve through unsealed gaps." },
      { text: "Nothing — modern houses are airtight by default", correct: false,
        feedback: "The opposite: gaps around doors, windows, downlights, exhaust fans and chimneys are major heat-loss paths. Part 13.4 requires them sealed (draught strips, dampers, sealed penetrations)." },
      { text: "Only the front door", correct: false,
        feedback: "All external doors and openable windows to conditioned spaces (and to habitable rooms in zones 4–8), plus exhaust fans, chimneys/flues and roof lights — each needs its sealing measure." }
    ],
    explanation:
      "Part 13.4: external doors and openable windows serving conditioned spaces (and habitable rooms in climate zones 4–8) must be sealed — a draught-protection device on door bottoms, compressible strips elsewhere; chimneys and flues get closable dampers; exhaust fans get sealing; roof lights and ceiling/wall/floor penetrations are sealed too. Sealing is the cheap multiplier that makes the insulation actually work — and it ties back to Phase 7's condensation balance (seal, but still ventilate and let walls breathe).",
    source: {
      clause: "13.4.4", clauseTitle: "Building sealing — external windows and doors", page: 410,
      quote:
"(1) An external door, internal door between a Class 1 building and an unconditioned Class 10a building, openable window and other such opening must be sealed when serving— (a) a conditioned space; or (b) a habitable room in climate zones 4, 5, 6, 7 and 8.\n" +
"(2) A seal to restrict air infiltration— (a) for the bottom edge of a door, must be a draft protection device; and (b) for the other edges of a door or the edges of an openable window or other such opening, may be a foam or rubber compressible strip, fibrous seal or the like."
    }
  },

  /* ---------- 13.5 ceiling fans ---------- */
  {
    id: "ceiling-fans",
    media: { kind: "svg", src: "assets/svg/q-ceiling-fan.svg",
             alt: "A ceiling fan in a living room",
             caption: "Low-energy cooling." },
    type: "quiz",
    topic: "Low-energy cooling",
    question: "NCC 2025 made [[ceiling fan|ceiling fans]] mandatory in bedrooms and living rooms in the warm northern climate zones. Why require FANS rather than just more air conditioning?",
    choices: [
      { text: "A fan uses a tiny fraction of the energy of air conditioning and lets people stay comfortable at higher temperatures", correct: true,
        feedback: "Correct. A ceiling fan draws maybe 50 watts versus a 2000-watt air conditioner, and its breeze makes a room feel several degrees cooler — so the AC runs less, or not at all. Cheap comfort, tiny energy." },
      { text: "Fans heat the room in winter", correct: false,
        feedback: "Not the point (though they do help destratify warm air). The requirement is about cheap COOLING: in warm zones a fan delivers comfort for a fraction of an air conditioner's energy." },
      { text: "Fans are decorative", correct: false,
        feedback: "They're a genuine low-energy cooling strategy — which is why NCC 2025 mandates them (sized by room area in Table 13.5.2) in the hot climate zones, counting toward the energy-efficiency compliance." }
    ],
    explanation:
      "13.5.2: ceiling fans required (per Table 13.5.2, sized by room area — e.g. a 900 mm fan for a small bedroom up to 2 × 1400 mm fans for a large living room) in bedrooms and habitable rooms in climate zones 1, 2, 3 (and zone 5 in NSW/Qld). It's a recognition that moving air is the cheapest comfort there is — the fan lets occupants raise the thermostat or skip the AC entirely. A genuinely new-for-2025 efficiency lever.",
    source: {
      clause: "13.5.2", clauseTitle: "Ceiling fans", page: 416,
      quote:
"Ceiling fans must be installed in accordance with Table 13.5.2 in—\n" +
"(a) climate zones 1, 2 and 3; and\n" +
"(b) climate zone 5 in New South Wales and Queensland.\n\n" +
"Table 13.5.2 (extract): Size of room <15 m² — 1 × 900 mm fan; ≥20<25 m² — 1 × 1200 (bedroom) / 1 × 1400 (other habitable); ≥50 m² — 2 × 1400 (bedroom) / 3 × 1400 (other)."
    }
  },

  /* ---------- 13.6 whole-of-home ---------- */
  {
    id: "whole-of-home",
    type: "quiz",
    topic: "Whole-of-home",
    question: "NCC 2025's headline addition is the 'whole-of-home' energy budget (Part 13.6 of the Housing Provisions). Beyond the building shell, what does it count?",
    choices: [
      { text: "The home's major energy-using services — heating/cooling, hot water, pool and spa pumps — offset by any rooftop solar", correct: true,
        feedback: "Correct. It tallies the energy of the big appliances and subtracts on-site solar generation, so the whole house must hit an energy budget. Install efficient hot water and some solar, and you have headroom; pick energy-hungry gear and you must compensate elsewhere." },
      { text: "Only the lighting", correct: false,
        feedback: "Lighting is one small piece. Whole-of-home sums the major services — space heating/cooling, water heating, pool/spa pumps — net of rooftop photovoltaics." },
      { text: "The number of power points", correct: false,
        feedback: "It's about modelled energy USE of the major services, offset by solar generation — not the count of outlets. A genuinely whole-house budget, new in NCC 2025." }
    ],
    explanation:
      "13.6.2: the building's net equivalent energy usage (its major services' energy, MINUS on-site photovoltaic generation) must not exceed a floor-area-based allowance. It's why NCC 2025 effectively nudges homes toward efficient electric hot water, efficient heating/cooling and rooftop solar — the shell (H6P1) and the services (H6P2) are now budgeted together. Part 13.7 adds the supporting detail: insulated hot-water pipes and ducts, efficient lighting, pool/spa pump rules.",
    source: {
      clause: "13.6.2", clauseTitle: "Net equivalent energy usage", page: 417,
      quote:
"(1) The net equivalent energy usage of a building, calculated in accordance with (a), must not exceed the allowance calculated in accordance with (b), where (a) accounts for— the floor area factor ...; the main space conditioning and main water heater efficiency factor ...; the swimming pool pump energy usage ...; the spa pump energy usage ...; and the installed capacity of on-site photovoltaics (kW); and (b) is the floor area factor multiplied by the energy factor from Table 13.6.2b."
    }
  },

  /* ---------- 13.7 services ---------- */
  {
    id: "services-efficiency",
    media: { kind: "svg", src: "assets/svg/q-services-energy.svg",
             alt: "A hot-water pipe / duct in a wall to be insulated",
             caption: "Pipes and ducts in the wall." },
    type: "quiz",
    topic: "Services",
    question: "The Housing Provisions' Part 13.7 (services) mops up the supporting details that waste energy if ignored. Which is one of its requirements?",
    choices: [
      { text: "Hot-water pipes and heating/cooling ducts must be insulated, so heat isn't lost on the way to where it's used", correct: true,
        feedback: "Correct. An uninsulated hot-water pipe radiates heat into the wall the whole length of its run; an uninsulated duct in the roof loses conditioned air to the roof space. Lagging them keeps the energy where it's wanted." },
      { text: "All lights must be chandeliers", correct: false,
        feedback: "Lighting is covered, but the rule is about EFFICIENCY (limiting installed lighting power density / favouring efficient lamps), not fittings. The pipe/duct insulation requirement is the clear one here." },
      { text: "Ductwork must be made of copper", correct: false,
        feedback: "Material isn't specified — insulation IS. Heating/cooling ducts and central-heating water pipes must be insulated so they don't dump their energy into wall cavities and roof spaces." }
    ],
    explanation:
      "Part 13.7 (services): insulate central-heating water piping and heating/cooling ductwork; limit electric-resistance space heating; cap artificial lighting power density and favour efficient lamps; set rules for water heaters and pool/spa heating and pumping. It's the same logic as wall insulation, applied to the pipes and wires — stop energy leaking away between the source and the room. Together with the fabric, sealing, fans and whole-of-home budget, it completes the 2025 efficiency picture.",
    source: {
      clause: "13.7.2 & 13.7.4", clauseTitle: "Insulation of services / Heating and cooling ductwork", page: 412,
      quote:
"13.7.2 Insulation of services — Central heating water piping, and heating and cooling ductwork, must be provided with insulation [to the R-Values in the Part 13.7 tables] ...\n" +
"13.7.4 Heating and cooling ductwork — Ductwork and fittings in a heating or cooling system must be ... insulated ... to limit energy loss between the plant and the conditioned space."
    }
  },

  /* ---------- finale: energy inspection (defect) ---------- */
  {
    id: "energy-inspection",
    type: "defect",
    topic: "Energy efficiency inspection",
    media: { kind: "svg", src: "assets/svg/defect-energy.svg",
             alt: "Cutaway of a house showing ceiling insulation, ducts, a sealed door and solar panels, some details compliant and some not",
             caption: "" },
    question: "Final inspection of the whole build — the energy check. Inspect the five marked spots: three breach what you've just learned, the others pass.",
    defectsToFind: 3,
    hotspots: [
      { x: 30, y: 24, w: 26, h: 11, defect: true,  label: "Big gaps in the ceiling insulation",
        feedback: "Defect. The ceiling batts are pushed apart with bare gaps between them — insulation must form a CONTINUOUS barrier (abutting, no gaps), or heat pours through the holes. Even small gaps gut the effective R-Value. (13.2.2)" },
      { x: 57, y: 22, w: 16, h: 13, defect: true,  label: "Uninsulated duct in the roof space",
        feedback: "Defect. This heating/cooling duct runs bare through the cold roof space, leaking conditioned air the whole way. Ducts must be insulated so energy reaches the rooms, not the roof cavity. (13.7.4)" },
      { x: 9,  y: 54, w: 12, h: 26, defect: true,  label: "External door with a big gap underneath",
        feedback: "Defect. Daylight under the door means draughts straight into the conditioned space — it must be sealed with a draught-protection device on the bottom edge. (13.4.4)" },
      { x: 37, y: 41, w: 14, h: 14, badge: "below", defect: false, label: "Ceiling fan in the living room",
        feedback: "That one's fine. A correctly sized ceiling fan provides low-energy cooling in this habitable room — a fraction of an air conditioner's energy. (13.5.2)" },
      { x: 72, y: 20, w: 15, h: 12, badge: "below", defect: false, label: "Rooftop solar panels",
        feedback: "That one's fine. On-site photovoltaics generate energy that offsets the home's services in the whole-of-home budget — helping the house meet its energy allowance. (13.6.2)" }
    ],
    explanation:
      "Energy efficiency is one idea repeated: don't let energy leak. Continuous insulation (no gaps), insulated ducts and pipes, and sealed doors and windows keep the conditioned air where you paid to put it — then efficient services and a bit of solar do the rest. The compliant details (the fan and the solar) are the 2025 additions that make a 7-star, whole-of-home house realistic.",
    source: {
      clause: "13.2.2, 13.4.4 & 13.7.4", clauseTitle: "Insulation / Sealing / Ductwork", page: 345,
      quote:
"13.2.2(1) ... insulation must ... (a) abut or overlap adjoining insulation ...; and (b) form a continuous barrier with ceilings, walls ... that inherently contribute to the thermal barrier ...\n" +
"13.4.4(1) An external door ... openable window and other such opening must be sealed when serving— (a) a conditioned space ...\n" +
"13.7.4 Heating and cooling ductwork ... must be ... insulated ... to limit energy loss between the plant and the conditioned space."
    }
  }

  ]
};
