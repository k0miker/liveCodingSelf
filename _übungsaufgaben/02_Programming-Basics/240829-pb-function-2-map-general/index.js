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
Use map() so that the variable `productTypes` contains only 
the type of each product 

Expected output:
Product types: [ 't-shirt', 'jeans', 'hat','t-shirt', 't-shirt', 'jeans', 'shirt', 'shoes', 'sandals', 'jeans', 'hat' ] 

*/
const productTypes = products.map((product) => product.type);
console.log("Product types:", productTypes);

separator();

whatTask(2);
/*
Use map() so that the variable `productsWithDescription` contains
the same products from the original array where a new property
`description` has been added. The property description contains
the color and the type of product:

For example:
[
  {
 type: "t-shirt",
 color: "white",
 price: 19.99,
 description: "white t-shirt"
 },
 {
   type: "jeans",
   color: "blue",
   price: 39,
   description: "blue jeans"
 },
 ...
 ]
*/
// const productsWithDescription = products.map((product) => {
//   return {
//     ...product,
//     description: `${product.color} ${product.type}`,
//   };
// });

const productsWithDescription = products.map((product) => ({
  ...product,
  descripton: `${product.color} ${product.type}`,
}));
console.log("Products with description:", productsWithDescription);

separator();

whatTask(3);
/*
Use map() so that the variable `productColors` contains
only the colors of the products

Expected output:
Colors: [ 'white', 'blue', 'red', 'yellow', 'red', 'blue', 'yellow', 'green', 'brown', 'grey', 'red' ]
*/

const productColors = products.map((product) => product.color);
console.log("Product colors:", productColors);

separator();

whatTask(4);
/*
Use map() so that the variable `productDescriptions` contains  
product descriptions.
 
A product description is a combination of the product color, the type and the price.
 
Expected output:
 
Product descriptions: [
  'white t-shirt, 19.99€',
  'blue jeans, 39€',
  'red hat, 9€',
  ...
*/

const productDescriptions2 = products.map((product) => {
  return `${product.color} ${product.type}, ${product.price}€`;
});
console.log("Product descriptions:", productDescriptions2);

separator();

whatTask(5);
/*
Same as task 4, but capitalise the color and the type 
of the product in the description strings.

Expected output:

Product descriptions: [
  'White T-shirt, 19.99€',
  'Blue Jeans, 39€',
  'Red Hat, 9€',
  ...
  ];

*/
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const productDescriptions = products.map((product) => {
  const capitalizedType = capitalize(product.type);
  const capitalizedColor = capitalize(product.color);
  return `${capitalizedColor} ${capitalizedType}, ${product.price}€`;
});

// const productDescriptions = products.map();
// console.log("Product descriptions:", productDescriptions);

// const productDescriptions = products.map(
//   (product) =>
//     `${product.color.charAt(0).toUpperCase() + product.color.slice(1)} ${
//       product.type.charAt(0).toUpperCase() + product.type.slice(1)
//     }, ${product.price}€`
//   );

console.log("Product descriptions:", productDescriptions);
separator();
