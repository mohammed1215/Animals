let nav = document.querySelector(".nav");
let trigger = false;
let bar = document.querySelector(`.bars i`);

function moving() {
  if (trigger == false) {
    trigger = true;
    nav.style.transform = `translateX(0px)`;
    bar.classList.remove("fa-bars");
    bar.classList.add("fa-plus");
  } else {
    trigger = false;
    nav.style.transform = `translateX(500px)`;
    bar.classList.add("fa-bars");
    bar.classList.remove("fa-plus");
  }
}
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
let imgHolderDog = document.querySelectorAll(`.breed-img-holder`);

imgHolderDog.forEach((img) => {
  img.clientHeight = img.clientWidth;
});

let scale = 1;
let map = document.querySelector(".map img");
function zoom(mood) {
  if (mood === "In") {
    scale += 0.5;
  } else {
    scale -= 0.5;
  }
  if (scale <= 0) {
    scale = 0.5;
  } else if (scale > 15) {
    scale = 15;
  }
  map.style.transform = `scale(${scale})`;
}

let date = new Date();

document.querySelector(".copyright").textContent = date.getFullYear();
