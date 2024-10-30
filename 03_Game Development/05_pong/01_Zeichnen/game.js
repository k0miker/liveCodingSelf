/*
  Ziel 1: Rechtecke zeichnen & positionieren
  Ziel 2: Texte zeichnen & positionieren
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
  Spieler zeichnen
*/
const playerSettings = {
  width: 20,
  height: 50,
  distance: 20,
  color: 'white',
}

const player1 = {
  x: playerSettings.distance,
  y: 50,
  points: 0,
}

context.fillStyle = playerSettings.color;
context.fillRect(player1.x, player1.y, playerSettings.width, playerSettings.height);


const player2 = {
  x: canvas.width-playerSettings.distance-playerSettings.width,
  y: 50,
  points: 2,
}

context.fillStyle = playerSettings.color;
context.fillRect(player2.x, player2.y, playerSettings.width, playerSettings.height);



// Diesen Code können wir weiter optimieren, indem wir eine Klasse für den Player nutzen. So können die playerSettings Teil des Player-Objektes sein ohne dass wir uns wiederholen müssen:

class Player {
  // Einstellungen, die für alle Player gelten & auf die wir außerhalb der Instanz zugreifen müssen, können statisch gespeichert werden:
  static distance = 20;
  static width = 20;
  static height = 50;
  static color = 'pink';

  // static staticPoints = 0;


  constructor(x, y) {
    this.x = x;
    this.y = y;
    // Points könnten auch hier definiert sein. Das ist dasselbe wie unten:
    // this.points = 0;
  }

  // Einstellungen, die für Instanzen individuell sind, müssen in der Instanz gespeichert und nicht statisch:
  points = 0;

  draw(context) {
    context.fillStyle = Player.color;
    context.fillRect(this.x, this.y, Player.width, Player.height);
  }
}

const player3 = new Player(Player.distance, 120);
player3.draw(context);

const player4 = new Player(canvas.width-Player.distance-Player.width, 120);
player4.draw(context);

// Die Punktzahl ist in der Instanz gespeichert.
// Dadurch hat jeder Player seine eigene Punktzahl.
player3.points++;
console.log(player3.points); // 1
console.log(player4.points); // 0

// Player.staticPoints++;
// console.log(Player.staticPoints); // 1



/*
  Ball zeichnen
  
  Ein Kreis ist ein Pfad im Canvas:
  => context.arc(xPos, yPos, radius, startWinkel, endWinkel);

  Winkel werden in Radian definiert:
  => 360 Grad === 2 * Math.PI
*/
const ball = {
  radius: 10,
  x: 200,
  y: 200,
  color: 'white',
  lineWidth: 4,
  borderColor: 'red',
}

context.fillStyle = ball.color;
context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
context.fill();

// Outline zeichnen
context.lineWidth = ball.lineWidth;
context.strokeStyle = ball.borderColor;
context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
context.stroke();


/*
  Text zeichnen (Punktzahl anzeigen)
*/
context.font = '20px Helvetica';
context.fillStyle = 'yellow';
context.textAlign = 'center';

context.fillText(player1.points, 50, 20);
context.fillText(player2.points, canvas.width-50, 20);




