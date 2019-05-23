const sizes = [
  'xx-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  'xx-large'
];
__;

let initial = 3; // Counter for initial size of the font

const buttons = ['red', 'green', 'blue'];
const fonts = document.querySelector('.fonts'); // the elements we want to increase in size
const body = document.querySelector('.body');

document.querySelector('.smaller').addEventListener('click', () => {
  if (initial > 0) {
    initial--;
  }
  fonts.style.fontSize = sizes[initial];
});

document.querySelector('.normal').addEventListener('click', () => {
  initial = 3;
  fonts.style.fontSize = sizes[initial];
});

document.querySelector('.bigger').addEventListener('click', () => {
  fonts.style.fontSize = sizes[initial];
  if (initial < sizes.length) {
    initial++;
  }
});

for (let button of buttons) {
  let newButton = document.createElement('button');
  newButton.textContent = button;
  newButton.addEventListener('click', () => {
    body.style.background = button;
  });
  fonts.appendChild(newButton);
}
