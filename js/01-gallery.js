import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const markup = createImgCardsMarkup(galleryItems);

function createImgCardsMarkup(img) {
    return img
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
		<a class="gallery__link" href="${original}" title="${description}">
			<img class="gallery__image"
				src=${preview} 
				data-source=${original} 
				alt="${description}" 
			/>
		</a>
	</div>`;
        })
        .join('');
}

galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', onImgClick);

function onImgClick(e) {
    if (e.target.tagName !== 'IMG') return;
    e.preventDefault();

    const instance = basicLightbox.create(
        `<img src=${e.target.dataset.source} width="80%">`,
    );

    instance.show();

    document.addEventListener('keydown', onCloseModalEscape);

    function onCloseModalEscape(eventKeyboard) {
        if (eventKeyboard.code === 'Escape') instance.close();
        document.removeEventListener('keydown', onCloseModalEscape);
    }
}
