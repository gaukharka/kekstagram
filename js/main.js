// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

const getRandomNumber = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(0, 5);

// Функция для проверки максимальной длины строки.
// Тут не сложно, сама написала функцию

const isStringTooLong = function(stringToCheck, maxLength) {
  const stringToCheckLength = stringToCheck.length;

  return stringToCheckLength > maxLength;
};

isStringTooLong('casjdajsdjajd ajdjasd asjdjasdjas asdahsdhd', 140);
