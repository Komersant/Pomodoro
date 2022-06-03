const slides = document.querySelectorAll(".slider-car__slide");

slides.forEach((slide) => {
  slide.addEventListener("click", function () {
    clearSlide();
    slide.classList.add("_active");
  });
});

const clearSlide = () => {
  slides.forEach((slide) => {
    const SlideClass = slide.classList.contains("_active");
    if (SlideClass) {
      slide.classList.remove("_active");
    }
  });
};
