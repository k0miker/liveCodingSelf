///////////////////////////
// setTimeout & setInterval
////////////////////////////

// setInterval & setInterval sind Funktionen von Javascript, die Callback-Funktionen entgegenen nehmen und zu einem späteren Zeitpunkt ausführen.
// Damit sind beide Funktionen höherer Ordnung.

///////////////////////////////////////
// setTimeout(callbackFunction, timeout)
// => Führt die `callbackFunction` nach der definieren Zeit (`timeout`) aus.
// Der `timeout` wird in Millisekunden definiert (1000 === 1 Sekunde)

function sayHello() {
  console.log('hello');
}

// sayHello wird nach 2 Sekunden ausgeführt
setTimeout(sayHello, 2000);

// Anonyme Funktionen können auch übergeben werden:
setTimeout(() => {
  console.log('4 Sekunden später');
}, 4000);

console.log('Ich werde sofort ausgeführt');




/////////////////////////
// setInterval(callbackFunction, timeout)
// => Führt die `callbackFunction` regelmäßig aus. Das Invervall definiert der `timeout`.
// (Die Funktion wird so oft ausgeführt bis setInterval beendet wird)


// Diese Funktion wird so unendlich oft und jede Sekunde erneut ausgeführt:
// setInterval(() => {
//   console.log('Hallo Interval');
// }, 1000);


// Wenn wir das Interval wieder beenden wollen, müssen wir die intervalId speichern & dann `clearInterval(id)` ausführen:
const intervalId = setInterval(() => {
  console.log('Hallo Interval');
}, 1000);


// Zum Beenden müsesen wir `clearInterval(intervalId)` ausführen.
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Das Interval wurde nach 10 Sekunden beendet');
}, 10000);