# Schleife mit Eingabe

## Aufgabe 1

Schreibe eine `for` Schleife, die von 0 bis `max` (nicht eingeschlossen) geht und jede Zahl in der Konsole ausgibt.

Der Wert für `max` sollte dem Skript von der Kommandozeile übergeben werden.

**WICHTIG**: Die Eingabe von der Kommandozeile ist immer ein String. Wenn du Zahlen benötigst, denke daran, sie zu konvertieren.

Zum Beispiel:

```plaintext
node task-1.js 5
```



Erwartete Ausgabe:

```plaintext
0
1
2
3
4
```



## Aufgabe 2

Schreibe eine `for` Schleife, die von 0 bis `max` (nicht eingeschlossen) mit einer Erhöhung, die durch die Variable `step` definiert ist, geht und jede Zahl in der Konsole ausgibt.

Die Werte für `max` und `step` sollten dem Skript von der Kommandozeile übergeben werden.

**Wichtig**: Die Eingabe von der Kommandozeile ist immer ein String. Wenn du Zahlen benötigst, denke daran, sie zu konvertieren.

Zum Beispiel:

Zähle bis 10 mit einer Erhöhung von 2:

```plaintext
node task-2.js 10 2 
```

Erwartete Ausgabe:

```plaintext
0
2
4
6
8
```

Zähle bis 50 mit einer Erhöhung von 5:

```plaintext
node task-2.js 50 5
```

```plaintext
0
5
10
15
20
25
30
35
40
45
```



## Aufgabe 3

Wie die vorherige Aufgabe, aber wenn der Wert von `step` größer ist als der Wert von `max`, gib eine Warnmeldung in der Konsole aus, dass der erste Argument immer größer sein sollte als das zweite.

Zum Beispiel:

```plaintext
node task-3.js 10 2 
```

Erwartete Ausgabe:

```plaintext
0
2
4
6
8
```

Aber:
```plaintext
node task-3.js 2 5
```

Erwartete Ausgabe:
```plaintext
Achtung: Die erste Zahl muss größer sein als die zweite!
```

## Aufgabe 4

Ähnlich wie die vorherige Aufgabe, aber wenn der Benutzer keinen Wert in der Kommandozeile eingibt, verwende die folgenden Standardwerte:

- Standardwert für `max`: 10
- Standardwert für `step`: 1

Zum Beispiel:

```plaintext
node task-4.js
```

Erwartete Ausgabe:

```plaintext
1
2
3
4
5
6
7
8
9
```