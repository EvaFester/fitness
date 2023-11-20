
const pricesDataControls = document.querySelectorAll('[data-price-control]');
const prices = document.querySelectorAll('[data-price]');
const shadowPrices = document.querySelectorAll('[data-price-shadow]');
const lesson = document.querySelector('[data-lessons]');

const pricesPeriods = [
  [5000, 1700, 2700],
  [30000, 10200, 16200],
  [60000, 20400, 32400]
];

const lessonsPeriods = ['12 занятий', '72 занятия', '144 занятия'];

const changePrices = (index) => {
  lesson.textContent = lessonsPeriods[index];

  prices.forEach((price, indexPrice) => {
    price.textContent = pricesPeriods[index][indexPrice];
  });

  shadowPrices.forEach((price, indexPrice) => {
    price.textContent = pricesPeriods[index][indexPrice];
  });

  pricesDataControls.forEach((btn) => {
    btn.classList.remove('active');
  });

  pricesDataControls[index].classList.add('active');
};

const getPrices = () => {
  if (pricesDataControls.length > 0 && prices.length > 0) {
    changePrices(0);

    pricesDataControls.forEach((button, index) => {
      button.addEventListener('click', () => {
        changePrices(index);
      });
    });
  }
};

export {getPrices};
