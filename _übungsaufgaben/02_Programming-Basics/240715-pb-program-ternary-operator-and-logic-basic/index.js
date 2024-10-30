// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
space();
whatTask(1);

let hour = 9;
let action = hour >= 9 ? "It's late, wake up!" : "Go back to bed";

console.log(action);
separator();

whatTask(2);
let cartTotal = 50;

let shippingCosts = cartTotal >= 50 ? 0 : 9.99;

console.log(
  `With a cart of ${cartTotal}€ the shipping costs amount to ${shippingCosts}€`
);
separator();

whatTask(3);
let day = "Saturday";

let mood =
  day === "Saturday" || day === "Sunday" ? "YAY!, it's the weekend" : "work :(";

// if (day === "Sunday" || day === "Saturday") {
//   mood = "YAY!, it's the weekend";
// } else {
//   mood = "work :(";
// }

console.log(mood);
separator();

whatTask(4);
let isBackEndDeveloper = true;
let isFrontEndDeveloper = true;

let isFullStackDeveloper = isBackEndDeveloper && isFrontEndDeveloper;

console.log(
  `Gina ${isFullStackDeveloper ? "is" : "is not"} a full-stack developer`
);
separator();

whatTask(5);
let isEmailCorrect = false;
let isPasswordCorrect = true;

let message =
  isEmailCorrect && isPasswordCorrect
    ? "You logged in successfully!"
    : "The email or the password you typed were not correct. Try again.";

console.log(message);
separator();

whatTask(6);
let isLoggedIn = false;

let message2 = !isLoggedIn ? "Please login before proceeding." : "Welcome!";
// let message3 = isLoggedIn ? "Welcome!" : "Please login before proceeding.";

console.log(message2);
// console.log(message3);
separator();
