let desPro = document.querySelector(".container_info_pro");

document.querySelector("#infoPro").onclick = () => {
    desPro.classList.toggle("active");
};
document.querySelector("#infoPro1").onclick = () => {
    desPro.classList.toggle("active");
};
document.querySelector("#infoPro2").onclick = () => {
    desPro.classList.toggle("active");
};
document.querySelector("#infoPro3").onclick = () => {
    desPro.classList.toggle("active");
};
document.querySelector("#infoPro4").onclick = () => {
    desPro.classList.toggle("active");
};
document.querySelector("#infoPro5").onclick = () => {
    desPro.classList.toggle("active");
};
document.querySelector("#infoPro6").onclick = () => {
    desPro.classList.toggle("active");
};
document.querySelector("#infoPro7").onclick = () => {
    desPro.classList.toggle("active");
};
document.querySelector("#infoPro8").onclick = () => {
    desPro.classList.toggle("active");
};
document.querySelector("#container_info_pro-btn").onclick = () => {
    desPro.classList.remove("active");
};

let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body");
let tabIndicator = tabs.querySelector(".tab-indicator");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

for (let i = 0; i < tabHeaderNodes.length; i++) {
    tabHeaderNodes[i].addEventListener("click", function() {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderNodes[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyNodes[i].classList.add("active");
        tabIndicator.style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
    });
}

const myslide1 = document.querySelectorAll(".images"),
    dot1 = document.querySelectorAll(".dot");
let counter1 = 1;
slidefun1(counter1);

function autoSlide1() {
    counter1 += 1;
    slidefun1(counter1);
}

function plusSlides1(n) {
    counter1 += n;
    slidefun1(counter1);

    resetTimer1();
}

function currentSlide1(n) {
    counter1 = n;
    slidefun1(counter1);

    resetTimer1();
}
// Filter
const categoryTitle = document.querySelectorAll(".filter");
const categoryTitles = document.querySelectorAll(".filter1");
const allCategoryPosts = document.querySelectorAll(".all");

for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].addEventListener(
        "click",
        filterPosts.bind(this, categoryTitle[i])
    );
}
for (let i = 0; i < categoryTitles.length; i++) {
    categoryTitles[i].addEventListener(
        "click",
        filterPosts.bind(this, categoryTitles[i])
    );
}

function filterPosts(item) {
    changeActivePosition(item);
    for (let i = 0; i < allCategoryPosts.length; i++) {
        if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem) {
    for (let i = 0; i < categoryTitle.length; i++) {
        categoryTitle[i].classList.remove("active");
    }
    activeItem.classList.add("active");
}

function slidefun1(n) {
    let i;
    for (i = 0; i < myslide1.length; i++) {
        myslide1[i].style.display = "none";
    }
    for (i = 0; i < dot1.length; i++) {
        dot1[i].className = dot1[i].className.replace(" active", "");
    }
    if (n > myslide1.length) {
        counter1 = 1;
    }
    if (n < 1) {
        counter1 = myslide1.length;
    }
    myslide1[counter1 - 1].style.display = "block";
    dot1[counter1 - 1].className += " active";
}
var toggle = document
    .getElementById("toggle")
    .addEventListener("click", function() {
        var box = document.getElementById("show");
        var box1 = document.getElementById("hide");
        if (box.style.display == "block") {
            box.style.display = "none";
        } else {
            box.style.display = "block";
        }
    });
closeNav.addEventListener("click", () => {
    if (menuLeft < 0) {
        menu.classList.remove("show");
    }
});