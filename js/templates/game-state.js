import {getElementFromTemplate, renderGameState} from '../functions';
import {InitialGameData, gameStateObject} from "../data/game-data";

const moduleGameState = () => {
  const gameState = getElementFromTemplate(`
    <h1 class="game__timer">${InitialGameData.TIME}</h1>
    <div class="game__lives">
    ${new Array(InitialGameData.LIVES - gameStateObject.lives)
    .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
    .join(``)}
    ${new Array(gameStateObject.lives)
    .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
    .join(``)}
    </div>
  `);

  renderGameState(gameState);
};

export default moduleGameState;
