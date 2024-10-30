
const canvas = document.querySelector('#canvas');
canvas.width = 300;
canvas.height = 200;

const context = canvas.getContext('2d');
console.log(context);


// Hintergrundfarbe
context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);


//////////////////////
// Animations-Loop

// Für eine Animation müssen wir dieselbe Funktion x mal pro Sekunde aufrufen

// let frameCounter = 0;

let xPosition = 20;
let yPosition = 20;

function update() {
  // Testen, ob unser Animations-Loop funktioniert
  // frameCounter++;
  // console.log(`Update(): ${frameCounter}`);

  // Zeichnungen entfernen
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Daten updaten
  if (xPosition < 80) {
    xPosition += 0.2;
    yPosition += 0.3;
  } else {
    yPosition -= 0.3;
    xPosition += 0.2;
  }
  

  // Hintergrund zeichnen
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Inhalte zeichnen
  context.fillStyle = 'orange';
  context.fillRect(xPosition, yPosition, 10, 10);
  
  // Animations-Loop starten
  requestAnimationFrame(update);
}

requestAnimationFrame(update);