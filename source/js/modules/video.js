const videoBtn = document.querySelector('[data-video-button]');
const iframe = document.querySelector('[data-iframe]');
const poster = document.querySelector('[data-cover]');

// Функция для отображения iframe и скрытия кнопки и постера
const showIframe = () => {
  iframe.style.display = 'block';
  videoBtn.style.display = 'none';
  poster.style.display = 'none';
};

// Функция для инициализации видео
const initVideo = () => {
  if (iframe && videoBtn) {
    // Добавляем обработчик события клика на кнопке
    videoBtn.addEventListener('click', (event) => {
      event.preventDefault();
      showIframe();
    });
  }
};
export {initVideo};
