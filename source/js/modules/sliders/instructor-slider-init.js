import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
const instructorSliderInit = () => {
  if (document.querySelector('[data-slider="instructor-slider"]')) {
    const instructorSlider = document.querySelector('[data-slider="instructor-slider"]');
    new Swiper(instructorSlider, {
      modules: [Navigation],
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      loop: true,
      navigation: {
        nextEl: '.instructor__arrow--next',
        prevEl: '.instructor__arrow--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          initialSlide: 0,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          simulateTouch: false,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }
};

export { instructorSliderInit };
