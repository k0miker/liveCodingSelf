//////////////////////////////
// Funktionen höherer Ordnung
//////////////////////////////

// Funktionen höherere Ordnung sind Funktionen, die entweder andere Funktionen als Parameter entgegen nehmen & verarbeiten oder Funktionen als Ergebnis zurück geben.

// Eine Funktionen, die als Parameter übergeben wird, ist eine sogenannte 'Callback-Funktion'.
// Eine Callback-Funktion heißt so, weil sie zu einem späteren Zeitpunkt aufgerufen wird.
// ('Callback' = 'Rückruf')

// Erster Teil: Funktionen als Parameter
// Vorteil: Wir haben die Möglichkeit deutlich flexiblere und modularere Funktionen zu definieren.


// Beispiel 1: Array-Verarbeitung (Eine selbst definierte `map`-Methode)

const sports = [ 'basketball', 'baseball', 'volleyball' ];

// Generische Funktion, die einen Array entgegennimmt und mit Hilfe einer übergebenen Funktion einen neuen Array generiert:
function processArray(array, processFunction) {
  const newArray = [];
  
  for (const value of array) {
    const newValue = processFunction(value);
    newArray.push(newValue);
  }

  return newArray;
}

// Beispiel 1a: Alle Strings groß schreiben
function toUpperCase(string) {
  return string.toUpperCase();
}

const upperCaseSports = processArray(sports, toUpperCase);
console.log(upperCaseSports); // [ 'BASKETBALL', 'BASEBALL', 'VOLLEYBALL' ]


// Beispiel 1b: Nur den ersten Buchstaben groß schreiben
function firstLetterToUpperCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const capitalizedSports = processArray(sports, firstLetterToUpperCase);
console.log(capitalizedSports); // [ 'Basketball', 'Baseball', 'Volleyball' ]



// Besipiel 1c: Zahlen multiplizieren
// Hier nutzen wir keine benannte Funktion, sondern einen anonyme Pfeilfunktion:
const numbers = [1, 2, 3];

const multipliedNumbers = processArray(numbers, (x) => x * 2);
console.log(multipliedNumbers); // [ 2, 4, 6 ]


// Das ist dasselbe mit einer benannten Funktion:
function multiply(number) {
  return number * 2;
}

const multipliedNumbers2 = processArray(numbers, multiply);
console.log(multipliedNumbers2); // [ 2, 4, 6 ]



// In der Praxis brauchen wir eine solche Methode nicht selbst definieren, 
// sondern wir nutzen dann einfach die existierende Map-Methode:
const formattedSports = sports.map(toUpperCase);
console.log(formattedSports); // [ 'BASKETBALL', 'BASEBALL', 'VOLLEYBALL' ]




// Beispiel 2: Array-Filtern
// (Eine eigene 'filter'-Methode schreiben)

// Die Idee ist, dass wir eine Funktion haben, die einen Array basierend auf einer entgegen genommenen Funktion, filtert.
// Zum Beispiel durch einen Zahlen-Array gehen und alle Zahlen, die kleiner sind als 5 herausfiltern.


const zahlen = [ 2, 3, 4, 5, 6, 7, 8 ];

function filterArray(array, filterFunction) {
  const newArray = [];
  for (const value of array) {
    if (filterFunction(value)) {
      newArray.push(value);
    }
  }
  return newArray;
}

// Beispiel 2a: Zahlen kleiner als 5 herausfiltern
function biggerThan5(number) {
  return number > 5;
}

let filteredArray = filterArray(zahlen, biggerThan5);
console.log(filteredArray); // [ 6, 7, 8 ]


// Beispiel 2b: Zahlen durch 3 teilbar
function divisibleBy3(number) {
  return number % 3 === 0;
}

filteredArray = filterArray(zahlen, divisibleBy3);
console.log(filteredArray); // [ 3, 6 ]



// In der Praxis können wir die Array-Filter-Methode nutzen:
filteredArray = zahlen.filter((zahl) => { 
  return zahl > 5;
});

console.log(filteredArray); // [ 6, 7, 8 ]


filteredArray = zahlen.filter(biggerThan5);
console.log(filteredArray); // [ 6, 7, 8 ]