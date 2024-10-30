/*
 Task 8
 */

const quote = "Possessions never meant anything to me";
const vowels = "aeiou";

// Option 1
for (const letter of quote) {
  if (vowels.includes(letter.toLowerCase())) {
    console.log(letter);
  }
}

// Option 2
for (let i=0; i<quote.length; i++) {
  if (vowels.includes(quote[i])) {
    console.log(quote[i]);
  }
}