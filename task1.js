const filmName = ['\"Брат\"', '\"Цвет граната\"', '\"Пролетая над гнездом кукушки\"'];
const answers = [];

for (let i = 0; i < 3; i++) {
  let question = confirm(`Смотрели ли вы ${filmName[i]}?`);

  if (question === true) {
    answers.push('yes');
  } else {
    answers.push('no');
  }
}

console.log(answers);
