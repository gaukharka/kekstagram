const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_COUNT = 10;
const MAX_COMMENT_LENGTH = 140;
const regex = /#\w+$/;

//  HASHTAGS
hashtagInput.addEventListener('input', (evt) => {

  const input = evt.target;
  const hashtags = input.value.split(' ');     // array

  // Не могу понять что неправильно делаю, но этот код не работает
  for(let i=0; i < hashtags.length; i++){
    console.log(hashtags[i][0]);

    if(hashtags[i][0] !== '#'){
      input.setCustomValidity('Хэштег должен начинаться с символа #')
    } else if(!hashtags[i].match(regex)){
      input.setCustomValidity('Хэштег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т. д')
    } else if(hashtags.length >= MAX_HASHTAG_COUNT){
      input.setCustomValidity('Допускаемое количество хэштегов max 5');
    } else if(hashtags[i].length >= MAX_HASHTAG_LENGTH){
      input.setCustomValidity('Допустимая длина хэштегов 20 символов');      // working
    } else if(hashtags[i] === hashtags[i-1]){
      input.setCustomValidity('Хэштеги не должны повторятся');                // working
    } else {
      input.setCustomValidity('');
    }
    input.reportValidity();
  }
})

// COMMENTS
commentInput.addEventListener('input', () => {
  const commentValueLength = commentInput.value.length;

  if(commentValueLength > MAX_COMMENT_LENGTH) {
    commentInput.setCustomValidity('Длина комментария не должна превышать ' + MAX_COMMENT_LENGTH + ' символов');
  } else {
    commentInput.setCustomValidity('');
  }

  commentInput.reportValidity();
})



// /#\w+$/

// !@#$%^&*.,<>/\'";:? and return true if the string contains atleast one of those chars.
//   /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
