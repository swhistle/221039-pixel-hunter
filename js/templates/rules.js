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

  rules.onChangeScreen = () => game(LEVELS[`level-1`]);
};

export default moduleRules;
