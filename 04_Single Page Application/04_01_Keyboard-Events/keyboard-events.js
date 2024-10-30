//////////////////////////
// Keyboard-Events
//////////////////////////

// Arbeit mit Events
// 1. Event-Listener hinzufügen (zu einem Elemenet, zum document oder zum window)

// 2. Event-Identifier definieren ('keyup', 'keydow', 'click', ...)
// Dokumentation: https://developer.mozilla.org/en-US/docs/Web/Events

// 3. Callback-Funktion übergeben, die ausgeführt wird, wenn das Event registriert wird

// 4. Die Callback-Funktion hat ein Argument, welches das Event-Objekt mit Informationen zum registrierten Event enthält.


// Keyboard-Events:
// 'keydown' -> Taste wird gedrückt
// 'keyup' -> Taste wird losgelassen

// KeyboardEvent-Objekt:
// event.code -> Name der Taste, die gedrückt wurde (Position ist immer dieselbe unabhängig vom Layout) (z.B. 'KeyE', 'KeyF')
// event.key -> Wert der Taste (z.B. 'e', 'E', 'f', ..)

let isKeyFPressed = false;

document.addEventListener('keydown', event => {
  console.log('Keydown registriert');
  // console.log(event);

  console.log(`Name der Taste: ${event.code}, Wert der Taste: ${event.key}`);

  switch (event.code) {
    case 'KeyF':
      isKeyFPressed = true;
      break;
  }
});


const onKeyUp = event => {
  console.log('Keyup registriert');
  console.log(event);

  switch (event.code) {
    case 'KeyF':
      isKeyFPressed = false;
      break;
  }
}

document.addEventListener('keyup', onKeyUp);



// Event-Listener wieder entfernen
// => removeEventListener(eventIdentifier, callbackFunction)
// (Um ein Event wieder zu entfernen, müssen wir die Referenz zur CallbackFunktion übergeben)

document.removeEventListener('keyup', onKeyUp);