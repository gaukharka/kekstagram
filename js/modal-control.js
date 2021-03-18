import {isEscEvent} from './util.js';
import {hashtagInput, commentInput} from './form-validation.js';
import {resetScale} from './picture-scale.js';
import {resetEffect} from './picture-effects.js';

const picturePreviewModal = document.querySelector('.big-picture');
const closeButton = picturePreviewModal.querySelector('#picture-cancel');
const cancelUploadButton = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');

//Modal control
const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onPopupCloseClick = (evt) => {
  evt.preventDefault();
  closeModal();
}

const openModal = () => {
  picturePreviewModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  closeButton.addEventListener('click', onPopupCloseClick);
};

const closeModal = () => {
  picturePreviewModal.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  closeButton.removeEventListener('click', onPopupCloseClick);
};

//Form control
const onFormEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

const onFormCloseClick = () => {
  closeForm();
};

const openForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscKeydown);
  cancelUploadButton.addEventListener('click', onFormCloseClick);
  imgUploadEffectLevel.classList.add('hidden');
};

const closeForm = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscKeydown);
  cancelUploadButton.removeEventListener('click', onFormCloseClick);
  document.querySelector('#upload-select-image').reset();
  document.querySelector('.social__comments').innerHTML.reset();
  resetScale();
  resetEffect();
};

hashtagInput.addEventListener('focusin', () => {
  document.removeEventListener('keydown', onFormEscKeydown)
});

commentInput.addEventListener('focusin', () => {
  document.removeEventListener('keydown', onFormEscKeydown)
});

hashtagInput.addEventListener('focusout', () => {
  document.addEventListener('keydown', onFormEscKeydown)
});

commentInput.addEventListener('focusout', () => {
  document.addEventListener('keydown', onFormEscKeydown)
});


export {openModal, closeModal, openForm, closeForm, picturePreviewModal};
