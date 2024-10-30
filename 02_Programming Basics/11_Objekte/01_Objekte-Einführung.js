////////////////////////////
// Objekte
////////////////////////////


// Was sind Objekte?
// Eure Antworten:
// * Wie ein Wörterbuch
// * Ein Ort, in dem wir mehrere Variablene bzw. Funktionen speichern können.
// * Ein Container, in dem wir alles speichern können.


// Definition

// In JavaScript sind Objekte eine grundlegende Datenstruktur, die es ermöglicht, Daten in Form von Schlüssel-Wert-Paaren zu speichern. Ein Objekt kann verschiedene Eigenschaften (Daten) und Methoden (Funktionen) enthalten, die ihm zugeordnet sind.

// Ein Objekt wird in JavaScript durch geschweifte Klammern {} definiert. Die Schlüssel in einem Objekt sind Strings und die Werte können jegliche Datentypen sein, einschließlich anderer Objekte, Arrays oder Funktionen.



// Vorteile

// * Strukturierte Datenverwaltung
//    => Objekte ermöglichen es, zusammengehörige Daten sinnvoll zu gruppieren und zu strukturieren. Anstatt separate Variablen für verschiedene Eigenschaften eines Elements zu verwenden, können diese in einem Objekt zusammengefasst werden. Das sorgt für übersichtlichen und leichter wartbaren Code.

// * Möglichkeit zur Modellierung realer Entitäten:
//    => Objekte eignen sich hervorragend, um reale Entitäten (wie z. B. Personen, Autos, Produkte) in der Programmierung abzubilden. Durch die Bündelung von Eigenschaften und Verhalten in einem Objekt kann eine klare und intuitive Darstellung dieser Entitäten geschaffen werden.

// * Wiederverwendbarkeit und Modularität:
//    => Durch die Verwendung von Objekten können Funktionen und Daten wiederverwendet und in wiederverwendbare Module oder Klassen organisiert werden. Das fördert die Wiederverwendbarkeit von Code und erleichtert die Zusammenarbeit in größeren Projekten.



// Ein leeres Objekt
const emptyObject = {};
console.log(typeof emptyObject); // 'object'


// Ein Einfaches Objekt mit Eigenschaften (Daten)
const user = {
  email: 'john@doe.com',
  password: '1234567'
}

console.log(user.email); //  'john@doe.com'
console.log(user.password); // '1234567'


// Ein Objekt kann jede Art von Datentyp enthalten (auch weitere Objekte oder Arrays)
// Ein verschachteltes Objekt:
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
}

console.log(person.firstName); // 'John'
console.log(person.lastName); // 'Doe
console.log(person.age); // 30
console.log(person.isMarried); // true


console.log(person.address.street.name); // 'Main Street'
console.log(person.address.street.number); // '86'
console.log(person.address.city); // 'Mannheim'
console.log(person['address']['city']); // 'Mannheim'

// Die Schlüssel eines Objektes sind eigentlich nichts Anderes als Strings:
const gameCharacter = {
  'name': 'Micha',
  'class': 'Magician'
}

const gameCharacter2 = {
  name: 'Micha',
  class: 'Magician'
}

console.log(gameCharacter.name); // 'Micha'
console.log(gameCharacter.class); // 'Magician'

console.log(gameCharacter2.name); // 'Micha'
console.log(gameCharacter2.class); // 'Magician'


// Die String-Definition ist nur sinnvoll, wenn wir Schlüsselnamen haben, die nicht nur aus Buchstaben bestehen:

const object = {
  'some property': 'Wert',
  'some-property': 'Wert2',

  title: 'Titel',
  someValue: 'Value',
}

// Um auf solche Schlüsselwerte zuzugreifen, müssen wir dann die Klammernotation nutzen.
// Die Klammernotation ist eine Alternative zur Punktnotation.
// Die Punktnotation ist eine Abkürzung der Klammernotation.

console.log(object['some property']); // 'Wert'
console.log(object['some-property']); // 'Wert 2'

console.log(object['title']); // 'Titel'
console.log(object.title); // 'Titel




// Was passiert wenn wir auf eine Eigenschaft zugreifen, die nicht existiert?
// => Der Wert ist undefined.

const mainCharacter = {
  title: 'Hero'
};

console.log(mainCharacter.level) // undefined


// Nachträglich eine Eigenschaft hinzufügen:
mainCharacter.level = 10;
// mainCharacter['level'] = 10;

console.log(mainCharacter); // { title: 'Hero', level: 10 }
console.log(mainCharacter.level); // 10


// Nachträglich eine Eigenschaft entfernen:
delete mainCharacter.level;
// delete mainCharacter['level'];

console.log(mainCharacter); // { title: 'Hero' }