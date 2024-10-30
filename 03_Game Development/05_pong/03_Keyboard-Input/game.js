/*
  Ziel: Rechteck mit den Pfeiltasten bewegen
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



/*
  Spieler aufsetzen
*/
class Player {
  static distance = 20;
  static width = 20;
  static height = 50;
  static color = 'pink';

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  points = 0;

  draw(context) {
    context.fillStyle = Player.color;
    context.fillRect(this.x, this.y, Player.width, Player.height);
  }
}

const player1 = new Player(Player.distance, 120);


/*
  Animations-Loop
*/

function update() {
  // Hintergrund zeichnen
  context.fillStyle = 'blue';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Spieler zeichnen
  player1.draw(context);

  requestAnimationFrame(update);
}

update();


/*
  Auf Keyboard-Input reagieren
  * 'keydown' => Taste auf den Keyboard wird gedrückt
  * 'keyup' => Taste auf dem Keyboard wurde losgelassen
  
  event.code => Name der Taste auf der Tastatur (unabhängig vom Layout)
  event.key => Buchstabenwert der Taste
*/
document.addEventListener('keydown', event => {
  console.log(`event.code: ${event.code}`);
  // console.log(`event.key: ${event.key}`);

  if (event.code === 'ArrowUp') {
    console.log('Pfeiltaste nach oben gedrückt');
    player1.y -= 4;
    console.log(player1.y);
  } else if (event.code === 'ArrowDown') {
    player1.y += 4;
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowUp') {
    console.log('Pfeiltaste nach oben losgelassen');
  }
})