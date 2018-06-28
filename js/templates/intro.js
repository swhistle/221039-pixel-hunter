import IntroView from '../view/intro-view';
import {showScreen} from '../functions';
import greeting from './greeting';

const moduleIntro = () => {
  const intro = new IntroView();

  showScreen(intro.element);

  intro.bind = () => {
    const link = document.querySelector(`.intro__asterisk`);
    link.addEventListener(`click`, () => {
      intro.onChangeScreen();
    });
  };

  intro.bind();

  intro.onChangeScreen = () => greeting();
};

export default moduleIntro;
