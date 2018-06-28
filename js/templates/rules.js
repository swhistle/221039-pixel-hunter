import RulesView from '../view/rules-view';
import {showScreen, initGameStateContainer, initGameProgressContainer} from '../functions';
import game from './game';
import buttonBack from './button-back';
import {LEVELS} from "../data/levels";

const moduleRules = () => {
  const rules = new RulesView();

  buttonBack();
  initGameStateContainer();
  initGameProgressContainer();
  showScreen(rules.element);

  rules.bind = () => {
    const link = document.querySelector(`.rules__button`);
    const input = document.querySelector(`.rules__input`);
    const form = document.querySelector(`.rules__form`);

    input.addEventListener(`input`, () => {
      link.disabled = !input.value.trim().length;
    });

    form.addEventListener(`submit`, (event) => {
      event.preventDefault();
      rules.onChangeScreen();
    });
  };

  rules.bind();

  rules.onChangeScreen = () => game(LEVELS[`level-1`]);
};

export default moduleRules;
