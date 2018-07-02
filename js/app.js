import IntroPresenter from './screens/intro-presenter';
import GreetingPresenter from './screens/greeting-presenter';
import RulesPresenter from './screens/rules-presenter';
import GamePresenter from './screens/game-presenter';
import ResultPresenter from './screens/result-presenter';
import ErrorView from './view/error-view';
import GameModel from './model/game-model';
import {putAfterContainer, hideBodyOverflow} from './functions';

const SERVER_URL = `https://es.dump.academy/pixel-hunter/`;

const DEFAULT_NAME = `hunter`;
const APP_ID = 2405506632;

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

    window.fetch(`${SERVER_URL}/questions`)
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
    const state = new GameModel();
    const playerName = state.getUserName();
    const gameResult = new ResultPresenter(result);
    gameResult.init();
    Application.showScreen(gameResult.view.element);
    Application.saveResults(state, playerName)
      .then(() => Application.loadResults(playerName))
      .then((data) => gameResult.showStats(data, playerName))
      .catch(Application.showError);
  }

  static showError() {
    const error = new ErrorView();
    putAfterContainer(error.element);
    hideBodyOverflow();
  }

  static showScreen(screen) {
    const container = document.querySelector(`.central`);
    container.innerHTML = ``;
    container.appendChild(screen);
  }

  static getQuestions() {
    return questions;
  }

  static loadResults(name = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`)
      .then(checkStatus)
      .then((response) => response.json());
  }

  static saveResults(data, name = DEFAULT_NAME) {
    data = Object.assign({name}, data);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, requestSettings).then(checkStatus);
  }
}
