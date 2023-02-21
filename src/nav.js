const primaryMenu = document.querySelector(".header__nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

const requestButton = document.getElementById("req-button");
const overlayBackground = document.querySelector(".overlay-layer");
const overlay = document.querySelector(".overlay-section");
const overlayButton = document.getElementById("overlay-button");
const overlayVisible = overlay.getAttribute("data-visible");

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

navToggle.addEventListener("click", () => {
  const visible = navToggle.getAttribute("aria-expanded");

  if (visible === "false") {
    primaryMenu.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    disableScroll();
  } else {
    primaryMenu.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    enableScroll();
  }
});

requestButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (overlayVisible === "false") overlay.setAttribute("data-visible", "true");

  overlayBackground.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  disableScroll();
});

overlayButton.addEventListener("click", () => {
  if (overlayVisible === "false") overlay.setAttribute("data-visible", "false");

  overlayBackground.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  enableScroll();
});
