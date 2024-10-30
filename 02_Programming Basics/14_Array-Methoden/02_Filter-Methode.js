/////////////////////////////
// Die Filter-Methode
/////////////////////////////

// Array.prototype.filter(callbackFunction)
// => Das Ergebnis ist ein neuer Array, der mit der `callbackFunction` gefiltert wurde.

// Mit der Filter-Methode können wir einen Array filtern.
// Die Filter-Methode gibt einen neuen Array zurück, der nur die Elemente enthält, für die die übergeben `callbackFunction` `true` zurück gibt.

// Anforderungen an die `callbackFunction`:
// * Einen Parameter
// * Gibt Boolean als Ergebnis zurück

const sports = ["basketball", "baseball", "volleyball", "golf", "ski"];

const beginsWithB = (string) => string[0].toLowerCase() === 'b';

const sportsWithB = sports.filter(beginsWithB);
console.log(sportsWithB); // [ 'basketball', 'baseball' ]



// Beispiel: Alle Sportarten mit mehr als 5 Buchstaben rausfiltern

const shorterThan6 = (string) => string.length <= 5;

const shorterSports = sports.filter(shorterThan6);
console.log(shorterSports); // [ 'golf', 'ski' ]


// Mit anonymer Funktion geht es auch:

const shorterSports2 = sports.filter((string) => {
  return string.length <= 5;
});

console.log(shorterSports2); // [ 'golf', 'ski' ]