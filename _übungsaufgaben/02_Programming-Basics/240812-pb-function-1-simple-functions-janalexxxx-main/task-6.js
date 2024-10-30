/*
Task 6

Write a function called `randomInt` that takes a number
in input and returns a random integer between 0 and that number

For example:

// a random integer between 0 and 10
randomInt(10); // 7 
randomInt(10); // 8 
randomInt(10); // 2 
randomInt(10); // 10 
randomInt(10); // 0 

**HINT**
The formula to get a random number between 0 and any number 
`n` is:

let n = 5;
Math.floor(Math.random() * (n + 1));
*/

function randomInt(num) {
  return Math.floor(Math.random() * (num + 1));
}

console.log(randomInt(10)); // 7 
console.log(randomInt(10)); // 8 
console.log(randomInt(10)); // 2 
console.log(randomInt(10)); // 10 
console.log(randomInt(10)); // 0 

console.log(randomInt(15)); // 7 
console.log(randomInt(15)); // 8 
console.log(randomInt(15)); // 2 
console.log(randomInt(15)); // 10 
console.log(randomInt(15)); // 0 


// Warum funktioniert das so?

// num = 10;
// Math.floor(Math.random() * (num + 1));

// Math.random() // 0 - 0.999
// Math.random() * 11 // 0 - 10.999
// Math.floor(Math.random() * 11) // 0 - 10
