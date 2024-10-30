# Funktion Herausforderung 3

## Aufgabe 1 - Ist die Zahl im Bereich?

Erstelle eine Funktion namens `isNumberInRange` mit 3 numerischen Parametern:

- `number`
- `min`
- `max`

Die Funktion gibt zurück:

- `true`: wenn `number` im Bereich zwischen `min` und `max` liegt
- `false`: wenn `number` nicht im Bereich zwischen `min` und `max` liegt

Zum Beispiel:

```js
console.log(isInRange(2, 0, 5)); // true
console.log(isInRange(10, 0, 5)); // false
console.log(isInRange(100, 50, 500)); // true
console.log(isInRange(-1, -50, 50)); // true
console.log(isInRange(0, -50, 50)); // true
```

## Aufgabe 2 - Endet mit "ing"?

Erstelle eine Funktion namens `endsWithIng`, die einen String als Eingabe akzeptiert und zurückgibt:

- `true`: wenn der String mit `"ing"` endet
- `false`: wenn der String nicht mit `"ing"` endet

Stelle sicher, dass die Funktion Groß- und Kleinschreibung **ignoriert**.

Zum Beispiel:

```js
endsWithIng("hello"); // false
endsWithIng("going"); // true
endsWithIng("ALAN TURING"); // true
endsWithIng("ding ding"); // true
endsWithIng("making of"); // false
```

## Aufgabe 3 - Beginnt mit "the"?

Erstelle eine Funktion namens `startsWithThe`, die einen String als Eingabe akzeptiert und zurückgibt:

- `true`: wenn der String mit `"the"` beginnt
- `false`: wenn der String nicht mit `"the"` beginnt

Stelle sicher, dass die Funktion Groß- und Kleinschreibung **ignoriert**.

Zum Beispiel:

```js
startsWithThe("hello"); // false
startsWithThe("theremin"); // true
startsWithThe("The Clash"); // true
startsWithThe("ding ding"); // false 
startsWithThe("making of"); // false
```

## Aufgabe 4 - Ist der erste Buchstabe klein?

Erstelle eine Funktion namens `isFirstLetterLowercase`, die einen String als Eingabe nimmt und zurückgibt:

- `true`: wenn der erste Buchstabe klein ist 
- `false`: wenn der erste Buchstabe nicht klein ist oder wenn der String ein leerer String ist

Zum Beispiel:

```js
isFirstLetterLowerCase("hello"); // true
isFirstLetterLowerCase("Hello"); // false
isFirstLetterLowerCase("Bianca"); // false
isFirstLetterLowerCase("jim"); // true
isFirstLetterLowerCase(""); // false
isFirstLetterLowerCase("A"); // false 
```

## Aufgabe 5 - günstiger als

Schreibe eine Funktion namens `cheaperThan`, die als Eingabe ein Array mit einer Liste von Preisen und eine Zahl nimmt.

Sie gibt ein neues Array zurück mit nur den Preisen, die kleiner sind als die Zahl 

Zum Beispiel:
```js
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20); // [19.99, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90); // [19.99, 29.87, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0); // []
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 5); // [2.9]
```

## Aufgabe 6 - Wörter, die mit Ing enden

Schreibe eine Funktion namens `wordsThatEndWithIng`, die ein Array von Strings als Eingabe nimmt und ein neues Array zurückgibt, das nur Wörter enthält, die mit `ing` enden.

Die Funktion sollte Groß- und Kleinschreibung **ignorieren**.

Zum Beispiel:
```js
wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"]); // ["working", "ping"]
wordsThatEndWithIng(["table", "jeans", "small"]); // []
wordsThatEndWithIng(["walking", "ing"]); // ["walking", "ing"]
```

## Aufgabe 7 - Zahlen, die durch 3 teilbar sind

Schreibe eine Funktion namens `numbersDivisibleBy3`, die ein Array von Zahlen als Eingabe nimmt und ein neues Array zurückgibt, das nur die Zahlen aus dem ursprünglichen Array enthält, die durch 3 teilbar sind.

Zum Beispiel:
```js
numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [3, 6, 9]
numbersDivisibleBy3([2, 4, 8]); // []
numbersDivisibleBy3([9]); // [9]
```

## Aufgabe 8 - nur lange Wörter

Erstelle eine Funktion `onlyLongWords`, die einen String als Eingabe nimmt und einen neuen String zurückgibt, der nur die Wörter enthält, die 5 oder mehr Zeichen lang sind.

Zum Beispiel:

```js
onlyLongWords("Welcome to Wikipedia the free encyclopedia that anyone can edit"); // "Welcome Wikipedia encyclopedia anyone"
onlyLongWords("The cat is on the table"); // "table"
onlyLongWords("not many long ones here"); // ""
```

## Aufgabe 9 - Füge eine führende Null hinzu

