function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const textColor = document.querySelector('.color');
const BtnchangeColor = document.querySelector('.change-color');
const body = document.body;

const changeColor = () => {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
};

BtnchangeColor.addEventListener('click', changeColor);