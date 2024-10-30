////////////////////////
// Reduce
////////////////////////

// Array.prototype.reduce(callbackFn, startValue)

// Die reduce-Methode reduziert den Array auf einen Wert (z.B. eine Zahl, String, Array oder Objekt).
// Die übergebene `callbackFn` führt die Reduzierung durch.
// Der `startValue` ist der Wert, mit dem die Reduzierung beginnt. Damit ist es der Start-Wert des Akkumulators.

// Definition von `callbackFn`:
//
// Parameter:
// * accumulator => Das Zwischenergebnis der Operation (& das Ergebnis der callbackFn) [Startwert, Zwischenergebnis & Endergebnis]
// * element => Das Element des Arrays
//
// Return-Wert:
// * Das Ergebnis der `callbackFn` ist der Wert des Akkumulators in der nächsten Iteration


// Beispiel 1: Summe eines Arrays generieren
const numbers = [5, 10, 15, 20];

const reduceToSum = (accumulator, element) => {
  console.log(`accumulator: ${accumulator}, element: ${element}`);
  return accumulator + element;
}

const sumOfNumbers = numbers.reduce(reduceToSum, 0);
console.log(sumOfNumbers); // 50

/*
accumulator: 0, element: 5
accumulator: 5, element: 10
accumulator: 15, element: 15
accumulator: 30, element: 20
*/


// Startwert: 100
const sum2 = numbers.reduce(reduceToSum, 100);
console.log(sum2); // 150
/*
accumulator: 100, element: 5
accumulator: 105, element: 10
accumulator: 115, element: 15
accumulator: 130, element: 20
*/


// Beispiel 2: Anfangsbuchstaben aller Strings in einem String zusammenfassen
const strings = ["apple", "baseball", "dragon-fruit", "library"];

const reduceFirstLetter = (accumulator, element) => {
  console.log(`accumulator: ${accumulator}, element: ${element}`);
  return accumulator + element[0];
}

const reducedString = strings.reduce(reduceFirstLetter, "");
console.log(reducedString); // 'abdl'

/*
accumulator: , element: apple
accumulator: a, element: baseball
accumulator: ab, element: dragon-fruit
accumulator: abd, element: library
*/


// Beispiel 3: Reduzierung auf ein Objekt
// => Ziel ist es ein Objekt zu generieren, das die Anzahl der Studenten für jede einzelne Sportart auflistet:

/* Erwartetes Ergebnis:
{
  football: 1,
  basketball: 2,
  cricket: 2,
  hockey: 1
}
*/

// `startValue` => {}

const students = [
  { name: "Anne", sport: "football", points: 54 },
  { name: "Samanta", sport: "basketball", points: 32 },
  { name: "Raul", sport: "cricket", points: 43 },
  { name: "Basti", sport: "basketball", points: 87 },
  { name: "Anton", sport: "hockey", points: 12 },
  { name: "Omar", sport: "cricket", points: 77 },
];

const studentSports = students.reduce((accumulator, student) => {
  // 1. Sportart zugreifen
  const sport = student.sport;

  // 2. Wenn Sportart noch nicht Eigenschaft im Objekt ist, dann erstellen:
  if (accumulator[sport] === undefined) {
  // if (!accumulator[sport]) {
    accumulator[sport] = 0;
  }

  // 3. Zähler der Sportart um 1 erhöhen
  accumulator[sport] += 1;

  // 4. Zwischenergebnis zurück geben
  console.log(accumulator);
  return accumulator;
}, {});

console.log(studentSports);
// { football: 1, basketball: 2, cricket: 2, hockey: 1 }


/* Schritt für Schritt:
{ football: 1 }
{ football: 1, basketball: 1 }
{ football: 1, basketball: 1, cricket: 1 }
{ football: 1, basketball: 2, cricket: 1 }
{ football: 1, basketball: 2, cricket: 1, hockey: 1 }
{ football: 1, basketball: 2, cricket: 2, hockey: 1 }
{ football: 1, basketball: 2, cricket: 2, hockey: 1 }
 */


// Kurzer Test
const object = { football: 1 };
console.log(object['basketball']); // undefined