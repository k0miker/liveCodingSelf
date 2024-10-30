// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
space();
whatTask(1);
let userName = "jimmy";

// if (userName === "") {
// if (userName) {
if (userName.length === 0) {
  console.log(`Hello guest`);
} else {
  console.log(`Welcome back ${userName}`);
}

separator();

whatTask(2);
let person1Name = "Finn";
let person1Age = 18;
let person2Name = "Jess";
let person2Age = 21;

if (person1Age < person2Age) {
  console.log(person1Name, "ist die jüngste Person");
} else {
  console.log(person2Name, "ist die jüngste Person");
}

// if (person1Age < person2Age) {
//   console.log(`${person1Name} is the youngest person.`);
// } else {
//   console.log(`${person2Name} is the youngest person.`);
// }

separator();

whatTask(3);
let mode = "light";
let backgroundColor;
let textColor;

if (mode === "dark") {
  backgroundColor = "black";
  textColor = "white";
} else if (mode === "light") {
  backgroundColor = "white";
  textColor = "black";
} else {
  console.log(`The mode is not valid`);
}
console.log(`Aktueller Modus: ${mode}`);
console.log(`Hintergrundfarbe: ${backgroundColor}`);
console.log(`Textfarbe: ${textColor}`);

separator();

whatTask(4);
let isMilkAvailable = true;
let isBreadAvailable = true;
let isAppleAvailable = true;

// VERSION Peter => Comma Operator
// if (isBreadAvailable === true) {
//   console.log("Iss ein Sandwich");
// } else if ((isBreadAvailable === false, isMilkAvailable === true)) {
//   console.log("Ein bisschen Milch mit Müsli wird ok sein");
// } else if (
//   (isBreadAvailable === false,
//   isMilkAvailable === false,
//   isAppleAvailable === true)
// ) {
//   console.log("ok ich denke, ich werde einfach einen Apfel essen");
// } else {
//   console.log("ich werde draußen frühstücken");
// }

if (isBreadAvailable === true) {
  console.log("Iss ein Sandwich");
} else if (isMilkAvailable === true) {
  console.log("Ein bisschen Milch mit Müsli wird ok sein");
} else if (isAppleAvailable === true) {
  console.log("ok ich denke, ich werde einfach einen Apfel essen");
} else {
  console.log("ich werde draußen frühstücken");
}

separator();

whatTask(5);
let n = 5;

if (n % 2 === 0) console.log("The number is even.");
else console.log("The number is odd.");

separator();

whatTask(6);
let x = 1;
let y = 2;

if (x > y) {
  console.log("x ist größer als y");
} else if (x < y) {
  console.log("y ist größer als x");
} else {
  console.log("x und y sind gleich");
}

separator();

whatTask(7);
// it is longer than 8 characters               //
// the first and last character are different   //
// it is different from "12345678"              //
// the first character is not an empty space    //
// the last character is not a !                //

let password = "test12345";
let valid = false;
if (
  password.length > 8 &&
  password[0] !== password.slice(-1) &&
  password !== "12345678" &&
  password[0] !== " " &&
  password.slice(-1) !== "!"
) {
  valid = true;
}
console.log(`Is the password ${password} valid? ${valid}`);

function validatePassword(password) {
  if (password.length <= 8) {
    return "Password is invalid: it should be longer than 8 characters.";
  }

  if (password[0] === password[password.length - 1]) {
    return "Password is invalid: the first and last character should be different.";
  }

  if (password === "12345678") {
    return "Password is invalid: it should not be '12345678'.";
  }

  if (password[0] === " ") {
    return "Password is invalid: the first character should not be an empty space.";
  }

  if (password[password.length - 1] === "!") {
    return "Password is invalid: the last character should not be '!'.";
  }

  return "Password is valid.";
}
console.log(validatePassword(password));
