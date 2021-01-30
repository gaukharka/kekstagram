// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomNumber = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   
   console.log(getRandomNumber(0, 5)); 

//    Функция для проверки максимальной длины строки.

const isCommentTooLong = function(commentLength, maxLength) {
    if(commentLength>maxLength) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isCommentTooLong(150, 140);