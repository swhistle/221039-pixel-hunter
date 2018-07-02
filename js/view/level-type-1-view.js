import AbstractView from './abstract-view';
import GameModel from '../model/game-model';

export default class LevelType1View extends AbstractView {
  constructor(level) {
    super();
    this.model = new GameModel();
    this.level = level;
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
        <form class="game__content">
          <div class="game__option">
            <img src=${this.level.answers[0].image.url} alt="Option 1" width="468" height="458">
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src=${this.level.answers[1].image.url} alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question2" type="radio" value="painting">
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
            /* Вычисляем номер изображения, на которм был 'нажат' инпут */
            const indexImage = Math.floor(index / 2);
            if (radio.value === this.level.answers[indexImage].type) {
              amountCorrectAnswers++;
            }
          }

          if (amountAnswers > 1) {
            if (amountCorrectAnswers > 1) {
              this.model.answerCorrectly();
            } else {
              this.model.answerWrong();
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
