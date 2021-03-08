import {picturePreviewModal, openModal} from './user-modal.js';
import {createElement} from './util.js';

const socialComments = document.querySelector('.social__comments');
const bigPictureImg = picturePreviewModal.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCount = picturePreviewModal.querySelector('.likes-count');
const bigPictureCommentsCount= picturePreviewModal.querySelector('.comments-count');
const bigPictureDescription= picturePreviewModal.querySelector('.social__caption');
// const commentCounts = picturePreviewModal.querySelector('.social__comment-count');
const commentLoader = picturePreviewModal.querySelector('.comments-loader');

const COMMENTS_MAX = 5;

const moreComments = () => {
  commentLoader.addEventListener('click', (evt) => {
    evt.preventDefault;
    evt.target.classList.add('hidden');
  });
  return commentLoader;
};

const renderBigPicture = (picture) => {
  const pictureCard = document.querySelectorAll('.picture');

  for (let i = 0; i < pictureCard.length; i++) {
    pictureCard[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal();

      socialComments.innerHTML = '';
      const {url, likes, comments, description} = picture[i];
      bigPictureImg.src = url;
      bigPictureLikesCount.textContent = likes;
      bigPictureCommentsCount.textContent = comments.length;
      bigPictureDescription.textContent = description;
      const commentFragment = document.createDocumentFragment();

      if(comments.length > COMMENTS_MAX){
        commentLoader.classList.remove('hidden');
        for (let j = 0; j < COMMENTS_MAX; j++) {
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
        moreComments();
        for (let j = 5; j < comments.length; j++) {
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
      } else {
        commentLoader.classList.add('hidden');
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
      }

      socialComments.appendChild(commentFragment);
      document.body.classList.add('modal-open');
    });
  }
};

export {renderBigPicture};
