import {isStringTooLong} from './util.js';
import {renderErrorMessage} from './message.js';
import { sendData } from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;

hashtagInput.addEventListener('input', (evt) => {
  evt.stopPropagation();

  const regex = /[ !@$%^&*()_+\-=\]{};':"\\|,.<>?]/g;
  const input = evt.target;
  const hashtag = input.value.trim().toLowerCase();
  const hashtags = hashtag.split(' ');
  const uniqueHashtags = new Set(hashtags);

  for(let i=0; i < hashtags.length; i++){
    if(hashtags[i].charAt(0) !== '#'){
      input.setCustomValidity('Хэштег должен начинаться с символа #');
    } else if(hashtags[i] === '#'){
      input.setCustomValidity('Хэштег не может состоять только из одной решётки');
    } else if(hashtags.length > MAX_HASHTAG_COUNT){
      input.setCustomValidity('Допускаемое количество хэштегов max 5');
    } else if(hashtags[i].length >= MAX_HASHTAG_LENGTH){
      input.setCustomValidity('Допустимая длина хэштегов 20 символов');
    } else if(uniqueHashtags.size !== hashtags.length){
      input.setCustomValidity('Хэштеги не должны повторятся');
    } else if(regex.test(hashtags[i])){
      input.setCustomValidity('Хэштег не должен содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
    } else {
      input.setCustomValidity('');
    }
    input.reportValidity();
  }
});

commentInput.addEventListener('input', () => {

  if(isStringTooLong(commentInput.value, MAX_COMMENT_LENGTH)) {
    commentInput.setCustomValidity('Длина комментария не должна превышать ' + MAX_COMMENT_LENGTH + ' символов');
  } else {
    commentInput.setCustomValidity('');
  }
  commentInput.reportValidity();
});

const formSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault;

    sendData(
      ()=> onSuccess(),
      () => renderErrorMessage(),
      new FormData(evt.target),
    );
  //   fetch('https://22.javascript.pages.academy/kekstagram',
  //     {
  //       method: 'POST',
  //       body: formData,
  //     },
  //   )
  //     .then((response) => {
  //       if(response.ok) {
  //         onSuccess();
  //       } else {
  //         renderErrorMessage();
  //       }
  //     })
  //     .catch(() => {
  //       renderErrorMessage();
  //       console.log(renderErrorMessage())
  //     })
  });
};

export {hashtagInput, commentInput, uploadForm, formSubmit};
