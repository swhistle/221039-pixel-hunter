import {getElementFromTemplate, header} from '../functions';
import {INITIAL_GAME_DATA} from "../data/game-data";

const moduleGameState = () => {
  const gameState = getElementFromTemplate(`
    <h1 class="game__timer">${INITIAL_GAME_DATA.time}</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  `);

  header.appendChild(gameState);
};

export default moduleGameState;
