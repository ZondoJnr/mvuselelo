document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initial display
  showSlide(currentIndex);

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);
})

  document.getElementById('whatsappBtn').addEventListener('click', function () {
    const form = document.getElementById('quoteForm');
    const name = form.name.value;
    const email = form.email.value;
    const service = form.service.value;
    const message = form.message.value;

    const text = encodeURIComponent(
      `*New Quote Request*\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
    );
    const whatsappURL = `https://wa.me/27799138027?text=${text}`;
    window.open(whatsappURL, '_blank');
  });

