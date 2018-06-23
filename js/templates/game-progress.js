import {getElementFromTemplate, renderGameProgress} from '../functions';
import {gameStateObject} from '../data/game-data';
import {AMOUNT_LEVELS} from "../data/levels";

const showGameProgress = () => {
  return gameStateObject.scores.map((levelResult) => {
    switch (levelResult) {
      case 0:
        return `<li class="stats__result stats__result&#45;&#45;wrong"></li>`;

      case 50:
        return `<li class="stats__result stats__result&#45;&#45;slow"></li>`;

      case 100:
        return `<li class="stats__result stats__result&#45;&#45;correct">`;

      case 150:
        return `<li class="stats__result stats__result&#45;&#45;fast"></li>`;

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
          .fill(`<li class="stats__result stats__result&#45;&#45;unknown"></li>`).join(``)}
        </ul>
      
`);

  renderGameProgress(gameProgress);
};

export {moduleGameProgress, showGameProgress};
