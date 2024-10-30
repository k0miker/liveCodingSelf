///////////////////////
// Formular-Events
///////////////////////

// Form-Events sind Events, die sich rund um Eingabeformulare drehen. Es gibt eine ganze Reihe an verschiedenen Events:

// Form-Events (für das <form>-Element):
// * 'submit' => Dieses Event wird ausgelöst, wenn ein Formular abgesendet wird.
// * 'reset' => Dieses Event wird ausgelöst, wenn ein Reset-Button gedrückt wird


// Input-Event (für die <input>-Elemente):
// * 'change' => Event, wenn sich der Wert eines Eingabefelds ändert (nachdem die Eingabe abgeschlossen wurde):
// * 'input' => Event, wenn sich der Wert eines Eingabefelds ändert (während der Eingabe):



// Daten von einem abgesendeten Formular abrufen:

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  // Standardmäßig wird beim submit-Event die Seite neu geladen.
  // Dieses Verhalten können wir mit `event.preventDefault()` unterbinden:
  event.preventDefault();

  console.log('Formular wird abgesendet');

  // Hier können wir dann auf die Daten im Formular zugreifen:
  // Zugriff auf das Formular mit 'form' oder 'event.target' oder 'event.currentTarget'

  // Das Formular enthält dann alle Eingabefelder unter 'form.elements'
  console.log(form.elements);

  // Zugriff auf Element:
  // form.elements[<id>] -> form.elements['vorname-input']
  // form.elements.name -> form.elements.vorname
  console.log(form.elements.vorname);
  console.log(form.elements.checkbox);

  // Zugriff auf Wert von Eingabefeldern
  // input.value => Wert eines Eingabefeldes
  // input.checked => Boolean-Wert einer Checkbox/Radio-Button
  console.log(`Eingabetext: ${form.elements.vorname.value}`);
  console.log(`Eingabetext Checked: ${form.elements.vorname.checked}`);
  console.log(`Checkbox-Wert: ${form.elements.checkbox.checked}`);
  console.log(`Checkbox-Value: ${form.elements.checkbox.value}`);
});


// Input-Events:
// Unterschied zwischen `input` & 'change' Events

const vornameInput = document.querySelector('#vorname-input');

vornameInput.addEventListener('change', event => {
  // Dieses Event feuert erst, wenn das nächste Eingabefeld ausgewählt ist
  console.log(`Change-Event: ${vornameInput.value}`);
})

vornameInput.addEventListener('input', event => {
  event.preventDefault();

  // Dieses Event feuert bei jedem Buchstaben, der eingegeben wird
  console.log(`Input-Event: ${vornameInput.value}`);

  console.log(event);

  // Beispiel: Eingabe limitieren (z.B. der Buchstabe 'a' darf nicht eingegeben wrden:)
   
  // Buchstabe, der eingegeben wurde: `data`
  // event.inputType => Welche Aktion wurde ausgeführt
    // 'insertText' -> Buchstabe hinzugefǔgt (Buchstabe ist `event.data`)
    // 'deleteContentBackward' -> Buchstabe wurde gelöscht 
  if (event.inputType === 'insertText' && event.data === 'a') {
    vornameInput.value = vornameInput.value.slice(0, -1);
  }
})