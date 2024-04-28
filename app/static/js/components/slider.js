const initializeSlider = (sliderId) => {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    let currentSlide = 0;

    const goToSlide = (n) => {
        slides[currentSlide].className = 'slide';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'slide showing';
    };

    const setupNavigation = () => {
        const nextButton = slider.querySelector('.next');
        const prevButton = slider.querySelector('.prev');
        
        nextButton.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
        });

        prevButton.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
        });
    };

    setupNavigation();
    autoPlay(); // Optionally implement this function if needed
};

document.addEventListener('DOMContentLoaded', () => {
    initializeSlider('featuredSlider');
});
