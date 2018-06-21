const TASK_TYPE = {
  twoPaintingsOrPhotos: `twoPaintingsOrPhotos`,
  paintingOrPhoto: `paintingOrPhoto`,
  onePaintingOfThreeImages: `onePaintingOfThreeImages`
};

const ANSWER_TYPE = {
  painting: `paint`,
  photo: `photo`
};

const LEVELS = {
  'level-1': {
    type: TASK_TYPE.twoPaintingsOrPhotos,
    answers: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        value: ANSWER_TYPE.painting
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: ANSWER_TYPE.photo
      }
    ],
    nextLevel: `level-2`
  },
  'level-2': {
    type: TASK_TYPE.paintingOrPhoto,
    answers: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        value: ANSWER_TYPE.painting
      }
    ],
    nextLevel: `level-3`
  },
  'level-3': {
    type: TASK_TYPE.onePaintingOfThreeImages,
    answers: [
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        value: ANSWER_TYPE.painting
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        value: ANSWER_TYPE.photo
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: ANSWER_TYPE.photo
      }
    ],
    nextLevel: `level-4`
  },
  'level-4': {
    type: TASK_TYPE.onePaintingOfThreeImages,
    answers: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        value: ANSWER_TYPE.painting
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: ANSWER_TYPE.photo
      },
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        value: ANSWER_TYPE.photo
      }
    ],
    nextLevel: `level-5`
  },
  'level-5': {
    type: TASK_TYPE.paintingOrPhoto,
    answers: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        value: ANSWER_TYPE.painting
      }
    ],
    nextLevel: `level-6`
  },
  'level-6': {
    type: TASK_TYPE.twoPaintingsOrPhotos,
    answers: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        value: ANSWER_TYPE.painting
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: ANSWER_TYPE.photo
      },
    ],
    nextLevel: `level-7`
  },
  'level-7': {
    type: TASK_TYPE.paintingOrPhoto,
    answers: [
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        value: ANSWER_TYPE.painting
      }
    ],
    nextLevel: `level-8`
  },
  'level-8': {
    type: TASK_TYPE.onePaintingOfThreeImages,
    answers: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        value: ANSWER_TYPE.painting
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: ANSWER_TYPE.photo
      },
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        value: ANSWER_TYPE.photo
      }
    ],
    nextLevel: `level-9`
  },
  'level-9': {
    type: TASK_TYPE.onePaintingOfThreeImages,
    answers: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        value: ANSWER_TYPE.painting
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        value: ANSWER_TYPE.photo
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        value: ANSWER_TYPE.photo
      }
    ],
    nextLevel: `level-10`
  },
  'level-10': {
    type: TASK_TYPE.paintingOrPhoto,
    answers: [
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        value: ANSWER_TYPE.photo
      }
    ],
    nextLevel: `level-10`
  }
};

export {LEVELS, ANSWER_TYPE, TASK_TYPE};
