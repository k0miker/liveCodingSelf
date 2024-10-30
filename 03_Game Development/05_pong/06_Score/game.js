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

let requestId;
let isGameOver = false;

const player1 = new Player(Settings.player.distance, 100, Settings.player.width, Settings.player.height, Settings.player.color, canvas);
const player2 = new Player(canvas.width-Settings.player.width-Settings.player.distance, 100, Settings.player.width, Settings.player.height, Settings.player.color, canvas);

const ball = new Ball(100, 200, 10, 'white', player1, player2, canvas);
const ball2 = new Ball(50, 100, 10, 'orange', player1, player2, canvas);

// Animations-Loop
function animate() {

  // Hintergrund zeichnen
  context.fillStyle = 'blue';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Spiellogik
  // Punkte erhalten
  if (ball.collidesWithLeftWall()) {
    player2.points++;
    ball.reset();
  } else if (ball.collidesWithRightWall()) {
    player1.points++;
    ball.reset();
  }
  if (ball2.collidesWithLeftWall()) {
    player2.points++;
    ball2.reset();
  } else if (ball2.collidesWithRightWall()) {
    player1.points++;
    ball2.reset();
  }

  if (player1.points >= Settings.maxPoints || player2.points >= Settings.maxPoints) {
    isGameOver = true;
    endGame();
  }
  
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

  // Spielstand zeichnen
  drawScore();

  // Animations-Loop starten
  requestId = requestAnimationFrame(animate);

  // cancelAnimationFrame muss am Ende von animate() ausgeführt werden:
  if (isGameOver) {
    cancelAnimationFrame(requestId);
  }
}

requestAnimationFrame(animate);

/*
  Hilfsfunktionen
*/
function drawScore() {
  context.font = '20px Helvetica';

  context.fillStyle = player1.color;
  context.fillText(player1.points, player1.x, 25);

  context.fillStyle = player2.color;
  context.fillText(player2.points, player2.x, 25);
}

function endGame() {
  // Gewinnnachricht darstellen
  const winner = player1.points > player2.points ? player1 : player2;
  const winnerName = winner === player1 ? 'Player1' : 'Player2';
  context.font = '20px Helvetica';
  context.fillStyle = winner.color;
  context.fillText(`${winnerName} hat gewonnen!`, canvas.width / 2 - 100, canvas.height / 2);
}


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