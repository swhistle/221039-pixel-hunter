import ResultView from '../view/result-view';
import {showScreen, removeGameProgressContainer, removeGameStateContainer} from '../functions';

const moduleResult = () => {
  removeGameProgressContainer();
  removeGameStateContainer();

  const result = new ResultView();

  showScreen(result.element);
};

export default moduleResult;
