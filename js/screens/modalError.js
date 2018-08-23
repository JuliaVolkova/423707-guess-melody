import createElementFromHtml from '../createElementFromHtml.js';

const modalErrorTemplate = `
  <section class="modal">
    <h2 class="modal__title">Произошла ошибка!</h2>
    <p class="modal__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
  </section>
`;

export const modalErrorScreen = createElementFromHtml(modalErrorTemplate);
