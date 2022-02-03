const header = document.querySelector('.header');
const nav = header.querySelector('.header__nav');
const headerLogo = header.querySelector('.logo_place_header');
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
const pressCard = document.querySelector('.card');
const pressName = pressCard.querySelector('.card__content-title');
const pressText = pressCard.querySelector('.card__content-text');
const pressLink = pressCard.querySelector('.card__button');
const pressPaginations = pressCard.querySelectorAll('.card__navigation');
const pressContent = [
  {
    magazine: 'Engadget: ',
    content: 'VW’s e-BULLI concept shows how your classic van can become an EV.',
    link: 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html',
  }, {
    magazine: 'Drive.ru: ',
    content: 'Вэн Volkswagen e-Bulli скрестил классику с современной техникой.',
    link: 'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html',
  }
];

function openMenu () {
  headerLogo.classList.add('logo_hidden');
  openMenuButton.classList.add('header__menu-button_hidden');
  nav.classList.add('header__nav_opened');
}

function closeMenu () {
  headerLogo.classList.remove('logo_hidden');
  openMenuButton.classList.remove('header__menu-button_hidden');
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

function changeCardContent (evt) {
  const contentIndex = evt.target.dataset.number;
  pressPaginations.forEach(it => {
    
    if (it.disabled) {
      it.removeAttribute('disabled');
    }
  });
  evt.target.setAttribute('disabled', '');
  pressName.textContent = pressContent[contentIndex].magazine;
  pressText.textContent = pressContent[contentIndex].content;
  pressLink.href = pressContent[contentIndex].link;
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
galleryForwardButton.addEventListener('click', viewNextPhoto);
galleryBackButton.addEventListener('click', viewPreviousPhoto);
pressPaginations.forEach(it => {
  it.addEventListener('click', changeCardContent);
});