const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const nav = document.querySelector("nav");
openNav.addEventListener("click", () => {
  nav.classList.add("active-nav");
});
closeNav.addEventListener("click", () => {
  nav.classList.remove("active-nav");
});
