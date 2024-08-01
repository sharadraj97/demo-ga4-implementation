document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-banner .slide');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
});

document.querySelectorAll('.hero-button, .below-hero-button, .view-details, .add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        gtag('event', 'button_click', {
            'event_category': 'Button',
            'event_label': event.target.innerText
        });
    });
});
