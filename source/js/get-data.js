import {closeForm} from './modal-control.js';
import {openBigPictureModal} from './big-picture.js';
import {renderSmallPictures} from './small-pictures.js';
import {submitForm} from './send-data.js';

const ALERT_TIME = 5000;

const filtersContainer = document.querySelector('.img-filters');

const displayAlert = () => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('error-display');
  messageContainer.textContent = 'Ошибка сервера!';
  document.body.append(messageContainer);
  setTimeout(() => {
    messageContainer.remove();
  }, ALERT_TIME);
}

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data)
    })
    .catch(() => displayAlert());
};

getData((data) => {
  renderSmallPictures(data);
  openBigPictureModal(data);
  filtersContainer.classList.remove('img-filters--inactive');
});

submitForm(closeForm);
export {getData};
