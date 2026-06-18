(function () {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").catch(function (error) {
      console.warn("NCC Builder app install support could not start.", error);
    });
  });
})();
