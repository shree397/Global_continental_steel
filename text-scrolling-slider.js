const slider = document.querySelector("#slider-text ul");
const slides = document.querySelectorAll("#slider-text li");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const dotsContainer = document.querySelector(".slider-dots");

let slideIndex = 0;

// Create dots for each slide
slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        slideIndex = index;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".slider-dots span");

// Update the slider to show the current slide
function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
