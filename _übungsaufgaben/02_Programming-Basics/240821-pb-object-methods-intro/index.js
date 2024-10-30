// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
// Create some objects (at least 3) for different animals:

// - a cat
// - a dog
// - a fish
// - a bird
// - whatever else you want

// For each animal, add the following properties:

// - `type`: the type of animal
// - `name`: the name of the animal
// - `color`: the color of the animal

const cat = {
  type: "cat",
  name: "Missy",
  color: "blue",
};

const dog = {
  type: "dog",
  name: "Rex",
  color: "brown",
};

const fish = {
  type: "fish",
  name: "Nemo",
  color: "orange",
};

const bird = {
  type: "bird",
  name: "Tweety",
  color: "yellow",
};

separator();

whatTask(2);
// Create a function `describe` and add it as a method to every animal you created.

// The function returns a description of the animal.

// For example:
// Missy is a blue fish
// VARIANTE 1
const describe = function () {
  return `${this.name} ist eine ${this.color}e ${this.type}.`;
};

cat.describe = describe;
dog.describe = describe;
fish.describe = describe;
bird.describe = describe;

console.log(cat.describe());
console.log(dog.describe());
console.log(fish.describe());
console.log(bird.describe());

// VARIANTE 2
// const animals = [
//   {
//     type: "cat",
//     name: "Krümel",
//     color: "white",
//     age: 13,
//     speak() {
//       return "miau";
//     },
//   },
//   {
//     type: "dog",
//     name: "Rantanplan",
//     color: "brown",
//     age: 5,
//     speak() {
//       return "wau wau";
//     },
//   },
//   {
//     type: "fish",
//     name: "Peter",
//     color: "orange",
//     age: 12,
//     speak() {
//       return "blub";
//     },
//   },
//   {
//     type: "bird",
//     name: "Tweety",
//     color: "yellow",
//     speak() {
//       return "tweet tweet";
//     },
//   },
// ];

// animals.forEach((animal) => {
//   animal.describe = function () {
//     return `${this.name} is a ${this.color} ${this.type}`;
//   };
// });
// console.table(animals);
// console.log(animals[0].describe() + " and says " + animals[0].speak());
// console.log(animals[1].describe() + " and says " + animals[1].speak());
// console.log(animals[2].describe() + " and says " + animals[2].speak());

// VARIANTE 3
// const animalArray = [cat, dog, fish, bird];

// // Describe function darf keine Arrow function sein ! ! !
// const describe = function () {
//   return `${this.name} is a ${this.color} ${this.type}`;
// };

// const addFunc = (animals, funcName, func) => {
//   for (const animal of animals) {
//     animal[funcName] = func;
//   }
// };

// addFunc(animalArray, "describe", describe);
// console.log(cat.describe());
// console.log(dog.describe());
// console.log(fish.describe());
// console.log(bird.describe());

separator();

whatTask(3);
// Add a method `speak` to each animal which returns a different
// sound depending on the animal

// For example:
// console.log(dog.speak()); // woof woof
// console.log(cat.speak()); // meow
// console.log(fish.speak()); // blub blub

// VARIANTE 1
// const speak = function () {
//   return "meow";
// };
// const speak1 = function () {
//   return "woof woof";
// };
// const speak2 = function () {
//   return "blub blub";
// };

// cat.speak = speak;
// dog.speak = speak1;
// fish.speak = speak2;

// console.log(cat.speak()); // meow
// console.log(dog.speak()); // woof woof
// console.log(fish.speak()); // blub blub

// VARIANTE 2
const speak = function (speaking) {
  return `${speaking}`;
};

cat.speak = speak;
dog.speak = speak;
fish.speak = speak;
bird.speak = speak;

console.log(cat.speak("meow"));
console.log(dog.speak("woof"));
console.log(fish.speak("blubb"));
console.log(bird.speak("tweet"));

separator();

whatTask(4);
// Create some objects (at least 3) for different persons, specifying:

// - `name`
// - `age`
// - `city`
// - `profession`
const person1 = {
  name: "Steve",
  age: 37,
  city: "Tokyo",
  job: "UX Designer",
};

const person2 = {
  name: "Cindy",
  age: 25,
  city: "Berlin",
  job: "Web Developer",
};

const person3 = {
  name: "John",
  age: 45,
  city: "New York",
  job: "Data Analyst",
};
console.log(person1);
console.log(person2);
console.log(person3);

separator();

whatTask(5);
// Add a method `introduce` to each object that returns a string
// with the person introducing themselves

// For example:

// console.log(person1.introduce()); // My name is Steve, I am
// 37 years old. I live in Tokyo where I work as a UX Designer

const introduce = function () {
  return `me name ist ${this.name} ich bin ${this.age} jahre alt,ich wohne in ${this.city} und ich arbeite als ${this.job}`;
};

person1.introduce = introduce;
person2.introduce = introduce;
person3.introduce = introduce;

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

separator();

whatTask(6);
// Add a method `greet` to the objects from task 5.

// The method should take another person object in input and it
// should return a message of one person greeting the other.

// For example:

// assuming that person2 is Cindy
// console.log(person1.greet(person2)); // Hello Cindy, how are you?

// VARIANTE 1
const greet = function (person) {
  return `Hello ${person.name} how are you`;
};

person1.greet = greet;
person2.greet = greet;
person3.greet = greet;

console.log(person3.greet(person2));
console.log(person2.greet(person1));

// VARIANTE 2
// const persons = [person1, person2, person3];

// // Greet function darf keine Arrow function sein ! ! !
// const greet = function (person = { name: "Guest" }) {
//   return `Hello ${person.name}, how are you?`;
// };

// const addFunc = (array, funcName, func) => {
//   for (const obj of array) {
//     obj[funcName] = func;
//   }
// };

// addFunc(persons, "greet", greet);
// console.log(person1.greet(person2));
// console.log(person2.greet(person3));
// console.log(person3.greet(person1));
// console.log(person1.greet());

separator();
