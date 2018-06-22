import {getElementFromTemplate, container} from '../functions';

const moduleGameProgress = () => {
  const gameProgressTemplate = getElementFromTemplate(`
    <div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>
`);

  /** TODO придумать более изящное решение **/
  container.after(gameProgressTemplate.firstElementChild);
};

export default moduleGameProgress;
