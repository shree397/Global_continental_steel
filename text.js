var currentSlide = 0;
var slides = document.querySelectorAll('.text-slider .content-slide');

function showSlide(n) {

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }


    currentSlide += n;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }


    slides[currentSlide].style.display = 'block';
    showSlide(0);

    function autoSlide() {
        showSlide(1);
    }
    setInterval(autoSlide, 3000);
    dots[slideIndex - 1].className += " active";
}