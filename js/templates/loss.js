import LossView from '../view/loss-view';
import {showScreen, container} from '../functions';
import gameCurrentState from './game-state';

const moduleLoss = () => {
  gameCurrentState();

  const loss = new LossView();

  showScreen(loss.element);

  /** TODO убрать хардкорное удаление блока с игровым прогрессом **/
  container.nextElementSibling.remove();
};

export default moduleLoss;
