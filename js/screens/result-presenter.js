import ResultView from '../view/result-view';
import LossView from '../view/loss-view';
import {GameResult, Score, calculateScoredPoints} from "../data/game-data";
import GameModel from '../model/game-model';
import {removeGameProgressContainer, removeGameStateContainer, putAfterContainer} from "../functions";

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

  showStats(state, userName) {
    const result = state.getScore().map((score) => {
      if (score === Score.WRONG_ANSWER) {
        return `<li class="stats__result stats__result--wrong"></li>`;
      } else if (score === Score.SLOW_ANSWER) {
        return `<li class="stats__result stats__result--slow"></li>`;
      } else if (score === Score.CORRECT_ANSWER) {
        return `<li class="stats__result stats__result--correct">`;
      } else if (score === Score.FAST_ANSWER) {
        return `<li class="stats__result stats__result--fast"></li>`;
      }
      return null;
    }).join(``);
    const tableResult = `
    <h3>Лучшие результаты игрока: ${userName}</h3>

    <table class="scores">
      <tr>
        <td>${result}</td>
        <td>${state.getAmountRemainingLevels().fill(`<span class="stats__result stats__result--unknown"></span>`).join(``)}</td>
        <td>${calculateScoredPoints(state.getScore(), state.getCurrentLives())}</td>
      </tr>
    </table>
    `;
    const resultsElem = document.createElement(`div`);
    resultsElem.innerHTML = tableResult;
    putAfterContainer(resultsElem);
  }
}
