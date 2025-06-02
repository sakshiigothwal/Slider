const slides = document.querySelectorAll('.slides');
const indicator = document.querySelectorAll('.indi li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currIndex = 0;

function updateSlider(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicator.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  indicator[index].classList.add('active');
}

function nextSlide() {
  currIndex = (currIndex + 1) % slides.length;
  updateSlider(currIndex);
}

function prevSlide() {
  currIndex = (currIndex - 1 + slides.length) % slides.length;
  updateSlider(currIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

indicator.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currIndex = index;
    updateSlider(currIndex);
  });
});
