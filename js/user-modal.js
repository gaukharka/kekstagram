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

//open modal
pictureCards.forEach((card) => {
  card.addEventListener('click', (evt) => {
    evt.preventDefault();
    userOpenModal();

    const photoId = card.dataset.id;
    const bigPictureData = pictures.find(photo => photo.id === photoId);

    picturePreviewModal.querySelector('.big-picture__img').querySelector('img').src = bigPictureData.url;
    picturePreviewModal.querySelector('.likes-count').textContent = bigPictureData.likes;
    picturePreviewModal.querySelector('.comments-count').textContent = bigPictureData.comments.length;
    picturePreviewModal.querySelector('.social__caption').textContent = bigPictureData.description;

    const commentsTemplate = document.querySelector('.social__comment');
    for(let i=0; i <= bigPictureData.comments.length-1; i++) {
      commentsTemplate.querySelector('.social__picture').src = bigPictureData.comments[i].avatar;
      commentsTemplate.querySelector('.social__picture').alt = bigPictureData.comments[i].name;
      commentsTemplate.querySelector('.social__text').textContent = bigPictureData.comments[i].message;
    }
    picturePreviewModal.querySelector('.social__comments').append(commentsTemplate);

    const commentCounts = picturePreviewModal.querySelector('.social__comment-count');
    commentCounts.classList.add('hidden');
    const commentLoader = picturePreviewModal.querySelector('.comments-loader');
    commentLoader.classList.add('hidden');
    document.body.classList.add('modal-open');
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

