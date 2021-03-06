import './data.js';
import './picture-upload.js';
import './picture-effects.js';
import './form-validation.js';
import './picture-scale.js';
import './form-control.js';
import {renderBigPicture} from './big-picture.js';
import {renderSmallPictures} from './small-pictures.js';

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    renderSmallPictures(data);
    renderBigPicture(data);
    console.log(data)
  });
