# Zufallszahlen

Diese Übung wird dir helfen, den Einsatz von Updater-Funktionen beim Setzen des Zustands mit dem `useState`-Hook zu üben.

## Aufgaben

### Aufgabe 1

Arbeite in der Datei [src/components/RandomList.jsx](./src/components/RandomList.jsx);

- Erstelle eine Komponente `RandomList`. Ihr Zweck ist es, eine Liste von Zufallszahlen im Zustand zu speichern und zu rendern.
- Verwende den `useState`-Hook, um ein Array von `numbers` zu speichern
- Der Anfangszustand sollte ein leeres Array (`[]`) sein
- Die `RandomList`-Komponente sollte auch ein `<button>`-Element rendern

### Aufgabe 2

Arbeite weiter in der Datei [src/components/RandomList.jsx](./src/components/RandomList.jsx);

- Erstelle eine Logik, sodass beim Klicken auf das `<button>`-Element eine Zufallszahl im Array (im Zustand) **hinzugefügt** wird
- Die ursprünglichen Zahlen sollten erhalten bleiben

> 🐅 Verwende eine [Updater-Funktion](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state) für deinen Zustandssetter! Das bedeutet, dass du eine Funktion an deinen Setter übergeben musst, anstatt eines Wertes

> 🐻 Eine **Updater-Funktion** nimmt den aktuellen Zustand und berechnet daraus den nächsten Zustand

### Aufgabe 3

Fahre fort in der Datei [src/components/RandomList.jsx](./src/components/RandomList.jsx);

- Rendere das Array `numbers` aus deinem Zustand
- Verwende die Elemente `<ul>` und `<li>` für die `numbers`

### Aufgabe 4

Arbeite in der Datei [src/App.jsx](./src/App.jsx);

- Importiere die Komponente `RandomList` und rendere sie

> Stelle sicher, dass du die Komponente `RandomList` auch exportierst!
