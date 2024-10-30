/////////////////////////////////////////////
// Klassen: Private Eigenschaften & Methoden
/////////////////////////////////////////////

// Bisher haben wir nur öffentliche Eigenschaften & Methoden kennengelernt.
// Es gibt aber auch die Möglichkeit private Eigenschaften & Methoden zu einer Klasse hinzuzufügen.
// Private Eigenschaften & Methoden können nur von innerhalb der Klasse aufgerufen werden, nicht von außerhalb.

// Wie definieren wir diese?
// Alle Eigenschaften & Methoden, deren Name mit einem `#` beginnt, die sind privat.

class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  printCount() {
    console.log(`Count: ${this.#count}`);
  }

  #privateMethod() {
    console.log('Private Methode ausgeführt');
  }

  publicMethod() {
    this.#privateMethod();
  }
}

const counter = new Counter();

// Auf die private Eigenschaft #count kann ich von außen nicht zugreifen:
// console.log(counter.#count); // SyntaxError

// Aber von innerhalb kann darauf zugegriffen werden:
counter.printCount(); // Count: 0


// Auf die private Methode #privateMethod kann ich von außerhalb nicht zugreifen:
// counter.#privateMethod(); // SyntaxError

// Von innerhalb der Klasse funktioniert der Zugriff aber:
counter.publicMethod(); // Private Methode ausgeführt


// Jetzt haben wir eine Counter-Klasse, deren `count` nicht manipuliert werden kann.
// Man kan nur den count mittels increment() um eins erhöhen. Mehr nicht:
counter.increment();
counter.increment();
counter.printCount(); // Count: 2