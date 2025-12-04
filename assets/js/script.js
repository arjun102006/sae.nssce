// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Hero Slider
function initSlider(sliderClass, slideClass, interval = 3000) {
    const sliders = document.querySelectorAll(`.${sliderClass}`);
    
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll(`.${slideClass}`);
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Auto-advance slides
        setInterval(nextSlide, interval);
    });
}

// Initialize all sliders
initSlider('hero-slider', 'hero-slide', 4000);
initSlider('message-slider', 'message-slide', 3500);

// Initialize team card sliders individually
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach((card, index) => {
    const slider = card.querySelector('.team-slider');
    const slides = slider.querySelectorAll('.team-slide');
    let currentSlide = 0;

    function showSlide(idx) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[idx].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Stagger the start times for different cards
    setTimeout(() => {
        setInterval(nextSlide, 3000);
    }, index * 500);
});

// Initialize event card sliders individually
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach((card, index) => {
    const slider = card.querySelector('.event-slider');
    const slides = slider.querySelectorAll('.event-slide');
    let currentSlide = 0;

    function showSlide(idx) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[idx].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Stagger the start times for different cards
    setTimeout(() => {
        setInterval(nextSlide, 3000);
    }, index * 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Add transition to header
header.style.transition = 'transform 0.3s ease';
