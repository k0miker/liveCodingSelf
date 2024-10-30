# Verschachtelte Personen

## Aufgabe 1

Gegeben ist das folgende Objekt:

```javascript
let person = {
    name: "Petra Morin",
    address: {
        delivery: {
            street: "371-7636 Nulla Road",
            zip: "83-315",
            country: "Germany",
        },
        billing: {
            street: "123-999 Fake Street",
            zip: "12345",
            country: "Germany",
        }
    },
    hobbies: ["drums", "skating", "comics"],
    languages: [
        {
            name: "German",
            level: 5 
        },
        {
            name: "English",
            level: 4 
        },
        {
            name: "Spanish",
            level: 2 
        },
    ]
};
```

### Aufgabe 1.1

Gib die Postleitzahl der Rechnungsadresse auf der Konsole aus

Erwartete Ausgabe:

```plaintext
12345
```

### Aufgabe 1.2

Gib das letzte Hobby aus

Erwartete Ausgabe:
```plaintext
comics
```

### Aufgabe 1.3

Gib den Namen und das Level der zweiten gesprochenen Sprache aus

Erwartete Ausgabe:

```plaintext
English: 4
```

### Aufgabe 1.4

Gib alle Informationen zur Lieferadresse aus.

Erwartete Ausgabe:

```plaintext
Straße: 371-7636 Nulla Road
PLZ: 83-315
Land: Deutschland
```

### Aufgabe 1.5

Gib mit einer Schleife alle Hobbys aus, jedes auf einer eigenen Zeile

Erwartete Ausgabe:
```plaintext
Hobbys: 
- drums
- skating
- comics
```

### Aufgabe 1.6

Liste mit einer Schleife alle bekannten Sprachen mit einem Level kleiner als 5 zusammen mit ihrem Level auf.

Erwartete Ausgabe:

```plaintext
English: 4
Spanish: 2
```

## Aufgabe 2

Gegeben ist das Array mit einer Liste von Personen unten:

```javascript
const users = [
  {
    name: "Petra Morin",
    address: {
        delivery: {
            street: "371-7636 Nulla Road",
            zip: "83-315",
            country: "Germany",
        },
        billing: {
            street: "123-999 Fake Street",
            zip: "12345",
            country: "Germany",
        }
    },
    hobbies: ["drums", "skating", "comics"],
    languages: [
        {
            name: "German",
            level: 5 
        },
        {
            name: "English",
            level: 4 
        },
        {
            name: "Spanish",
            level: 2 
        },
    ]
  },
  {
    name: "Abel Ashley",
    address: {
        delivery: {
            street: "9977 Aliquam Avenue",
            zip: "920134",
            country: "Mexico",
        },
        billing: {
            street: "123 Lorem Square",
            zip: "912098",
            country: "Mexico",
        }
    } ,
    hobbies: ["reading books", "wood working"],
    languages: [
        {
            name: "Spanish",
            level: 5 
        },
        {
            name: "English",
            level: 5 
        },
        {
            name: "Italian",
            level: 3 
        },
    ]
  },
  {
    name: "Aaron Cardenas",
    address: {
        delivery: {
            street: "987 Ipsum",
            zip: "129-234",
            country: "France",
        },
        billing: {
            street: "123 Etwas Plaza",
            zip: "912098",
            country: "Spain",
        }
    },
    hobbies: ["painting", "singing", "hiking"],
    languages: [
        {
            name: "French",
            level: 5 
        },
        {
            name: "Spanish",
            level: 5 
        },
        {
            name: "German",
            level: 1 
        },
    ]
  },
  {
    name: "Felix Moreno",
    address: {
        delivery: {
            street: "320-7871 Nec, Av.",
            zip: "59156",
            country: "New Zealand",
        },
        billing: {
            street: "921 Nullae Aliquam",
            zip: "912098",
            country: "New Zealand",
        }
    }, 
    hobbies: ["jogging", "coffee", "bird watching"],
    languages: [
        {
            name: "English",
            level: 5 
        },
        {
            name: "Italian",
            level: 3 
        },
    ]
  },
  {
    name: "Skyler May",
    address: {
        delivery: {
            street: "Ap #854-6462 Consectetuer Ave",
            zip: "00608",
            country: "Singapore",
        },
        billing: {
            street: "Ap #854-6462 Consectetuer Ave",
            zip: "00608",
            country: "Singapore",
        }
    },
    hobbies: ["cycling", "soccer", "bouldering"],
    languages: [
        {
            name: "Malay",
            level: 5 
        },
        {
            name: "English",
            level: 5 
        },
        {
            name: "Mandarin",
            level: 4 
        },
        {
            name: "French",
            level: 2 
        },
    ]
  },
];
```

### Aufgabe 2.1

Gib den Namen und die Hobbys, getrennt durch Kommas, der letzten Person auf der Liste aus

Erwartete Ausgabe:

```plaintext
Skyler May
Hobbys: cycling, soccer, bouldering
```

### Aufgabe 2.2

Gib den Namen und Informationen zur Rechnungsadresse der zweiten Person auf der Liste aus

Erwartete Ausgabe:
```plaintext
Abel Ashley

Rechnungsadresse:

Straße: 123 Lorem Square
PLZ: 912098
Land: Mexiko
```

### Aufgabe 2.3

Gib mit Schleifen alle Namen der Personen auf der Liste aus. 

Für jeden Namen, gib auch einen Index aus, der bei 1 beginnt.

Erwartete Ausgabe:

```plaintext
1. Petra Morin
2. Abel Ashley
3. Aaron Cardenas
4. Felix Moreno
5. Skyler May
```

### Aufgabe 2.4

Gib mit Schleifen für jede Person eine Nachricht aus, die den Namen, das Lieferland und das erste Hobby auf der Liste zeigt.

Erwartete Ausgabe:
```plaintext
Petra Morin lebt in Deutschland und ihr Lieblingshobby ist: drums.

Abel Ashley lebt in Mexiko und sein Lieblingshobby ist: reading books.

Aaron Cardenas lebt in Frankreich und sein Lieblingshobby ist: painting.

Felix Moreno lebt in Neuseeland und sein Lieblingshobby ist: jogging.

Skyler May lebt in Singapur und ihr Lieblingshobby ist: cycling.
```

### Aufgabe 2.5

Gib mit Schleifen jeden Namen und jede Sprache, die sie mit einem Level von 4 oder höher kennen, aus.

Erwartete Ausgabe:
```plaintext
Petra Morin spricht fließend:
- Deutsch
- Englisch

Abel Ashley spricht fließend:
- Spanisch
- Englisch

...
```