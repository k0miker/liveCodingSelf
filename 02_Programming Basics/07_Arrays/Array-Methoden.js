//////////////////////////////
// Array-Methoden
/////////////////////////////

let colors = ["red", "blue"];

/////////////////////////////
// 0. Länge eines Arrays herausfinden
/////////////////////////////

///////////////////////////////
// Array.prototype.length
///////////////////////////////
// Rückgabewert: Die Länge des Arrays

const length = colors.length;
console.log(length); // 2


/////////////////////////////
// 1. Elemente hinzufügen
/////////////////////////////

///////////////////////////////
// Array.prototype.push(values)
///////////////////////////////
// Beschreibung: Die pushMethode fügt ein oder mehrere Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.
// Rückgabewert: Die neue Länge des Arrays.
// Verändert das Original-Array: Ja.

colors.push("yellow");
console.log(colors); // [ 'red', 'blue', 'yellow' ]

colors.push("pink", "purple");
console.log(colors); // [ 'red', 'blue', 'yellow', 'pink', 'purple' ]

const arrayLength = colors.push("orange");
console.log(arrayLength); // 6


///////////////////////////////////
// Array.prototype.unshift(values)
///////////////////////////////////
// * Beschreibung: Die unshiftMethode fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück.
// * Rückgabewert: Die neue Länge des Arrays.
// * Verändert das Original-Array: Ja.

colors = ["red", "blue"]

colors.unshift("yellow");
console.log(colors); // [ 'yellow', 'red', 'blue' ]

colors.unshift("pink", "purple");
console.log(colors); // [ 'pink', 'purple', 'yellow', 'red', 'blue' ]



/////////////////////////////
// 2. Elemente entfernen
/////////////////////////////

/////////////////////////////
// Array.prototype.pop()
/////////////////////////////
// * Beschreibung: Die popMethode entfernt das letzte Element aus einem Array und gibt dieses Element zurück. Dadurch wird die Länge des Arrays um eins reduziert.
// * Rückgabewert: Das entfernte Element.
// * Verändert das Original-Array: Ja.

colors = ["red", "blue", "yellow"];
colors.pop();
console.log(colors); // [ 'red', 'blue' ]

const lastElement = colors.pop();
console.log(lastElement); // 'blue'
console.log(colors); // [ 'red' ]


/////////////////////////////
// Array.prototype.shift()
/////////////////////////////
// * Beschreibung: Die shiftMethode entfernt das erste Element aus einem Array und gibt dieses Element zurück. Dadurch wird die Länge des Arrays um eins reduziert.
// * Rückgabewert: Das entfernte Element.
// * Verändert das Original-Array: Ja.

colors = ["red", "blue", "yellow"];
colors.shift();
console.log(colors); // [ 'blue', 'yellow' ]

const firstElement = colors.shift();
console.log(firstElement); // 'blue'
console.log(colors); // [ 'yellow' ]



/////////////////////////////
// 3. Inhalt testen
/////////////////////////////

/////////////////////////////
// Array.prototype.includes(value, fromIndex)
/////////////////////////////
// * Beschreibung: Die includesMethode bestimmt, ob ein Array ein bestimmtes Element enthält, und gibt true oder false zurück.
// * Parameter `value`: Der Wert, nach dem gesucht wird.
// * Parameter `fromIndex` (optional): Der Index, ab dem die Suche beginnt. Standardmäßig 0.
// * Rückgabewert: true, wenn das Element gefunden wird; andernfalls false.
// * Verändert das Original-Array: Nein.

colors = ["red", "blue"]

colors.includes("red"); // true
colors.includes("yellow"); // false

// `fromIndex` ist optional & definiert den Start-Index der Suche:
colors.includes("red", 1); // false
colors.includes("blue", 1); // true


