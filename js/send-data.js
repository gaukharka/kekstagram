import {isEscEvent} from './util.js';
import {closeForm} from './modal-control.js';

const uploadForm = document.querySelector('#upload-select-image');
const main = document.querySelector('main');

// SUCCESS
const renderSuccessMessage = () => {
  const template = document.querySelector('#success').content;
  const element = template.cloneNode(true);
  main.appendChild(element);

  const successButton = main.querySelector('.success__button');

  const onSuccessEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeSuccessMessage();
    }
  };

  const onOutsideClick = () => {
    closeSuccessMessage();
  };

  const onPopupCloseClick = (evt) => {
    evt.preventDefault();
    closeSuccessMessage();
  };

  const closeSuccessMessage = () => {
    main.querySelector('.success').remove();
    main.removeEventListener('click', onOutsideClick);
    document.removeEventListener('keydown', onSuccessEscKeydown);
    successButton.removeEventListener('click', onPopupCloseClick);
  };

  main.addEventListener('click', onOutsideClick);
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onSuccessEscKeydown);
};

// ERROR
const renderErrorMessage = () => {
  const template = document.querySelector('#error').content;
  const element = template.cloneNode(true);
  main.appendChild(element);

  const errorButton = document.querySelector('.error__button');

  const onErrorEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeErrorMessage();
    }
  };

  const onOutsideClick = () => {
    closeErrorMessage();
  };

  const onPopupCloseClick = (evt) => {
    evt.preventDefault();
    closeErrorMessage();
  };

  const closeErrorMessage = () => {
    main.querySelector('.error').remove();
    main.removeEventListener('click', onOutsideClick);
    document.removeEventListener('keydown', onErrorEscKeydown);
    errorButton.removeEventListener('click', onPopupCloseClick);
  };

  main.addEventListener('click', onOutsideClick);
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onErrorEscKeydown);
};

// SUBMIT
const formSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://22.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if(response.ok) {
          onSuccess();
          renderSuccessMessage();
          uploadForm.reset();
        } else {
          renderErrorMessage();
          closeForm();
        }
      })
      .catch(() => {
        renderErrorMessage();
        closeForm();
      })
  });
};

export {formSubmit};
