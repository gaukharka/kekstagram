import {isEscEvent} from './util.js';

const fileUpload = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');

const uploadForm = document.querySelector('.img-upload__form');
const imgUploadEffectLevel = uploadForm.querySelector('.img-upload__effect-level');

// upload function
const filePreview = () => {
  const file = document.querySelector('#upload-file').files[0];
  const imgUploadPreviewImg = imgUploadPreview.getElementsByTagName('img');

  const fileReader = new FileReader();
  fileReader.addEventListener('load', () => {
    imgUploadPreviewImg.src = fileReader.result;
  }, false);

  fileReader.readAsDataURL(file);
};

// open close modal control
const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadModal();
  }
};

const onPopupCloseClick = (evt) => {
  evt.preventDefault();
  closeUploadModal();
}

const openUploadModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  closeButton.addEventListener('click', onPopupCloseClick);
  imgUploadEffectLevel.classList.add('hidden');
};

const closeUploadModal = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  closeButton.removeEventListener('click', onPopupCloseClick);
}

fileUpload.addEventListener('change', openUploadModal, false);
imgUploadPreview.addEventListener('change', filePreview)

export {uploadForm, imgUploadPreview} ;
