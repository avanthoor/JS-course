const info = document.querySelector('div')
const btn = document.querySelector('button')

const createTable = document.createElement('table')

document.body.append(createTable)

const table = document.querySelector('table')


for (let i = 0; i < 3; i++) {
  const createTr = document.createElement('tr')

  table.append(createTr)
}

const tr = document.querySelectorAll('tr')

tr.forEach((el) => {
  for (let i = 0; i < 3; i++) {
    const createTd = document.createElement('td')
  
    el.append(createTd)
  } 
})

const td = document.querySelectorAll('td')


// Функция получения массива из трех рандомных чисел
const getRandomArray = (min, max) => {
  let rand = new Set();
  while (rand.size < 3) rand.add(Math.floor(Math.random() * (max - min + 1)) + min)
  return Array.from(rand)
}


const randomizeTd = () => {
  td.forEach((el, i) => {
    if (i === getRandomArray(0,8)[0] || i === getRandomArray(0,8)[1] || i === getRandomArray(0,8)[2]) {
      td[i].setAttribute('data-lucky', 'lucky')
    }
  })
}

let wrongAnswers = 0
let rightAnswers = 0
const tries = 5

const startGame = () => {
  table.addEventListener('click', function click(e) {
    if (e.target.dataset.lucky === 'lucky' && e.target.dataset.clicked !== 'clicked' && e.target !== e.currentTarget) {
      e.target.setAttribute('data-clicked', 'clicked')
      e.target.classList.add('right-answer')
      rightAnswers++
      info.textContent = 'Угадали!'
    } else if (e.target.dataset.clicked !== 'clicked' && e.target !== e.currentTarget){
      e.target.setAttribute('data-clicked', 'clicked')
      e.target.classList.add('wrong-answer')
      wrongAnswers++
      info.textContent = `У вас осталось ${5 - wrongAnswers} попыток из ${tries}`
    }
  
    if (wrongAnswers === tries) {
      info.textContent = 'Вы проиграли' 
      table.removeEventListener('click', click)
    } else if (rightAnswers === 3) {
      info.textContent = 'Вы выиграли!!!'
      table.removeEventListener('click', click)
    }
  })
}

btn.addEventListener('click', () => {
  for (let any of td) {
    any.removeAttribute('class')
    any.removeAttribute('data-clicked')
    any.removeAttribute('data-lucky')
  }
  startGame()
  randomizeTd()
  wrongAnswers = 0
  rightAnswers = 0
  info.textContent = 'Для начала нажмите на любую ячейку'
})

startGame()
randomizeTd()