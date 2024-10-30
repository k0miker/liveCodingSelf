# Tief eintauchen in asynchrones JavaScript mit Promises

Entdecke die Magie der nicht-blockierenden Natur von JavaScript und entfalte die Kraft der Promises, um mit asynchrone Operationen elegant umzugehen.

## Was Du machen wirst

In dieser Übung tauchst Du in die Welt des asynchronen JavaScript ein und konzentrierst Dich besonders auf das Konzept der Promises. Deine Reise beinhaltet das Erstellen und Handhaben von Promises, um asynchrone Operationen effektiv zu verwalten. Die folgenden Aufgaben werden Dein Verständnis von Promises testen und verbessern.

## Aufgaben

### Aufgabe 1: Die nicht-blockierende Natur von JavaScript annehmen

Deine erste Aufgabe besteht darin, ein einfaches Skript zu schreiben, das das nicht-blockierende Verhalten von JavaScript zeigt. Hier ist, was Du tun musst:

1. Gib 'Before' in der Konsole aus.
2. Verwende `setTimeout()`, um eine Verzögerung von 3 Sekunden zu erzeugen, nach der 'Reading from the database' auf die Konsole gedruckt werden sollte.
3. Gib 'After' in der Konsole aus.

> Hinweis: Die Reihenfolge Deiner `console.log()`-Anweisungen könnte Dich überraschen!

### Aufgabe 2: Erstellen und Verwenden von Promises

Promises sind Objekte, die das endgültige Ergebnis einer asynchronen Operation darstellen. Du kannst ein Promise mit dem `new Promise` Konstruktor erstellen. In dieser Aufgabe wirst Du ein Promise erstellen, das eine einfache asynchrone Operation nachahmt.

1. Erstelle ein Promise, das das Abrufen von Daten aus einer Datenbank darstellt.
2. Das Promise sollte aufgelöst werden, wenn die Daten erfolgreich "abgerufen" (engl. "fetched") wurden (für diese simulierte Operation kannst Du entscheiden, was ein erfolgreicher Abruf bedeutet; das untenstehende Beispiel zeigt eine Möglichkeit mit `Math.random()`)
3. Wenn der Abruf nicht erfolgreich ist, sollte das Promise abgelehnt werden.

> Hinweis: Sieh Dir das folgende Promise-Skelett an:
```js
const promise = new Promise((resolve, reject) => {
  // asynchrone Operation geht hier
  if (Math.random() < 0.5 ) {
    // resolve - einlösen
  } else {
    // reject - ablehnen
  }
});
```

### Aufgabe 3: Verbrauchen von Promises und Umgang mit ihren Ergebnissen

Promises können verbraucht werden, indem man die Methoden `.then()`, `.catch()`, und `.finally()` an sie anhängt. Dies gibt uns eine Möglichkeit zu definieren, was passieren soll, wenn das Promise aufgelöst oder abgelehnt wird.

1. Hänge einen `.then()`-Block an das Promise, das Du in Aufgabe 2 erstellt hast. Dies sollte die abgerufenen Daten protokollieren, wenn das Promise aufgelöst wird.
2. Hänge einen `.catch()`-Block an, um eventuelle Fehler während des Abrufprozesses zu behandeln. Es sollte eine angemessene Fehlermeldung protokollieren, wenn das Promise abgelehnt wird.
3. Hänge schließlich einen `.finally()`-Block an, der eine Nachricht protokolliert, die anzeigt, dass die Operation abgeschlossen ist, unabhängig davon, ob das Promise aufgelöst oder abgelehnt wurde.

> Hinweis: Jede dieser Methoden sollte eine Funktion erhalten, die definiert, was in jedem Fall zu tun ist.

### Aufgabe 4: Den Spieß umdrehen - `setTimeout()` in ein Promise umwandeln

In dieser letzten Aufgabe besteht Deine Mission darin, die `setTimeout()`-Funktion, die ursprünglich auf Callbacks basiert, in eine Funktion umzuwandeln, die mit Promises arbeitet.

1. Schreibe eine Funktion, die ein Promise zurückgibt.
2. Dieses Promise sollte nach einer bestimmten Zeit aufgelöst werden (ähnlich dem Verhalten von `setTimeout()`).

> Hinweis: Dies könnte Dir helfen, anzufangen:
```js
function delay(ms) {
  // return a new Promise...
}
```

In dieser Übung wirst Du nicht nur asynchronen Code schreiben. Du wirst ein tieferes Verständnis von JavaScript Promises erlangen, lernen, wie man sie effektiv handhabt, und sogar traditionelle Callback-basierte Funktionen in Promise-basierte umwandeln!

### Frohes Coden!
