import {openForm} from './modal-control.js';

const fileUpload = document.querySelector('#upload-file');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const imgUploadPreviewImg = imgUploadPreview.querySelector('img');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const previewFile = () => {
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
  previewFile();
  openForm();
};

fileUpload.addEventListener('change', processPhoto);

export {imgUploadPreview, fileUpload} ;
