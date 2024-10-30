# Adventure Game Charakter 1

Mit der Bibliothek `readline-sync` erstelle ein kleines interaktives Programm, das den Benutzer nach einigen Informationen für einen Charakter in einem Abenteuerspiel fragt.

Einige Ideen, nach denen du fragen könntest:

- Charaktername
- Charaktertyp (Krieger, Zauberer, Ninja, Dieb...)
- Charakteralter
- Charakterwaffe

Füge gerne mehr hinzu.

## Wie man das macht

Um die Eingabe von einem Benutzer zu erhalten und sie in einer Variable zu speichern, kannst du `readlineSync.question()` verwenden.

Zum Beispiel:

```javascript
const age = readlineSync.question("Wie alt bist du? ");
console.log(age);
```

## Beispiel Ausgabe

Unten findest du ein Beispiel dafür, wie das Programm aussehen könnte:

**WICHTIG**: Versuche darauf zu achten, etwas Platz zwischen den verschiedenen Fragen und der Benutzereingabe zu lassen.

```plaintext
Willkommen tapferer Abenteurer!

Wie ist dein Name?
> Gatsu

Und sag mir, Gatsu, bist du ein Krieger oder ein Zauberer?
> Krieger

Wie alt bist du, Gatsu der Krieger?
> 23

Welche Waffe benutzt du gerne im Kampf?
> Riesenschwert

Also, nur zur Wiederholung:

Name: Gatsu
Typ: Krieger
Alter: 23
Waffe: Riesenschwert

Viel Spaß bei deinem Abenteuer!
```

