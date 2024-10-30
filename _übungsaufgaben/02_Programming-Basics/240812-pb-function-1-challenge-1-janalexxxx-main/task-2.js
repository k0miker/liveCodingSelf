/**
 * Task 2
 * 
 * Create a function that takes 2 numbers in input and returns the 
 * largest of the 2.
 * 
 * If the numbers are equal, it returns the first one. 
 */

function largestOf22(num1, num2) {
  if (num1 === num2 || num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function largestOf23(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}

function largestOf24(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2
  }
}

const largestOf25 = (a, b) => a >= b ? a : b;

function largestOf2(num1, num2) {
  return Math.max(num1, num2);
}

console.log(largestOf2(2, 5)); // 5
console.log(largestOf2(6, 3)); // 6
console.log(largestOf2(10, 10)); // 10
console.log(largestOf2(-1, -5)); // -1