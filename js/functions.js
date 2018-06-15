const getElementFromTemplate = (content) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = content;
  return elem;
};

const container = document.querySelector(`.central`);

const showScreen = (screen) => {
  container.innerHTML = ``;
  Array.prototype.forEach.call(screen.children, (item) => {
    container.appendChild(item.cloneNode(true));
  });
};

export {getElementFromTemplate, showScreen, container};
