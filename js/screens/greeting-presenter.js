import GreetingView from '../view/greeting-view';
import App from '../app';

export default class GreetingPresenter {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    this.view.onChangeScreen = () => App.showRules();
  }
}
