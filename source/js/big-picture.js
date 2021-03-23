import {picturePreviewModal, openModal} from './modal-control.js';
import {createElement} from './util.js';

const socialComments = document.querySelector('.social__comments');
const bigPictureImg = picturePreviewModal.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCount = picturePreviewModal.querySelector('.likes-count');
const bigPictureCommentsCount= picturePreviewModal.querySelector('.comments-count');
const bigPictureDescription= picturePreviewModal.querySelector('.social__caption');
const commentsLoader = picturePreviewModal.querySelector('.comments-loader');
const socialCommentDisplay = picturePreviewModal.querySelector('.comments-display');

const COMMENTS_INITIAL_SHOW = 5;
const COMMENTS_INCREMENT_STEP = 5;

const openBigPictureModal = (picture) => {
  const pictureCard = document.querySelectorAll('.picture');

  for (let i = 0; i < pictureCard.length; i++) {
    pictureCard[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal();
      commentsLoader.classList.remove('hidden');
      let displayedComments = COMMENTS_INITIAL_SHOW;

      const {url, likes, comments, description} = picture[i];
      bigPictureImg.src = url;
      bigPictureLikesCount.textContent = likes;
      bigPictureCommentsCount.textContent = comments.length;
      socialCommentDisplay.textContent = COMMENTS_INITIAL_SHOW;
      bigPictureDescription.textContent = description;
      const commentFragment = document.createDocumentFragment();

      const onLoadMoreClick = () => {
        displayedComments += COMMENTS_INCREMENT_STEP;
        socialCommentDisplay.textContent = displayedComments;
        displayComments();
      }

      const displayComments = () => {
        socialComments.innerHTML = '';
        if (comments.length < displayedComments) {
          commentsLoader.classList.add('hidden');
          commentsLoader.removeEventListener('click', onLoadMoreClick);
          socialCommentDisplay.textContent = comments.length;
        }

        comments.slice(0, displayedComments).forEach(comment => {
          const commentListElement = createElement('li', 'social__comment');
          const commentAvatar = createElement('img', 'social__picture');
          const {avatar, name, message} = comment;
          commentAvatar.src = avatar;
          commentAvatar.alt = name;
          commentListElement.appendChild(commentAvatar);
          const commentText = createElement('p', 'social__text');
          commentText.textContent = message;
          commentListElement.appendChild(commentText);
          commentFragment.appendChild(commentListElement);
        });

        socialComments.appendChild(commentFragment);
        document.body.classList.add('modal-open');
      }

      displayComments();

      if (comments.length > COMMENTS_INITIAL_SHOW) {
        commentsLoader.addEventListener('click', onLoadMoreClick);
      }
    });
  }
};

export {openBigPictureModal};
