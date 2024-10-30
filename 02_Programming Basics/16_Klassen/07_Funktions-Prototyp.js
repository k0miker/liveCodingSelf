//////////////////////////////////////////////
// Wie Klassen in JS eigentlich funktionieren
//////////////////////////////////////////////

// Klassen gibt es in JS eigentlich erst seit ein paar Jahren.
// Klassen sind kein Bestandteil der eigentlichen Sprache (im Unterschied zu anderen Sprachen wie Swift, Kotlin, C# etc.).

// In JS sind Funktionen nichts Anderes als Objekte.
// In JS gibt es prototypische Vererbung (Vererbung durch das `prototype`-Objekt).
// Mit Hilfe dieser beiden Tricks können wir die Funktionalität von Klassen & Vererbung nachbauen:

// So sieht es als Klasse aus:
class UserClass {
  constructor(name) {
    this.name = name;
  }

  city = "Berlin";

  printInfo() {
    console.log(`Name: ${this.name}, City: ${this.city}`);
  }
}

// So sieht es als Funktion aus:
// (Eine Klasse ist in JS eigentlich nichts Anderes als eine Funktion)
const User = function(name) {
  // Constructor-Eigenschaften:
  this.name = name;

  // Öffentliche Eigenschaften:
  this.city = "Berlin"; 

  // Öffentliche Methoden:
  this.printInfo = function() {
    console.log(`Name: ${this.name}, City: ${this.city}`);
  }
}

const heidi = new User("Heidi");
console.log(heidi.name); // "Heidi"

heidi.printInfo(); // Name: Heidi, City: Berlin


// Öffentliche Methoden & Eigenschaften nachträglich hinzufügen:
User.prototype.newProperty = "Property";
User.prototype.newMethod = function() {
  console.log(this.newProperty);
}

heidi.newMethod(); // "Property"


// Statische Methoden & Eigenschaften hinzufügen:
User.staticProperty = "Static Property";
User.staticMethod = function() {
  console.log(this.staticProperty);
};

User.staticMethod(); // "Static Property"