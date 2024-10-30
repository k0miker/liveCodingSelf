// Auf Canvas-Element zugreifen
const canvas = document.querySelector('#canvas');
// const canvas = document.getElementById('canvas');

console.log(canvas);

// Auflösung des Canvas definieren
canvas.width = 300;
canvas.height = 200;


// 2D-Zeichen-Kontext aufsetzen
// -> Enthält die aktuellen Zeichen-Einstellungen
// -> Enthält Funktionen, mit denen wir dann zeichnen können
const context = canvas.getContext('2d');

console.log(context);



//////////////////////////
// Zeichnen
//////////////////////////

// Auf Canvas zeichnen
// Das Zeichnen besteht aus zwei Schritten:
// 1. Einstellungen der Zeichenwerkzeuge definieren
// 2. Zeichnen ausführen

// Farbe zum Füllen setzen:
context.fillStyle = 'blue';

// Rechteck mit Füllfarbe zeichnen:
// => context.fillRect(x-Position, y-Position, Breite, Höhe)
context.fillRect(0, 0, canvas.width, canvas.height);



// Das Koordinatensystem des 2D-Canvas
// Oben links in der Ecke ist der Punkt (0, 0).
// Die x-Achse ist horizontal, die y-Achse vertikal.

context.fillStyle = 'white';
context.fillRect(20, 40, 20, 20);

context.fillStyle = 'yellow';
context.fillRect(40, 60, 20, 20)



////////////////////////////
// Eigene Farben definieren

// Vorderfinierte Farben wie in CSS:
context.fillStyle = 'orange';
context.fillRect(200, 160, 10, 10);

// Hex-Code nutzen:
context.fillStyle = '#00ff00';
context.fillRect(100, 140, 10, 10);

// rgb(red, green, blue) => Werte zwischen 0-255
context.fillStyle = 'rgb(255, 0, 0)';
context.fillRect(100, 120, 10, 10);



/////////////////////////////
// Übereinander zeichnen

// Es gibt beim Canvas keine Objekte und keine Ebenen.
// Der Canvas besteht nur aus Pixel-Werten.
// Wenn wir zwei Elemente übereinander zeichnen möchten, 
// dann müssen wir sie nacheinander auf dieselbe Stelle zeichnen.

context.fillStyle = 'white';
context.fillRect(240, 100, 30, 30);

context.fillStyle = 'orange';
context.fillRect(250, 110, 10, 10)

