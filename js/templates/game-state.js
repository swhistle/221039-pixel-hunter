import {getElementFromTemplate, renderGameState} from '../functions';
import {INITIAL_GAME_DATA, gameStateObject} from "../data/game-data";

const moduleGameState = () => {
  const gameState = getElementFromTemplate(`
    <h1 class="game__timer">${INITIAL_GAME_DATA.time}</h1>
    <div class="game__lives">
    ${new Array(INITIAL_GAME_DATA.lives - gameStateObject.lives)
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
