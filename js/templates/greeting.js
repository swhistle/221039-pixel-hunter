import GreetingView from '../view/greeting-view';
import {showScreen, header, removeGameProgressContainer} from '../functions';
import rules from './rules';
import {startNewGame} from "../data/game-data";

const moduleGreeting = () => {
  const greeting = new GreetingView();

  header.innerHTML = ``;
  showScreen(greeting.element);
  removeGameProgressContainer();
  startNewGame();

  greeting.bind = () => {
    const link = document.querySelector(`.greeting__continue`);
    link.addEventListener(`click`, () => {
      greeting.onChangeScreen();
    });
  };

  greeting.bind();

  greeting.onChangeScreen = () => rules();
};

export default moduleGreeting;
