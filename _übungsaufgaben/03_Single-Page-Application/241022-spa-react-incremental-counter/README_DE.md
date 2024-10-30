# Olivenzähler

Mit dieser Übung wirst Du den Umgang mit Zuständen, das Übergeben von Props und die bedingte Darstellung üben.

## Beispiel

![Beispiel](reference.gif)

## Aufgaben

Diese App sollte einen Text basierend auf einer Zustandsvariable und einen Button rendern.

- Wenn der Button geklickt wird, sollte er einen Zähler erhöhen
- Der Zähler sollte bei `0` starten und mit dem `useState` Hook gehandhabt werden

### Aufgabe 1 - Text.jsx

Arbeite in der Datei [src/components/Text.jsx](./src/components/Text.jsx), um die `Text` Komponente zu implementieren;

- Diese Komponente sollte nur ein `<p>` Element rendern
- Diese Komponente sollte eine `count` Prop von ihrem Elternteil erhalten
- Wenn `count` kleiner als 10 ist;
  - sollte der `count` Wert im `<p>` Element dargestellt werden
  - **Beispiel**: 'Der aktuelle Zählerstand ist: 3'
- Zusätzlich, wenn `count` größer als 5 ist;
  - sollte der Absatz eine olivgrüne Hintergrundfarbe haben
  - Verwende die `.backgroundOlive` Klasse in [src/index.css](./src/index.css)
- Wenn `count` größer als 10 ist;
  - sollte das `<p>` Element die olivgrüne Hintergrundfarbe beibehalten
  - es sollte stattdessen den folgenden Satz rendern:
  - **Beispiel**: 'Zählerstand ist größer als 10'

### Aufgabe 2 - App.jsx

Arbeite in der Datei [src/App.jsx](./src/App.jsx), um die `App` Komponente zu implementieren;

1. Verwende einen `useState` Hook, um den `counter` Wert zu speichern
2. Importiere die `Text` Komponente in `App` und rendere sie
3. Übergebe den `counter` Wert als Prop an die `Text` Komponente
4. Unter der `Text` Komponente, füge ein `<button>` Element hinzu
5. Wenn dieser `<button>` geklickt wird, erhöhe den `count` Zustand
