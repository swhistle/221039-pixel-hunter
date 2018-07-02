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

export {
  GameResult,
  Score,
  calculateScoredPoints
};
