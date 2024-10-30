import Ball from './Ball.js';
import Player from './Player.js';
import Settings from './Settings.js';

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

const ball = new Ball(100, 200, 10, 'white', canvas);
const ball2 = new Ball(50, 100, 10, 'orange', canvas);

const player1 = new Player(Settings.player.distance, 100, Settings.player.width, Settings.player.height, Settings.player.color, canvas);
const player2 = new Player(canvas.width-Settings.player.width-Settings.player.distance, 100, Settings.player.width, Settings.player.height, Settings.player.color, canvas);


// Animations-Loop
function animate() {
  // Hintergrund zeichnen
  context.fillStyle = 'blue';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Spiellogik
  
  // Position updaten  
  ball.update();
  ball2.update();
  player1.update();
  player2.update();

  // Ball zeichnen
  ball.draw();
  ball2.draw();
  player1.draw();
  player2.draw();

  // Animations-Loop starten
  requestAnimationFrame(animate);
}

animate();


/*
  Event Listener Management
*/
document.addEventListener('keydown', event => {
  if (event.code === 'ArrowUp') {
    // player1 nach oben bewegen
    player1.direction.y = -1;
  } else if (event.code === 'ArrowDown') {
    // player1 nach unten bewegen
    player1.direction.y = 1;
  } else if (event.code === 'KeyW') {
    // player2 nach oben bewegen
    player2.direction.y = -1;
  } else if (event.code === 'KeyS') {
    // player2 nach unten bewegen
    player2.direction.y = 1;
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
    player1.direction.y = 0;
  } else if (event.code === 'KeyW' || event.code === 'KeyS') {
    player2.direction.y = 0;
  }
})