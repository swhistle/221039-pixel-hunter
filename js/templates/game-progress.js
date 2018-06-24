import {getElementFromTemplate, renderGameProgress} from '../functions';
import {gameStateObject, SCORE} from '../data/game-data';
import {AMOUNT_LEVELS} from "../data/levels";

const showGameProgress = () => {
  return gameStateObject.scores.map((levelResult) => {
    switch (levelResult) {
      case SCORE.wrongAnswer:
        return `<li class="stats__result stats__result--wrong"></li>`;

      case SCORE.slowAnswer:
        return `<li class="stats__result stats__result--slow"></li>`;

      case SCORE.correctAnswer:
        return `<li class="stats__result stats__result--correct">`;

      case SCORE.fastAnswer:
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
