import {showScreen} from '../functions';
import greeting from './greeting';
import IntroView from '../view/intro-view';

const moduleIntro = () => {
  const intro = new IntroView();

  showScreen(intro.element);

  intro.onChangeScreen = () => greeting();
};

export default moduleIntro;
