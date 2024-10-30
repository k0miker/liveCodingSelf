// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import readlineSync from "readline-sync";

// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
// Variante Colin
// let alter = readlineSync.question("Wie alt bist du? ");
// let jahr = readlineSync.question("welches Jahr haben wir? ");

// let geburtsJahr = jahr - alter;
// if (isNaN(geburtsJahr)) {
//   // if (isNaN(alter) || isNaN(jahr)) {
//   console.log(
//     "FEHLER: Es tut mir leid, aber es scheint, dass einer der von dir eingegebenen Werte keine Zahl war."
//   );
// } else {
//   console.log(`Du bist im Jahr ${geburtsJahr} geboren`);
// }

// Variante Peter
// let age = readlineSync.questionInt("Bitte geben Sie Ihr Alter ein: ");
// let year = readlineSync.questionInt("Bitte geben Sie das aktuell Jahr ein: ");

// let birthYear =
//   !isNaN(year) && !isNaN(age)
//     ? `Du bist im Jahre ${year - age} geboren!`
//     : "Du musst Ganzzahlen eingeben !";
// console.log(birthYear);

separator();

whatTask(1.1);

separator();

whatTask(2);
// Variante Jörg
// let pin = readlineSync.question("die vierstellige PIN bitte: ");

// !isNaN(pin) && pin.length === 4
//   ? console.log("Danke. Die von dir gewählte PIN wurde korrekt gespeichert.")
//   : console.log("ERROR: the pin you entered is not valid");

// Variante Jeff

// if (pin.length !== 4 || isNaN(pin)) {
//   console.log("ERROR: the pin you entered is not valid!");
// } else {
//   console.log("Thank you. The pin you chose was saved correctly.");
// }

separator();

whatTask("BONUS");

// Variante Colin
// let pin = readlineSync.question("Bitte geben Sie eine PIN ein: ");

// const check = /^[0-9]{4}$/;
// if (check.test(pin)) {
//   console.log(pin);
//   console.log("Danke. Die von dir gewählte PIN wurde korrekt gespeichert.");
// } else {
//   console.log(" FEHLER: Die von dir eingegebene PIN ist nicht gültig");
// }

// separator();

// let invalidChars = pin.split("").filter((char) => !/[0-9]/.test(char));

let inputPin = readlineSync.question(`
= = = = =  P   I   N   = = = = =

  Please set your new PIN.

  The rules for a new PIN are:
  - it must contain only numbers
    (digits from 0 to 9)
  - it should be 4 digits long

= = = = =  P   I   N   = = = = =

Enter your new PIN: `);
let pin = Number(inputPin);
console.log(inputPin);

// Variante If Else
// if (isNaN(inputPin)) {
//   console.log("FEHLER: Die eingegebene PIN enthält ungültige Zeichen.");
// } else if (inputPin.length !== 4) {
//   console.log("FEHLER: Die eingegebene PIN muss genau 4 Ziffern lang sein.");
// } else if (
//   inputPin.includes("-") ||
//   inputPin.includes("+") ||
//   inputPin.includes(".")
// ) {
//   console.log(
//     "FEHLER: Die eingegebene PIN darf keine Sonderzeichen enthalten."
//   );
// } else {
//   console.log(
//     "Vielen Dank. Die von Ihnen gewählte PIN wurde erfolgreich gespeichert."
//   );
// }

// Variante Ternary 1
// const message =
//   Number.isNaN(pin) ||
//   inputPin.length !== 4 ||
//   inputPin.includes("-") ||
//   inputPin.includes("+") ||
//   inputPin.includes(".")
//     ? "ERROR: the pin you entered is not valid."
//     : "Thank you. The pin you chose was saved correctly.";

// console.log(message);

// Variante Ternary 2
// const pinPattern = /^[0-9]{4}$/;
// let message = pinPattern.test(pin)
//   ? "Thank you. The pin you chose was saved correctly."
//   : "ERROR: the pin you entered is not valid!";
// console.log(message);
