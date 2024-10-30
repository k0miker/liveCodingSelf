//////////////////////////
// this Schlüsselwort
/////////////////////////

// Mit Hilfe von `this` können wir von innerhalb einer Objekt-Methode auf die anderen Objekt-Methoden & -Eigenschaften zugreifen.
// `this` referenziert das Objekt, welches die Methode aufruft.

// Beispiel:
// book.printInfo()
// => Innerhalb von printInfo() referenziert `this` das Objekt `book`.

const book = {
  title: "Kurze Antworten auf große Fragen",
  author: "Stephen Hawking",
  price: 9.99,
  pages: 250,
  releaseYear: 2018,
  description:
    "SPIEGEL BESTSELLER Stephen Hawkings Vermächtnis In seinem letzten Buch gibt Stephen Hawking Antworten auf die drängendsten Fragen unserer Zeit und nimmt uns mit auf eine persönliche Reise durch das Universum seiner Weltanschauung.",

  // Objekt-Methoden
  printInfo() {
    console.log(
      `Titel: ${this.title}, Preis: ${this.price}, Autor: ${this.author}`
    );
  },

  discount(percentage) {
    const newPrice = this.price * percentage;
    this.price = newPrice.toFixed(2); // Rundet auf zwei Nachkommastellen
  },

  getThis() {
    console.log(this);
  },
};

book.printInfo(); // 'Titel: Kurze Antworten auf große Fragen, Preis: 9.99, Autor: Stephen Hawking'

book.discount(0.5);
console.log(book.price); // 5.00

book.getThis();
// this ist nichts Anderes als das `book`-Objekt in diesem Fall:
/*
{
  title: 'Kurze Antworten auf große Fragen',
  author: 'Stephen Hawking',
  price: '5.00',
  pages: 250,
  releaseYear: 2018,
  description: 'SPIEGEL BESTSELLER Stephen Hawkings Vermächtnis In seinem letzten Buch gibt Stephen Hawking Antworten auf die drängendsten Fragen unserer Zeit und nimmt uns mit auf eine persönliche Reise durch das Universum seiner Weltanschauung.',
  printInfo: [Function: printInfo],
  discount: [Function: discount],
  getThis: [Function: getThis]
}
*/

// Durch die Nutzung von `this` kônnen wir Methoden ganz einfach für verschiedene Objekte wiederverwenden:

const user1 = {
  firstName: "Hans",
  lastName: "Meier",
};

const user2 = {
  firstName: "Micha",
  lastName: "Müller",
};

const printInfo = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

user1.info = printInfo;
user2.info = printInfo;

user1.info(); // 'Hans Meier'
user2.info(); // 'Micha Müller'

// Besonderheit der Pfeilfunktion im Vergleich zum Funktionsausdruck

/// Bei einem Funktionsausdruck referenziert das `this` das Objekt (bzw. den Kontext) von dem die Funktion ausgeführt wurde.
// Bei der Pfeilfunktion referenziert das `this` nicht das Objekt (bzw. den Kontext) von dem die Funktion ausgeführt wurde, sondern bezieht sich auf den Kontext darüber.

// Nachteil:
// => Pfeilfunktionen eignen sich nicht als Objekt-Methoden, da `this` nicht wie erwartet funktioniert.

// Vorteil:
// => Pfeilfunktionen eignen sich als verschachtelte Methoden (als Funktion innerhalb einer Funktion), da von hier aus dann `this` das äußere Objekt referenziert

const user = {
  firstName: "Hans",
  lastName: "Meier",

  // `this` referenziert innerhalb der Pfeilfunktion nicht das Objekt `user`:
  fullName: () => {
    console.log(`${this.firstName} ${this.lastName}`);
  },

  // Wenn die Pfeilfunktion innerhalb einer Methode verschachtelt ist, dann referenziert das `this` wieder das `user`-Objekt.
  fullName2() {
    const getFirstName = () => this.firstName;
    const getLastName = () => this.lastName;

    console.log(`${getFirstName()} ${getLastName()}`);
  },
};

user.fullName(); // 'undefined undefined'

user.fullName2(); // 'Hans Meier'
