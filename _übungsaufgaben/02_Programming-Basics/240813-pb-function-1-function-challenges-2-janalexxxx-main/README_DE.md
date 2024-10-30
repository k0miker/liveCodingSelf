# Funktion Herausforderungen 2

## Aufgabe 1 - Ist das Element im Array?

Erstelle eine Funktion namens `isItemInArray`, die ein Array und einen String als Eingabe nimmt und zurückgibt:

- `true`: wenn das Array das Element enthält
- `false`: wenn das Array das Element nicht enthält

Zum Beispiel:

```js
console.log(isItemInArray(["apple", "pear", "banana"], "kiwi")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "mango")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "apple")); // true
```

## Aufgabe 2 - Index von bekommen

Erstelle eine Funktion namens `getIndexOf`, die ein Array und einen String als Eingabe nimmt und zurückgibt:

- den Index des Strings im Array
- `-1` wenn das Array diesen String nicht enthält

Zum Beispiel:

```js
console.log(getIndexOf(["apple", "pear", "banana"], "kiwi")); // -1
console.log(getIndexOf(["apple", "pear", "banana"], "banana")); // 2
console.log(getIndexOf(["apple", "pear", "banana"], "apple")); // 0
```

## Aufgabe 3 - Einen String umkehren

Erstelle eine Funktion namens `reverseString`, die einen String als Eingabe nimmt und denselben String umgekehrt zurückgibt.

Zum Beispiel:

```js
console.log(reverseString("table")); // "elbat"
console.log(reverseString("blabla")); // "albalb"
console.log(reverseString("")); // ""
console.log(reverseString("tomato")); // "otamot"
console.log(reverseString("cat")); // "tac"
```

## Aufgabe 4 - String wiederholen

Erstelle eine Funktion namens `repeatString`, die einen String und eine Zahl als Eingabe nimmt und diesen String n-mal wiederholt, abhängig von der Zahl

Zum Beispiel:

```js
console.log(repeatString("table", 3)); // "tabletabletable"
console.log(repeatString("cat", 5)); // "catcatcatcatcat"
console.log(repeatString("dog", 0)); // ""
console.log(repeatString("", 5)); // ""
console.log(repeatString("+", 10)); // "++++++++++"
```

## Aufgabe 5 - Vokale entfernen

Erstelle eine Funktion namens `removeVowels`, die einen String als Eingabe nimmt und denselben String ohne Vokale zurückgibt

```js
console.log(removeVowels("table")); // "tbl"
console.log(removeVowels("JavaScript")); // "JvScrpt"
console.log(removeVowels("AEIOU")); // ""
console.log(removeVowels("ABCDe")); // "BCD"
```
