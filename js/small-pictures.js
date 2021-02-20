import { pictures } from './data.js';

const allPictures= document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();

pictures.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureListFragment.appendChild(pictureElement);
});

allPictures.appendChild(pictureListFragment);

export {allPictures};
