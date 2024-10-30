# DOM-Durchwanderung verstehen

Diese Übung zielt darauf ab, Deine Fähigkeiten in der Durchwanderung des Dokument-Objekt-Modells (engl. "Document Object Model") (DOM) in JavaScript zu verbessern.

## Aufgaben

- Das [HTML](./index.html) wurde bereits für Dich vorbereitet. Bearbeite diese Datei nicht.
- Vervollständige die untenstehenden Aufgaben, indem Du Deinen Code in die [script.js](./script.js) Datei schreibst.

### Aufgabe 1 - Vorheriges Geschwister-Element erhalten

- Wähle das erste Absatz-Element (mit der Klasse "inner") aus.
- `console.log()` sein vorheriges Geschwister-Element sowohl mit den Eigenschaften `previousSibling` als auch `previousElementSibling`.

### Aufgabe 2 - Nächsten Elternteil finden

Mit dem Element, das Du in Aufgabe 1 ausgewählt hast;

- Finde seinen nächsten Elternteil mit der Klasse `outer` mithilfe der `closest()` Methode.

### Aufgabe 3 - Element gegen Selektor testen

Mit dem Element, das Du in Aufgabe 1 ausgewählt hast;

- Überprüfe, ob es dem Selektor `.inner` entspricht, indem Du die `matches()` Methode verwendest.

### Aufgabe 4 - Alle Kinder eines Elements erhalten

- Wähle das `<div>` mit der Klasse `middle` aus.
- `console.log()` alle seine Kind-Elemente mithilfe der `children` Eigenschaft.

### Aufgabe 5 - Bestimmte Kinder auswählen

- Wähle das `<div>` mit der Klasse `middle` aus.
- Finde das erste Kind mit der Klasse `inner` mithilfe der `querySelector()` Methode.

Viel Spaß beim Coden! 😀
