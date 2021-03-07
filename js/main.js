// import './data.js';
import './picture-upload.js';
import './picture-effects.js';
import {formSubmit} from './form-validation.js';
import './picture-scale.js';
import './form-control.js';
import './big-picture.js';
import {closeModal} from './user-modal.js';
import {renderBigPicture} from './big-picture.js';
import {renderSmallPictures} from './small-pictures.js';

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    renderSmallPictures(data);
    renderBigPicture(data);
    console.log(data)
  });

formSubmit(closeModal);
