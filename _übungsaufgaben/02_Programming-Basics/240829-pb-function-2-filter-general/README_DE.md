# Filter

Dir wird ein Array von Objekten zur Verfügung gestellt, bei dem jedes Objekt ein Produkt mit einem `type` (Typ), einer `color` (Farbe) und einem `price` (Preis) ist.

Verwende in jeder Aufgabe die `filter()` Methode, um verschiedene Produktgruppen aus dem Array zu erhalten.

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

Ergänze den untenstehenden Code mit `filter()`, sodass die Variable `hats` nur Produkte vom Typ `hat` enthält

```js
const hats = products;
console.log("Hüte:", hats);
```

### Aufgabe 2

Ergänze den untenstehenden Code mit `filter()`, sodass die Variable `cheaperThan10` nur Produkte enthält, die weniger als 10 kosten

```js
const cheaperThan10 = products;
console.log("Günstiger als 10:", cheaperThan10);
```

### Aufgabe 3

Ergänze den untenstehenden Code mit `filter()`, sodass die Variable `expensiveJeans` nur Produkte enthält, die vom Typ `jeans` sind und mehr als 20 kosten

```js
const expensiveJeans = products;
console.log("Teure Jeans:", expensiveJeans);
```

### Aufgabe 4

Ergänze den untenstehenden Code mit `filter()`, sodass die Variable `redProducts` nur Produkte enthält, die die Farbe `red` haben 

```js
const redProducts = products;
console.log("Rote Produkte:", redProducts);
```

### Aufgabe 5

Ergänze den untenstehenden Code mit `filter()`, sodass die Variable `tShirtsCheaperThan10` nur T-Shirts enthält, die weniger als 10 kosten

```js
const tShirtsCheaperThan10 = products;
console.log("T-Shirts günstiger als 10:", tShirtsCheaperThan10);
```

### Aufgabe 6

Ergänze den untenstehenden Code mit `filter()`, sodass die Variable `sProducts` nur Produkte enthält, bei denen der `type` mit dem Buchstaben `s` beginnt

```js
const sProducts = products;
console.log("Produkte mit s:", sProducts);
```

### Aufgabe 7
  
Ergänze den untenstehenden Code mit `filter()`, sodass die Variable `redHats` nur Produkte enthält, bei denen der `type` `hat` ist und die Farbe `red` ist
  
```js
const redHats = products;
console.log("Rote Hüte:", redHats);
```
