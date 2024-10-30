// import readlineSync from 'readline-sync';

///////////////////////////
// Ternäroperator

// Er ermöglicht es, eine Bedingung zu überprüfen und basierend auf dem Ergebnis dieser Überprüfung einen von zwei Werten zuzuweisen.

// Schreibweise: KONDITION ? WERT1 : WERT2;
// -> WERT1, wenn KONDITION true ist
// -> WERT2, wenn KONDITION false ist


let bonusPoints = 0;
let isPremiumMember = true;

bonusPoints += isPremiumMember ? 100 : 10;

console.log(bonusPoints); // 100


// Die Kondition darf so komplex sein, wie ihr möchtet.
// Alles, was innerhalb eines if-Statements geht, geht auch hier.

let message = bonusPoints > 50 && isPremiumMember ? 'Du hast eine Prämie gewonnen' : 'Keine Prämie...';
console.log(message); // 'Du hast eine Prämie gewonnen'



// Beispiel Würfelspiel:

// Math.random() => 0 - 0.9999
// Math.random() * 6 => 0 - 5.9999
// Math.ceil(Math.random() * 6) => 1 - 6

let points = 0;

let dice1 = Math.ceil(Math.random() * 6); // 1 - 6
let dice2 = Math.ceil(Math.random() * 6);

points += dice1 + dice2;

// Bonuspunkte, wenn beide Würfel denselben Wert haben:
points += dice1 === dice2 ? 100 : 0;

// Bonuspunkte, wenn beide Zahlen gerade sind:
points += (dice1 % 2 === 0 && dice2 % 2 === 0) ? 50 : 0;
// Runde Klammern sind in dem Fall optional:
// points += dice1 % 2 === 0 && dice2 % 2 === 0 ? 50 : 0;

console.log(`Du hast ${dice1} & ${dice2} gewürfelt. Punktezahl: ${points}`);




// Weiteres Beispiel: Willkommensnachricht
let userName = '';
let nachricht = `Willkommen ${userName === '' ? 'Gast' : userName}!`;
console.log(nachricht); // Willkommen Gast!