import {isEscEvent} from './util.js';

const uploadFile = document.querySelector('#upload-file').files[0];
const uploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadEffectLevel = uploadForm.querySelector('.img-upload__effect-level');
const closeButton = document.querySelector('#upload-cancel');
const resizeFileValue = document.querySelector('.scale__control--value');
const minimizeButton = document.querySelector('.scale__control--smaller');
const maximizeButton = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadPreviewImg = imgUploadPreview.getElementsByTagName('img');

let fileSizeMax = 600;
const fileSizeMin = 250;
const fileSizeStep = 25;

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

const closeModal = () => {
  imgUploadOverlay.classList.add('hidden');
  // document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  closeButton.removeEventListener('click', onPopupCloseClick);
}

if(uploadFile !== 0){
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imgUploadEffectLevel.classList.add('hidden');
}

const minimizeImg = () => {
  const currentWidth = imgUploadPreviewImg[0].clientWidth;
  if(currentWidth === fileSizeMax){
    alert('Maximum zoom-in level reached.');
  } else {
    imgUploadPreviewImg[0].style.width = currentWidth/100 - fileSizeStep*currentWidth/100;   //  вот тут калькуляция тоже не работает
    resizeFileValue.value =  resizeFileValue.value - fileSizeStep ;            //   вот тут неотображается обновленное значение
  }
}

const maximizeImg = () => {
  const currentWidth = imgUploadPreviewImg[0].width;
  if(currentWidth < fileSizeMin){
    imgUploadPreviewImg[0].style.width = currentWidth/100 + fileSizeStep*currentWidth/100;
    resizeFileValue.value +=  fileSizeStep + '%';
  }
}

minimizeButton.addEventListener('click', () => {
  minimizeImg();
});

maximizeButton.addEventListener('click', () => {
  maximizeImg();
})

export {uploadForm} ;
