const header = document.querySelector('.header');
const nav = header.querySelector('.header__nav');
const closeMenuButton = nav.querySelector('.nav__close-button');
const openMenuButton = header.querySelector('.header__menu-button');

function openMenu () {
  nav.classList.add('header__nav_opened');
}

function closeMenu () {
  nav.classList.remove('header__nav_opened');
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);