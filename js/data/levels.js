const TaskType = {
  TWO_PAINTINGS_OR_PHOTOS: `twoPaintingsOrPhotos`,
  PAINTING_OR_PHOTO: `paintingOrPhoto`,
  ONE_PAINTING_OF_THREE_IMAGES: `onePaintingOfThreeImages`
};

const AnswerType = {
  PAINTING: `paint`,
  PHOTO: `photo`
};

/* TODO переписать на модель */
const LEVELS = {
  'level-1': {
    type: TaskType.TWO_PAINTINGS_OR_PHOTOS,
    answers: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        value: AnswerType.PAINTING
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: AnswerType.PHOTO
      }
    ],
    nextLevel: `level-2`
  },
  'level-2': {
    type: TaskType.PAINTING_OR_PHOTO,
    answers: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        value: AnswerType.PAINTING
      }
    ],
    nextLevel: `level-3`
  },
  'level-3': {
    type: TaskType.ONE_PAINTING_OF_THREE_IMAGES,
    answers: [
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        value: AnswerType.PAINTING
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        value: AnswerType.PHOTO
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: AnswerType.PHOTO
      }
    ],
    nextLevel: `level-4`
  },
  'level-4': {
    type: TaskType.ONE_PAINTING_OF_THREE_IMAGES,
    answers: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        value: AnswerType.PAINTING
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: AnswerType.PHOTO
      },
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        value: AnswerType.PHOTO
      }
    ],
    nextLevel: `level-5`
  },
  'level-5': {
    type: TaskType.PAINTING_OR_PHOTO,
    answers: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        value: AnswerType.PAINTING
      }
    ],
    nextLevel: `level-6`
  },
  'level-6': {
    type: TaskType.TWO_PAINTINGS_OR_PHOTOS,
    answers: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        value: AnswerType.PHOTO
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: AnswerType.PHOTO
      },
    ],
    nextLevel: `level-7`
  },
  'level-7': {
    type: TaskType.PAINTING_OR_PHOTO,
    answers: [
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        value: AnswerType.PAINTING
      }
    ],
    nextLevel: `level-8`
  },
  'level-8': {
    type: TaskType.ONE_PAINTING_OF_THREE_IMAGES,
    answers: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        value: AnswerType.PHOTO
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: AnswerType.PHOTO
      },
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        value: AnswerType.PAINTING
      }
    ],
    nextLevel: `level-9`
  },
  'level-9': {
    type: TaskType.ONE_PAINTING_OF_THREE_IMAGES,
    answers: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        value: AnswerType.PAINTING
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        value: AnswerType.PHOTO
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: AnswerType.PHOTO
      }
    ],
    nextLevel: `level-10`
  },
  'level-10': {
    type: TaskType.PAINTING_OR_PHOTO,
    answers: [
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        value: AnswerType.PHOTO
      }
    ],
    nextLevel: `finish-game`
  },
  'finish-game': {
    type: null
  }
};

let levelCounter = 0;

for (const key in LEVELS) {
  if (key !== `finish-game`) {
    levelCounter++;
  }
}

const AMOUNT_LEVELS = levelCounter;

export {LEVELS, AnswerType, TaskType, AMOUNT_LEVELS};
