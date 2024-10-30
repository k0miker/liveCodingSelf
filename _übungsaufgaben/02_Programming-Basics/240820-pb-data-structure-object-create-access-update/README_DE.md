# Objekt: erstellen, zugreifen, aktualisieren

Diese Übung soll dir helfen, die grundlegenden Operationen, die wir mit Objekten durchführen, richtig zu verstehen und zu üben, typischerweise:

- Erstellen von Objekten
- Zugriff auf ihre Eigenschaften, Lesen
- Aktualisieren, Ändern, der Werte dieser Eigenschaften

## Aufgabe 1

Ändere bei dem untenstehenden Objekt den Wert der Eigenschaft `read` von `false` auf `true`. Gib dann das gesamte Objekt in der Konsole aus.

```javascript
const book = {
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: false
};
```

Erwartete Ausgabe:

```plaintext
{
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: true
}
```

## Aufgabe 2

Erhöhe bei dem untenstehenden Objekt die Eigenschaft `age` um 1. Gib dann das gesamte Objekt in der Konsole aus.

```javascript
const person = {
    firstName: "Martha",
    lastName: "Martin",
    age: 27
};
```

Erwartete Ausgabe:
```javascript
{
    firstName: "Martha",
    lastName: "Martin",
    age: 28
};
```

## Aufgabe 3

Ändere bei dem untenstehenden Objekt den Wert der Eigenschaft `discountedPrice`, so dass er die Hälfte der Eigenschaft `price` ist. 

Gib dann eine Nachricht in der Konsole aus, wie unten gezeigt.

```javascript
const product = {
    type: "hat",
    color: "green",
    brand: "Dolphin",
    price: 22,
    discountedPrice: 22,
};
```

**WICHTIG**: Wenn du `discountedPrice` änderst, stelle sicher, dass du die Eigenschaft `price` verwendest, um den neuen Wert zu berechnen, anstatt direkt `22` einzugeben.

Erwartete Ausgabe:

```plaintext
SALE: der grüne Dolphin Hut kostet jetzt nur noch 11€ statt 22€!
```

## Aufgabe 4

Füge dem untenstehenden Objekt eine neue Eigenschaft namens `fullName` hinzu.

Die Eigenschaft sollte die Werte von `firstName` und `lastName` kombinieren, getrennt durch ein Leerzeichen.

```javascript
const person = {
    firstName: "Jim",
    lastName: "Jameson",
    age: 37
};
```

Erwartete Ausgabe:

```plaintext
{
    firstName: "Jim",
    lastName: "Jameson",
    age: 37,
    fullName: "Jim Jameson"
};
```

## Aufgabe 5

Ändere bei dem untenstehenden Objekt den Wert der Eigenschaft `city`, so dass der erste Buchstabe korrekt großgeschrieben ist.

```javascript
const person = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};
```

**WICHTIG**: Versuche, den aktuellen Wert von `city` zu verwenden und zu ändern, anstatt `London` manuell einzugeben. 

Erwartete Ausgabe:

```plaintext
{
    firstName: "Sylvia",
    lastName: "Sun",
    city: "London"
};
```
