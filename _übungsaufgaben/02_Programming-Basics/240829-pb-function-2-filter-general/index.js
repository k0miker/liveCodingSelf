// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
const products = [
  {
    type: "t-shirt",
    color: "white",
    price: 19.99,
  },
  {
    type: "jeans",
    color: "blue",
    price: 39,
  },
  {
    type: "hat",
    color: "red",
    price: 9,
  },
  {
    type: "t-shirt",
    color: "yellow",
    price: 19,
  },
  {
    type: "t-shirt",
    color: "red",
    price: 29,
  },
  {
    type: "jeans",
    color: "blue",
    price: 19,
  },
  {
    type: "shirt",
    color: "yellow",
    price: 19,
  },
  {
    type: "shoes",
    color: "green",
    price: 49,
  },
  {
    type: "sandals",
    color: "brown",
    price: 12,
  },
  {
    type: "jeans",
    color: "grey",
    price: 22,
  },
  {
    type: "hat",
    color: "red",
    price: 19,
  },
];
whatTask(1);

/*
Use filter() so that the variable `hats` contains only 
products of type `hat`
*/

const hats = products.filter((product) => product.type === "hat");
console.log("Hats:", hats);

separator();

whatTask(2);
/*
Use filter() so that the variable `cheaperThan10` contains
only products that cost less than 10
*/

const cheaperThan10 = products.filter((product) => product.price < 10);
console.log("Cheaper than 10:", cheaperThan10);
separator();

whatTask(3);
/*
Use filter() so that the variable `expensiveJeans` contains
only products that have type `jeans` and cost more than 20
*/

const expensiveJeans = products.filter(
  (product) => product.type === "jeans" && product.price > 20
);
console.log("Expensive jeans:", expensiveJeans);

separator();

whatTask(4);
/*
Use filter() so that the variable `redProducts` contains only 
products of with color `red` 
*/
const redProducts = products.filter(
  (product) => product.color.toLowerCase() === "red"
);
console.log("Red products:", redProducts);

separator();

whatTask(5);
/*
Use filter() so that the variable `tShirtsCheaperThan10` contains
only t-shirts that cost less than 10
*/

const tShirtsCheaperThan10 = products.filter(
  (product) => product.price < 10 && product.type === "t-shirt"
);
console.log("t-shirts cheaper than 10:", tShirtsCheaperThan10);

separator();

whatTask(6);
/*
Use filter() so that the variable `sProducts` contains only 
products where the `type` starts with the letter `s`
*/

// const sProducts = products.filter((product) =>
//   product.type.toLowerCase().startsWith("s")
// );
const sProducts = products.filter(
  (product) => product.type[0].toLowerCase() === "s"
);
console.log("Products with s:", sProducts);

separator();

whatTask(7);
/*
Use filter() so that the variable `redHats` contains only 
products where the `type` is `hat` and the color is `red`
*/

const redHats = products.filter(
  (product) => product.type === "hat" && product.color === "red"
);
console.log("Red hats:", redHats);

separator();
