// Globales Hoisting von var-Variablen

// Es wird oft gesagt, dass var-Variablen auch Performance-Einschränkungen nach sich ziehen.
// Das liegt am globalen Hoisting von var-Variablen.

// Beide Variablen sind im globalen Scope definiert.
// Sie befinden sich nicht innerhalb eines Blockes oder einer Funktion.
var foo = 'Foo';
let bar = 'Bar';


// Eine globale var-Variable wird zum window-Objekt hinzugefügt,
console.log(window.foo); // Foo

// Eine globale let-Variable nicht.
console.log(window.bar); // undefined