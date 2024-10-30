// I M P O R T:   P A C K A G E S
import readlineSync from "readline-sync";

// C O D E
console.log("Welcome brave adventure!");

const name = readlineSync.question("\nWhat is your name?\n> ");
const type = readlineSync.question(
  `\nAnd tell me, ${name}, are you a warrior or a wizard?\n> `
);
const age = readlineSync.question(
  `\nHow old are you, ${name} the ${type}?\n> `
);
const weapon = readlineSync.question(
  `\nWhich weapon you like to use in a fight?\n> `
);

console.log("\nSo, to recap:");

console.log(`
Name: ${name}
Type: ${type}
Age: ${age}
Weapon: ${weapon}
`);

console.log("\nHave fun on your adventure!");
