import {getElementFromTemplate, showScreen, container} from '../functions';
import gameState from './game-state';
import gameProgress from './game-progress';
import {LEVELS, TASK_TYPE} from '../data/levels';

const moduleGame = (level) => {
  /** Отрисовываем только при запуске 1-го уровня **/
  if (level === LEVELS[`level-1`]) {
    gameState();
    gameProgress();
  }

  switch (level.type) {
    case TASK_TYPE.twoPaintingsOrPhotos:
      const game1 = getElementFromTemplate(`
        <div class="game">
          <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
          <form class="game__content">
            <div class="game__option">
              <img src=${level.answers[`image-1`].src} alt="Option 1" width="468" height="458">
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
              <img src=${level.answers[`image-2`].src} alt="Option 2" width="468" height="458">
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
      `);

      showScreen(game1);

      const answers1 = container.querySelectorAll(`input[name="question1"], input[name="question2"]`);

      answers1.forEach((item) => {
        item.addEventListener(`change`, () => {
          let amountAnswers = 0;
          answers1.forEach((radio) => {
            amountAnswers = amountAnswers + +radio.checked;
            if (amountAnswers > 1) {
              moduleGame(LEVELS[level.nextLevel]);
              amountAnswers = 0;
            }
          });
        });
      });

      break;

    case TASK_TYPE.paintingOrPhoto:
      const game2 = getElementFromTemplate(`
        <div class="game">
          <p class="game__task">Угадай, фото или рисунок?</p>
          <form class="game__content  game__content--wide">
            <div class="game__option">
              <img src=${level.answers[`image-1`].src} alt="Option 1" width="705" height="455">
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
`);

      showScreen(game2);

      const answers2 = container.querySelectorAll(`input[name="question1"]`);

      answers2.forEach((radio) => {
        radio.addEventListener(`change`, () => {
          if (radio.checked) {
            moduleGame(LEVELS[level.nextLevel]);
          }
        });
      });

      break;

    case TASK_TYPE.onePaintingOfThreeImages:
      const game3 = getElementFromTemplate(`
        <div class="game">
          <p class="game__task">Найдите рисунок среди изображений</p>
          <form class="game__content  game__content--triple">
            <div class="game__option">
              <img src=${level.answers[`image-1`].src} alt="Option 1" width="304" height="455">
                </div>
                <div class="game__option  game__option--selected">
                  <img src=${level.answers[`image-2`].src} alt="Option 1" width="304" height="455">
                    </div>
                    <div class="game__option">
                      <img src=${level.answers[`image-3`].src} alt="Option 1" width="304" height="455">
                    </div>
                  </form>
                </div>
`);

      showScreen(game3);

      const answers3 = container.querySelectorAll(`.game__option`);

      answers3.forEach((item) => {
        item.addEventListener(`click`, () => {
          moduleGame(LEVELS[level.nextLevel]);
        });
      });
  }
};

export default moduleGame;
