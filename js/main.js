import intro from './templates/intro';
import greeting from './templates/greeting';
import FooterView from './view/footer-view';
import {putAfterContainer} from "./functions";

intro();

const footer = new FooterView();
putAfterContainer(footer.element);

document.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`back`) || event.target.parentNode.classList.contains(`back`)) {
    greeting();
  }
});
