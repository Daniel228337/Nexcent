const dots = document.querySelectorAll('.dot');
const dotsActive = document.querySelectorAll('.dot.active');

dots.forEach((element) => {
  element.addEventListener('click', () => {
    const dotId = element.getAttribute('data-sldie-dot');
    return showSlide(dotId),dotsViseble(dotId);
  });
});

function showSlide(dotId) {
  document.querySelector('.slider.visible').classList.remove('visible');
  document
    .querySelector('.slider[data-slide="' + dotId + '"]')
    .classList.add('visible');
}


function dotsViseble(dotId) {
    document.querySelector('.dot.active').classList.remove('active');
    document
    .querySelector('.slider[data-slide="' + dotId + '"]')
    .classList.add('visible');
}