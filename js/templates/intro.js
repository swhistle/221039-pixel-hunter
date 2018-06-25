import {getElementFromTemplate, showScreen, container} from '../functions';
import greeting from './greeting';

const moduleIntro = () => {
  const intro = getElementFromTemplate(`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
`);

  showScreen(intro);

  const link = container.querySelector(`.intro__asterisk`);
  link.addEventListener(`click`, () => greeting());
};

export default moduleIntro;
