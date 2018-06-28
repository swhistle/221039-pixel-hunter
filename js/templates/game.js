import LevelType1View from '../view/level-type-1-view';
import LevelType2View from '../view/level-type-2-view';
import LevelType3View from '../view/level-type-3-view';
import {showScreen} from '../functions';
import gameCurrentState from './game-state';
import {moduleGameProgress as gameProgress} from './game-progress';
import {LEVELS, TASK_TYPE} from '../data/levels';
import {gameStateObject, answerCorrectly, answerWrong} from "../data/game-data";
import result from './result';
import loss from './loss';

const moduleGame = (level) => {
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

  gameCurrentState();

  gameProgress();

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
