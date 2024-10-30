// Aufgabe 01

const paragraph = document.querySelector('p.inner');
console.log('paragraph');
console.log(paragraph);

// Ergebnis: HTML-Element
console.log('previousElementSibling')
console.log(paragraph.previousElementSibling);

// Ergebnis: Node
console.log('previousSibling');
console.log(paragraph.previousSibling);

// Auswahl Elternelement vom Elternelement:
console.log(paragraph.parentElement.parentElement);


// Aufgabe 02:
// Finde seinen nächsten Elternteil mit der Klasse outer mithilfe der closest() Methode.
console.log(paragraph.closest('.outer'));

// Aufgabe 03:
// Überprüfe, ob es dem Selektor .inner entspricht, indem Du die matches() Methode verwendest.
console.log(paragraph.matches('.inner')); // true

// Aufgabe 04:
const middleDiv = document.querySelector('div.middle');
console.log(middleDiv.children); // HTML-Elemente

console.log(middleDiv.childNodes); // Nodes

// Aufgabe 05:
// QuerySelector kann auch auf Elemente angewandt werden & dann wird nur innerhalb des Elementes gesucht:
const firstInnerChild = middleDiv.querySelector('.inner');
console.log('first .inner in .middle:', firstInnerChild);