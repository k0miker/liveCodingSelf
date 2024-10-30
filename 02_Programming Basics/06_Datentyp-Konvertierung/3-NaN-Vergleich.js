///////////////////////////
// NaN-Vergleich
//////////////////////////

// NaN lässt sich nicht vergleichen.
// Ein Vergleich mit NaN ist immer `false`
NaN === NaN; // false
NaN == NaN; // false


// Wie testen wir nun aber, ob ein Wert NaN ist?
// Dafür gibt es Helferfunktionen:

// Number.isNaN(value)
// => Boolean als Ergebnis (`true`, wenn value `NaN`; ansonsten `false`)
Number.isNaN(NaN); // true
Number.isNaN(4); // false
Number.isNaN("4"); // false
Number.isNaN("hallo"); // false

let string = "4";
let number = Number(string);

if (Number.isNaN(number)) {
  console.log('number ist NaN. Der String war keine valide Zahl.')
} else {
  console.log('number ist nicht NaN. Der String war eine valide Zahl');
}


// isNaN(value)
// => Boolean als Ergebnis
// (Der übergebene value wird vor(!) dem Vergleich automatisch zur Number konvertiert)

// `isNaN(value)` ist dasselbe wie `Number.isNaN(Number(value));`

isNaN(NaN); // true
isNaN(4); // false
isNaN("4"); // false
isNaN("hallo"); // true

Number.isNaN(Number("hallo")); // true


// Praktisches Beispiel: Testen, ob ein String eine valide Zahl enthält:
string = "100"

if (!isNaN(string)) {
  console.log('Der String enthält eine valide Zahl.');
}