import IntroView from '../view/intro-view';
import App from '../app';

export default class IntroPresenter {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    this.view.onChangeScreen = () => App.showGreeting();
  }
}
