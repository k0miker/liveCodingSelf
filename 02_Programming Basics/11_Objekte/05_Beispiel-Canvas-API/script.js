console.log('Hello World');

const canvas = document.querySelector('#canvas');

// Der `canvas` & `document` sind Objekte.
// Das Objekt können wir uns jeweils in der Konsole anschauen:
console.log(canvas);
console.log(document);

// Der Zugriff funktioniert wie gewohnt mit Punktnotation oder Klammernotation:
console.log(canvas.attributes);
console.log(document.doctype);

// Auflösung des Canvas definieren
canvas.width = 300;
canvas.height = 300;

// 2D-Zeichen-Kontext aufsetzen
const context = canvas.getContext('2d');

// Hintergrund zeichnen
context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);



// Spiel-Charakter definieren

// Datenset:
// => width
// => height
// => color
// => position.x
// => position.y
// => border.width
// => border.color

const character = {
  width: 60,
  height: 60,
  color: 'red',
  position: {
    x: 50,
    y: 80
  },
  border: {
    width: 2,
    color: 'blue'
  },

  draw() {
    // Gefülltes Rechteck zeichnen:
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    
    // Border zeichnen:
    context.lineWidth = this.border.width;
    context.strokeStyle = this.border.color;
    context.strokeRect(this.position.x, this.position.y, this.width, this.height)
  },

  move() {
    this.position.x += 0.5;
    this.position.y += 0.5;
  }
};

character.draw();



function update() {
  // Canvas leeren (alle Zeichnungen entfernen)
  context.clearRect(0, 0, canvas.width, canvas.height);

  character.move();
  character.draw();

  // Für wiederholtes Aufrufen sorgen:
  requestAnimationFrame(update);
}

requestAnimationFrame(update);

