import IntroPresenter from './screens/intro-presenter';
import GreetingPresenter from './screens/greeting-presenter';
import RulesPresenter from './screens/rules-presenter';
import GamePresenter from './screens/game-presenter';
import ResultPresenter from './screens/result-presenter';

export default class Application {

  static showIntro() {
    const intro = new IntroPresenter();
    intro.init();
    this.showScreen(intro.view.element);
  }

  static showGreeting() {
    const greeting = new GreetingPresenter();
    greeting.init();
    this.showScreen(greeting.view.element);
  }

  static showRules() {
    const rules = new RulesPresenter();
    rules.init();
    this.showScreen(rules.view.element);
  }

  static showGame(level) {
    const game = new GamePresenter(level);
    game.init();
  }

  static showResult(result) {
    const gameResult = new ResultPresenter(result);
    gameResult.init();
    this.showScreen(gameResult.view.element);
  }

  static showScreen(screen) {
    const container = document.querySelector(`.central`);
    container.innerHTML = ``;
    container.appendChild(screen);
  }
}
