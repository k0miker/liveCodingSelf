# Filter

You are provided with an array of objects, where each object is a product with a `type`, a `color` and a `price`.

In each task, use the `filter()` method to get different group of products from the array.

```javascript
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
```

## Tasks

### Task 1

Complete the code below using `filter()` so that the variable `hats` contains only products of type `hat`

```js
const hats = products;
console.log("Hats:", hats);
```

### Task 2

Complete the code below using `filter()` so that the variable `cheaperThan10` contains only products that cost less than 10

```js
const cheaperThan10 = products;
console.log("Cheaper than 10:", cheaperThan10);
```

### Task 3

Complete the code below using `filter()` so that the variable `expensiveJeans` contains only products that have type `jeans` and cost more than 20

```js
const expensiveJeans = products;
console.log("Expensive jeans:", expensiveJeans);
```

### Task 4

Complete the code below using `filter()` so that the variable `redProducts` contains only products of with color `red` 

```js
const redProducts = products;
console.log("Red products:", redProducts);
```

### Task 5

Complete the code below using `filter()` so that the variable `tShirtsCheaperThan10` contains only t-shirts that cost less than 10

```js
const tShirtsCheaperThan10 = products;
console.log("t-shirts cheaper than 10:", tShirtsCheaperThan10);
```

### Task 6

Complete the code below using `filter()` so that the variable `sProducts` contains only products where the `type` starts with the letter `s`

```js
const sProducts = products;
console.log("Products with s:", sProducts);
```

### Task 7
  
Complete the code below using `filter()` so that the variable `redHats` contains only products where the `type` is `hat` and the color is `red`
  
```js
const redHats = products;
console.log("Red hats:", redHats);
```