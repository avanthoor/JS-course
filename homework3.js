// Task 1

/* let getSqrElem = (arr) => {
  let sum = 0;

  arr.forEach( (el) => {
    sum += el ** 2;
  } );
  return sum;
} 

let arr = [2, 4, 5];
console.log(getSqrElem(arr)); */
//-----------------------------------------------------

// Task 2

/* let getDigitsSum = (value) => {
  //value = '' + value;
  let arr = value.toString().split('');
  
  let sum = 0;

  arr.map ( (el) => {
    sum += +el;
  } );
  return sum;
}

let value = 873;
console.log(getDigitsSum(value));   */ 
//----------------------------------------------------- 

// Task 3

/* let getDivisors = (value) => {
  let arr = [];

  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
 
value = 24;
console.log(getDivisors(value)); */
//-----------------------------------------------------

// Task 4

/* let reverseStr = (userString) => {
  let arr = userString.split('');

  return arr.reverse();
}

let userString = 'JavaScript';
console.log(reverseStr(userString)); */
//-----------------------------------------------------

// Task 5

/* let delElem = (arr, value) => {
  newArr = arr.filter( (el) => {
    return el !== value;
  } )
  return newArr;
}

let arr = [1, 2, 3, 4, 5];
let value = 3;
console.log(delElem(arr, value)); */
//-----------------------------------------------------

// Task 6

let func = (value) => {
 let arr = [];
 
 for (i = 1; i <= value; i++) {
 arr.push(i);
 }
 return arr;
}

value = 15;
console.log(func(value));