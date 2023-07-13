let swiper = new Swiper(".category__slider", {
  centeredSlides: false,
  grabCursor: true,

  breakpoints: {
    "@0.70": {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    "@0.95": {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    "@1.90": {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    "@2.04": {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
