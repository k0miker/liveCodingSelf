/*
 Task 6
 */

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

// Option 1
for (let i=0; i<letters.length; i++) {
  if (i % 2 === 0) console.log(letters[i]);
}

// Option 2
const finalLetters = [];

for (let i=0; i<letters.length; i++) {
  if (i % 2 === 0) finalLetters.push(letters[i]);
}

console.log(finalLetters);