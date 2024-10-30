/**
 * Task 3 
 * 
 * Use a loop to create a string with only the even numbers between 0 to 9, then print it to
 * the console
 * 
 * Expected output:
 * 02468 
 */

// Option 1
let ergebnis = '';

for (let i=0; i<=9; i+=2) {
  ergebnis += i;
}

console.log(ergebnis);

// Option 2
let ergebnis2 = '';

for (let i=0; i<=4; i++) {
  ergebnis2 += i*2;
}

console.log(ergebnis2);


// Option 3
let ergebnis3 = '';

for (let i=0; i<=9; i++) {
  if (i % 2 === 0) {
    ergebnis3 += i;
  }
}

console.log(ergebnis3);