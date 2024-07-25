import {
  initPriceTabs,
  setActivePriceCard,
} from '../js/modules/tabs/init-price-tabs';
import { initFaqTabs } from '../js/modules/tabs/init-faq-tabs';
import { setActiveInstructorSlideInfo, lazyLoadImages } from '../js/modules/utils/utils';
import { instructorSliderInit } from '../js/modules/sliders/instructor-slider-init';
import { reviewsSliderInit } from '../js/modules/sliders/reviews-slider-init';
import { play } from '../js/modules/video-player';
import { initFaqAccordions } from '../js/modules/accordions/faq-accordion';
import { validateForm } from '../js/modules/validate-form';

window.addEventListener('DOMContentLoaded', () => {
  lazyLoadImages();

  window.addEventListener('load', () => {
    play();
    initPriceTabs();
    setActivePriceCard();
    instructorSliderInit();
    setActiveInstructorSlideInfo();
    initFaqTabs();
    initFaqAccordions();
    reviewsSliderInit();

    validateForm();
  });
});

window.addEventListener('resize', lazyLoadImages);
