//////////////////////////
// Switch-Statements

// Ein switch-Statement in JavaScript ist eine Kontrollstruktur, die es ermöglicht, einen Ausdruck mit mehreren Fällen zu vergleichen und abhängig von diesem Vergleich verschiedene Codeblöcke auszuführen. Es ist eine Alternative zu mehreren if...else if...else-Anweisungen und kann den Code übersichtlicher und leichter lesbar machen, wenn viele Vergleichsoperationen durchgeführt werden müssen.

let player = 'papier';
let points = 0;

switch (player) {
  case 'stein':
    console.log('Du hast Stein gewählt');
    points += 10;
    break;
  case 'schere':
    console.log('Du hast Schere gewählt');
    points += 20;
    break;
  case 'papier':
    console.log('Du hast Papier gewählt');
    points += 30;
    break;
  default:
    console.log('Du hast etwas anderes gewählt');
    points -= 10;
}

console.log(points);


// Die Alternative als if-Statement
// Das Switch-Statement ist etwas weniger zu schreiben & visuell ordentlicher
if (player === 'stein') {
  console.log('Du hast Stein gewählt');
  points += 10;
} else if (player === 'schere') {
  console.log('Du hast Schere gewählt');
  points += 20;
} else if (player === 'papier') {
  console.log('Du hast Papier gewählt');
  points += 30;
} else {
  console.log('Du hast etwas anderes gewählt');
  points -= 10;
}