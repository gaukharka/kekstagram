import {isEscEvent, isEnterEvent} from './util.js';

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

const bigPictureContainer = document.querySelector('.big-picture__img');
const bigPictureLikesContainer = document.querySelector('.social__likes');
const bigPictureCommentCountContainer = document.querySelector('.social__comment-count');
const bigPictureDescriptionContainer = document.querySelector('.social__header');
const bigPictureCommentsContainer = document.querySelector('.social__comments')


//open modal
pictureCards.forEach((card) => {
  card.addEventListener('click', () => {
    userOpenModal();

    const bigPictureImg = bigPictureContainer.querySelector('img');
    bigPictureImg.src = card.src;

    const bigPictureLikes = bigPictureLikesContainer.querySelector('.likes-count');
    bigPictureLikes.textContent = card.likes;

    const bigPictureCommentCounts = bigPictureCommentCountContainer.querySelector('.comments-count');
    bigPictureCommentCounts.textContent = card.comments.length;

    const bigPictureDescription = bigPictureDescriptionContainer.querySelector('.social__caption');
    bigPictureDescription.textContent = card.description;

    const bigPictureCommentsSubContainer = bigPictureCommentsContainer.querySelector('.social__comment');
    bigPictureCommentsSubContainer.forEach((card) => {
      const img = bigPictureCommentsSubContainer.querySelector('.social__picture');
      img.src = card.comments.avatar;
      img.alt = card.comments.name;
      const comment = bigPictureCommentsSubContainer.querySelector('.social__text');
      comment.textContent = card.comments.message;
    });
    bigPictureCommentsContainer.textContent = card.comments;
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
})
