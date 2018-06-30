import LevelType1View from '../view/level-type-1-view';
import LevelType2View from '../view/level-type-2-view';
import LevelType3View from '../view/level-type-3-view';
import GameStateView from '../view/game-state-view';
import GameProgressView from '../view/game-progress-view';
import {gameStateObject, GameResult} from '../data/game-data';
import {LEVELS, TaskType} from '../data/levels';
import App from '../app';
import {renderGameState, renderGameProgress} from '../functions';
import GameModel from '../model/game-model';

export default class GamePresenter {
  constructor(level) {
    this.level = level;
    this.viewGameCurrentState = new GameStateView();
    this.viewGameProgress = new GameProgressView();
    this.model = new GameModel();
  }

  init() {
    /* GAME OVER! */
    if (gameStateObject.lives === 0) {
      /* Выходим из игрового экрана и показываем экран статистики */
      App.showResult(GameResult.LOSS);
      return;
    }

    /* Победа в игре и переход к экрану статистики! */
    if (this.level.type === null) {
      App.showResult(GameResult.VICTORY);
      return;
    }

    renderGameState(this.viewGameCurrentState.element);
    renderGameProgress(this.viewGameProgress.element);

    if (this.level.type === TaskType.TWO_PAINTINGS_OR_PHOTOS) {
      this.view = new LevelType1View(this.level);
    } else if (this.level.type === TaskType.PAINTING_OR_PHOTO) {
      this.view = new LevelType2View(this.level);
    } else if (this.level.type === TaskType.ONE_PAINTING_OF_THREE_IMAGES) {
      this.view = new LevelType3View(this.level);
    }

    App.showScreen(this.view.element);
    this.view.onChangeScreen = () => App.showGame(LEVELS[this.level.nextLevel]);
  }
}
