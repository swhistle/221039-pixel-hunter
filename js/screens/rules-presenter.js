import RulesView from '../view/rules-view';
import ButtonBackView from '../view/button-back-view';
import {LEVELS} from "../data/levels";
import {startNewGame} from "../data/game-data";
import App from '../app';
import {renderHeader, initGameStateContainer, initGameProgressContainer} from "../functions";

export default class RulesPresenter {
  constructor() {
    this.view = new RulesView();
    this.buttonBackView = new ButtonBackView();
  }

  init() {
    renderHeader(this.buttonBackView.element);
    initGameStateContainer();
    initGameProgressContainer();
    this.view.onChangeScreen = () => {
      startNewGame(this.view.name);
      App.showGame(LEVELS[`level-1`]);
    };
  }
}
