// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

// let key = "color";
let key = "name";
console.log(product[key]);

separator();

whatTask(2);
const product2 = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const keys = ["type", "color", "brand", "price"];

for (const key in product2) {
  console.log(`${key}: ${product2[key]}`);
}

// for (const key of keys) {
//   console.log(`${key}: ${product2[key]}`);
// }

// for (const i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   console.log(`${key}: ${product2[key]}`);
// }

// keys.forEach((key) => {
//   console.log(`${key}: ${product[key]}`);
// });

separator();

whatTask(3);
const product3 = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"],
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys2 = Object.keys(product3);

for (let i = 0; i < keys2.length; i++) {
  const key = keys2[i];
  console.log(`${key}: ${product3[key]}`);
}

// console.log(keys2);
// for (const key in product3) {
//   console.log(`${key}: ${product3[key]}`);
// }
separator();

whatTask(4);
const product4 = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"],
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys3 = ["type", "brand", "id", "material", "details"];
for (const key of keys3) {
  if (key in product4) {
    console.log(`${key}: ${product4[key]}`);
  } else {
    console.log(`The product doesn't have a "${key}" property`);
  }
}

// for (let i = 0; i < keys3.length; i++) {
//   const key = keys3[i];
//   if (product4[key]) {
//     console.log(`${key}: ${product4[key]}`);
//   } else {
//     console.log(`The product doesn't have the "${key}" property`);
//   }
// }

space();

for (const key of keys3)
  product4[key]
    ? console.log(`${key}: ${product4[key]}`)
    : console.log(`Das Produkt hat keine ${key} Eigenschaft`);

separator();

whatTask(5);
const product5 = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const newKey = "material";
const newValue = "wool";
product[newKey] = newValue;

const keys4 = [];
for (const key in product5) {
  keys4.push(key);
  console.log(`${key}: ${product5[key]}`);
}
console.log(keys4);

// const keys4 = Object.keys(product);

// for (let i = 0; i < keys4.length; i++) {
//   const key = keys4[i];
//   console.log(`${key}: ${product[key]}`);
// }

separator();

separator();
