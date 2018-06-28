import AbstractView from './abstract-view';
import {answerCorrectly, answerWrong} from "../data/game-data";

export default class LevelType2View extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">Угадай, фото или рисунок?</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src=${this.level.answers[0].src} alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      </div>
    `;
  }

  bind() {
    const answers = this.element.querySelectorAll(`input[name="question1"]`);

    answers.forEach((radio) => {
      radio.addEventListener(`change`, () => {
        if (radio.checked) {
          if (radio.value === this.level.answers[0].value) {
            answerCorrectly();
          } else {
            answerWrong();
          }
          this.onChangeScreen();
        }
      });
    });
  }

  onChangeScreen() {}
}
