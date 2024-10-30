# Objektmethode und this

Diese Übung dreht sich um das Üben von Objektmethoden.

## Aufgabe 1

Untersuche [task-1.js](task-1.js).

Schreibe eine Schleife, um das `people` Array mit Objekten zu füllen, indem du die anderen Arrays als Quelldaten für jedes Objekt verwendest. Erstelle außerdem 2 weitere Eigenschaften für jedes Objekt:

    - `fullName`: Zeichenkette, die aus Vor- und Nachname besteht
    - `introduce`: Methode, die eine Zeichenkette zurückgibt, wie zum Beispiel `"Hallo, mein Name ist Mark Shark, ich wohne in New York und bin 18 Jahre alt."`

Das erste Personenobjekt in `people` sollte so aussehen:

```javascript
{
    firstName: "Mark",
    lastName: "Shark",
    age: 18,
    city: "New York",
    fullName: "Mark Shark",
    introduce: function() {...},
}
```

## Aufgabe 2

Untersuche [task-2.js](task-2.js).

Füge der `person`-Objekt eine Methode namens `greet` hinzu. Sie sollte eine Zeichenkette als Eingabe akzeptieren und abhängig von der Eingabe eine benutzerdefinierte Begrüßungszeichenkette zurückgeben.

```javascript
// Beachte die Großschreibung der Begrüßung

console.log(person.greet("hi")) // Hi, mein Name ist Tim
console.log(person.greet("hey")) // Hey, mein Name ist Tim
console.log(person.greet("hello")) // Hallo, mein Name ist Tim
```

## Aufgabe 3

Untersuche [task-3.js](task-3.js).

Du arbeitest an einem Kampfspiel.

Erstelle zwei Objekte als Spielercharaktere mit diesen Eigenschaften:

    - `name`: Zeichenkette mit dem Namen des Charakters
    - `health`: Zahl, die die verbleibende Gesundheit eines Charakters darstellt
    - `attackSkill`: Zeichenkette, die die Art der Fähigkeit darstellt, die der Charakter zum Angreifen verwendet
    - `attackDamage`: Zahl, die angibt, wie viel Schaden die Angriffsfähigkeit verursacht

Erstelle eine Funktion namens `attack` und füge diese Funktion beiden Charakteren als Methode hinzu.

Die `attack`-Methode sollte ein anderes Charakterobjekt als Eingabeparameter akzeptieren. Wenn du die `attack`-Methode ausführst, sollte sie:

    - die `health` des angegriffenen Charakters um den `attackDamage` des angreifenden Charakters verringern
    - eine Nachricht in der Konsole ausgeben, zum Beispiel: "Ryu griff Ken mit einem Schlag an und fügte 16 Schaden zu. Kens Gesundheit beträgt jetzt 8."

Die Nachricht sollte sich ändern, je nachdem, wer angreift und wer angegriffen wird.

Zum Beispiel, wenn wir 2 Charaktere namens `ryu` und `ken` haben:

```javascript
ryu.attack(ken); // "Ryu griff Ken mit einem Schlag an und fügte 16 Schaden zu. Kens Gesundheit beträgt jetzt 8."
ken.attack(ryu); // "Ken griff Ryu mit einem fliegenden Tritt an und fügte 24 Schaden zu. Ryus Gesundheit beträgt jetzt 2."
```

### Bonus

Fühle dich frei, zusätzliche Funktionen hinzuzufügen, wie zum Beispiel eine Möglichkeit, zu überprüfen, wann ein Charakter keine Gesundheit mehr hat.
