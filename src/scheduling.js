function linkDisplay(number) {
  const button = document.getElementById("button-link-" + number);
  const linkDiv = document.querySelector(".schedule__section-links-" + number);
  const threeButtonDiv = document.querySelector(".schedule__section-buttons");

  linkDiv.classList.toggle("hidden");
  linkDiv.classList.toggle("flex");
  let visible = linkDiv.getAttribute("data-visible");

  if (visible === "false") {
    linkDiv.setAttribute("data-visible", "true");
  } else {
    linkDiv.setAttribute("data-visible", "false");
  }

  visible = threeButtonDiv.getAttribute("data-visible");
  if (visible === "false") {
    threeButtonDiv.setAttribute("data-visible", "true");
    setTimeout(() => {
      threeButtonDiv.classList.toggle("hidden");
    }, 500);
  } else {
    threeButtonDiv.setAttribute("data-visible", "false");
    setTimeout(() => {
      threeButtonDiv.classList.toggle("hidden");
    }, 500);
  }

  console.log(getComputedStyle(linkDiv, null).display);
}

function changeDisplay(number) {
  const button = document.getElementById("button-" + number);
  const scheduleDiv = document.getElementById("schedule-" + number);

  if (scheduleDiv.style.display === "none") {
    scheduleDiv.style.display = "block";
  } else {
    scheduleDiv.style.display = "none";
  }
}
