/////////////////////////////////////
// Funktionsausdruck & Pfeilfunktion
// => Alternative Wege eine Funktion zu definieren

// Gestern haben wir die Funktionsdeklaration kennengelernt.
// Die Funktionsdeklaration hat ein paar Eigenarten:
// * Die Funktionen sind global definiert.
// * Die Funktionen sind erreichbar, bevor sie im Code definiert werden (Global Hoisting).

const result = multiply(4, 5); // 20
console.log(result);

function multiply(num1, num2) {
  return num1 * num2;
}

// Das ist für uns als Programmierer nicht immer ideal.
// Bei einer Funktionsdeklaration können wir den Geltungsbereich (bzw. 'Scope') der Funktion nicht kontrollieren.
// Dafür haben wir alternative Wege eine Funktion zu definieren: Funktionsausdruck & Pfeilfunktion.
// Bei Funktionsausdruck & Pfeilfunktion können wir Funktionen in Variablen speichern & damit haben diese dann den Geltungsbereich der Variablen.


///////////////////////////////////////////
// Funktionsausdruck (Function Expression)

// => Funktion kann in einer Variablen gespeichert werden

// Da die Funktion in einer Variablen gespeichert ist, können wir auf sie nicht zugreifen, bevor sie definiert wurde:
// multiply2(5, 6); // ReferenceError: Cannot access 'multiply2' before initialization

const multiply2 = function(num1, num2) {
  return num1 * num2;
}

const result2 = multiply2(5, 6);
console.log(result2); // 30



///////////////////////////////////////////
// Pfeilfunktion (Arrow Function Expression)

// => Funktion kann in einer Variablen gespeichert werden
// => Sehr kurze Schreibweise

const multiply3 = (num1, num2) => {
  return num1 * num2;
}

const result3 = multiply3(6, 7);
console.log(result3);


// Wenn die Pfeilfunktion nur aus einem return-Statement besteht, können wir sie noch kürzer schreiben:
const multiply4 = (num1, num2) => num1 * num2;

const result4 = multiply4(2, 3);
console.log(result4); // 6


// Wenn eine Pfeilfunktion nur einen Parameter hat, brauchen wir die runden Klammern nicht:
const calculate = num => num * num * 7;

const result5 = calculate(4);
console.log(result5); // 112



//////////////////////////////////////////////////
// Wo haben wir Pfeilfunktionen schonmal gesehen?

// Beispiel: Arbeit mit Event-Listenern
// => Eine anonyme Pfeilfunktion wird als Parameter übergeben (es könnte genauso ein Funktionsausdruck sein)

// element.addEventListener('click', (event) => {
// 	console.log('Das Element wird angeklickt');
// })

// element.addEventListener('click', function(event) {
// 	console.log('Das Element wird angeklickt');
// })



//////////////////////////////////
// Anonyme Funktionen

// Funktionsausdrücke & Pfeilfunktionen müssen nicht in Variablen gespeichert sein, sondern können auch anonym definiert werden.
// Anonyme Funktionen können als als Parameter in einer Funktion übergeben werden (sogenannte Callback-Funktionen).

const manipulateString = (string, stringFunction) => {
  const newString = stringFunction(string);
  return newString;
}

const result6 = manipulateString('Joe Doe', (string) => {
 return string.charAt(0) + string.slice(-1);
});

console.log(result6); // Je


// Dasselbe geht auch mit einem Funktionsausdruck:
const result7 = manipulateString('Joe Doe', function(string) {
  return string.charAt(0) + string.slice(-1);
 });
 
 console.log(result7); // Je


/////////////////////////////////////////
// Anonyme selbstausführende Funktionen (Immediate Self-Invoking Functions)

// Vorteile:
// * Funktion kann nur einmal ausgeführt werden.
// * Funktion wird nicht gespeichert (Memory bleibt frei).
// * Vor `export` & `import` konnte man so JS-Module erstellen.

// Als Funktionsausdruck
(function(num1, num2) {
  const result = num1 * num2;
  console.log(`Das Ergebnis ist ${result}.`);
})(4, 5);
// Das Ergebnis ist 20.

// Als Pfeilfunktion
((num1, num2) => {
  const result = num1 * num2;
  console.log(`Das Ergebnis ist ${result}.`);
})(4, 5);
// Das Ergebnis ist 20.



/////////////////////////////////
// Funktion ist ein eigener Datentyp

console.log(typeof calculate); // 'function'

// Funktionen sind truthy
console.log(Boolean(multiply));