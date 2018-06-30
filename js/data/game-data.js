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

/* TODO перенести в отдельную структуру с таймером */
let currentTime = 30;

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
  GameResult,
  Score,
  calculateScoredPoints,
  runTimer
};
