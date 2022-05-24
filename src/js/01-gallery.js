// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import imageTamplate from '../template/image-template.hbs';

const galleryElements = document.querySelector('.gallery');
const markupElements = createImageMarkup(galleryItems);

function createImageMarkup(galleryItems) {
  return galleryItems.map(imageTamplate).join('');
}
galleryElements.insertAdjacentHTML('beforeend', markupElements);
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
// lightBox.on('show.simplelightbox', function () {});

//console.log(galleryItems);
//
