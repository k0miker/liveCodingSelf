//////////////////////////
// Das Document-Objekt

// Das Document-Object beinhaltet die Inhalte unserer Webseite.
// Mittels des Document können wir auf die Inhalte zugreifen und diese bearbeiten.
// Das Document-Objekt ist also die Brücke zwischen JS und dem HTML unserer Seite.
// Darüber hinaus beinhaltet das Document-Objekt auch zahlreiche Helfer-Methoden, mit denen wir HTML-Elemente erstellen & bearbeiten können.

console.log(document);
console.log(window.document);
console.log(this.document);

console.log(document === window.document); // true

// Das document ist eine instanz der Klasse HTMLDocument
// MDN-Dokumentation: https://developer.mozilla.org/en-US/docs/Web/API/Document
console.log(document instanceof HTMLDocument); // true


/////////////////////////////////////////////////////
// Wie können wir auf HTML-Elemente unserer Webseite zugreifen? Wie können wir diese bearbeiten?

/////////////////////////////////
// Auswahl von HTML-Elementen:
/////////////////////////////////

// document.querySelector(queryString)
// => Auswahl eines HTML-Elements basierend auf dem queryString
// (Der queryString hat dieselbe Logik wie ein CSS-Selektor)

let firstToDo = document.querySelector('#first-todo');
console.log(firstToDo); // <li id='first-todo'>...</li>

const secondToDo = document.querySelector('li:nth-of-type(2)');
console.log(secondToDo); // <li id="second-todo">...</li>

const thirdToDo = document.querySelector('ul li:nth-child(3)');
console.log(thirdToDo); // <li id="third-todo">...</li>


// Der querySelector gibt immer nur ein Element zurück, selbst wenn es mehrere Elemente gibt, auf die der CSS-Selektor zutrifft.
const todo = document.querySelector('.todo');
console.log(todo); // <li id='first-todo'>...</li>


// document.querySelectorAll(queryString)
// => Auswahl mehrerer HTML-Elemente auf meiner Webseite
// => Ergebnis ist ein Array mit allen HTML-Elementen, auf die der `queryString`/CSS-Selektor zutrifft

let allToDos = document.querySelectorAll('.todo');
console.log(allToDos); // [ <li></li>, <li></li>, <li></li> ]

// Iteration funktioniert wie gehabt:
for (const todo of allToDos) {
  console.log(todo.id);
}

/* Ausgabe:
  first-todo
  second-todo
  third-todo
*/


// Eigentlich braucht ihr nichts Anderes als diese beiden Methoden (querySelector & querySelectorAll), aber es gibt noch einige alte Methoden, die ab und zu benutzt werden:

// document.getElementById(id)
// => Auswahl anhand der Id
let otherToDo = document.getElementById('second-todo');
console.log(otherToDo);

// document.getElementsByClassName(className)
// => Auswahl anhand der Klasse
allToDos = document.getElementsByClassName('todo');
console.log(allToDos); // [...]



/////////////////////////////////
// Inhalt von HTML-Elementen bearbeiten:
/////////////////////////////////

///////////////////////////////
// Text innerhalb HTML-Elements:

// HTMLElement.prototype.innerText
// => Sichtbarer Text innerhalb des Elements
firstToDo = document.querySelector('#first-todo');
console.log(firstToDo.innerText); // ToDo #1

firstToDo.innerText = 'Wäsche waschen';


// HTMLElement.prototype.textContent
// => Gesamten Text innerhalb des Elements (unabhängig von der Sichtbarkeit)
console.log(firstToDo.textContent); // 'Wäsche waschen'
secondToDo.textContent = 'Wohnung putzen';


///////////////////////////////
// HTML innerhalb HTML-Elements:

// HTMLElement.prototype.innerHTML
// => HTML innerhalb des Elements (als String)
const fourthToDo = document.querySelector('#fourth-todo');
console.log(fourthToDo.innerHTML); // <span>ToDo #4</span>

