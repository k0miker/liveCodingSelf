///////////////////////////////
// if Statements

// if (KONDITION) {
//  // Code wird ausgeführt, wenn KONDITION === true
// } else {
//  // Code wird ausgeführt, wenn KONDITION === false
// }

// Das else ist optional

let cheesePrice = 4;
let salamiPrice = 2;

if (cheesePrice - salamiPrice > 1) {
  console.log(`Der Preisunterschied ist mehr als 1 Euro...`);
}

if (cheesePrice > salamiPrice) {
  console.log(`Der Käse ist ${cheesePrice - salamiPrice} EUR teurer als die Salami.`);
} else {
  console.log(`Die Salami ist ${salamiPrice - cheesePrice} EUR teurer als der Käse.`);
}


let sport = 'basketball';

if (sport[0] === 'b') {
  console.log(`${sport} startet mit 'b'.`);
  // Hier kann auch noch mehr passieren...
} else {
  console.log(`${sport} startet nicht mit 'b'.`);
}



// if-Statements können auch ineinander verchachtelt werden:
let word = 'basketball';

if (word[0] === 'b') {
  console.log(`${word} startet mit 'b'.`);
  // Hier kann auch noch mehr passieren

  if (word[1] === 'a') {
    console.log(`${word} startet mit 'ba'.`);
  }
} else {
  console.log(`${word} startet nicht mit 'b'.`);
}



// if...else if...else
// => Mehrere if-Statements verketten
console.log(`
  Bereich: if...else if...else
`)

word = 'basketball';

if (word[0] === 'a') {
  console.log(`${word} startet mit 'a'.`);
} else if (word[0] === 'b') {
  console.log(`${word} startet mit 'b'.`);
} else if (word[0] === 'c') {
  console.log(`${word} startet mit 'c'.`);
} else {
  console.log(`${word} startet nicht mit 'a', 'b' oder 'c'.`);
}


// if...else if... kann auch nur mit if...else definiert werden:
if (word[0] === 'a') {
  console.log(`${word} startet mit 'a'.`);
} else {
  if (word[0] === 'b') {
    console.log(`${word} startet mit 'b'.`);
  }
}


////////////////////////////
// if-Statement Shorthand
// (Wenn nur ein `if`-Statement gebraucht wird & nur eine Funktion ausgeführt werden soll)

if (word[0] === 'b') console.log(`${word} startet mit 'b'.`);