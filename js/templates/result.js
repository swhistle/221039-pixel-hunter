import {getElementFromTemplate, showScreen, container} from '../functions';
import {GAME_RESULT, SCORE, gameStateObject, calculateScoredPoints} from "../data/game-data";
import gameCurrentState from './game-state';

const moduleResult = (result) => {
  gameCurrentState();

  switch (result) {
    /** ПОБЕДА! **/
    case GAME_RESULT.victory:
      const statistics = getElementFromTemplate(`
        <div class="result">
          <h1>Победа!</h1>
          <table class="result__table">
            <tr>
              <td colspan="1">
                <ul class="stats">
                  <li class="stats__result stats__result--wrong"></li>
                  <li class="stats__result stats__result--slow"></li>
                  <li class="stats__result stats__result--fast"></li>
                  <li class="stats__result stats__result--correct"></li>
                  <li class="stats__result stats__result--wrong"></li>
                  <li class="stats__result stats__result--unknown"></li>
                  <li class="stats__result stats__result--slow"></li>
                  <li class="stats__result stats__result--unknown"></li>
                  <li class="stats__result stats__result--fast"></li>
                  <li class="stats__result stats__result--unknown"></li>
                </ul>
              </td>
              <td class="result__points">×&nbsp;${SCORE.correctAnswer}</td>
              <td class="result__total">
                ${calculateScoredPoints(gameStateObject.scores)}
            </td>
            </tr>
            
            <tr>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${gameStateObject.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">×&nbsp;${SCORE.remainingLives}</td>
              <td class="result__total">${calculateScoredPoints(undefined, gameStateObject.lives)}</td>
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">
                ${calculateScoredPoints(gameStateObject.scores, gameStateObject.lives)}
              </td>
            </tr>
          </table>
        </div>
      `);

      showScreen(statistics);

      break;

    /** Поражение... **/
    case GAME_RESULT.loss:

      const screenLoss = getElementFromTemplate(`
        <div class="result">
          <table class="result__table">
            <tr>
              <td>
                <ul class="stats">
                  <li class="stats__result stats__result--wrong"></li>
                  <li class="stats__result stats__result--slow"></li>
                  <li class="stats__result stats__result--fast"></li>
                  <li class="stats__result stats__result--correct"></li>
                  <li class="stats__result stats__result--wrong"></li>
                  <li class="stats__result stats__result--unknown"></li>
                  <li class="stats__result stats__result--slow"></li>
                  <li class="stats__result stats__result--wrong"></li>
                  <li class="stats__result stats__result--fast"></li>
                  <li class="stats__result stats__result--wrong"></li>
                </ul>
              </td>
              <td class="result__total"></td>
              <td class="result__total  result__total--final">fail</td>
            </tr>
          </table>          
        </div>
      `);

      showScreen(screenLoss);

      break;
  }

  /** TODO убрать хардкорное удаление блока с игровым прогрессом **/
  container.nextElementSibling.remove();
};

export default moduleResult;
