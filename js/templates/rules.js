import RulesView from '../view/rules-view';
import {showScreen, initGameStateContainer, initGameProgressContainer, renderHeader} from '../functions';
import game from './game';
import ButtonBackView from '../view/button-back-view';
import {LEVELS} from "../data/levels";

const moduleRules = () => {
  const rules = new RulesView();
  const buttonBack = new ButtonBackView();

  renderHeader(buttonBack.element);
  initGameStateContainer();
  initGameProgressContainer();
  showScreen(rules.element);

  rules.onChangeScreen = () => game(LEVELS[`level-1`]);
};

export default moduleRules;
