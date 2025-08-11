var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

// Manual navigation
var manualNav = function(manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};

buttons.forEach(function(btn, i) {
  btn.addEventListener("click", function() {
    manualNav(i);
    currentSlide = i;
  });
});

// Auto slider
var repeat = function() {
  let i = 1;
  var repeater = function() {
    setTimeout(function() {
      slides.forEach(function(slide) {
        slide.classList.remove("active");
      });
      buttons.forEach(function(btn) {
        btn.classList.remove("active");
      });

      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;

      if (i >= slides.length) {
        i = 0;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

AOS.init();
