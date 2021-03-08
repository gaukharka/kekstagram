const successContainer = document.querySelector('#success').content.querySelector('.success');
const successTemplate = successContainer.querySelector('.success__inner');
const successMessageFragment = document.createDocumentFragment();

const ALERT_SHOW_TIME = 100000;

const renderSuccessMessage = () => {
  const element = successTemplate.cloneNode(true);
  element.querySelector('.success__title').textContent;
  element.querySelector('.success__button').textContent;
  successMessageFragment.appendChild(element);
  document.querySelector('main').append(successMessageFragment);
};

const errorContainer  = document.querySelector('#error').content.querySelector('.error');
const errorTemplate = errorContainer.querySelector('.error__inner');
const errorMessageFragment = document.createDocumentFragment();

const renderErrorMessage = () => {
  const element = errorTemplate.cloneNode(true);
  element.querySelector('.error__title');
  element.querySelector('.error__button');
  errorMessageFragment.appendChild(element);
  document.body.append(errorMessageFragment);

  setTimeout(() => {
    errorMessageFragment.remove();
  }, ALERT_SHOW_TIME);
};

export {renderSuccessMessage, renderErrorMessage};
