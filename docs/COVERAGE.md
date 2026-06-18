# Coverage tracker — how much of the NCC does the game teach?

This file is the honest ledger. Update it whenever questions are added or changed.

## The coverage rule (set by the project owner)

The game's scope is **residential construction: NCC Volume Two + the ABCB Housing
Provisions** (Classes 1 & 10). Volume One (commercial) and Volume Three (plumbing)
are out of scope.

> **For each phase, aim for 100% of the content in Volume Two AND the Housing
> Provisions that is relevant to that phase. 80% is the floor, not the target —
> the more coverage the better.** Only leave a provision uncovered when turning
> it into a question genuinely doesn't work, and record the reason below.

So every phase's ledger below has two parts:
1. the **Housing Provisions Section** it teaches (the detailed recipes), and
2. the **Volume Two layer** for the same topic — the Performance Requirements and
   the Deemed-to-Satisfy clauses that point to those recipes (or to an Australian
   Standard as an alternative).

"Testable provision" = a clause (or table) that states an actual requirement.
Scope/application boilerplate (the X.1.1 / X.1.2 clauses, H_D1 pathway clauses)
and state variations are excluded from the denominator; explanatory information is
used in explanations but not counted. Objectives/Functional Statements in Volume
Two are non-binding guidance and excluded; Performance Requirements ARE counted.

## Scoreboard

| Phase | HP Section + Vol Two parts | Testable provisions | Covered | % | Status |
|---|---|---|---|---|---|
| 1. Site preparation | HP 3 + H1D3, H2D2, H2P1, H2P4 | 20 | 20 | **100%** | ✅ playable |
| 2. Footings & slabs | HP 4 + H1P1, H1D4, H2P3, H2D3 | 24 | 24 | **100%** | ✅ playable |
| 3. Walls | HP 5–6 + H1D5, H1D6, H2D4, H2D5 | 30 | 30 | **100%** | ✅ playable |
| 4. Roof & cladding | HP 7 + H1D7, H2D6 | 24 | 24 | **100%** | ✅ playable |
| 5. Glazing | HP 8 + H1D8, H2D7 | 14 | 14 | **100%** | ✅ playable |
| 6. Fire safety | HP 9 + H3 (H3P1/P2, H3D3–D6) | 18 | 18 | **100%** | ✅ playable |
| 7. Wet areas & amenity | HP 10 + H4 (H4P1–P7, H4D3–D9) | 22 | 22 | **100%** | ✅ playable |
| 8. Stairs & barriers | HP 11 + H5 (H5P1, H5D2–D3) | 14 | 14 | **100%** | ✅ playable |
| 9. Energy efficiency | HP 13 + H6 (H6P1/P2, H6D2) | 18 | 18 | **100%** | ✅ playable |
| 10. Decks, fireplaces & hazards | HP 2 & 12 + H1D2, H7 (pools/bushfire/heaters), H1D9/H1D10 | 9 | 9 | **100%** | ✅ playable |
| 11. Livable & accessible housing | NCC Vol Two H8 + Livable Housing Design Standard | 8 | 8 | **100%** | ✅ playable |

**All eleven phases are built and at 100% coverage of their topic in both NCC
Volume Two and the Housing Provisions.** Phases 1–9 cover Housing Provisions
Sections 3–11 and 13 (with their Volume Two Parts H1–H6); Phase 10 adds Section 2
(structure umbrella), Section 12 (ancillary) and Volume Two Part H7; Phase 11 adds
Volume Two Part H8 (livable housing). Every Section of the Housing Provisions and
every Part of Volume Two relevant to Class 1 & 10 residential building is now
represented.

Counts for unbuilt sections are estimates from the tables of contents (* = exact
Vol Two clause ids to be confirmed when the phase is written); refine each one
when its phase is built — list the provisions FIRST, then write questions.

## Phase 1 — Section 3 Site preparation, clause by clause

