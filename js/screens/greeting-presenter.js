import GreetingView from '../view/greeting-view';
import App from '../app';
import {renderHeader, removeGameProgressContainer} from "../functions";

export default class GreetingPresenter {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    renderHeader();
    removeGameProgressContainer();
    this.view.onChangeScreen = () => App.showRules();
  }
}
