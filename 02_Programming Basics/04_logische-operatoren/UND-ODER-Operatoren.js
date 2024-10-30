import readlineSync from 'readline-sync';

////////////////////////
// ODER - Operator

// true -> Sobald eine Kondition true ist
// false -> Sobald alle Konditionen false sind

let zahl = 3;

if (zahl % 2 === 0 || zahl >= 3) {
  console.log('Zahl ist gerade oder größer gleich 3');
} else {
  console.log('Zahl ist nicht gerade & kleiner als 3');
}


////////////////////////
// UND - Operator

// true -> Sobald alle Konditionen true sind
// false -> Sobald eine Kondition false ist

zahl = 3;

if (zahl % 2 === 0 && zahl >= 3) {
  console.log('Zahl ist gerade und größer gleich 3');
}



// Es können so viele Checks miteinander kombiniert werden wie wir möchten.
// Die Logik ist immer gleich.

// Beispiel: Schere, Stein, Papier

// let player = 'schere'; // 'schere', 'stein' oder 'papier'

// Schritt 1: Eingabe erhalten

let player1 = readlineSync.question('Spieler 1: Schere, Stein oder Papier? ');
let player2 = readlineSync.question('Spieler 2: Schere, Stein oder Papier? ');
console.log(`Spieler 1 hat ${player1} gewählt`);
console.log(`Spieler 2 hat ${player2} gewählt`);


// Schritt 2: Eingabe verifizieren

// Damit die Eingabe unabhängig von Groß- und Kleinschreibung funktioniert:
player1 = player1.toLowerCase();
player2 = player2.toLowerCase();

if (player1 === 'schere' || player1 === 'stein' || player1 === 'papier') {
  console.log('Die Eingabe von Spieler 1 ist valide.');
} else {
  console.log('Fehler: Die Eingabe von Spieler 1 ist nicht valide.');
}

if (player2 === 'schere' || player2 === 'stein' || player2 === 'papier') {
  console.log('Die Eingabe von Spieler 2 ist valide.');
} else {
  console.log('Fehler: Die Eingabe von Spieler 2 ist nicht valide.');
}


// Schritt 3: Spiel-Logik

// Was ist die Logik?
// * Stein schlägt Schere
// * Schere schlägt Papier
// * Papier schlägt Stein
// * Wenn beide gleich sind, dann unentschieden

// Wenn beide gleich sind, dann unentschieden
if (player1 === player2) {
  console.log('Unentschieden, beide Spieler haben dasselbe gewählt');
}

// Stein schlägt Schere
if (player1 === 'stein' && player2 === 'schere') {
  console.log('Stein schlägt Schere: Spieler 1 hat gewonnen');
} else if (player1 === 'schere' && player2 === 'stein') {
  console.log('Stein schlägt Schere: Spieler 2 hat gewonnen');
}

// So können wir auch nach weiteren Konditionen testen...

// Alternative: Verschachtelte if Statements
if (player1 === 'schere') {
  if (player2 === 'stein') {
    console.log(`Spieler 2 hat gewonnen`);
  } else if (player2 === 'papier') {
    console.log(`Spieler 2 hat gewonnen`);
  } else {
    console.log(`Unentschieden`);
  }
}


// Alternative: Kürzere Version durch Kombination mehrere Konditionen
// -> Die Konditionen innerhalb der Klammern `( ... )` werden zuerst ausgeführt:
if (
    (player1 === "schere" && player2 === "stein") || 
    (player1 === "stein" && player2 === "papier") || 
    (player1 === "papier" && player2 === "schere")
  ) {
  console.log("Spieler 2 gewinnt");
} else if (
  (player2 === "schere" && player1 === "stein") || 
  (player2 === "stein" && player1 === "papier") || 
  (player2 === "papier" && player1 === "schere")
) {
  console.log("Spieler 1 gewinnt");
} else {
  console.log("Unentschieden");
}




//////////////////////////////////
// Kurzer Ausflug zu Funktionen

function getResult(player1, player2) {
  if (player1 === player2) {
    console.log('Unentschieden');
  }

  // ....
}

getResult(player1, player2);