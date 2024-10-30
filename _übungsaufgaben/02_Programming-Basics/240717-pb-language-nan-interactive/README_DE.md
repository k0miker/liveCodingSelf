# NaN interaktiv

Bevor Du mit der Übung beginnst, führe den Befehl `npm install` (oder `npm i`) aus, um alle notwendigen Abhängigkeiten zu installieren.

## Aufgaben

### Aufgabe 1

Verwende die Bibliothek `readline-sync`, um ein Programm zu erstellen, das den Benutzer fragt nach:

- seinem Alter
- dem aktuellen Jahr

Mit den eingegebenen Daten berechnet das Programm das Geburtsjahr des Benutzers.

Zum Beispiel:

```plaintext
Gib dein Alter ein:
> 23
Gib das aktuelle Jahr ein:
> 2023

Du bist im Jahr 2000 geboren
```

### Aufgabe 1.1

Als Zusatz, ausgehend von der Lösung zu Aufgabe 1, zeige eine Fehlermeldung an, wenn der Benutzer einen Wert eingibt, der keine Zahl ist.

Zum Beispiel:

```
Gib dein Alter ein:
> asd 
Gib das aktuelle Jahr ein:
> 2023

FEHLER: Es tut mir leid, aber es scheint, dass einer der von dir eingegebenen Werte keine Zahl war.
```

## Aufgabe 2

Schreibe ein Programm, das den Benutzer auffordert, eine PIN (Persönliche Identifikationsnummer, wie ein Passwort, nur aus Zahlen bestehend) einzugeben.

Die Regeln für eine gültige PIN sind:

- sie darf nur Zahlen enthalten (Ziffern von 0 bis 9)
- sie sollte 4 Ziffern lang sein

Nachdem der Benutzer aufgefordert wurde, eine PIN zu wählen, sollte das Programm eine von zwei Nachrichten ausgeben:

- `FEHLER: Die von dir eingegebene PIN ist nicht gültig`: wenn die PIN nicht die richtige Länge hat oder ungültige Ziffern enthält
- `Danke. Die von dir gewählte PIN wurde korrekt gespeichert.`: wenn die PIN gültig ist

### Bonus

Es gibt Fälle, in denen auch einige Zeichen, wie `-`, `+` und `.` akzeptiert werden.

Teste deine Lösung mit diesen Eingaben und stelle sicher, dass sie NICHT als gültig betrachtet werden:

- `-123`
- `+123`
- `12.3`