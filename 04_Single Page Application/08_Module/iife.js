// Module

/* Probleme die wir Lösen wollen: 
1. Aus anderen Dateien Code importieren/ausführen
2. Zugriffsberechtigungen in anderen Dateien/Modulen steuern
*/


// Eine Art diese Zugriffsberechtigungen zu verwalten sind IIFE's. 
// IIFE = Immediately Invoked Function Expression

// Beispiel:

(function() {
    var x = 10;
    console.log("hallo welt");
    console.log(x);
})();

// console.log(x);

// Module Pattern nutzt IIFE's, um Modules mit öffentlichen und privaten Mitgliedern zu erstellen. Es kapselt zusammengehörigen Code in einer Einheit und gibt nur die Teile frei, die öffentlich sein müssen. 

var myModule = (function() {
    // private variable
    var privateCounter = 0;

    // private funktion
    function privateFunction() {
        return privateCounter++;// addiert 1 zu dem counter bei jedem aufruf
    }

    // Öffentliche API, hier kann drauf zugegriffen werden. 
    return { // wir returnen ein Objekt
        publicFunction: function() { // auf dem Objekt gibt es eine Funktion
           return privateFunction(); // diese Funktion returned, das privateFunction() ausgeführt wird.
        }
    };
})();

console.log(myModule.publicFunction()); // 0 
console.log(myModule.publicFunction()); // 1