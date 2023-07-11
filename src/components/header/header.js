const menuBtnSpeakers = document.querySelector(".menu__speakers");
const menuSpeakers = document.querySelector(
  ".header__content-menu-list-item-drop"
);

menuBtnSpeakers.addEventListener("click", () => {
  menuSpeakers.classList.toggle("header__content-menu-list-item-drop--open");
});

menuBtnSpeakers.addEventListener("click", () => {
  menuBtnSpeakers.classList.toggle("menu__speakers--open");
});

const menuBtnSchedule = document.querySelector(".menu__schedule");
const menuSchedule = document.querySelector(
  ".header__content-menu-list-item-drop-schedule"
);

menuBtnSchedule.addEventListener("click", () => {
  menuSchedule.classList.toggle(
    "header__content-menu-list-item-drop-schedule--open"
  );
});

menuBtnSchedule.addEventListener("click", () => {
  menuBtnSchedule.classList.toggle("menu__schedule--open");
});

const menuBtn = document.querySelector(".header__content-menu-burger");
const menu = document.querySelector(".header__content-menu-list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("header__content-menu-list--open");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("header__content-menu-burger--open");
});
