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

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Ножки крестиком , лапки бантиком',
  'Рыженькие кошки - пушистенькие ножки.',
  'Я на работе)',
  'Плюша',
  'Вот где грация!',
  'Ой, какой безмятежный сон у котишки',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const getRandomArrayElement = (array) => {
  return array[getRandomNumber(0, array.length-1)];
}

// Создать массив commentId из 6 неповторяющихся чисел
const COMMENT_COUNT = 6;
const commentId = [];

while(commentId.length<COMMENT_COUNT) {
  const id = getRandomNumber(0, COMMENT_COUNT);
  if(commentId.indexOf(id) === -1){
    commentId.push(id);
  }
}

const comment = commentId.map(id => (
  {
    id: id,
    avatar: `img/avatar-${id}.svg`,
    message: MESSAGE[id],
    name: `${getRandomArrayElement(FISRT_NAME)}` + ' ' + `${getRandomArrayElement(LAST_NAME)}`,
  }),
)

const getRandomArrayComment = (comment) => {
  return comment[getRandomNumber(1, comment.length-1)];
}

// Создать массив ids из 25 неповторяющихся чисел
const COUNT = 25;
const ids = [];

while(ids.length<COUNT) {
  const id = getRandomNumber(1, COUNT);
  if(ids.indexOf(id) === -1){
    ids.push(id);
  }
}

const result = ids.map(id => (
  {
    id: id,
    url: `photos/${id}.jpg`,
    description: `${getRandomArrayElement(DESCRIPTION)}`,
    likes: `${getRandomNumber(MIN_LIKES, MAX_LIKES)}`,
    comments: getRandomArrayComment(comment),
  }),
)
console.log(result);
