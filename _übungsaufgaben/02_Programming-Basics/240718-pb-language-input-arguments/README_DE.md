# Eingabeargumente

Der Zweck dieser Übung ist es, zu üben, wie man Eingaben, die über das Terminal übergeben werden, liest und in den Programmen, die wir schreiben, verwendet, um sie dynamischer zu machen

## Aufgabe 1

Verwende die `process.argv` Eigenschaft, um den Pfad der JavaScript-Datei auf der Konsole auszugeben.

Wenn deine JavaScript-Datei zum Beispiel `main.js` heißt und sich im Ordner `/home/dci/exercise` befindet, würde die erwartete Ausgabe lauten:

```plaintext
/home/dci/exercise/main.js
```


## Aufgabe 2

Schreibe ein Programm, das ein Argument mit einem Namen aus dem Terminal annimmt.

Das Programm soll den Namen in einer Variablen speichern und dann eine Begrüßung ausgeben, etwa so:

Zum Beispiel:
```Klartext
> node task-2.js Sandy
Hello Sandy!

> node task-2.js Mike
Hello Mike!
```

## Aufgabe 3

Ähnlich wie bei Aufgabe 2, soll das Programm diesmal mit 2 Argumenten aus dem Terminal funktionieren:

- eine Begrüßung
- ein Name

Speichere die 2 Werte in 2 separaten Variablen und drucke dann je nach Argumenten eine Begrüßungsnachricht aus, zum Beispiel:

```Klartext
> node task-3.js Hello Sandy
Hello Sandy!

> node task-3.js Hi Mike
Hi Mike!

> node task-3.js Hey Tom
Hey Tom!
```

## Aufgabe 4

Dasselbe wie Aufgabe 3, aber diesmal soll das Programm 3 Argumente akzeptieren:

- eine Begrüßung
- einen Vornamen
- einen Nachnamen

Die Ausgabe sollte eine kurze Einführungsnachricht sein, zum Beispiel:
```plaintext
> node task-4.js Hello Martha Blue
Hello, my name is Martha Blue.

> node task-4.js Hi Rob Green
Hi, my name is Rob Green.
```

## Aufgabe 5

Schreibe ein Programm, das 2 numerische Argumente aus dem Terminal liest, ihre Summe berechnet und das Ergebnis auf der Konsole ausgibt

Zum Beispiel:
```Klartext
> node task-5.js 2 4
6

> node task-5.js 6 9
15

> node task-5.js -100 9
-91

> node task-5.js 5 2.25
7.25
```

## Bonusaufgaben

### Bonusaufgabe 1

Fahre mit der Lösung für Aufgabe 1 fort und gib nur den Dateinamen ohne den gesamten Pfad aus.

In Anlehnung an das Beispiel von vorhin würde die erwartete Ausgabe lauten:

```Klartext
main.js
```

**TIPP**: Versuche, die String-Methoden `split()` oder `slice()` zu verwenden:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

### Bonusaufgabe 2

Verbessere die Lösung für Aufgabe 2 so, dass, wenn kein Argument an das Programm gesendet wird, die Ausgabe `Hello guest!` sein wird.

Zum Beispiel:
```Klartext
> node task-2.js Sarah
Hello Sarah!

> node task-2.js
Hello guest!
```

### Bonusaufgabe 4

Fällt dir eine Möglichkeit ein, den Vor- und den Nachnamen als ein einziges Argument zu übergeben, wobei das Leerzeichen zwischen den beiden erhalten bleibt?
