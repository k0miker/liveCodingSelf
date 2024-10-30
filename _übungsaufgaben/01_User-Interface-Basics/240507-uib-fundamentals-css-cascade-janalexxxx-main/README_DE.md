# Erkunden der CSS Kaskade

Diese Übung besteht aus einer Reihe von CSS Kaskaden- und Vererbungsrätseln.

## Aufgaben

### Aufgabe 1

Öffne [task_1.html](./task_1.html)

- Bearbeite nicht das `<style>` Element!
- Bearbeite das **HTML**, sodass das innere Feld quadratisch ist und eine `hotpink` Hintergrundfarbe mit einem gestrichelten `lightblue` Rand hat

### Aufgabe 2

Öffne [task_2.html](./task_2.html)

- Bearbeite nicht das `<style>` Element!
- Bearbeite das **HTML**, sodass das Feld eine `hotpink` Hintergrundfarbe hat

### Aufgabe 3

Öffne [task_3.html](./task_3.html)

Beantworte die folgenden Fragen direkt hier in der README:

- Warum ist der Text des `<span>` Elements fett?
  * Das <span>-Element ist ein Kind vom <main>-Element. Die Einstellung der Textstärke wird vom <main>-Element vererbt
- Warum ist der Text der `<h2>` und `<p>` Elemente rot?
  * Beide Elemente sind Kinder vom <main>-Element. Die Einstellung der Textfarbe wird vom <main>-Element vererbt
- Warum ist der Text des `<span>` Elements nicht rot?
  * Weil die Textfarbe des span-Elements auf Blau im CSS gesetzt wird (mittels des span {...}-Selektors).
- Warum haben `<h2>`, `<p>` und `<span>` jeweils keinen Rand?
  * Weil die CSS-Eigenschaft `border` nicht vererbt wird.
- Wenn du Zeile 17 auskommentierst, warum bleibt das `<span>` blau?
  * Weil die Spezifizität des `span {}`-Selektors höher ist, als die Spezifizität des `* {}`-Selektors.
- Wenn du Zeile 18 auskommentierst, warum wird das `<span>` grün?
  * Weil die Eigenschaft mit `!important` markiert ist und daher alle anderen Einstellungen unabhängig derer Spezifizität überschreibt.

### Aufgabe 4

Öffne [task_4.html](task_4.html)

- Bearbeite die **HTML** Datei überhaupt nicht!
- Erstelle und bearbeite `task_4.css`, sodass jedes Mal, wenn das Wort **Cucumbers** auf der Seite erscheint, es die Schriftfarbe `greenyellow` hat
- Alle anderen Wörter müssen die Schriftfarbe `palegoldenrod` haben

### Aufgabe 5

Öffne [task5.html](task_5.html)

Diese ist fast identisch mit Aufgabe 4! Die Anweisungen sind die gleichen, aber _dieses Mal_ ist etwas anders... 🤫

- Bearbeite die **HTML** Datei überhaupt nicht!
- Erstelle und bearbeite `task_5.css`, sodass jedes Mal, wenn das Wort **Cucumbers** auf der Seite erscheint, es die Schriftfarbe `greenyellow` hat
- Alle anderen Wörter müssen die Schriftfarbe `palegoldenrod` haben

> Tipp: Vergleiche das HTML mit `task_4.html`, um zu sehen, was sich geändert hat!
