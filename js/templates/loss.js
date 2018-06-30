import LossView from '../view/loss-view';
import {showScreen, removeGameProgressContainer, removeGameStateContainer} from '../functions';

const moduleLoss = () => {
  removeGameProgressContainer();
  removeGameStateContainer();

  const loss = new LossView();

  showScreen(loss.element);
};

export default moduleLoss;
