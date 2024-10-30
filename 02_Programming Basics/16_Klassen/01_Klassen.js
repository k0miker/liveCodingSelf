////////////////////////////////
// Klassen
////////////////////////////////

// Eine Klasse ist ein Bauplan (Template) für ein Objekt.
// Basierend auf der Klasse können wir dann so viele Objekte wir wir wollen erstellen.
// Diese Objekte sind `Instanzen` der Klasse.

// Klassen lösen einige Probleme, die wir mit Objekten hatten:
// 1. Wir können keine Klone von Objekten mit Methoden erstellen.
// 2. Das Klonen von verschachtelten Objekten war problematisch.

// Beispiel Online-Shop: Unser Online-Shop hat eine Reihe an Produkten
// Product
//  => name => Name des Produktes
//  => price => Preise des Produktes
//  => isAvailable => Verkaufsstatus

// Wie würden wir das ohne Klassen organisieren?
// Ohne Klassen würden wir eine Liste an Objekten erstellen & müssen diese dann managen:

const butterProduct = { name: "Butter", price: 2.1, isAvailable: true };
const soapProduct = { name: "Seife", price: 1.20, isAvailable: true };
const appleProduct = { name: "Apfel", price: 1.1, isAvailable: true };
// ...

// Probleme:
// * Ich habe eine Liste an Objekten, die ich organisieren muss.
// * Ich kann keine Klone erstellen, wenn Methoden hinzugefügt sind.
// * Ich muss sicherstellen, dass alle Objekte einen `name` und `price` haben.
// => Viel Arbeit & Unsicherheit beim Management dieser Objekte

// Lösung: Nutzung von Klassen

// WICHTIG: Klassen IMMER Groß schreiben!!!
// d.h. => 'Product', 'Math', 'String', 'Array', 'Boolean'

//////////////////////////////////////////
// 01. Definition einer Klasse (ohne constructor)

class DemoProduct {
  // Öffentliche Eigenschaften
  name = 'Produktname';
  price = 2;
  isAvailable = true;

  // Öffentliche Methoden
  printInfo() {
    console.log(`Name: ${this.name}, Preis: ${this.price}`);
  }
}

// Mit dem `new`-Schlüsselwort erstellen wir Instanzen der Klasse:
const product1 = new DemoProduct();
const product2 = new DemoProduct();

console.log(product1); //  { name: 'Produktname', price: 2, isAvailable: true }
console.log(product2); // { name: 'Produktname', price: 2, isAvailable: true }

console.log(`name: ${product1.name}, price: ${product1.price}, isAvailable: ${product1.isAvailable}`);
// name: Produktname, price: 2, isAvailable: true


// Beide Produkte sind voneinander unabhängig
product2.name = 'Neuer Produktname';

console.log(product1.name); // 'Produktname'
console.log(product2.name); // 'Neuer Produktname'

product1.printInfo(); // Name: Produktname, Preis: 2
product2.printInfo(); // Name: Neuer Produktname, Preis: 2


// Mit dem `instanceof`-Schlüsselwort können wir testen, ob ein Objekt eine Istanz einer Klasse ist:
console.log(product1 instanceof DemoProduct); // true
console.log(product2 instanceof DemoProduct); // true

// Vom Datentyp handelt es sich Objekte
console.log(typeof product1); // 'object'
console.log(typeof product2); // 'object'




//////////////////////////////////////////
// 02. Definition einer Klasse (mit constructor)

// Der `constructor` ist eine Funktion, die ausgeführt wird, wenn eine Instanz der Klasse generiert wird.
// Der `constructor`-Funktion können wir Daten übergeben, die zur Einrichtung des Objektes genutzt werden.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  isAvailable = true;

  discountPrice(discount) {
    this.price -= discount;
  }
}

const butter = new Product('Butter', 2.40);
console.log(butter); // { isAvailable: true, name: 'Butter', price: 2.4 }

const soap = new Product('Seife', 1.20);
console.log(soap); // { isAvailable: true, name: 'Seife', price: 1.2 }

const apple = new Product('Apfel', 0.80);
console.log(apple); // { isAvailable: true, name: 'Apfel', price: 0.8 }


butter.discountPrice(1.20);
console.log(butter.price); // 1.20

soap.discountPrice(0.20);
console.log(soap.price); // 1.00




//////////////////////////////////////////
// 03. Nachträgliches Hinzufügen von Eigenschaften & Methoden zu einer Klasse

// Mit Hilfe des `prototype`-Objektes können wir Eigenschaften & Methoden nachträglich hinzufügen.
// Alle Eigenschaften & Methoden einer Klasse sind in dessen `prototype`-Objekt gespeichert.

// console.log(Product.prototype);

// Nachträglich Eigenschaft zu allen Instanzen hinzufügen:
Product.prototype.shop = 'Aldi';

console.log(butter.shop); // 'Aldi'
console.log(soap.shop); // 'Aldi'
console.log(apple.shop); // 'Aldi'


// Nachträglich Eigenschaft zu einer Instanz hinzufügen:
apple.isLecker = true;

console.log(apple.isLecker); // true
console.log(soap.isLecker); // undefined


// Nachträglich Methode zu allen Instanzen hinzufügen:
// Wichtig: Funktionsausdruck verwenden, damit `this` funktioniert!!!
Product.prototype.doublePrice = function() {
  this.price *= 2;
}

butter.doublePrice();
console.log(butter.price); // 2.40

soap.doublePrice();
console.log(soap.price); // 2


// Nachträglich Methode zu einer Instanz hinzufügen:
apple.printInfo = function() {
  console.log(`Das Produkt ist ein ${this.name}`);
}

apple.printInfo(); // Das Produkt ist ein Apfel

// butter.printInfo(); // TypeError