//////////////////////////////////
// Array.prototype.indexOf(value, fromIndex)
//////////////////////////////////
// * Beschreibung: Die indexOfMethode gibt den ersten Index zurück, an dem ein bestimmtes Element im Array gefunden wird, oder -1, wenn es nicht vorhanden ist.
// * Parameter `value`: Der Wert, nach dem gesucht wird.
// * Parameter `fromIndex` (optional): Der Index, ab dem die Suche beginnt. Standardmäßig 0.
// * Rückgabewert: Der Index des ersten Vorkommens des Elements; 1, wenn das Element nicht gefunden wird.
// * Verändert das Original-Array: Nein.

colors = ["red", "blue", "yellow"];

const yellowIndex = colors.indexOf("yellow");
console.log(yellowIndex); // 2

const greenIndex = colors.indexOf("green");
console.log(greenIndex); // -1



/////////////////////////////
// 4. Array umkehren
/////////////////////////////

//////////////////////////////////
// Array.prototype.reverse()
//////////////////////////////////
// * Beschreibung: Die reverseMethode kehrt die Reihenfolge der Elemente in einem Array um und gibt das Array zurück.
// * Rückgabewert: Das Array nach der Umkehrung.
// * Verändert das Original-Array: Ja.


colors = ["red", "blue", "yellow"];

colors.reverse();
console.log(colors); // [ 'yellow', 'blue', 'red' ]



/////////////////////////////
// 5. Teile eines Arrays herauskopieren
/////////////////////////////

//////////////////////////////////
// Array.prototype.slice(start, end)
//////////////////////////////////
// * Beschreibung: Die slice-Methode wird verwendet, um eine flache Kopie eines Teils eines Arrays in ein neues Array-Objekt zu erstellen. Das Original-Array bleibt dabei unverändert.
// * Parameter `start` (optional): Der Index, an dem der Ausschnitt beginnt (inklusive). Standardmäßig 0.
// * Parameter `end` (optional): Der Index, an dem der Ausschnitt endet (exklusive). Standardmäßig die Länge des Arrays.
// * Rückgabewert: Ein neues Array, das die ausgewählten Elemente enthält.
// * Verändert das Original-Array: Nein.

// (Funktionert genauso wie `String.prototype.slice()`)

colors = ["red", "blue", "yellow", "pink"];

const newColors = colors.slice(2); 
console.log(newColors); // [ 'yellow', 'pink' ]

const otherColors = colors.slice(1, 3);
console.log(otherColors); // [ 'blue', 'yellow' ]

// Der Original-Array bleibt unverändert
console.log(colors); // [ 'red', 'blue', 'yellow', 'pink' ]



//////////////////////////////////////////////////
// 6. Elemente aus einem Array herausschneiden und/oder hinzufügen
//////////////////////////////////////////////////

//////////////////////////////////
// Array.prototype.splice(start, deleteCount, value1, value2, ...)
//////////////////////////////////

colors = ["red", "blue", "yellow", "pink"];

// 6a. Elemente herausschneiden
let cutElements = colors.splice(1, 2);
console.log(colors); // [ 'red', 'pink' ]
console.log(cutElements); // [ 'blue', 'yellow' ]

colors = ["red", "blue", "yellow", "pink"];
cutElements = colors.splice(0, 1);
console.log(colors); // [ 'blue', 'yellow', 'pink' ]
console.log(cutElements); // [ 'red' ]

// 6b. Elemente herausschneiden & neue Elemente hinzufügen
colors = ["red", "blue", "yellow", "pink"];

cutElements = colors.splice(1, 2, "orange", "orangered", "purple");
console.log(colors); // [ 'red', 'orange', 'orangered', 'purple', 'pink' ]
console.log(cutElements); // [ 'blue', 'yellow' ]


// 6c. Nur neue Elemente hinzufügen (deleteCount = 0)
colors = ["red", "blue", "yellow", "pink"];

cutElements = colors.splice(1, 0, "orange", "orangered");
console.log(colors); // [ 'red', 'orange', 'orangered', 'blue', 'yellow', 'pink' ]
console.log(cutElements); // []