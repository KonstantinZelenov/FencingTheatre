import { openPopup, closePopup, setupCloseButton } from './scripts/modal.js';

const mainContainer = document.querySelector('.main');
const hamburgerMenu = mainContainer.querySelector('.main-title__hamburger-menu-icon');
const contactsContainer = mainContainer.querySelector('.main-title__image-list-item_contacts');
const popupMainMenu = document.querySelector('.popup_main-menu');
const popupLinksMenu = document.querySelector('.popup_links-menu');

// Настройка попапа для гамбургер-меню
function setupHamburgerMenuPopup() {
    hamburgerMenu.addEventListener('click', () => openPopup(popupMainMenu));
    popupMainMenu.addEventListener('click', (e) => closePopup(e, popupMainMenu));
    setupCloseButton(popupMainMenu);
}

// Настройка попапа для контейнера с картинками
function setupContactsPopup() {
    contactsContainer.addEventListener('click', () => openPopup(popupLinksMenu));
    popupLinksMenu.addEventListener('click', (e) => closePopup(e, popupLinksMenu));
    setupCloseButton(popupLinksMenu);
}

// Настройка смены картинок в контейнере
function setupContactIcons() {
  // Находим контейнер с иконками по классу
  const contactIconsContainer = document.querySelector('.main-title__image-list-item_contacts');
  if (!contactIconsContainer) return; // Проверка на существование контейнера

  // Находим все иконки внутри контейнера
  const contactIcons = contactIconsContainer.querySelectorAll('.main-title__contacts-menu-icon');
  if (contactIcons.length === 0) return; // Проверка на наличие иконок

  let currentIndex = 0;

  function changeContactIcon() {
      // Убираем класс 'active' у текущей иконки
      contactIcons[currentIndex].classList.remove('active');

      // Переходим к следующей иконке (с учетом зацикливания)
      currentIndex = (currentIndex + 1) % contactIcons.length;

      // Добавляем класс 'active' новой иконке
      contactIcons[currentIndex].classList.add('active');
  }

  // Запускаем смену иконок каждые 7 секунд
  setInterval(changeContactIcon, 7000);
}

function setupTranslateIcons() {
  // Находим контейнер с иконками по классу
  const translateIconsContainer = document.querySelector('.main-title__image-list-item_translate');
  if (!translateIconsContainer) return; // Проверка на существование контейнера

  // Находим все иконки внутри контейнера
  const translateIcons = translateIconsContainer.querySelectorAll('.main-title__translate-menu-icon');
  if (translateIcons.length === 0) return; // Проверка на наличие иконок

  let currentIndex = 0;

  function changeTranslateIcon() {
      // Убираем класс 'active' у текущей иконки
      translateIcons[currentIndex].classList.remove('active');

      // Переходим к следующей иконке (с учетом зацикливания)
      currentIndex = (currentIndex + 1) % translateIcons.length;

      // Добавляем класс 'active' новой иконке
      translateIcons[currentIndex].classList.add('active');
  }

  // Запускаем смену иконок каждые 7 секунд
  setInterval(changeTranslateIcon, 7000);
}


// Инициализация всех функций
function init() {
    setupHamburgerMenuPopup();
    setupContactsPopup();
    setupContactIcons();
    setupTranslateIcons()
}

// Запуск инициализации после загрузки DOM
document.addEventListener('DOMContentLoaded', init);