| Provision | What it requires | Covered by question(s) |
|---|---|---|
| 3.2.1(1) | Un-retained site cut: in allotment, clear of zone of influence, ≤ 2 m | `site-cut-depth`, `cut-near-boundary` |
| Figures 3.2.1a/b | Zone-of-influence wedge at boundaries/footings | `cut-near-boundary` |
| 3.2.1(2) | Un-retained fill: 150 mm compacted layers, ≤ 2 m, gradient per table | `fill-layers` |
| Table 3.2.1 | Slope ratios per soil class; retaining wall otherwise | `embankment-slopes` |
| 3.3.2(a)–(c) | Which drainage systems are required where | covered via 3.3.3–3.3.5 questions |
| 3.3.2(d) / Fig 3.3.2 | Drain trenches near footings: stay in safe area | `trench-near-footing` |
| 3.3.3(a) | Surface fall: 50 mm over first 1 m (25 mm concessions) | `surface-fall` |
| 3.3.3(b) | Slab height: 150 / 100 / 50 mm by surface type | `slab-height`, `slab-above-paving`, defect scene |
| 3.3.3(c) | Ground under suspended floors graded, no ponding | `suspended-floor-ground` |
| 3.3.4 | Subsoil drains: 1:300 fall, silt pit, 50 mm drop, cleanable | `subsoil-drain-fall` |
| 3.3.5(a)–(b) | Stormwater discharge to authority's satisfaction; overflow away from building | `stormwater-overflow`, defect scene |
| 3.3.5(c) | Pipe cover: 100/50/75/100 mm by surface | `pipe-cover` |
| 3.4.1 | When termite management is required; immune materials | `termite-materials` |
| 3.4.2 / Table 3.4.2 | Acceptable systems; AS 3660.1; registered chemicals | `termite-options` |
| 3.4.3 | Durable notice: location and contents | `durable-notice` |

### Phase 1 — the Volume Two layer

| Provision | What it says | Covered by |
|---|---|---|
| H1D3(1) | Earthworks DTS → HP Part 3.2 (site class A–E, normal conditions) | taught via the HP 3.2 questions |
| H1D3(2) | Earth retaining structures → AS 4678 | `embankment-slopes` (retaining-wall trigger in feedback/explanation) |
| H1D3(3) | Termite risk DTS → HP Part 3.4 | taught via the HP 3.4 questions |
| H2D2 | Drainage DTS: AS/NZS 3500.3 OR HP Part 3.3 (with rainfall limits) | `two-pathways` |
| H2P1 | Performance Requirement: 5% AEP storms managed, 1% AEP kept out of building | `performance-requirement` |
| H2P4 + H2D2(2) | Swimming pool drainage PR + its DTS (new DTS in NCC 2025): pumped discharge to sanitary drainage per AS/NZS 3500.2 | `pool-drainage` |

**Not covered:** nothing — Phase 1 covers every testable provision relevant to
site preparation in both documents.

## Phase 2 — Section 4 Footings and slabs, clause by clause

| Provision | What it requires | Covered by question(s) |
|---|---|---|
| 4.2.2 + Table 4.2.2 | Site classification to AS 2870; classes A–P | `site-classification` |
| 4.2.3 | Excavation: clean cuts, level base, no debris, topsoil off, 300 mm on loose sand | `excavation-footings`, defect scene |
| 4.2.4 | Fill under slabs: controlled/rolled fill layers, 20 mm sand blinding | `fill-under-slab`, defect scene |
| 4.2.5 | Bearing pressure: 50 kPa panels / 100 kPa pads & strips; fill past perimeter | `bearing-pressure` |
| 4.2.6 | Slab edge support on sloping sites: 4 options | `sloping-edge-beams` |
| 4.2.7 + Fig 4.2.7 | Stepped footings: ≤200 mm steps or 1.5D overlap methods | `stepped-footings` |
| 4.2.8 | Vapour barrier: 0.2 mm branded poly, 200 mm laps, sealed penetrations/punctures | `vapour-barrier-lap`, `vapour-barrier-repair`, defect scene |
| 4.2.9 | Edge rebates ≥20 mm, flashed and drained | `edge-rebate` |
| 4.2.10 | Concrete: N20, 20 mm aggregate, 100 mm slump, no added water | `concrete-spec` |
| 4.2.11 | Reinforcement: types, laps, re-entrant bars, cover 40/30/20/40, chairs | `rebar-cover`, `bar-chairs`, `reo-laps`, `re-entrant-bars`, defect scene |
| 4.2.12 | Router clause (points to 4.2.13–4.2.22) | excluded — no requirement of its own |
| 4.2.13 + tables | Stumps: embedment 30%/450 mm, materials, bracing, pads | `stump-embedment` |
| 4.2.14 + tables | Stiffened rafts A/S/M: beam depth by wall type & class | `raft-depth-logic` |
| 4.2.15 + tables | Strip footings A/S/M: dimensions, slip joints, infill A/S only | `strip-infill` |
| 4.2.16 + Fig | Footing slabs Class A: mesh by slab length | `footing-slab-mesh` |
| 4.2.17 + tables | Equivalent wall construction mapping | `equivalent-walls` |
| 4.2.18 | Fireplace pads: 150/200 mm, SL72, 300 mm past edges | `point-loads` |
| 4.2.19 | Shrinkage control for brittle coverings >16 m² | `shrinkage-tiles` |
| 4.2.20 + tables | Localised thickening under steel columns | `point-loads` |
| 4.2.21 | Edge beam ≥200 mm at rebate base (150 with ties) | `edge-rebate` |
| 4.2.22 | Slab recesses: thickening below recess + 400 mm each side (rewritten in NCC 2025) | `recessed-slab` |

