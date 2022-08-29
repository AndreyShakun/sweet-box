// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Фиксированная шапка
window.addEventListener ('scroll', function scrolled() {
  let scroll = window.pageYOffset;
  let header = document.querySelector(".header");

  if (scroll >= 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Выпадающие контакты в шапке 
const addressIcon = document.querySelector(".header-location__icon");
const phoneIcon = document.querySelector(".header-phone__icon");
const address = document.querySelector(".header-location__address");
const phone = document.querySelector(".header-phone__info");
const page = document.querySelector(".page");
let windowWidth = window.innerWidth;
addressIcon.addEventListener ('mouseup', function addressUp() {
  if (windowWidth <= 768) {
    address.classList.toggle("open");
    phone.classList.remove("open");
  }
});
phoneIcon.addEventListener ('mouseup', function addressUp() {
  if (windowWidth <= 768) {
    phone.classList.toggle("open");
    address.classList.remove("open");
  }
});
page.addEventListener ('mouseup', function addressUp() {
  if (windowWidth <= 768) {
    phone.classList.remove("open");
    address.classList.remove("open");
  }
});


