import {isEscEvent, isEnterEvent} from './util.js';
import { pictures } from './data.js';

const pictureCard = document.querySelectorAll('.picture');
const picturePreviewModal = document.querySelector('.big-picture');
const closeButton = document.querySelectorAll('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');   // вызываем <ul>

const bigPictureImg = picturePreviewModal.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCount = picturePreviewModal.querySelector('.likes-count');
const bigPictureCommentsCount= picturePreviewModal.querySelector('.comments-count');
const bigPictureDescription= picturePreviewModal.querySelector('.social__caption');
const commentCounts = picturePreviewModal.querySelector('.social__comment-count');
const commentLoader = picturePreviewModal.querySelector('.comments-loader');

// open-close functions
const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    userCloseModal();
  }
};

socialComments.innerHTML = ''; // set initial comments to empty
const clearComments = () => {
  socialComments.innerHTML = '';
};

const userOpenModal = () => {
  picturePreviewModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const userCloseModal = () => {
  picturePreviewModal.classList.add('hidden');
  clearComments();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

//create Comments Section Elements function
const createComment = (tagName, className) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
};

// on photo click handling function
const clickHandler = (evt, picture) => {
  evt.preventDefault();
  userOpenModal();
  bigPictureImg.src = picture.url;
  bigPictureLikesCount.textContent = picture.likes;
  bigPictureCommentsCount.textContent = picture.comments.length;
  bigPictureDescription.textContent = picture.description;
  const comments = picture.comments;

  const commentFragment = document.createDocumentFragment();
  for (let j = 0; j < comments.length; j++) {
    const commentListElement = createComment('li', 'social__comment');
    const commentAvatar = createComment('img', 'social__picture');
    commentAvatar.src = comments[j].avatar;
    commentAvatar.alt = comments[j].name;
    commentListElement.appendChild(commentAvatar);
    const commentText = createComment('p', 'social__text');
    commentText.textContent = comments[j].message;
    commentListElement.appendChild(commentText);
    commentFragment.appendChild(commentListElement);
  }
  socialComments.appendChild(commentFragment);

  commentCounts.classList.add('hidden');
  commentLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  // });
};

for (let i = 0; i < pictureCard.length; i++) {
  pictureCard[i].addEventListener('click', (evt) => clickHandler(evt, pictures[i]));
  document.addEventListener('keydown', (evt) => {
    if (isEnterEvent(evt)) {
      userOpenModal();
    }
  });
}

// close modal
closeButton.forEach((card) => {
  card.addEventListener('click', () => {
    userCloseModal();
  })
});

