////////////////////////////////
// Objekt-Iteration
////////////////////////////////

const shoppingBill = {
  bread: 1.20,
  apples: 2.40,
  cucumber: 0.99,
  butter: 2.50,
};

const user = {
  firstName: 'Hans',
  lastName: 'Meier'
}

// Wie können wir durch dieses Objekt iterieren?

/////////////////////////////////
// For-In-Loop
// => For-Loop für Objekte

// Der For-In Loop gibt uns die Schlüssel als String zur Weiterverarbeitung.

for (const key in shoppingBill) {
  // Wenn der Schlüssel als String in einer Variablen ist, dann können wir nur mit der Klammernotation auf den Wert zugreifen:
  console.log(`Schlüssel: ${key}, Wert: ${shoppingBill[key]}`);
}

// key: 'apples'
// shoppingBill['apples'] => 2.4
// shoppingBill.apples => 2.4

/*
Schlüssel: bread, Wert: 1.2
Schlüssel: apples, Wert: 2.4
Schlüssel: cucumber, Wert: 0.99
Schlüssel: butter, Wert: 2.5
*/

for (const key in user) {
  console.log(key, user[key]);
}

/*
firstName Hans
lastName Meier
*/


// Wie kann ich dann die Summe von `shoppingBill` ermitteln?
let sum = 0;
for (const key in shoppingBill) {
  sum += shoppingBill[key];
}
console.log(`Meine Einkaussumme ist ${sum} Euro`); // Meine Einkaussumme ist 7.09 Euro




//////////////////////////////////
// Objekte zu Arrays konvertieren

// Da sich Arrays perfekt zum Iterieren eignen, gibt es auch mehrere Helfer-Funktionen, mit denen wir aus Objekten Arrays machen können


//////////////////////////
// Object.keys(object)
// => Array mit allen Schlüsseln (Keys) des Objektes

const keysArray = Object.keys(shoppingBill);
console.log(keysArray); // [ 'bread', 'apples', 'cucumber', 'butter' ]

const userKeys = Object.keys(user);
console.log(userKeys); //  [ 'firstName', 'lastName' ]


///////////////////////////
// Object.values(object)
// => Array mit allen Werten des Objektes

const billValues = Object.values(shoppingBill);
console.log(billValues); // [ 1.2, 2.4, 0.99, 2.5 ]

const userValues = Object.values(user);
console.log(userValues); // [ 'Hans', 'Meier' ]


/////////////////////////////
// Object.entries(object)
// => Array mit Schlüsseln & Werten des Objektes

const billEntries = Object.entries(shoppingBill);
console.log(billEntries);
/*
[
  [ 'bread', 1.2 ],
  [ 'apples', 2.4 ],
  [ 'cucumber', 0.99 ],
  [ 'butter', 2.5 ]
]
*/
console.log(billEntries[0][0]); // 'bread'
console.log(billEntries[0][1]); // 1.2
console.log(billEntries[1][1]); // 2.4
console.log(billEntries[0]); // ['bread', 1.2]


const userEntries = Object.entries(user);
console.log(userEntries);
/*
[ [ 'firstName', 'Hans' ], [ 'lastName', 'Meier' ] ]
*/
console.log(userEntries[1][0]); // 'lastName'
console.log(userEntries[1][1]); // 'Meier'




//////////////////////////
// Verschachtelte Objekte

console.log(`/////// Verschachtelte Objekte`)

// Wie können wir durch verschachtelte Objekte iterieren?

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isMarried: true,

  address: {
    street: {
      name: 'Main Street',
      number: 86,
    },
    city: 'Mannheim',
    zip: '12345',
  }
};

for (const key in person) {
  if (typeof person[key] === 'object' && !Array.isArray(person[key]) && person[key] !== null) {
    // Wenn der Wert ein Objekt ist, dann wollen wir auch durch dieses iterieren:
    for (const key2 in person[key]) {
      console.log(key2, person[key][key2]); // person['addres']['city']
    }
  } else {
    // Wenn der Wert kein Objekt ist, dann geben wir den Wert aus:
    console.log(key, person[key]);
  }
}

/* 
firstName John
lastName Doe
age 30
isMarried true
street { name: 'Main Street', number: 86 }
city Mannheim
zip 12345
*/

// typeof {} => 'object'
// typeof [] => 'object'
// typeof null => 'object'


/////////////////////////
// Erinnerung

///////////////
// For-Of-Loop

const array = ["a", "b", "c"];
for (const letter of array) {
  console.log(letter);
}
/*
'a'
'b'
'c'
*/