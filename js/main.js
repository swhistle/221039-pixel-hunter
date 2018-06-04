const containerForTemplates = document.querySelector(`.central`);
const screenGreeting = document.getElementById(`greeting`);
const screenRules = document.getElementById(`rules`);
const screenGame1 = document.getElementById(`game-1`);
const screenGame2 = document.getElementById(`game-2`);
const screenGame3 = document.getElementById(`game-3`);
const screenStats = document.getElementById(`stats`);

const arrowButtons = `
  <div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 95px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
  </div>
`;

const screens = [screenGreeting, screenRules, screenGame1, screenGame2, screenGame3, screenStats];
let currentScreenNumber = -1;

const showScreen = (screenNumber) => {
  containerForTemplates.innerHTML = ``;
  const screen = screens[screenNumber];
  containerForTemplates.appendChild(screen.content.cloneNode(true));
};

const changeScreen = (next) => {
  if (next && currentScreenNumber < screens.length - 1) {
    currentScreenNumber++;
  } else if (!next && currentScreenNumber > 0) {
    currentScreenNumber--;
  }
  showScreen(currentScreenNumber);
};

const createArrowButtonsElement = () => {
  const arrowButtonsElement = document.createElement(`div`);
  arrowButtonsElement.innerHTML = arrowButtons;
  document.body.appendChild(arrowButtonsElement);
};

createArrowButtonsElement();

const arrowPrev = document.querySelectorAll(`.arrows__btn`)[0];
const arrowNext = document.querySelectorAll(`.arrows__btn`)[1];

arrowPrev.addEventListener(`click`, () => {
  changeScreen(false);
});

arrowNext.addEventListener(`click`, () => {
  changeScreen(true);
});

document.addEventListener(`keydown`, (evt) => {
  if (evt.which === 37) {
    changeScreen(false);
  }

  if (evt.which === 39) {
    changeScreen(true);
  }
});
