import AbstractView from './abstract-view';
import {gameStateObject, showGameProgress} from '../data/game-data';
import {AMOUNT_LEVELS} from "../data/levels";

export default class GameProgressView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <ul class="stats">
        ${showGameProgress()}
        ${new Array(AMOUNT_LEVELS - gameStateObject.scores.length)
        .fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
      </ul>
    `;
  }
}
