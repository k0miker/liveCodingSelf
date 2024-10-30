//////////////////////////////
// Debugger-Statement
/////////////////////////////

// Das debugger-Statement setzt einen Breakpoint im Browser. Die Ausführung des Codes wird gestoppt und ihr könnt im Web-Inspektor euch alle Variablenwerte zu diesem Zeitpunkt anschauen.

// Das ist praktischer als eine console-log-Nachricht, da wir direkt auf alle Variablenwerte zugreifen können.


let counter = 0;

for (let i=0; i<5; i++) {
  debugger;
  counter++;
}