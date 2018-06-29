import RulesView from '../view/rules-view';
import ButtonBackView from '../view/button-back-view';
import game from './game';
import {LEVELS} from "../data/levels";
import {startNewGame} from "../data/game-data";

export default class RulesPresenter {
  constructor() {
    this.view = new RulesView();
    this.buttonBackView = new ButtonBackView();
  }

  init() {
    this.view.onChangeScreen = () => {
      startNewGame(this.view.name);
      game(LEVELS[`level-1`]);
    };
  }
}
