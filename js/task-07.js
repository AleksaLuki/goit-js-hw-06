// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputControl = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.log(inputControl);
console.log(textRef);

const fontSizeControl = ({ currentTarget }) =>
  (textRef.style.fontSize = `${currentTarget.value}px`);

  inputControl.addEventListener('input', fontSizeControl);
