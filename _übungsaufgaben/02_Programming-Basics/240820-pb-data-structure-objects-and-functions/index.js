// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
const user1 = {
  firstName: "Mark",
  lastName: "Maxwell",
  age: 32,
  email: `mark@email.com`,
};
const user2 = {
  firstName: "Sally",
  lastName: "Samson",
  age: 24,
  email: `sally@email.com`,
};
const user3 = {
  firstName: "Jenny",
  lastName: "Jay",
  age: 38,
  email: `jenny@email.com`,
};

// Task 1.1
whatTask(1.1);
user1.city = "Bonn";
user2.city = "New York";
user3.city = "Berlin";

console.log(user1);
console.log(user2);
console.log(user3);

separator();

// Task 1.2
whatTask(1.2);

function describe(user) {
  return `${user.firstName} ${user.lastName} is ${user.age} years old and lives in ${user.city}. `;
}
console.log(describe(user1));
console.log(describe(user2));
console.log(describe(user3));

separator();

// Task 1.3
whatTask(1.3);
user1.job = "Fensterputzer";
user2.job = "Verkäufer";

// function showJob(user) {
//   if (user.job) {
//     return `${user.firstName} arbeitet als ${user.job}.`;
//   } else {
//     return `${user.firstName} ist arbeitslos.`;
//   }
// }

function showJob(object) {
  return object.job
    ? `${object.firstName} works as a ${object.job}.`
    : `${object.firstName} is currently unemployed.`;
}

console.log(showJob(user1));
console.log(showJob(user2));
console.log(showJob(user3));

separator();

// Task 2
whatTask(2);

// const vehicle1 = {
//   type: "car",
//   color: "blue",
//   brand: "BMW",
//   mileage: 45000 + " km",
// };
// const vehicle2 = {
//   type: "motorcycle",
//   color: "red",
//   brand: "Honda",
//   mileage: 200000 + " km",
// };
// const vehicle3 = {
//   type: "car",
//   color: "black",
//   brand: "Mercedes",
//   mileage: 67000 + " km",
// };

const vehicle1 = {
  type: "car",
  color: "blue",
  brand: "BMW",
  mileage: 45000,
};
const vehicle2 = {
  type: "motorcycle",
  color: "red",
  brand: "Honda",
  mileage: 200000,
};
const vehicle3 = {
  type: "car",
  color: "black",
  brand: "Mercedes",
  mileage: 67000,
};

console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);

separator();

// Task 2.1
whatTask(2.1);

// VARIANTE COLIN
// function needsRevision(object) {
//   return parseFloat(object.mileage) > 60000
//     ? true + ` Yes, the ${object.brand} needs a revision!`
//     : false + " No, the " + object.brand + " is fine!";
// }

// console.log(
//   `Does the "${
//     vehicle1.color + " " + vehicle1.brand + " " + vehicle1.type
//   }" need revision?`,
//   needsRevision(vehicle1)
// );
// console.log(
//   `Does the "${
//     vehicle2.color + " " + vehicle2.brand + " " + vehicle2.type
//   }" need revision?`,
//   needsRevision(vehicle2)
// );
// console.log(
//   `Does the "${
//     vehicle3.color + " " + vehicle3.brand + " " + vehicle3.type
//   }" need revision?`,
//   needsRevision(vehicle3)
// );

// VARIANTE TOBIAS
// function needsRevision(vehicle) {
//   if (vehicle.mileage > 60000) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// VARIANTE ANJA
function needsRevision(vehicle) {
  return vehicle["mileage"] > 60000;
}

console.log(`Does vehicle1 need revision?`, needsRevision(vehicle1));
console.log(`Does vehicle2 need revision?`, needsRevision(vehicle2));
console.log(`Does vehicle3 need revision?`, needsRevision(vehicle3));
