console.log('скрипт запущен!')

const btn = document.querySelector('.button');
const textCounter = document.querySelector('.title__counter');
let counter = 0;

const counterClick = () => {
  counter = counter + 1;
  textCounter.textContent = counter;
}

btn.addEventListener('click', counterClick)