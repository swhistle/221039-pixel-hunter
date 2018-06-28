import AbstractView from './abstract-view';
import {answerCorrectly, answerWrong} from "../data/game-data";

export default class LevelType1View extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
        <form class="game__content">
          <div class="game__option">
            <img src=${this.level.answers[0].src} alt="Option 1" width="468" height="458">
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src=${this.level.answers[1].src} alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question2" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      </div>
    `;
  }

  bind() {
    const answers = this.element.querySelectorAll(`input[name="question1"], input[name="question2"]`);

    answers.forEach((item) => {
      item.addEventListener(`change`, () => {
        let amountAnswers = 0;
        let amountCorrectAnswers = 0;
        answers.forEach((radio, index) => {
          amountAnswers = amountAnswers + +radio.checked;
          if (radio.checked) {
            /** Вычисляем номер изображения, на которм был 'нажат' инпут **/
            const indexImage = Math.floor(index / 2);
            if (radio.value === this.level.answers[indexImage].value) {
              amountCorrectAnswers++;
            }
          }

          if (amountAnswers > 1) {
            if (amountCorrectAnswers > 1) {
              answerCorrectly();
            } else {
              answerWrong();
            }
            amountAnswers = 0;
            amountCorrectAnswers = 0;
            this.onChangeScreen();
          }
        });
      });
    });
  }

  onChangeScreen() {}
}
