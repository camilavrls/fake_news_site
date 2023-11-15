let currentIndex = 0;

function changeSlide(n) {
    currentIndex += n;
    showSlide();
}

function showSlide() {
    const slides = document.querySelector('.carousel-wrapper');

    if (currentIndex > slides.children.length - 1) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.children.length - 1;
    }

    slides.style.transition = 'transform 0.5s ease'; 
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function autoChangeSlide() {
    changeSlide(1); 
}

setInterval(autoChangeSlide, 15000);
