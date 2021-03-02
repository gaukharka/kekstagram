import {isEscEvent} from './util.js';

const fileUpload = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const uploadForm = document.querySelector('.img-upload__form');
const imgUploadEffectLevel = uploadForm.querySelector('.img-upload__effect-level');

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


// upload function
const filePreview = () => {
  const file = document.querySelector('#upload-file').files[0];
  const fileName = file.name.toLowerCase();
  const imgUploadPreviewImg = imgUploadPreview.querySelector('img');

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if(matches){
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
      imgUploadPreviewImg.src = fileReader.result;
    });

    fileReader.readAsDataURL(fileName);
  }
};

imgUploadPreview.addEventListener('change', filePreview)

fileUpload.addEventListener('change', openUploadModal);

export {uploadForm, imgUploadPreview} ;
