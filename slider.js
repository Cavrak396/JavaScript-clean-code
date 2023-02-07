let slider = document.querySelector(".portfolio__slider");
let prevBtn = document.querySelector(".portfolio__prev-button");
let nextBtn = document.querySelector(".portfolio__next-button");
let cards = document.querySelectorAll(".portfolio__slider-card");

let currentPos = 0;

let moveLeft = () => {
  if (currentPos === 0) return;
  currentPos -= 1;
  slider.style.transform = `translateX(-${currentPos * 21}%)`;
};
let moveRight = () => {
  if (currentPos === cards.length - 1) return;
  currentPos += 1;
  slider.style.transform = `translateX(-${currentPos * 21}%)`;
};
prevBtn.addEventListener("click", moveLeft);
nextBtn.addEventListener("click", moveRight);
