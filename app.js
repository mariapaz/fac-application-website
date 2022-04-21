// Prompts section Hover effect
const links = document.querySelectorAll(".fac-prompt-grid__links ol li a");

links.forEach((f) =>
  f.addEventListener("mouseenter", function (x) {
    const open = document.querySelector(".open");
    open.classList.remove("open");
    const linkSelected = f.getAttribute("data-selected");
    const imgSelected = document.querySelector(
      ".fac-prompt-grid__image" + "." + linkSelected
    );
    imgSelected.classList.add("open");
  })
);
// Link navigation toggle
const minimise = document.getElementById("minimise");
const close = document.getElementById("close");
const open = document.getElementById("open");
minimise.addEventListener("click", function () {
  const barBody = document.getElementById("barBody");
  barBody.classList.toggle("none");
  close.classList.toggle("none");
  open.classList.toggle("none");
});
