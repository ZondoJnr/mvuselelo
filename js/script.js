document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const overlayText = document.querySelector('.overlay-text'); // grab overlay
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    // Show overlay only if first slide (banner1) is active
    if (index === 0) {
      overlayText.style.display = 'block';
    } else {
      overlayText.style.display = 'none';
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initial display
  showSlide(currentIndex);

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);
});

