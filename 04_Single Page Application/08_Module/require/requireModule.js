// meine kleine Mathe library

// private variable
let grundZahl = 10;

function zuZehnAddieren(zahl) {
    return zahl + grundZahl;
}

function vonZehnSubtrahieren(zahl) {
    return grundZahl - zahl;
}

module.exports = { 
    zuZehnAddieren, 
    vonZehnSubtrahieren
};

