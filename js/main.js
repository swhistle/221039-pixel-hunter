const container = document.querySelector(`.central`);
const screenMain = document.getElementById(`main`);
const screenGreeting = document.getElementById(`greeting`);
const screenRules = document.getElementById(`rules`);
const screenGame1 = document.getElementById(`game-1`);
const screenGame2 = document.getElementById(`game-2`);
const screenGame3 = document.getElementById(`game-3`);
const screenStats = document.getElementById(`stats`);

const arrowPrev = document.getElementById(`arrow-prev`);
const arrowNext = document.getElementById(`arrow-next`);

const screens = [screenMain, screenGreeting, screenRules, screenGame1, screenGame2, screenGame3, screenStats];
let currentScreenNumber = 0;
let isAlt = false;

function showScreen(screenNumber) {
  container.innerHTML = ``;
  const screen = screens[screenNumber];
  container.appendChild(screen.content.cloneNode(true));
}

function changeScreen(next) {
  if (next === true && currentScreenNumber < screens.length - 1) {
    currentScreenNumber++;
    showScreen(currentScreenNumber);
  } else if (next === false && currentScreenNumber > 0) {
    currentScreenNumber--;
    showScreen(currentScreenNumber);
  }
}

document.addEventListener(`keyup`, (evt) => {
  if (evt.which === 18) {
    isAlt = false;
  }
});

document.addEventListener(`keydown`, (evt) => {
  if (evt.which === 18) {
    isAlt = true;
  }

  if (evt.which === 37 && isAlt === true) {
    changeScreen(false);
  }

  if (evt.which === 39 && isAlt === true) {
    changeScreen(true);
  }
});

arrowPrev.addEventListener(`click`, () => {
  changeScreen(false);
});

arrowNext.addEventListener(`click`, () => {
  changeScreen(true);
});

showScreen(0);
