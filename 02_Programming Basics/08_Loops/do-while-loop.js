///////////////////////////////////////
// Do-While-Loop
///////////////////////////////////////
// Der Do-While-Loop ist eine Alternative zum While-Loop.

// Beim normalen While-Loop wird zuerst die Kondition getestet und danach erst der Code ausgeführt.
while(false) {
  console.log('Ich werde nie ausgeführt');
}

// Beim Do-While-Loop wird zuerst der Loop ausgeführt und danach erst die Kondition getestet.
do {
  console.log('Ich werde einmal ausgeführt');
} while(false)


// Syntax:
// do {
//   ...
// } while (kondition)

// Wann ist der Do-While-Loop zu empfehlen?
// Immer wenn wir einen While-Loop, der unabhängig von der Kondition mindestens einmal ausgeführt werden soll.


// Beispiel 1: Readline-Sync
// Nutzernamen validieren. Der Nutzername darf nur aus Buchstaben bestehen

import readlineSync from 'readline-sync';

let userName;
let isValid = false;

do {
  let containsNumber = false;
  userName = readlineSync.question('Was ist dein Name? ');

  // Testen, ob der Nutzername nur aus Buchstaben besteht
  for (const letter of userName) {
    if (!isNaN(letter)) { // Wenn es sich um keinen Buchstaben handelt:
      containsNumber = true;
      break;
    }
  }

  // Der Loop wird abgebrochen, sobald wir ein Wort haben, dass nur aus Buchstaben besteht
  isValid = !containsNumber;
} while(!isValid)

console.log(`Dein Nutername ist ${userName}`);

