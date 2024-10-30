
const canvas = document.querySelector('#canvas');
canvas.width = 300;
canvas.height = 200;

const context = canvas.getContext('2d');
console.log(context);


// Hintergrundfarbe
context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);


// Spieldaten
let xPosition = 20;
let yPosition = 20;

let isArrowUpPressed = false;
let isArrowDownPressed = false;
let isArrowLeftPressed = false;
let isArrowRightPressed = false;

// Keyboard-Input
document.addEventListener('keydown', (event) => {
  // Namen der Taste herausfinden
  console.log(`Keyup: ${event.code}`); 

  switch (event.code) {
    case 'ArrowUp':
        isArrowUpPressed = true;
        break;
    case 'ArrowDown':
      isArrowDownPressed = true;
      break;
    case 'ArrowLeft':
      isArrowLeftPressed = true;
      break;
    case 'ArrowRight':
      isArrowRightPressed = true;
      break;
    default:
      break;
  }
});

document.addEventListener('keyup', (event) => {
  // Namen der Taste herausfinden
  console.log(`Keydown: ${event.code}`);

  switch (event.code) {
    case 'ArrowUp':
        isArrowUpPressed = false;
        break;
    case 'ArrowDown':
      isArrowDownPressed = false;
      break;
    case 'ArrowLeft':
      isArrowLeftPressed = false;
      break;
    case 'ArrowRight':
      isArrowRightPressed = false;
      break;
    default:
      break;
  }
})

// Animations-Loop
function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Auf Keyboard-Input reagieren
  if (isArrowLeftPressed) {
    xPosition -= 0.2;
  }
  if (isArrowRightPressed) {
    xPosition += 0.2;
  }
  if (isArrowUpPressed) {
    yPosition -= 0.2;
  }
  if (isArrowDownPressed) {
    yPosition += 0.2;
  }

  // Hintergrund zeichnen
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Inhalte zeichnen
  context.fillStyle = 'orange';
  context.fillRect(xPosition, yPosition, 10, 10);
  
  // Console.log zum Debuggen
  // console.log(`Up: ${isArrowUpPressed}, Down: ${isArrowDownPressed}, Left: ${isArrowLeftPressed}, Right: ${isArrowRightPressed}`);

  // Animations-Loop starten
  requestAnimationFrame(update);
}

requestAnimationFrame(update);