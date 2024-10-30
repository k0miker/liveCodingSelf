////////////////////////////////
// Find
////////////////////////////////

// Array.prototype.find(findFunction)
// => Ergebnis ist das gefundene Element oder `undefined`, wenn nichts gefunden wurde.

// Mit der Find-Methode können wir Elemente in einem Array finden.
// Die `findFunction` ist unser Test zum Finden eines Elements.
// Das erste Element, bei dem die `findFunction` `true` zurück gibt, ist das Ergebnis.


const users = [
  {id: 1, name: "John"},
  {id: 2, name: "Michaela"},
  {id: 3, name: "Anna"}
];

const anna = users.find(user => user.name === 'Anna');
console.log(anna); // { id: 3, name: 'Anna' }

const user2 = users.find(user => user.id === 2);
console.log(user2); // { id: 2, name: 'Michaela' }


// Wenn kein Element gefunden wird, ist das Ergebnis `undefined`
const notFound = users.find(user => user.name === 'Markus');
console.log(notFound); // undefined