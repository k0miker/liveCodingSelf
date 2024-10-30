# Array-Herausforderungen

## Aufgabe 1

Gegeben ist ein String mit einem Datum, verwende eine Methode um:

- den Tag, Monat und Jahr zu trennen
- speichere sie in 3 Variablen namens `day`, `month`, `year`
- gib sie in der Konsole aus

Erwartete Ausgabe:

```plaintext
Tag: 21
Monat: 07
Jahr: 1993
```

Aufgabe 2

Gegeben ist ein Array von Strings, erstelle einen neuen String, der:

- beginnt mit den Worten "Packliste:"
- gefolgt von der Liste der Elemente im Array
- jedes Element sollte durch ein Komma und ein Leerzeichen getrennt sein

Zum Beispiel:

```js
const clothes = ["t-shirt", "socks", "jeans", "shoes", "hat"];
```

Erwartete Ausgabe:

```plaintext
Packliste: t-shirt, socks, jeans, shoes, hat
```

## Aufgabe 3

Neben deinem Bett hast du einen Stapel Zeug zum Lesen, eine Mischung aus Büchern und Comics.

- Sie sind in einem JavaScript-Array organisiert
- das erste Element ist das unterste im Stapel
- jede Nacht nimmst du das oberste und beginnst es zu lesen

Deine Aufgabe ist es:

- eine Nachricht auszugeben, wie viele Bücher du noch zu lesen hast
- eine Nachricht mit dem nächsten Buch, das du lesen wirst, auszugeben
- das Buch, das du fertig gelesen hast, zu entfernen und dann:
    - eine Nachricht mit seinem Titel auszugeben
    - eine Nachricht mit der Anzahl der verbleibenden Bücher auszugeben
    - eine Nachricht mit dem Titel des nächsten Buches auszugeben

Wiederhole den letzten Teil 3 Mal.

Eingabe-Array:

```javascript

const booksToRead = [
  "Heartstopper",
  "Paper Girls",
  "Tomorrow, and Tomorrow, and Tomorrow",
  "Ghost World",
  "Normal People",
  "One Piece vol. 102",
  "The Hitchhiker's Guide to the Galaxy",
  "This One Summer",
];
```

Erwartete Ausgabe:

```plaintext
Ich habe 8 Bücher zu lesen.
Ich fange an mit: "This One Summer"

Ich habe "This One Summer" fertig gelesen
Jetzt habe ich 7 Bücher zu lesen.
Das nächste ist: "The Hitchhiker's Guide to the Galaxy"

Ich habe "The Hitchhiker's Guide to the Galaxy" fertig gelesen
Jetzt habe ich 6 Bücher zu lesen.
Das nächste ist: "One Piece vol. 102"

Ich habe "One Piece vol. 102" fertig gelesen
Jetzt habe ich 5 Bücher zu lesen.
Das nächste ist: "Normal People"
```

## Aufgabe 4

Du gehst einkaufen.

Für diese Aufgabe, folge den Anweisungen in den Kommentaren der Datei `task-4.js`
