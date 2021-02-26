/* global noUiSlider:readonly */
import {uploadForm} from './picture-upload.js';

const imgUploadEffectLevel = uploadForm.querySelector('.img-upload__effect-level');
const imgUploadPreview = uploadForm.querySelector('.img-upload__preview');
const effectOriginal = uploadForm.querySelector('#effect-none');
effectOriginal.checked = true;
const effectChrome = uploadForm.querySelector('#effect-chrome');
const effectSepia = uploadForm.querySelector('#effect-sepia');
const effectMarvin = uploadForm.querySelector('#effect-marvin');
const effectPhobos = uploadForm.querySelector('#effect-phobos');
const effectHeat = uploadForm.querySelector('#effect-heat');

const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
effectValue.value = '';

// С фильтрами вообще беда))))), при смене фильтра не обнуляются значения (range, step, effect type and etc). Ползунки не работают))))
// Вообше в идеале думала вот как сделать:
// Создать массив effect, закинуть фильтры туда, и с помощью effect.map() вызывать функцию applyEffects().

// const applyEffects = (effect.type, rangeMin, rangeMax, rangeStep){
//   noUiSlider.create(sliderElement, {

//   });

//   sliderElement.noUiSlider.on('update', (values, handle) => {

//   });
// }

effectOriginal.addEventListener('click', () => {
  if(effectOriginal.checked){
    imgUploadEffectLevel.classList.add('hidden');
  }
})

// CHROME
effectChrome.addEventListener('change', () => {
  imgUploadPreview.classList.add('effects__preview--chrome');
  imgUploadEffectLevel.classList.remove('hidden');

  noUiSlider.create(sliderElement, {
    range: {
      'min': 0,
      'max': 1,
    },
    start: 0.5,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    effectValue.value = values[handle];
    const filterValue = 'grayscale(' + effectValue.value + ')';
    imgUploadPreview.style.filter = filterValue;
    // console.log(imgUploadPreview);
  });
});


// SEPIA
effectSepia.addEventListener('change', () => {
  imgUploadPreview.classList.add('effects__preview--sepia');
  imgUploadEffectLevel.classList.remove('hidden');

  noUiSlider.create(sliderElement, {
    range: {
      'min': 0,
      'max': 1,
    },
    start: 0.5,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    effectValue.value = values[handle];
    const filterValue = 'sepia(' + effectValue.value + ')';
    imgUploadPreview.style.filter = filterValue;
    // console.log(imgUploadPreview);
  });
});

// MARVIN
effectMarvin.addEventListener('change', () => {
  imgUploadPreview.classList.add('effects__preview--marvin');
  imgUploadEffectLevel.classList.remove('hidden');

  noUiSlider.create(sliderElement, {
    range: {
      'min': 0,
      'max': 100,
    },
    start: 50,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    effectValue.value = values[handle];
    const filterValue = 'marvin(' + effectValue.value + '%' + ')';
    imgUploadPreview.style.filter = filterValue;
    // console.log(imgUploadPreview);
  });
});

effectPhobos.addEventListener('click', () => {
  imgUploadPreview.classList.add('effects__preview--phobos');
  imgUploadEffectLevel.classList.remove('hidden');

  noUiSlider.create(sliderElement, {
    range: {
      'min': 0,
      'max': 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    effectValue.value = values[handle];
    const filterValue = 'blur(' + effectValue.value + 'px' + ')';
    imgUploadPreview.style.filter = filterValue;
    // console.log(imgUploadPreview);
  });
});

effectHeat.addEventListener('click', () => {
  imgUploadPreview.classList.add('effects__preview--heat');
  imgUploadEffectLevel.classList.remove('hidden');

  noUiSlider.create(sliderElement, {
    range: {
      'min': 0,
      'max': 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    effectValue.value = values[handle];
    const filterValue = 'brightness(' + effectValue.value  + ')';
    imgUploadPreview.style.filter = filterValue;
    // console.log(imgUploadPreview);
  });
});

export {imgUploadEffectLevel};















// sliderElement.addEventListener('change', (evt) => {
//   if(evt.target.value === 'marvin'){
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         'min': 0,
//         'max': 1,
//       },
//       start: 0.5,
//       step: 0.1,
//       connect: 'lower',
//       format: {
//         to: function (value) {
//           if (Number.isInteger(value)) {
//             return value.toFixed(0);
//           }
//           return value.toFixed(1);
//         },
//         from: function (value) {
//           return parseFloat(value);
//         },
//       },
//     });

//     sliderElement.noUiSlider.on('update', (values, handle) => {
//       effectValue.value = values[handle];
//       const filterValue = 'marvin(' + effectValue.value + ')';
//       imgUploadPreview.style.filter = filterValue;
//       console.log(imgUploadPreview);
//     });

//   } else if(evt.target.checked===effectPhobos || evt.target.checked===effectHeat){
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 3,
//       },
//       step: 0.1,
//       start: 1.5,
//     });
//   } else {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 1,
//       },
//       step: 0.1,
//       start: 0.5,
//     });
//   }
// })

