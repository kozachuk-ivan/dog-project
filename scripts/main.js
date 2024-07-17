const btn = document.querySelector(".header__btn-menu");
const nav = document.querySelector(".header__nav");
const span = document.querySelector(".header__like");
const h1 = document.querySelector(".header__title");

btn.addEventListener("click", function () {
  btn.classList.toggle("header__btn-menu_open");
  nav.classList.toggle("header__nav_open");
  span.classList.toggle("header__like_open");
  h1.classList.toggle("header__title_open");
});
