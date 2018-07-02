const container = document.querySelector(`.central`);
const header = document.querySelector(`.header`);

const renderHeader = (element) => {
  header.innerHTML = ``;
  if (element === undefined) {
    return;
  }
  header.appendChild(element);
};

const initGameStateContainer = () => {
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

const putAfterContainer = (element) => {
  container.after(element);
};

const hideBodyOverflow = () => {
  document.body.style.overflow = `hidden`;
};

export {
  renderHeader,
  initGameStateContainer,
  renderGameState,
  removeGameStateContainer,
  initGameProgressContainer,
  renderGameProgress,
  removeGameProgressContainer,
  putAfterContainer,
  hideBodyOverflow
};
