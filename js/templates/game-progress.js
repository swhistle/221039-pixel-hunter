import {getElementFromTemplate, renderGameProgress} from '../functions';
import {gameStateObject, Score} from '../data/game-data';
import {AMOUNT_LEVELS} from "../data/levels";

const showGameProgress = () => {
  return gameStateObject.scores.map((levelResult) => {
    switch (levelResult) {
      case Score.WRONG_ANSWER:
        return `<li class="stats__result stats__result--wrong"></li>`;

      case Score.SLOW_ANSWER:
        return `<li class="stats__result stats__result--slow"></li>`;

      case Score.CORRECT_ANSWER:
        return `<li class="stats__result stats__result--correct">`;

      case Score.FAST_ANSWER:
        return `<li class="stats__result stats__result--fast"></li>`;

      default:
        return null;
    }
  }).join(``);
};

const moduleGameProgress = () => {
  const gameProgress = getElementFromTemplate(`
        <ul class="stats">
          ${showGameProgress()}
          ${new Array(AMOUNT_LEVELS - gameStateObject.scores.length)
          .fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
        </ul>
      
`);

  renderGameProgress(gameProgress);
};

export {moduleGameProgress, showGameProgress};
