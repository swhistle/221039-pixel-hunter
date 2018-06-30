import AbstractView from './abstract-view';
import GameModel from '../model/game-model';

export default class RulesView extends AbstractView {
  constructor() {
    super();
    this.model = new GameModel();
  }

  get template() {
    return `
      <div class="result">
        <table class="result__table">
          <tr>
            <td>
              <ul class="stats">
                ${this.model.getGameProgress()}
                ${this.model.getAmountRemainingLevels()
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
