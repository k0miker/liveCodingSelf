# Bedingte Anweisungen Grundlagen

## Aufgabe 1

Ergänze den untenstehenden Code, um eine der beiden Nachrichten auszugeben:

- wenn die Stunde größer als 8 ist, gib `Get up` aus
- ansonsten gib `Go back to sleep` aus


```javascript
const hour = 10;

if () {
  console.log("Get up");
} else {
  console.log("Go back to sleep");
}
```

## Aufgabe 2

Ergänze den untenstehenden Code so, dass die Nachricht `Play videogames` nur dann ausgegeben wird, wenn der Boolean `hasFinishedHomework` `true` ist


```javascript
const hasFinishedHomework = false;

if (hasFinishedHomework === false) {
  console.log("Keep studying");
}

console.log("Play videogames");
```


## Aufgabe 3

Ergänze den untenstehenden Code so, dass wenn der `cartValue` kleiner als 40 ist, die Lieferkosten zum Gesamtbetrag hinzugefügt werden


```javascript
const cartValue = 50;
const deliveryCost = 9.99;
let total = cartValue;

total = total + deliveryCost

console.log(`The total amount is: ${total}€`);
```

## Aufgabe 4

Ergänze den untenstehenden Code so, dass die richtige Nachricht ausgegeben wird, wenn `n` durch 3 teilbar ist oder nicht

```javascript
const n = 9;

if (n % 3 === ) {
    console.log(`${n} is divisible by 3`);
} else {
    console.log(`${n} is not divisible by 3`);
}
```