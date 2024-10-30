console.log('Hallo JS');

// HTML-Element auswählen
const headline = document.querySelector('h1');
console.log(headline);

const listElement = document.querySelector('ul li:nth-child(2)');
console.log(listElement);

// Funktioniert nicht mit Pseudoelementen
const pseudoElement = document.querySelector('h1::after');
console.log(pseudoElement);


// CSS bearbeiten
headline.style.color = 'blue';
headline.style.textTransform = 'uppercase';
headline.style.backgroundColor = 'grey';


// CSS-Klasse hinzufügen
listElement.classList.add('list-text');

// CSS-Klasse entfernen
listElement.classList.remove('list-text');


// Auf Klick-Event reagieren
const button = document.querySelector('#click-me');
let clickCounter = 0;

button.addEventListener('click', (event) => {
  // Dieser Code wird ausgeführt, wenn das Klick-Event registriert wird
  console.log('Button geklickt');

  // Klasse hinzufügen & wieder entfernen
  listElement.classList.toggle('list-text');

  // Option 1:
  if (clickCounter === 1) {
    listElement.style.color = 'orange';
    clickCounter = 2;
  } else {
    listElement.style.color = 'blue';
    clickCounter = 1;
  }

  // Option 2: 
  // if (clickCounter % 2 === 0) {
  //   listElement.style.color = 'orange';
  // } else {
  //   listElement.style.color = 'blue';
  // }
  // clickCounter++;
})


// Texteingabe
const input = document.querySelector('#text-input');
const text = document.querySelector('#input-feedback');

input.addEventListener('input', onTextInput);

function onTextInput(event) {
  console.log('Texteingabe: ', input.value);

  if (input.value === "") {
    text.innerText = "Leerer String";
  } else if (input.value.includes("!")) {
    text.innerText = "Eingabe enthält Ausrufezeichen";
  }
}


// Radiobutton-Eingabe
const form = document.querySelector('form');
const redRadioButton = document.querySelector('#color-red');
const greenRadioButton = document.querySelector('#color-green');
const blueRadioButton = document.querySelector('#color-blue');

form.addEventListener('input', (event) => {
  if (redRadioButton.checked) {
    form.style.backgroundColor = 'red';
  } else if (greenRadioButton.checked) {
    form.style.backgroundColor = 'green';
  } else if (blueRadioButton.checked) {
    form.style.backgroundColor = 'blue';
  }
})


// Zwei globale Variablen, auf die wir im Browser immer zugreifen können:
console.log(window);
console.log(document);

