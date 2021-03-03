/* global noUiSlider:readonly */
import {uploadForm} from './picture-upload.js';

const imgUploadEffectLevel = uploadForm.querySelector('.img-upload__effect-level');
const imgUploadPreview = uploadForm.querySelector('.img-upload__preview');

const effectOriginal = uploadForm.querySelector('#effect-none');
const effectChrome = uploadForm.querySelector('#effect-chrome');
const effectSepia = uploadForm.querySelector('#effect-sepia');
const effectMarvin = uploadForm.querySelector('#effect-marvin');
const effectPhobos = uploadForm.querySelector('#effect-phobos');
const effectHeat = uploadForm.querySelector('#effect-heat');

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
sliderValue.value = '';

noUiSlider.create(sliderElement, {
  range: {
    'min': 0,
    'max': 1,
  },
  start: 0.5,
  step: 0.1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', (values, handle) => {
  sliderValue.value = values[handle];
});

effectOriginal.addEventListener('change', () => {
  imgUploadPreview.classList.add('effects__preview--none');
  imgUploadEffectLevel.classList.add('hidden');

  noUiSlider.create(sliderElement, {
    range: {
      'min': 0,
      'max': 1,
    },
    start: 0.5,
    step: 0.1,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    sliderValue.value = '';
  });


})

// CHROME
effectChrome.addEventListener('click', () => {
  imgUploadPreview.classList.add('effects__preview--chrome');
  imgUploadEffectLevel.classList.remove('hidden');

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
    imgUploadPreview.style.filter = filterValue;
  });
});

// SEPIA
effectSepia.addEventListener('click', () => {
  imgUploadPreview.classList.add('effects__preview--sepia');
  imgUploadEffectLevel.classList.remove('hidden');

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
    imgUploadPreview.style.filter = filterValue;
  });
});

// MARVIN
effectMarvin.addEventListener('click', () => {
  imgUploadPreview.classList.add('effects__preview--marvin');
  imgUploadEffectLevel.classList.remove('hidden');

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
    imgUploadPreview.style.filter = filterValue;
  });
});

// PHOBOS
effectPhobos.addEventListener('click', () => {
  imgUploadPreview.classList.add('effects__preview--phobos');
  imgUploadEffectLevel.classList.remove('hidden');

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
    imgUploadPreview.style.filter = filterValue;
  });
});

// HEAT
effectHeat.addEventListener('click', () => {
  imgUploadPreview.classList.add('effects__preview--heat');
  imgUploadEffectLevel.classList.remove('hidden');

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
    imgUploadPreview.style.filter = filterValue;
  });
});

export {imgUploadEffectLevel};
