import {closeUploadModal} from './form-control.js';
import {openBigPictureModal} from './big-picture.js';
import {renderSmallPictures} from './small-pictures.js';
import {formSubmit} from './send-data.js';

const filtersContainer = document.querySelector('.img-filters');

const getData = () => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      renderSmallPictures(data);
      openBigPictureModal(data);
      filtersContainer.classList.remove('img-filters--inactive');
    });
}

getData();
formSubmit(closeUploadModal);

export {getData};
