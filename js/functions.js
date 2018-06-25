const getElementFromTemplate = (content) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = content;
  return elem;
};

const container = document.querySelector(`.central`);
const header = document.querySelector(`.header`);

const initGameStateContainer = () => {
  const headerGameStateContainer = document.createElement(`div`);
  headerGameStateContainer.classList.add(`header-game-state`);
  header.appendChild(headerGameStateContainer);
};

const renderGameState = (state) => {
  const headerGameState = document.querySelector(`.header .header-game-state`);
  headerGameState.innerHTML = ``;
  Array.prototype.forEach.call(state.children, (item) => {
    headerGameState.appendChild(item.cloneNode(true));
  });
};

const initGameProgressContainer = () => {
  const gameProgressContainer = document.createElement(`div`);
  gameProgressContainer.classList.add(`stats`);
  container.after(gameProgressContainer);
};

const renderGameProgress = (gameProgress) => {
  const progressContainer = document.querySelector(`.stats`);
  progressContainer.innerHTML = ``;
  Array.prototype.forEach.call(gameProgress.children, (item) => {
    progressContainer.appendChild(item.cloneNode(true));
  });
};

const removeGameProgressContainer = () => {
  const progressContainer = document.querySelector(`.stats`);
  if (progressContainer) {
    progressContainer.remove();
  }
};

const showScreen = (screen) => {
  container.innerHTML = ``;
  Array.prototype.forEach.call(screen.children, (item) => {
    container.appendChild(item.cloneNode(true));
  });
};

export {
  getElementFromTemplate,
  showScreen,
  renderGameState,
  renderGameProgress,
  container,
  header,
  initGameStateContainer,
  initGameProgressContainer,
  removeGameProgressContainer
};
