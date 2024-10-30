/**
 * Task 5
 * 
 * Use a loop to create an array containing the even numbers between 0 to 100, 
 * then print the whole array to the console
 * 
 * Expected output:
 * [0, 2, 4, 6, 8, 10, 12, ..., 96, 98, 100]
 *
 */

// Option 1
const array = [];

for (let i=0; i<=100; i+=2) {
  array.push(i);
}

console.log(array);

// Option 2
let numbers = []

for(let i = 0; i <= 50; i++){
    numbers.push(i*2); 
}

 console.log(numbers);

