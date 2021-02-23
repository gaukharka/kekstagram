import {isEscEvent, createElement} from './util.js';
import { pictures } from './data.js';

const pictureCard = document.querySelectorAll('.picture');
const picturePreviewModal = document.querySelector('.big-picture');
const closeButton = picturePreviewModal.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');

const bigPictureImg = picturePreviewModal.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCount = picturePreviewModal.querySelector('.likes-count');
const bigPictureCommentsCount= picturePreviewModal.querySelector('.comments-count');
const bigPictureDescription= picturePreviewModal.querySelector('.social__caption');
const commentCounts = picturePreviewModal.querySelector('.social__comment-count');
const commentLoader = picturePreviewModal.querySelector('.comments-loader');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    userCloseModal();
  }
};

const onPopupCloseClick = (evt) => {
  evt.preventDefault();
  userCloseModal();
}

const userOpenModal = () => {
  picturePreviewModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  closeButton.addEventListener('click', onPopupCloseClick);
};

const userCloseModal = () => {
  picturePreviewModal.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  closeButton.removeEventListener('click', onPopupCloseClick);
};

const clickHandler = (evt, picture) => {
  socialComments.innerHTML = '';
  const {url, likes, comments, description} = picture;
  bigPictureImg.src = url;
  bigPictureLikesCount.textContent = likes;
  bigPictureCommentsCount.textContent = comments.length;
  bigPictureDescription.textContent = description;
  const commentFragment = document.createDocumentFragment();

  for (let j = 0; j < comments.length; j++) {
    const commentListElement = createElement('li', 'social__comment');
    const commentAvatar = createElement('img', 'social__picture');
    const {avatar, name, message} = comments[j];
    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentListElement.appendChild(commentAvatar);
    const commentText = createElement('p', 'social__text');
    commentText.textContent = message;
    commentListElement.appendChild(commentText);
    commentFragment.appendChild(commentListElement);
  }

  socialComments.appendChild(commentFragment);
  commentCounts.classList.add('hidden');
  commentLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  evt.preventDefault();
  userOpenModal();
};

for (let i = 0; i < pictureCard.length; i++) {
  pictureCard[i].addEventListener('click', (evt) => clickHandler(evt, pictures[i]));
}
