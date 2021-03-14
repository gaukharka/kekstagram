/* global _:readonly */
import {renderSmallPictures} from './small-pictures.js';
import {openBigPictureModal} from './big-picture.js';
import {getData} from './get-data.js';

const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');
const filterButton = document.querySelectorAll('.img-filters__button');

const RERENDER_DELAY = 500;

filterButton.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    for(let i=0; i < filterButton.length; i++){
      if(filterButton[i].classList.contains('.img-filters__button--active')){
        filterButton[i].classList.remove('img-filters__button--active')
      }
    }
    filterButton.classList.add('img-filters__button--active');
  })
})

const cleanUpPreviousData = () => {
  const smallPhotos = document.querySelectorAll('.picture');
  for(let i=0; i < smallPhotos.length; i++){
    smallPhotos[i].remove();
  }
};

//DEFAULT
defaultFilter.addEventListener('click', () => {
  cleanUpPreviousData();
  getData();
});

//RANDOM
const getRandomPhotos = (pictures) => {
  return pictures.sort(() => Math.random() - 0.5);
}

randomFilter.addEventListener('click', _.debounce(() => {
  cleanUpPreviousData();
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      renderSmallPictures(getRandomPhotos(data).slice(0, 10));
      openBigPictureModal(data);
    });
}, RERENDER_DELAY));

//POPULAR

const getCommentRank = (pictureA, pictureB) => {
  const commentA = pictureA.comments.length;
  const commentB = pictureB.comments.length;
  return commentB - commentA;
}

discussedFilter.addEventListener('click', _.debounce(() => {
  cleanUpPreviousData();
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      renderSmallPictures(data.slice().sort(getCommentRank));
      openBigPictureModal(data.slice().sort(getCommentRank));
    });
}, RERENDER_DELAY));
