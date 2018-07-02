import GameModel from '../model/game-model';
import TimerModel from '../model/timer-model';
import LevelType1View from '../view/level-type-1-view';
import LevelType2View from '../view/level-type-2-view';
import LevelType3View from '../view/level-type-3-view';
import GameProgressView from '../view/game-progress-view';
import {GameResult} from '../data/game-data';
import {TaskType} from '../data/levels';
import App from '../app';
import {renderGameProgress} from '../functions';

export default class GamePresenter {
  constructor(levelIndex) {
    this.model = new GameModel();
    this.levelIndex = levelIndex;
    this.viewGameProgress = new GameProgressView();
    this.model = new GameModel();
    this.timer = new TimerModel();
  }

  init() {
    Promise.resolve(App.getQuestions())
      .then((questionsArray) => {
        this.levels = questionsArray;

        this.timer.reStartTimer();
        this.timer.startTimer();
        this.timer.levelFailed = () => {
          this.model.answerWrong();
          App.showGame(this.levelIndex + 1);
        };

        /* GAME OVER! */
        if (this.model.getCurrentLives() === 0) {
          /* Выходим из игрового экрана и показываем экран статистики */
          this.timer.stopTimer();
          App.showResult(GameResult.LOSS);
          return;
        }

        renderGameProgress(this.viewGameProgress.element);

        if (this.levels[this.levelIndex].type === TaskType.TWO_PAINTINGS_OR_PHOTOS) {
          this.view = new LevelType1View(this.levels[this.levelIndex]);
        } else if (this.levels[this.levelIndex].type === TaskType.PAINTING_OR_PHOTO) {
          this.view = new LevelType2View(this.levels[this.levelIndex]);
        } else if (this.levels[this.levelIndex].type === TaskType.ONE_PAINTING_OF_THREE_IMAGES) {
          this.view = new LevelType3View(this.levels[this.levelIndex]);
        }

        App.showScreen(this.view.element);

        /* Победа в игре и переход к экрану статистики! */
        if (this.levelIndex === this.levels.length - 1) {
          this.timer.stopTimer();
          this.view.onChangeScreen = () => App.showResult(GameResult.VICTORY);
          return;
        }

        this.view.onChangeScreen = () => App.showGame(this.levelIndex + 1);
      });
  }
}
