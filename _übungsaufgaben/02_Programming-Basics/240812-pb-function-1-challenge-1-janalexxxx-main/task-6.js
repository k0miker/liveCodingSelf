/*
Task 6

Write a function called `containsVowel`

The function takes a string in input and checks if it contains 
at least a vowel (any letter between: a, e, i, o, u). 

The function returns:

- `true`: if there's at least a vowel in the string
- `false`: if there are no vowels 

The function must be case insensitive

Examples:

containsVowel("table"); // true
containsVowel("bcdfg"); // false
containsVowel("a"); // true
containsVowel("aeiou"); // true
containsVowel("AEIOU"); // true
containsVowel(""); // false
containsVowel("Abc"); // true
*/

function containsVowel2(string) {
  const vokale = ["a", "e", "i", "o", "u"];
  
  for (let i = 0; i < string.length; i++) {
    if (vokale.includes(string[i].toLowerCase())) {
      return true;
    }
  }

  return false;
}


function containsVowel(string) {
  const vokale = "aeiou";
  
  for (let i = 0; i < string.length; i++) {
    if (vokale.includes(string[i].toLowerCase())) {
      return true;
    }
  }

  return false;
}


// Info: Regex haben wir nicht gemacht
// Lösung mit einem Regex-Pattern (Regular Expression):
// (/[aeiou]/i testet, ob der String einen Vokal enthält)
const containsVowel3 = (string) => /[aeiou]/i.test(string);


// Info: Set hatten wir nicht
// (Set ist ein Datentyp, den wir noch nicht hatten (ein Objekt mit einzigartigen Werten))
function containsVowe4(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  str = str.toLowerCase();
  
  for (const char of str) {
    if (vowels.has(char)) {
        return true;
    }
  }
  
  return false;
}


console.log(containsVowel("table")); // true
console.log(containsVowel("bcdfg")); // false
console.log(containsVowel("a")); // true
console.log(containsVowel("aeiou")); // true
console.log(containsVowel("AEIOU")); // true
console.log(containsVowel("")); // false
console.log(containsVowel("Abc")); // true