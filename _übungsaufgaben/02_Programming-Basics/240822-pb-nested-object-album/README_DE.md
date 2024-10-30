# Musikalbum

Gegeben ist das folgende Objekt

```js
const album = {
  artist: "The Clash",
  title: "The Clash",
  genre: "punk",
  year: 1977,
  tracklist: [
    { title: "Janie Jones", duration: "2:05" },
    { title: "Remote Control", duration: "3:00" },
    { title: "I'm So Bored With The U.S.A.", duration: "2:24" },
    { title: "White Riot", duration: "1:55" },
    { title: "Hate & War", duration: "2:05" },
    { title: "What's My Name", duration: "1:40" },
    { title: "Deny", duration: "3:03" },
    { title: "London's Burning", duration: "2:10" },
    { title: "Career Opportunities", duration: "1:51" },
    { title: "48 Hours", duration: "1:34" },
    { title: "Garageland", duration: "3:13" },
  ],
  credits: [
    {
      name: "Joe Strummer",
      instruments: ["Guitar", "Vocals"],
    },
    {
      name: "Mick Jones",
      instruments: ["Guitar", "Vocals"],
    },
    {
      name: "Paul Simonon",
      instruments: ["Bass Guitar"],
    },
    {
      name: "Tory Crimes",
      instruments: ["Drums"],
    },
  ],
};
```

## Aufgabe 1

Gib den `title` und die `duration` des 6. Songs in der Tracklist aus.

Erwartete Ausgabe:

```plaintext
What's my name (1:40)
```

## Aufgabe 2

Schaue dir die `credits` Eigenschaft an und gib den Namen und die Instrumente (getrennt durch Kommas) des ersten Musikers in der Liste aus.

Erwartete Ausgabe:
```plaintext
Joe Strummer: Guitar, Vocals
```

## Aufgabe 3

Mit Hilfe einer Schleife, gib alle Track-Titel aus, nummeriere sie dabei beginnend mit 1, wie unten gezeigt.

Erwartete Ausgabe:

```plaintext
1. Janie Jones
2. Remote Control
3. I'm So Bored With The U.S.A.
4. White Riot
5. Hate & War
6. What's My Name
7. Deny
8. London's Burning
9. Career Opportunities
10. 48 Hours
11. Garageland
```

## Aufgabe 4

Mit Hilfe der `credits` Eigenschaft im Objekt, gib jedes Bandmitglied zusammen mit den Instrumenten, die sie spielen, aus.

Erwartete Ausgabe:

```plaintext
Joe Strummer: Guitar, Vocals
Mick Jones: Guitar, Vocals
Paul Simonon: Bass Guitar
Tory Crimes: Drums
```
