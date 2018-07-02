import GreetingView from '../view/greeting-view';
import App from '../app';
import TimerModel from '../model/timer-model';
import {renderHeader, removeGameProgressContainer} from "../functions";

export default class GreetingPresenter {
  constructor() {
    this.view = new GreetingView();
    this.timer = new TimerModel();
  }

  init() {
    this.timer.stopTimer();
    renderHeader();
    removeGameProgressContainer();
    this.view.onChangeScreen = App.showRules;
  }
}
