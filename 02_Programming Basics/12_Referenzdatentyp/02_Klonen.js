///////////////////////////////////////
// Klonen (von Objekten & Arrays)
///////////////////////////////////////

// Um die Probleme mit Referenzdatentypen zu umgehen, müssen wir Klone bzw. Kopien erstellen.

// Zwei Arten von Klonen:
// 1. "Flache Klone" (Shallow Clone)
// Nur die oberste Ebene eines Objektes/Arrays wird geklont, alle Eigenschaften/Elemente, die tiefer verschachtelt sind, werden als Referenz kopiert.

// 2. "Tiefer Klon" (Deep Clone)
// Das gesamte Objekt/Array wird mit allen verschachtelten Objekten bzw. Arrays geklont.



//////////////////////////////////
// "Flacher Klon" (Shallow Clone)
//////////////////////////////////

// Wir haben eine Reihe an Möglichkeiten, um "flache Klone" zu erstellen.

//////////////////
// Objekte klonen

const fruit = {
  name: 'Apple',
  amount: 18
}

// Option 1: Spread-Syntax
// => Kopien von Arrays & Objekten mit Hilfe der Spread-Syntax erstellen
const fruitCopy = { ...fruit };
console.log(fruitCopy); // { name: 'Apple', amount: 18 }

fruitCopy.name = 'Banana';

console.log(fruit); // { name: 'Apple', amount: 18 }
console.log(fruitCopy); // { name: 'Banana', amount: 18 }
// => Klonen hat funktoiniert. Die Objekte sind unabhängig voneinander.


// Option 2: For-Loop
// => Kopie mit Hilfe eines For-Loops generieren
const fruitCopy02 = {};

for (const key in fruit) {
  fruitCopy02[key] = fruit[key];
}

console.log(fruitCopy02); // { name: 'Apple', amount: 18 }

fruitCopy02.name = 'Banana';

console.log(fruit); // { name: 'Apple', amount: 18 }
console.log(fruitCopy02); // { name: 'Banana', amount: 18 }


// Option 3: Object.assign-Methode
// Die Object.assign-Methode kombiniert zwei Objekte miteinander.
// Zur Kopie kombinieren wir ein leeres Objekt mit dem zu kopierenden Objekt.
const fruitCopy03 = Object.assign({}, fruit);
console.log(fruitCopy03); // { name: 'Apple', amount: 18 }



///////////////////
// Arrays klonen

const array = ['a', 'b', 'c'];

// Option 1: Spread-Syntax
const arrayCopy = [ ...array ];
console.log(arrayCopy); // [ 'a', 'b', 'c' ]

// Der Klon ist unabhängig vom Original
arrayCopy[0] = 'z';
console.log(arrayCopy); // [ 'z', 'b', 'c' ]
console.log(array); // [ 'a', 'b', 'c' ]


// Option 2: slice-Methode
// const arrayCopy02 = array.slice(0, array.length);
const arrayCopy02 = array.slice();
console.log(arrayCopy02); // [ 'a', 'b', 'c' ]

arrayCopy02[0] = 'z';
console.log(arrayCopy02); // [ 'z', 'b', 'c' ]
console.log(array); // [ 'a', 'b', 'c' ]


// Option 3: For-Loop
const arrayCopy03 = [];

for (const item of array) {
  arrayCopy03.push(item);
}

console.log(arrayCopy03); // [ 'a', 'b', 'c' ]


// Option 4: Object.assign-Methode
const arrayCopy04 = Object.assign([], array);
console.log(arrayCopy04);;


// Option 5: Concat-Methode
// Mit der Concat-Methode werden zwei Arrays miteinander kombiniert.
// Wir kombinieren einfach einen leeren Array mit unserem zu kopierenden Array.
const arrayCopy05 = [].concat(array);
console.log(arrayCopy05); // // [ 'a', 'b', 'c' ]




//////////////////////////////////////
// Limitierungen von "Flachen Klonen"
//////////////////////////////////////

// Bei "Flachen Klonen" wird nur die oberste Ebene eines Objektes geklont, alle Eigenschaften, die tiefer verschachtelt sind, werden als Referenz kopiert.
// D.h. Wenn wir Klone von verschachtelten Arrays oder verschachtelten Objekten erstellen wollen, dann reicht ein "Flacher Klon" nicht aus.
// Dafür brauchen wir alternative Methoden ("Tiefe Klone").

// Beispiel: Probleme des flachen Klonens mit einem verschachtelten Objekt
const user = {
  firstName: "Joe",
  lastName: "Doe",
  age: 30,
  address: {
    street: {
      name: "Hauptstrasse",
      number: 48
    },
    zipCode: "12345",
    city: "Berlin",
    country: "Deutschland"
  }
};

const userCopy = { ...user };

// Die oberste Ebene wurde tatsächlich geklont:
userCopy.firstName = 'Rick';

