## Tasks

### Task 1

Given the JavaScript object below:

```js
const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};
```

- Create a new variable called `key`
- assign a string to it, with one of the property names of the object above
- use the variable you just created and the bracket notation to print the value of the property you chose

#### Bonus:

What happens if you use a property name that doesn't exist in the object? What is the output?

### Task 2

Given the JavaScript object below and an array containing `property` names from the object:

```js
const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const keys = ["type", "color", "brand", "price"];
```

Write a loop to print each property name and the relative value from the object.

Expected output:

```plaintext
type: t-shirt
color: green
brand: Awesome Tees
price: 19.99
```

### Task 3

Given the JavaScript object below:

```js
const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"], 
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};
```

- use a method to save the object property names into an array
- use a loop to print each property name and the relative value from the object

Expected output:

```plaintext
type: t-shirt
brand: Awesome Tees
price: 19.99
colors: green,yellow,pink
sizes: S,M,L
material: organic cotton
```

### Task 4

Given the JavaScript object below and an array of strings:

```js
const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"], 
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys = ["type", "brand", "id", "material", "details"];
```

- use a loop to print each property name and the relative value from the object
- if the object doesn't contain a certain key, print a message like: `The product doesn't have the "id" property`

Expected output:

```
type: t-shirt
brand: Awesome Tees
The product doesn't have a "id" property
material: organic cotton
The product doesn't have a "details" property
```

### Task 5

Given the JavaScript object below and two strings representing a new key and a new value to add to the object:

```js
const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const newKey = "material";
const newValue = "wool";
```

- using the variables provided, add a new property `material` with value `wool` 
- save all the keys of the object in an array called `keys`
- use a loop to print each key and its relative value to the console

Expected output:

```
type: t-shirt
color: green
brand: Awesome Tees
price: 19.99
material: wool
```