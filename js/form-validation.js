const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

//  HASHTAGS

hashtagInput.addEventListener('input', () => {
  const hashtagValueLength = hashtagInput.value.length;

  if(hashtagValueLength > MAX_HASHTAG_LENGTH) {
    hashtagInput.setCustomValidity('Хэш-тег начинается с символа #');
  } else {
    hashtagInput.setCustomValidity('');
  }

  hashtagInput.reportValidity();
});

// COMMENTS

commentInput.addEventListener('invalid', () => {
  const commentValueLength = commentInput.length;

  if(commentValueLength > MAX_COMMENT_LENGTH) {
    commentInput.setCustomValidity('Длина комментария не должна превышать ' + MAX_COMMENT_LENGTH + ' символов');
  } else {
    commentInput.setCustomValidity('');
  }
  commentInput.reportValidity();
})














// Решение:
// var onPopupEscPress = function (evt) {
// if (nameForm === document.activeElement) {
// return evt;
// } else {
// if (evt.keyCode === ESC_BUTTON) {
// closePopup();
// }
// }
// };
