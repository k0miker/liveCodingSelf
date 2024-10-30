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
const productsWithDescription = products;
console.log("Products with description:", productsWithDescription);

