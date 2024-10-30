///////////////////////////
// Breakpoint-Debugging
///////////////////////////

// Für das Debugging nutzen wir bislang fast ausschließlich `console.log`-Nachrichten.
// Mit `console.log` können wir testen, ob unser Code an einer bestimmten Stelle ausgeführt wird & welche Werte unsere Variablen zu diesem Zeitpunkt haben.

// Genau dasselbe können wir auch machen, indem wir Breakpoints in VS Code setzen.
// An einem Breakpoint wird die Ausführung des Codes angehalten & wir können die Werte unser Variablen zu diesem Zeitpunkt sehen.

// Vorgehensweise:
// 1. In VS Code `Run and Debug` Interface öffnen
// 2. Breakpoints setzen (links neben der Zeile ist ein roter Punkt, der gesetzt werden kann)
// 3. Auf `Run and Debug` klicken & `NodeJS` auswählen
// 4. Der Code wird ausgeführt & stoppt, sobald ein Breakpoint erreicht wird.

// Wenn ein Breakpoint erreicht ist, gibt es die folgenden Kontroll-Möglichkeiten:
// 'Start' => Code weiter ausführen
// 'Step Over' => Zur nächsten Zeile springen, die ausgeführt wird
// 'Step Into' => In die Funktion, die ausgeführt wird, hineingehen
// 'Step Out' => Zur übergelegenen Funktion herausgehen

const array = [ 'a', 'b', 'c'];

const lastElement = array.pop();

array.push('d');

array.push('e');


// Beispiel: Array filtern
const zahlen = [ 2, 3, 4, 5, 6, 7, 8 ];

function filterArray(array, filterFunction) {
  const newArray = [];
  for (const value of array) {
    if (filterFunction(value)) {
      newArray.push(value);
    }
  }
  return newArray;
}

function biggerThan5(number) {
  return number > 5;
}

let filteredArray = filterArray(zahlen, biggerThan5);
console.log(filteredArray); // [ 6, 7, 8 ]