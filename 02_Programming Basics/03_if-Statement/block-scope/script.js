////////////////////////////////
// Block Scope
////////////////////////////////

// Scope ist der Geltungsbereich von Variablen.

// `const` & `let`-Variablen sind Block-Scope Variablen.
// D.h. Diese sind nur innerhalb des Blocks, in dem sie definiert sind aufrufbar

// `var`-Variablen sind dagegen Function-Scope Variaben.
// D.h. Diese sind innerhalb der gesamten Funktion, in der sie definiert wurden aufrufbar
// (über Blöcke hinweg)


let isLoggedIn = true;

if (isLoggedIn) {
  // Hier beginnt ein neuer Block: { ... }

  // Vom inneren eines Blocks können wir auf Variablen außerhalb zugreifen:
  console.log(isLoggedIn); // true


  let blockLet = 'Block Scope Let';
  const blockConst = 'Block Scope Const';
  var blockVar = 'Function-Scop Var';

  // Auf `blockLet` & `blockConst` können wir nur von innerhalb des Blocks & innerlich verschachtelten Blöcken zugreifen:
  if (isLoggedIn) {
    console.log(blockLet); // Block Scope Let'
    console.log(blockConst); // Block Scope Const'
  }
}

// `const` & `let`-Variablen die innerhalb dieses Blockes definiert sind,
// sind von außerhalb des Blockes nicht erreichbar.
// 
// console.log(blockLet); // ReferenceError: blockLet is not defined
// console.log(blockConst); ; // ReferenceError: blockConst is not defined
console.log(blockVar); // Function-Scop Var



////////////////////////////////////////
// Die Besonderheiten der `var`-Variable
//
// Die `var`-Variable hat einen `function`-Scope & verhälst sich anders als `let` & `const`

// Var-Variablen halten sich nicht an den Block-Scope:
if (true) {
  var blockVar = 'Var';
}

console.log(blockVar); // 'Var'

// Var-Variablen können erreicht werden bevor sie deklariert wurden:
console.log(testVar); // undefined
var testVar = 'Test';

// console.log(testLet); // ReferenceError: Cannot access 'testLet' before initialization
let testLet = 'Test';



// Var-Variablen können ohne Fehler mehrfach deklariert werden (und überschreiben sich dann einfach):
var value = 2;
var value = 4;
console.log(value); // 4

let wert = 2;
// let wert = 4; // SyntaxError: Identifier 'wert' has already been declared
console.log(wert);