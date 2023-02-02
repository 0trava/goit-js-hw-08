

// Додаємо до проекту бібліотеку SimpleLightbox як залежність проекту через npm.
// Команда $ npm install simplelightbox
// Додатково імпортуємо стилі для плеєра
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Починаэмо відстежувати подію 
const galleryLibraryEL = document.querySelector('.gallery');


// Додаємо зображення на сайт з {galleryItems}
const imagesListTemplate = ({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
    </a>`;
  };

const addImg = galleryItems.map(imagesListTemplate).join('');
galleryLibraryEL.insertAdjacentHTML("afterbegin", addImg);

// Додаємо дію при кліку
galleryLibraryEL.addEventListener('click', oneGalleryImgClick );

// --------------------------------------------------------------------------------
function oneGalleryImgClick (evt){
    // Відміна поведінки за замовчуванням (відміна завантаження файлу)
    evt.preventDefault();
    const imageSelected = evt.target.getAttribute("data-source");

    // Перевірка що клік на зображенні
    if (!imageSelected){return;}
};
    // --------------------------------------------------------------------------------
// Підключення SimpleLightbox (модальне вікно)
new SimpleLightbox(".gallery a", {captionDelay: 250, showCounter:false });