import {AMOUNT_LEVELS} from "./levels";

const INITIAL_GAME_DATA = {
  lives: 3,
  time: 30,
  scores: []
};

const RULES = {
  levels: AMOUNT_LEVELS,
  levelDuration: INITIAL_GAME_DATA.time,
  roomToFail: INITIAL_GAME_DATA.lives
};

const GAME_RESULT = {
  victory: `victory`,
  loss: `loss`
};

const SCORE = {
  correctAnswer: 100,
  fastAnswer: 150,
  slowAnswer: 50,
  wrongAnswer: 0,
  remainingLives: 50
};


let currentLives = INITIAL_GAME_DATA.lives;
let currentTime = INITIAL_GAME_DATA.time;
let currentScores = INITIAL_GAME_DATA.scores;

const gameStateObject = {
  lives: currentLives,
  scores: currentScores
};

/** Функции **/
const answerCorrectly = () => {
  gameStateObject.scores.push(SCORE.correctAnswer);
};

const answerWrong = () => {
  gameStateObject.lives--;
  gameStateObject.scores.push(SCORE.wrongAnswer);
};

/** Начинаем игру заново, то есть приводим объект состояния игры к исходному **/
const startNewGame = () => {
  gameStateObject.lives = INITIAL_GAME_DATA.lives;
  gameStateObject.scores.splice(0, gameStateObject.scores.length);
};

const showGameProgress = () => {
  return gameStateObject.scores.map((levelResult) => {
    switch (levelResult) {
      case SCORE.wrongAnswer:
        return `<li class="stats__result stats__result--wrong"></li>`;

      case SCORE.slowAnswer:
        return `<li class="stats__result stats__result--slow"></li>`;

      case SCORE.correctAnswer:
        return `<li class="stats__result stats__result--correct">`;

      case SCORE.fastAnswer:
        return `<li class="stats__result stats__result--fast"></li>`;

      default:
        return null;
    }
  }).join(``);
};

const calculateScoredPoints = (arrayScores, lives) => {
  if (arrayScores && lives !== undefined) {
    return arrayScores.reduce((sumPoints, currentPoint) => {
      return sumPoints + currentPoint;
    }, 0) + lives * SCORE.remainingLives;
  } else if (lives === undefined) {
    return arrayScores.reduce((sumPoints, currentPoint) => {
      return sumPoints + currentPoint;
    }, 0);
  } else if (arrayScores === undefined) {
    return lives * SCORE.remainingLives;
  } else {
    return null;
  }
};

const runTimer = (updates = 0, startTime = currentTime) => {
  const timerObject = {time: startTime, gameOver: false};
  const tick = () => {
    timerObject.time--;
    if (timerObject.time === 0) {
      timerObject.gameOver = true;
    }
  };
  for (let i = 0; i < updates; i++) {
    tick();
  }
  return timerObject;
};

export {
  RULES,
  INITIAL_GAME_DATA,
  GAME_RESULT,
  SCORE,
  gameStateObject,
  answerCorrectly,
  answerWrong,
  startNewGame,
  showGameProgress,
  calculateScoredPoints,
  runTimer
};
