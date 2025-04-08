const track = document.querySelector('.marrfa-carousel-track');
const slides = document.querySelectorAll('.marrfa-slide');
const dots = document.querySelectorAll('.marrfa-dot');
const nextBtn = document.querySelector('.marrfa-next');
const prevBtn = document.querySelector('.marrfa-prev');

let currentIndex = 0;

function updateCarousel(index) {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        updateCarousel(index);
    });
});

// Auto slide every 6 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
}, 6000);

// Resize fix
window.addEventListener('resize', () => updateCarousel(currentIndex));



