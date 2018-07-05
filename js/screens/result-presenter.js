import ResultView from '../view/result-view';
import LossView from '../view/loss-view';
import {GameResult, Score, calculateScoredPoints} from "../data/game-data";
import GameModel from '../model/game-model';
import {AMOUNT_LEVELS} from "../data/levels";
import {
  removeGameProgressContainer,
  removeGameStateContainer,
  initStatisticContainer,
  renderStatisticContainer,
} from "../functions";

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
    } else {
      return;
    }
  }

  showStats(results) {
    const options = {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
      hour: `numeric`,
      minute: `numeric`
    };

    initStatisticContainer();

    const playerName = `<h3 style="padding-left: 50px">Лучшие результаты игрока: ${results[0].name}</h3>`;
    const nameElem = document.createElement(`div`);
    nameElem.innerHTML = playerName;
    renderStatisticContainer(nameElem);

    results.forEach((resultItem) => {
      const gameState = resultItem._gameState;
      const scores = gameState.scores.map((score) => {
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
      const remainingLevels = new Array(AMOUNT_LEVELS - gameState.scores.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``);
      const remainingLives = new Array(gameState.lives).fill(`</li><span class="stats__result stats__result--alive"></span>`).join(``);

      const tableResult = `
        <table class="scores">
          <tr>
            <td>
              <ul>
                ${scores}
                ${remainingLevels}
              </ul>
            </td>
            ${gameState.lives > 0 ? `<td style="width: 150px; text-align: right">${remainingLives}</td><td style="width: 100px; text-align: right">${calculateScoredPoints(gameState.scores)}</td>` : `<td style="width: 250px; text-align: right">FAIL</td>`}
            <td style="width: 250px; text-align: right">${new Date(resultItem.date).toLocaleString(`ru`, options)}</td>
          </tr>
        </table>
      `;
      const resultsElem = document.createElement(`div`);
      resultsElem.innerHTML = tableResult;
      renderStatisticContainer(resultsElem);
    });
  }
}
