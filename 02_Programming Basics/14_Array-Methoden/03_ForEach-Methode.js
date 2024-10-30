/////////////////////////
// Die ForEach-Methode
////////////////////////

// Array.prototype.forEach(callbackFunction)

// Die ForEach-Methode iteriert durch den Array und führt die callbackFunction mit jedem einzelnen Element des Arrays aus.

// Es gibt kein Ergebnis zurück.

// Die ForEach-Methode ist im Prinzip nichts Anderes als ein for-Loop (ohne `continue`- oder `break`-Funktionalität).

let sports = ["basketball", "baseball", "volleyball", "golf", "ski"];

// Beispiel: Durch Array loopen & Werte in der Konsole ausgeben
sports.forEach((sport) => {
  console.log(`Sportart: ${sport}`);
})

/*
Sportart: basketball
Sportart: baseball
Sportart: volleyball
Sportart: golf
Sportart: ski
*/

// Damit ist die forEach-Methode nichts Anderes als ein for-of-Loop:
for (const sport of sports) {
  console.log(`Sportart: ${sport}`);
}


// Die callbackFunction hat in der Regel einen Parameter. Dieser ist das Element des Arrays, welches verarbeitet wird.
// Sie kann aber bis zu drei Parameter haben:

// callbackFunction(element, index, array)
// * element => Element des Arrays
// * index => Index-Position des Elements
// * array => Original-Array

sports = ["golf", "ski"];

sports.forEach((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Original-Array: ${array}`);
})
/*
Element: golf, Index: 0, Original-Array: golf,ski
Element: ski, Index: 1, Original-Array: golf,ski
*/


// Beispiel: Iteration durch Array aus Objekten:
const users = [
  {id: 1, name: "John"},
  {id: 2, name: "Michaela"},
  {id: 3, name: "Anna"}
];

// Name & Id von Nutzern mittels forEach in der Konsole ausgeben:
users.forEach(user => {
  console.log(`Id: ${user.id}, Name: ${user.name}`)
})

/*
Id: 1, Name: John
Id: 2, Name: Michaela
Id: 3, Name: Anna
*/


