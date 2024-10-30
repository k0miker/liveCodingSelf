# Strings und Zahlen

## Aufgaben

### Aufgabe 1

Du hast 2 Variablen, die die Geburtsdaten von 2 Personen enthalten

- extrahiere das Jahr aus den 2 Daten und speichere sie in 2 neuen Variablen
- verwende den ternären Operator auf diesen 2 Variablen, um eine Nachricht an die Konsole zu drucken, wie "Fiona ist älter als Jacob" oder "Jacob ist älter als Fiona", abhängig vom Vergleich der 2 Jahre

```js
let jacobBirthdate = "20/06/1995";
let fionaBirthdate = "12/11/1992";
```

### Aufgabe 1.1 

Mit den Variablen aus Aufgabe 1, berechne den Altersunterschied zwischen Jacob und Fiona.

Drucke eine Nachricht an die Konsole, wie:

`Fiona ist 3 Jahre älter als Jacob`

Verwende eine bedingte Anweisung, wenn nötig.

Stelle sicher, dass deine Lösung mit jedem Datum funktioniert, das du verwendest.

### Aufgabe 2

Du hast 2 Variablen mit den Maßen eines Div auf einer Webseite und du möchtest die Fläche des Div berechnen.

Die 2 Werte sind Strings, die auch die Einheit enthalten.

- verwende JavaScript, um die 2 Strings in Zahlen umzuwandeln 
- berechne die Fläche des Div
- drucke eine Nachricht an die Konsole mit dem richtigen Ergebnis 

```js
let divWidth = "960px";
let divHeight = "320px";
```

### Aufgabe 3

Jedes Mal, wenn du auswärts isst, hast du die Gewohnheit, 10% von dem, was du bezahlt hast, Trinkgeld zu geben und dann den Betrag auf die nächste ganze Zahl aufzurunden.

Berechne mit den unten angegebenen Preisen, wie viel du bezahlen wirst.

Gib das Ergebnis an die Konsole aus

Zum Beispiel:
```
Preis: 10.56€ => 10.56 + 10% => 11.61, aufgerundet => 12
Preis: 37€ => 37 + 10% => 40.7, aufgerundet => 41
```

**WICHTIG**: Um die 10% hinzuzufügen, multipliziere einfach den Preis mit 1.1

```js
let breakfastPrice = "12€";
let lunchPrice = "18.71€";
let dinnerPrice = "43.63€";

let breakfastTotal;
let lunchTotal;
let dinnerTotal;
```