console.log(user.firstName); // 'Joe'
console.log(userCopy.firstName); // 'Rick'


// Aber alle verschachtelten Objekte & Arrays werden wirder nur als Referenz übergeben: 
userCopy.address.city = 'Potsdam';

console.log(user.address.city); // 'Potsdam'
console.log(userCopy.address.city); // 'Potsdam'


// Dasselbe Problem gilt auch für verschachtelte Arrays:
// Beispiel: Objekte in Arrays
const phones = [
  {
    brand: "Apple",
    device: "iPhone 15",
  },
  {
    brand: "Samsung",
    device: "Galaxy Note"
  },
];

// 'Flachen Klon' erstellen
const phonesCopy = [ ...phones ];

// Aber alle verschachtelten Objekte & Arrays werden wieder nur als Referenz übergeben: 
phonesCopy[0].brand = 'LG';

console.log(phones[0].brand); // 'LG'
console.log(phonesCopy[0].brand); // 'LG'




/////////////////////////////////////////
// "Tiefer Klon" (Deep Clone)
/////////////////////////////////////////

// Immer wenn Objekte oder Arrays verschachtelt sind, brauchen wir einen Deep Clone, um einen vollständig eigenständigen Klon zu erstellen:

// Dazu gehören:
// 1. Mehrdimensionale Arrays
// 2. Arrays mit Objekten
// 3. Objekte mit Objekten
// 4. Objekte mit Arrays

// Wie erstellen wir einen Deep Clone?


///////////////////////
// Option 1: JSON-Klon

// JSON.parse(JSON.stringify(object))
// => JS-Objekt zu einem JSON-String und wieder zurück konvertieren

// JSON.stringify => Konvertiert Objekt zum JSON-String
// JSON.parse => Konvertiert JSON-String zum Objekt

// Indem wir ein JS-Objekt zu JSON-String und dann wieder zurück konvertieren, erstellen wir einen vollständigen Klon dieses Objektes.

// Nachteil:
// - Javascript-eigene Datentypen können nicht konvertiert werden (z.B. undefined, Infinity, Date())
// - Methoden können nicht geklont werden (dafür haben wir Klassen)

let multiArray = [ [4], [5], [6] ];

let multiArrayClone = JSON.parse(JSON.stringify(multiArray));

multiArrayClone[0][0] = 'Goodbye';

// Der Original-Array bleibt unverändert:
console.log(multiArray); // [ [ 4 ], [ 5 ], [ 6 ] ]
console.log(multiArrayClone); // [ [ 'Goodbye' ], [ 5 ], [ 6 ] ]


// Mehr zu den JSON-Methoden:

// Was ist JSON?
// => JSON ist ein Datenformat, in dem JS-Objekte in einem String repräsentiert werden können.
// JSON wird genutzt, wenn wir Daten an einen Server senden oder von einem Server empfangen.

const person = {
  firstName: 'Hans',
  lastName: 'Meier'
};

// Konvertierung von Objekt zu JSON-String
const json = JSON.stringify(person);
console.log(json); // '{"firstName":"Hans","lastName":"Meier"}'
console.log(typeof json); // 'string'

// Konvertierung von JSON-String zu Objekt
const myJson = '{"firstName":"Hans","lastName":"Meier"}';
const object = JSON.parse(myJson);
console.log(object); // { firstName: 'Hans', lastName: 'Meier' }
console.log(typeof object); // 'object'



/////////////////////////////
// Option 2: structuredClone()

// structuredClone(object)
// => Erstellte einen "Tiefen Klon" eines Objektes

// Vorteil:
// - Javascript-eigene Datentypen werden unterstützt

// Nachteil:
// - Methoden können nicht geklont werden (dafür haben wir Klassen)

multiArray = [ [7], [8], [9] ];

// Tiefen Klon erstellen
multiArrayClone = structuredClone(multiArray);
console.log(multiArrayClone); // [ [ 7 ], [ 8 ], [ 9 ] ]

// Der Original-Array bleibt unverändert
multiArrayClone[0][0] = 'Welcome';
console.log(multiArray); // [ [ 7 ], [ 8 ], [ 9 ] ]
console.log(multiArrayClone); // [ [ 'Welcome' ], [ 8 ], [ 9 ] ]


// Das funktioniert auch für verschachtelte Objekte:
const human = {
  firstName: "Joe",
  lastName: "Doe",
  age: 30,
  address: {
    street: {
      name: "Hauptstrasse",
      number: 48
    },
    zipCode: "12345",
    city: "Berlin",
    country: "Deutschland"
  }
};

const humanCopy = structuredClone(human);

humanCopy.address.city = 'Potsdam';

console.log(human.address.city); // 'Berlin'
console.log(humanCopy.address.city); // 'Potsdam'
// => Das Original-Objekt bleibt unverändert