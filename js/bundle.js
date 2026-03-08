(() => {
  "use strict";
  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header"),
        headerHeight = header.offsetHeight;
      window.screen.width <= 540
        ? window.scrollY > 570
          ? (header.classList.add("fixed"),
            (document.body.style.paddingTop = headerHeight + "px"))
          : (header.classList.remove("fixed"),
            (document.body.style.paddingTop = "0"))
        : window.scrollY > 735
        ? (header.classList.add("fixed"),
          (document.body.style.paddingTop = headerHeight + "px"))
        : (header.classList.remove("fixed"),
          (document.body.style.paddingTop = "0"));
    }),
      (function () {
        let nav_items = document.querySelectorAll(".nav__link");
        nav_items.forEach((item) => {
          item.addEventListener("click", () => {
            nav_items.forEach((el) => el.classList.remove("nav__link_active")),
              item.classList.add("nav__link_active");
          });
        });
      })(),
      (function () {
        let nav_items = document.querySelectorAll(".aside__link");
        nav_items.forEach((item) => {
          item.addEventListener("click", () => {
            nav_items.forEach((el) =>
              el.classList.remove("aside__link_active")
            ),
              item.classList.add("aside__link_active");
          });
        });
      })(),
      (function () {
        const slider = document.querySelector("#range-input"),
          process = document.querySelector(".process");
        (process.textContent = slider.value + "%"),
          slider.addEventListener("input", () => {
            const value = slider.value;
            process.textContent = value + "%";
          });
      })(),
      (function () {
        const menu_btn_open = document.querySelector(".menu__button_open"),
          menu_btn_close = document.querySelector(".aside__button_close"),
          menu_wrapper = document.querySelector(".menu-wrapper"),
          menu_aside = document.querySelector(".menu-wrapper__aside");
        menu_btn_open.addEventListener("click", () => {
          (document.body.style.overflow = "hidden"),
            (document.documentElement.style.overflow = "hidden"),
            (menu_wrapper.style.display = "block"),
            (menu_aside.style.animation = "Menu_Show 1s ease"),
            (menu_aside.style.opacity = "1");
        }),
          menu_btn_close.addEventListener("click", () => {
            (menu_aside.style.animation = "Menu_Hidden 1s ease"),
              setTimeout(() => {
                menu_wrapper.style.display = "none";
              }, 1e3),
              (document.body.style.overflow = "auto"),
              (document.documentElement.style.overflow = "auto");
          });
      })();
  });
})();
