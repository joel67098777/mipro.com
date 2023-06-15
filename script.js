// Carrusel automático
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

function showSlide(n) {
  slides.forEach((slide, index) => {
    if (index === n) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Cambiar imagen cada 3 segundos