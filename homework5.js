// Task 1
/* 
let currentElem = null;

document.body.addEventListener('mouseover', (e) => {
  if (e.target === e.currentTarget) return;
  e.target.classList.add('border')
})

document.body.addEventListener('mouseout', (e) => {
  if (e.target === e.currentTarget) return;
  e.target.classList.remove('border')
}) */

// Task 2

/* const calc = (size) => {
  let result = null;
   
  let square = size * size;
  let perimeter = size * 4;

  return result = `Площадь квадрата: ${square} см, а периметр: ${perimeter} см.`;
}

const input = document.querySelector('input');
const button = document.querySelector('button');
const showResult = document.querySelector('.show-result');
console.log(input)

button.addEventListener('click', (e) => {
  if (e.target) {
    showResult.textContent = calc(input.value);
  }
}) */

// Task 3
/* const button = document.querySelector('button');
const input = document.querySelector('input');

let numOfTask = 0;

button.addEventListener('click', (e) => {
  if (e.target) {
    numOfTask++; 
  }
  let task = document.querySelector(`.task-${numOfTask}`);

  task.textContent = input.value;
})
 */
