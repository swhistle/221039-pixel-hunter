import AbstractView from './abstract-view';

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>
    `;
  }

  onChangeScreen() {}

  bind() {
    const link = this.element.querySelector(`.intro__asterisk`);
    link.addEventListener(`click`, (event) => {
      event.stopPropagation();
      event.preventDefault();

      this.onChangeScreen();
    });
  }


}
