// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
const hour = 10;

if (hour > 8) {
  console.log("Get up");
} else {
  console.log("Go back to sleep");
}

separator();

whatTask(2);
const hasFinishedHomework = true;

if (hasFinishedHomework === false) {
  console.log("Keep studying");
} else {
  console.log("Play videogames");
}

if (hasFinishedHomework === true) {
  console.log("Play videogames");
} else {
  console.log("Keep studying");
}

separator();

whatTask(3);
const cartValue = 50;
const deliveryCost = 9.99;
let total = cartValue;

// total = total + deliveryCost;

// console.log(`The total amount is: ${total}€`);

// if (cartValue < 40) {
//   total = total + deliveryCost;
// } else {
//   total = cartValue;
// }

if (cartValue < 40) {
  total = total + deliveryCost;
}

console.log(`The total amount is: ${total}€`);

separator();

whatTask(4);
const n = 9;

if (n % 3 === 0) {
  console.log(`${n} is divisible by 3`);
} else {
  console.log(`${n} is not divisible by 3`);
}
