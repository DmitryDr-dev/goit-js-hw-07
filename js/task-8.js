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

const [inputEl, renderBtn, deleteBtn] =
  document.querySelector('#controls').children;
const boxesEl = document.querySelector('#boxes');

function createRandom() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
}

function createBoxes() {
  const boxProperties = [];

  for (let i = 0; i < inputEl.value; i += 1) {
    let size = `${30 + i * 10}px`;
    let color = createRandom();
    const boxProperty = { size, color };
    boxProperties.push(boxProperty);
  }

  return boxProperties;
}

// console.log(createBoxes(5));

function createMarkUp(options) {
  return options.map(({ size, color }) => {
    const box = document.createElement('div');
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = color;
    return box;
    // console.log(box);
  });
}

function renderMarkup() {
  const properties = createBoxes();
  const markUp = createMarkUp(properties);

  boxesEl.append(...markUp);
}

function deleteMarkUp() {
  inputEl.value = '';
  boxesEl.innerHTML = '';
}
renderBtn.addEventListener('click', renderMarkup);
deleteBtn.addEventListener('click', deleteMarkUp);
