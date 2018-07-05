import RulesView from '../view/rules-view';
import ButtonBackView from '../view/button-back-view';
import ConfirmDialogView from '../view/confirm-dialog-view';
import GameModel from '../model/game-model';
import App from '../app';
import {renderHeader, initGameStateContainer, initGameProgressContainer, putAfterContainer, removeModalConfirm} from '../functions';

export default class RulesPresenter {
  constructor() {
    this.model = new GameModel();
    this.view = new RulesView();
    this.viewButtonBack = new ButtonBackView();
    this.viewConfirmDialog = new ConfirmDialogView();
  }

  init() {
    renderHeader(this.viewButtonBack.element);
    initGameStateContainer();
    initGameProgressContainer();
    this.view.onChangeScreen = () => {
      this.model.startNewGame(this.view.name);
      App.showGame(0);
    };

    this.viewButtonBack.onGoBack = () => {
      let confirm = document.querySelector(`.modal-confirm`);

      if (!confirm) {
        putAfterContainer(this.viewConfirmDialog.element);

        this.viewConfirmDialog.onConfirm = () => {
          App.showGreeting();
          removeModalConfirm();
          confirm = null;
        };

        this.viewConfirmDialog.onCancel = () => {
          removeModalConfirm();
          confirm = null;
        };

        this.viewConfirmDialog.onClose = () => {
          removeModalConfirm();
          confirm = null;
        };
      }

    };
  }
}
