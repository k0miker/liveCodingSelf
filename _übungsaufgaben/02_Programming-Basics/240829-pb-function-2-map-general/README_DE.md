# Map 

Dir wird ein Array von Objekten zur Verfügung gestellt, bei dem jedes Objekt ein Produkt mit einem `type` (Typ), einer `color` (Farbe) und einem `price` (Preis) ist.

Verwende in jeder Aufgabe die `map()` Methode, um jedes Element gemäß den Anweisungen zu transformieren. 

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

## Aufgaben

### Aufgabe 1

Ergänze den untenstehenden Code mit `map()`, sodass die Variable `productTypes` nur den Typ jedes Produkts enthält 

```js
const productTypes = products;
console.log("Produkttypen:", productTypes);
```

Erwartete Ausgabe:

```plaintext
Produkttypen: [ 't-shirt', 'jeans', 'hat','t-shirt', 't-shirt', 'jeans', 'shirt', 'shoes', 'sandals', 'jeans', 'hat' ] 
```


### Aufgabe 2

Ergänze den untenstehenden Code mit `map()`, sodass die Variable `productsWithDescription` die gleichen Produkte aus dem ursprünglichen Array enthält, wobei eine neue Eigenschaft `description` (Beschreibung) hinzugefügt wurde. Die Eigenschaft description enthält die Farbe und den Typ des Produkts:

```js
const productsWithDescription = products;
console.log("Produkte mit Beschreibung:", productsWithDescription);
```

Erwartete Ausgabe:
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


### Aufgabe 3

Ergänze den untenstehenden Code mit `map()`, sodass die Variable `productColors` nur die Farben der Produkte enthält

```js
const productColors = products;
console.log("Produktfarben:", productColors);
```

Erwartete Ausgabe:

```plaintext
Farben: [ 'white', 'blue', 'red', 'yellow', 'red', 'blue', 'yellow', 'green', 'brown', 'grey', 'red' ]

```

### Aufgabe 4

Ergänze den untenstehenden Code mit `map()`, sodass die Variable `productDescriptions` Produktbeschreibungen enthält.

Eine Produktbeschreibung ist eine Kombination aus der Produktfarbe, dem Typ und dem Preis.

```js
const productDescriptions = products;
console.log("Produktbeschreibungen:", productDescriptions);
```

Erwartete Ausgabe:

```plaintext
Produktbeschreibungen: [
  'white t-shirt, 19.99€',
  'blue jeans, 39€',
  'red hat, 9€',
  ...
];
```

### Aufgabe 5

Gleich wie Aufgabe 4, aber schreibe die Farbe und den Typ des Produkts in den Beschreibungsstrings groß.

```js
const productDescriptions = products;
console.log("Produktbeschreibungen:", productDescriptions);
```

Erwartete Ausgabe:

```plaintext
Produktbeschreibungen: [
  'White T-shirt, 19.99€',
  'Blue Jeans, 39€',
  'Red Hat, 9€',
  ...
];
```
