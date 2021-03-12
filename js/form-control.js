import {isEscEvent} from './util.js';
import {hashtagInput, commentInput} from './form-validation.js';
import {resetScale} from './picture-scale.js';
import {resetEffect} from './picture-effects.js';

const cancelUploadButton = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadModal();
  }
};

const onPopupCloseClick = (evt) => {
  evt.preventDefault();
  closeUploadModal();
};

const openUploadModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  cancelUploadButton.addEventListener('click', onPopupCloseClick);
  imgUploadEffectLevel.classList.add('hidden');
};

const closeUploadModal = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  cancelUploadButton.removeEventListener('click', onPopupCloseClick);
  resetScale();
  resetEffect();
};

cancelUploadButton.addEventListener('click', closeUploadModal);

hashtagInput.addEventListener('focusin', () => {
  document.removeEventListener('keydown', onPopupEscKeydown)
});

commentInput.addEventListener('focusin', () => {
  document.removeEventListener('keydown', onPopupEscKeydown)
});

hashtagInput.addEventListener('focusout', () => {
  document.addEventListener('keydown', onPopupEscKeydown)
});

commentInput.addEventListener('focusout', () => {
  document.addEventListener('keydown', onPopupEscKeydown)
});

export {openUploadModal, closeUploadModal};
