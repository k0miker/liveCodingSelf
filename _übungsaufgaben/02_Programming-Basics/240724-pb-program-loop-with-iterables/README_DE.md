# Mehr Schleifen

## Aufgabe 1

Gegeben ist ein String als Eingabe, schreibe eine for-Schleife, um jeden einzelnen Buchstaben in der Konsole auszugeben

```javascript
const string = "hello";
```

Erwartete Ausgabe:

```plaintext
h
e
l
l
o
```

## Aufgabe 2

Gegeben ist ein Array, das einige Tiere enthält, verwende eine for-Schleife, um jedes einzelne Tier in der Konsole auszugeben

```javascript
const animals = ["cat", "dog", "bird", "koala", "giraffe"];
```

Erwartete Ausgabe:
```plaintext
cat
dog
bird
koala
giraffe
```

## Aufgabe 3

Gegeben ist ein Array mit Farbnamen, gib jede Farbe und ihre Position im Array aus, aber beginne bei 1

```javascript
const colors = ["green", "pink", "yellow", "red", "violet"];
```

Erwartete Ausgabe:
```plaintext
1. green
2. pink 
3. yellow
4. red
5. violet
```

## Aufgabe 4

Gegeben ist ein Array von Städten, gib in der Konsole nur die Stadtnamen aus, die den Buchstaben `l` enthalten 

```javascript
const cities = ["Berlin", "London", "Messina", "Los Angeles", "Madrid", "Tokyo", "Sidney", "New Delhi", "La Plata"];
```

Erwartete Ausgabe:
```plaintext
Berlin
London
Los Angeles
New Delhi
La Plata
```
**Hinweis**: verwende die Array-Methode `includes()`

<details>
<summary>Klicke für weitere Hinweise</summary>

`includes()` kann mit einem String verwendet werden, um zu überprüfen, ob er einen bestimmten Buchstaben oder allgemein einen anderen String enthält.

Es gibt einen `boolean` zurück

Zum Beispiel:

```js
let string = "hello";
string.includes("l"); // true
string.includes("llo"); // true
string.includes("q"); // false
```

Wenn du ein Array von Strings hast, sei vorsichtig, wie du auf den String zugreifst:

```js
let strings = ["foo", "bar", "bla"];

strings[0]; // "foo"
strings[0].includes("o"); // true
strings[1].includes("o"); // false
```

</details>

## Aufgabe 5

Gegeben ist ein Array von Jahren, gib in der Konsole jedes Jahr aus, das ein Vielfaches von 4 ist

```javascript
const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
```

Erwartete Ausgabe:
```plaintext
2012
2016
2020
```

**HINWEIS**: Um zu überprüfen, ob eine Zahl ein Vielfaches von 4 ist, verwende den Rest `%` Operator

## Aufgabe 6

Gegeben ist ein Array von Buchstaben, gib in der Konsole nur die Buchstaben aus, die an einem geraden Index im Array stehen. Zum Beispiel Buchstaben an den Indizes 0, 2, 4 und so weiter.

```javascript
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
```

Erwartete Ausgabe:
```plaintext
a
c
e
g
i
```

## Aufgabe 7

Gegeben ist ein String als Eingabe, verwende eine for-Schleife, um den String in umgekehrter Reihenfolge in der Konsole auszugeben.

Versuche es ohne die Methode `reverse()` zu machen und verlasse dich nur auf die for-Schleife

```javascript
const sentence = "I'm something of a developer myself";
```

Erwartete Ausgabe:

```plaintext
f
l
e
s
y
m
 
r
e
p
...
```

## Aufgabe 8

Gegeben ist ein String als Eingabe und ein String, der die Vokale enthält, verwende eine for-Schleife, um nur die Vokale aus dem ersten String auszugeben

```javascript
const quote = "Possessions never meant anything to me";
const vowels = "aeiou";
```

Erwartete Ausgabe:

```plaintext
o
e
i
o
e
e
e
a
a
i
o
e
```

Hinweis: verwende die Methode `includes()`

## Aufgabe 9

Gegeben ist ein Array, das eine Liste von Preisen enthält, verwende eine Schleife, um das Eurozeichen € nach jedem Wert hinzuzufügen

- speichere die modifizierten Werte in einem neuen Array
- gib das Ergebnis in der Konsole aus

Erwartete Ausgabe:

```plaintext
[ '9.99€', '12.5€', '120€', '748€', '2.99€', '500€' ]
```
