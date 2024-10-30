///////////////////////////////////
// Enumerations (Enums)
// (dt. Aufzählungen)
///////////////////////////////////

// Enums sind in den meisten Programmiersprachen ein eigener Datentyp.
// In JS existieren enums (noch) nicht, aber in Typescript gibt es sie schon.
// Wir können mit Hilfe von Klassen & statischen Eigenschaften aber die Funktionalität von enums auch in JS nachbauen.

// Enums sind immer sinnvoll, wenn wir einen Wert haben, der nur eine begrenzte Anzahl an Werten haben darf.


// Beispiel Game: Schwierigkeitsgrad (DifficultyLevel)
// Der Schwierigkeitsgrad hat nur eine begrenzte Anzahl an Werten:
// => easy => einfache Schwierigkeit
// => normal => mittlere Schwierigkeit
// => hard => hohe Schwierigkeit

class DifficultyLevel {
  static Easy = Symbol("easy"); // Symbol generiert einen einzigartigen Key
  static Normal = Symbol("normal");
  static Hard = Symbol("hard");
}

class Settings {
  static difficulty = DifficultyLevel.Easy;
}

// Schwierigkeit anpassen:
Settings.difficulty = DifficultyLevel.Hard;

// Enums lassen sich ganz einfach & super gut lesbar mit switch-Statements verarbeiten:
switch (Settings.difficulty) {
  case DifficultyLevel.Easy:
    console.log("Einfacher Schwierigkeistgrad aktiviert...");
    break;
  case DifficultyLevel.Normal:
    console.log("Mittlerer Schwierigkeistgrad aktiviert...");
    break;
  case DifficultyLevel.Hard:
    console.log("Hoher Schwierigkeistgrad aktiviert...");
    break;
  default:
    break;
}

// Hoher Schwierigkeistgrad aktiviert...


