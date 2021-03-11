import './picture-upload.js';
import './picture-effects.js';
import './form-validation.js';
import './picture-scale.js';
import {closeUploadModal} from './form-control.js';
import './big-picture.js';
import './user-modal.js';
import {openBigPictureModal} from './big-picture.js';
import {renderSmallPictures} from './small-pictures.js';
import {formSubmit} from './send-data.js';

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    renderSmallPictures(data);
    openBigPictureModal(data);
  });

formSubmit(closeUploadModal);
