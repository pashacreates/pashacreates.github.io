const burgerButton = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("open");
  menu.classList.toggle("close");
});

const menuButs = document.querySelectorAll(".menu-but");
const menuItems = document.querySelectorAll(".menu-item");
const submenuButs = document.querySelectorAll(".submenu-but");
const submenuItems = document.querySelectorAll(".submenu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.tagName == "A") {
      burgerButton.classList.remove("open");
      menu.classList.add("close");
    }
  });
});

function setAccordion(buttons, menuItems, activeClass) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.parentElement.classList.contains(activeClass)) {
        button.parentElement.classList.remove(activeClass);
      } else {
        menuItems.forEach((elem) => {
          elem.classList.remove(activeClass);
        });
        button.parentElement.classList.add(activeClass);
        button.parentElement.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    });
  });
}

setAccordion(submenuButs, submenuItems, "submenu-item-active");
setAccordion(menuButs, menuItems, "menu-item-active");
