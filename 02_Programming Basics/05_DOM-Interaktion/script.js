console.log('Hallo Javascript');

const headline = document.querySelector('#headline');
console.log(headline); // <h2 id="headline"></h2>

// Inneren Text von HTML-Elementen setzen:
headline.textContent = 'Hier Klicken';

// CSS bearbeiten:
// (Inline CSS)
headline.style.color = 'blue';
headline.style.backgroundColor = 'aliceblue';
headline.style.padding = '2rem';
headline.style.textAlign = 'center';

// CSS-Klasse hinzufügen:
headline.classList.add('highlight-headline');
console.log(headline);

// Auf Events reagieren
let clickCount = 0;
headline.addEventListener('click', (event) => {
  console.log('Headline angeklickt');

  // Hier kann dann unsere ganze Event-Logik rein:
  headline.classList.toggle('highlight-headline');
  clickCount++;

  document.querySelector('#click-count span').textContent = clickCount;

  if (clickCount === 8) {
    document.querySelector('#click-count').classList.add('red-highlight');
    headline.textContent = 'Wooooow';
  }
})


// Auf Keyboard-Events reagieren:
let boxRotation = 0;
const rotateBox = document.querySelector('#rotate-box');
window.addEventListener('keydown', (event) => {
  // console.log(`Keydown-Event: event.code: ${event.code}, event.key: ${event.key}`);

  if (event.key === 'ArrowUp') {
    boxRotation += 10;
    rotateBox.style.transform = `rotate(${boxRotation}deg)`;
  } else if (event.key === 'ArrowDown') {
    boxRotation -= 10;
    rotateBox.style.transform = `rotate(${boxRotation}deg)`;
  }
})

window.addEventListener('keyup', (event) => {
  // console.log(`Keydown-Event: event.code: ${event.code}, event.key: ${event.key}`);
})


// Texteingabe
const textInput = document.querySelector('#text-input');
const errorMessage = document.querySelector('#input-error');

textInput.addEventListener('input', (event) => {
  console.log('Input-Event Texteingabe: ', textInput.value);

  if (textInput.value.length < 8) {
    errorMessage.textContent = 'Fehler: Mindestens 8 Buchstaben notwendig';
    errorMessage.style.color = 'red';
  } else {
    errorMessage.textContent = 'Super!';
    errorMessage.style.color = 'green';
  }
})

// 'change' -> Wenn die Eingabe in einem Eingabefeld beendet ist
// 'submit' -> Wenn der Submit-Button geklickt wird


// Checkboxen & Radio-Buttons
const redCheckbox = document.querySelector('#red-checkbox');
const box = document.querySelector('#checkbox-box');
const form = document.querySelector('#color-form');
const greenInput = document.querySelector('#green-input');

form.addEventListener('input', (event) => {
  // console.log(`redCheckbox.checked: ${redCheckbox.checked}`);
  let green = greenInput.value;
  let blue = 0;
  let red = 0;

  if (redCheckbox.checked) {
    // box.style.backgroundColor = 'red';
    red = 255;
  } else {
    // box.style.backgroundColor = 'orange';
    red = 0;
  }

  if (green > 255 || green <= 0) green = 0;

  console.log(`rgb(${red}, ${green}, ${blue})`);
  box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})