fourthToDo.innerHTML = '<h3 class="subheadline">Kochen</h3>';



/////////////////////////////////
// CSS-Style von HTML-Elementen bearbeiten:
/////////////////////////////////

// Das gesamte CSS-Styling eines HTML-Elements ist durch `style`-Objekt erreichbar:

// HTMLElement.prototype.style
// => Hier sind alle Infos zum CSS-Styling hinterlegt

console.log(firstToDo.style);

// Das style-Objekt beinhaltet eine Referenz zu allen (!) CSS-Eigenschaften. Diese CSS-Eigenschaften sind im camelCase geschrieben. So können wir direkt auf diese zugreifen und den Wert der Eigenschaften setzen:
// 'background-color' => element.style.backgroundColor
// 'align-items` => element.style.alignItems
// 'color` => element.style.color
// ...

// 'background-color' => element.style['background-color']
// 'align-items' => element.style['align-items']
// 'color' => element.style['color']
// ...

// Jede CSS-Eigenschaft wird als String gesetzt:
firstToDo.style.color = 'orange';
firstToDo.style.fontSize = '1.2rem';
firstToDo.style.backgroundColor = 'rgba(0, 255, 255, 0.3)';
firstToDo.style.borderRadius = '4px';
firstToDo.style.padding = '8px';



////////////////////////////
// CSS-Klassen zu HTML-Elementen hinzufügen & entfernen:
///////////////////////////

// HTMLElement.prototype.classList
// => Liste mit allen Klassen, die auf das Element angewandt wurden

console.log(secondToDo.classList); // [ 'todo', 'bold' ]

// classList.addd(...classNames)
// => Klassen zum Element hinzufügen
secondToDo.classList.add('secondary-headline');
secondToDo.classList.add('underline');
console.log(secondToDo.classList); // [ "todo", "bold", "secondary-headline", "underline" ]

// classList.remove(className)
// => Klassen vom Element entfernen
secondToDo.classList.remove('underline');
console.log(secondToDo.classList); // [ "todo", "bold", "secondary-headline" ]




////////////////////////////
// HTML-Elemente erstellen:

// HTMLElement.prototype.createElement(tagName)
// => Erstellt ein neues HTML-Element mit dem übergebenen Tag-Namen

const newList = document.createElement('ul');
console.log(newList); // <ul></ul>

newList.style.backgroundColor = 'purple';
newList.style.textAlign = 'center';
newList.style.color = 'white';
newList.innerText = 'Neue ToDo-Liste';

console.log(newList); // <ul style="background-color: purple; text-align: center;">Neue ToDo-Liste</ul>


// Mit Hilfe von append können wir Elemente als Kind zu einem anderen Element hinzufügen.
// document.body === <body>...</body>
document.body.append(newList);



///////////////////////////////
// HTML-Elemente zur Webseite hinzufügen:

// HTMLElement.prototype.append(element)
// => Das übergebene Element als letztes Kind zu einem HTML-Element hinzufügen

const tasks = ['Aufgabe 01', 'Aufgabe 02', 'Aufgabe 03'];

for (const task of tasks) {
  const li = document.createElement('li');
  li.innerText = task;
  newList.append(li);
}



//////////////////////////////
// Attribute von HTML-Elementen setzen:

// HTMLElement.prototype.setAttribute(attributeName, value)
// => Setzt das definierte Attribut zu dem übergebenen Wert

const amazonLink = document.createElement('a');
amazonLink.innerText = 'Amazon-Link'
amazonLink.setAttribute('href', 'https://amazon.de');
console.log(amazonLink); // <a href="https://amazon.de">

document.body.append(amazonLink); // <a href="https://amazon.de">


// Die meisten Attribute können aber auch direkt gesetzt werden. 
// Dafür gibt es vordefinierte Eigenschaften:
amazonLink.href = 'https:/duckduckgo.com';
amazonLink.target = '_blank';
console.log(amazonLink); // <a href="https:/duckduckgo.com" target="_blank">