/////////////////////////////////
// While-Loop
////////////////////////////////

// Der While-Loop ist eine weitere Form der Schleife in Javascript & eine Alternative zum For-Loop.

// Während wir beim for-Loop die Anzahl der Iterationen definieren, geben wir beim While-Loop nur eine Kondition an & der Loop wird einfach solange ausgeführt bis die Kondition nicht mehr `true` ist.

// Einen While-Loop können wir immer dann nutzen, wenn wir nicht wissen wie of der Loop eigentlich iterieren soll.

// Syntax:
// while (kondition) {
//    ...  
// }

// Solange die Kondition `true` ist, wird der Code-Block ausgeführt

// Beispiel 1:
let number = 0;

while (number < 5) {
  console.log(number);
  number++;
}

/* 
0
1
2
3
4
*/


// Beim While-Loop müssen wir aufpassen, dass wir keine Endlosschleife generieren.
// Das führt dazu, dass sich unser Skript/unsere Webseite aufhängt und potentiell abstürzt:
// let zahl = 0;
// while (zahl < 5) {
//   console.log(zahl);
// }


// Beispiel 2: 
// Solange Elemente aus dem Array entfernen, bis der Array nur noch aus zwei Elementen besteht
const fruits = ["apple", "cherry", "strawberry", "orange"];
const removedElements = [];

while (fruits.length > 2) {
  const removedElement = fruits.pop();
  removedElements.push(removedElement);
}

console.log(removedElements); // [ 'orange', 'strawberry' ]
console.log(fruits); // [ 'apple', 'cherry' ]


// Beispiel 3: readline-sync
// Nutzer muss eine zufällige Zahl zwischen 0-5 eraten & die Anzahl der Versuche wird ausgegeben

import readlineSync from 'readline-sync';

const randomNumber = Math.floor(Math.random() * 6); // 0, 1, 2, 3, 4, 5
let guessedNumber;
let attempts = 0;

while (randomNumber !== guessedNumber) {
  const input = readlineSync.question('Auf welche Zahl tippst du? ');
  attempts++;
  guessedNumber = Number(input);
}

console.log(`Glückwunsch. Die erratene Zahl war ${randomNumber} & du hast ${attempts} Versuche gebraucht`);



// While-Loop Kontrolle
// * break -> Bricht den gesamten Loop ab
// * continue -> Macht in der nächsten Iteration weiter

let zahl = 0;

while (zahl < 8) {
  zahl += 1;

  if (zahl === 3) {
    // Wenn die Zahl 3 ist, dann wird die console.log übersprungen:
    continue;
  } else if (zahl === 6) {
    break;
  }

  console.log(`Die Zahl: ${zahl}`);
}
/*
Die Zahl: 1
Die Zahl: 2
Die Zahl: 4
Die Zahl: 5
*/
