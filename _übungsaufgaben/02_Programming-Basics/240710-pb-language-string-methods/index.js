// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
let text = "hello world!";
let animal = "ELEPHANT";
let textToUpperCase = text.toUpperCase();
let animalToLowerCase = animal.toLowerCase();
console.log(text);
console.log(textToUpperCase);
console.log(animal);
console.log(animalToLowerCase);
separator();

whatTask(2);
// Startindex INKLUSIVE
// Endindex EXKLUSIVE
// index    0123456789
let date = "21/06/1983";
let a = date.slice(0, 2);
let b = date.slice(3, 5);
let c = date.slice(6, 10);
// let g = date.slice(6);
// let d = date.substring(10, 6);

console.log(`Tag: ${a}`);
console.log(`Monate: ${b}`);
console.log(`Jahr: ${c}`);
// console.log(`Jahr: ${g}`);
// console.log(`Jahr: ${d}`);

separator();

whatTask(3);
let firstName = "jimmy";
let lastName = "cORRigAn";
let city = "LONDON";
let job = "painter";

function capitalize(word) {
  //     word[0]
  // return word.charAt(0).toUpperCase();
  // return word[0];
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
firstName = capitalize(firstName);
lastName = capitalize(lastName);
city = capitalize(city);
job = capitalize(job);

console.log("First name: ", firstName);
console.log("Last name: ", lastName);
console.log("City: ", city);
console.log("Job: ", job);

separator();

whatTask(4);
let word = "JavaScript";
word = word.toLowerCase();
let firstLetters = word.substring(0, 4);
let lastLetters = word.slice(-5);

console.log(
  `Does the word ${word} start with the letter "c"?`,
  word.startsWith("c")
);
console.log(
  `Does the word ${word} start with the letter "j"?`,
  word.startsWith("j")
);

console.log(
  `Does the word ${word} end with the letter "y"?`,
  word.endsWith("y")
);
console.log(
  `Does the word ${word} end with the letter "t"?`,
  word.endsWith("t")
);

console.log(
  `Are the first 4 letters in the word ${word} equal to "abcd"?`,
  firstLetters === "abcd"
);
console.log(
  `Are the first 4 letters in the word ${word} equal to "java"?`,
  firstLetters === "java"
);

console.log(
  `Are the last 5 letters in the word ${word} equal to "cript"?`,
  lastLetters === "cript"
);

separator();

whatTask(5);
let word2 = "fridge";

// console.log(`Does the word ${word2} contain the letter "q"?`);

// console.log(`Does the word ${word2} contain the string "id"?`);

// console.log(`Does the word ${word2} start with a vowel?`);

console.log(
  `Does the word ${word2} contain the letter "q"?`,
  word2.includes("q")
);

console.log(
  `Does the word ${word2} contain the string "id"?`,
  word2.includes("id")
);

console.log(
  `Does the word ${word2} start with a vowel?`,
  "aeiou".includes(word2[0])
);

separator();