Schreibe eine Funktion namens `addLeadingZero`, die ein Array von Zahlen als Eingabe nimmt und ein neues Array zurückgibt, das die gleichen Zahlen enthält, wobei, wenn die Zahl nur 1 Stelle lang ist, eine Null am Anfang hinzugefügt wird. Außerdem sollten die Zahlen im endgültigen Array Strings sein.

Zum Beispiel:
```js
addLeadingZero([0, 1, 2, 3, 10, 11, 12]); ["00", "01", "02", "03", "10", "11", "12"]
addLeadingZero([1, 100]); ["01", "100"]
addLeadingZero([1, 2, 3]); ["01", "02", "03"]
```

## Aufgabe 10 - Sätze kürzen

Schreibe eine Funktion namens `cutStrings`, die als Eingabe ein Array mit einigen Sätzen und eine Zahl nimmt. Sie gibt ein neues Array zurück, das die Sätze aus dem Eingabe-Array auf die in der Zahl angegebene Länge kürzt. Sie fügt auch drei Punkte `...` am Ende jedes gekürzten Satzes hinzu

Zum Beispiel:
```js
cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10); ["Hello my n...", "Today is q...", "Cats are t...", "This movie..."]

cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2); ["He...", "To...", "Ca...", "Th..."]
```
## Aufgabe 11 - Dauer in Stunden

Schreibe eine Funktion namens `durationInHours`, die als Eingabe ein Array mit Zahlen nimmt, die die Dauer von Filmen in Minuten darstellen, und ein neues Array zurückgibt, das die Dauer in Stunden ausdrückt. Wenn das Ergebnis keine ganze Zahl ist, verwerfe den Dezimalteil.

Zum Beispiel:
```js
durationInHours([120, 60, 80, 90, 100]); // [2, 1, 1, 1, 1]
durationInHours([50, 20, 180]); // [0, 0, 3]
```
## Aufgabe 12 - Wörter umkehren

Schreibe eine Funktion namens `reverseWords`, die als Eingabe ein Array von Wörtern nimmt und ein neues Array zurückgibt, in dem alle Wörter umgekehrt sind

Zum Beispiel:
```js
reverseWords(["cat", "shoe", "one", "sos", "hello"]); // ["tac", "eohs", "eno", "sos", "olleh"]
```

## Aufgabe 13 - Konsonanten zählen

Schreibe eine Funktion namens `countConsonants`, die einen String als Eingabe nimmt und die Anzahl der Konsonanten (Buchstaben, die nicht: a, e, i, o, u) im String zurückgibt. Leerzeichen und andere Symbole sind auch keine Konsonanten.

Zum Beispiel:
```js
countConsonants("hello"); // 3
countConsonants("aeiou"); // 0
countConsonants("be right back"); // 8
countConsonants("JavaScript"); // 7
```

## Aufgabe 14 - Summe der geraden Zahlen 

Schreibe eine Funktion namens `sumEvenNumbers`, die ein Array als Eingabe nimmt und die Summe aller geraden Zahlen im Array zurückgibt.

Zum Beispiel:
```js
sumEvenNumbers([1, 2, 3, 4, 5, 6]); 12
sumEvenNumbers([100]); 100
sumEvenNumbers([100, 1, 3]); 100
sumEvenNumbers([-2, 4, 3]); 2 
```

## Aufgabe 15 - Zählen nach Farbe 

Schreibe eine Funktion namens `countByColor`, die als Eingabe ein Array mit Objekten von 3 möglichen Farben nimmt: rot, gelb, grün.

Sie gibt ein neues Array zurück, in dem:
- an Index 0 die Anzahl der roten Objekte im Array steht
- an Index 1 die Anzahl der gelben Objekte im Array steht
- an Index 2 die Anzahl der grünen Objekte im Array steht

Zum Beispiel:
```js
countByColor(["Red pen", "Yellow shirt"]); // [1, 1, 0]
countByColor(["Red pen", "Yellow shirt", "Green salad"]); // [1, 1, 1]
countByColor(["Pink hair", "Blue sky"]); // [0, 0, 0]
countByColor(["Yellow table", "Yellow piano", "Green guitar]); // [0, 2, 1]
```
## Aufgabe 16 - sumEvenOdd

Schreibe eine Funktion namens `sumEvenOdd`, die als Eingabe ein Array von Zahlen nimmt und ein neues Array zurückgibt, in dem:

- an Index 0 die Summe aller geraden Zahlen im Array steht
- an Index 1 die Summe aller ungeraden Zahlen im Array steht

Zum Beispiel:
```js
sumEvenOdd([1, 2, 3, 4, 5, 6]);  // [12, 9]
sumEvenOdd([0, -2, 11]);  // [-2, 11]
sumEvenOdd([1, 3, 15]);  // [0, 19]
```
