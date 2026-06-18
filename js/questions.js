/* ============================================================
   questions.js — renders the three question types.
   ------------------------------------------------------------
   PUBLIC API (used by app.js):
     NCC.renderQuestion(q, container, onComplete)
       q          one question object from a data/phase*.js file
       container  DOM element to render into
       onComplete called once the player finishes the question,
                  with {firstTry: true|false}

   The three types share the same skeleton:
     [topic chip] [picture] [question text] [interaction]
     ...player answers...
     [green feedback box] [explanation] [SOURCE PANEL] [Next]

   THE SOURCE PANEL is the heart of the game's "trust but verify"
   design: every answer shows the real clause, quoted word for
   word, with document title, clause number, page and NCC edition
   — plus a reminder that the NCC gets amended. See buildSource().
   ============================================================ */
(function () {
  "use strict";
  window.NCC = window.NCC || {};
  var esc = function (s) { return NCC.esc(s); };

  /* ---------- shared building blocks ---------- */

  function buildMedia(media) {
    if (!media) return "";
    var html = '<figure class="q-media"><img src="' + esc(media.src) + '" alt="' + esc(media.alt || "") + '">';
    var capParts = [];
    if (media.caption) capParts.push(esc(media.caption));
    if (media.credit) {
      capParts.push('<span class="credit">' +
        (media.credit.url
          ? '<a href="' + esc(media.credit.url) + '" target="_blank" rel="noopener">' + esc(media.credit.text) + "</a>"
          : esc(media.credit.text)) + "</span>");
    }
    if (capParts.length) html += "<figcaption>" + capParts.join(" — ") + "</figcaption>";
    return html + "</figure>";
  }

  /* The collapsible "Show the actual NCC clause" panel.
     source.doc selects the document: "v2" = NCC Volume Two,
     anything else (or omitted) = the ABCB Housing Provisions. */
  function buildSource(source) {
    if (!source) return "";
    var ed = NCC.edition;
    var docTitle = source.doc === "v2" ? ed.documents.v2 : ed.documents.hp;
    return (
      '<details class="source-panel">' +
        "<summary>Show the actual NCC clause</summary>" +
        '<div class="source-quote">' + esc(source.quote) + "</div>" +
        '<p class="source-cite">' +
          "<strong>" + esc(docTitle) + "</strong>, clause <strong>" + esc(source.clause) + "</strong>" +
          (source.clauseTitle ? " &ldquo;" + esc(source.clauseTitle) + "&rdquo;" : "") +
          (source.page ? ", page " + esc(source.page) : "") +
          " &mdash; " + esc(ed.code) + " " + esc(ed.amendment) + "." +
        "</p>" +
        '<p class="version-note">&#9888; The NCC is amended over time &mdash; this wording is from the edition above. ' +
          'Check the current version free at <a href="' + esc(ed.officialUrl) + '" target="_blank" rel="noopener">ncc.abcb.gov.au</a>.</p>' +
      "</details>"
    );
  }

  /* An explanation figure (shown AFTER the question is answered, inside the
     success box). Used for authoritative NCC figures that print the answer on
     themselves — fine once the player has answered, never as the prompt. */
  function buildFigure(fig) {
    if (!fig) return "";
    var html = '<figure class="q-media q-figure"><img src="' + esc(fig.src) + '" alt="' + esc(fig.alt || "") + '">';
    if (fig.caption) html += "<figcaption>" + esc(fig.caption) + "</figcaption>";
    return html + "</figure>";
  }

  /* Green "you got it" box shown when a question is solved. */
  function buildSuccess(q, nextLabel) {
    return (
      '<div class="feedback good">' +
        '<p class="fb-title">&#10003; Inspection point passed</p>' +
        "<p>" + NCC.jargonize(q.explanation || "") + "</p>" +
        buildFigure(q.figure) +
        buildSource(q.source) +
      "</div>" +
      '<p style="text-align:right;margin:14px 0 0">' +
        '<button class="btn btn-primary" data-action="next">' + esc(nextLabel || "Next") + " &rarr;</button>" +
      "</p>"
    );
  }

  /* ---------- type: quiz (multiple choice) ---------- */

  function renderQuiz(q, container, onComplete) {
    var firstTry = true;
    // shuffle the display order so the correct answer isn't always first
    // (content files list it first for readability; data-i keeps the
    // original index, so everything else works unchanged)
    var order = q.choices.map(function (_, i) { return i; });
    for (var s = order.length - 1; s > 0; s--) {
      var r = Math.floor(Math.random() * (s + 1));
      var tmp = order[s]; order[s] = order[r]; order[r] = tmp;
    }
    var html =
      '<span class="q-topic">' + esc(q.topic) + "</span>" +
      buildMedia(q.media) +
      '<p class="q-text">' + NCC.jargonize(q.question) + "</p>" +
      '<div class="choices">';
    order.forEach(function (i) {
      html += '<button class="choice" data-i="' + i + '">' + esc(q.choices[i].text) + "</button>";
    });
    html += "</div>" + '<div class="q-after"></div>';
    container.innerHTML = html;

    var after = container.querySelector(".q-after");
    container.querySelector(".choices").addEventListener("click", function (e) {
      var btn = e.target.closest(".choice");
      if (!btn || btn.disabled) return;
      var choice = q.choices[Number(btn.getAttribute("data-i"))];

      if (choice.correct) {
        btn.classList.add("right");
        container.querySelectorAll(".choice").forEach(function (b) { b.disabled = true; });
        after.innerHTML = buildSuccess(q);
        after.querySelector('[data-action="next"]').addEventListener("click", function () {
          onComplete({ firstTry: firstTry });
        });
      } else {
        firstTry = false;
        btn.classList.add("wrong");
        btn.disabled = true;
        after.innerHTML =
          '<div class="feedback bad"><p class="fb-title">Not this one</p><p>' +
          NCC.jargonize(choice.feedback || "Try again.") + "</p></div>";
      }
    });
  }

  /* ---------- type: number (slider) ---------- */

  function renderNumber(q, container, onComplete) {
    var s = q.slider;
    var firstTry = true;
    var solved = false;
    container.innerHTML =
      '<span class="q-topic">' + esc(q.topic) + "</span>" +
      buildMedia(q.media) +
      '<p class="q-text">' + NCC.jargonize(q.question) + "</p>" +
      '<div class="slider-row">' +
        '<input type="range" min="' + s.min + '" max="' + s.max + '" step="' + s.step + '" value="' + (s.start != null ? s.start : s.min) + '">' +
        '<span class="slider-value"><span class="num">' + (s.start != null ? s.start : s.min) + "</span> " + esc(s.unit) + "</span>" +
      "</div>" +
      '<p style="text-align:right;margin:0"><button class="btn btn-primary" data-action="check">Check with the inspector</button></p>' +
      '<div class="q-after"></div>';

    var range = container.querySelector('input[type="range"]');
    var numEl = container.querySelector(".slider-value .num");
    var after = container.querySelector(".q-after");

    range.addEventListener("input", function () {
      numEl.textContent = range.value;
      if (!solved) after.innerHTML = ""; // clear old hint while exploring
    });

    container.querySelector('[data-action="check"]').addEventListener("click", function () {
      if (solved) return;
      var val = Number(range.value);
      if (val === s.target) {
        solved = true;
        range.disabled = true;
        after.innerHTML = buildSuccess(q);
        after.querySelector('[data-action="next"]').addEventListener("click", function () {
          onComplete({ firstTry: firstTry });
        });
      } else {
        firstTry = false;
        var hint = (s.hints && s.hints[String(val)]) ||
                   (val < s.target ? "More than that — slide up and try again."
                                   : "Less than that — slide down and try again.");
        after.innerHTML =
          '<div class="feedback bad"><p class="fb-title">The inspector shakes their head (' +
          esc(String(val)) + " " + esc(s.unit) + ')</p><p>' + NCC.jargonize(hint) + "</p></div>";
      }
    });
  }

  /* ---------- type: defect (spot the problems in a picture) ---------- */

  function resizeHotspotBadges(stage) {
    var viewport = window.innerWidth || document.documentElement.clientWidth || 0;
    var maxSize = viewport <= 420 ? 11 : viewport <= 600 ? 13 : 17;

    stage.querySelectorAll(".hotspot").forEach(function (btn) {
      var r = btn.getBoundingClientRect();
      if (!r.width || !r.height) return;

      var size = Math.round(Math.min(maxSize, Math.max(7, Math.min(r.width, r.height) * 0.38)));
      btn.style.setProperty("--hotspot-badge-size", size + "px");
      btn.style.setProperty("--hotspot-badge-font", Math.max(6, Math.round(size * 0.62)) + "px");
      btn.style.setProperty("--hotspot-badge-offset", (-size - 2) + "px");
    });
  }

  function watchHotspotBadges(stage) {
    var img = stage.querySelector("img");
    var resize = function () { resizeHotspotBadges(stage); };

    window.requestAnimationFrame(resize);
    if (img && !img.complete) img.addEventListener("load", resize, { once: true });

    if (window.ResizeObserver) {
      var observer = new ResizeObserver(resize);
      observer.observe(stage);
      return;
    }

    window.addEventListener("resize", resize, { passive: true });
  }

  function renderDefect(q, container, onComplete) {
    var found = 0;
    var okClicked = false;
    var total = q.defectsToFind;

    var html =
      '<span class="q-topic">' + esc(q.topic) + "</span>" +
      '<p class="q-text">' + NCC.jargonize(q.question) + "</p>" +
      '<p class="defect-status">Found <strong class="found-n">0</strong> of ' + total + " problems</p>" +
      '<div class="defect-stage">' +
        '<img src="' + esc(q.media.src) + '" alt="' + esc(q.media.alt || "") + '">';
    q.hotspots.forEach(function (h, i) {
      html +=
        '<button class="hotspot' + (h.badge ? " badge-" + esc(h.badge) : "") + '" data-i="' + i + '" aria-label="' + esc(h.label) + '" ' +
        'style="left:' + h.x + "%;top:" + h.y + "%;width:" + h.w + "%;height:" + h.h + '%"></button>';
    });
    html += "</div>" + '<div class="defect-log"></div>' + '<div class="q-after"></div>';
    container.innerHTML = html;

    var log = container.querySelector(".defect-log");
    var after = container.querySelector(".q-after");
    watchHotspotBadges(container.querySelector(".defect-stage"));

    container.querySelector(".defect-stage").addEventListener("click", function (e) {
      var btn = e.target.closest(".hotspot");
      if (!btn || btn.disabled) return;
      var h = q.hotspots[Number(btn.getAttribute("data-i"))];
      btn.disabled = true;

      var box = document.createElement("div");
      if (h.defect) {
        btn.classList.add("found");
        found++;
        container.querySelector(".found-n").textContent = found;
        box.className = "feedback bad";
        box.innerHTML = '<p class="fb-title">&#9888; ' + esc(h.label) + "</p><p>" + NCC.jargonize(h.feedback) + "</p>";
      } else {
        okClicked = true;
        btn.classList.add("cleared");
        box.className = "feedback good";
        box.innerHTML = '<p class="fb-title">&#10003; ' + esc(h.label) + "</p><p>" + NCC.jargonize(h.feedback) + "</p>";
      }
      log.prepend(box);

      if (found === total && !container.querySelector('[data-action="next"]')) {
        // lock in the score now, but leave the remaining compliant
        // hotspots clickable so players can still learn what they are
        var firstTryFinal = !okClicked;
        after.innerHTML = buildSuccess(q, "Finish the inspection");
        after.querySelector('[data-action="next"]').addEventListener("click", function () {
          onComplete({ firstTry: firstTryFinal });
        });
      }
    });
  }

  /* ---------- dispatcher ---------- */

  NCC.renderQuestion = function (q, container, onComplete) {
    if (q.type === "quiz")   return renderQuiz(q, container, onComplete);
    if (q.type === "number") return renderNumber(q, container, onComplete);
    if (q.type === "defect") return renderDefect(q, container, onComplete);
    container.innerHTML = '<p>Unknown question type: ' + esc(q.type) + "</p>";
  };
})();
