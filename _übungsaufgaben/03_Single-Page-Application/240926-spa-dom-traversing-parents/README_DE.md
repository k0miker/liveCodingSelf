# DOM-Traversierung: Elternliste Übung

In dieser Aufgabe lernst du, wie man das Document Object Model (DOM) durchläuft, indem du alle Elternelemente eines bestimmten Elements in HTML auflistest.

## Was du tun wirst
In dieser Übung sollst du die DOM-Traversierung in JavaScript üben. Genauer gesagt, wirst du alle Elternelemente eines gegebenen Elements in der DOM-Hierarchie abrufen. Der Zweck dieser Aufgabe besteht darin, dein Verständnis für die Eltern-Kind-Beziehungen innerhalb des DOM zu festigen und den Gebrauch von DOM-Eigenschaften und -Methoden wie `element.nodeName` und `element.parentElement` zu üben.

## Aufgaben

- Das [HTML](./index.html) wurde bereits für dich vorbereitet. Bearbeite diese Datei nicht.
- Schließe die untenstehenden Aufgaben ab, indem du deinen JavaScript-Code in die [script.js](./script.js) Datei schreibst.

### Aufgabe 1 - Das 'Cite'-Element abrufen
- Rufe mit JavaScript das `<cite>`-Element aus dem HTML-Dokument mit der Methode `querySelector()` ab
- Speichere es in einer Variable `currentElement`

### Aufgabe 2 - Elternelemente durchlaufen und speichern
- Erstelle die Variable `parentList` und initialisiere sie als leeres Array
- Erstelle eine Schleife, die:
  - den Knotennamen des `currentElement` abruft
  - ihn in Kleinbuchstaben konvertiert
  - ihn am **Anfang** des `parentList` Arrays hinzufügt
  - die Variable `currentElement` auf die `parentElement` Eigenschaft des aktuellen `currentElement` setzt
  - solange weiterläuft, bis keine `parentElement` Eigenschaften mehr gefunden werden

### Aufgabe 3 - Die Liste der Elternelemente ausgeben
- Füge alle Elemente des `parentList` Arrays zu einem einzigen String zusammen, wobei ' > ' als Trennzeichen verwendet wird
- Gib diesen String auf der `console` aus

**Beispiel**

`html > body > main > section > blockquote > footer > cite`

**Zusätzliche Herausforderung:**
Kannst du deine Lösung so anpassen, dass auch die Klassen, die jedes Elternelement hat, wo zutreffend, einbezogen werden? Zum Beispiel könnte die Ausgabe so aussehen: `section.page > blockquote`.
