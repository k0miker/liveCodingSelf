/*
Task 7

Write a function called `containsNumber` 

The function takes a string in input and returns:

- `true`: if any of the characters in the string is a valid number
- `false`: if there are no numbers in the string

Examples:
```plaintext
containsNumber("123"); // true
containsNumber("abc"); // false
containsNumber("a2c"); // true
containsNumber("100px"); // true
containsNumber("1"); // true
containsNumber("0"); // true
containsNumber("$23.00"); // true
containsNumber("T-shirts x2"); // true
*/


// Info: Regular Expression hatten wir noch nicht
// /\d/ => Testet, ob der String eine Zahl enthält
function containsNumber2(nummer) {
  return /\d/.test(nummer);
}

// Peter's Lösung:
// Array-Methode .some werden wir erst später kennenelernen
function containsNumber3(string) {
  const numbers = [ 1 ,2, 3, 4, 5, 6, 7, 8, 9 ];
  return numbers.some(number => string.includes(String(number)));
}

function containsNumber(str) {
  // 1. Iteration durch den String
  for (let i = 0; i < str.length; i++) {
    // 2. Testen, ob der Buchstabe eine Zahl ist
    if (!isNaN(str[i]) && str[i] !== ' ') {
        return true;
    }
  }
  return false;
}

console.log(containsNumber("123")); // true
console.log(containsNumber("abc")); // false
console.log(containsNumber("a2c")); // true
console.log(containsNumber("100px")); // true
console.log(containsNumber("1")); // true
console.log(containsNumber("0")); // true
console.log(containsNumber("$23.00")); // true
console.log(containsNumber("T-shirts x2")); // true


// Warum funktioniert der Test mit isNaN?
// isNaN konvertiert den Input zur Number & vergleicht dann, ob es sich dabei um NaN handelt:
// d.h. wenn es sich um einen String handelt, der zur Number konvertiert werden kann, ist das Ergebnis false,
// ansonsten true

console.log('isNaN Testen:')
console.log(`isNaN("7")`, isNaN("7")); // false
console.log(`isNaN("a")`, isNaN("a")); // true

