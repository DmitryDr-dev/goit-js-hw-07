// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const refs = {
  counterValueEl: document.querySelector('#value'),

  incrementValueBtnEl: document.querySelector('[data-action="increment"]'),
  decrementValueBtnEl: document.querySelector('[data-action="decrement"]'),
};

const onIncrementClick = () => {
  refs.counterValueEl.textContent = Number(refs.counterValueEl.textContent) + 1;
};

const onDecrementClick = () => {
  refs.counterValueEl.textContent = Number(refs.counterValueEl.textContent) - 1;
};

refs.incrementValueBtnEl.addEventListener('click', onIncrementClick);
refs.decrementValueBtnEl.addEventListener('click', onDecrementClick);
