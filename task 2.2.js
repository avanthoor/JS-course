const matrix = [
  [6, 3, 6],
  [9, 4, 7],
  [6, 2, 6]
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  sum += matrix[i][i];
}

console.log(sum);
