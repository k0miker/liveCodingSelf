// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
space();
whatTask(1);

let myNum = Math.floor(Math.random() * 1000);
console.log(myNum);

// Variante 1 => IF ELSE
if (myNum % 5 === 0 && myNum % 3 === 0) {
  console.log("Durch beides Teilbar."); // FIZZBUZZ
} else if (myNum % 3 === 0) {
  console.log("Durch 3 Teilbar."); // FIZZ
} else if (myNum % 5 === 0) {
  console.log("Druch 5 Teilbar."); // BUZZ
} else {
  console.log(myNum); // myNum
}

const var1 = () => {
  for (let i = 0; i < 10; i++) {
    let myNum = Math.floor(Math.random() * 1000);
    if (myNum % 3 === 0 && myNum % 5 === 0) {
      console.log(`${i + 1}. ${i + 1 < 10 ? " " : ""}Durchgang: Fizzbuzz`);
    } else if (myNum % 3 === 0) {
      console.log(`${i + 1}. ${i + 1 < 10 ? " " : ""}Durchgang: Fizz`);
    } else if (myNum % 5 === 0) {
      console.log(`${i + 1}. ${i + 1 < 10 ? " " : ""}Durchgang: Buzz`);
    } else if (myNum % 3 !== 0 && myNum % 5 !== 0) {
      console.log(`${i + 1}. ${i + 1 < 10 ? " " : ""}Durchgang:`, myNum);
    }
  }
};
// var1();
separator();

// Variante 2 => TERNARY OPERATOR
let result =
  myNum % 3 === 0 && myNum % 5 === 0 // if
    ? "FizzBuzz"
    : myNum % 3 === 0 // if else
    ? "Fizz"
    : myNum % 5 === 0 // if else
    ? "Buzz"
    : myNum; // else
console.log(result);

const var2 = () => {
  for (let i = 0; i < 10; i++) {
    let myNum = Math.floor(Math.random() * 1000);
    myNum % 3 === 0 && myNum % 5 === 0
      ? console.log(`${i + 1}. ${i + 1 < 10 ? " " : ""}Durchgang: Fizzbuzz`)
      : myNum % 3 === 0
      ? console.log(`${i + 1}. ${i + 1 < 10 ? " " : ""}Durchgang: Fizz`)
      : myNum % 5 === 0
      ? console.log(`${i + 1}. ${i + 1 < 10 ? " " : ""}Durchgang: Buzz`)
      : console.log(`${i + 1}. ${i + 1 < 10 ? " " : ""}Durchgang:`, myNum);
  }
};
// var2();

separator();

// Variante 3 => SWITCH CASE
switch (true) {
  case myNum % 3 === 0 && myNum % 5 === 0: // if
    console.log("Durch beides moeglich");
    break;
  case myNum % 3 === 0: // if else
    console.log("ja 3");
    break;
  case myNum % 5 === 0: // if else
    console.log("ja 5");
    break;
  default: // else
    console.log(myNum);
    break;
}

const var3 = () => {
  for (let i = 0; i < 10; i++) {
    let myNum = Math.floor(Math.random() * 1000);
    switch (true) {
      case myNum % 3 === 0 && myNum % 5 === 0:
        console.log("Fizzbuzz");
        break;
      case myNum % 3 === 0:
        console.log("Fizz");
        break;
      case myNum % 5 === 0:
        console.log("Buzz");
        break;
      default:
        console.log(myNum);
    }
  }
};
// var3();
