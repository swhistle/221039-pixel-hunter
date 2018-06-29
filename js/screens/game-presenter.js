import RulesView from '../view/rules-view';
import ButtonBackView from '../view/button-back-view';
import game from './game';
import {LEVELS} from "../data/levels";

export default class GamePresenter {
  constructor() {
    this.view = new RulesView();
    this.buttonBackView = new ButtonBackView();
  }

  init() {
    this.view.onChangeScreen = () => game(LEVELS[`level-1`]);
  }
}
