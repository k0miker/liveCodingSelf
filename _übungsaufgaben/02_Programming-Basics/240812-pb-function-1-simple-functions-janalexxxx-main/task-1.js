/*
Task 1

Create 4 functions called:

- add: it takes 2 numbers in input and returns the result of their sum
- subtract: it takes 2 numbers in input and returns the result of their subtraction 
- multiply: it takes 2 numbers in input and returns the result of their multiplication
- divide: it takes 2 numbers in input and returns the result of their division

For example:

add(2, 4); // 6
subtract(2, 4); // -2
multiply(2, 4); // 8
divide(2, 4); // 0.5 

Call the functions with different values and print the result
to the console
*/

// Add
// Option 1:
function add(a, b) {
  return a + b;
}

// Option 2:
function add2(a, b) {
  const sum = a + b;
  return sum;
}

console.log(add(2, 4)); // 6


// Subtract
function subtract(a, b) {
  return a - b;
}

console.log(subtract(2, 4)); // -2


// Multiply
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 4)); // 8


// Divide
function divide(a, b) {
  return a / b;
}

function divide2(a, b) {
  if (b === 0) {
    console.log('Fehler: Division durch 0 ist nicht erlaubt');
    return;
  }

  return a / b;
}

console.log(divide(2, 4)); // 0.5 