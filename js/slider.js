let initSlider = function() {
  let sliderBlock = document.querySelector('.about');
  let sliderToggles = sliderBlock.querySelectorAll('.slider-controls button');
  let sliderItems = sliderBlock.querySelectorAll('.about-item');
  let currentSlide = 0;

  sliderToggles.forEach(function(sliderToggle, index) {
    sliderToggle.addEventListener('click', function() {
      sliderItems[currentSlide].classList.remove('about-item_current');
      sliderToggles[currentSlide].classList.remove('slider-control_current');
      sliderItems[index].classList.add('about-item_current');
      sliderToggle.classList.add('slider-control_current');
      currentSlide = index;
    })
  })
};

initSlider();
