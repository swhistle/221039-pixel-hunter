import AbstractView from './abstract-view';
import {Score, gameStateObject, showGameProgress, calculateScoredPoints} from "../data/game-data";
import {AMOUNT_LEVELS} from "../data/levels";

export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <div class="result">
        <h1>Победа!</h1>
        <table class="result__table">
          <tr>
            <td colspan="2">
              <ul class="stats">
                ${showGameProgress()}
                ${new Array(AMOUNT_LEVELS - gameStateObject.scores.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
               </ul>
            </td>
            <td class="result__points">×&nbsp;
              ${Score.CORRECT_ANSWER}
            </td>
            <td class="result__total">
              ${calculateScoredPoints(gameStateObject.scores)}
            </td>
          </tr>
          <tr>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">
              ${gameStateObject.lives}&nbsp;<span class="stats__result stats__result--alive"></span>
            </td>
            <td class="result__points">
              ×&nbsp;${Score.REMAINING_LIVES}
            </td>
            <td class="result__total">
              ${calculateScoredPoints(undefined, gameStateObject.lives)}
            </td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">
              ${calculateScoredPoints(gameStateObject.scores, gameStateObject.lives)}
            </td>
          </tr>
        </table>
      </div>
    `;
  }
}
