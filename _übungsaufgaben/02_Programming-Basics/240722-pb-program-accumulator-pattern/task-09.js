/**
 * Task 9
 * 
 * Use a loop to create a string containing all numbers from 0 to 10, separated
 * by a dash `-`
 * 
 * 
 * Expected output:
 * 0-1-2-3-4-5-6-7-8-9-10
 * 
 */



// Option 1
let string = '';

for (let i=0; i<=10; i++) {
  string += `${i}-`;
}

string = string.slice(0, -1);

console.log(string);


// Option 2
string = '';

for (let i=0; i<=10; i++) {
  string += i;

  if (i < 10) {
    string += '-';
  }
}

console.log(string);



// Pseudocode könnt ihr zum Planen nutzen:

// Variable für den String

// Loop, der 10x ausgeführt wird
  // 1. Index zum String hinzufügen
  // 2. Wenn der Index 10 ist, kein `-` hinzufügen
  // 3. Wenn der Index kleiner als 10 ist, dann `-` hinzufügen

