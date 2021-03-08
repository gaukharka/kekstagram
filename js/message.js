const main = document.querySelector('main');
const successContainer = document.querySelector('#success').content.querySelector('.success');
const successTemplate = successContainer.querySelector('.success__inner');
const successMessageFragment = document.createDocumentFragment();

const renderSuccessMessage = () => {
  const element = successTemplate.cloneNode(true);
  element.querySelector('.success__title');
  element.querySelector('.success__button');
  successMessageFragment.appendChild(element);
  main.appendChild(successMessageFragment);
};

const errorContainer  = document.querySelector('#error').content.querySelector('.error');
const errorTemplate = errorContainer.querySelector('.error__inner');
const errorMessageFragment = document.createDocumentFragment();

const renderErrorMessage = () => {
  const element = errorTemplate.cloneNode(true);
  element.querySelector('.error__title');
  element.querySelector('.error__button');
  errorMessageFragment.appendChild(element);
  main.appendChild(errorMessageFragment);
};

export {renderSuccessMessage, renderErrorMessage};
