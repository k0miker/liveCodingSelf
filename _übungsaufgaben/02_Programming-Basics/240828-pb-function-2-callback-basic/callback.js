// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
function simpleMap(number, callback) {
  let result = callback(number);
  return result;

  // return callback(number);
}

// const simpleMap = (number, callback) => callback(number);

function double(number) {
  return number * 2;
}

console.log(simpleMap(2, double)); // expected output: 4
console.log(simpleMap(3, double)); // expected output: 6
console.log(simpleMap(50, double)); // expected output: 100
console.log(simpleMap(0, double)); // expected output: 0

separator();

whatTask(2);
function simpleMap2(number, callback) {
  let result = callback(number);
  return result;

  // return callback(number);
}

function square(number) {
  return number * number;
}

function triple(number) {
  return number * 3;
}

console.log(simpleMap2(2, double)); // expected output: 4
console.log(simpleMap2(3, square)); // expected output: 9
console.log(simpleMap2(50, triple)); // expected output: 150
console.log(simpleMap2(4, square)); // expected output: 16
separator();

whatTask(3);
function simpleMap3(string, callback) {
  let result = callback(string);
  return result;

  // return callback(number);
}

function greet(string) {
  return "Hey " + string;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
  );
}

console.log(simpleMap3("Mark", greet)); // expected output: "Hey Mark"
console.log(simpleMap3("Lenny", reverse)); // expected output: "ynneL"
console.log(simpleMap3("pizza", capitalizeFirstAndLast)); // expected output: "PizzA"

separator();
