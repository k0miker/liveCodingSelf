//////////////////////////////
// Spread-Syntax
/////////////////////////////

// Die Spread-Syntax sieht genauso aus wie der Rest-Parameter, hat aber eine andere Funktion. 
// Sie ermöglicht es, ein Array in einzelne Elemente zu „entpacken“. Man kann sie zum Beispiel verwenden, um einen Array in einzelne Argumente einer Funktion zu zerlegen oder um Arrays zu kombinieren.

function sum(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

// Möglichkeit 1: Arrray in einzelne Argumente für eine Funktion zerlegen (in Kombination mit einem Rest-Parameter)

const values = [1, 2, 3, 4];

let summe = sum(...values);
console.log(summe); // 6

// Das ist dasselbe wie:
summe = sum(values[0], values[1], values[2], values[3]);
console.log(summe); // 6


// Das könnte man auch für die Push-Methode verwenden, da es auch hier einen Rest-Parameter gibt:
const array = [5, 6, 7];
array.push(...values);
console.log(array); // [ 5, 6, 7, 1, 2, 3, 4 ]



// Möglichkeit 2: Arrays miteinander kombinieren

const books = [ 'The Alchimist', 'Faust', 'Dracula' ];
const moreBooks = [ 'The Great Gatsby', 'Frankenstein' ];

const allBooks = [ ...books, ...moreBooks ];
console.log(allBooks); // [ 'The Alchimist', 'Faust', 'Dracula', 'The Great Gatsby', 'Frankenstein' ]

// Ohne die Spread-Syntax hätten wir einen verschachteten Array
console.log([books, moreBooks]);
// [
//   [ 'The Alchimist', 'Faust', 'Dracula' ],
//   [ 'The Great Gatsby', 'Frankenstein' ]
// ]


// Möglichkeit 3: Kopie eines Arrays erstellen

const colors = ['rot', 'blau', 'gelb'];

const colorsCopy = [ ...colors ];
console.log(colorsCopy); // [ 'rot', 'blau', 'gelb' ]










