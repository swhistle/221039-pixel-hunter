import ResultView from '../view/result-view';
import LossView from '../view/loss-view';
import {GameResult} from "../data/game-data";
import {removeGameProgressContainer, removeGameStateContainer} from "../functions";

export default class ResultPresenter {
  constructor(result) {
    this.result = result;
  }

  init() {
    removeGameStateContainer();
    removeGameProgressContainer();

    if (this.result === GameResult.LOSS) {
      this.view = new LossView();
    }

    if (this.result === GameResult.VICTORY) {
      this.view = new ResultView();
    }
  }
}
