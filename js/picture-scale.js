const uploadPreview = document.querySelector('.img-upload__preview');
const uploadedImg = uploadPreview.querySelector('img');

const minimizeButton = document.querySelector('.scale__control--smaller');
const maximizeButton = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');

const minimizeImg = () => {
  const currentValue = parseInt(scaleControl.value);
  const updatedValue = currentValue - 25;
  const value = Math.max(updatedValue, 25)

  uploadedImg.style.transform = 'scale(' + value/100 + ')';
  scaleControl.value = value + '%';
};

const maximizeImg = () => {
  const currentValue = parseInt(scaleControl.value);
  const updatedValue = currentValue + 25;
  const value = Math.min(updatedValue, 100)

  uploadedImg.style.transform = 'scale(' + value/100 + ')';
  scaleControl.value = value + '%';
};

minimizeButton.addEventListener('click', minimizeImg);
maximizeButton.addEventListener('click', maximizeImg);

const resetScale = () => {
  uploadedImg.style.transform = 'scale(' + 1 + ')';
  scaleControl.value = 100 + '%';
}
export {resetScale};
