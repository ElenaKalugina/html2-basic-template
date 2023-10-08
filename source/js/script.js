/* в этот файл добавляет скрипты*/
const menuMain = document.querySelector('.nav__main-list');
const menuToggle = document.querySelector('.menu-button');

menuToggle.addEventListener('click', function () {
  if (menuMain.classList.contains('nav__main-list--closed')) {
    menuMain.classList.remove('nav__main-list--closed');
    menuMain.classList.add('nav__main-list--opened');
    menuToggle.classList.remove('menu-button--open');
    menuToggle.classList.add('menu-button--close');
  } else {
    menuMain.classList.remove('nav__main-list--opened');
    menuMain.classList.add('nav__main-list--closed');
    menuToggle.classList.remove('menu-button--close');
    menuToggle.classList.add('menu-button--open');
  }
});
