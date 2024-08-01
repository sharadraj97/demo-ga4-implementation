document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.experience-slider .slide');
    const totalSlides = 2;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function showSlide(index) {
        const slidesContainer = document.querySelector('.experience-slider .slides');
        slidesContainer.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});





