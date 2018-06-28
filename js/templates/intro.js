import IntroView from '../view/intro-view';
import {showScreen} from '../functions';
import greeting from './greeting';

const moduleIntro = () => {
  const intro = new IntroView();

  showScreen(intro.element);

  intro.onChangeScreen = () => greeting();
};

export default moduleIntro;
