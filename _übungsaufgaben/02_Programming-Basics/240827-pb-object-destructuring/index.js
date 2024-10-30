// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
const results = ["Sylvia", "Mike", "Kat", "Jeff", "Cindy", "Brandon", "Dylan"];
const [firstPlace, secondPlace, thirdPlace, ...rest] = results;

console.log("First:", firstPlace); // First: Sylvia
console.log("Second:", secondPlace); // Second: Mike
console.log("Third:", thirdPlace); // Third: Kat
console.log("Rest:", rest); // Rest: [ 'Jeff', 'Cindy', 'Brandon', 'Dylan' ]

separator();

whatTask(2);
const results2 = [
  { firstName: "Sylvia", lastName: "Sound", age: 27 },
  { firstName: "Michael", lastName: "Meln", age: 25 },
  { firstName: "Kat", lastName: "Kramer", age: 29 },
  { firstName: "Jeff", lastName: "James", age: 33 },
  { firstName: "Cindy", lastName: "Clap", age: 31 },
  { firstName: "Brandon", lastName: "Blue", age: 24 },
  { firstName: "Dylan", lastName: "Cat", age: 28 },
];

const [first, second, third, ...rest2] = results2;
// console.log(first);
// console.log(rest2);
console.log(`Winner: ${first.firstName} ${first.lastName}`);
console.log("Winner:", first.firstName, first.lastName);

separator();

whatTask(3);
const ingredients = [
  "pizza dough",
  "tomatoes",
  "mozzarella",
  "mushrooms",
  "onion",
  "pepper",
  "eggplant",
];
// const [firstIngredient, secondIngredient, thirdIngredient, ...toppings] =
//   ingredients;
const [, , , ...toppings] = ingredients;
// console.log(firstIngredient);
console.log("Toppings: ", toppings.join(", "));

separator();

whatTask(4);
const pet = {
  name: "Bob",
  type: "cat",
  color: "orange",
  age: 3,
};
const { type, age } = pet;
// const [, type, , age] = Object.values(pet);
console.log(`Type: ${type}`);
console.log(`Age: ${age}`);

separator();

whatTask(5);
const person = {
  firstName: "Jim",
  lastName: "Saul",
  age: 34,
  profession: "lawyer",
};

// function fullName(person) {
//   const { firstName, lastName } = person;
//   return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

console.log(fullName(person)); // Jim Saul

separator();
