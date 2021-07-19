// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// const refs = {
//   inputEl: document.querySelector('input'),
//   btnRender: document.querySelector('[data-action="render"]'),
//   btnDestroy: document.querySelector('[data-action="destroy"]'),
// };
const [inputEl, btnRender, btnDestroy] =
  document.querySelector('#controls').children;
const boxesEl = document.querySelector('#boxes');

function createRandom() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
}

const createElements = () => {
  let elements = [];
  for (let i = 0; i < inputEl.value; i += 1) {
    let size = `${30 + i * 10}px`;
    let color = createRandom();
    let element = { size, color };
    elements.push(element);
  }

  return elements;
};

const createMarkUp = options => {
  return options.map(({ size, color }) => {
    const divEl = document.createElement('div');
    divEl.style.width = size;
    divEl.style.height = size;
    divEl.style.backgroundColor = color;
    // console.log(divEl);
    return divEl;
  });
};

const renderMarkUp = el => {
  const elements = createElements();
  const markUp = createMarkUp(elements);
  boxesEl.append(...markUp);
};

const destroyMarkup = () => {
  inputEl.value = '';
  boxesEl.innerHTML = '';
};

btnRender.addEventListener('click', renderMarkUp);
btnDestroy.addEventListener('click', destroyMarkup);
