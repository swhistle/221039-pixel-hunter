const getElementFromTemplate = (content) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = content;
  return elem;
};

const container = document.querySelector(`.central`);

const showScreen = (screen) => {
  container.innerHTML = ``;
  container.appendChild(screen);
};

export {getElementFromTemplate, showScreen};
