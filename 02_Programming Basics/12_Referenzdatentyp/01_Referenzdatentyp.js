////////////////////////////
// Referenzdatentyp
////////////////////////////

// Wir haben in JS grundsätzlich zwei verschiedene Kategorien an Datentypen.

// Kategorie 1: Primitive Datentypen
// => String, Boolean, Number, null, undefined

// Kategorie 2: Referenzdatentypen
// => Array, Object, Function


// Primitive Datentypen funktionieren so:
// Wenn ich einen primitiven Datentyp zuweise, dann wird eine Kopie übergeben.
// Die Werte von x & y sind unabhängig voneinander.
let x = 5;
let y = x;

y += 1;

console.log(`x: ${x}, y: ${y}`); // x: 5, y: 6


// Bei Referenzdatentypen ist es anders:
// Bei Referenz-Datentypen wird nur eine Referenz zum Objekt übergeben.
// Die Referenz ist die Addresse zum Speicherort des Objektes (damit darauf zugegriffen werden kann).
// D.h. in unserem Beispiel verweisen `user` & `user2` zum selben Objekt.
const user = {
  firstName: 'Hans'
};

const user2 = user; // Referenz wird ûbergeben

user2.firstName = 'Anna';

console.log(user.firstName); // 'Anna'
console.log(user2.firstName); // 'Anna'


// Dasselbe gilt auch für Arrays:
const names = ['Alan', 'Arjen'];
const names2 = names;

names2[0] = 'Markus';

console.log(names); // [ 'Markus', 'Arjen' ]
console.log(names2); // [ 'Markus', 'Arjen' ]




//////////////////////////
// Problem von Referenzdatentypen als Argumente in Funktionen:
//
// Wenn wir Referenzdatentypen als Argumente in Funktionen übergeben, kann es schnell passieren, dass wir ungewollt das Original-Array bzw -Objekt außerhalb der Funktion verändern.

// Beispiel: Wir verändern ungewollt den Original-Array:
const letters = ['a', 'b', 'c'];

function lastElementOfArray(array) {
  return array.pop();
}

const lastElement = lastElementOfArray(letters);
console.log(lastElement); // 'c'

console.log(letters); // [ 'a', 'b' ]


// Lösungstrategien:
// * Nicht-destruktive Array-Methoden nutzen (z.B. slice)
// * Eine Kopie des Arrays innerhalb der Funktion erstellen & dann mit der Kopie weiterarbeiten