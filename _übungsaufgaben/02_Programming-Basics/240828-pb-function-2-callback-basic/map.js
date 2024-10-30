// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(4);
function myMap(items, callback) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(callback(items[i]));
    result.push();
  }

  return result;
}

function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

function greet(string) {
  return "Hey " + string;
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
  );
}

console.log(myMap([1, 2, 3], double)); // expected output: [2, 4, 6]
console.log(myMap([2, 4, 10], square)); // expected output: [4, 16, 100]
console.log(myMap(["pizza", "broccoli", "ice cream"], capitalizeFirstAndLast)); // expected output: ["PizzA", "BroccolI", "Ice creaM"]
console.log(myMap(["Rufus", "Lisa", "July"], greet)); // expected output: ["Hey Rufus", "Hey Lisa", "Hey July"]

separator();

whatTask(5);
function myMap2(items, callback) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(callback(items[i]));
  }
  return result;
}

function add900(number) {
  return number + 900;
}

function half(number) {
  return number / 2;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(myMap2([1, 2, 3], add900)); // expected output: [901, 902, 903]
console.log(myMap2([2, 4, 10], half)); // expected output: [1, 2, 5]
console.log(myMap2(["Rufus", "Lisa", "July"], reverse)); // expected output: ["sufuR", "asiL", "yluJ"]

separator();
