(function () {
  "use strict";

  var deferredInstallPrompt = null;
  var installButton = document.getElementById("install-app");
  var installPanel = document.getElementById("install-panel");
  var installClose = document.getElementById("install-close");
  var installMessage = document.getElementById("install-message");
  var installSteps = document.getElementById("install-steps");

  function isStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }

  function isAppleMobile() {
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  }

  function isAndroid() {
    return /android/i.test(window.navigator.userAgent);
  }

  function showInstallButton() {
    if (!installButton || isStandalone()) return;
    installButton.classList.remove("hidden");
  }

  function hideInstallUi() {
    if (installButton) installButton.classList.add("hidden");
    if (installPanel) installPanel.classList.add("hidden");
    if (installButton) installButton.setAttribute("aria-expanded", "false");
  }

  function setInstallSteps(steps) {
    if (!installSteps) return;
    installSteps.textContent = "";
    steps.forEach(function (step) {
      var item = document.createElement("li");
      item.textContent = step;
      installSteps.appendChild(item);
    });
  }

  function showInstallPanel(message, steps) {
    if (!installPanel || !installMessage) return;
    installMessage.textContent = message;
    setInstallSteps(steps || []);
    installPanel.classList.remove("hidden");
    if (installButton) installButton.setAttribute("aria-expanded", "true");
  }

  function showManualInstallHelp() {
    if (isAppleMobile()) {
      showInstallPanel("Safari does not show an automatic install prompt, but you can still add NCC Builder to your Home Screen.", [
        "Tap Share in Safari.",
        "Choose Add to Home Screen.",
        "Tap Add."
      ]);
      return;
    }

    if (isAndroid()) {
      showInstallPanel("If your browser does not open the install prompt, use the browser menu instead.", [
        "Open the browser menu.",
        "Choose Install app or Add to Home screen.",
        "Confirm the install."
      ]);
      return;
    }

    showInstallPanel("If the browser prompt is not available, install NCC Builder from your browser controls.", [
      "Look for the install icon in the address bar.",
      "Or open the browser menu and choose Install NCC Builder.",
      "Confirm the install."
    ]);
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").catch(function (error) {
        console.warn("NCC Builder app install support could not start.", error);
      });
    });
  }

  if (installClose) {
    installClose.addEventListener("click", function () {
      if (installPanel) installPanel.classList.add("hidden");
      if (installButton) installButton.setAttribute("aria-expanded", "false");
    });
  }

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    showInstallButton();
  });

  window.addEventListener("appinstalled", function () {
    deferredInstallPrompt = null;
    hideInstallUi();
  });

  if (installButton) {
    installButton.addEventListener("click", function () {
      if (isStandalone()) {
        hideInstallUi();
        return;
      }

      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then(function (choice) {
          if (choice.outcome !== "accepted") showManualInstallHelp();
        }).catch(showManualInstallHelp).finally(function () {
          deferredInstallPrompt = null;
        });
        return;
      }

      showManualInstallHelp();
    });
  }

  window.addEventListener("load", function () {
    if (isStandalone()) {
      hideInstallUi();
    } else {
      showInstallButton();
    }
  });
})();
