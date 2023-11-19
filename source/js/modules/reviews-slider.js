import Swiper from '../vendor/swiper';
const sliderReviews = document.querySelector('.reviews__swiper');
const buttonNext = document.querySelector('.reviews__button--next');
const buttonPrev = document.querySelector('.reviews__button--prev');

const sliderOptions = {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  slidesPerView: 1,
};

const setSliderReviews = () => new Swiper(sliderReviews, sliderOptions);

const initSliderReviews = () => {
  if (sliderReviews) {
    setSliderReviews();
  }
};

export {initSliderReviews};
