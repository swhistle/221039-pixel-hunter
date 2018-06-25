import {AMOUNT_LEVELS} from "./levels";

const InitialGameData = {
  LIVES: 3,
  TIME: 30,
  SCORES: []
};

const Rules = {
  LEVELS: AMOUNT_LEVELS,
  LEVEL_DURATION: InitialGameData.TIME,
  ROOM_TO_FAIL: InitialGameData.LIVES
};

const GameResult = {
  VICTORY: `victory`,
  LOSS: `loss`
};

const Score = {
  CORRECT_ANSWER: 100,
  FAST_ANSWER: 150,
  SLOW_ANSWER: 50,
  WRONG_ANSWER: 0,
  REMAINING_LIVES: 50
};


let currentLives = InitialGameData.LIVES;
let currentTime = InitialGameData.TIME;
let currentScores = InitialGameData.SCORES;

const gameStateObject = {
  lives: currentLives,
  scores: currentScores
};

/** Функции **/
const answerCorrectly = () => {
  gameStateObject.scores.push(Score.CORRECT_ANSWER);
};

const answerWrong = () => {
  gameStateObject.lives--;
  gameStateObject.scores.push(Score.WRONG_ANSWER);
};

/** Начинаем игру заново, то есть приводим объект состояния игры к исходному **/
const startNewGame = () => {
  gameStateObject.lives = InitialGameData.LIVES;
  gameStateObject.scores.splice(0, gameStateObject.scores.length);
};

const sumArray = (array, initialValue = 0) => {
  return array.reduce((sum, currentItem) => {
    return sum + currentItem;
  }, initialValue);
};

const calculateScoredPoints = (arrayScores, lives) => {
  if (arrayScores !== undefined && lives !== undefined) {
    return sumArray(arrayScores) + lives * Score.REMAINING_LIVES;
  } else if (lives === undefined) {
    return sumArray(arrayScores);
  } else if (arrayScores === undefined) {
    return lives * Score.REMAINING_LIVES;
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
  Rules,
  InitialGameData,
  GameResult,
  Score,
  gameStateObject,
  answerCorrectly,
  answerWrong,
  startNewGame,
  calculateScoredPoints,
  runTimer
};
