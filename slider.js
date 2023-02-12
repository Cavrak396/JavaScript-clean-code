
let slider = document.querySelector(".portfolio__slider");
let prevBtn = document.querySelector(".portfolio__prev-button");
let nextBtn = document.querySelector(".portfolio__next-button");
let sliderCards = document.querySelectorAll(".portfolio__slider-card");


let currentPos = 0;

let moveleft = () => {
    if(currentPos === 0) return;
    currentPos --;
    slider.style.transform = `translateX(-${currentPos * 21}%)`;
}

let moveRight = () => {
    if(currentPos === sliderCards.length - 1) return;
    currentPos ++;
    slider.style.transform = `translateX(-${currentPos * 21}%)`;
}

prevBtn.addEventListener("click", moveleft);
nextBtn.addEventListener("click", moveRight);


//Classic slider

const leftButton = document.querySelector("#left-btn");
const rightButton = document.querySelector("#right-btn");
const sliderImg = document.querySelectorAll(".slider-images img");

let counter = 0;
sliderImg[counter].style.display = "block";

rightButton.addEventListener("click", () => {
    sliderImg[counter].style.display = "none";
    counter++;
    if(counter > sliderImg.length - 1) {
        counter = 0;
    }
    sliderImg[counter].style.display = "block";
});

leftButton.addEventListener("click", () => {
    sliderImg[counter].style.display = "none";
    counter--;
    if(counter < 0) {
        counter = sliderImg.length - 1;
    }
    sliderImg[counter].style.display = "block";
});
