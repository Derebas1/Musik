var swiper = new Swiper(".testimonials__slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  breakpoints: {
    "@0.10": {
      slidesPerView: 1,
    },
    "@1.30": {
      slidesPerView: 2,
    },
    "@1.80": {
      slidesPerView: 3,
    },
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: -100,
    modifier: 1,
    slideShadows: true,
  },
});
