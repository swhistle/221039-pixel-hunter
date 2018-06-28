import LevelType1View from '../view/level-type-1-view';
import LevelType2View from '../view/level-type-2-view';
import LevelType3View from '../view/level-type-3-view';
import {showScreen} from '../functions';
import gameCurrentState from './game-state';
import {moduleGameProgress as gameProgress} from './game-progress';
import {LEVELS, ANSWER_TYPE, TASK_TYPE} from '../data/levels';
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

      levelType1.bind = () => {
        const answers = document.querySelectorAll(`input[name="question1"], input[name="question2"]`);

        answers.forEach((item) => {
          item.addEventListener(`change`, () => {
            let amountAnswers = 0;
            let amountCorrectAnswers = 0;
            answers.forEach((radio, index) => {
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
                levelType1.onChangeScreen();
                amountAnswers = 0;
                amountCorrectAnswers = 0;
              }
            });
          });
        });
      };

      levelType1.bind();

      levelType1.onChangeScreen = () => moduleGame(LEVELS[level.nextLevel]);

      break;

    case TASK_TYPE.paintingOrPhoto:
      const levelType2 = new LevelType2View(level);

      showScreen(levelType2.element);

      levelType2.bind = () => {
        const answers = document.querySelectorAll(`input[name="question1"]`);

        answers.forEach((radio) => {
          radio.addEventListener(`change`, () => {
            if (radio.checked) {
              if (radio.value === level.answers[0].value) {
                answerCorrectly();
              } else {
                answerWrong();
              }
              levelType2.onChangeScreen();
            }
          });
        });
      };

      levelType2.bind();

      levelType2.onChangeScreen = () => moduleGame(LEVELS[level.nextLevel]);

      break;

    case TASK_TYPE.onePaintingOfThreeImages:
      const levelType3 = new LevelType3View(level);

      showScreen(levelType3.element);

      levelType3.bind = () => {
        const answers = document.querySelectorAll(`.game__option`);

        answers.forEach((item, index) => {
          item.addEventListener(`click`, () => {
            if (level.answers[index].value === ANSWER_TYPE.painting) {
              answerCorrectly();
            } else {
              answerWrong();
            }
            levelType3.onChangeScreen();
          });
        });
      };

      levelType3.bind();

      levelType3.onChangeScreen = () => moduleGame(LEVELS[level.nextLevel]);
  }
};

export default moduleGame;
