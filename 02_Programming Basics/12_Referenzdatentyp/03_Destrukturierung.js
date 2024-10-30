////////////////////////
// Destrukturierung
////////////////////////

// Mit Hilfe von Destrukturierung können wir Werte aus Arrays und Objekten ganz einfach in neuen Variablen speichern.

///////////////////////////////
// Destrukturierung von Arrays
///////////////////////////////

let names = ["John", "Smith", "Rick"];

// Wir können wir Werte des Arrays in neuen Variablen speichern?

const firstName = names[0]; // 'John'
const lastName = names[1]; // 'Smith'

// Mit Destrukturierung können wir das so schreiben:
const [firstName2, lastName2, rick] = names;

console.log(firstName2); // 'John'
console.log(lastName2); // 'Smith'
console.log(rick); // 'Rick'

// Beim Array wird von links nach rechts durchgezählt.
// Um Elemente an fortgeschrittenen Array-Positionen zu extrahieren, müssen wir Leerstellen definieren:
const [john] = names;
console.log(john); // 'John'

const [, smith] = names;
console.log(smith); // 'Smith'

// Wenn ich nur den dritten Wert speichern möchte, muss ich die ersten beiden Stellen leer lassen:
const [, , rick2] = names;
console.log(rick2); // 'Rick'

// Mit der Spread-Syntax können wir alle restlichen Werte des Arrays in einem eigenen Array speichern:
// (Die Spread-Syntax muss das letzte Element der Destrukturierung sein)
names = ["John", "Smith", "Rick", "Morty", "Alan"];
const [firstValue, secondValue, ...otherValues] = names;

console.log(firstValue); // 'John'
console.log(secondValue); // 'Smith'
console.log(otherValues); // [ 'Rick', 'Morty', 'Alan' ]

/////////////////////////////////////////
// Verschachtelte Arrays destrukturieren

const productInfos = [
  ["material", "cotton"],
  ["price", 19.99],
  ["type", "t=shirt"],
];

const [, [, price]] = productInfos;
console.log(price); // 19.99

const [[, cotton]] = productInfos;
console.log(cotton); // 'cotton'

const [, , [type]] = productInfos;
console.log(type); // 'type'

const [[, cotton2], [, price2], [type2]] = productInfos;
console.log(price2, cotton2, type2); // '19.99 cotton type'

/////////////////////////////////
// Destrukturierung von Objekten
/////////////////////////////////

let customer = {
  name: "John Doe",
  address: {
    street: "Hauptstrasse",
    number: 18,
  },
  deliveryType: "express",
};

///////////////////////
// Schreibweise 1:
// Variablen heißen genauso wie die Objekt-Eigenschaften:
const { name, address, deliveryType, notExisting } = customer;

console.log(name); // 'John Doe'
console.log(address); // { street: 'Hauptstrasse', number: 18 }
console.log(deliveryType); // 'express'

// Wenn eine Eigenschaft nicht existiert, dann ist sie `undefined`:
console.log(notExisting); // undefined

// Auf verschachtelte Eigenschaften zugreifen:
// Option 1: Verschachtelung innerhalb der Destrukturierung
const {address: { street, number }} = customer;
console.log(street); // 'Hauptstraße'
console.log(number); // 18

// Option 2: Verschachteltes Objekt übergeben (vereinfach die Destrukturierung)
const customer2 = {
  name: "John Doe",
  address: {
    street2: "Hauptstrasse",
    number2: 18,
  },
  deliveryType: "express",
};
const { street2, number2 } = customer2.address;
console.log(street2); // 'Hauptstraße'
console.log(number2); // 18

///////////////////////////
// Schreibweise 2:
// Variablen-Namen heißen anders als die Objekt-Eigenschaften

const { address: newAddress, deliveryType: newDeliverType } = customer;

console.log(newAddress); // { street: 'Hauptstrasse', number: 18 }
console.log(newDeliverType); // express

const {
  address: { street: newStreet, number: newNumber },
} = customer;
console.log(newStreet); // Hauptstrasse
console.log(newNumber); // 18

// Diese beiden Statements sind dasselbe
// const newAddress = customer.address;
// const { address: newAddress } = customer;

/////////////////////////////////////////
// Default-Werte für Variablen definieren
/////////////////////////////////////////
// Da die Eigenschaft `payment` nicht existiert, wird sie zum Default-Wert gesetzt:

const { payment = "Rechnung" } = customer;
console.log(payment); // 'Rechnung'

const { payment: newPayment = "Rechnung" } = customer;
console.log(newPayment); // 'Rechnung'

const [value = "Gast"] = [];
console.log(value); // 'Gast'

/////////////////////////////////////////////
// Funktions-Parameter per Destrukturierung
/////////////////////////////////////////////

// Wir können Werte aus einem Objekt oder einem Array in Argumente kopieren & dann in unserer Funktion nutzen.
// So stellen wir sicher, dass das Original-Objekt innerhalb der Funktion nicht verändert wird.

// Beispiel: Wir haben eine Funktion, die ein Produkt verarbeitet & das Original-Objekt darf nicht verändert werden.
// => Mittels Destrukturierung können wir Werte aus dem Objekt direkt in Argumente extrahieren

let shirt = {
  material: "baumwolle",
  price: 19.99,
  type: "t-shirt",
};

function processProduct(product) {
  const discount = 0.3;
  product.price *= 1 - 0.3;
  product.price = product.price.toFixed(2); // Auf zwei Nachkommastellen runden
  console.log(
    `Produkt vom Typ ${product.type} kostet reduziert ${product.price}`
  );
}

processProduct(shirt); // Produkt vom Typ t-shirt kostet reduziert 13.99

// Problem: Das Original-Objekt hat sich in diesem Fall mit verändert
console.log(shirt); // { material: 'baumwolle', price: '13.99', type: 't-shirt' }

// Lösungsstrategie:
// Mit Hilfe von Destrukturierung die Werte aus dem Object direkt extrahieren & keine Referenz zum Objekt übergeben:

shirt = {
  material: "baumwolle",
  price: 19.99,
  type: "t-shirt",
};

function processProduct2({ price, type }) {
  const discount = 0.3;
  price *= 1 - 0.3;
  price = price.toFixed(2);
  console.log(`Produkt vom Typ ${type} kostet reduziert ${price}`);
}

processProduct2(shirt);

// Super, das Original-Objekt hat sich nicht verändert:
console.log(shirt); // { material: 'baumwolle', price: 19.99, type: 't-shirt' }
