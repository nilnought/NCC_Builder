/* ============================================================
   EDITION — which version of the NCC this game's content is based on.
   ------------------------------------------------------------
   WHY THIS FILE EXISTS
   The NCC is amended regularly. Clause numbers, wording and values
   can change between editions. Every question quotes its source
   clause in full, and every source panel shows this edition info,
   so a player always knows WHICH version the answer came from.

   WHEN THE NCC IS UPDATED
   1. Update the fields below.
   2. Re-verify every question's `source.quote`, `clause` and `page`
      against the new documents (docs/CONTENT-GUIDE.md explains how).
   MIGRATION LOG
   - 2026-06-11: migrated NCC 2022 (1 May 2023 amdt) → NCC 2025.
     All quotes re-verified. Real changes found: HP 4.2.22 rewritten
     (recess thickening rule), V2 H2D2 restructured into (1)/(2).
     All other quoted provisions unchanged; page numbers updated.
   ============================================================ */
window.NCC = window.NCC || {};

NCC.edition = {
  // The code edition all content is checked against
  code: "NCC 2025",
  amendment: "(2025 edition, adopted by States and Territories from 1 May 2025)",

  // Full titles of the source documents, as printed on their covers
  documents: {
    hp: "ABCB Housing Provisions Standard 2025",
    v2: "NCC 2025 Volume Two"
  },

  // Where to find the current, official, free copy
  officialUrl: "https://ncc.abcb.gov.au/",

  // Shown in the footer of every page
  authors: "Xiang Wang & Yue Sun. Email: wingxoushi@outlook.com",
  shortNote:
    "Unofficial study aid, not professional advice — always check the current NCC and your State/Territory variations."
};
