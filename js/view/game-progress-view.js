import AbstractView from './abstract-view';
import GameModel from '../model/game-model';

export default class GameProgressView extends AbstractView {
  constructor() {
    super();
    this.model = new GameModel();
  }

  get template() {
    return `
      <ul class="stats">
        ${this.model.getGameProgress()}
        ${this.model.getAmountRemainingLevels()
        .fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
      </ul>
    `;
  }
}
