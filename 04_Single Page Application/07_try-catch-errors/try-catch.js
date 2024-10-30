////////////////////////////////////
// try...catch-Syntax
///////////////////////////////////

// Laufzeitfehler sind Fehler, die während des Laufens unserer Webseite auftreten.
// Normalerweise führen diese zum Absturz unseres Programms oder zumindestens zum Nicht-Ausführen einer Funktion.
// Das ist in der Produktion nicht ideal, da unsere Webseite immer für den Nutzer erreichbar und nutzbar sein sollte. Selbst wenn Fehler auftreten während der Nutzung, dann sollten diese Fehler behandelt & kommuniziert werden.


// Das Problem mit Fehlern ist, dass sobald ein Fehler auftritt, wird gar kein Code mehr ausgeführt. Unsere Seite ist abgestürzt:

// Dieses Element existiert auf der Seite nicht & die console-log wird nie ausgeführt:
// const paragraph = document.querySelector('p');
// paragraph.textContent = 'Neuer Inhalt der Seite...';

// console.log('Ich werde nicht mehr ausgeführt, da die Ausführung der Seite abgebrochen wurde...');



// Dafür gibt es die try...catch-Syntax

try {
  // Sobald ein Fehler im try-Block geworfen wird, wird die weitere Ausführung vom Code im try-Block abgebrochen und es geht sofort im catch-Block weiter.

  // Dieses Element existiert auf der Seite nicht & es gibt einen Fehler:
  const paragraph = document.querySelector('.main-paragraph');
  paragraph.textContent = 'Neuer Inhalt der Seite...';

  console.log('Ich werde nicht mehr ausgeführt...');

} catch (error) {
  console.log(`Catch Error: ${error.message}`);

  setErrorMessage(error.message);
}


function setErrorMessage(message) {
  const errorMessage = document.querySelector('.error-message');
  errorMessage.style.color = 'red';
  errorMessage.textContent = `Fehlermeldung: ${message}`;
}




////////////////////////
// Eigene Fehler werfen

// Wir können auch eigene Fehler werfen und diese dann abfangen, anstatt nur auf vom Browser geworfene Fehler zu reagieren.

// Das geht mit der folgenden Syntax:
// throw new Error('Beschreibung des Fehlers');

// Neben der Standardklasse Error gibt es auch Klassen für jeden Typ von Error:
// throw new ReferenceError('...');
// throw new SyntaxError('...');

// Eine Übersicht mit allen Fehlerklassen findet ihr hier: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

const form = document.querySelector('form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Fehler werfen, wenn uns die eingegebenen Daten nicht passen:
  try {
    const vorname = form.elements.vorname.value;
    successMessage.innerText = '';

    if (vorname === '') {
      throw new Error('Vorname ist ein leerer String')
    }
    if (vorname.length > 12) {
      throw new Error('Die Eingabe ist zu lang. Weniger als 12 Zeichen erlaubt.');
    }

    // Die Daten sind valide & können weiter verarbeitet werden:
    successMessage.innerText = `Deine Eingabe war valide. Danke dir, ${vorname}`;
  } catch (error) {
    console.log(`Catch Error: ${error.message}`);
    setErrorMessage(error.message);
  }
})


////////////////////////
// Das Error-Objekt

const error = new Error('Mein eigener Fehler');
console.log(error);

// Wichtige Eigenschaften:
// * message -> Beschreibung des Fehlers
// * name -> Name des Fehlers

console.log(error.name); // Error
console.log(error.message); // 'Mein eigener Fehler'