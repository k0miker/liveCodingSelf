// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
let date = "21/07/1993";
let datum = date.split("/");

console.log(datum);

// let Day = date.slice(0, 2);
// let Month = date.slice(3, 5);
// let Year = date.slice(6);

let Day = datum[0];
let Month = datum[1];
let Year = datum[2];

// console.log(`Tag: ${Day}`);
// console.log(`Monat: ${Month}`);
// console.log(`Jahr: ${Year}`);

console.log(`
Day: ${Day} 
Month: ${Month} 
Year: ${Year}
  `);

separator();

whatTask(2);
const clothes = ["t-shirt", "socks", "jeans", "shoes", "hat"];
const packingList = `Packing list: ${clothes.join(", ")}`;
// let packingList = clothes.join(", ");
console.log(packingList);

separator();

whatTask(3);
const booksToRead = [
  "Heartstopper",
  "Paper Girls",
  "Tomorrow, and Tomorrow, and Tomorrow",
  "Ghost World",
  "Normal People",
  "One Piece vol. 102",
  "The Hitchhiker's Guide to the Galaxy",
  "This One Summer",
];

// let toRead = booksToRead.length;
// console.log(`Ìch habe ${toRead} Bücher zu lesen`);
// let letztesBuch = booksToRead.pop();
// console.log(`Ìch fange an mit: "${letztesBuch}"`);

// // Durchgang 1
// toRead = booksToRead.length;
// console.log(
//   `Ìch habe "${letztesBuch}" fertig gelesen. Jetzt habe ich  ${toRead} Bücher zu lesen.`
// );
// letztesBuch = booksToRead.pop();
// console.log(`Das nächste ist: "${letztesBuch}" `);

// // Durchgang 2
// toRead = booksToRead.length;
// console.log(
//   `Ìch habe "${letztesBuch}" fertig gelesen. Jetzt habe ich  ${toRead} Bücher zu lesen.`
// );
// letztesBuch = booksToRead.pop();
// console.log(`Das nächste ist: "${letztesBuch}" `);

// // Durchgang 3
// toRead = booksToRead.length;
// console.log(
//   `Ìch habe "${letztesBuch}" fertig gelesen. Jetzt habe ich  ${toRead} Bücher zu lesen.`
// );
// letztesBuch = booksToRead.pop();
// console.log(`Das nächste ist: "${letztesBuch}" `);

separator();

whatTask(4);
const shoppingCart = [];
shoppingCart.push("Blue jeans");
// shoppingCart.push("Pair of pink socks");
// shoppingCart.push("Pair of pink socks");
// shoppingCart.push("Pair of pink socks");
shoppingCart.push(
  "Pair of pink socks",
  "Pair of pink socks",
  "Pair of pink socks"
);
shoppingCart.push("Red t-shirt");
shoppingCart.push("Grey hat");
shoppingCart.push("Black t-shirt", "Black t-shirt", "Black t-shirt");

shoppingCart.splice(shoppingCart.length - 3, 3);

console.log(shoppingCart.length);
if (shoppingCart.includes("Sunglasses")) {
  console.log("There are already sunglasses in the cart");
} else {
  shoppingCart.push("Sunglasses");
}

shoppingCart[0] = "Jogging pants";

let last3Items = shoppingCart.slice(shoppingCart.length - 3).join(", ");
console.log(`Last 3 items: ${last3Items}`);

console.log(shoppingCart.length);

if (shoppingCart.length < 10) {
  shoppingCart.push("Green hoodie");
} else {
  console.log(
    `With ${shoppingCart.length} items in your cart, you have enough stuff already.`
  );
}
console.log(shoppingCart);

console.log(`
\nCart:\n  
${shoppingCart.join("\n")}
`);

separator();
