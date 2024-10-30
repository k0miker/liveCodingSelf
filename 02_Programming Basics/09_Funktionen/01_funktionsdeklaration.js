//////////////////
// Funktionen (Funktionsdeklaration)
/////////////////

// Wo haben wir Funktionen schonmal genutzt?
console.log("Hallo");
Math.random();

const string = ["a", "b", "c"].join();
console.log(string); // a,b,c

'hallo'.toUpperCase(); // 'HALLO'

const array = [];
array.push('rot', 'blau', 'gelb');
console.log(array); // [ 'rot', 'blau', 'gelb' ]

// Was haben diese Funktionen gemeinsam?
// * Sie führen JS-Code aus.
// * Jede Funktion wird mit den runden Klammern `()` ausgeführt.
// * Innerhalb der runden Klammern können Werte übergeben werden

// Funktionen sind im Endeffekt kleine unabhängige Mini-Programme.
// Der Name der Funktion beschreibt die Aufgabe der Funktion. 

////////////////////////////////
// Unsere erste eigene Funktion
// Die Funktionsdeklaration:

function printHello() {
  // Dieser Code hier wird beim Aufrufen der Funktion ausgeführt
  console.log('Hallo Funktion');
}

printHello();
printHello();


// Wie können wir Werte in eine Funktion übergeben?
// In der Funktiondefinition können wir sogenannte Parameter definieren.
// Mit diesen Parametern können wir dann Werte beim Aufrufen der Funktion übergeben.
// Den Namen der Parameter könnt ihr frei wählen.

// Der Parameter der Funktion ist 'name'
function sayHello(name) {
  console.log(`Hallo ${name}`);
}

// Beim Aufrufen der Funktion setzen wir dann den Parameter, indem wir Werte (sogenannte Argumente) übergeben (eg 'Tobias', 'Denis'):
sayHello('Denis'); // 'Hallo Denis'
sayHello('Tobias'); // 'Hallo Tobias'


// Wie können wir mehrere Parameter definieren?
function sayHi(firstName, lastName, city) {
  console.log(`Hallo ${firstName} ${lastName} aus ${city}`);
}

sayHi('Joe', 'Doe', 'Hamburg'); // 'Hallo Joe Doe aus Hamburg'

// Falls ein Parameter nicht gesetzt ist, ist der Wert 'undefined'
sayHi('Joe', 'Doe'); // 'Hallo Joe Doe aus undefined'


// Wie können wir einen Wert als Ergebnis der Funktion herausgeben?
// Beispiel: Zufälliges Element aus einem Array auswählen & zurück geben

// 1. Ohne eine Funktion arbeiten:
const colors = ['rot', 'blau', 'grün', 'pink'];

const randomIndex = Math.floor(Math.random() * colors.length); // 0-3
const color1 = colors[randomIndex];

const color2 = colors[Math.floor(Math.random() * colors.length)];
const color3 = colors[Math.floor(Math.random() * colors.length)];

console.log(`Zufällige Farben: ${color1} an ${randomIndex}, ${color2}, ${color3}`);

// Problem: Wir wiederholen Code hier.
// Lösung: Sich wiederholenden Code in eine Funktion auslagern.

// 2. Mit einer Funktion arbeiten

// Jede Funktion kann ein Ergebnis zurückgeben. Dazu wird das `return` Keyword genutzt.
// Sobald `return` ausgeführt wird, wird die Funktion beendet.

function randomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const sports = ['Basketball', 'Volleyball', 'Tischtennis'];

const sport1 = randomElement(sports);
const sport2 = randomElement(sports);
const sport3 = randomElement(sports);

console.log(`Sportarten: ${sport1}, ${sport2}, ${sport3}`)


// Beispiel: String formatieren (erster Buchstabe groß, der Rest klein)
function capitalize(string) {
  // const firstChar = string.charAt(0).toUpperCase();
  const firstChar = string[0].toUpperCase();
  const otherChars = string.slice(1).toLowerCase();

  return firstChar + otherChars;
}

const formattedString = capitalize('hAlLo'); 
console.log(formattedString); // 'Hallo'

console.log(capitalize('DDjkgaLLL')); // 'Ddjkgalll'


// Was sind die Vorteile von Funktionen?
// * Einfache Wiederverwendung von Code & keine unnötige Code-Wiederholung (effizientere Arbeit)
// * Reduzierung von Komplexität (solange der Name der Funktion aussagekräftig ist) (Abstraktion)
// * Aufteilung unseres Codes in kleine logische Einheiten (Modularisierung)


// Zusammenfassung:
// * Definition einer Funktion mittels der Funktionsdeklaration
// * Um Werte in eine Funktion zu übergeben, können wir Parameter definieren
// * Um ein Ergebnis zu erhalten, nutzen wir das `return`-Statement