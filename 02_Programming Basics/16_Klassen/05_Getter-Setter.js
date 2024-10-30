///////////////////////////////
// Get & Set:
// Das Setzen & Auslesen von Eigenschaften in Klassen kontrollieren
///////////////////////////////

// Get-Operation:
// => Wenn eine Eigenschaft/Variable ausgelesen wird

let x = 5;
console.log(x); // Hier findet eine Get-Operation statt (der Wert von x wird ausgelesen)


// Set-Operation: 
// => Wenn eine Eigenschaft/Variable gesetzt wird

x = 10; // Hier findet eine Set-Operation statt (der Wert von x wird gesetzt)


// Mit Hilfe von get() & set() können wir das Auslesen & Setzen von Eigenschaften kontrollieren, limitieren & korrigieren.
// Typische Anwendungsfälle:
// * Eine Eigenschaft soll nur ausgelesen, aber nicht gesetzt werden können
// * Der Wertebereich einer Eigenschaft soll limitiert sein (z.B. nur bestimmte Datentypen oder Wert erlauben)


// Beispiel: Counter-Klasse, deren `count` nicht gesetzt werden darf, aber ausgelesen werden soll:

class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  // Wenn `count` ausgelesen wird, dann wird diese Funktion hier ausgeführt (Get-Operation):
  get count() {
    return this.#count;
  }

  // Wenn `count` gesetzt wird, dann wird diese Funktion ausgeführt. Der Parameter `value` ist der neue Wert von `count` (Set-Operation):
  set count(value) {
    // Wir können hier selbst definieren, ob der neue Wert gespeichert werden soll, oder nicht:
    // Beispiel: `count` soll nur gesetzt werden, wenn es sich um eine `number` handelt & diese größer als null ist:
    if (typeof value === 'number' && value > 0) {
      this.#count = value;
    }
  }
}

const counter = new Counter();
counter.increment();

// Den Wert kann ich abrufen (Get-Operation möglich):
console.log(`Counter: ${counter.count}`); // Counter: 1

// Das Setzen des Wertes funktioniert nur, wenn der Wert eine Zahl ist & größer als null ist:

// Setzen zum String funktioniert nicht:
counter.count = "String";
console.log(`Counter: ${counter.count}`); // Counter: 1

// Setzen zur negativen Zahl funktioniert nicht:
counter.count = -2;
console.log(`Counter: ${counter.count}`); // Counter: 1

// Setzen zur positiven Zahl funktioniert:
counter.count = 10;
console.log(`Counter: ${counter.count}`); // Counter: 10

