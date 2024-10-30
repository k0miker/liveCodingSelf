////////////////////////////////////
// Arrays & Strings
////////////////////////////////////


//////////////////////////////////
// Von String zu Array konvertieren
//////////////////////////////////

//////////////////////////////////
// String.prototype.split(separator)
//////////////////////////////////
// * Beschreibung: Die splitMethode teilt einen String in ein Array von Strings, indem sie den String anhand eines angegebenen Trennzeichens (Separators) aufteilt. Der ursprüngliche String bleibt dabei unverändert.

let string = "1,2,3,4";

let numbers = string.split(",");
console.log(numbers); // [ '1', '2', '3', '4' ]

string = "Hallo mein Name ist Micha";
let array = string.split(" ");
console.log(array); // [ 'Hallo', 'mein', 'Name', 'ist', 'Micha' ]


//////////////////////////////////
// Array.prototype.join(separator)
//////////////////////////////////
// * Beschreibung: Die joinMethode verbindet alle Elemente eines Arrays zu einem String und gibt diesen String zurück. Sie können ein Trennzeichen angeben, das zwischen den Elementen eingefügt wird.

array = [ '1', '2', '3', '4' ];

string = array.join(", ");
console.log(string); // '1, 2, 3, 4'

string = array.join("!");
console.log(string); // '1!2!3!4'


