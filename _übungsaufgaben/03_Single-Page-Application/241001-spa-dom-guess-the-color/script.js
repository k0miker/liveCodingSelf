////////////////////////
// Color Guessing Game
///////////////////////

// Welche Einzelteile brauchen wir?


// Variablen für alle Daten:
let numberOfSquares = 6;
const colors = [];
let pickedColor;

// HTML-Elemente
const squares = document.querySelectorAll('.square');
const modeButtons = document.querySelectorAll('.mode');
const resetButton = document.querySelector('#reset');
const message = document.querySelector('#message');
const colorDisplay = document.querySelector('#color-display');


// Event-Listener
resetButton.addEventListener('click', initGame);

for (const square of squares) {
  square.addEventListener('click', selectColor);
}

for (const modeButton of modeButtons) {
  modeButton.addEventListener('click', selectMode);
}


// Spiel starten
initGame();


// Funktionen
function initGame() {
  // Spiel wieder neu aufsetzen
  for (let i=0; i<squares.length; i++) {
    if (i < numberOfSquares) {
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }

  // Squares zufällige Farben zuordnen
  for (let i=0; i<numberOfSquares; i++) {
    const randomColor = generateRandomColor();
    colors[i] = randomColor;
    squares[i].style.backgroundColor = randomColor;
  }

  // Farbe, die erraten werden soll (pickedColor)
  const pickedColorIndex = Math.floor(Math.random() * colors.length);
  pickedColor = colors[pickedColorIndex];
  colorDisplay.innerText = pickedColor;
}

function selectColor(event) {
  const selectedColor = event.target.style.backgroundColor;
  const isCorrectColor = selectedColor === pickedColor;
  
  if (isCorrectColor) {
    colorDisplay.innerText = 'Du hast gewonnen!!!';
  } else {
    event.target.style.display = 'none';
  }
}

function selectMode(event) {
  // Welcher Schwierigkeitsgrad ist ausgewählt?
  if (!event.target.classList.contains('selected')) {
    event.target.classList.add('selected');

    for (const modeButton of modeButtons) {
      if (modeButton !== event.target) {
        modeButton.classList.remove('selected');
      }
    }

    numberOfSquares = event.target.innerText === 'EASY' ? 3 : 6;
    initGame();
  }
}


function generateRandomColor() {
  // 'rgb(100, 10, 200)'
  // => Werte sind 0-255
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${blue}, ${green})`;
}