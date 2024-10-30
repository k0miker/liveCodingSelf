# Objekte und Funktionen

Diese Übung lässt dich üben, wie man mit Objekten arbeitet und einige grundlegende Anwendungsfälle, wie man sie in Kombination mit Funktionen verwendet.

## Aufgabe 1

Erstelle 3 Objekte, die Daten für Benutzerprofile enthalten.

Jedes Objekt sollte die folgenden Eigenschaften enthalten:

- `firstName`
- `lastName`
- `email`
- `age`

Du kannst beliebige Daten verwenden oder einfach die untenstehenden Beispiele verwenden:

- Mark Maxwell, 32, mark@email.com
- Sally Samson, 24, sally@email.com
- Jenny Jay, 38, jenny@email.com

Gib jedes Objekt in der Konsole aus.

Erwartete Ausgabe:

```plaintext
{
  firstName: 'Mark',
  lastName: 'Maxwell',
  age: 32,
  email: 'mark@email.com'
}
{
  firstName: 'Sally',
  lastName: 'Samson',
  age: 24,
  email: 'sally@email.com'
}
{
  firstName: 'Jenny',
  lastName: 'Jay',
  age: 38,
  email: 'jenny@email.com'
}
```

## Aufgabe 1.1

Füge eine Eigenschaft `city` zu den 3 Objekten hinzu, die du erstellt hast, ohne den Code zu ändern, den du bereits geschrieben hast.

## Aufgabe 1.2

Erstelle eine Funktion namens `describe`, die ein `user` Objekt als Eingabe nimmt und einen String mit einer Nachricht zurückgibt, die diesen Benutzer beschreibt.

Zum Beispiel, angenommen wir haben die Stadt New York zum ersten Benutzer hinzugefügt:

```javascript
console.log(describe(user1));

// Ausgabe
"Mark Maxwell ist 32 Jahre alt und lebt in New York"
```

## Aufgabe 1.3

Füge eine zusätzliche Eigenschaft `job` nur zu den ersten beiden Benutzerobjekten hinzu, die du erstellt hast. Am Ende sollten nur die ersten 2 Benutzer einen Job haben.

Schreibe eine Funktion namens `showJob`, die ein `user` Objekt als Eingabe nimmt und einen String mit einer Nachricht zurückgibt, die besagt, welchen Job der Benutzer hat. 

Zum Beispiel:

```plaintext
Sally Samson arbeitet als Webentwicklerin
```

Wenn ein Benutzer die Eigenschaft `job` nicht hat, sollte die Nachricht anders sein.

Zum Beispiel:

```plaintext
Jenny Jay ist derzeit arbeitslos
```

## Aufgabe 2

Erstelle 3 Objekte, die Fahrzeuge repräsentieren und die folgenden Eigenschaften enthalten:

- `type`: die Art des Fahrzeugs, zum Beispiel Auto, LKW, Van, Motorrad...
- `color`: die Farbe des Fahrzeugs
- `brand`: die Marke des Fahrzeugs, zum Beispiel Honda, Toyota, Ford... 
- `mileage`: die Kilometer, die das Fahrzeug bisher gefahren ist

## Aufgabe 2.1

Erstelle eine Funktion `needsRevision`, die ein `vehicle` Objekt als Eingabe akzeptiert und `true` oder `false` zurückgibt, abhängig von der `mileage` des Fahrzeugs.

Wenn die `mileage` größer als 60000 ist, gibt die Funktion `true` zurück, sonst `false`.
