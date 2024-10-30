////////////////////////////
// Klammernotation für Objekte
////////////////////////////

// Wenn ich mit einem Objekt arbeite, gibt es grundsätzlich zwei verschiedene Wege auf Objekt-Eigenschaften und -Methoden zuzugreifen:
// Punktnotation & Klammernotation

let person = {
  firstName: "Robert",
  lastName: "Wegemeier"
}

// Punktnotation:
person.firstName; // "Robert"
person.lastName; // "Wegemeier"

// Klammernotation:
person["firstName"]; // "Robert"
person["lastName"]; // "Wegemeier"

// Grundsätzlich nutzen wir in der Regel die Punktnotation, aber die Klammernotation funktioniert immer als Alternative.

// Und es gibt einige Ausnahmen, bei denen wir nur die Klammernotation nutzen können:

// Ausnahme 1: Die Eigenschaftsnamen beinhalten Leerzeichen, Sonderzeichen oder Zahlen
// (Bitte nie selbst so die Eigenschaften benennen)

const user = {
  "first name": "Peter",
  "last$name": "Meier"
}

console.log(user["first name"]); // "Peter"
console.log(user["last$name"]); // "Meier"

// Ausnahme 2: Wenn der Name der Eigenschaft in einer Variablen gespeichert ist
person = {
  firstName: "Robert",
  lastName: "Wegemeier"
}

const key = "firstName";
console.log(person[key]); // "Robert"


// Ausnahme 3: Wir iterieren durch unser Objekt anhand der `keys`
person = {
  firstName: "Robert",
  lastName: "Wegemeier"
}

for (const key in person) {
  console.log(person[key]);
}

/*
Robert
Wegemeier
*/


for (const key of Object.keys(person)) {
  console.log(person[key]);
}

/*
Robert
Wegemeier
*/