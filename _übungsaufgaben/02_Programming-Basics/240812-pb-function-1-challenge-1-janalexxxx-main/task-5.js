/*
Task 5 - isInRange

Create a function called `isInRange`

The function takes 3 numerical values in input:

- `number`: the number we want to check
- `min`: the smallest value of the range
- `max`: the largest value of the range

Examples:

isInRange(2, 0, 5); // true
isInRange(10, 0, 5); // false
isInRange(100, 50, 500); // true
isInRange(-1, -50, 50); // true
isInRange(0, -50, 50); // true

*/

function isInRange(num, min, max) {
  return num >= min && num <= max;
}

console.log(isInRange(2, 0, 5)); // true
console.log(isInRange(10, 0, 5)); // false
console.log(isInRange(100, 50, 500)); // true
console.log(isInRange(-1, -50, 50)); // true
console.log(isInRange(0, -50, 50)); // true
