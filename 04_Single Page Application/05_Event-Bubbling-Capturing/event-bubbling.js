//////////////////////////
// Event-Bubbling/Capturing & Event-Delegation
//////////////////////////

// Events bewegen sich in zwei Phasen durch unseren DOM.
// Die erste Phase ist das `Capturing`. Hier bewegt sich das Event vom obersten zum untersten Element.
// Die zweite Phase ist das "Bubbling". Hier bewegt sich das Event vom untersten zum obersten Element.

// Ein Event-Listener wird entweder in der Capturing-Phase oder der Bubbling-Phase getriggert.
// Wir können selbst einstellen, wann ein Event-Listener getriggert werden soll.

// Event-Listener während der Bubbling-Phase:
// element.addEventListener(eventType, callbackFn)

// Event-Listener während der Capturing-Phase:
// element.addEventListener(eventType, callbackFn, true)


// Vorteile vom Bubbling:
// * Interaktion mit verschachtelten Elementen ist einfach möglich
// * Wir brauchen weniger Event-Listener, da wir Events von verschachtelten Elementen einfach auf Elternelementen abfangen können (Event-Delegation)


// Beispiel 01: Event-Delegation am Beispiel einer ToDo-Liste
// => Der Nutzer soll mit jedem ToDo interagieren können. Beim Klick soll sich das Styling ändern.
// => Dank des Event-Bubbling reicht es aus einen Event-Listener zum `ul`-Element hinzuzufügen. Dieser fängt dann alle Klick Events aller li-Elemente ab. So sparen wir Ressourcen (weniger Event-Listener ist performanter).

const toDoList = document.querySelector('#todos');

toDoList.addEventListener('click', event => {
  // event.target ist das Element, auf das geklickt wurde:
  // console.log('Event.Target');
  // console.log(event.target);

  // Nur beim Klick auf das span-Element reagieren:
  // if (event.target.classList.contains('done-btn')) {
  if (event.target.matches('.done-btn')) {
    console.log('Done-Btn wurde geklickt');

    // Auf das li-Element (Elternelement) zugreifen?
    const liElement = event.target.parentElement;
    // const liElement = event.target.closest('li');
    console.log(liElement);
    
    liElement.classList.toggle('linethrough');
  }
})


// Beispiel 2: Capture & Bubbling kombinieren & mit stopPropagation() stoppen

// Wir fügen Capturing & Bubbling Event-Listener zu unserer Liste hinzu.
// Mittels event.stopPropagation() können wir die Weitergabe eines Events unterbinden

// event.stopPropagation() => stoppt die Weitergabe des Events im DOM

const listener1 = document.querySelector('#event-listener-1');
const listener2 = document.querySelector('#event-listener-2');

listener1.addEventListener('click', event => {
  console.log('EventListener #1: Bubbling');
  // event.stopPropagation();
});

listener1.addEventListener('click', event => {
  console.log('EventListener #1: Capturing');
  // event.stopPropagation();
}, true);

listener2.addEventListener('click', event => {
  console.log('EventListener #2: Bubbling');
  event.stopPropagation();
});

listener2.addEventListener('click', event => {
  console.log('EventListener #2: Capturing');
  // event.stopPropagation();
}, true);