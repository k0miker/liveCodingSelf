# Map 

You are provided with an array of objects, where each object is a product with a `type`, a `color` and a `price`.

In each task, use the `map()` method to transform each item according to the instructions. 

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

Complete the code below using `map()` so that the variable `productTypes` contains only the type of each product 

```js
const productTypes = products;
console.log("Product types:", productTypes);
```

Expected output:

```plaintext
Product types: [ 't-shirt', 'jeans', 'hat','t-shirt', 't-shirt', 'jeans', 'shirt', 'shoes', 'sandals', 'jeans', 'hat' ] 
```


### Task 2

Complete the code below using `map()` so that the variable `productsWithDescription` contains the same products from the original array where a new property `description` has been added. The property description contains the color and the type of product:

```js
const productsWithDescription = products;
console.log("Products with description:", productsWithDescription);
```

Expected output:
```javascript
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
``` 


### Task 3

Complete the code below using `map()` so that the variable `productColors` contains only the colors of the products

```js
const productColors = products;
console.log("Product colors:", productColors);
```

Expected output:

```plaintext
Colors: [ 'white', 'blue', 'red', 'yellow', 'red', 'blue', 'yellow', 'green', 'brown', 'grey', 'red' ]

```

### Task 4

Complete the code below using `map()` so that the variable `productDescriptions` contains  product descriptions.

A product description is a combination of the product color, the type and the price.

```js
const productDescriptions = products;
console.log("Product descriptions:", productDescriptions);
```

Expected output:

```plaintext
Product descriptions: [
  'white t-shirt, 19.99€',
  'blue jeans, 39€',
  'red hat, 9€',
  ...
];
```

### Task 5

Same as task 4, but capitalise the color and the type of the product in the description strings.

```js
const productDescriptions = products;
console.log("Product descriptions:", productDescriptions);
```

Expected output:

```plaintext
Product descriptions: [
  'White T-shirt, 19.99€',
  'Blue Jeans, 39€',
  'Red Hat, 9€',
  ...
];
```