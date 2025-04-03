const slides = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dot');
const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');
let currentSlide = 0;

dots.forEach((element) => {
  element.addEventListener('click', () => {
    const dotId = (element.getAttribute('data-slide-dot'));
    showSlide(dotId);
    dotsViseble(dotId);
  });
});

function showSlide(dotId) {
  document.querySelector('.slider.visible').classList.remove('visible');
  document.querySelector('.slider[data-slide="' + dotId + '"]').classList.add('visible');

  prevButton.classList.toggle('disabled', dotId === 0);
  nextButton.classList.toggle('disabled', dotId === slides.length - 1);

  currentSlide = dotId;
}

function dotsViseble(dotId) {
  document.querySelector('.dot.active').classList.remove('active');
  document.querySelector('.dot[data-slide-dot="' + dotId + '"]').classList.add('active');
}

nextButton.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
    dotsViseble(currentSlide);
  }

});

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
    dotsViseble(currentSlide);
  }
});


showSlide(currentSlide);

setInterval(() => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;  
    showSlide(currentSlide);  
    dotsViseble(currentSlide);  
  }
}, 3000);