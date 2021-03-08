import './picture-upload.js';
import './picture-effects.js';
import {formSubmit} from './form-validation.js';
import './picture-scale.js';
import {closeUploadModal} from './form-control.js';
import './big-picture.js';
import './user-modal.js';
import {renderBigPicture} from './big-picture.js';
import {renderSmallPictures} from './small-pictures.js';
import {renderSuccessMessage} from './message.js';
import { getData } from './api.js';

getData((data) => {
  renderSmallPictures(data);
  renderBigPicture(data);
});

formSubmit(renderSuccessMessage);
