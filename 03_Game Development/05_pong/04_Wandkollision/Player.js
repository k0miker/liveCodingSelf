export default class Player {
  constructor(x, y, width, height, color, canvas) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  points = 0;
  velocity = 2;
  direction = {
    x: 0,
    y: 0
  };

  update() {
    this.checkWallCollision();

    this.x += this.direction.x * this.velocity;
    this.y += this.direction.y * this.velocity;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }

  checkWallCollision() {
    if (this.collidesWithBottomWall()) {
      this.direction.y = 0;
      // Spieler 1px vom Rand entfernt setzen:
      this.y = this.canvas.height - this.height - 1;
    }
    if (this.collidesWithTopWall()) {
      this.direction.y = 0;
      // Spieler 1px vom Rand entfernt setzen:
      this.y = 1;
    }
  }

  collidesWithTopWall() {
    // Kollision mit oberer Wand
    return this.y <= 0
  }

  collidesWithBottomWall() {
    // Kollision mit unterer Wand
    return this.y >= this.canvas.height - this.height
  }
}