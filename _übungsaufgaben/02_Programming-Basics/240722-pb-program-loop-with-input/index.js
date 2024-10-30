// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
// let max = process.argv[2];
let max = Number(process.argv[2]);
for (let i = 0; i < max; i++) {
  console.log(i);
}

// In diesem Vergleich wird max, obwohl es ein String ist, automatisch in eine Zahl konvertiert, wenn JavaScript versucht, i < max auszuwerten. Das liegt daran, dass der Vergleichsoperator < eine numerische Konvertierung durchführt, wenn die Operanden nicht denselben Typ haben.

separator();

whatTask(2);
// let max2 = Number(process.argv[2]);
// let step = Number(process.argv[3]);
// for (let i = 0; i < max2; i += step) {
//   console.log(i);
// }

separator();

whatTask(3);
// let max3 = Number(process.argv[2]);
// let step = Number(process.argv[3]);
// if (step > max3) {
//   console.log("Attention: the first number must be greater than the second!");
// } else {
//   for (let i = 0; i < max3; i += step) {
//     console.log(i);
//   }
// }

separator();

whatTask(4);
// Version 1
// let max4 = Number(process.argv[2]);
// let step3 = Number(process.argv[3]);

// if (isNaN(max4)) {
//   max4 = 10;
// }
// if (isNaN(step3)) {
//   step3 = 1;
// }
// for (let i = 0; i < max4; i += step3) {
//   console.log(i);
// }

// Version 2
// const max = parseInt(process.argv[2]) || 10;
// const step = parseInt(process.argv[3]) || 1;

// if (step > max) {
//   console.log("Attention: the first number must be greater than the second!");
//   process.exit();
// }

// for (let i = 0; i < max; i += step) {
//   console.log(i);
// }

separator();
