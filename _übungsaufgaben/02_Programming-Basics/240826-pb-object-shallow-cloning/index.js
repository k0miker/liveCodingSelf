// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
const cart = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
];

const hatProduct = {
  type: "hat",
  price: 15,
  color: "pink",
};

// VARIANTE 1
const addProduct = (cart, product) => {
  const updatedCart = [...cart];
  updatedCart.push(product);
  return updatedCart;
};

// VARIANTE 2
// const addProduct = (cart, product) => {
//   const updatedCart = [...cart, product];
//   // updatedCart.push(product);
//   return updatedCart;
// };

// VARIANTE 3
// const addProduct = (cart, product) => [...cart, product];

const updatedCart = addProduct(cart, hatProduct);

console.log(updatedCart);
console.log(cart);

separator();

whatTask(2);
const tasks = [
  {
    task: "clean apartment",
    priority: 5,
  },
  {
    task: "learn objects",
    priority: 2,
  },
  {
    task: "practice JavaScript",
    priority: 1,
  },
];

// VARIANTE 1
const finishTask = (tasks) => {
  const newTasks = [...tasks];
  newTasks.pop();
  return newTasks;
};

// VARIANTE 2
// const finishTask = (tasks) => tasks.slice(0, tasks.length - 1);

console.log(finishTask(tasks));
console.log(tasks);

separator();

whatTask(3);
const person = {
  firstName: "James",
  lastName: "Ensor",
  age: 13,
};

const addFullName = (person) => {
  const newObject = { ...person };
  newObject.fullName = `${newObject.firstName} ${newObject.lastName}`;
  return newObject;
};

console.log(addFullName(person));
console.log(person);

separator();

whatTask(4);

const products = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  },
  {
    type: "jacket",
    price: 25,
    color: "grey",
  },
  {
    type: "shorts",
    price: 19,
    color: "yellow",
  },
  {
    type: "skirt",
    price: 18,
    color: "brown",
  },
  {
    type: "t-shirt",
    price: 5,
    color: "red",
  },
  {
    type: "jeans",
    price: 29,
    color: "black",
  },
];

// VARIANTE 1
// const applyDiscount = (products, discount) => {
//   const discountProducts = [];
//   for (let i = 0; i < products.length; i++) {
//     const discountPreis =
//       products[i].price - (products[i].price * discount) / 100;
//     discountProducts[i] = { ...products[i], price: discountPreis };
//   }
//   return discountProducts;
// };

// VARIANTE 2
const applyDiscount = (products, discount) => {
  const products2 = JSON.parse(JSON.stringify(products));
  for (let i = 0; i < products2.length; i++) {
    products2[i].price -= (products2[i].price / 100) * discount;
  }
  return products2;
};

console.log(applyDiscount(products, 10));
console.log(products);

separator();
