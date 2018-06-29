import IntroPresenter from './screens/intro-presenter';
import GreetingPresenter from './screens/greeting-presenter';
import RulesPresenter from './screens/rules-presenter';
import {
  renderHeader,
  removeGameProgressContainer,
  initGameStateContainer,
  initGameProgressContainer
} from "./functions";

export default class Application {

  static showIntro() {
    const intro = new IntroPresenter();
    intro.init();
    this.showScreen(intro.view.element);
  }

  static showGreeting() {
    const greeting = new GreetingPresenter();
    greeting.init();
    renderHeader();
    removeGameProgressContainer();
    this.showScreen(greeting.view.element);
  }

  static showRules() {
    const rules = new RulesPresenter();
    rules.init();
    renderHeader(rules.buttonBackView.element);
    initGameStateContainer();
    initGameProgressContainer();
    this.showScreen(rules.view.element);
  }

  static showScreen(screen) {
    const container = document.querySelector(`.central`);
    container.innerHTML = ``;
    container.appendChild(screen);
  }
}
