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

getRandomNumber(0, 5);

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

const MESSAGE = ['Всё отлично!',
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

const COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;

const avatarNumber = getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER);

const getRandomArrayElement = (element) => {
  return element[getRandomNumber(0, element.length-1)];
}

// Создать массив ids из неповторяющихся чисел
const ids = [];

while(ids.length<COUNT) {
  const id = getRandomNumber(1, COUNT);
  if(ids.indexOf(id) == -1){
    ids.push(id);
  }
}

const result = ids.map(id => (
  {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: {
      id: id,
      avatar: `img/avatar-${avatarNumber}.svg`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(FISRT_NAME) + ' ' + getRandomArrayElement(LAST_NAME),
    },
  }),
)

console.log(result);
