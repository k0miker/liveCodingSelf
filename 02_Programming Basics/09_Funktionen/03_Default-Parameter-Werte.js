/////////////////////////////
// Default-Parameter-Werte
/////////////////////////////

// Wenn der Wert eines Parameters beim Ausführen der Funktion nicht definiert ist, ist der Wert `undefined`:

function greet(name) {
  console.log(`Hallo ${name}`);
}

greet(); // Hallo undefined


// Wir können einen Standardwert definieren, der gesetzt wird, falls ein Parameter nicht definiert ist:

function sayHello(name = 'Nutzer') {
  console.log(`Hallo ${name}`);
}

sayHello(); // Hallo Nutzer

sayHello('Joe'); // Hallo Joe