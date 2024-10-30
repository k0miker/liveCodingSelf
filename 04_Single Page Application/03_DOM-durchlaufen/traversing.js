
//********************
//**** Siblings ****
//********************

// previousElementSibling (neue methode)
// nextElementSibling 

// previousSibling (alte methode, die auch leere knoten erreicht)
// nextSibling

// Geschwister sind Knoten die Kinder desselben Elternelements sind
// nextSibling & previousSibling beziehen sich auf alle Knoten, auch Textknoten und Kommentare
// wir wollen in den meisten Fällen nur auf Tags zugreifen und die Elementknoten manipulieren

const activeLi = document.querySelector('#active')

const liPrevEl = activeLi.previousElementSibling
const liPrev = activeLi.previousSibling

console.log(liPrevEl);
console.log(liPrev);

/*
## Der Unterschied von node vs element
- ein `node` kann ein HTML Element sein, aber auch ein Text der Kommentar
- ein Element ist ein spezifischer Typ von nodes, also nur HTML-Tags sind Elemente
- knotes sind elemente
*/


// Übung (selbstständig): Selektiere zuerst .second-section (in variable speichern)
// Wandere von .second-section zu .third-section und gib sie in der console aus.
// tipp:  nextElementSibling

const secondSection = document.querySelector('.second-section')

const thridSection = secondSection.nextElementSibling
console.log(thridSection);



// Kurze Erklärung HTML Element und HTMLCollection
// getElementsByClassName, getElementsByTagName... geben HTMLCollection (quasi Array) zurück!
// sieht es wie ein Array aus. Aber eigentlich handelt es sich nicht um ein Array, sondern um eine Sammlung – ein spezielles arrayartiges iterierbares Objekt.
// 1. Wir können Folgendes verwenden for..of, um darüber zu iterieren
// 2. Array-Methoden funktionieren nicht, da es sich nicht um ein Array handelt

const allSections = document.querySelectorAll('section')[1]
console.log(allSections);   // second-section

// gibt es aber gehört zu den nodelists. 
// an dieser stelle verwenden wir queryselector
let firstSec = document.getElementsByTagName('section')
console.log(firstSec);  // first-section


/* 
-Übung (selbstständig): Durchlaufe mit einer while-schleife alle Listen-Elemente 
in second-section), bis du beim letzten Element angekommen bist. 

TIPP: `nextElementSibling` gibt null zurück, wenn das selektierte Element keinen 
Sibling hat (somit kann die while-schleife beendet werden)
*/

// Zugriff auf das erste Listenelement
let currentLi = document.querySelector('.second-section ul li')

// schleife durchläuft alle LIs bis das letzt null ist
while (currentLi !== null) {
    //inhalt von jeden listItem ausgeben
    console.log(currentLi.textContent);
    // jedes li ersetzten durch das nächste Geschwister-element
    currentLi = currentLi.nextElementSibling
    // wenn das li kein nächstes geschwisterelement mehr hat kommt 'null' raus
}



//*****************
//**** Parents ****
//*****************

// parentElement | parentNode

/*
parentElement und parentNode finden das Eltern-Element, den übergeordneten Knoten des aktuellen Elements. 
parentElement ist eine Eigenschaft des Elements und keine Methode, und kann nur gelesen (read only), 
nicht aber gesetzt werden.
*/

const h1El = document.querySelector('h1')
console.log('h1', h1El);
console.log(h1El.parentElement.parentElement);



//*****************
//*** closest() ***
//*****************

// Die closest() Methode ist eine Funktion, die ein Element oder einen seiner Vorfahren zurückgibt, der einem bestimmten CSS-Selektor entspricht. 
// Die Suche beginnt beim Element selbst und geht dann die Baumstruktur nach oben, bis ein passendes Element gefunden wird oder das Wurzelelement erreicht wird. 
// Wenn kein passendes Element gefunden wird, gibt die Methode null zurück.
// Die Suche nach den Vorfahren oder umfassenden Elementen gehört vor allem in Slideshows und verschachtelten Menüs zu den wiederkehrenden Aufgaben.

const lastLi = document.querySelector('.second-section li:last-child')
console.log(lastLi.closest('h2'));  // null
console.log(lastLi.closest('ul'));  // <ul></ul>



//*****************
//*** matches() ***
//*****************
// Die matches() Methode ist eine Funktion, die ein Element oder einen seiner Vorfahren mit einem bestimmten CSS-Selektor testet. 
// Die Methode gibt true zurück, wenn das Element den Selektor erfüllt, oder false, wenn nicht.

const lis = document.querySelectorAll('li')

// alle lis durchlaufen, das was ein bestimmten css-selektor entspricht einfärben
for (const li of lis) {
    if (li.matches('#active')) {
        li.style.backgroundColor = 'green'
    }
}



//***************************
//*** ParentNode.children ***
//***************************

// Die children Eigenschaft des Dokuments gibt eine live HTMLCollection zurück, die alle Kind-Elemente des Dokuments enthält, auf den es aufgerufen wurde
// bezieht sich auf die Kinder die Elementknoten sind
// sieht Array sehr ähnlich, allerding können keine array-methoden angewendet werden
// nur for oder for of schleife, oder mit Array.from() in ein Array umwandeln

const mainEl = document.querySelector('main')
console.log(mainEl.children[0].children);

const children = mainEl.children
for (const child of children) {
    console.log(child); // alle sections
}

// Links:
// https://www.mediaevent.de/javascript/element-nodes.html