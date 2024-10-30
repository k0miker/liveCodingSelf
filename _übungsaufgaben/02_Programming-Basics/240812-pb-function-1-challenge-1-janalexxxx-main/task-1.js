/**
 * 
 * Create a function that takes a string in input and returns a new 
 * string with the first and last character from the input string.
 * 
 * If the input string is an empty string, it returns an empty string
 */

function firstAndLastCharacter2(string) {
  return string !== '' ? string[0] + string[string.length - 1] : '';
}

function firstAndLastCharacter(string) {
  if (string.length === 0) {
    return '';
  }
  let firstChar = string[0];
  let lastChar = string[string.length-1];
  return firstChar + lastChar;
}

console.log(firstAndLastCharacter("")); // ""
console.log(firstAndLastCharacter("table")); // te
console.log(firstAndLastCharacter("cat")); // ct
console.log(firstAndLastCharacter("js")); // js


// Testen nach einem leeren String
// => if(string === "")
// => if(string.length === 0)
// => if(!string)

// Ersten Buchstaben isolieren
// => string[0]
// => string.charAt(0)
// => string.slice(0, 1)

// Letzten Buchstaben isolieren
// => string[string.length - 1]
// => string.charAt(string.length - 1)
// => string.slice(-1)