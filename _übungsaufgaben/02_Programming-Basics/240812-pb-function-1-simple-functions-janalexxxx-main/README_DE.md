# Einfache Funktionen

## Aufgabe 1

Erstelle 4 Funktionen namens:

- `add`: Sie nimmt 2 Zahlen als Eingabe und gibt das Ergebnis ihrer Summe zurück
- `subtract`: Sie nimmt 2 Zahlen als Eingabe und gibt das Ergebnis ihrer Subtraktion zurück
- `multiply`: Sie nimmt 2 Zahlen als Eingabe und gibt das Ergebnis ihrer Multiplikation zurück
- `divide`: Sie nimmt 2 Zahlen als Eingabe und gibt das Ergebnis ihrer Division zurück

Zum Beispiel:

```js
add(2, 4); // 6
subtract(2, 4); // -2
multiply(2, 4); // 8
divide(2, 4); // 0.5 
```

Rufe die Funktionen mit verschiedenen Werten auf und gib das Ergebnis in der Konsole aus

## Aufgabe 2

Erstelle 3 Funktionen namens:

- `isDivisbleBy3`: Sie nimmt eine Zahl als Eingabe und gibt zurück:
    - `true`: wenn die Zahl durch 3 teilbar ist
    - `false`: wenn die Zahl nicht durch 3 teilbar ist
- `isDivisbleBy5`: gleich, mit der Zahl 5
- `isDivisbleBy7`: gleich, mit der Zahl 7

Rufe die Funktionen mit verschiedenen Werten auf und gib das Ergebnis in der Konsole aus

Zum Beispiel:
```js
isDivisbleBy3(9);  // true
isDivisbleBy3(8);  // false

isDivisbleBy5(9);  // false
isDivisbleBy5(10);  // true

isDivisbleBy7(21);  // true
isDivisbleBy7(10);  // false
```

**HINWEIS**: Um zu wissen, ob eine Zahl durch eine andere Zahl teilbar ist, musst du überprüfen, ob der Rest der Division gleich 0 ist

## Aufgabe 3

Erstelle eine Funktion namens `isDivisibleBy`.

Die Funktion nimmt 2 Zahlen als Eingabe und gibt zurück:
- `true`: wenn die erste Zahl durch die zweite teilbar ist
- `false`: wenn die erste Zahl NICHT durch die zweite teilbar ist

Zum Beispiel:

```js
// Ist 9 durch 3 teilbar?
isDivisibleBy(9, 3); // true

// Ist 10 durch 2 teilbar?
isDivisibleBy(10, 2); // true

// Ist 15 durch 7 teilbar?
isDivisibleBy(15, 7); // false
```

## Aufgabe 4

Schreibe eine Funktion namens `startsWithCapitalLetter`, die einen String als Eingabe nimmt und zurückgibt:

- `true`: wenn das erste Zeichen ein Großbuchstabe ist
- `false`: wenn das erste Zeichen KEIN Großbuchstabe ist

Gehe davon aus, dass der Eingabestring immer mit einem Buchstaben aus dem Alphabet beginnt und es kann keine Zahl oder ein Symbol sein.

Zum Beispiel:

```js
startsWithCapitalLetter("Hello"); // true
startsWithCapitalLetter("javascript"); // false
startsWithCapitalLetter("Python"); // true
```

**HINWEIS**:
Wie überprüft man, ob ein Buchstabe großgeschrieben ist?

```js
let letter = "x";
// Ist "x" ein Großbuchstabe?
letter === letter.toUpperCase(); // false

let capitalLetter = "Q";
// Ist "Q" ein Großbuchstabe?
capitalLetter === capitalLetter.toUpperCase(); // true
```

## Aufgabe 5

Schreibe eine Funktion namens `capitalise`, die einen String als Eingabe nimmt und den gleichen String zurückgibt mit:

- dem ersten Buchstaben in Großbuchstaben umgewandelt
- dem Rest des Strings in Kleinbuchstaben

Zum Beispiel:

```js
capitalise("hello"); // Hello
capitalise("wE pUt tHe FUN in fUnCtIOns"); // We put the fun in functions
capitalise("BERLIN"); // Berlin
```

**HINWEIS**
Wir können slice() verwenden, um den String ohne das erste Zeichen zu bekommen

```js
let s = "hello world";
s.slice(1); // ello world
```

## Aufgabe 6

Schreibe eine Funktion namens `randomInt`, die eine Zahl als Eingabe nimmt und eine zufällige Ganzzahl zwischen 0 und dieser Zahl zurückgibt

Zum Beispiel:

```
// eine zufällige Ganzzahl zwischen 0 und 10
randomInt(10); // 7 
randomInt(10); // 8 
randomInt(10); // 2 
randomInt(10); // 10 
randomInt(10); // 0 
```

**HINWEIS**
Die Formel, um eine zufällige Zahl zwischen 0 und einer beliebigen Zahl 
`n` zu bekommen, ist:

```js
let n = 5;
Math.floor(Math.random() * (n + 1));
```

## Aufgabe 7

Schreibe eine Funktion namens getRandomLetter, die jedes Mal, wenn sie aufgerufen wird, einen zufälligen Buchstaben des Alphabets (von a bis z) zurückgibt

Zum Beispiel:

```js
getRandomLetter(); // f
getRandomLetter(); // z 
getRandomLetter(); // h 
getRandomLetter(); // d 
```

**HINWEIS**
Du kannst zunächst einen String mit allen verfügbaren Buchstaben verwenden:

```js
"abcdefghijklmnopqrstuvwxyz"
```