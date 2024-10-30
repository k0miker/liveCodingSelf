/////////////////////
// Sort
/////////////////////

// Array.prototype.sort(comparisonFn)

// Die sort-Methode sortiert einen Array mit Hilfe der übergebenen `comparisonFn` (Vergleichsfunktion).
// Der Original-Array wird verändert.

// Die `comparisonFn` definiert die Logik für die Sortierung & funktioniert folgendermaßen:
//
// Definition: comparisonFn(a, b)
//
// Parameter:
// * a & b => Werte des Arrays, die miteinader verglichen werden
//
// Return-Wert:
// => der return-Wert ist eine Zahl, die definiert in welcher Reihenfolge a & b im sortierten Array stehen sollen
//  => Negative Zahl: `a` soll vor `b` stehen
//  => Positive Zahl: `b` soll vor `a` stehen
//  => `0`: Reihenfolge von `a` & `b` soll unverändert bleiben



// Beispiel 1: Sortierung von Zahlen

// 1a: Array mit Zahlen in aufsteigender Reihenfolge sortieren
let numbers = [10, 56, 5, 1, 109, 78];

numbers.sort((a, b) => {
  if (a > b) {
    // Dann soll `a` nach `b` sortiert sein
    // d.h. positive Zahl als Ergebnis zurück geben
    return 1;
  } else if (a < b) {
    // Dann soll 'a' vor 'b' sortiert sein
    // d.h. negative Zahl als Ergebnis zurück geben
    return -1;
  } else {
    // Wenn `a` und `b` gleich sind, dann soll nichts ändern
    return 0;
  }
});

console.log(numbers); // [ 1, 5, 10, 56, 78, 109 ]


// 1a: Kurze Version (alternative Schreibweise)
numbers = [10, 56, 5, 1, 109, 78];

numbers.sort((a, b) => a - b);
console.log(numbers); // [ 1, 5, 10, 56, 78, 109 ]



// Thema 2: String-Sortierung

// Die Sortierung von Strings lässt sich nicht ganz einfach machen & ist unterschiedlich basierend auf der genutzten Sprache.
// Deswegen gibt es eine Helfer-Funktion namens `localeCompare`, mit der sich Strings vergleichen & sortieren lassen.

// String.prototype.localeCompare(otherString, language)
// Anwendung: "a".localeCompare("b", "en") => -1
//
// // Diese Methode vergleicht zwei Strings miteinander basierend auf dem definierten Sprachsystem (Standard ist englisch) & gibt eine Zahl als Ergebnis zurück, die die Strings in aufsteigender Reihenfolge sortiert.
// Die Zahl ist entweder `1`, `-1` oder `0`.

console.log('a'.localeCompare('b', 'de')); // -1
console.log('b'.localeCompare('a', 'de')); // 1
console.log('a'.localeCompare('a', 'de')); // 0



// Beispiel 2a: Sortierung von Strings
// => Strings in aufsteigender Reihenfolge sortieren
let strings = ["dragon fruit", "apple", "cherry", "banana"];

strings.sort((a, b) => {
  // 'de' => Deutsche Sprache
  // 'en' => Englische Sprache
  // 'jp' => Japanische Sprache
  // Alle ISO-Codes: https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
  return a.localeCompare(b, 'en');
})

console.log(strings); // [ 'apple', 'banana', 'cherry', 'dragon fruit' ]


// Beispiel 2b: Sortierung Strings
// => Strings in absteigender Reihenfolge sortieren
strings = ["dragon fruit", "apple", "cherry", "banana"];

strings.sort((a, b) => {
  return b.localeCompare(a, 'en');
});
console.log(strings); // [ 'dragon fruit', 'cherry', 'banana', 'apple' ]



// Wenn wir keine `comparisonFn` übergeben, dann sortiert die `sort-Methode` standardmäßig strings in aufsteigender Reihenfolge im englischen Sprachsystem:
strings = ["dragon fruit", "apple", "cherry", "banana"];
strings.sort();
console.log(strings); // [ 'apple', 'banana', 'cherry', 'dragon fruit' ]




// Thema 3: Sortierung von Objekten
// => Studenten nach Punktzahl in aufsteigender Reihenfolge sortieren
const students = [
  { name: "Anne", sport: "football", points: 54 },
  { name: "Samanta", sport: "basketball", points: 32 },
  { name: "Raul", sport: "cricket", points: 43 },
  { name: "Basti", sport: "basketball", points: 87 },
  { name: "Anton", sport: "hockey", points: 12 },
  { name: "Omar", sport: "cricket", points: 77 },
];

students.sort((a, b) => a.points - b.points);
console.log(students);

/*
[
  { name: 'Anton', sport: 'hockey', points: 12 },
  { name: 'Samanta', sport: 'basketball', points: 32 },
  { name: 'Raul', sport: 'cricket', points: 43 },
  { name: 'Anne', sport: 'football', points: 54 },
  { name: 'Omar', sport: 'cricket', points: 77 },
  { name: 'Basti', sport: 'basketball', points: 87 }
]
*/