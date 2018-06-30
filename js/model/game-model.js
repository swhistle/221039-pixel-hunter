import {Score} from '../data/game-data';
import {AMOUNT_LEVELS} from '../data/levels';

/* TODO выпилить время и добавить его в отдельную структуру с таймером */
const InitialGameData = {
  LIVES: 3,
  TIME: 30,
  SCORES: [],
  USER_NAME: ``
};

let currentLives = InitialGameData.LIVES;
let currentScores = InitialGameData.SCORES;

const gameStateObject = {
  lives: currentLives,
  scores: currentScores,
  userName: InitialGameData.USER_NAME
};

export default class GameModel {
  constructor() {
    this._gameState = gameStateObject;
    this._initialGameData = InitialGameData;
  }

  getInitialLives() {
    return this._initialGameData.LIVES;
  }

  getInitialTime() {
    return this._initialGameData.TIME;
  }

  getCurrentLives() {
    return this._gameState.lives;
  }

  getScore() {
    return this._gameState.scores;
  }

  answerCorrectly() {
    this._gameState.scores.push(Score.CORRECT_ANSWER);
  }

  answerWrong() {
    this._gameState.lives--;
    this._gameState.scores.push(Score.WRONG_ANSWER);
  }

  /* Начинаем игру заново, то есть приводим объект состояния игры к исходному */
  startNewGame(name) {
    this._gameState.lives = InitialGameData.LIVES;
    this._gameState.scores.splice(0, gameStateObject.scores.length);
    this._gameState.userName = name;
  }

  /* TODO перенести в модель с уровнями */
  getGameProgress() {
    return gameStateObject.scores.map((levelResult) => {
      if (levelResult === Score.WRONG_ANSWER) {
        return `<li class="stats__result stats__result--wrong"></li>`;
      } else if (levelResult === Score.SLOW_ANSWER) {
        return `<li class="stats__result stats__result--slow"></li>`;
      } else if (levelResult === Score.CORRECT_ANSWER) {
        return `<li class="stats__result stats__result--correct">`;
      } else if (levelResult === Score.FAST_ANSWER) {
        return `<li class="stats__result stats__result--fast"></li>`;
      }
      return null;
    }).join(``);
  }

  getAmountRemainingLevels() {
    return new Array(AMOUNT_LEVELS - this.getScore().length);
  }
}
