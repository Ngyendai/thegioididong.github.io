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

const myslide = document.querySelectorAll(".images"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 1000);

function autoSlide() {
  counter += 1;
  slidefun(counter);
  resetTimer();
}

function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 1000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}
var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});
$(".carousel").owlCarousel({
  items: 3,
  loop: true,
  margin: 25,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left icon_left'></i>",
    "<i class='fas fa-chevron-right icon_right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// Filter
const categoryTitle = document.querySelectorAll(".filter");
const allCategoryPosts = document.querySelectorAll(".all");

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener(
    "click",
    filterPosts.bind(this, categoryTitle[i])
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

var glide = new Glide("#glide1", {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  breakpoints: {
    800: {
      perView: 1,
    },
    768: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
});
glide.mount();

/// form

let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};
