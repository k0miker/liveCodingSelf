//////////////////////////////////
// For-Loop-Kontrolle
//////////////////////////////////

// Es gibt besondere Statements, mit denen wir den Ablauf eines For-Loops beeinflussen können:
// * `break` -> Ausführung des For-Loops vollständig abbrechen
// * `continue` -> Aktuelle Iteration des For-Loops wird abgebrochen & macht bei der nächsten Iteration weiter


/////////////////
// break
// -> Ausführung des For-Loops vollständig abbrechen

// Beispiel 1
for (let i=0; i<10; i++) {
  if (i === 2) {
    // Sobald i den Wert 2 hat, wird der gesamte Loop abgebrochen
    break;
  }

  console.log(`i: ${i}`);
}

/*
i: 0
i: 1
*/


// Beispiel 2
// Aufgabe: Index vom Element "Orange" finden
// (Sobald wir ein Ergebnis haben, wollen wir den Loop beenden)

const fruits = ["Apfel", "Bananen", "Melone", "Orange", "Drachenfrucht", "Avocado"];
let orangeIndex; 

for (let i=0; i<fruits.length; i++) {
  if (fruits[i] === "Orange") {
    orangeIndex = i;
    break;
  }
  console.log(`Iteration: ${i}`);
}

console.log(`Orange Index: ${orangeIndex}`); // Orange Index: 3

/*
Iteration: 0
Iteration: 1
Iteration: 2
Orange Index: 3
*/



////////////////////////////
// continue
// -> Aktuelle Iteration des For-Loops wird abgebrochen & macht bei der nächsten Iteration weiter

// Beispiel 1
// Wenn die Zahl gerade ist, dann soll die `console.log` übersprungen werden
for (let i=0; i<10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`i: ${i}`);
}

/*
i: 1
i: 3
i: 5
i: 7
i: 9
*/

// Beispiel 2
// Nur Produkte, die teurer als 10 Euro sind weiterverarbeiten

const products = ['T-shirt', 'Hose', 'Pulli', 'Socken'];
const prices = [29.99, 9.99, 14.45, 5.99];

for (let i=0; i<products.length; i++) {
  if (prices[i] <= 10) continue;
  console.log(`${products[i]}: ${prices[i]}`);
}

/*
T-shirt: 29.99
Pulli: 14.45
*/
