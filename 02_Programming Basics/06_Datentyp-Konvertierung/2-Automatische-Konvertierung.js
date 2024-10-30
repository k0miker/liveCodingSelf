//////////////////////////////////////////////////
// Automatische Konvertierung von Datentypen in JS
//////////////////////////////////////////////////

// Was passiert hier?

console.log("120" / 2); // 60
console.log(true / 2); // 0.5

// Javascript schmeißt keinen Fehler, wenn die Datentypen nicht stimmen.
// Stattdessen führt Javascript eine automatische Konvertierung durch, um den Befehl bzw. die Berechnung durchzuführen.
// Das kann für uns Entwickler zu Problemen führen. Also immer aufpassen.

// Wo findet eine automatische Konvertierung in JS statt?

// 1. Mathematische Operationen
// => *, -, /, **, %, <, <=, >, >=
// => Hier werden alle Werte werden automatisch zur Number konvertiert

true * 5; // Number(true) * 5 // 1 * 5 // 5
(false * 10) / "10"; // Number(false) * 10 / Number("10") // 0 * 10 / 10 // 0
4 > true; // 4 > Number(true) // 4 > 1 // true

// 2. + Plus-Operator
// Logik:
// * Wenn einer der Werte ein String ist, werden alle Werte zum String konvertiert.
// * Wenn kein String enthalten ist, werden alle Werte zur Number konvertiert.

// Wenn ein String enthalten ist:
"120" + true; // "120true"
false + 10 + "10"; // "false1010"

// Wenn kein String enthalten ist:
false + 10 + 10; // 20
true + null + 4.5; // 5.5

false + 10 + "10"; // '1010'

// 3. if-Statement, Ternäroperator & Logische Operatoren
// => Hier werden alle Werte automatisch zum Boolean konvertiert

if ("hallo") {
  // Boolean('hallo') // true
  console.log("Ich werde ausgefüht");
}

if ("hallo" && "") {
  // Boolean('hallo') && Boolean('') // true && false // false
  console.log("Ich werde nicht ausgefüht");
}

if ("hallo" || "") {
  // Boolean('hallo') || Boolean('') // true || false // true
  console.log("Ich werde ausgefüht");
}

let value = 0 ? "true" : "false";
console.log(value); // 'false'

value = 22 ? "true" : "false";
console.log(value); // 'true'

value = 22 && null && "" ? "true" : "false";
console.log(value); // 'false'

value = 22 || null || "" ? "true" : "false";
console.log(value); // 'true'

// Vorteile der automatischen Datentypkonvertierung:
// Diese automatische Konvertierung können wir uns auch zu nutze machen:

// Beispiel: Testen nach einem leeren String
let string = "";

if (!string) {
  console.log("Der String ist leer");
} else {
  console.log("Der String ist nicht leer");
}

if (string) console.log("Der String ist nicht leer");

// Beispiel: Testen ob eine Variable null oder undefined ist
let object = null;

if (!object) {
  console.log("Die Variable ist null oder undefined");
} else {
  console.log("Die Variable ist gesetzt");
}

// Beispiel: Testen ob eine Zahl null ist
let number = 0;

if (!number) {
  // !Boolean(0)
  console.log("Die Zahl ist 0");
}

// 4. Looser Vergleich (==)
// => Beim loosen Vergleich findet eine automatische Datentypkonvertierung statt
// Logik:
// 1. Wenn beide Werte den gleichen Datentyp haben, findet ein normaler Vergleich statt.
// 2. Wenn Datentypen unterschiedlich sind, gibt es die folgenden Schritte:
//    2a. undefined & null sind gleich.
//    2b. Wenn ein Wert ein Boolean ist, wird der andere auch zum Boolean konvertiert.
//    2c. Wenn String & Number verglichen werden, wird der String zur Number konvertiert.

// 1.
"hallo" == "hal"; // false
2 == 2; // true

// 2a.
undefined == null; // true

// 2b.
true == 1; // true == Boolean(1) // true
false == 0; // true

true == "hallo"; // true
true == ""; // false

// 2c.
"4" == 4; // Number("4") == 4 // 4 == 4 // true
"120" == 120; // true
