// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const galleryLibraryEL = document.querySelector('.gallery');

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
    const imageSelected = evt.target.getAttribute("data-source");
  
    // Відміна поведінки за замовчуванням (відміна завантаження файлу)
    evt.preventDefault();

    // Перевірка що клік на зображенні
    if (!imageSelected){return;}

};
    // --------------------------------------------------------------------------------
// Підключення SimpleLightbox (модальне вікно)
new SimpleLightbox(".gallery a", {captionDelay: 250, showCounter:false });