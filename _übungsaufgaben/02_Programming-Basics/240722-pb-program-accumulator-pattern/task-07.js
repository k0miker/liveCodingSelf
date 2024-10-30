/**
 * Task 7
 *
 * Use a loop to calculate the sum of the odd numbers between 0 and 100 (including 100),
 * the print the result to the console
 * 
 * Expected output:
 * 2500
 */

let sum = 0;

for (let i=1; i<=100; i+=2) {
  sum += i;
}

console.log(sum); // 2500