import {generatePicture} from './data.js';

const bigPicture = document.querySelector('.big-picture');

const bigPictureTemplate = document.querySelector('.big-picture__preview');
// const bigPictureCommentTemplate = document.querySelector('.social__comment');
const bigPictures = generatePicture();
const bigPictureFragment = document.createDocumentFragment();

bigPictures.forEach((picture) => {
  const bigPictureElement = bigPictureTemplate.cloneNode(true);
  bigPictureElement.querySelector('.big-picture__img').src = picture.url;
  bigPictureElement.querySelector('.likes-count').textContent = picture.likes;

  // const bigPictureComment = bigPictureCommentTemplate.cloneNode(true);
  // bigPictureComment.querySelector('.social__picture').src = picture.comments.avatar;
  // bigPictureComment.querySelector('.social__text').textContent = picture.comments.message;
  bigPictureFragment.appendChild(bigPictureElement);
  // bigPictureFragment.appendChild(bigPictureComment);
})

bigPicture.appendChild(bigPictureFragment);

// export {bigPicture};
