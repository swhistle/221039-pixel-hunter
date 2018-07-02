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
const LEVELS = [
  {
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
    ]
  },
  {
    type: TaskType.PAINTING_OR_PHOTO,
    answers: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        value: AnswerType.PAINTING
      }
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
    type: TaskType.PAINTING_OR_PHOTO,
    answers: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        value: AnswerType.PAINTING
      }
    ]
  },
  {
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
    ]
  },
  {
    type: TaskType.PAINTING_OR_PHOTO,
    answers: [
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        value: AnswerType.PAINTING
      }
    ]
  },
  {
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
    ]
  },
  {
    type: TaskType.ONE_PAINTING_OF_THREE_IMAGES,
    answers: [
      {
        src: `https://k42.kn3.net/CF42609C81.jpg`,
        value: AnswerType.PAINTING
      },
      {
        src: `https://i.imgur.com/DiHM5Zb1.jpg`,
        value: AnswerType.PHOTO
      },
      {
        src: `http://i.imgur.com/1KegWPz1.jpg`,
        value: AnswerType.PHOTO
      }
    ]
  },
  {
    type: TaskType.PAINTING_OR_PHOTO,
    answers: [
      {
        src: `http://i.imgur.com/DKR1HtB1.jpg`,
        value: AnswerType.PHOTO
      }
    ]
  }
];

const AMOUNT_LEVELS = LEVELS.length;

export {LEVELS, AnswerType, TaskType, AMOUNT_LEVELS};
