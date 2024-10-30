/*
Task 5

Write a function called `capitalise` that takes a string in 
input and returns the same string with:

- the first letter transformed to upper case
- the rest of the string to lower case

For example:

capitalise("hello"); // Hello
capitalise("wE pUt tHe FUN in fUnCtIOns"); // We put the fun in functions
capitalise("BERLIN"); Berlin

**HINT**
We can use slice() to get the string without the first character

let s = "hello world";
s.slice(1); // ello world

*/

function capitalise(string) {
  // Der Test ist nicht unbedingt notwendig, da es auch mit einem leeren String funktioniert:
  // Bei einem leeren String gibt `string.charAt(0)` einen leeren String zurück.

  // if (string.length === 0) {
  //   return string;
  // }

  const firstChar = string.charAt(0).toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  
  return firstChar + restOfString;
}

function capitalise2(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function capitalise3(string) {
  // Test ist notwendig, da ansonsten bei einem leeren String `string[0]` -> undefined ist & unser Programm abstürzt
  if (string.length === 0) {
    return string;
  }

  const firstChar = string[0].toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  
  return firstChar + restOfString;
}


console.log(capitalise("hello")); // Hello
console.log(capitalise("wE pUt tHe FUN in fUnCtIOns")); // We put the fun in functions
console.log(capitalise("BERLIN")); // Berlin

// Sonderfall leerer String
console.log(capitalise("")); // ""



///////////////////////
// Erklärung, wann ist ein Test zum leeren String notwendig

function capitalize1(string) {
  const firstChar = string.charAt(0).toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  
  return firstChar + restOfString;
}

function capitalize2(string) {
  // Damit der TypeError nicht aufkommt, sollten wir einen Test zum leeren String einbauen:
  if (string === "") return "";

  const firstChar = string[0].toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  
  return firstChar + restOfString;
}

console.log(capitalize1(""));
console.log(capitalize2("")); // TypeError: Cannot read properties of undefined (reading 'toUpperCase')

// Woran liegt der Error?
// ""[0] => undefined
// undefined.toUpperCase() => TypeError

// "".charAt(0) => ""
// "".toUpperCase() => ""



// Funktion weiter verbessern:
// => Die Funktion soll auch mit Zahlen funktionieren

function capitalizeFlex(string) {
  // Falls die Eingabe kein String ist, dann soll die Eingabe zum String konvertiert werden:
  if (typeof string !== 'string') {
    string = String(string);
  }

  const firstChar = string.charAt(0).toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  
  return firstChar + restOfString;
}

console.log(capitalizeFlex(0)); // 0
console.log(capitalizeFlex(110)); // 110
console.log(capitalizeFlex(true)); // True
console.log(capitalizeFlex(false)); // False