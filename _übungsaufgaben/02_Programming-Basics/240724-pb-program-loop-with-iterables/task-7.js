/*
 Task 7
 */

const sentence = "I'm something of a developer myself";

// Option 1
for (let i=sentence.length-1; i>=0; i--) {
  console.log(sentence[i]);
}

// Option 2
const reverseSentence = sentence.split('').reverse().join('');

for (const letter of reverseSentence) {
  console.log(letter);
}

// Option 3
let letters = sentence.split('');
letters = letters.reverse();
const reverseSentence2 = letters.join('');

for (const letter of reverseSentence2) {
  console.log(letter);
}
