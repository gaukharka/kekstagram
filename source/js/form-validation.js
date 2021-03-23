import {isStringTooLong} from './util.js';

const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;

hashtagInput.addEventListener('input', (evt) => {
  evt.stopPropagation();

  const regex = /[!@$%^&*()_+\-=\]{};':"\\|,.<>?]/g;
  const regexEmoji = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

  const input = evt.target;
  const hashtag = input.value.trim().toLowerCase();
  const hashtags = hashtag.split(' ');
  const uniqueHashtags = new Set(hashtags);

  for(let i=0; i < hashtags.length; i++){
    if(input.value === '') {
      input.classList.remove('error-validation');
      input.setCustomValidity('');
    } else if(hashtags[i].charAt(0) !== '#'){
      input.classList.add('error-validation');
      input.setCustomValidity('Хэштег должен начинаться с символа #');
    } else if(hashtags[i][1] === ' '){
      input.classList.add('error-validation');
      input.setCustomValidity('Хэштег не может состоять только из одной решётки');
    } else if(hashtags.length > MAX_HASHTAG_COUNT){
      input.classList.add('error-validation');
      input.setCustomValidity('Допускаемое количество хэштегов max 5');
    } else if(hashtags[i].length >= MAX_HASHTAG_LENGTH){
      input.classList.add('error-validation');
      input.setCustomValidity('Допустимая длина хэштегов 20 символов');
    } else if(uniqueHashtags.size !== hashtags.length){
      input.classList.add('error-validation');
      input.setCustomValidity('Хэштеги не должны повторятся');
    } else if(regex.test(hashtags[i]) || regexEmoji.test(hashtags[i])){
      input.classList.add('error-validation');
      input.setCustomValidity('Хэштег должен состоять только из букв и цифр');
    } else {
      input.classList.remove('error-validation');
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

export {hashtagInput, commentInput };
