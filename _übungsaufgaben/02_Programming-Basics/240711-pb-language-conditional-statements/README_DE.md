# Bedingte Anweisungen

## Aufgabe 1

Deklariere eine Variable `username` und weise ihr einen String zu.

Schreibe eine bedingte Anweisung, um den Wert der Variable `username` zu überprüfen:

- Wenn es ein leerer String ist, gib die Nachricht `Hallo, Gast!` aus
- Ansonsten gib die Nachricht `Willkommen zurück, <username>!` aus

Ersetze in der zweiten Nachricht `<username>` durch den Wert der Variable

## Aufgabe 2

Erstelle 4 Variablen:
- `person1Name`
- `person1Age`
- `person2Name`
- `person2Age`

Weise Namen und Alter deiner Wahl zu und schreibe dann eine bedingte Anweisung, um den Namen der jüngeren Person von den beiden auszugeben.

Zum Beispiel:
```plaintext
// Finn ist 18 Jahre alt
// Jess ist 21 Jahre alt

// Ausgabe
Finn ist die jüngste Person
```

## Aufgabe 3

Erstelle 3 Variablen:
- `mode`
- `backgroundColor`
- `textColor`

Weise der Variable `mode` den Wert `dark` oder `light` zu, dann schreibe eine bedingte Anweisung, um den Wert von `backgroundColor` und `textColor` zu ändern:
- Wenn `mode` `dark` ist, dann sollte `backgroundColor` `black` und `textColor` `white` sein
- Wenn `mode` `light` ist, dann sollte `backgroundColor` `white` und `textColor` `black` sein
- Wenn `mode` weder `dark` noch `light` ist, gib eine Nachricht aus, dass der `mode` nicht gültig ist 

Am Ende gib eine Nachricht wie diese aus:
```plaintext
Aktueller Modus: dark 
Hintergrundfarbe: schwarz
Textfarbe: weiß 
```

## Aufgabe 4

Erstelle 3 Variablen:

- `isMilkAvailable`
- `isBreadAvailable`
- `isAppleAvailable`

Weise ihnen einen beliebigen booleschen Wert zu, dann schreibe eine bedingte Anweisung, um festzustellen, was du zum Frühstück haben wirst.

- Wenn es Brot gibt, gib die Nachricht `Iss ein Sandwich` aus
- Wenn es kein Brot gibt, aber Milch, gib die Nachricht `Ein bisschen Milch mit Müsli wird ok sein` aus
- Wenn es auch keine Milch gibt, aber einen Apfel, gib die Nachricht `Ok, ich denke, ich werde einfach einen Apfel essen` aus
- Wenn nichts verfügbar ist, gib die Nachricht `Ich werde draußen frühstücken!` aus

## Aufgabe 5

Erstelle eine Variable `n` und weise ihr eine Zahl zu.

Schreibe eine bedingte Anweisung, um auszugeben, ob die Zahl gerade oder ungerade ist. 

**Hinweis**: Eine Zahl ist gerade, wenn sie durch 2 teilbar ist

## Aufgabe 6

Erstelle zwei Variablen `x` und `y` und weise ihnen zwei Zahlen zu.

Schreibe eine bedingte Anweisung, die eine von drei Nachrichten ausgibt:
- `x ist größer als y`
- `y ist größer als x`
- `x und y sind gleich`

## Aufgabe 7

Schreibe ein Programm, das eine grundlegende Passwortvalidierung durchführt.

Erstelle eine Variable `password` und weise ihr einen String zu.

Schreibe ein Programm, das eine Nachricht ausgibt, die dir sagt, ob das Passwort gültig ist oder nicht.

Das Passwort ist gültig, wenn:

- es länger als 8 Zeichen ist
- das erste und letzte Zeichen unterschiedlich sind
- es sich von "12345678" unterscheidet
- das erste Zeichen kein Leerzeichen ist
- das letzte Zeichen kein ! ist

Einige mögliche Ausgaben:
```plaintext
Ist das Passwort 12345678 gültig? falsch 

Ist das Passwort abc gültig? falsch 

Ist das Passwort 1234abcde gültig? wahr

Ist das Passwort slkafjwter! gültig? falsch
```

