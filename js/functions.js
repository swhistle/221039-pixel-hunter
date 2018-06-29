const container = document.querySelector(`.central`);

const renderHeader = (element) => {
  const header = document.querySelector(`.header`);
  header.innerHTML = ``;
  if (element === undefined) {
    return;
  }
  header.appendChild(element);
};

const initGameStateContainer = () => {
  const header = document.querySelector(`.header`);
  const headerGameStateContainer = document.createElement(`div`);
  headerGameStateContainer.classList.add(`header-game-state`);
  header.appendChild(headerGameStateContainer);
};

const renderGameState = (state) => {
  const headerGameState = document.querySelector(`.header .header-game-state`);
  headerGameState.innerHTML = ``;
  headerGameState.appendChild(state);
};

const removeGameStateContainer = () => {
  const gameStateContainer = document.querySelector(`.header .header-game-state`);
  if (gameStateContainer) {
    gameStateContainer.remove();
  }
};

const initGameProgressContainer = () => {
  const gameProgressContainer = document.createElement(`div`);
  gameProgressContainer.classList.add(`stats`);
  container.after(gameProgressContainer);
};

const renderGameProgress = (gameProgress) => {
  const progressContainer = document.querySelector(`.stats`);
  progressContainer.innerHTML = ``;
  progressContainer.appendChild(gameProgress);
};

const removeGameProgressContainer = () => {
  const progressContainer = document.querySelector(`.stats`);
  if (progressContainer) {
    progressContainer.remove();
  }
};

const showScreen = (screen) => {
  container.innerHTML = ``;
  container.appendChild(screen);
};

const putAfterContainer = (element) => {
  container.after(element);
};

export {
  showScreen,
  renderHeader,
  initGameStateContainer,
  renderGameState,
  removeGameStateContainer,
  initGameProgressContainer,
  renderGameProgress,
  removeGameProgressContainer,
  container,
  putAfterContainer
};
