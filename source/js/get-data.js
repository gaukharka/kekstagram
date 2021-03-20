import {closeForm} from './modal-control.js';
import {openBigPictureModal} from './big-picture.js';
import {renderSmallPictures} from './small-pictures.js';
import {submitForm} from './send-data.js';

const filtersContainer = document.querySelector('.img-filters');

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data)
    });
};

getData((data) => {
  renderSmallPictures(data);
  openBigPictureModal(data);
  filtersContainer.classList.remove('img-filters--inactive');
});

submitForm(closeForm);
export {getData};
