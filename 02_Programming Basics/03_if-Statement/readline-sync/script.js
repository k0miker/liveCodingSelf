
// Die neue Importschreibweise (wollen wir benutzen)
// Damit diese unterstützt ist, müssen wir `"type": "module",` zur package.json hinzufügen
import readlineSync from 'readline-sync';

// Die alte Importschreibweise (wollen wir nicht mehr benutzen)
// let readlineSync = require('readline-sync');

const name = readlineSync.question('Was ist dein Name?');
console.log(`Dein Name ist ${name}.`);