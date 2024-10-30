// normalerweise schreibt man alle imports oben in der Datei. 

// importiere named exports
import { banana, apple, addierer } from "./namedExports.js";
console.log(banana); // yellow
console.log(apple); // red

addierer(); // 1
addierer(); // 2

// ich kann auch alle exportierten Elemente aus einer Datei importieren. 
import * as ding from "./namedExports.js";
console.log(ding.banana); // yellow

// wenn ich etwas als default importiere kann ich es nennen wie ich will
import addierer1 from "./defaultExport.js";
console.log(addierer1()); // 21