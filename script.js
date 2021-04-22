const btnPopup = document.querySelector("#btn-share-popup");
const btnNav = document.querySelector("#btn-share-nav-hidden");

const popUp = document.querySelectorAll("#popup");
const nav = document.querySelector("#nav");

btnPopup.addEventListener("click", function () {
  popUp.forEach((p) => p.classList.toggle("hidden"));
});

btnNav.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});
