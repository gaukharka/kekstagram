/* global noUiSlider:readonly */
import {uploadForm} from './picture-upload.js';

const effectLevel = uploadForm.querySelector('.img-upload__effect-level');
const uploadPreview = uploadForm.querySelector('.img-upload__preview');

const effectOriginal = uploadForm.querySelector('#effect-none');
const effectChrome = uploadForm.querySelector('#effect-chrome');
const effectSepia = uploadForm.querySelector('#effect-sepia');
const effectMarvin = uploadForm.querySelector('#effect-marvin');
const effectPhobos = uploadForm.querySelector('#effect-phobos');
const effectHeat = uploadForm.querySelector('#effect-heat');

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

const showSlider = () => {
  if (effectLevel.classList.contains('hidden')) {
    effectLevel.classList.remove('hidden');
  }
}

noUiSlider.create(sliderElement, {
  range: {
    'min': 0,
    'max': 1,
  },
  start: 0,
  step: 0.1,
});

// ORIGINAL
effectOriginal.addEventListener('change', () => {
  uploadPreview.classList.add('effects__preview--none');
  effectLevel.classList.add('hidden');
  sliderElement.noUiSlider.reset();
  sliderValue.value = '';
});

// CHROME
effectChrome.addEventListener('click', () => {
  showSlider();

  sliderElement.noUiSlider.updateOptions({
    range: {
      'min': 0,
      'max': 1,
    },
    start: 1,
    step: 0.1,
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    const filterValue = 'grayscale(' + sliderValue.value + ')';
    uploadPreview.style.filter = filterValue;
    uploadPreview.style.webkitFilter = filterValue;
  });
});

// SEPIA
effectSepia.addEventListener('click', () => {
  showSlider();

  sliderElement.noUiSlider.updateOptions({
    range: {
      'min': 0,
      'max': 1,
    },
    start: 1,
    step: 0.1,
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    const filterValue = 'sepia(' + sliderValue.value + ')';
    uploadPreview.style.filter = filterValue;
    uploadPreview.style.webkitFilter = filterValue;
  });
});

// MARVIN
effectMarvin.addEventListener('click', () => {
  showSlider();

  sliderElement.noUiSlider.updateOptions({
    range: {
      'min': 0,
      'max': 100,
    },
    start: 100,
    step: 1,
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    const filterValue = 'invert(' + sliderValue.value + '%' + ')';
    uploadPreview.style.filter = filterValue;
    uploadPreview.style.webkitFilter = filterValue;
  });
});

// PHOBOS
effectPhobos.addEventListener('click', () => {
  showSlider();

  sliderElement.noUiSlider.updateOptions({
    range: {
      'min': 0,
      'max': 3,
    },
    start: 3,
    step: 0.1,
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    const filterValue = 'blur(' + sliderValue.value + 'px' + ')';
    uploadPreview.style.filter = filterValue;
    uploadPreview.style.webkitFilter = filterValue;
  });
});

// HEAT
effectHeat.addEventListener('click', () => {
  showSlider();

  sliderElement.noUiSlider.updateOptions({
    range: {
      'min': 1,
      'max': 3,
    },
    start: 3,
    step: 0.1,
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = values[handle];
    const filterValue = 'brightness(' + sliderValue.value  + ')';
    uploadPreview.style.filter = filterValue;
    uploadPreview.style.webkitFilter = filterValue;
  });
});

export {effectLevel};
