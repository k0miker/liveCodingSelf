// Aufgabe 01:
const currentElement = document.querySelector('cite');
console.log(currentElement);

// Aufgabe 02:
const parentList = [];
let element = currentElement;
while(element) {
  parentList.unshift(element.nodeName.toLowerCase());
  element = element.parentElement;
}
console.log(parentList);

// Aufgabe 03:
const string = parentList.join(' > ');
console.log(string); // 'html > body > main > section > blockquote > footer > cite'

// Bonus-Aufgabe:
const currentElement2 = document.querySelector('cite');
const parentList2 = [];
let element2 = currentElement2;
while(element2) {
  let classesString = "";
  for (let i = 0; i < element2.classList.length; i++) {
    classesString += "." + element2.classList[i];
  }

  parentList2.unshift(element2.nodeName.toLowerCase() + classesString);
  element2 = element2.parentElement;
}
console.log(parentList2);