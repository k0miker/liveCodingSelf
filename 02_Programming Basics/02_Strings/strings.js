///////////////////////////
// Strings
//////////////////////////

/////////////////////////
// Strings zusammenfügen
//
// Wie können wir mehrere Strings zusammenfügen?

// + -> Strings zusammenfügen
const firstName = 'Peter';
const lastName = 'Müller';

let fullName = firstName + ' ' + lastName;
console.log(fullName); // 'Peter Müller'

// console.log(firstName + ' ' + lastName); // 'Peter Müller'
// console.log('Peter' + ' Müller');

// Template Literal String
fullName = `${firstName} ${lastName}`;
console.log(fullName); // 'Peter Müller'



/////////////////////////////
// Einzelne Zeichen ausklammern (`escapen`)
// 
// Das Zeichen, dass nach einem Backslash kommt wird immer als String gewertet

let string = 'Hier ist ein kleines Anführungszeichen: \''; 
console.log(string); // Hier ist ein kleines Anführungszeichen: '

string = "Der Nachbar sagt \"Hallo\"";
console.log(string); // Der Nachbar sagt "Hallo"

string = "Hier ist ein Backslash: \\";
console.log(string); // Hier ist ein Backslash: \



////////////////////////////////////
// String-Methoden & -Eigenschaften

// Jeder String hat eine Reihe an Funktionen (Methoden) & Variablen (Eigenschaften).
// Mit Hilfe dieser Methoden & Eigenschaften können wir mit Strings arbeiten.

// String.prototype => Eine Instanz der Klasse String


////////////////////////////
// String.prototype.length => Länge des Strings als Number
//
console.log("Hallo".length); // 5

string = 'Hallo Welt';
console.log(string.length); // 10


/////////////////////////////
// Klammernotation
// Auf einzelne Buchstaben zugreifen
// (Der erste Buchstabe ist 0)
console.log("Hallo"[0]); // 'H'
console.log("Hallo"[1]); // 'a'
console.log("Hallo"[2]); // 'l'

string[0]; // 'H'


//////////////////////////////
// String.protoype.charAt(index)
// => Buchstaben am angegeben Index zurück geben

string = 'Hallo Welt';
const firstLetter = string.charAt(0);
console.log(firstLetter); // 'H'

console.log(string.charAt(6)); // 'W;


////////////////////////////////
// String.prototype.toUpperCase()
// => String zu Großbuchstaben konvertieren

'hallo'.toUpperCase(); // 'HALLO'

string = "Hallo Welt";
console.log(string.toUpperCase()); // 'HALLO WELT'


/////////////////////////////////
// String.prototype.toLowerCase()
// => String zu Kleinbuchstaben konvertieren

'HALLO'.toLowerCase(); // 'hallo'
'Hallo'.toLowerCase(); // 'hallo'


//////////////////////////////////
//////////////////////////////////
// Teile eines Strings isolieren

//////////////////////////////////
// String.prototype.substring(startIndex, endIndex)
// => Der String zwischen startIndex & endIndex wird als Ergebnis ausgegeben

string = 'Hallo';

// Die ersten drei Buchstaben isolieren
let firstLetters = string.substring(0, 3);
console.log(firstLetters); // 'Hal'

// Den zweiten und dritten Buchstaben isolieren
string.substring(1, 3); // 'al'


// Der originale String bleibt unverändert:
console.log(string); // 'Hallo'

// Wir können auch nur einen Start-Index angeben.
// Dann werden alle Buchstaben ab dem Start-Index bis zum Ende des Strings als Ergebnis ausgegeben:
const lastLetters = string.substring(2);
console.log(lastLetters); // 'llo'



/////////////////////////////////////
// String.prototype.slice(startIndex, endIndex)
// => Der String zwischen startIndex & endIndex wird als Ergebnis ausgegeben
// (slice funktioniert genauso wie die substring-Methode mit dem einzigen Unterschied, dass es  auch möglich ist negative index-Positionen zu nutzen)

string = 'hallo';

string.slice(0, 3); // 'Hal'
string.slice(1, 3); // 'al'

// Vom startIndex bis zum Ende
string.slice(2); // 'llo'

// Negative Index-Positionen werden von hinten gezählt
string.slice(-3); // 'llo'
string.slice(-1); // 'o'


/////////////////////////////////////
// String.prototype.includes(string)
// => Mit includes() können wir testen, ob ein String in einem anderen String enthalten ist
// => Das Ergebnis ist ein Boolean

string = 'Hallo';

string.includes('H'); // true
string.includes('h'); // false
string.includes('llo'); // true

string = 'Lorem ipsum dorim sit.';
string.includes('Lorem'); // true



/////////////////////////////////////
// String.prototype.trim()
// => Entfernt Whitespace (Leerzeichen) an Anfang und Ende des Strings

string = '  Hallo ';

string = string.trim();
console.log(string); // 'Hallo'