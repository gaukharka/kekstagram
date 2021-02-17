import {isEscEvent, isEnterEvent} from './util.js';

const closePicturePreviewModal = document.querySelector('.big-picture');
const openPicturePreviewModal = document.querySelector('.picture__img');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    userCloseModal();
  }
};

const userOpenModal = () => {
  closePicturePreviewModal.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
};

const userCloseModal = () => {
  closePicturePreviewModal.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

openPicturePreviewModal.addEventListener('click', () => {
  userOpenModal();
});

openPicturePreviewModal.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    userOpenModal();
  }
});

closePicturePreviewModal.addEventListener('click', () => {
  userCloseModal();
});

closePicturePreviewModal.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    userCloseModal();
  }
});
