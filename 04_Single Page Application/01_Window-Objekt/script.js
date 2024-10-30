///////////////////////////////
// Javascript auf der Webseite
// => Das window-Objekt
///////////////////////////////

// Dieser JS-Code wird vom Browser auf unserer Webseite ausgeführt.

// Javascript ist eine interpretierte Programmiersprache.

// In einer interpretierten Sprache wird der Code nicht im Voraus in Maschinensprache (Binärcode) übersetzt, sondern während der Laufzeit Zeile für Zeile vom Interpreter ausgeführt. Der Code wird also direkt vom Browser (oder einer anderen Umgebung wie Node.js) interpretiert und sofort ausgeführt.

// JS-Engines sorgen dafür, dass Javascript interpretiert & ausgeführt wird.

// Jeder Browser hat eine eigene JS-Engine.
// Chrome -> V8-Engine
// Safari -> WebKit
// Firefox -> Spider Monkey
// Internet Explorer/Edge -> Chakra



///////////////////////////////
// Das window-Objekt
///////////////////////////////

// Unser JS-Code wird innerhalb eines Objektes, dem sogenannten window-Objekt ausgeführt.

// Auf das window-Objekt können wir auf zwei Wegen zugreifen:
// => this & window
// (Info: Wenn ein Skript als Modul deklariert ist (type="module"), dann ist `this` immer undefined & referenziert nicht `window`)

console.log(window); // Window
console.log(this); // Window

console.log(window === this); // true

// window ist eine Instanz der Klasse Window
// MDN-Dokumentation: https://developer.mozilla.org/en-US/docs/Web/API/Window#instance_methods
console.log(window instanceof Window); // true


// Das Window-Objekt repräsentiert ein Browser-Fenster.
// Das Window-Objekt ist unser globaler Kontext. Unser JS-Code hier wird innerhalb des Window-Objekts ausgeführt.
// Das Window-Objekt ist nur da, wenn wir uns im Browser befinden. In Node ist dieses nicht da.

// Das window-Objekt beinhaltet alle Informationen zum Browser, Browser-Fenster & zum Bildschirm des Nutzers. Darüber hinaus beinhaltet es auch das `document`-Objekt, welches alle HTML-Elemente unserer Webseite.

// Beispiel-Methoden & Eigenschaften, die das window-Objekt enthält:
// Zum Zugriff auf diese haben wir verschiedene Möglichkeiten. Entweder über die Variable `window`, über `this` oder als globale Methoden & Eigenschaften.

// Globale Helferfunktionen:
window.setTimeout(() => {}, 10);
window.setInterval(() => {}, 10);

this.setTimeout(() => {}, 10);
this.setInterval(() => {}, 10);

setTimeout(() => {}, 10);
setInterval(() => {}, 10);


// Informationen zum Browserfenster:
window.innerWidth;
window.innerHeight;

this.innerWidth;
this.innerHeight;

innerWidth;
innerHeight;


// Das `document`-Objekt:
window.document;

this.document;

document;

// Und vieles mehr...




// Wie können wir die Größe des Browserfensters abfragen?
console.log(`Breite des Fensters: ${window.innerWidth} oder ${innerWidth}`);
console.log(`Höhe des Fensters: ${window.innerHeight} oder ${innerHeight}`);


// Wie können wir zum Beispiel die Bildschirm-Größe des Nutzers abfragen?
console.log(`Breite des Bildschirms: ${window.screen.width} oder ${screen.width}`);
console.log(`Höhe des Bildschirms: ${window.screen.height} oder ${screen.height}`);



// Das Window-Objekt hat auch Methoden zum Öffnen von prompts & Popups auf der Seite:

// window.alert(message)
// => Öffnet ein Popup-Fenster auf der Webseite
// (Die Ausführung von JS wird angehalten bis das Popup-Fenster geschlossen wird)
alert('Hallo ich bin ein Popup-Fenster');
console.log('Ich komme erst, wenn das Popup-Fenster geschlossen wurde');


// window.prompt(message, defaultWert)
// => Öffnet ein Popup-Fenster mit Eingabefeld
// (Bei Abbruch der Eingabe ist `null` das Ergebnis)
const userName = prompt('Wie heißt du?');
console.log(`Du heißt ${userName}`);