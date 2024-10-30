////////////////////////////////////
// Die Map-Methode
////////////////////////////////////

// Array.prototype.map(mapFunction)

// Die Map-Methode iteriert durch die Werte des Arrays und wendet die übergebene mapFunction an.
// Die Map-Methode gibt den überarbeiteten Array als Ergebnis zurück.
// Der Original-Array bleibt unverändert.

// Anforderungen an die mapFunction:
// * Ein Parameter
// * Ein return-Wert

const numbers = [ 1, 2, 3 ];

const double = x => x * 2;

let doubledNumbers = numbers.map(double);
console.log(doubledNumbers); // [ 2, 4, 6 ]


// Der Original-Array bleibt unverändert.
console.log(numbers); // [ 1, 2, 3 ]


// Wie die `mapFunction` übergeben wird ist uns überlassen.
// Wir können eine benannte oder eine anonyme Funktion nutzen.

// Anonyme Funktion:
doubledNumbers = numbers.map(x => x * 2);
console.log(doubledNumbers); // [ 2, 4, 6 ]


// Beispiel: String-Verarbeitung
let sports = ["basketball", "baseball", "volleyball"];

const firstLetterUpperCase = function(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const formattedSports = sports.map(firstLetterUpperCase);
console.log(formattedSports); // [ 'Basketball', 'Baseball', 'Volleyball' ]
