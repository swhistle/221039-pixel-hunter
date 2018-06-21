const RULES = {
  levels: 10,
  levelDuration: 30,
  roomToFail: 3
};

const INITIAL_GAME_DATA = {
  lives: 3,
  time: RULES.levelDuration,
  scores: []
};

let currentLives = INITIAL_GAME_DATA.lives;
let currentTime = INITIAL_GAME_DATA.time;
let currentScores = INITIAL_GAME_DATA.scores;

const gameState = {
  lives: currentLives,
  scores: currentScores
};

const answerCorrectly = () => {
  gameState.scores.push(100);
};

const answerWrong = () => {
  gameState.lives--;
  gameState.scores.push(0);
};

const calculateScoredPoints = (arrayScores = currentScores, lives = currentLives) => {
  const lostLevels = [];
  let sum = 0;
  arrayScores.forEach((level) => {
    if (level === 0) {
      lostLevels.push(level);
    } else {
      sum = sum + level;
    }
  });

  if (lostLevels.length >= 4) {
    return -1;
  } else {
    return sum + lives * 50;
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

export {RULES, INITIAL_GAME_DATA, gameState, answerCorrectly, answerWrong, calculateScoredPoints, runTimer};
