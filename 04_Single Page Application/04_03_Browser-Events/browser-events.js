////////////////////////////////
// Browser-Events / DOM-Events
////////////////////////////////

// DOM-Events werden vom Browser ausgelöst und geben uns ein Update zum Status des DOM.

// Wichtige DOM-Events:

// * 'DOMContentLoaded' -> Zeitpunkt, wenn die Elemente der Seite geladen wurden (aber Ressourcen wie Bilder noch nicht)

// * 'load' -> Zeitpunkt, wenn alle Elemente & Ressourcen der Seite geladen wurden (inkl. Bilder, Audio-Dateien etc.)


// DOMContenLoaded
window.addEventListener('DOMContentLoaded', event => {
  console.log('DOMContentLoadedEvent: Alle HTML-Elemente wurden geladen');
})


// Load-Event
window.addEventListener('load', event => {
  console.log('Load-Event: Webseite wurde vollständig geladen');
})

// Alternativ kann das 'load'-Event auch so definiert werden:
window.onload = event => {
  console.log('Load-Event: Webseite wurde vollständig geladen (onload)');
};


