//////////////////////////////
// process.argv
// -> Argumente mit Node in einem Terminal-Programm entgegen nehmen

// Wenn ihr ein JS-Skript mit Node im Terminal ausführt, dann gibt es die Möglichkeit zusätzliche Argumente mit zu übergeben.
// Diese Argumente sind als Array unter der Variable `process.argv` abrufbar.
// `process` ist ein Objekt der Node-Umgebung, in der das Skript ausgeführt wird.

console.log(process.argv); // [ 'pfad/zu/node', /pfad/zum/skript.js' ]

// Wenn keine Argumente übergeben wurden, enthält der Array nur zwei Strings mit Dateipfaden (zur Node-Installation & zum ausgeführten Skript)

// Alle Werte, die nach der Skript-Datei im Befehl stehen, werden als Argumente übergeben:

// Befehl: node process-argv.js hallo welt
process.argv; // [ 'pfad/zu/node', /pfad/zum/skript.js', 'hallo', 'welt']

process.argv[2]; // 'hallo'
process.argv[3]; // 'welt'


// Befehl: node process-argv.js 12 14 16
process.argv; // [ 'pfad/zu/node', /pfad/zum/skript.js', '12, '14', '16']

process.argv[2]; // '12'
process.argv[3]; // '14'
process.argv[4]; // '16'


// Console.log
console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(process.argv[4]);



