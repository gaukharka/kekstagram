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

//new version
const clickHandler = (pictureCards, pictures) => {
  pictureCards.addEventListener('click', (evt) => {
    evt.preventDefault();
    userOpenModal();

    picturePreviewModal.querySelector('.big-picture__img').querySelector('img').src = pictures.url;
    picturePreviewModal.querySelector('.likes-count').textContent = pictures.likes;
    picturePreviewModal.querySelector('.comments-count').textContent = pictures.comments.length;
    picturePreviewModal.querySelector('.social__caption').textContent = pictures.description;

    const comments = pictures.comments;
    const commentHandler = (comments) => {
      const commentsContainer = picturePreviewModal.querySelector('.social__comment');
      commentsContainer.querySelector('.social__picture').src = comments.avatar;
      commentsContainer.querySelector('.social__picture').alt = comments.name;
      commentsContainer.querySelector('.social__text').textContent = comments.message;
      picturePreviewModal.querySelector('.social__comments').append(commentsContainer);
    }

    for (let j = 0; j < comments.length; j++) {
      commentHandler(comments[j]);
    }

    const commentCounts = picturePreviewModal.querySelector('.social__comment-count');
    commentCounts.classList.add('hidden');
    const commentLoader = picturePreviewModal.querySelector('.comments-loader');
    commentLoader.classList.add('hidden');
    document.body.classList.add('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEnterEvent(evt)) {
      userOpenModal();
    }
  });
}

for (let i = 0; i < pictureCards.length; i++) {
  clickHandler(pictureCards[i], pictures[i]);
}

// close modal
closeButton.forEach((card) => {
  card.addEventListener('click', () => {
    userCloseModal();
  })
});

