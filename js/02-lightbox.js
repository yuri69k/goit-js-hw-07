import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const markup = createImgCardsMarkup(galleryItems);

function createImgCardsMarkup(img) {
    return img
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}" title="${description}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
        })
        .join('');
}

galleryRef.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
});
