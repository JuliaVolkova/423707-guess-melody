import createElementFromHtml from './createElementFromHtml.js';


const RIGHT_ARROW = 37;
const LEFT_ARROW = 39;

const mainSection = document.querySelector(`.main`);
const nodes = document.querySelectorAll(`template`);

const screens = Array.from(nodes).map((node) => node.content);

const selectScreen = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element.cloneNode(true));
};

let current = 0;

const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectScreen(screens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

select(0);

const arrowButtonTemplate = `
  <div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 70px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: #f0eed5;
        border: 2px solid black;
        padding: 5px 20px;
      }
      .arrows__btn:hover,
      .arrows__btn:focus {
        background: #ff9749;
      }
    </style>
    <button class="arrows__btn arrows__btn-left"><-</button>
    <button class="arrows__btn arrows__btn-right">-></button>
</div>
`;

const arrowButtons = createElementFromHtml(arrowButtonTemplate);

document.querySelector(`.app`).appendChild(arrowButtons);

const leftButton = arrowButtons.querySelector(`.arrows__btn-left`);
const rightButton = arrowButtons.querySelector(`.arrows__btn-right`);

leftButton.addEventListener(`click`, () => select(current - 1));
rightButton.addEventListener(`click`, () => select(current + 1));
