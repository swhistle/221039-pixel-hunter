import LevelType1View from '../view/level-type-1-view';
import LevelType2View from '../view/level-type-2-view';
import LevelType3View from '../view/level-type-3-view';
import {showScreen, renderGameState, renderGameProgress} from '../functions';
import GameStateView from '../view/game-state-view';
import GameProgressView from '../view/game-progress-view';
import {LEVELS, TASK_TYPE} from '../data/levels';
import {gameStateObject} from "../data/game-data";
import result from './result';
import loss from './loss';

const moduleGame = (level) => {
  const gameCurrentState = new GameStateView();
  const gameProgress = new GameProgressView();
  /** TODO удалить console.log **/
  // console.log(gameStateObject);

  /** GAME OVER! **/
  if (gameStateObject.lives === 0) {
    /** Выходим из игрового экрана и показываем экран статистики **/
    loss();
    return;
  }

  /** Победа в игре и переход к экрану статистики! **/
  if (level.type === null) {
    result();
    return;
  }

  renderGameState(gameCurrentState.element);
  renderGameProgress(gameProgress.element);

  switch (level.type) {
    case TASK_TYPE.twoPaintingsOrPhotos:
      const levelType1 = new LevelType1View(level);
      showScreen(levelType1.element);
      levelType1.onChangeScreen = () => moduleGame(LEVELS[level.nextLevel]);

      break;

    case TASK_TYPE.paintingOrPhoto:
      const levelType2 = new LevelType2View(level);
      showScreen(levelType2.element);
      levelType2.onChangeScreen = () => moduleGame(LEVELS[level.nextLevel]);

      break;

    case TASK_TYPE.onePaintingOfThreeImages:
      const levelType3 = new LevelType3View(level);
      showScreen(levelType3.element);
      levelType3.onChangeScreen = () => moduleGame(LEVELS[level.nextLevel]);
  }
};

export default moduleGame;
