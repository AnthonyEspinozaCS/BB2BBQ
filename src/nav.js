const primaryMenu = document.querySelector(".header__nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visible = navToggle.getAttribute("aria-expanded");

  if (visible === "false") {
    primaryMenu.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryMenu.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
