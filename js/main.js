import {firstNames, lastNames, descriptions, messages, MIN_LIKES, MAX_LIKES, COUNT, MAX_AVATAR, ids} from './data.js';
import {getRandomNumber} from './util.js';

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

const photoDescriptionMocks = ids.map(id => (
  {
    id: id,
    url: `photos/${id}.jpg`,
    description: `${getRandomElement(descriptions)}`,
    likes: `${getRandomNumber(MIN_LIKES, MAX_LIKES)}`,
    comments: generateComments(id),
  }),
)

export {photoDescriptionMocks};
