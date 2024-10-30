# Callbacks: map und filter

## Aufgabe 1

Erstelle eine Funktion namens `myMap`, die ein Array und eine Callback-Funktion als Eingabe nimmt.

Innen wendet sie die Callback-Funktion auf jedes Element des Arrays an.

Sie gibt ein neues Array zurück, das die Werte aus dem ursprünglichen Array enthält, modifiziert je nach Ergebnis der Callback-Funktion.

Die Funktion sollte mit verschiedenen Arten von Eingaben und verschiedenen Callbacks arbeiten.

Schreibe auch die Funktionen, die als Callbacks verwendet werden sollen, so dass in den untenstehenden Beispielen, gegeben die Eingabe auf der linken Seite, wir die Ausgabe auf der rechten Seite erhalten.

Beispiele:
```plaintext
Verdoppelt die Zahl: [1, 2, 3] => [2, 4, 6]

Großbuchstaben Strings: ["dish", "fork", "table"] => ["DISH", "FORK", "TABLE"]

Großschreibung von Strings: ["pizza", "beer", "fries"] => ["Pizza", "Beer", "Fries"]
```

## Aufgabe 2

Erstelle eine Funktion namens `myFilter`, die ein Array und eine Callback-Funktion als Eingabe nimmt.

Die Funktion gibt ein neues Array zurück, das nur bestimmte Elemente enthält, abhängig vom Ergebnis der Callback-Funktion.

Schreibe auch die Funktionen, die als Callbacks verwendet werden sollen, so dass in den untenstehenden Beispielen, gegeben die Eingabe auf der linken Seite, wir die Ausgabe auf der rechten Seite erhalten.

Beispiele:

```plaintext
Strings, die "green" enthalten: ["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"] => ["green shirt", "green hat"]

Zahlen größer gleich 100: [9.99, 100, 299.99, 27.99, 2.99, 99.99] => [100, 299.99]

Gerade Zahlen: [1, 2, 3, 4, 5, 6] => [2, 4, 6]
```