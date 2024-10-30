### 3: JAVASCRIPT ERRATE DIE FARBE SPIEL

![JavaScript RGB-Farben-Ratespiel](./image/JavaScript-RGB-color-guessing-game.png)

Ein Farbratespiel mit JavaScript zu programmieren ist ganz einfach:

- Die Benutzeroberfläche ist bereits in der Datei `index.html` vorbereitet.
- Schreibe deinen Code in die Datei `script.js`.

1.  Du entwickelst ein Spiel, in dem der Spieler einen einzelnen **RGB-Wert** für eine Farbe sieht.
2.  Der Spieler muss auf eine _Farbe_ **klicken**, von der er glaubt, dass sie dem angezeigten RGB-Wert entspricht.
3.  Verwende den Container `#message`, um dem Spieler das Ergebnis des Ratens anzuzeigen.

Du kannst das Spiel leicht um weitere Funktionen erweitern, um es noch schwieriger zu machen.

Du könntest zum Beispiel die Anzahl der Versuche begrenzen oder dem Spieler drei "Leben" geben. Bei jedem missglückten Versuch verliert er eines und das Spiel ist vorbei, wenn er kein Leben mehr hat.

# Errate die Farbe!

Der Spieler muss die richtige Farbe erraten, indem er auf die farbigen Quadrate auf der Seite klickt. Die Seite ist bereits erstellt, aber du musst das JavaScript vervollständigen, damit es funktioniert!

## Aufgabe

Vervollständige das JavaScript, damit das Spiel funktioniert, zum Beispiel:

- Indem du Event-Listener zu den Buttons hinzufügst
- Die fehlende Spiel-Logik hinzufügst

- Das [HTML](./index.html) und [CSS](./style.css) sind bereits für dich vorbereitet. Bearbeite diese Dateien nicht.
- Schreibe deinen Code in [script.js](./script.js)

## Anforderungen

Für jedes neue Spiel;

- Der Computer muss neue zufällige Farben für alle Quadrate auf der Seite erstellen
- Eine dieser zufälligen Farben muss die richtige Farbe sein
- Der RGB-Wert der richtigen Farbe muss im Element `#color-display` gesetzt werden. Dies gibt dem Spieler einen Hinweis.

Für die Buttons;

- Der Button _Neue Farben_ muss neue zufällige Farben für alle Quadrate auf der Seite erstellen
- Der Button _Einfach_ muss die Anzahl der farbigen Quadrate auf 3 setzen
- Der Button _Schwer_ muss die Anzahl der farbigen Quadrate auf 6 setzen

Wenn der Spieler auf eines der farbigen Quadrate klickt;

- Wenn er auf die **richtige** Farbe geklickt hat;
  - setze den Text im Element `#message` auf `RICHTIG`
- Wenn er auf die **falsche** Farbe geklickt hat;
  - setze den Text im Element `#message` auf `NOCHMAL VERSUCHEN`
  - setze die Farbe des farbigen Quadrats auf die Hintergrundfarbe (sodass es unsichtbar aussieht)

## Erwartetes Ergebnis

![Referenzbild](./reference.gif)
