import {showScreen} from './functions';
import intro from './templates/intro';
import greeting from './templates/greeting';

showScreen(intro);

document.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`back`) || event.target.parentNode.classList.contains(`back`)) {
    showScreen(greeting);
  }
});
