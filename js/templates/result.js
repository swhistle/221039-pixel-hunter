import {getElementFromTemplate, showScreen, container} from '../functions';
import {GameResult, Score, gameStateObject, calculateScoredPoints} from "../data/game-data";
import gameCurrentState from './game-state';
import {showGameProgress} from "./game-progress";
import {AMOUNT_LEVELS} from "../data/levels";

const moduleResult = (result) => {
  gameCurrentState();

  switch (result) {
    /** ПОБЕДА! **/
    case GameResult.VICTORY:
      const statistics = getElementFromTemplate(`
        <div class="result">
          <h1>Победа!</h1>
          <table class="result__table">
            <tr>
              <td colspan="2">
                <ul class="stats">
                  ${showGameProgress()}
                  ${new Array(AMOUNT_LEVELS - gameStateObject.scores.length)
                  .fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
                 </ul>
              </td>
              <td class="result__points">×&nbsp;${Score.CORRECT_ANSWER}</td>
              <td class="result__total">
                ${calculateScoredPoints(gameStateObject.scores)}
            </td>
            </tr>
            
            <tr>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${gameStateObject.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">×&nbsp;${Score.REMAINING_LIVES}</td>
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
    case GameResult.LOSS:

      const screenLoss = getElementFromTemplate(`
        <div class="result">
          <table class="result__table">
            <tr>
              <td>
                <ul class="stats">
                  ${showGameProgress()}
                  ${new Array(AMOUNT_LEVELS - gameStateObject.scores.length)
                  .fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
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
