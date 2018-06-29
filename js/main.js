import FooterView from './view/footer-view';
import {putAfterContainer} from "./functions";
import App from './app';

App.showIntro();

const footer = new FooterView();
putAfterContainer(footer.element);

document.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`back`) || event.target.parentNode.classList.contains(`back`)) {
    App.showGreeting();
  }
});
