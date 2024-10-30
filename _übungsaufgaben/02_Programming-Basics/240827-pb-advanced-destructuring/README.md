# Advanced-destructuring

Führe vor Beginn in der Konsole folgenden Befehl aus:
```javascript
npm init es6 -y
```


## Aufgabe 1

Gegeben ist ein verschachteltes Objekt, das Informationen über ein Buch enthält. Destrukturiere die Variablen aus dem Objekt, um die Informationen über den Autor, den Titel und die Bewertungen (bewertet von den Lesern) herauszulesen. Extrahiere zusätzlich die höchste Bewertung.

Deine Aufgabe:
1. Destrukturiere die Variablen für den Titel, den Vornamen und Nachnamen des Autors, und die höchste Bewertung.

```javascript
const book = {
  title: "JavaScript: The Good Parts",
  author: {
    firstName: "Douglas",
    lastName: "Crockford",
    birthYear: 1969,
  },
  year: 2008,
  reviews: [
    { reviewer: "Alice", rating: 4.5 },
    { reviewer: "Bob", rating: 5.0 },
    { reviewer: "Charlie", rating: 4.0 },
  ],
};
```
Expected output:

```plaintext
Title: JavaScript: The Good Parts
Author: Douglas Crockford
Highest Rating: 5

```

## Aufgabe 2

Erstelle eine Funktion extractData, die ein Objekt mit den folgenden Informationen entgegennimmt: user und settings. Destrukturiere die benötigten Werte aus den Objekten und gib eine formatierte Zusammenfassung zurück.

Deine Aufgabe:
1. Erstelle eine Funktion `extractData`.
2. Destrukturiere die Werte für `name`, `email` aus `user` und `theme`, `notifications` aus `settings`.
3. Gib eine formatierte Zusammenfassung der Benutzerdaten und Einstellungen zurück.

```javascript
const data = {
  user: {
    name: "Jane Doe",
    age: 28,
    email: "jane.doe@example.com"
  },
  settings: {
    theme: "dark",
    notifications: true,
    language: "en"
  }
};
```
Expected output:

```plaintext
User: Jane Doe, Email: jane.doe@example.com, Theme: dark, Notifications: true
```

## Aufgabe 3

Gegeben ist ein Array von Objekten, das Informationen über mehrere Schüler enthält. Destrukturiere die Namen und Noten der Schüler und berechne die Durchschnittsnote.

Deine Aufgabe:
1. Destrukturiere die Namen und Noten der Schüler aus dem Array.
2. Berechne die Durchschnittsnote der Schüler.

```javascript
const students = [
  { name: "Tom", grade: 90 },
  { name: "Jerry", grade: 85 },
  { name: "Spike", grade: 78 },
  { name: "Tyke", grade: 92 },
];
```

Expected output:

```plaintext
Average Grade: 85.75
```

## Aufgabe 4

Gegeben ist ein komplexes Array von Objekten, das Informationen über verschiedene Mitarbeiter enthält. Destrukturiere die Namen der Mitarbeiter und deren spezifische Details wie Abteilung und Gehalt. Berechne das durchschnittliche Gehalt der Mitarbeiter.

Deine Aufgabe:
1. Destrukturiere die Namen, Abteilungen und Gehälter der Mitarbeiter aus dem Array.
2. Berechne das durchschnittliche Gehalt.

```javascript
const employees = [
  { name: "Alice", details: { department: "HR", salary: 5000 } },
  { name: "Bob", details: { department: "Engineering", salary: 7000 } },
  { name: "Charlie", details: { department: "Marketing", salary: 6000 } },
  { name: "David", details: { department: "Sales", salary: 5500 } },
];
```

Expected output:

```plaintext
Average Salary: 5875
```

## Task 5

Erstelle eine Funktion processData, die ein Objekt entgegennimmt, das optional Informationen über ein Produkt enthält. Destrukturiere die Informationen, wobei du Default-Werte für fehlende Eigenschaften verwenden sollst. Extrahiere zudem alle zusätzlichen Eigenschaften, die nicht direkt destrukturiert wurden.

Deine Aufgabe:
1. Erstelle eine Funktion `processData`.
2. Destrukturiere `name` (Pflichtfeld), `price` (Pflichtfeld) und verwende Default-Werte für `rating` und `inStock`.
3. Extrahiere und gib alle restlichen Eigenschaften zurück.


```javascript
const product = {
  name: "Laptop",
  price: 1200,
  // Optional: rating, inStock
};
```

Expected output:

```plaintext
Product Name: Laptop
Price: $1200
Rating: Not Rated
In Stock: true
Additional Info: {}
```



