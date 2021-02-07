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

const FISRT_NAME = [
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

const LAST_NAME = [
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

const DESCRIPTION = [
  'Ножки крестиком , лапки бантиком',
  'Рыженькие кошки - пушистенькие ножки.',
  'Я на работе)',
  'Плюша',
  'Вот где грация!',
  'Ой, какой безмятежный сон у котишки',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const COMMENT_ID = 100;
const commentId = [];
const COMMENT_COUNT = 5;
const commentsId = [];
const COUNT = 25;
const ids = [];


const getRandomArrayElement = (array) => {
  return array[getRandomNumber(0, array.length-1)];
}

// generate unique random array element for id
const generateArrayID = (arrays, arrayMax) => {
  while(arrays.length<arrayMax) {
    const id = getRandomNumber(0, arrayMax);
    if(arrays.indexOf(id) === -1){
      arrays.push(id);
    }
  }
}

generateArrayID(commentsId, COMMENT_COUNT);
generateArrayID(commentId, COMMENT_ID)

const comment = commentsId.map(id => (
  {
    id: `${getRandomArrayElement(commentId)}`,
    avatar: `img/avatar-${id}.svg`,
    message: MESSAGE[id],
    name: `${getRandomArrayElement(FISRT_NAME)}` + ' ' + `${getRandomArrayElement(LAST_NAME)}`,
  }),
)

const getRandomArrayComment = (item) => {
  return comment[getRandomNumber(0, item.length)];
}

generateArrayID(ids, COUNT);

const result = ids.map(id => (
  {
    id: id,
    url: `photos/${id}.jpg`,
    description: `${getRandomArrayElement(DESCRIPTION)}`,
    likes: `${getRandomNumber(MIN_LIKES, MAX_LIKES)}`,
    comments: [getRandomArrayComment(comment), getRandomArrayComment(comment)],
  }),
)
result;
