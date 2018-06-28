import GreetingView from '../view/greeting-view';
import {showScreen, renderHeader, removeGameProgressContainer} from '../functions';
import rules from './rules';
import {startNewGame} from "../data/game-data";

const moduleGreeting = () => {
  const greeting = new GreetingView();

  renderHeader();
  showScreen(greeting.element);
  removeGameProgressContainer();
  startNewGame();

  greeting.onChangeScreen = () => rules();
};

export default moduleGreeting;
