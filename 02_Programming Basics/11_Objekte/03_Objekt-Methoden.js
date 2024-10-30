///////////////////////////
// Objekt-Methoden
//////////////////////////

// Methoden sind Funktionen, die Teil von Objekten sind.

// Wir haben schon oft mit Objekt-Methoden gearbeitet:

// Array.isArray()
// Math.random()
// Math.max()

// Canvas API:
// context.fillRect()
// context.strokeRect()
// canvas.getContext()

// DOM-Interaktion
// document.getElementById()
// document.querySelector()
// document.createElement()
// element.addEventListener()

// Wie können wir Methoden in Objekten definieren?

const user = {
  // Option 1: Funktionsausdruck
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },

  // Option 2: Abkürzungs-Syntax
  // (Technisch dasselbe wie der Funktionsausdruck)
  sayHi(name) {
    console.log(`Hi ${name}`);
  },

  // (Option 3: Pfeilfunktion => Nutzen wir nicht!)
  // Problem der Pfeilfunktion: Auf `this` können wir hier nicht zugreifen.
  // 'this' wird anders definiert als in einem Funktionsausdruck.
  sayWelcome: (name) => {
    console.log(`Welcome ${name}`);
  },
};

user.sayHello("Hans"); // 'Hello Hans'
user.sayHi("Hans"); // 'Hi Hans'
user.sayWelcome("Hans"); // 'Welcome Hans'
