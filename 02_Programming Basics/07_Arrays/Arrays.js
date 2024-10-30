///////////////////////////
// Arrays
///////////////////////////

// * Ein Array ist eine Datenstruktur, die eine Liste von Elementen speichert. 
// * Jedes Element in einem Array hat einen Index, beginnend bei 0.
// * Die Größe eines Arrays kann sich dynamisch ändern, d.h., Elemente können hinzugefügt oder entfernt werden.
// * Ein Array kann jede Art von Datentyp enthalten.
// * Ein Array kann auch eine Mischung an Datentypen enthalten. In der Praxis ist das aber unüblich.

// 1.
// Ein leerer Array
const emptyArray = [];

// 2.
// Ein gefüllter Array
const array = [1, 2, 3, 4];
const colors = ['red', 'blue', 'yellow'];
console.log(array); // [ 1, 2, 3, 4 ]

// 3.
// Jedes Element in einem Array hat einen Index, beginnend bei 0.
// Mit der Klammernotation können wir auf alle Elemente im Array zugreifen
array[0]; // 1
array[1]; // 2
array[2]; // 3

colors[0]; // 'red'
colors[2]; // 'yellow'

// 4.
// Werte in einem Array überschreiben
colors[1] = 'purple';
console.log(colors); // [ 'red', 'purple', 'yellow' ]

// Wenn wir einem Index außerhalb der Array-Länge setzen, werden die Stellen dazwischen mit `undefined` gefüllt:
colors[5] = 'pink';
console.log(colors); // [ 'red', 'purple', 'yellow', undefined, undefined, 'pink' ]


//////////////////////////
// 5. Array als Konstante
//////////////////////////
// * Unveränderliche Referenz: Die Referenz auf das Array ist unveränderlich. Das bedeutet, dass Sie der Konstante keinen neuen Wert zuweisen können.
// * Veränderlicher Inhalt: Der Inhalt des Arrays (die Elemente) kann jedoch verändert werden. Sie können Elemente hinzufügen, entfernen oder ändern.

// Der Inhalt einer Array-Konstanten darf sich ändern
const students = ["Jörg", "Colin", "Tobias"];
students[2] = "Anja";
students[3] = "Sibel";
console.log(students); // [ 'Jörg', 'Colin', 'Anja', 'Sibel' ]

// Die Referenz einer Array-Konstanten darf sich nicht ändern
// students = ["Peter"]; // TypeError: Assignment to constant variable.




// console.log(typeof emptyArray); // 'object'
