import AbstractView from './abstract-view';
import GameModel from '../model/game-model';
import {AnswerType} from '../data/levels';

export default class LevelType3View extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
    this.model = new GameModel();
  }

  get template() {
    return `
      <div class="game">
          <p class="game__task">Найдите рисунок среди изображений</p>
          <form class="game__content  game__content--triple">
            <div class="game__option">
              <img src=${this.level.answers[0].src} alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option  game__option--selected">
              <img src=${this.level.answers[1].src} alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
              <img src=${this.level.answers[2].src} alt="Option 1" width="304" height="455">
            </div>
          </form>
        </div>
    `;
  }

  bind() {
    const answers = this.element.querySelectorAll(`.game__option`);

    answers.forEach((item, index) => {
      item.addEventListener(`click`, () => {
        if (this.level.answers[index].value === AnswerType.PAINTING) {
          this.model.answerCorrectly();
        } else {
          this.model.answerWrong();
        }
        this.onChangeScreen();
      });
    });

  }

  onChangeScreen() {}
}
