import {gameStateObject, SCORE, INITIAL_GAME_DATA} from "../data/game-data";

export default class GameModel {
  constructor(userName) {
    this.username = userName;
    this._gameState = gameStateObject;
  }

  getCurrentLives() {
    return this._gameState.lives;
  }

  getScore() {
    return this._gameState.scores;
  }

  answerCorrectly() {
    this._gameState.scores.push(SCORE.correctAnswer);
  }

  answerWrong() {
    this._gameState.lives--;
    this._gameState.scores.push(SCORE.wrongAnswer);
  }

  startNewGame(name) {
    this._gameState.lives = INITIAL_GAME_DATA.lives;
    this._gameState.scores.splice(0, gameStateObject.scores.length);
    this._gameState.userName = name;
  }
}
