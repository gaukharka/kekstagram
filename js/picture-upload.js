import {isEscEvent} from './util.js';

const fileUpload = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const uploadForm = document.querySelector('.img-upload__form');
const imgUploadEffectLevel = uploadForm.querySelector('.img-upload__effect-level');
const imgUploadPreviewImg = imgUploadPreview.querySelector('img');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

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

const filePreview = () => {
  const file = fileUpload.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if(matches){
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
      imgUploadPreviewImg.src = fileReader.result;
    });

    fileReader.readAsDataURL(file);
  }
};

const processPhoto= () => {
  filePreview();
  openUploadModal();
}

fileUpload.addEventListener('change', (evt) => {
  evt.stopPropagation();
  processPhoto();
});

export {uploadForm, imgUploadPreview, onPopupEscKeydown, onPopupCloseClick, closeButton} ;
