import ResultView from '../view/result-view';
import LossView from '../view/loss-view';
import {GameResult} from "../data/game-data";
import GameModel from '../model/game-model';
import {removeGameProgressContainer, removeGameStateContainer} from "../functions";

export default class ResultPresenter {
  constructor(result) {
    this.result = result;
    this.model = new GameModel();
  }

  init() {
    removeGameStateContainer();
    removeGameProgressContainer();

    if (this.result === GameResult.VICTORY && this.model.getCurrentLives() > 0) {
      this.view = new ResultView();
    } else if (this.result === GameResult.LOSS || this.model.getCurrentLives() === 0) {
      this.view = new LossView();
    }
  }
}
