let bundle1 = 309;
let bundle2 = 440;

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
}

function changeDisplay(number) {
  const button = document.getElementById("button-" + number);
  const scheduleDiv = document.getElementById("schedule-" + number);
  const subtotal = document.getElementById("subtotal");
  const leftSide1 = document.getElementById("left-side--1");
  const leftSide2 = document.getElementById("left-side--2");

  leftSide1.classList.toggle("hidden");
  leftSide1.classList.toggle("flex");
  leftSide2.classList.toggle("flex");
  leftSide2.classList.toggle("hidden");

  if (number === 1) {
    subtotal.textContent += bundle1;
  } else {
    subtotal.textContent += bundle2;
  }

  if (scheduleDiv.style.display === "none") {
    scheduleDiv.style.display = "block";
  } else {
    scheduleDiv.style.display = "none";
  }
}

const ch1 = document.getElementById("ch-1");
const subtotal = document.getElementById("subtotal");
ch1.addEventListener("change", function () {
  if (this.checked) {
    bundle1 += 39;
    subtotal.textContent = bundle1;
  } else {
    bundle1 -= 39;
    subtotal.textContent = bundle1;
  }
});
