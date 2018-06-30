import AbstractView from './abstract-view';
import GameModel from '../model/game-model';

export default class GameStateView extends AbstractView {
  constructor() {
    super();
    this.model = new GameModel();
  }

  get template() {
    return `
      <h1 class="game__timer">${this.model.getInitialTime()}</h1>
      <div class="game__lives">
      ${new Array(this.model.getInitialLives() - this.model.getCurrentLives())
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
      ${new Array(this.model.getCurrentLives())
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
      </div>
    `;
  }
}
