## Aufgaben

### Aufgabe 1

Gegeben sei das folgende JavaScript-Objekt:

```js
const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};
```

- Erstelle eine neue Variable namens `key`
- Weise ihr einen String zu, der einen der Eigenschaftsnamen des oben genannten Objekts enthält
- Verwende die gerade erstellte Variable und die Klammernotation, um den Wert der ausgewählten Eigenschaft auszugeben

#### Bonus:

Was passiert, wenn du einen Eigenschaftsnamen verwendest, der im Objekt nicht existiert? Was ist die Ausgabe?

### Aufgabe 2

Gegeben sei das folgende JavaScript-Objekt und ein Array, das `Eigenschafts`namen aus dem Objekt enthält:

```js
const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const keys = ["type", "color", "brand", "price"];
```

Schreibe eine Schleife, die jeden Eigenschaftsnamen und den zugehörigen Wert aus dem Objekt ausgibt.

Erwartete Ausgabe:

```plaintext
type: t-shirt
color: green
brand: Awesome Tees
price: 19.99
```

### Aufgabe 3

Gegeben sei das folgende JavaScript-Objekt:

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

- Verwende eine Methode, um die Eigenschaftsnamen des Objekts in einem Array zu speichern
- Verwende eine Schleife, um jeden Eigenschaftsnamen und den zugehörigen Wert aus dem Objekt auszugeben

Erwartete Ausgabe:

```plaintext
type: t-shirt
brand: Awesome Tees
price: 19.99
colors: green,yellow,pink
sizes: S,M,L
material: organic cotton
```

### Aufgabe 4

Gegeben sei das folgende JavaScript-Objekt und ein Array von Strings:

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

- Verwende eine Schleife, um jeden Eigenschaftsnamen und den zugehörigen Wert aus dem Objekt auszugeben
- Wenn das Objekt einen bestimmten Schlüssel nicht enthält, gib eine Nachricht aus wie: `Das Produkt hat keine "id" Eigenschaft`

Erwartete Ausgabe:

```
type: t-shirt
brand: Awesome Tees
Das Produkt hat keine "id" Eigenschaft
material: organic cotton
Das Produkt hat keine "details" Eigenschaft
```

### Aufgabe 5

Gegeben sei das folgende JavaScript-Objekt und zwei Strings, die einen neuen Schlüssel und einen neuen Wert darstellen, die dem Objekt hinzugefügt werden sollen:

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

- Füge mit den bereitgestellten Variablen eine neue Eigenschaft `material` mit dem Wert `wool` hinzu
- Speichere alle Schlüssel des Objekts in einem Array namens `keys`
- Verwende eine Schleife, um jeden Schlüssel und seinen zugehörigen Wert in der Konsole auszugeben

Erwartete Ausgabe:

```
type: t-shirt
color: green
brand: Awesome Tees
price: 19.99
material: wool
```