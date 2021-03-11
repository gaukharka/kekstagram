import {openUploadModal} from './form-control.js';

const fileUpload = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const imgUploadPreviewImg = imgUploadPreview.querySelector('img');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

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

fileUpload.addEventListener('change', processPhoto);


export {imgUploadPreview, fileUpload} ;
