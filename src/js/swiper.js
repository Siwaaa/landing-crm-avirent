const swiperProblems = new Swiper('.problems__swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 50,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.problems__nav',
    type: 'bullets',
  },
});

const swiperAdvantages = new Swiper('.advantages__body--swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 50,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.advantages__nav-pagination',
    type: 'bullets',
  },
  navigation: {
    prevEl: ".advantages__nav-prev",
    nextEl: ".advantages__nav-next",
  },
});