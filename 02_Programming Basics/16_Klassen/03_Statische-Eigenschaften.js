///////////////////////////////////////////////
// Klassen: Statische Eigenschaften & Methoden
///////////////////////////////////////////////

// Statische Eigenschaften & Methoden sind nicht Teil der Instanzen einer Klasse.
// Sie sind Teil des Klassen-Objekts selbst.

// Woher kennen wir statische Eigenschaften & Methoden bislang?
// Beispiel: Math-Klasse
// => Alle folgenden Methoden & Eigenschaften sind statisch
Math.random();
Math.ceil(4.2);
Math.floor(4.2);
Math.PI;

// Wenn sie nicht statisch wären, dann müssten so etwas machen:
// const math = new Math();
// math.random();

// Welche Vorteile haben statische Eigenschaften & Methoden?
// * Statische Eigenschaften & Methoden existieren nur einmal. (z.B. die Math.random() gibt es nur einmal. Somit rufen alle dieselbe Methode auf).
// * Einfacher Zugriff auf Methoden & Eigenschaften von überall aus in unserem Code, da wir keine Instanzen erstellen & managen müssen.

// Nachteile:
// * Es gibt nur eine Version aller statischen Eigenschaften & Methoden. Klonen ist nicht möglich.


// Praktisches Beispiel: Einstellungen für unser Spiel
// => Einstellungen gibt es nur einmal & sie gelten für alle Aspekte des Spiels
// => Auf Einstellungen müssen wir einfach von überall aus im Code zugreifen können.
// => Wenn sich Einstellungen ändern, dann gelten die neuen Einstellungen für alle Aspekte des Spiels.

// Alle statischen Methoden & Eigenschaften deklarieren wir mit `static`:

class Settings {
  static difficulty = 'easy';
  static audioLevel = 1.0;

  static increaseDifficulty() {
    switch (this.difficulty) {
      case 'easy':
        this.difficulty = 'medium';
        break;
      case 'medium':
        this.difficulty = 'hard';
        break;
      case 'hard':
        console.log('Schwieriger geht es nicht...')
        break;
    }
  }

  static mute() {
    this.audioLevel = 0;
  }

  // Methoden & Eigenschaften für Instanzen können in derselben Klassendefinition stehen:
  favouriteColor = 'rot';
}

Settings.increaseDifficulty();
console.log(Settings.difficulty); // 'medium'

Settings.increaseDifficulty();
console.log(Settings.difficulty); // 'hard'

Settings.mute();
console.log(Settings.audioLevel); // 0


// Wenn ich Instanzen generiere, dann haben diese keinen Zugriff auf die statischen Methoden & Eigenschaften:
const mySettings = new Settings();
console.log(mySettings.audioLevel); // undefined

console.log(mySettings.favouriteColor); // 'rot'
console.log(Settings.favouriteColor); // undefined