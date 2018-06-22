import {getElementFromTemplate, showScreen, container} from '../functions';
import gameCurrentState from './game-state';
import gameProgress from './game-progress';
import {LEVELS, ANSWER_TYPE, TASK_TYPE} from '../data/levels';
import {GAME_RESULT, gameStateObject, answerCorrectly, answerWrong} from "../data/game-data";
import result from './result';

const moduleGame = (level) => {
  /** TODO удалить console.log **/
  // console.log(gameStateObject);

  /** GAME OVER! **/
  if (gameStateObject.lives === 0) {
    /** Выходим из игрового экрана и показываем экран статистики **/
    result(GAME_RESULT.loss);
    return;
  }

  /** Победа в игре и переход к экрану статистики! **/
  if (level.type === null) {
    result(GAME_RESULT.victory);
    return;
  }

  /** TODO динамическое отображение игрового прогресса  **/
  /** Отрисовываем только при запуске 1-го уровня **/
  if (level === LEVELS[`level-1`]) {
    gameProgress();
  }

  gameCurrentState();

  switch (level.type) {
    case TASK_TYPE.twoPaintingsOrPhotos:
      const game1 = getElementFromTemplate(`
        <div class="game">
          <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
          <form class="game__content">
            <div class="game__option">
              <img src=${level.answers[0].src} alt="Option 1" width="468" height="458">
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
              <img src=${level.answers[1].src} alt="Option 2" width="468" height="458">
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
          let amountCorrectAnswers = 0;
          answers1.forEach((radio, index) => {
            amountAnswers = amountAnswers + +radio.checked;
            if (radio.checked) {
              /** Вычисляем номер изображения, на которм был 'нажат' инпут **/
              const indexImage = Math.floor(index / 2);
              if (radio.value === level.answers[indexImage].value) {
                amountCorrectAnswers++;
              }
            }

            if (amountAnswers > 1) {
              if (amountCorrectAnswers > 1) {
                answerCorrectly();
              } else {
                answerWrong();
              }
              moduleGame(LEVELS[level.nextLevel]);
              amountAnswers = 0;
              amountCorrectAnswers = 0;
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
              <img src=${level.answers[0].src} alt="Option 1" width="705" height="455">
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
            if (radio.value === level.answers[0].value) {
              answerCorrectly();
            } else {
              answerWrong();
            }
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
              <img src=${level.answers[0].src} alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option  game__option--selected">
              <img src=${level.answers[1].src} alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
              <img src=${level.answers[2].src} alt="Option 1" width="304" height="455">
            </div>
          </form>
        </div>
      `);

      showScreen(game3);

      const answers3 = container.querySelectorAll(`.game__option`);

      answers3.forEach((item, index) => {
        item.addEventListener(`click`, () => {
          if (level.answers[index].value === ANSWER_TYPE.painting) {
            answerCorrectly();
          } else {
            answerWrong();
          }
          moduleGame(LEVELS[level.nextLevel]);
        });
      });
  }
};

export default moduleGame;
