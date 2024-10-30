/////////////////////////
// Der Rest-Parameter
////////////////////////

// Manchmal möchte man eine Funktion definieren, die eine flexible Anzahl an Argumenten verarbeiten kann.
// Dazu nutzt man dann den Rest-Parameter.

// Wo haben wir schonmal mit Funktionen gearbeitet, die eine flexible Anzahl an Argumenten entgegen nehmen?

// Beispiel: Splice-Methode kann so viele Werte entgegen nehmen, wie wir wollen
// Array.prototype.splice(start, deleteCount, ...items)
const array = ['a', 'b', 'c']
array.splice(1, 0, 'e', 'f', 'g');
console.log(array);

// Beispiel: Push-Methode kann so viele Werte entgegen nehmen, wie wir wollen
// Array.prototype.push(...items)
const array2 = [];
array2.push('a', 'b', 'c', 'd');
console.log(array2);

// Beispiel: Math.max
// => Findet den Maximalwert aus einer Liste an Werten
// Math.max(...values)
let result = Math.max(1, 2, 3);
console.log(result); // 3

result = Math.max(1, 4);
console.log(result); // 4

result = Math.max(1, 4, 5, 67, 87, 2);
console.log(result); // 87



// All diese Funktionen nutzen einen Rest-Parameter.
// Der Rest-Parameter ermöglicht es einer Funktion, eine variable Anzahl von Argumenten als Array zu sammeln.

function sum(...numbers) {
  // `numbers` ist ein Array:
  console.log(numbers); // [1, 2, 3]

  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total; // 6
}

let summe = sum(1, 2, 3);
console.log(summe); // 6

summe = sum(4, 5, 6, 8, 10);
console.log(summe); // 33



// Wenn wir mehrere Parameter haben, dann muss der Rest-Parameter immer der letzte Parameter sein.
// Eine Funktion kann immer nur einen Rest-Parameter enthalten.

function join(character, ...words) {
  let string = '';
  for (const word of words) {
    string += `${character}${word}`;
  }
  return string;
}

const string = join('-', 'apple', 'banana', 'cherry');
console.log(string); // -apple-banana-cherry


