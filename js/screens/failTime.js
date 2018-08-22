import createElementFromHtml from '../createElementFromHtml.js';
import {welcomeScreen} from './welcome';
import renderScreen from '../renderScreen';

const failTimeTemplate = `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>
`;

export const failTimeScreen = createElementFromHtml(failTimeTemplate);

const replayButton = failTimeScreen.querySelector(`.result__replay`);
replayButton.addEventListener(`click`, () => renderScreen(welcomeScreen));
