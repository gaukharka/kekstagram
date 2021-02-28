import {imgUploadPreview} from './picture-upload.js';

const imgUploadPreviewImg = imgUploadPreview.getElementsByTagName('img');

const minimizeButton = document.querySelector('.scale__control--smaller');
const maximizeButton = document.querySelector('.scale__control--bigger');

const fileSize = imgUploadPreviewImg[0].width;
const scale = fileSize*25/100;

const minimizeImg = () => {
  const currentWidth = imgUploadPreviewImg[0].width;

  if(currentWidth <= fileSize && currentWidth > scale){
    imgUploadPreviewImg[0].width = (currentWidth  - scale);
    document.querySelector('.scale__control--value').value = parseInt(document.querySelector('.scale__control--value').value) - 25 + '%';
  }
};

const maximizeImg = () => {
  const currentWidth = imgUploadPreviewImg[0].width;

  if(currentWidth < fileSize ){
    imgUploadPreviewImg[0].width = (currentWidth + scale + 1);
    document.querySelector('.scale__control--value').value = parseInt(document.querySelector('.scale__control--value').value) + 25 + '%';
  }
};

minimizeButton.addEventListener('click', minimizeImg);
maximizeButton.addEventListener('click', maximizeImg);
