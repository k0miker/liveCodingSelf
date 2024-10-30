//////////////////////////////
// Klassen: Vererbung
//////////////////////////////

// Wie können wir Klassen auf anderen Klassen aufbauen?

// Mit Hilfe von von Vererbung.
// Bei der Vererbung übernimmt eine Klasse alle Eigenschaften und Methoden einer anderen Klasse.
// Dadurch kann man eine bereits bestehende Klasse erweitern, ohne diese Klasse nachträglich verändern zu müssen.

// Beispiel: Auto-Rennspiel

// Alle Autos in unserem Spiel sollen die folgenden Eigenschaften & Methoden haben:

class Car {
  constructor(brand, type, maxSpeed, color) {
    this.brand = brand;
    this.type = type;
    this.maxSpeed = maxSpeed;
    this.color = color;
  }

  drive() {
    console.log(
      `${this.brand} ${this.type} in der Farbe ${this.color} fährt...`
    );
  }

  break() {
    console.log(`${this.brand} ${this.type} bremst...`);
  }
}

// Jetzt habe ich die Möglichkeit Autos zu generieren:
const mustang = new Car("Ford", "Mustang", 240, "schwarz");
mustang.drive(); // Ford Mustang in der Farbe schwarz fährt...

const porsche = new Car("Porsche", "911", 200, "schwarz");
porsche.drive(); // Porsche 911 in der Farbe schwarz fährt...

// Für die einzelnen Auto-Typen wollen wir einzelne Klassen haben, damit wir diese einfach erstellen & managen können:
// `extends` => Originale Klasse `Car` mit den Eigenschften & Methoden der neuen Klasse `Porsche911` erweitern:
// `super` => Referenz zur Klasse `Car`, die wir erweitern

class Porsche911 extends Car {
  constructor(color, sticker) {
    // Mit super() rufen wir die constructor-Methode der Klasse 'Car' auf
    super("Porsche", "911", 320, color);
    this.sticker = sticker;
  }

  // In dieser Klasse können wir zusätzlihe Eigenschaften & Methoden hinzufügen, die nicht Teil der Klasse `Car` sind:
  drift() {
    console.log(`${this.brand} ${this.type} driftet...`);
  }
}

// Diese Instanz hat alle Methoden & Eigenschaften der Klasse `Car` + die Methoden der Eigenschaften der Klasse `Porsche911`:
const redPorsche = new Porsche911("rot", "totenkopf");
const bluePorsche = new Porsche911("blau", "motorrad");

redPorsche.drive(); // Porsche 911 in der Farbe rot fährt...
bluePorsche.drive(); // Porsche 911 in der Farbe blau fährt...

// Methoden die der `Porsche911`-Klasse hinzugefügt wurden,
// die sind nicht Teil der Klasse `Car`
redPorsche.drift(); // Porsche 911 driftet...
// mustang.drift();  // TypeError

console.log(redPorsche.sticker); // 'totenkopf'
console.log(bluePorsche.sticker); // 'motorrad'

/////////////////////////////////

class Porsche extends Car {
  constructor(name, color) {
    super("Porsche", name, 320, color);
  }
}

const panamera = new Porsche("Panamera", "grün");
panamera.drive(); // Porsche Panamera in der Farbe grün fährt...

// Wir können ganz einfach neue Auto-Arten erstellen & diese sind immer noch kompatibel (d.h. alle haben dieselben `drive` & `break`-Methoden):

class Huracan extends Car {
  constructor(color) {
    super("Lamborghini", "Huracan", 300, color);
  }
}

const lambo = new Huracan("rot");
lambo.drive(); // Lamborghini Huracan in der Farbe rot fährt...
lambo.break(); // Lamborghini Huracan bremst...
