// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(6);
function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

console.log(myFilter([1, 2, 3, 4, 5], isEven)); // expected output: [2, 4]
console.log(myFilter([1, 2, 3, 4, 5], isOdd)); // expected output: [1, 3, 5]
console.log(
  myFilter(["pizza", "pasta", "ice cream", "potato", "broccoli"], (item) =>
    item.startsWith("p")
  )
); // expected output: ["pizza, "pasta", "potato"]
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (number) => number > 5)); // expected output: [6, 7, 8, 9, 10]

separator();

whatTask(7);
function myFilter2(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function longerThan5(string) {
  return string.length > 5;
}

console.log(myFilter2(["house", "dog", "banana", "watermelon"], longerThan5)); // expected output: ["banana", "watermelon"]
console.log(
  myFilter2(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    (number) => number % 3 === 0
  )
); // expected output: [3, 6, 9, 12]

separator();

whatTask(8);
function myFilter3(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function endsWithP(string) {
  return string[string.length - 1].toLowerCase() === "p";
}

console.log(
  myFilter3(["grasp", "clash", "laptop", "mouse", "dish"], endsWithP)
); // expected output: ["grasp", "laptop"]

console.log(
  myFilter3(["a", "b", "c", "d", "e", "f", "g", "h", "i"], (letter) =>
    "aeiou".includes(letter.toLowerCase())
  )
); // expected output: ["a", "e", "i"]

separator();
