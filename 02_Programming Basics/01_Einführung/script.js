// Javascript

let number = 2; 
number = 4 * number; 
console.log(number); // 8

console.log(24);


// Fehlermeldungen
let zahl;
console.log(zahl); // undefined
zahl += 6;
console.log(zahl); // NaN

// console.log
// Abkürzung zum Tippen: `log` -> Tab
console.log('Hallo Konsole');

////////////////////////////////
////////////////////////////////
// Datentypen in Javascript
////////////////////////////////
////////////////////////////////

////////////////////////////////
// Number

// Ganze Zahlen (Integer)
0;
1;
100;
1500;
-25;
-125;

// Dezimalzahlen (Floats)
0.45;
0.2;
100.789;

// Infinity (Unendlichkeit)
Infinity;

// NaN (Not-A-Number)
// -> Ergebnis einer missglückten Rechenoperation
NaN;
console.log(6 / 'hallo'); // NaN


////////////////////////////
// Strings
// -> Text

'Hallo';
"Hallo";
`Hallo`;

// Anführungszeichen können auch innerhalb eines Strings verwendet werden:
'Der Verkäufer sagte, "Guten Morgen."';
"Der Verkäufer sagte, 'Guten Morgen.'";
`Der "Verkäufer" sagte, 'Guten Morgen.'`;


/////////////////////////////
// Boolean
// -> true/false-Wert
true;
false;

let isUserLoggedIn = false;
isUserLoggedIn = false;


// Kleiner Ausflug if-Statement
// Boolean kann als Kondition genutzt werden
if (isUserLoggedIn) {
  console.log('Der Nutzer ist eingeloggt');
} else {
  console.log('Der Nutzer ist nicht eingeloggt');
}


/////////////////////////////
// undefined & null

// undefined
// -> undefiniert; automatischer Wert einer nicht gesetzten Variablen
let x;
console.log(x); // undefined

// undefined setzen wir in der Praxis nicht selbst, dafür nutzen wir null

// null
// -> undefiniert
// -> Wenn wir eine Variable selbst auf undefiniert setzen wollen, nutzen wir null;
let text = "hallo";
text = null;
console.log(text); // null


/////////////////////////////
// typeof - Datentyp auslesen

let firstName = "Paul";
console.log(typeof firstName); // string

let isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean

let count = 2;
console.log(typeof count); // number

let nothing;
console.log(typeof nothing); // undefined


// Kurzer Ausflug if-Statements
// So können wir Tests schreiben
if (typeof firstName === 'string') {
  console.log('Es handelt sich um einen String');
} else {
  console.log('Fehler: Es handelt sich um keinen String');
}

if (typeof nothing === 'undefined') {
  console.log('Fehler: nothing ist nicht definiert.')
}



////////////////////////////////
// Arithmetische Operatoren

// Mathematische Operatoren

// Addition
4 + 2;
4+2;
console.log(5 + 8); // 13

// Subtraktion
4 - 2;
console.log(5 - 8); // -3

let value = 8 - 7;
console.log(value); // 1

// Multiplikation
1 * 2;
console.log(2 * 8); // 16

// Division
3 / 4;
console.log(3 / 4); // 0.75

// Verschiedene Operatoren können wie in der Mathematik miteinander kombiniert werden
// -> Es gilt Punkt-vor-Strich
console.log(3 * 4 + 12); // 24
// -> Klammern können zum Separieren von Berechnungen genutzt werden
console.log(3 * (4 + 12)); // 48

// Potenz
// '4 hoch 2'
4 ** 2; // 16
console.log(4 ** 2); // 16

// Modulo (Rest)
// Beim Modulo-Operator ist der Rest der Division das Ergebnis
10 % 3; // 3 Rest: 1 // Ergebnis: 1
11 % 3; // 3 Rest: 2 // Ergebnis: 2
12 % 3; // 4 Rest: 0 // Ergebnis: 0 

console.log(7 % 3); // 1


//////////////////////////////
// Abkürzungen Rechenoperationen

// ++ -> Plus eins
// `wert++` ist dasselbe wie `wert = wert + 1`
let wert = 0;
wert++;
console.log(wert); // 1
wert++;
console.log(wert); // 2

// -- -> Minus eins
// `wert--` ist dasselbe wie `wert = wert - 1`
wert--;
console.log(wert); // 1
wert--;
console.log(wert); // 0

// += -> Selbstaddition
// `wert += 4` ist dasselbe wie `wert = wert + 4`
wert += 4;
console.log(wert); // 4
wert += 6;
console.log(wert); // 10

// -= -> Selbstsubtraktion
// `wert -= 4` ist dasselbe wie `wert = wert - 4`
wert -= 6; 
console.log(wert); // 4
wert -= 4;
console.log(wert); // 0



/////////////////////////////
// Vergleichsoperatoren]

// > - Größer als
4 > 2; // true
2 > 4; // false
4 > 4; // false
Infinity > 5; // true

console.log(6 > 3); // true

// >= - Größer gleich
4 >= 4; // true
5 >= 4; // true
0.1 >= 4; // false

// < - Kleiner als
4 < 3; // false
3 < 4; // true
4 < 4; // false

// <= - Kleiner gleich
4 <= 3; // false
3 <= 4; // true
4 <= 4; // true

// === - Gleichheit
'hallo' === 'welt'; // false
'hallo' === 'hallo'; // true
12 === 'hallo'; // false
12 === '12'; // false
12 === false; // false

let text1 = 'hallo';
let text2 = 'welt';
console.log(text1 === text2); // false

// !== - Ungleichheit
'hallo' !== 'welt'; // true
'hallo' !== 'hallo'; // false
12 !== 'hallo'; // true
12 !== '12'; // true
12 !== false; // true


//////////////////////////////////
// Mathematische Funktionen

// Math.random()
// -> Zufällige Zahl zwischen 0 und 1
let random = Math.random();
console.log(random); // z.B. 0.4984313548459187

random = Math.random();
console.log(random); // z.B. 0.8999201831147459

// Daraus kann man dann auch alle anderen Zahlenbereiche definieren:
// -> Zufällige Zahl zwischen 0 und 15
random = Math.random() * 15;
console.log(random);

// -> Zufällige Zahl zwischen 5 und 15
random = Math.random() * 10 + 5;
console.log(random);


// Math.floor() 
// -> Abrunden
Math.floor(6.7); // 6
Math.floor(7.2); // 7

// Math.ceil()
// -> Aufrunden
Math.ceil(6.7); // 7
Math.ceil(7.2); // 8

// Math.round()
// -> Rundet auf oder ab (je nachdem was näher dran ist)
Math.round(6.7); // 7
Math.round(7.2); // 7


//////////////////////////
// Template Literal Strings
// -> Variablenwerte einfach in einen String einfügen
let seats = 4;
let string = `Es gibt ${seats} Sitzplätze`;
console.log(string); // 'Es gibt 4 Sitzplätze'

console.log(`Das Ergebnis von 1/3 ist: ${1/3}`); // Das Ergebnis von 1/3 ist: 0.3333333333333333




// Arbeit mit HTML (Das läuft nur auf einer Webseite)
// const button = document.querySelector('#button-id');
// button.style.backgroundColor = 'red';
// button.classList.add('headline-xl');