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

// const bigPicturePreview = document.querySelector('.big-picture__preview');   //mojno udalit pozje

//open modal
pictureCards.forEach((card) => {
  card.addEventListener('click', (evt) => {
    evt.preventDefault();
    userOpenModal();

    const bigPictureImg = document.querySelector('.big-picture__img');
    const bigPicture = bigPictureImg.querySelector('img');
    bigPicture.src = card.src;
    const photoId = card.dataset.id;
    const bigPictureData = pictures.find(photo => photo.id = photoId);
    picturePreviewModal.querySelector('.likes-count').textContent = bigPictureData.likes;
    picturePreviewModal.querySelector('.comments-count').textContent = bigPictureData.comments.length;
    picturePreviewModal.querySelector('.social__caption').textContent = bigPictureData.description;
    picturePreviewModal.querySelector('.social__picture').src = 'bigPictureData.comments.avatar';
    picturePreviewModal.querySelector('.social__picture').alt = 'bigPictureData.comments.name';
    picturePreviewModal.querySelector('.social__text').textContent = bigPictureData;

    // UNCOMMENT LATER
    // const commentCounts = picturePreviewModal.querySelector('.social__comment-count');
    // commentCounts.classList.add('hidden');
    // const commentLoader = picturePreviewModal.querySelector('.comments-loader');
    // commentLoader.classList.add('hidden');
    // document.body.classList.add('modal-open');
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

