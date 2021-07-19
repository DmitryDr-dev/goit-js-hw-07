// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontSizeControlEl = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
  let fontSize = fontSizeControlEl.value;
  textToChange.style.fontSize = fontSize + 'px';
  console.log(fontSize);
}
