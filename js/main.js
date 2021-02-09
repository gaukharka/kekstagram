// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

const getRandomNumber = function(min, max) {

  if(min<max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('Значение ' + min + ' не может быть больше, чем значение ' + max + '!')
}

// Функция для проверки максимальной длины строки.
// Тут не сложно, сама написала функцию

const isStringTooLong = function(stringToCheck, maxLength) {
  const stringToCheckLength = stringToCheck.length;

  return stringToCheckLength > maxLength;
};

isStringTooLong('casjdajsdjajd ajdjasd asjdjasdjas asdahsdhd', 140);

const firstNames = [
  'Айрат',
  'Борис',
  'Алёна',
  'Всеволод',
  'Бенджамин',
  'Гарри',
  'Дамир',
  'Октябрина',
  'Илья',
  'Нина',
  'Ким',
  'Августа',
  'Айсун',
  'Николь',
];

const lastNames = [
  'Смит',
  'Тейлор',
  'Джексон',
  'Харрис',
  'Мартинес',
  'Ли',
  'Уокер',
  'Эрнандес',
  'Райт',
  'Грин',
  'Филлипс',
  'Кэмпбелл',
  'Паркер',
  'Эванс',
]

const descriptions = [
  'Ножки крестиком , лапки бантиком',
  'Рыженькие кошки - пушистенькие ножки.',
  'Я на работе)',
  'Плюша',
  'Вот где грация!',
  'Ой, какой безмятежный сон у котишки',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const COUNT = 25;
const MAX_AVATAR = 6;
const ids = [];


const getRandomElement = (array) => {
  return array[getRandomNumber(0, array.length-1)];
}

// generate unique random array element for id
const fillArrayWithIDS = (array, arrayMax) => {
  while(array.length<arrayMax) {
    const id = getRandomNumber(0, arrayMax);
    if(array.indexOf(id) === -1){
      array.push(id);
    }
  }
}

fillArrayWithIDS(ids, COUNT);

const generateComment = (id) => {
  return {
    id: `comment${id}`,
    avatar: `img/avatar-${getRandomNumber(1, MAX_AVATAR)}.svg`,
    message: messages[getRandomNumber(0, messages.length-1)],
    name: `${getRandomElement(firstNames)}` + ' ' + `${getRandomElement(lastNames)}`,
  }
}

const generateComments = (photoId) => {
  const resultLength = getRandomNumber(1, 2);
  const result = [];
  for (let i = 0; i < resultLength; i++) {
    result.push(generateComment(`${photoId}${i}`));
  }
  return result;
}

const generatePhotoDescription = ids.map(id => (
  {
    id: id,
    url: `photos/${id}.jpg`,
    description: `${getRandomElement(descriptions)}`,
    likes: `${getRandomNumber(MIN_LIKES, MAX_LIKES)}`,
    comments: generateComments(id),
  }),
)

generatePhotoDescription();
