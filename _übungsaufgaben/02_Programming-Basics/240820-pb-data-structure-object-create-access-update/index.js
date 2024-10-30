// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
// change the `read` property from false to true
const book = {
  title: "A Smarter Way to Learn JavaScript",
  author: "Mark Myers",
  price: 19.95,
  read: false,
};
book.read = true;
// book["read"] = true;
console.log(book);

separator();

whatTask(2);
// Increase the `age` by 1:
const person = {
  firstName: "Martha",
  lastName: "Martin",
  age: 27,
};
person.age++;
// person.age = person.age + 1;
// person.age += 1;

console.log(person);

separator();

whatTask(3);
// Apply a 50% discount to discountedPrice
const product = {
  type: "hat",
  color: "green",
  brand: "Dolphin",
  price: 22,
  discountedPrice: 22,
};
product.discountedPrice = product.price * 0.5;
product.discountedPrice = product.price / 2;
console.log(product);
console.log(
  `SALE: the ${product.color} ${product.brand} ${product.type} costs now only ${product.discountedPrice}€ instead of ${product.price}€!`
);

separator();

whatTask(4);
// Add a new property fullName to the object
const person2 = {
  firstName: "Jim",
  lastName: "Jameson",
  age: 37,
};
person2.fullName = person2.firstName + " " + person2.lastName;
// person2.fullName = `${person2.firstName} ${person2.lastName}`;
console.log(person2);

separator();

whatTask(5);
// Capitalise the value of the property `city`
const person3 = {
  firstName: "Sylvia",
  lastName: "Sun",
  city: "london",
};
person3.city = person3.city.charAt(0).toUpperCase() + person3.city.slice(1);
// person3.city = person3.city[0].toUpperCase() + person3.city.slice(1);
console.log(person3);

separator();
