///////////////////////
// NICHT-Operator (!)

let isLoggedIn = true;
let isPremiumMember = true;

// Der NICHT-Operator kehrt den Wert eines Boolean um:
console.log(!isLoggedIn); // false

isLoggedIn = !isLoggedIn;
console.log(isLoggedIn); // false

isLoggedIn = !isLoggedIn;
console.log(isLoggedIn); // true


// Den NICHT-Operator können wir auch in unseren Konditionen nutzen, um auf `false` hin zu testen:
if (!isLoggedIn) {
  // Wird nur ausgeführt, wenn `isLoggedIn` `false` ist
  console.log('Du bist nicht eingeloggt');
}

if (isLoggedIn && !isPremiumMember) {
  console.log('Hole dir die Premium-Mitgliedschaft')
} else if (isLoggedIn && isPremiumMember) {
  console.log('Glückwunsch, du bist bereits ein Premium-Mitglied.')
}



// Der NICHT-Operator kann auch in Kombination mit runden Klammern genutzt werden.
// Der Wert innerhalb der runden Klammern wird ausgerechnet und das Ergebnis dann umgekehrt
!(4 > 3); // false
!(4 < 3); // true

let zahl = 2;

let hasWon = !(zahl > 3) && zahl !== 1;
// Neue Logik: `true` wenn die Zahl nicht(!) größer als 3 ist & ungleich 1 ist

console.log(hasWon); // true

