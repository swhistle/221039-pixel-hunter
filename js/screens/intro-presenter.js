import IntroView from '../view/intro-view';
import FooterView from '../view/footer-view';
import App from '../app';
import {putAfterContainer} from "../functions";

export default class IntroPresenter {
  constructor() {
    this.view = new IntroView();
    this.viewFooter = new FooterView();
  }

  init() {
    putAfterContainer(this.viewFooter.element);
    this.view.onChangeScreen = App.showGreeting;
  }
}
