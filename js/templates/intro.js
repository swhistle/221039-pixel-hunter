import {getElementFromTemplate, showScreen, container} from '../functions';
import greeting from './greeting';
import IntroView from '../view/intro-view';

const moduleIntro = () => {
  const intro = new IntroView();

  showScreen(intro);

  // const link = container.querySelector(`.intro__asterisk`);
  // link.addEventListener(`click`, () => greeting());
};

export default moduleIntro;
