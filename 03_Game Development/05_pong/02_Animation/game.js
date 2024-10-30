/*
  Ziel 1: Rechtecke animieren / Animations-Loop aufsetzen
*/

/*
  Spielfeld aufsetzen & zeichnen
*/
// Auf Canvas-Element zugreifen
const canvas = document.querySelector('#my-canvas');

// Größe vom Canvas setzen
canvas.height = 400;
canvas.width = 400;

// Zeichenkontext abrufen
const context = canvas.getContext('2d');

// Mit dem Zeichenkontext können wir zeichnen
context.fillStyle = 'blue';
context.fillRect(0, 0, canvas.width, canvas.height);



/*
  Ball animieren / Animations-Loop

  => Zur Animation müssen wir x- und y-Werte updaten & den Animations-Loop vom Canvas mit requestAnimationFrame ausführen
*/

const ball = {
  radius: 10,
  x: 200,
  y: 200,
  color: 'blue',

  // Geschwindigkeit des Balls
  velocity: 0.1,
  direction: {
    x: 1,
    y: -1,
  }
}


// Animations-Loop
function update() {
  // Canvas leeren (alle Zeichnungen entfernen)
  // context.clearRect(0, 0, canvas.width, canvas.height);

  // Hintergrund zeichnen
  context.fillStyle = 'yellow';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Position updaten
  // Neue Position = Richtung * Geschwindigkeit
  ball.x += ball.direction.x * ball.velocity;
  ball.y += ball.direction.y * ball.velocity;

  // Ball zeichnen
  context.fillStyle = ball.color;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  context.closePath();
  context.fill();

  requestAnimationFrame(update);
}

update();


// Alle 2 Sekunden verdoppelt sich die Geschwindigkeit:
setInterval(() => {
  ball.velocity *= 2;
}, 2000)