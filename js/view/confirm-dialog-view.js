import AbstractView from './abstract-view';

export default class ConfirmDialogView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <section class="modal-confirm modal-confirm__wrap">
        <form class="modal-confirm__inner">
          <button id="close-button" class="modal-confirm__close" type="button">Закрыть</button>
          <h2 class="modal-confirm__title">Подтверждение</h2>
          <p class="modal-confirm__text">Вы уверены что хотите начать игру заново?</p>
          <div class="modal-confirm__btn-wrap">
            <button id="confirm-button" class="modal-confirm__btn" type="button">Ок</button>
            <button id="cancel-button" class="modal-confirm__btn" type="button">Отмена</button>
          </div>
        </form>
      </section>
    `;
  }

  bind() {
    const confirmButton = this.element.querySelector(`#confirm-button`);
    const cancelButton = this.element.querySelector(`#cancel-button`);
    const closeButton = this.element.querySelector(`#close-button`);

    confirmButton.addEventListener(`click`, () => {
      this.onConfirm();
    });

    cancelButton.addEventListener(`click`, () => {
      this.onCancel();
    });

    closeButton.addEventListener(`click`, () => {
      this.onClose();
    });
  }

  onConfirm() {
  }

  onCancel() {
  }

  onClose() {
  }
}
