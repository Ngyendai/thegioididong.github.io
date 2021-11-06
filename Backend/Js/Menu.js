// Menu
const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav_menu");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
    if (menuLeft < 0) {
        menu.classList.add("show");
    }
});

closeNav.addEventListener("click", () => {
    if (menuLeft < 0) {
        menu.classList.remove("show");
    }
});
/// form

let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
    loginForm.classList.remove("active");
};