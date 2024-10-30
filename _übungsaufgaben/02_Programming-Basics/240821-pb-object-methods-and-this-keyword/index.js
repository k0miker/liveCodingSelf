// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
// Target array
const people = [];

// Source data
const firstNames = ["Mark", "Sandra", "Dina", "Mikoel"];
const lastNames = ["Shark", "Mellow", "Saur", "Boomex"];
const ages = [18, 27, 31, 44];
const cities = ["New York", "Berlin", "Barcelona", "Windhoek"];

// Your code here!
for (let i = 0; i < firstNames.length; i++) {
  people.push({
    firstName: firstNames[i],
    lastName: lastNames[i],
    age: ages[i],
    city: cities[i],
    fullName: firstNames[i] + " " + lastNames[i],
    introduce: function () {
      return `Hi my name is ${this.fullName}.I live in ${this.city} an i am ${this.age} years old.`;
    },
  });
}
console.log(people);

separator();

whatTask(2);
const person = {
  firstName: "Tim",
  age: 28,
};

// Your code here!
person.greet = function (greeting) {
  return `${greeting[0].toUpperCase() + greeting.slice(1)}, my name is ${
    this.firstName
  }`;
};

console.log(person.greet("hi")); // Hi, my name is Tim
console.log(person.greet("hey")); // Hey, my name is Tim
console.log(person.greet("hello")); // Hello, my name is Tim

separator();

whatTask(3);
const player1 = {
  name: "Ryu",
  health: 100,
  attackSkill: "Hadouken",
  attackDamage: 25,
};

const player2 = {
  name: "Chun-Li",
  health: 100,
  attackSkill: "Spinning Bird Kick",
  attackDamage: 20,
};

// function attack(player) {
//   player.health -= this.attackDamage;
//   return `${this.name} attacked ${player.name} with a ${this.attackSkill} inflicting ${this.attackDamage} damage. ${player.name} health is now ${player.health}.`;
// }

// player1.attack = attack;
// player2.attack = attack;

// console.log(player1.attack(player2));
// console.log(player2.attack(player1));

separator();

whatTask("BONUS");
// function attack(player) {
//   // Überprüfe, ob der Angreifer oder der Verteidiger bereits besiegt wurde
//   if (this.health <= 0) {
//     return `${this.name} cannot attack because they have no health left.`;
//   }

//   // Überprüfe, ob der Verteidiger bereits besiegt wurde
//   if (player.health <= 0) {
//     return `${player.name} is already defeated.`;
//   }

//   // Führe den Angriff aus
//   player.health -= this.attackDamage;
//   if (player.health < 0) {
//     player.health = 0;
//   }

//   return `${this.name} attacked ${player.name} with a ${this.attackSkill} inflicting ${this.attackDamage} damage. ${player.name}'s health is now ${player.health}.`;
// }

// // Definiere die Funktion zur Überprüfung der Gesundheit
// function isDefeated() {
//   return this.health <= 0;
// }

// // Definiere die Funktion zur Anzeige des Status
// function status() {
//   return `${this.name} - Health: ${this.health}, Attack: ${this.attackSkill} (${this.attackDamage} damage)`;
// }

// // Füge die Funktionen zu den Objekten hinzu
// player1.attack = attack;
// player1.isDefeated = isDefeated;
// player1.status = status;

// player2.attack = attack;
// player2.isDefeated = isDefeated;
// player2.status = status;

// // Beispiel für einen Kampf
// console.log("STATUS");
// console.log(player1.status());
// console.log(player2.status());

// console.log("ATTACK");
// console.log(player1.attack(player2));
// console.log(player2.attack(player1));

// console.log(player1.attack(player2));
// console.log(player2.attack(player1));

// console.log(player1.attack(player2));
// console.log(player2.attack(player1));

// console.log(player1.attack(player2));
// console.log(player2.attack(player1));

// console.log("STATUS");
// console.log(player1.status());
// console.log(player2.status());

separator();
