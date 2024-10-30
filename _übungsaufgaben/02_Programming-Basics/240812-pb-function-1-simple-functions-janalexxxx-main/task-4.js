/*
Task 4

Write a function called `startsWithCapitalLetter` that takes
a string in input and returns:

- `true`: if the first character is an uppercase letter
- `false`: if the first character is NOT an uppercase letter

Assume that the input string always starts with a letter from
the alphabet and it can't be a number or a symbol.

For example:

startsWithCapitalLetter("Hello"); // true
startsWithCapitalLetter("javascript"); // false
startsWithCapitalLetter("Python"); // true

**HINT**:
How to check if a letter is uppercase?

let letter = "x";
letter === letter.toUpperCase(); // false

let capitalLetter = "Q";
capitalLetter === capitalLetter.toUpperCase(); // true
*/


function startsWithCapitalLetter(string) {
  // Verschiedene Testversionen
  if (string === "") return false;
  // if (string.length === 0) return false;
  // if (!string) return false;

  // Ersten Buchstaben isolieren
  const firstChar = string.charAt(0);

  // Test, ob der erste Buchstabe groß geschrieben ist
  return firstChar === firstChar.toUpperCase(); // "h" === "h".toUpperCase() // "h" === "H" // false
}

function startsWithCapitalLetter2(string) {
  if (string === "") return false;

  const firstChar = string.charAt(0);
  const isUpperCase = firstChar === firstChar.toUpperCase();
  return isUpperCase;
}

function startsWithCapitalLetter3(string) {
  // Absturz bei einem leeren String durch Test vermeiden:
  if (string === "") return false;
  return  string[0] === string[0].toUpperCase();  
}


console.log(startsWithCapitalLetter("Hello")); // true
console.log(startsWithCapitalLetter("javascript")); // false
console.log(startsWithCapitalLetter("Python")); // true

// Sonderfall leerer String
console.log(startsWithCapitalLetter("")); // true
console.log(startsWithCapitalLetter2("")); // true
console.log(startsWithCapitalLetter3("")); // false