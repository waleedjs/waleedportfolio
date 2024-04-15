
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 50,
    },

  },
  autoplay: {
    delay: 2500, // Adjust the delay (in milliseconds) between slides
    disableOnInteraction: false, // Set to false to keep autoplaying after user interactions
  },
});
