import AbstractView from './abstract-view';
import {gameStateObject} from "../data/game-data";
import {showGameProgress} from "../templates/game-progress";
import {AMOUNT_LEVELS} from "../data/levels";

export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <div class="result">
        <table class="result__table">
          <tr>
            <td>
              <ul class="stats">
                ${showGameProgress()}
                ${new Array(AMOUNT_LEVELS - gameStateObject.scores.length)
                .fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
              </ul>
            </td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr>
        </table>
      </div>
    `;
  }
}
