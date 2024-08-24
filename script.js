let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slide');
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', (event) => {
    showSlides();
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
