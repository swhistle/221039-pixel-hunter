import RulesView from '../view/rules-view';
import ButtonBackView from '../view/button-back-view';
import GameModel from '../model/game-model';
import {LEVELS} from '../data/levels';
import App from '../app';
import {renderHeader, initGameStateContainer, initGameProgressContainer} from "../functions";

export default class RulesPresenter {
  constructor() {
    this.model = new GameModel();
    this.view = new RulesView();
    this.buttonBackView = new ButtonBackView();
  }

  init() {
    renderHeader(this.buttonBackView.element);
    initGameStateContainer();
    initGameProgressContainer();
    this.view.onChangeScreen = () => {
      this.model.startNewGame(this.view.name);
      App.showGame(LEVELS[`level-1`]);
    };

    this.buttonBackView.onChangeScreen = App.showGreeting;
  }
}
