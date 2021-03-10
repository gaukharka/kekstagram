import {isEscEvent} from './util.js';
import {closeUploadModal} from './form-control.js';

const uploadForm = document.querySelector('.img-upload__form');
const main = document.querySelector('main');

// SUCCESS
const renderSuccessMessage = () => {
  const template = document.querySelector('#success').content;
  const element = template.cloneNode(true);
  main.appendChild(element);

  const successButton = main.querySelector('.success__button');

  main.addEventListener('click', onOutsideClick);
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onSuccessEscKeydown);

  const onSuccessEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeSuccessMessage();
    }
  };

  const onOutsideClick = (evt) => {
    closeSuccessMessage(evt.target.className);
  };

  const onPopupCloseClick = (evt) => {
    evt.preventDefault();
    closeSuccessMessage();
  };

  const closeSuccessMessage = () => {
    main.remove(element);
    main.removeEventListener('click', onOutsideClick);
    document.removeEventListener('keydown', onSuccessEscKeydown);
    successButton.removeEventListener('click', onPopupCloseClick);
  };
};

// ERROR
const renderErrorMessage = () => {
  const template = document.querySelector('#error').content;
  const element = template.cloneNode(true);
  main.appendChild(element);

  const errorButton = main.querySelector('.error__button');

  main.addEventListener('click', onOutsideClick);
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onErrorEscKeydown);

  const onErrorEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeErrorMessage();
    }
  };

  const onOutsideClick = (evt) => {
    closeErrorMessage(evt.target.className);
  };

  const onPopupCloseClick = (evt) => {
    evt.preventDefault();
    closeErrorMessage();
  };

  const closeErrorMessage = () => {
    main.remove(element);
    main.removeEventListener('click', onOutsideClick);
    document.removeEventListener('keydown', onErrorEscKeydown);
    errorButton.removeEventListener('click', onPopupCloseClick);
  };
};

const formSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault;

    const formData = new FormData(evt.target);

    fetch('https://22.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if(response.ok) {
          renderSuccessMessage();
          onSuccess();
        } else {
          renderErrorMessage();
          closeUploadModal();
        }
      })
      .catch(() => {
        renderErrorMessage();
        closeUploadModal();
      })
  });
};

export {formSubmit};
