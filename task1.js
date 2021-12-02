const trueCorner = 3;
let answerIsCorrect = false;

let userCorner = +prompt('Введите угол наклона (от 0 до 5)');

if (userCorner < 3) {
  alert('Промах, возьмите чутка выше.');
} else if (userCorner > 3) {
  alert('Промах, возьмите чутка ниже.');
} else if (userCorner === trueCorner) {
  answerIsCorrect = true;
} 

if (answerIsCorrect === false) {
  userCorner = +prompt('Введите угол наклона (от 0 до 5)');
} 

if (userCorner === trueCorner) {
  answerIsCorrect = true;
} else {
  alert('К сожалению, опять промах. Правильное число было 3')
}

if (answerIsCorrect) {
  alert('Поздравляем, вы попали!');
}

