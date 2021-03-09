import {isEscEvent} from './util.js';

const main = document.querySelector('main');

const renderSuccessMessage = () => {
  const template = document.querySelector('#success').content;
  const element = template.cloneNode(true);
  main.appendChild(element);

  const successButton = main.querySelector('.success__button');
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const closeSuccessMessage = () => {
  document.querySelector('#success').remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const renderErrorMessage = () => {
  const template = document.querySelector('#error').content;
  const element = template.cloneNode(true);
  main.appendChild(element);

  const successButton = main.querySelector('.error__button');
  successButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeErrorMessage = () => {
  document.querySelector('#error').remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

export {renderSuccessMessage, renderErrorMessage};
