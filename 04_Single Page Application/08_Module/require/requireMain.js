// Wir können Code anhand von require() oder import/export in andere Dateien importieren/exportieren.
// require() ist älter und benutzt man heute nicht mehr so richtig, aber man sieht es oft noch im Internet oder in alten Projekten.

const math = require('./requireModule.js');

console.log(math.zuZehnAddieren(3)); // 13
console.log(math.vonZehnSubtrahieren(2)); // 8
console.log(math.grundZahl); // undefined