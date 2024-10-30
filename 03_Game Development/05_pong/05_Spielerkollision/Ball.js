export default class Ball {
  constructor(x, y, radius, color, player1, player2, canvas) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.canvas = canvas;
    this.player1 = player1;
    this.player2 = player2;
    this.context = canvas.getContext("2d");
  }

  // Geschwindigkeit des Balls
  velocity = 1;
  // Richtung des Balls
  direction = {
    x: 1,
    y: -1,
  };

  update() {
    this.checkPlayerCollision(this.player1);
    this.checkPlayerCollision(this.player2);
    this.checkWallCollision();
    this.updatePosition();
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.context.closePath();
    this.context.fill();
  }

  updatePosition() {
    // Neue Position += Richtung * Geschwindigkeit
    this.x += this.direction.x * this.velocity;
    this.y += this.direction.y * this.velocity;
  }

  checkWallCollision() {
    if (this.collidesWithTopWall()) {
      this.direction.y *= -1;
    }
    if (this.collidesWithRightWall()) {
      this.direction.x *= -1;
    }
    if (this.collidesWithBottomWall()) {
      this.direction.y *= -1;
    }
    if (this.collidesWithLeftWall()) {
      this.direction.x *= -1;
    }
  }

  checkPlayerCollision(player) {
    if (
      // Überlappung auf der x-Achse testen:
      this.x - this.radius < player.x + player.width &&
      this.x + this.radius > player.x &&

      // Überlappung auf der y-Achse testen:
      this.y + this.radius > player.y &&
      this.y - this.radius < player.y + player.height
    ) {
      this.direction.x *= -1;
    }
  }

  collidesWithTopWall() {
    // Kollision mit oberer Wand testen:
    // => Oberkante des Balls => ball.y - ball.radius
    // => Position der obere Wand => y <= 0
    return this.y - this.radius <= 0;
  }

  collidesWithRightWall() {
    // Kollision mit rechter Wand
    // => Rechte Kante des Balls => ball.x + radius
    // => Position der rechten Wand => x >= canvas.width
    return this.x + this.radius >= this.canvas.width;
  }

  collidesWithBottomWall() {
    // Kollision mit unterer Wand
    // => Untere Kante des Balls => ball.y + ball.radius
    // => Position der unteren Wand => ball.y >= canvas.height
    return this.y + this.radius >= this.canvas.height;
  }

  collidesWithLeftWall() {
    // Kollision mit linker Wand
    // => Linke Kante des Balls => ball.x - ball.radius
    // => Position der linken Wand => ball.x <= 0
    return this.x - this.radius <= 0;
  }
}
