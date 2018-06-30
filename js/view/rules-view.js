import AbstractView from './abstract-view';
import GameModel from '../model/game-model';
import {AMOUNT_LEVELS} from "../data/levels";

export default class RulesView extends AbstractView {
  constructor() {
    super();
    this.model = new GameModel();
  }

  get template() {
    return `
      <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай ${AMOUNT_LEVELS} раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится ${this.model.getInitialTime()} секунд.<br>
        Ошибиться можно не более ${this.model.getInitialLives()} раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    `;
  }

  bind() {
    const link = this.element.querySelector(`.rules__button`);
    const input = this.element.querySelector(`.rules__input`);
    const form = this.element.querySelector(`.rules__form`);

    input.addEventListener(`input`, () => {
      this.name = input.value.trim();
      link.disabled = !input.value.trim().length;
    });

    form.addEventListener(`submit`, (event) => {
      event.preventDefault();
      this.onChangeScreen();
    });
  }

  onChangeScreen() {}
}
