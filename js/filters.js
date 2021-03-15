/* global _:readonly */
import {renderSmallPictures} from './small-pictures.js';
import {openBigPictureModal} from './big-picture.js';
import {getData} from './get-data.js';

const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');
const filterButton = document.querySelectorAll('.img-filters__button');
const ACTIVE_FILTER_CLASS = 'img-filters__button--active'

const RERENDER_DELAY = 500;

const handleClick = (evt) => {
  const currentActiveFilter = document.querySelector(`.${ACTIVE_FILTER_CLASS}`);
  if (currentActiveFilter) {
    currentActiveFilter.classList.remove(ACTIVE_FILTER_CLASS);
  }
  evt.target.classList.add(ACTIVE_FILTER_CLASS);
}

filterButton.forEach(filterButton => {
  filterButton.addEventListener('click', handleClick);
});

const cleanUpPreviousData = () => {
  const smallPhotos = document.querySelectorAll('.picture');
  for(let i=0; i < smallPhotos.length; i++){
    smallPhotos[i].remove();
  }
};

//DEFAULT
defaultFilter.addEventListener('click', _.debounce(() => {
  cleanUpPreviousData();
  getData((data) => {
    renderSmallPictures(data);
    openBigPictureModal(data);
  });
}, RERENDER_DELAY));

//RANDOM
const getRandomPhotos = (pictures) => {
  return pictures.sort(() => Math.random() - 0.5);
}

randomFilter.addEventListener('click', _.debounce(() => {
  cleanUpPreviousData();
  getData((data) => {
    renderSmallPictures(getRandomPhotos(data).slice(0, 10));
    openBigPictureModal(data);
  })
}, RERENDER_DELAY));

//POPULAR
const sortByMostCommented = (pictureA, pictureB) => {
  const commentA = pictureA.comments.length;
  const commentB = pictureB.comments.length;
  return commentB - commentA;
}

discussedFilter.addEventListener('click', _.debounce(() => {
  cleanUpPreviousData();
  getData((data) => {
    renderSmallPictures(data.slice().sort(sortByMostCommented));
    openBigPictureModal(data.slice().sort(sortByMostCommented));
  })
}, RERENDER_DELAY));
