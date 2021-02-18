import {isEscEvent, isEnterEvent} from './util.js';
import { pictures } from './data.js';


const pictureCards = document.querySelectorAll('.picture__img');
const picturePreviewModal = document.querySelector('.big-picture');
const closeButton = document.querySelectorAll('.big-picture__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    userCloseModal();
  }
};

const userOpenModal = () => {
  picturePreviewModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const userCloseModal = () => {
  picturePreviewModal.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

// containers
const bigPicturePreview = document.querySelector('.big-picture__preview');
const bigPictureImg = document.querySelector('.big-picture__img');


//open modal
pictureCards.forEach((card) => {
  card.addEventListener('click', () => {
    userOpenModal();

    const photoId = card.dataset.id;
    const myPhotoData = pictures.find(photo => photo.id === photoId);

    bigPicturePreview.dataset.id = myPhotoData;
    const bigPicture = bigPictureImg.querySelector('img');
    bigPicture.src = card.src;

    pictures.forEach((photo) => {
      bigPicturePreview.querySelector('.likes-count').textContent = photo.likes;
      bigPicturePreview.querySelector('.comments-count').textContent = photo.comments.length;
      bigPicturePreview.querySelector('.social__caption').textContent = photo.description;
      bigPicturePreview.querySelector('.social__picture').src = photo.comments.avatar;
      bigPicturePreview.querySelector('.social__picture').alt = photo.comments.name;
      bigPicturePreview.querySelector('.social__text').textContent = photo.comments.message;
    });

  });

  card.addEventListener('keydown', (evt) => {
    if (isEnterEvent(evt)) {
      userOpenModal();
    }
  });
});

// close modal
closeButton.forEach((card) => {
  card.addEventListener('click', () => {
    userCloseModal();
  })
});
