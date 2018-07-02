import GameStateView from '../view/game-state-view';
import {renderGameState} from "../functions";

const ONE_SECOND = 1000; // 1000 milliseconds
const INITIAL_TIME = 30; // 30 seconds
let timeLeft = INITIAL_TIME;
let timer;

export default class TimerModel {
  constructor() {
    this._initialTime = INITIAL_TIME;
  }

  getInitialTime() {
    return this._initialTime;
  }

  getTimeLeft() {
    return timeLeft;
  }

  startTimer() {
    this.viewGameCurrentState = new GameStateView(this.getTimeLeft());
    renderGameState(this.viewGameCurrentState.element);

    if (timeLeft === 0) {
      this.levelFailed();
      return;
    }

    timer = setTimeout(() => {
      this.tick();
      this.startTimer();
    }, ONE_SECOND);
  }

  stopTimer() {
    if (timer === undefined) {
      return;
    }
    clearTimeout(timer);
  }

  reStartTimer() {
    if (timer === undefined) {
      return;
    }

    this.stopTimer();
    timeLeft = INITIAL_TIME;
  }

  tick() {
    timeLeft--;
  }

  levelFailed() {

  }

}
