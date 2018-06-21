const getElementFromTemplate = (content) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = content;
  return elem;
};

const header = document.querySelector(`.header`);
const container = document.querySelector(`.central`);

const showHeader = (headerElement) => {
  header.innerHTML = ``;
  Array.prototype.forEach.call(headerElement.children, (item) => {
    header.appendChild(item.cloneNode(true));
  });
};

const showScreen = (screen) => {
  container.innerHTML = ``;
  Array.prototype.forEach.call(screen.children, (item) => {
    container.appendChild(item.cloneNode(true));
  });
};

export {getElementFromTemplate, showScreen, showHeader, container, header};
