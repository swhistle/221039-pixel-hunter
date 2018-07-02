import IntroPresenter from './screens/intro-presenter';
import GreetingPresenter from './screens/greeting-presenter';
import RulesPresenter from './screens/rules-presenter';
import GamePresenter from './screens/game-presenter';
import ResultPresenter from './screens/result-presenter';
import ErrorView from './view/error-view';
import {putAfterContainer, hiddenBodyOverflow} from './functions';

let questions;

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Application {

  static showIntro() {
    const intro = new IntroPresenter();
    intro.init();
    Application.showScreen(intro.view.element);

    window.fetch(`https://es.dump.academy/pixel-hunter/questions`)
      .then(checkStatus)
      .then((response) => {
        questions = response.json();
        Application.showGreeting();
      })
      .catch(Application.showError);
  }

  static showGreeting() {
    const greeting = new GreetingPresenter();
    greeting.init();
    Application.showScreen(greeting.view.element);
  }

  static showRules() {
    const rules = new RulesPresenter();
    rules.init();
    Application.showScreen(rules.view.element);
  }

  static showGame(levelIndex) {
    const game = new GamePresenter(levelIndex);
    game.init();
  }

  static showResult(result) {
    const gameResult = new ResultPresenter(result);
    gameResult.init();
    Application.showScreen(gameResult.view.element);
  }

  static showError() {
    const error = new ErrorView();
    putAfterContainer(error.element);
    hiddenBodyOverflow();
  }

  static showScreen(screen) {
    const container = document.querySelector(`.central`);
    container.innerHTML = ``;
    container.appendChild(screen);
  }

  static getQuestions() {
    return questions;
  }
}
