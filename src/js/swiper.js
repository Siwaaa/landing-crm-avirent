import Swiper from './swiper-bundle.min.js'

const swiperProblems = new Swiper('.problems__swiper', {
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

const swiperOtzovy = new Swiper('.otzovy__swiper', {
  slidesPerView: document.documentElement.clientWidth < 989 ? 1 : 3,
  centeredSlides: true,
  spaceBetween: 50,
  CSSWidthAndHeight: true,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: ".otzovy__nav-prev",
    nextEl: ".otzovy__nav-next",
  },
});