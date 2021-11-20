let sum = 0;
let correctAnswer = false;

//Первый вопрос
answer = prompt('Кто написал роман \"Идиот\"?');

if (answer.toLowerCase() === 'достоевский') {
  alert('Правильно!');
  sum++;
} else {
  alert('Ответ неверен');
}

//Второй вопрос
answer = prompt('Какой самый большой материк на Земле?');

if (answer.toLowerCase() === 'евразия') {
  alert('Правильно!');
  sum++;
} else {
  alert('Ответ неверен');
}

//Третий вопрос
answer = prompt('Год основания Санкт-Петербурга?');

if (answer.toLowerCase() === '1703') {
  alert('Правильно!');
  sum++;
} else {
  alert('Ответ неверен');
}

//Четвёртый вопрос
answer = prompt('Какое из чисел - простое: 16, 5, 8?');

if (answer.toLowerCase() === '5') {
  alert('Правильно!');
  sum++;
} else {
  alert('Ответ неверен');
}

//Пятый вопрос
answer = prompt('Какая валюта используется в Японии?');

if (answer.toLowerCase() === 'иена') {
  alert('Правильно!');
  sum++;
} else {
  alert('Ответ неверен');
}

alert(`Вы ${sum} раз дали верный ответ`);