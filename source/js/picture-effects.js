/* global noUiSlider:readonly */

const uploadForm = document.querySelector('#upload-select-image');
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

const effectsContainer = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

const addEffectOnClick = (effect) => {
  for(let i = 0; i < effectsContainer.length; i++){
    uploadPreview.classList.remove(effectsContainer[i]);
  }

  switch (effect) {
    case 'effects__preview--none':
      return uploadPreview.classList.add(effectsContainer[0]);
    case 'effects__preview--chrome':
      return  uploadPreview.classList.add(effectsContainer[1]);
    case 'effects__preview--sepia':
      return uploadPreview.classList.add(effectsContainer[2]);
    case 'effects__preview--marvin':
      return uploadPreview.classList.add(effectsContainer[3]);
    case 'effects__preview--phobos':
      return uploadPreview.classList.add(effectsContainer[4]);
    default:
      return uploadPreview.classList.add(effectsContainer[5]);
  }
}

const showSlider = () => {
  if (effectLevel.classList.contains('hidden')) {
    effectLevel.classList.remove('hidden');
  }
};

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
  addEffectOnClick(effectsContainer[0]);
  effectLevel.classList.add('hidden');
  sliderElement.noUiSlider.reset();
  sliderValue.value = '';
});

// CHROME
effectChrome.addEventListener('click', () => {
  addEffectOnClick(effectsContainer[1]);
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
    const filterValue = (`grayscale(${sliderValue.value})`);
    uploadPreview.style.filter = filterValue;
    uploadPreview.setAttribute('style',`-webkit-filter:${filterValue}`);
  });
});

// SEPIA
effectSepia.addEventListener('click', () => {
  addEffectOnClick(effectsContainer[2]);
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
    const filterValue = (`sepia(${sliderValue.value})`);
    uploadPreview.style.filter = filterValue;
    uploadPreview.setAttribute('style',`-webkit-filter:${filterValue}`);
  });
});

// MARVIN
effectMarvin.addEventListener('click', () => {
  addEffectOnClick(effectsContainer[3]);
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
    const filterValue = (`invert(${sliderValue.value}%)`);
    uploadPreview.style.filter = filterValue;
    uploadPreview.setAttribute('style',`-webkit-filter:${filterValue}`);
  });
});

// PHOBOS
effectPhobos.addEventListener('click', () => {
  addEffectOnClick(effectsContainer[4]);
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
    const filterValue = (`blur(${sliderValue.value}px)`);
    uploadPreview.style.filter = filterValue;
    uploadPreview.setAttribute('style',`-webkit-filter:${filterValue}`);
  });
});

// HEAT
effectHeat.addEventListener('click', () => {
  addEffectOnClick(effectsContainer[5]);
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
    const filterValue = (`brightness(${sliderValue.value})`);
    uploadPreview.style.filter = filterValue;
    uploadPreview.setAttribute('style',`-webkit-filter:${filterValue}`);
  });
});

const resetEffect = () => {
  addEffectOnClick(effectsContainer[0]);
  effectLevel.classList.add('hidden');
  sliderValue.value = '';
  uploadPreview.style.filter = '';
  uploadPreview.style.webkitFilter = '';
};

export {resetEffect};
