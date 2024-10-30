// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

function double(num) {
  return num * 2;
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(myMap([1, 2, 3], double)); // expected output: [2, 4, 6]
console.log(myMap(["dish", "fork", "table"], toUpperCase)); // expected output: ["DISH", "FORK", "TABLE"]
console.log(myMap(["pizza", "beer", "fries"], capitalize)); // expected output: ["Pizza", "Beer", "Fries"]

separator();

whatTask(2);
function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function containGreen(str) {
  return str.includes("green");
}

function largerOrEqualTo100(num) {
  return num >= 100;
}

function isEven(num) {
  return num % 2 === 0;
}

console.log(
  myFilter(
    ["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"],
    containGreen
  )
); // expected output: ["green shirt", "green hat"]
console.log(
  myFilter([9.99, 100, 299.99, 27.99, 2.99, 99.99], largerOrEqualTo100)
); // expected output: [100, 299.99]
console.log(myFilter([1, 2, 3, 4, 5, 6], isEven)); // expected output: [2, 4, 6]

separator();
