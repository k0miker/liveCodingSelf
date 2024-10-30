/////////////////////////////
// Arrays & Objekte
/////////////////////////////

const array = [1, 2, 3, 4];
const object = {};

console.log(typeof array); // 'object'
console.log(typeof object); // 'object'

// Ein Array ist nicht Anderes als ein 'besonderes' Objekt.

// So sieht ein Array eigentlich aus:
const arrayPrototype = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',

  length: 4,
  push: function(...items) { 
    // ...
  }, 
};

console.log(arrayPrototype[0]); // 'a'
console.log(arrayPrototype[1]); // 'b'
console.log(arrayPrototype[2]); // 'c'
console.log(arrayPrototype[3]); // 'd'



// Wie können wir testen, ob eine Variable ein Array oder ein Objekt ist?

const array2 = [1, 2, 3, 4];
const object2 = {};

console.log(typeof array2); // 'object'
console.log(typeof object2); // 'object'
console.log(typeof null); // 'object'

console.log(Array.isArray(array2)); // true
console.log(Array.isArray(object2)); // false


const value = {};

if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
  console.log('Die Variable ist ein Objekt');
}

if (Array.isArray(value)) {
  console.log('Die Variable ist ein Array');
}