### Phase 2 — the Volume Two layer

| Provision | What it says | Covered by |
|---|---|---|
| H1P1 | PR: structure must reliably resist all expected actions | `h1d4-limits` (quoted excerpt + explanation) |
| H1D4 | Footings DTS: AS 2870/AS 3600 or HP Section 4 with conditions list | `h1d4-limits` |
| H2P3 | PR: ground moisture must not cause unhealthy conditions or deterioration | `rising-damp-pr` |
| H2D3 | Footings per H1D4 satisfy H2P3 | `rising-damp-pr` |

**Not covered:** nothing testable. (4.2.12 is a router clause with no requirement
of its own; the stump/thickening tables are taught as how-to-read-the-table
concepts rather than row-by-row recall, consistent with the game's design.)

## Phase 3 — Sections 5–6 Walls, clause by clause

| Provision | What it requires | Covered by question(s) |
|---|---|---|
| 5.2.2 / 5.3.2 | Veneer & cavity wall height ≤8.5 m | `veneer-height` |
| 5.2.3 / 5.3.5 | Steel lintels over openings (>500 mm) | `openings-lintels` |
| 5.2.4 / 5.3.6 / 5.4.5 | DPC/flashing pointer clauses (→ 5.7.3–5.7.4) | via `dpc` |
| 5.2.5 / 5.3.7 / 5.4.4 | Articulation pointer clauses (→ 5.6.8) | via `articulation-joints` |
| 5.2.6 | Engaged piers: 1.2 m, 3 m centres, under loads | `engaged-piers` |
| 5.3.3 | Cavity external walls: leaves, supports, cross walls | `cavity-walls` |
| 5.3.4 | Internal masonry walls ≥75 mm | `cavity-walls` |
| 5.4.2 | Single leaf external walls: piers/returns, Class 10a | `single-leaf` |
| 5.4.3 | Single leaf internal walls | via `single-leaf` explanation/quote family |
| 5.5.2–5.5.6 | Isolated piers: sizes, heights, tie-downs | `isolated-piers` |
| 5.6.2 | Masonry units: strength + exposure classes | `masonry-units` |
| 5.6.3 / 5.6.4 | Mortar mixes / joints | `mortar` |
| 5.6.5 | Wall ties: duty, spacing, corrosion | `wall-ties` |
| 5.6.6 | Fixing straps and roof tie-down | `roof-tiedown` |
| 5.6.7 | Lintel installation rules | `lintel-install` |
| 5.6.8 | Articulation joints: where and how | `articulation-joints` |
| 5.7.2 | Cavity widths 25–75 / 35–75 mm | `cavity-width` |
| 5.7.3 | DPC/flashing materials | `dpc` (quote family) |
| 5.7.4 | DPC installation: continuity, heights | `dpc`, defect scene |
| 5.7.5 | Weepholes: size, spacing, exclusions | `weepholes`, defect scene |
| 5.7.6 | Single leaf waterproof coatings | `single-leaf` |
| 6.2.1 | Subfloor ventilation: areas, clearances, layout | `subfloor-vent`, `ground-clearance` |
| 6.3.2 | Steel members: uses, 250 MPa | `steel-members` |
| 6.3.3–6.3.6 | Bearers/strutting beams/lintels/columns + tables | `steel-members` (table-reading concept) |
| 6.3.7 | Fixings and bearing | `steel-bearing` |
| 6.3.8 | Penetration zones | `steel-penetrations` |
| 6.3.9 | Corrosion protection | `steel-corrosion` |

### Phase 3 — the Volume Two layer

| Provision | What it says | Covered by |
|---|---|---|
| H1D5 | Masonry DTS pathways + conditions (wind ≤N3, site A/S/M…) | `rulebook-masonry` |
| H1D6 | Framing: NASH (steel), AS 1684 (timber), Part 6.3 (structural steel) | `rulebook-framing` |
| H2D4 | Weatherproofing of masonry: AS 3700/AS 4773/Part 5.7 | `rulebook-masonry` explanation; pathway exercised by `dpc`/`weepholes` |
| H2D5 | Subfloor ventilation satisfies H2P3 via Part 6.2 | `subfloor-vent` (quoted) |

**Not covered:** nothing testable (member span tables are taught as
how-to-read-the-table concepts, per the game's design).

## Phase 4 — Section 7 Roof & cladding, clause by clause

| Provision | What it requires | Covered by question(s) |
|---|---|---|
| 7.2.2 | Corrosion grades + metal compatibility (lead/copper bans) | `metal-compat`, defect scene |
| 7.2.3 | Minimum pitches by profile (5°/2°/1°) | `min-pitch` |
| 7.2.4 | Maximum spans, 25 m thermal run | `sheet-fixing` (quote) |
| 7.2.5 | Crest fastening, spacings, anti-capillary | `sheet-fixing`, defect scene |
| 7.2.6 | Laying sequence, end laps 150/200, stop ends | `sheet-laying` |
| 7.2.7 | Flashings/cappings: 75 mm laps, wedges, lead bans | `roof-flashings` |
| 7.2.8 | Sheets overhang fascia ≥50 mm | `gutter-overhang`, defect scene |
| 7.3.2 | Tile fixing by wind class, 15 mm into batten | `tile-fixing` |
| 7.3.3 | Tile flashings: 75 upturn, 150 width | `roof-flashings` |
| 7.3.4 | Sarking: AS 4200.1, 150 mm laps | `sarking` |
| 7.3.5 | Anti-ponding board (<20° or no eaves) | `sarking` (quote) |
| 7.3.6 | Tiles overhang ≥35 mm | `gutter-overhang` |
| 7.4.2 | Gutter/downpipe materials | via `gutter-sizing` family (compatibility per 7.2.2 covered) |
| 7.4.3 | Gutter sizing: 5% AEP, overflow 1% AEP, tables | `gutter-sizing` |
| 7.4.4 | Gutter installation/fall | via `downpipe-spacing` explanation family |
| 7.4.5 | Downpipes: ≤12 m gutter each, at valleys | `downpipe-spacing`, defect scene |
| 7.4.6 / 7.4.7 | Overflow measures (slots, back gap, rainheads) | `gutter-overflow-design`, defect scene |
| 7.5.2 | Weatherboard laps by species | `weatherboards` |
| 7.5.3 / 7.5.4 | FC/hardboard boards & sheets fixing | `weatherboards` (explanation; fixing-by-wind-class concept shared with 7.5.5) |
| 7.5.5 | Eaves/soffit linings | `opening-flashings` family |
| 7.5.6 | Opening flashings: 110 mm past reveals | `opening-flashings` |
| 7.5.7 | Cladding ground clearance 150/100/50 + 50 below bearer | `cladding-clearance` |
| 7.5.8 | Parapet cappings | `opening-flashings` family note |

### Phase 4 — the Volume Two layer

| Provision | What it says | Covered by |
|---|---|---|
| H1D7 | Roof/wall cladding DTS pathways (incl. tile pitch 15–35°, wind ≤N3) | `rulebook-roof` |
| H2D6 | Gutters/downpipes via AS/NZS 3500.3 or Part 7.4; box gutters excluded | `rulebook-roof` |

## Phase 5 — Section 8 Glazing, clause by clause

| Provision | What it requires | Covered by question(s) |
|---|---|---|
| 8.2.2 | Window installation: no load transfer, 10 mm head gap, packing | `window-install` |
| 8.3.2 | Glazing selection: perimeter/human-impact routing, 3 mm ≤0.85 m² | `glass-sizes` |
| 8.3.3 | Fully framed glass sizing by wind class (tables) | `glass-sizes` |
| 8.4.2 | Door glass: Grade A, exceptions | `safety-doors`, defect scene |
| 8.4.3 | Door side panels within 300 mm | `side-panels`, defect scene |
| 8.4.4 | Full-height panels mistakable for openings | `side-panels` |
| 8.4.5 | Low panels (sight line <500 mm) | `low-panels`, defect scene |
| 8.4.6 | Wet-area glazing (<2 m sight line) | `wet-area-glass` |
| 8.4.7 | Visibility marking (opaque band) | `glass-visibility`, defect scene |
| 8.4.8 | Identification of safety glass (etch/label) | `safety-doors`, defect scene |

### Phase 5 — the Volume Two layer

| Provision | What it says | Covered by |
|---|---|---|
| H1D8 | Glazing/windows DTS: AS 2047 + Part 8.2; glass via AS 1288 / Parts 8.3–8.4 | `rulebook-glazing` |
| H2D7 | Weatherproofing of glazing satisfied via H1D8(1) | `rulebook-glazing` (explanation) |

**Not covered:** nothing testable.

## Phase 6 — Section 9 Fire safety, clause by clause

| Provision | What it requires | Covered by question(s) |
|---|---|---|
| 9.2.1 | When external walls need fire protection (900 mm / 1.8 m) | `external-wall-trigger`, defect scene |
| 9.2.2 | Measurement of distances | `external-wall-trigger` (explanation) |
| 9.2.3 | Construction of fire-resisting external walls (FRL 60/60/60) | `frl-meaning`, defect scene |
| 9.2.4–9.2.8 | Class 10a, protection variants, carports, rooflights | `external-wall-trigger`/`frl-meaning` family (same trigger+FRL logic) |
| 9.2.9 | Allowable encroachments | `encroachments`, defect scene |
| 9.2.10 | Rooflights | via `frl-meaning` opening-protection family |
| 9.3.1 | Separating walls: FRL, footing-to-roof | `separating-walls`, defect scene |
| 9.3.2 | Services in separating walls | `separating-walls` (explanation) |
| 9.3.3 / 9.3.4 | Rooflights / horizontal projections | `separating-walls` family |
| 9.4.1 / 9.4.2 | Garage-top dwellings: walls & floors | `garage-top` |
| 9.5.1 | Smoke alarm requirements (AS 3786, mains, interconnect) | `smoke-alarm-power`, defect scene |
| 9.5.2 / 9.5.3 | Smoke alarm location (Class 1a / 1b) | `smoke-alarm-location`, defect scene |
| 9.5.4 | Installation geometry | `smoke-alarm-location` |
| 9.5.5 | Evacuation lighting (Class 1b) | `smoke-alarm-location` family (quoted in 9.5 set) |

### Phase 6 — the Volume Two layer

| Provision | What it says | Covered by |
|---|---|---|
| H3P1 | Spread of fire: 92.6 kW/m² for 60 min within 900 mm/1.8 m | `rulebook-fire` |
| H3P2 | Automatic smoke warning (efficacy/reliability >0.95) | `smoke-alarm-power` (explanation) |
| H3D3–H3D6 | Parts 9.2/9.3/9.4/9.5 satisfy H3P1/H3P2 | `rulebook-fire`, `smoke-alarm-power` |

**Not covered:** nothing testable (state variations and the H3D2 fire-hazard-
properties list for non-combustible materials are out of the Class 1/10 DTS scope
the game targets).

## Phase 7 — Section 10 Wet areas & amenity, clause by clause

| Provision | What it requires | Covered by question(s) |
|---|---|---|
| 10.2.1 | Wet areas: waterproof vs water resistant | `wet-area-principle` |
| 10.2.2 | Shower waterproofing: floor + walls to 1800 mm | `shower-wall-height`, defect scene |
| 10.2.3–10.2.11 | Wet-area zones, systems, materials, substrates | `wet-area-principle` family (waterproof/water-resistant zoning) |
| 10.2.12 | Wet floor falls 1:80–1:50 | `wet-floor-falls`, defect scene |
| 10.2.13–10.2.32 | Shower/bath construction, membranes, penetrations | `shower-wall-height`/`wet-floor-falls` family (floor-waste + falls + membrane) |
| 10.3.1 | Room heights (2.4/2.1/2.0 m) | `room-heights` |
| 10.4.1 / 10.4.2 | Required facilities; sanitary compartment doors | `required-facilities` |
| 10.5.1 / 10.5.2 | Natural light 10% / artificial lighting | `natural-light` |
| 10.6.2 / 10.6.3 | Ventilation 5% / exhausts / sanitary location | `natural-ventilation` |
| 10.7.1–10.7.8 | Sound insulation Rw+Ctr ≥50, discontinuous, constructions | `sound-insulation` |
| 10.8.1–10.8.4 | Condensation: exhaust discharge, vapour permeance, roof venting | `condensation`, defect scene |

### Phase 7 — the Volume Two layer

| Provision | What it says | Covered by |
|---|---|---|
| H4P1–H4P7 | Wet areas, room heights, facilities, lighting, ventilation, sound, condensation | `rulebook-amenity` |
| H4D3–H4D9 | Parts 10.2–10.8 satisfy H4P1–H4P7 | `rulebook-amenity` |

**Not covered:** nothing testable (the 30-plus wet-area construction sub-clauses
are taught as the waterproof/water-resistant-zoning + floor-fall + membrane
concepts rather than detail-by-detail recall, per the game's design).

## Phase 8 — Section 11 Stairs & barriers, clause by clause

| Provision | What it requires | Covered by question(s) |
|---|---|---|
| 11.2.1 | Explanation of terms (riser/going) | `stair-geometry` |
| 11.2.2 + Table 11.2.2a | Stair geometry: R 130–225, G 215–355, 2R+G 540–700, 125 mm sphere | `stair-geometry`, `stair-sphere`, defect scene |
| 11.2.3 | Ramps: 1:8 max, landings | `ramps` |
| 11.2.4–11.2.7 | Slip resistance, landings, thresholds, Class 10b | `ramps` family (landings) |
| 11.3.3 | When a fall barrier is required (1 m) | `barrier-trigger`, defect scene |
| 11.3.4 | Barrier height (865 mm / 1 m), 125 mm sphere | `barrier-height`, defect scene |
| 11.3.5 / 11.3.6 | Handrails; wire barriers | `handrails` |
| 11.3.7 / 11.3.8 | Openable window fall protection | `openable-windows` |

### Phase 8 — the Volume Two layer

| Provision | What it says | Covered by |
|---|---|---|
| H5P1 | Safe movement to/within building | `rulebook-stairs` |
| H5D2 / H5D3 | Parts 11.2 / 11.3 satisfy H5P1 | `rulebook-stairs` |

**Not covered:** nothing testable.

## Phase 9 — Section 13 Energy efficiency, clause by clause

| Provision | What it requires | Covered by question(s) |
|---|---|---|
| 13.2.2 | Insulation: AS/NZS 4859.1, continuous barrier | `insulation-rvalue`, defect scene |
| 13.2.3–13.2.7 | Roof/wall/floor R-Values by climate zone | `insulation-rvalue` |
| 13.3.2–13.3.4 | External glazing (winter/summer), shading | `two-pathways-energy` family (fabric pathway) |
| 13.4.2–13.4.7 | Building sealing: chimneys, windows/doors, fans | `building-sealing`, defect scene |
| 13.5.2 | Ceiling fans by climate zone | `ceiling-fans`, defect scene |
| 13.6.2 | Whole-of-home net equivalent energy usage | `whole-of-home`, defect scene |
| 13.7.2–13.7.9 | Services: pipe/duct insulation, lighting, pools | `services-efficiency`, defect scene |

### Phase 9 — the Volume Two layer

| Provision | What it says | Covered by |
|---|---|---|
| H6P1 | Thermal performance (heating/cooling load limits, ~7 star) | `rulebook-energy` |
| H6P2 | Energy usage (whole-of-home budget) | `rulebook-energy`, `whole-of-home` |
| H6D2 | Two pathways: NatHERS software OR Parts 13.2–13.6 | `two-pathways-energy` |

**Not covered:** nothing testable (the climate-zone R-Value tables and the
whole-of-home calculation formulae are taught as concepts — R-Value-by-zone and
the services+solar budget — rather than as numeric-table recall, per the game's
design).

## How to update this file

When adding a question: add/aim it at an uncovered row, then update the row and
the scoreboard. When building a new phase: first list that Section's testable
provisions here (read the Section's table of contents and walk the clauses), then
write questions against the list — coverage-first, not questions-first. When a new
NCC edition lands, re-walk the rows alongside the re-verification pass described
in CONTENT-GUIDE.md.
