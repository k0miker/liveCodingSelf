
/* 
  Das Defer-Attribut sorgt dafür, dass das Skript erst ausgeführt wird, nachdem alle HTML-Elemente (also der DOM) geladen wurde: 

  WICHTIG: Das Defer-Attribut funktioniert nur mit externen Skripten.
*/

console.log('Ich werde dank `defer` auch später ausgeführt (nachdem die Inhalte der Seite geladen wurden)');

/* Kurzer Test, ob wir hier auf HTML-Elemente zugreifen können: */
const headline4 = document.querySelector('h1');
console.log(headline4); // null