////////////////////////////
// Maus-Events
////////////////////////////

// Es gibt eine ganze Reihe an Maus-Events: https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// Typische Events:
// 'click' -> Maus-Klick
// 'mouseenter' -> Maus dringt in den Bereich über dem Element ein
// 'mouseleave' -> Maus verlässt den Bereich über dem Element wieder
// 'mouseover' -> Maus befindet sich über dem Element

// Das Event-Objekt ist ein PointerEvent-Objekt:
// * event.type => Typ des Events
// * event.target => Element, auf dem das Event stattgefunden hat
// * event.currentTarget => Element, auf dem der Event-Listener registriert ist

// * event.clientX => x-Position der Maus auf der Webseite
// * event.clientY => y-Position der Maus auf der Webseite

// * event.screenX => x-Position der Maus auf dem Bildschirm
// * event.screenY => y-Position der Maus auf dem Bildschirm



const clickBox = document.querySelector('#click');
const moveBox = document.querySelector('#mousemove');
const overBox = document.querySelector('#mouseover');
const enterBox = document.querySelector('#mouseenter');
const leaveBox = document.querySelector('#mouseleave');


// Maus-Klick
const onClick = event => {
  console.log('Klick wurde registriert');
  console.log(event);

  console.log('event.target');
  console.log(event.target);

  console.log('event.currentTarget');
  console.log(event.currentTarget);

  console.log(`Position der Maus im Fenster: x: ${event.clientX}, y: ${event.clientY}`);

  isClicked = !isClicked;
  clickBox.style.backgroundColor = isClicked ? 'red' : 'orange';
};

let isClicked = false;

clickBox.addEventListener('click', onClick);

// Alternative kann das Event auch so definiert werden:
clickBox.onclick = onClick;


// MouseMove
moveBox.addEventListener('mousemove', event => {
  moveBox.innerText = `x: ${event.clientX}, y: ${event.clientY}`;
})

overBox.addEventListener('mouseover', event => {
  overBox.innerText = `x: ${event.clientX}, y: ${event.clientY}`;
})

// Alternative kann das Event auch so definiert werden:
// moveBox.onmousemove = ...;

// MouseEnter
let enterCount = 0;

enterBox.addEventListener('mouseenter', event => {
  enterCount++;
  enterBox.style.backgroundColor = enterCount % 2 === 0 ? 'orange' : 'red';
})


// Alternative kann das Event auch so definiert werden:
// enterBox.onmouseenter = ...;


// MouseEnter
let leaveCount = 0;

leaveBox.addEventListener('mouseleave', event => {
  leaveCount++;
  leaveBox.style.backgroundColor = leaveCount % 2 === 0 ? 'orange' : 'red';
})

// Alternative kann das Event auch so definiert werden:
// leaveBox.onmouseleave = ...;