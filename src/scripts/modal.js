// Универсальная функция для открытия попапа
export function openPopup(popup) {
  if (!popup) return; // Проверка на существование попапа
  popup.classList.add('popup_is-opened', 'popup_is-animated');
  document.addEventListener('keydown', (e) => closePopup(e, popup));
}

// Универсальная функция для закрытия попапа
export function closePopup(event, popup) {
  if (!popup) return; // Проверка на существование попапа
  if (event.target === popup || event.key === 'Escape') {
      popup.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', (e) => closePopup(e, popup));
  }
}

// Универсальная функция для настройки закрытия по кнопке
export function setupCloseButton(popup) {
  const closeButton = popup.querySelector('.popup__close-button');
  if (closeButton) {
      closeButton.addEventListener('click', () => {
          closePopup({ target: popup }, popup);
      });
  }
}