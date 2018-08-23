const mainSection = document.querySelector(`.main`);

const selectScreen = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};

export default selectScreen;
