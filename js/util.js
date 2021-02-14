const getRandomNumber = function(min, max) {

  if(min<max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('Значение ' + min + ' не может быть больше, чем значение ' + max + '!')
}

const isStringTooLong = function(stringToCheck, maxLength) {
  const stringToCheckLength = stringToCheck.length;

  return stringToCheckLength > maxLength;
};

const getRandomElement = (array) => {
  return array[getRandomNumber(0, array.length-1)];
}
export {getRandomNumber, isStringTooLong, getRandomElement};

