/*
Task 4

Write a function called `isFirstLetterUpperCase`.

The function takes a string in input.

It returns:

- `true`: if the first letter is upper case
- `false` otherwise.

Examples:
isFirstLetterUpperCase("hello"); // false
isFirstLetterUpperCase("Hello"); // true
isFirstLetterUpperCase("Bianca"); // true
isFirstLetterUpperCase("jim"); // false
isFirstLetterUpperCase(""); // false
isFirstLetterUpperCase("A"); // true
*/


// Problem hier: wir suchen im ganzen String nach einem groß geschriebenen Buchstaben...
// function isFirstLetterUpperCase(string) {
//   for (let letter of string) {
//     if (letter === letter.toUpperCase()) {
//       return true;
//     }
//   }
//   return false;
// }


function isFirstLetterUpperCase2(string) {
  if (string.length === 0) {
    return false;
  }
  // if (string.length === 0) return false;

  const firstChar = string.charAt(0);
  return firstChar === firstChar.toUpperCase();
}

// Version mit einer Regular Expression (hatten wir nicht im Unterricht)
const isFirstLetterUpperCase3 = string => /^[A-Z]/.test(string);


// x[0] => erster Buchstabe des Strings => Test, ob der String gefüllt ist, denn ein gefüllter String ist truthy
const isFirstLetterUpperCase4 = (x) => x[0] && x[0] === x[0].toUpperCase() ? true : false;

// Info: Die Probleme mit diesen Lösungen hier sind mir gerade unklar. Ich gebe euch ein Update!
// const isFirstLetterUpperCase5 = (x) => x[0] && x[0] === x[0].toUpperCase();
// const isFirstLetterUpperCase = (x) => x.charAt(0) && x.charAt(0) === x.charAt(0).toUpperCase();

const isFirstLetterUpperCase = x => Boolean(x[0]) && x[0] === x[0].toUpperCase();

const isFirstLetterUpperCase5 = (x) => x.length > 0 && x[0] === x[0].toUpperCase();

console.log(isFirstLetterUpperCase("hello")); // false
console.log(isFirstLetterUpperCase("Hello")); // true
console.log(isFirstLetterUpperCase("Bianca")); // true
console.log(isFirstLetterUpperCase("jim")); // false
console.log(isFirstLetterUpperCase("")); // false
console.log(isFirstLetterUpperCase("A")); // true

console.log(isFirstLetterUpperCase("piNg")); // false
console.log(isFirstLetterUpperCase("pinG")); // false