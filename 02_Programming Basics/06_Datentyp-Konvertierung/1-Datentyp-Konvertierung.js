////////////////////////////
// Datentypkonvertierung
////////////////////////////

// In JS können primitive Datentypen problemlos ineinander konvertiert werden.
// * String => Boolean
// * Number => Boolean
// * Boolean => Number
// ...

//////////////////////////////
// 1. Zum String konvertieren

// String(value)
// => Konvertiert den übergebenen Wert zu einem String

String(true); // 'true'
String(false); // 'false'

String(0); // '0'
String(1985749); // '1985749'
String(0.333); // '0.333'

String(null); // 'null'
String(undefined); // 'undefined'
String(NaN); // 'NaN'


//////////////////////////////
// 2. Zur Boolean konvertieren

// Boolean(value)
// => Konvertiert den übergebenen Wert zu einem Boolean

// falsy-Werte: Werte, die zu false konvertiert werden
Boolean(0); // false
Boolean(NaN); // false

Boolean(null); // false
Boolean(undefined); // false

Boolean(""); // false


// truthy-Werte: Alle Werte, die zu true konvertiert werden
// (Im Prinzip alles, was nicht falsy ist)
Boolean(4); // true
Boolean(2.4); // true
Boolean(-100); // true

Boolean("hallo"); // true
Boolean("!"); // true


//////////////////////////////
// 3. Zur Number konvertieren

// Number(value)
// => Konvertiert den übergebenen Wert zu einer Number

Number(true); // 1
Number(false); // 0

Number(""); // 0
Number("4"); // 4
Number("4.25"); // 4.25
Number("40 Euro"); // NaN
Number("Hallo"); // NaN

Number(null); // 0
Number(undefined); // NaN


// + - Unary Operator
// => Konvertiert einen String zur Number
+"40"; // 40
+"Hallo"; // NaN


// parseInt(value) & parseFloat(value)
// => Isolieren eine Zahl aus dem Anfang eines Strings & konvertieren diese dann zur Number

// parseInt => Für ganze Zahlen
parseInt('40 Euro'); // 40
parseInt('2St.'); // 2
parseInt('    3x'); // 3
parseInt('4ab56'); // 4
parseInt('5.33Euro'); // 5

parseInt('abc40'); // NaN

// parseFloat => Fur Dezimalzahlen / Gleitkommazahlen
parseFloat('4.25 Euro'); // 4.25
parseFloat('    0.333Euro'); // 0.333

parseFloat('a56.4'); // NaN