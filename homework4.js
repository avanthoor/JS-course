/* // Task 1

class Worker {

  constructor(name, surname, rate, workingDays) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._workingDays = workingDays;
    this._salary = rate * workingDays;
  }

  get name() {
    return this._name;
  }

  get surname() {
    return this._surname;
  }

  get rate() {
    return this._rate;
  }

  set rate(value) {
    return this._rate = value;
  }

  get workingDays() {
    return this._workingDays;
  }

  set workingDays(value) {
    return this._workingDays = value;
  }

  get salary() {
    return this._salary;
  }

}

const worker = new Worker('Иван', 'Иванов', 10, 28)

console.log(worker.name); 
console.log(worker.surname); 
console.log(worker.rate); 
console.log(worker.workingDays); 
console.log(worker.salary);

console.log(worker.rate);
worker.rate = 12;
console.log(worker.rate);

console.log(worker.workingDays);
worker.workingDays = 31;
console.log(worker.workingDays); */

// Task 2

/* class MyString {

  reverse(value) {
    return value.split('').reverse().join('');
  }

  ucFirst(value) {
    return value
      .split('')
      .map( // Почему то el[i] выводит весь массив, а не первый его элемент
        (el, i) => (i === 0 ? el.toUpperCase() : el)
      )
      .join('');
  }

  ucWords(value) {
    return value
      .split(' ')
      .map( 
        (el, i) => el[0].toUpperCase() + el.slice(1).toLowerCase()
      )
      .join(' ');
  }

}

const str = new MyString();

console.log(str.reverse('foo'));
console.log(str.reverse('abcde'));

console.log(str.ucFirst('dima')); 
console.log(str.ucFirst('Oleg'));

console.log(str.ucWords('hello world'));
console.log(str.ucWords('abc abc ABC Abc')); */

// Task 3

class Validator {

  isRangedNumber(number, range) {
    return number >= range[0] && number <= range[1]; 
  }

  isPhoneNumber(num) {
    let numArr = num.split(' ').join('').split('');
    let result = true;

    //Проверка на пренадлежность к целым положительным числам
    for (let i = 2; i < numArr.length; i++) {
      if (+numArr[i] !== +numArr[i]) {
        result = false;
      }
    }
    
    //Проверка на начальные значения '+7
    if (numArr[0] !== '+')  {
      result = false;
    } else if ((numArr[1] !== '7')) {
      result = false;
    } 

    //Проверка на длину номера
    if (numArr.length !== 12) {
      result = false;
    }

    return result
  }
  
}

const validator = new Validator()

console.log(validator.isRangedNumber(5, [1, 7]));
console.log(validator.isRangedNumber(2, [4, 8]));

console.log(validator.isPhoneNumber('+7 999 999 99 99'));
console.log(validator.isPhoneNumber('a 999 999'));
console.log(validator.isPhoneNumber('9 999 999 99 99'));