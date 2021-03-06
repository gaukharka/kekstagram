import {isEscEvent} from './util.js';

const picturePreviewModal = document.querySelector('.big-picture');
const closeButton = picturePreviewModal.querySelector('.big-picture__cancel');

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

export {openModal, picturePreviewModal};
