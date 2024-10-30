# Einführung in Objektmethoden

## Aufgabe 1

Erstelle einige Objekte (mindestens 3) für verschiedene Tiere:

- eine Katze
- ein Hund
- ein Fisch
- ein Vogel
- was auch immer du möchtest

Füge für jedes Tier die folgenden Eigenschaften hinzu:

- `type`: die Art des Tieres
- `name`: der Name des Tieres
- `color`: die Farbe des Tieres

## Aufgabe 2

Erstelle eine Funktion `describe` und füge sie als Methode zu jedem Tier hinzu, das du erstellt hast.

Die Funktion gibt eine Beschreibung des Tieres zurück.

Zum Beispiel:
```plaintext
Missy ist ein blauer Fisch
```

## Aufgabe 3

Füge jeder Tierart eine Methode `speak` hinzu, die je nach Tier einen anderen Laut zurückgibt.

Zum Beispiel:
```javascript
console.log(dog.speak()); // woof woof
console.log(cat.speak()); // meow
console.log(fish.speak()); // blub blub
```

## Aufgabe 4

Erstelle einige Objekte (mindestens 3) für verschiedene Personen, mit Angaben zu:

- `name`
- `age`
- `city`
- `profession`

## Aufgabe 5

Füge jedem Objekt eine Methode `introduce` hinzu, die eine Zeichenkette zurückgibt, in der sich die Person vorstellt.

Zum Beispiel:
```javascript
console.log(person1.introduce()); // Mein Name ist Steve, ich bin 37 Jahre alt. Ich lebe in Tokio und arbeite als UX Designer
```

## Aufgabe 6

Füge den Objekten aus Aufgabe 5 eine Methode `greet` hinzu.

Die Methode sollte ein anderes Personenobjekt als Eingabe nehmen und eine Nachricht zurückgeben, in der eine Person die andere begrüßt.

Zum Beispiel:

```javascript
// angenommen, dass person2 Cindy ist
console.log(person1.greet(person2)); // Hallo Cindy, wie geht es dir?
```