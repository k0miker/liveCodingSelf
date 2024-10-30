# Funktion Herausforderungen 1

## Aufgabe 1

Erstelle eine Funktion, die einen String als Eingabe nimmt und einen neuen String mit dem ersten und letzten Zeichen des Eingabe-Strings zurückgibt.

Wenn der Eingabe-String ein leerer String ist, gibt sie einen leeren String zurück.

```javascript
function firstAndLastCharacter() { }

console.log(firstAndLastCharacter("")); // ""
console.log(firstAndLastCharacter("table")); // te
console.log(firstAndLastCharacter("cat")); // ct
console.log(firstAndLastCharacter("js")); // js
```

## Aufgabe 2

Erstelle eine Funktion, die 2 Zahlen als Eingabe nimmt und die größere der beiden zurückgibt.

Wenn die Zahlen gleich sind, gibt sie die erste zurück.

```javascript
function largestOf2() { }

console.log(largestOf2(2, 5)); // 5
console.log(largestOf2(6, 3)); // 6
console.log(largestOf2(10, 10)); // 10
console.log(largestOf2(-1, -5)); // -1
```

## Aufgabe 3

Erstelle eine Funktion, die einen String als Eingabe nimmt und denselben String mit dem ersten und letzten Großbuchstaben zurückgibt.

Wenn der Eingabe-String ein leerer String ist, gibt sie einen leeren String zurück.

```javascript
function capitaliseFirstAndLast() { }

console.log(capitaliseFirstAndLast("table")); // TablE
console.log(capitaliseFirstAndLast("cat")); // CaT
console.log(capitaliseFirstAndLast("js")); // JS
console.log(capitaliseFirstAndLast("")); // ""
```

## Aufgabe 4

Erstelle eine Funktion, die 2 Parameter nimmt:

- `length`: eine Zahl
- `character`: ein String

Die Funktion gibt ein Array mit einer Länge gleich dem ersten Parameter zurück, das nur `character` als seine Elemente enthält.

Zum Beispiel:

```plaintext
fillArray(3, "*") => ["*", "*", "*"]
```

```javascript
function fillArray() { }

console.log(fillArray(3, "*")); // [ '*', '*', '*' ]
console.log(fillArray(5, "a")); // [ 'a', 'a', 'a', 'a', 'a' ]
console.log(fillArray(0, "+")); // [] 
console.log(fillArray(10, "-")); // [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ]
```

## Aufgabe 5 - isInRange

Schreibe eine Funktion namens `isInRange`, die überprüft, ob eine Zahl innerhalb eines bestimmten Bereichs liegt.

Zum Beispiel: 
- Ist 3 größer oder gleich 5 und kleiner oder gleich 10 (im Bereich zwischen 5 und 10)? => false
- Ist 21 größer oder gleich 10 und kleiner oder gleich 50 (im Bereich zwischen 10 und 50)? => true 

Die Funktion nimmt 3 numerische Werte als Eingabe:

- `number`: die Zahl, die wir überprüfen wollen
- `min`: der kleinste Wert des Bereichs
- `max`: der größte Wert des Bereichs

Beispiele:
```plaintext
isInRange(2, 0, 5); // true
isInRange(10, 0, 5); // false
isInRange(100, 50, 500); // true
isInRange(-1, -50, 50); // true
isInRange(0, -50, 50); // true
```

## Aufgabe 6 - containsVowel

Schreibe eine Funktion namens `containsVowel`, die einen String als Eingabe nimmt und überprüft, ob er mindestens einen Vokal enthält (irgendeinen Buchstaben zwischen: a, e, i, o, u).

Die Funktion gibt zurück:

- `true`: wenn es mindestens einen Vokal im String gibt
- `false`: wenn es keine Vokale gibt 

Die Funktion muss **Groß- und Kleinschreibung ignorieren**.

Du kannst dich auf die String-Methode `includes()` verlassen: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

Beispiele:
```plaintext
containsVowel("table"); // true
containsVowel("bcdfg"); // false
containsVowel("a"); // true
containsVowel("aeiou"); // true
containsVowel("AEIOU"); // true
containsVowel(""); // false
containsVowel("Abc"); // true
```

## Aufgabe 7 - containsNumber

Schreibe eine Funktion namens `containsNumber`.

Die Funktion nimmt einen String als Eingabe.

Sie gibt zurück:

- `true`: wenn eines der Zeichen im String eine gültige Zahl ist
- `false`: wenn es keine Zahlen im String gibt

Beispiele:
```plaintext
containsNumber("123"); // true
containsNumber("abc"); // false
containsNumber("a2c"); // true
containsNumber("100px"); // true
containsNumber("1"); // true
containsNumber("0"); // true
containsNumber("$23.00"); // true
containsNumber("T-shirts x2"); // true
```

## Aufgabe 8 - isFirstLetterUpperCase 

Schreibe eine Funktion namens `isFirstLetterUpperCase`.

Die Funktion nimmt einen String als Eingabe.

Sie gibt zurück:

- `true`: wenn der erste Buchstabe ein Großbuchstabe ist
- `false` sonst.

Beispiele:
```plaintext
isFirstLetterUpperCase("hello"); // false
isFirstLetterUpperCase("Hello"); // true
isFirstLetterUpperCase("Bianca"); // true
isFirstLetterUpperCase("jim"); // false
isFirstLetterUpperCase(""); // false
isFirstLetterUpperCase("A"); // true
```