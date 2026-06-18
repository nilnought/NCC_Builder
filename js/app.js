/* ============================================================
   app.js — screens, navigation and saved progress.
   ------------------------------------------------------------
   SCREENS (all rendered into <main id="screen">):
     home         the phase map + the growing house drawing
     intro        a phase's story + "what you'll learn" + start
     question     one question at a time, with progress dots and
                  back / skip / exit navigation
     certificate  the end-of-phase reward

   SAVED PROGRESS lives in the browser's localStorage under one
   key. Delete that key (or use a private window) to reset.
   Shape: { done: { phaseId: {score,total,date} } }
   ============================================================ */
(function () {
  "use strict";
  window.NCC = window.NCC || {};
  var esc = function (s) { return NCC.esc(s); };
  var screenEl = document.getElementById("screen");

  /* ---------- saved progress ---------- */
  var STORE_KEY = "ncc-site-boss-v1";
  NCC.store = {
    load: function () {
      try {
        var raw = localStorage.getItem(STORE_KEY);
        var d = raw ? JSON.parse(raw) : null;
        if (d && d.done) return d;
      } catch (e) { /* corrupted or blocked storage: start fresh */ }
      return { done: {} };
    },
    save: function (d) {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(d)); } catch (e) { /* ignore */ }
    }
  };

  /* ============================================================
     The house drawing on the home screen.
     Each phase's `houseLayer` id matches a <g> below; the layer
     is revealed once that phase is completed. The dashed outline
     always shows the goal.
     ============================================================ */
  var HOUSE_SVG =
  '<svg viewBox="0 0 360 230" role="img" aria-label="Drawing of the house you are building; parts appear as you complete phases">' +
    // sky + untouched block (always visible)
    '<rect x="0" y="0" width="360" height="230" fill="#f2f9f6" rx="10"/>' +
    '<rect x="0" y="195" width="360" height="35" fill="#cbb289" rx="10"/>' +
    // dashed silhouette of the finished house = the goal
    '<g fill="none" stroke="#b9b6ad" stroke-width="1.5" stroke-dasharray="5 4">' +
      '<rect x="100" y="120" width="160" height="75"/>' +
      '<polygon points="90,120 270,120 180,62"/>' +
    "</g>" +
    // phase layers, hidden until earned
    '<g data-layer="ground" style="display:none">' +
      '<rect x="70" y="190" width="220" height="10" fill="#a8843f"/>' +
      '<path d="M40 200 q20 -8 40 -3" stroke="#1d9e75" stroke-width="2.5" fill="none"/>' +
      '<rect x="296" y="198" width="34" height="6" fill="#5f5e5a" rx="3"/>' +
    "</g>" +
    '<g data-layer="slab" style="display:none"><rect x="95" y="184" width="170" height="12" fill="#b9b6ad"/></g>' +
    '<g data-layer="walls" style="display:none"><rect x="100" y="120" width="160" height="64" fill="#f0e6d2" stroke="#d9c9a8"/></g>' +
    '<g data-layer="roof" style="display:none"><polygon points="88,120 272,120 180,60" fill="#c96f4a"/></g>' +
    '<g data-layer="windows" style="display:none">' +
      '<rect x="211" y="135" width="34" height="30" fill="#cfe8f0" stroke="#8aa6ad"/>' +
    "</g>" +
    '<g data-layer="alarm" style="display:none"><circle cx="180" cy="130" r="5" fill="#e24b4a"/><circle cx="180" cy="130" r="8" fill="none" stroke="#e24b4a" stroke-width="1" opacity="0.5"/></g>' +
    '<g data-layer="door" style="display:none"><rect x="166" y="140" width="28" height="44" fill="#8a6f4e"/><circle cx="188" cy="164" r="2" fill="#f0e6d2"/>' +
      // wet-area amenity: a little shower head + water drops where the 2nd window used to be
      '<rect x="118" y="129" width="14" height="3" fill="#8f8c84"/><circle cx="124" cy="136" r="4" fill="#8f8c84"/>' +
      '<g stroke="#2f9bd6" stroke-width="1.5"><line x1="120" y1="141" x2="118" y2="153"/><line x1="125" y1="141" x2="124" y2="156"/><line x1="130" y1="141" x2="131" y2="152"/></g></g>' +
    '<g data-layer="path" style="display:none"><polygon points="166,196 194,196 206,222 154,222" fill="#d3d1c7"/></g>' +
    '<g data-layer="sun" style="display:none"><polygon points="204,70 250,100 248,109 202,79" fill="#314a73" stroke="#1b2c47" stroke-width="1.5"/><g stroke="#5a76a8" stroke-width="1"><line x1="217" y1="74" x2="214" y2="84"/><line x1="229" y1="82" x2="226" y2="92"/><line x1="241" y1="90" x2="238" y2="100"/></g></g>' +
    // phase 10: a deck off the right side; phase 11: a step-free ramp to the door
    '<g data-layer="deck" style="display:none"><rect x="260" y="178" width="70" height="6" fill="#8a6f4e"/><rect x="262" y="184" width="4" height="14" fill="#6b5640"/><rect x="324" y="184" width="4" height="14" fill="#6b5640"/></g>' +
    '<g data-layer="ramp" style="display:none"><polygon points="142,198 200,198 200,184 142,198" fill="#c9b89a" stroke="#9a8a6a" stroke-width="1"/><line x1="142" y1="198" x2="200" y2="184" stroke="#7c6c4a" stroke-width="1.5"/></g>' +
  "</svg>";

  /* ---------- screen: home ---------- */
  function renderHome() {
    var data = NCC.store.load();
    var readyPhases = NCC.phases.filter(function (p) { return p.status === "ready"; });
    var doneCount = NCC.phases.filter(function (p) { return data.done[p.id]; }).length;
    var allDone = readyPhases.length > 0 &&
                  readyPhases.every(function (p) { return data.done[p.id]; });

    var html = "";

    // when every phase is passed, lead with a congratulations card
    if (allDone) {
      var totalChecks = readyPhases.reduce(function (a, p) {
        return a + (NCC.phaseData[p.id] ? NCC.phaseData[p.id].questions.length : 0); }, 0);
      var totalFirstTry = readyPhases.reduce(function (a, p) {
        return a + (data.done[p.id] ? data.done[p.id].score : 0); }, 0);
      html +=
        '<div class="certificate card congrats-card">' +
          '<div class="stamp">&#127881;</div>' +
          "<h2>Congratulations &mdash; you're up to code!</h2>" +
          "<p>You've passed the inspection on all " + readyPhases.length +
            " phases and built the whole house, from bare block to a finished, energy-rated home.</p>" +
          '<p class="muted">' + totalFirstTry + " of " + totalChecks +
            " checks passed on the first try across the whole build. " +
            "You now know your way around NCC Volume Two and the Housing Provisions &mdash; the real goal all along.</p>" +
        "</div>";
    }

    html +=
      '<div class="card"><div class="house-wrap">' + HOUSE_SVG + "</div>" +
      '<p class="progress-line">' +
        (doneCount === 0
          ? "An empty block, a set of plans, and the NCC. Pass each phase's inspection to build the house."
          : allDone
            ? "All " + NCC.phases.length + " phases passed &mdash; the house is complete."
            : doneCount + " of " + NCC.phases.length + " phases passed &mdash; the house is taking shape.") +
      "</p>";

    var doneTitles = NCC.phases.filter(function (p) { return data.done[p.id]; })
                               .map(function (p) { return p.title; });
    if (doneTitles.length) {
      html += '<p class="progress-line">Built so far: <strong>' + doneTitles.map(esc).join("</strong> &middot; <strong>") + "</strong></p>";
    }
    html += "</div>";
    if (doneCount > 0) {
      html +=
        '<p class="restart-wrap" style="text-align:center;margin:16px 0">' +
          '<button class="btn btn-small" id="btn-restart">&#8635; Start the whole build over</button></p>';
    }
    html += '<div class="phase-list">';

    NCC.phases.forEach(function (p) {
      var done = data.done[p.id];
      if (p.status === "ready") {
        html +=
          '<button class="phase-item" data-phase="' + esc(p.id) + '">' +
            '<span class="phase-num">' + p.num + "</span>" +
            "<span><span class=\"phase-title\">" + esc(p.title) + "</span><br>" +
            '<span class="phase-sub">' + esc(p.sub) + "</span></span>" +
            (done ? '<span class="phase-done" title="Passed">&#9989;</span>' : "") +
          "</button>";
      } else {
        html +=
          '<button class="phase-item" disabled>' +
            '<span class="phase-num">' + p.num + "</span>" +
            "<span><span class=\"phase-title\">" + esc(p.title) + "</span><br>" +
            '<span class="phase-sub">' + esc(p.sub) + " &mdash; coming soon</span></span>" +
            '<span class="phase-lock">&#128274;</span>' +
          "</button>";
      }
    });
    html += "</div>";
    screenEl.innerHTML = html;

    // reveal earned house layers (in whatever order the phases were passed)
    NCC.phases.forEach(function (p) {
      if (data.done[p.id]) {
        var g = screenEl.querySelector('[data-layer="' + p.houseLayer + '"]');
        if (g) g.style.display = "";
      }
    });

    screenEl.querySelectorAll(".phase-item[data-phase]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        renderIntro(btn.getAttribute("data-phase"));
      });
    });
    var restartBtn = document.getElementById("btn-restart");
    if (restartBtn) restartBtn.addEventListener("click", function () {
      if (window.confirm("Start over? This clears all your progress and empties the house back to a bare block.")) {
        NCC.store.save({ done: {} });
        renderHome();
      }
    });
  }

  /* ---------- screen: phase intro ---------- */
  function renderIntro(phaseId) {
    var phase = NCC.phaseData[phaseId];
    var meta = NCC.phases.find(function (p) { return p.id === phaseId; });
    var passed = NCC.store.load().done[phaseId]; // remembered across sessions
    var html =
      '<div class="card">' +
        '<p class="muted">Phase ' + meta.num + "</p>" +
        "<h2>" + esc(phase.title) + "</h2>" +
        (passed
          ? '<p class="q-passed-note">&#9989; Phase passed on ' + esc(passed.date) +
            " &mdash; best score " + passed.score + " of " + passed.total + " first try. Redoing it can only improve your score.</p>"
          : "") +
        (meta.photo
          ? '<figure class="q-media"><img src="' + esc(meta.photo.src) + '" alt="Site photo of this construction stage">' +
            "<figcaption>A real site at this stage: " + esc(meta.photo.caption) + ".</figcaption></figure>"
          : "") +
        "<p>" + NCC.jargonize(phase.intro) + "</p>" +
        "<h3>On the inspector's checklist</h3><ul>";
    phase.learnList.forEach(function (item) { html += "<li>" + NCC.jargonize(item) + "</li>"; });
    html +=
      "</ul>" +
        '<p style="margin-top:18px">' +
          '<button class="btn btn-primary" id="btn-start">' + (passed ? "Redo the phase" : "Start the phase") +
            " (" + phase.questions.length + " checks) &rarr;</button> " +
          '<button class="btn" id="btn-back">Back</button>' +
        "</p>" +
      "</div>";
    screenEl.innerHTML = html;
    document.getElementById("btn-start").addEventListener("click", function () { startPhase(phaseId); });
    document.getElementById("btn-back").addEventListener("click", renderHome);
  }

  /* ---------- screen: questions ----------
     run.results has one slot per question: null = not yet passed,
     {firstTry: bool} = passed. Players can move freely between
     questions (back / skip / exit) and return to skipped ones; the
     certificate appears once every slot is filled. */
  var run = null; // current play-through: {phaseId, qIndex, results[]}

  function startPhase(phaseId) {
    // (Re)starting forgets the previous try: the phase only counts as passed
    // (green tick + its house-drawing symbol) once it is COMPLETED again. So if
    // you redo a phase and don't finish it, its tick and symbol come off until
    // you do.
    var data = NCC.store.load();
    if (data.done[phaseId]) { delete data.done[phaseId]; NCC.store.save(data); }
    var total = NCC.phaseData[phaseId].questions.length;
    run = { phaseId: phaseId, qIndex: 0, results: new Array(total).fill(null) };
    renderCurrentQuestion();
  }

  /* strip [[jargon]] markers for places where plain text is needed */
  function stripJargon(s) {
    return String(s)
      .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
      .replace(/\[\[([^\]]+)\]\]/g, "$1");
  }

  function renderCurrentQuestion() {
    var phase = NCC.phaseData[run.phaseId];
    var total = phase.questions.length;
    var q = phase.questions[run.qIndex];

    var dots = "";
    for (var i = 0; i < total; i++) {
      dots += '<span class="q-dot' + (run.results[i] ? " done" : i === run.qIndex ? " now" : "") + '"></span>';
    }
    screenEl.innerHTML =
      '<div class="q-top"><div class="q-dots">' + dots + "</div>" +
      '<span class="q-count">' + (run.qIndex + 1) + " / " + total + "</span></div>" +
      '<div class="q-nav">' +
        '<button class="btn btn-small" id="btn-exit" title="Leave the phase">&#10005; Exit</button>' +
        '<button class="btn btn-small" id="btn-checklist" title="See the status of every check">&#9776; Checklist</button>' +
        '<span style="flex:1"></span>' +
        '<button class="btn btn-small" id="btn-prev"' + (run.qIndex === 0 ? " disabled" : "") + '>&larr; Previous</button>' +
        '<button class="btn btn-small" id="btn-skip">Skip for now &rarr;</button>' +
      "</div>" +
      (run.results[run.qIndex]
        ? '<p class="q-passed-note">&#10003; Already passed &mdash; you can try it again, but your result for it is locked in.</p>'
        : "") +
      '<div class="card" id="q-card"></div>';

    document.getElementById("btn-exit").addEventListener("click", renderHome);
    document.getElementById("btn-checklist").addEventListener("click", renderChecklist);
    document.getElementById("btn-prev").addEventListener("click", function () {
      if (run.qIndex > 0) { run.qIndex--; renderCurrentQuestion(); }
    });
    document.getElementById("btn-skip").addEventListener("click", function () {
      if (run.qIndex < total - 1) { run.qIndex++; renderCurrentQuestion(); }
      else renderChecklist(); // skipping past the end shows the checklist
    });

    NCC.renderQuestion(q, document.getElementById("q-card"), function (result) {
      // only the first completion of a question counts toward the score
      if (!run.results[run.qIndex]) run.results[run.qIndex] = { firstTry: result.firstTry };
      // move on: next unanswered question AFTER this one; at the end of the
      // list, show the checklist (or the certificate when nothing is left)
      if (run.results.every(function (r) { return r; })) { renderCertificate(); return; }
      for (var i = run.qIndex + 1; i < total; i++) {
        if (!run.results[i]) { run.qIndex = i; renderCurrentQuestion(); return; }
      }
      renderChecklist();
    });
    window.scrollTo(0, 0);
  }

  /* ---------- screen: end-of-phase checklist ----------
     Shown when the player reaches the end of the questions with some
     still skipped: lists every check's status so they can jump back
     to unfinished ones (or exit). The phase only passes when all are
     complete. */
  function renderChecklist() {
    var phase = NCC.phaseData[run.phaseId];
    var remaining = run.results.filter(function (r) { return !r; }).length;

    var html =
      '<div class="card"><h2>Inspection checklist</h2>' +
        '<p class="muted"><strong>' + remaining + " check" + (remaining === 1 ? "" : "s") + " still unfinished.</strong> " +
        "You must complete every check to pass the phase &mdash; tap a skipped one to finish it, or exit and come back later.</p></div>" +
      '<div class="phase-list">';

    phase.questions.forEach(function (q, i) {
      var done = !!run.results[i];
      var snippet = stripJargon(q.question);
      if (snippet.length > 70) snippet = snippet.slice(0, 70) + "&hellip;";
      html +=
        '<button class="phase-item" data-q="' + i + '">' +
          '<span class="phase-num">' + (i + 1) + "</span>" +
          "<span><span class=\"phase-title\">" + esc(q.topic) + "</span><br>" +
          '<span class="phase-sub">' + snippet + "</span></span>" +
          (done ? '<span class="phase-done" title="Completed">&#9989;</span>'
                : '<span class="phase-lock" title="Skipped">skipped</span>') +
        "</button>";
    });
    html += "</div>" +
      '<p style="margin-top:16px"><button class="btn" id="btn-exit-phase">Exit phase</button></p>';
    screenEl.innerHTML = html;

    screenEl.querySelectorAll(".phase-item[data-q]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        run.qIndex = Number(btn.getAttribute("data-q"));
        renderCurrentQuestion();
      });
    });
    document.getElementById("btn-exit-phase").addEventListener("click", renderHome);
    window.scrollTo(0, 0);
  }

  /* ---------- screen: certificate ---------- */
  function renderCertificate() {
    var phase = NCC.phaseData[run.phaseId];
    var meta = NCC.phases.find(function (p) { return p.id === run.phaseId; });
    var total = phase.questions.length;
    var firstTries = run.results.filter(function (r) { return r && r.firstTry; }).length;

    // save the pass
    var data = NCC.store.load();
    var prev = data.done[run.phaseId];
    if (!prev || firstTries > prev.score) {
      data.done[run.phaseId] = { score: firstTries, total: total, date: new Date().toISOString().slice(0, 10) };
    }
    NCC.store.save(data);

    // Always celebrate just THIS phase here; the whole-house "up to code"
    // congratulations lives only on the home screen, shown once every phase
    // is done (which may not happen in phase order).
    screenEl.innerHTML =
      '<div class="certificate card">' +
        '<div class="stamp">&#127942;</div>' +
        "<h2>Inspection passed</h2>" +
        "<p><strong>Phase " + meta.num + ": " + esc(phase.title) + "</strong></p>" +
        "<p>" + firstTries + " of " + total + " checks passed on the first try.</p>" +
        '<p class="muted">' +
          (firstTries === total
            ? "Flawless. The inspector didn't even get their red pen out."
            : "Every wrong try taught you a clause &mdash; replay the phase any time to go for a clean sheet.") +
        "</p>" +
        '<p style="margin-top:18px">' +
          '<button class="btn btn-primary" id="btn-home">Back to the build &rarr;</button> ' +
          '<button class="btn" id="btn-retry">Replay phase</button>' +
        "</p>" +
      "</div>";
    document.getElementById("btn-home").addEventListener("click", renderHome);
    document.getElementById("btn-retry").addEventListener("click", function () { startPhase(run.phaseId); });
    window.scrollTo(0, 0);
  }

  /* ---------- boot ---------- */
  document.getElementById("edition-line").innerHTML =
    "Content based on <strong>" + esc(NCC.edition.code) + "</strong> " + esc(NCC.edition.amendment) +
    " (" + esc(NCC.edition.documents.hp) + " and " + esc(NCC.edition.documents.v2) + "). " +
    'Official source: <a href="' + esc(NCC.edition.officialUrl) + '" target="_blank" rel="noopener">ncc.abcb.gov.au</a>.';
  document.getElementById("credit-line").innerHTML =
    "&copy; " + new Date().getFullYear() + " " + esc(NCC.edition.authors) + ". " + esc(NCC.edition.shortNote);
  renderHome();
})();
