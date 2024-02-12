let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let oppenheimer = document.querySelector(".main-poster");
let barbie = document.querySelector(".second-poster");
let impossible = document.querySelector(".third-poster");

let images = [barbie, impossible, oppenheimer];

leftArrow.addEventListener("click", () => {
  images.unshift(images.pop());
  setPositions();
});

rightArrow.addEventListener("click", () => {
  images.push(images.shift());
  setPositions();
});

let setPositions = () => {
  images[0].style.left = "0%";
  images[0].style.opacity = "0.3";
  images[0].style.zIndex = "0";
  images[1].style.left = "50%";
  images[1].style.opacity = "0.3";
  images[1].style.zIndex = "0";
  images[2].style.left = "25%";
  images[2].style.opacity = "1";
  images[2].style.zIndex = "10";
};
