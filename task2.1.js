const matrix = [
  [1, 3, 2],
  [4, 7, 6],
  [2, 4, 1]
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  sum += matrix[i][0];
}

console.log(sum); 
