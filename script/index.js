const header = document.querySelector('.header');
const nav = header.querySelector('.header__nav');
const closeMenuButton = nav.querySelector('.nav__close-button');
const openMenuButton = header.querySelector('.header__menu-button');
const gallery = document.querySelector('.gallery');
const galleryImage = gallery.querySelector('.gallery__image');
const galleryBackButton = gallery.querySelector('.gallery__control_type_back');
const galleryForwardButton = gallery.querySelector('.gallery__control_type_forward');
const galleryContent = [
  {
    url: './images/gallery-1.jpg',
    name: 'Микроавтобус на дороге',
  }, 
  {
    url: './images/gallery-2.jpg',
    name: 'Вид салона вперед',
  },
  {
    url: './images/gallery-3.jpg',
    name: 'Вид салона назад',
  }
];
let activePhoto = 0;

function openMenu () {
  nav.classList.add('header__nav_opened');
}

function closeMenu () {
  nav.classList.remove('header__nav_opened');
}

function changePhotoAttribute (url, alt) {
  galleryImage.src = url;
  galleryImage.setAttribute.alt = alt;
}

function viewNextPhoto () {
  activePhoto = activePhoto === galleryContent.length - 1 ? 0 : activePhoto + 1;
  changePhotoAttribute(galleryContent[activePhoto].url, galleryContent[activePhoto].name);
}

function viewPreviousPhoto () {
  activePhoto = activePhoto === 0 ? galleryContent.length - 1 : activePhoto - 1;
  changePhotoAttribute(galleryContent[activePhoto].url, galleryContent[activePhoto].name);
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
galleryForwardButton.addEventListener('click', viewNextPhoto);
galleryBackButton.addEventListener('click', viewPreviousPhoto);