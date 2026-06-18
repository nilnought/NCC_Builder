/* ============================================================
   glossary.js — jargon links and the popup dictionary card.
   ------------------------------------------------------------
   WHAT THIS FILE DOES
   1. NCC.jargonize(text)
      Turns "[[term]]" or "[[term|shown words]]" markers inside
      question text into tappable <button class="jargon"> links.
      All other text is HTML-escaped (so content files can never
      accidentally inject HTML).
   2. Opens/closes the popup card (#jargon-overlay in index.html)
      showing the glossary entry: plain-English meaning, optional
      photo/diagram and photo credit.
   ============================================================ */
(function () {
  "use strict";
  window.NCC = window.NCC || {};

  /* --- tiny HTML escaper, used everywhere text meets innerHTML --- */
  NCC.esc = function (s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };

  /* --- [[term]] / [[term|display]] -> jargon buttons --- */
  NCC.jargonize = function (text) {
    var out = "";
    var rest = String(text);
    var m;
    // process one [[...]] marker at a time, escaping everything between
    while ((m = rest.match(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/)) !== null) {
      out += NCC.esc(rest.slice(0, m.index));
      var term = m[1].trim();
      var display = (m[2] || m[1]).trim();
      if (NCC.glossary[term.toLowerCase()]) {
        out += '<button type="button" class="jargon" data-term="' +
               NCC.esc(term.toLowerCase()) + '">' + NCC.esc(display) + "</button>";
      } else {
        // unknown term: show plainly so a typo never breaks the game
        out += NCC.esc(display);
      }
      rest = rest.slice(m.index + m[0].length);
    }
    return out + NCC.esc(rest);
  };

  /* --- open the popup for one glossary term --- */
  NCC.openJargon = function (termKey) {
    var entry = NCC.glossary[termKey];
    if (!entry) return;

    var html = '<p class="term">' + NCC.esc(termKey) + "</p>";
    html += "<p>" + NCC.esc(entry.plain) + "</p>";
    if (entry.image) {
      html += '<img src="' + NCC.esc(entry.image) + '" alt="' + NCC.esc(termKey) + '">';
      if (entry.caption) html += '<p class="muted">' + NCC.esc(entry.caption) + "</p>";
      if (entry.credit) {
        html += '<p class="credit">' +
          (entry.credit.url
            ? '<a href="' + NCC.esc(entry.credit.url) + '" target="_blank" rel="noopener">' + NCC.esc(entry.credit.text) + "</a>"
            : NCC.esc(entry.credit.text)) + "</p>";
      }
    }
    if (entry.official) {
      html += '<p class="muted"><strong>In the NCC:</strong> ' + NCC.esc(entry.official) + "</p>";
    }

    document.getElementById("jargon-body").innerHTML = html;
    document.getElementById("jargon-overlay").classList.remove("hidden");
  };

  function closeJargon() {
    document.getElementById("jargon-overlay").classList.add("hidden");
  }

  /* --- one delegated listener handles every jargon link, on any screen --- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".jargon") : null;
    if (btn) { NCC.openJargon(btn.getAttribute("data-term")); return; }
    if (e.target.id === "jargon-close") { closeJargon(); return; }
    if (e.target.id === "jargon-overlay") { closeJargon(); } // tap outside card
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeJargon();
  });
})();
