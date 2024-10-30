// Aufgabe 01

const header = document.querySelector('h1.heading');
header.style.border = '5px solid grey';


// Aufgabe 02

const info = document.querySelector('.info');

// Hat eines der Kinder vom Element `info` die Klasse `.info-package`?
if (info.querySelectorAll('.info-package').length > 0) {
  const packageTitles = document.querySelectorAll('.package-title');
  for (const packageTitle of packageTitles) {
    const sibling = packageTitle.previousElementSibling;

    if (sibling) {
      sibling.style.border = '2px solid #072F5F';
      console.log('Border-Farbe wird gesetzt');
    }
  }
}

// Alternativer Test:
let containsInfoPackage = false;

for (const child of info.children) {
  if (child.classList.contains('info-package')) containsInfoPackage = true;
}


// Aufgabe 03
const labelsInInfo = document.querySelector('.info').querySelectorAll('label');

// Kleines Problem: Wenn mehrere Klassen bei einem Element sind, funktioniert der Test nicht mehr:
for (let i=0; i<labelsInInfo.length; i++) {
  switch (labelsInInfo[i].className) {
    case 'mild':
      labelsInInfo[i].style.borderBottom = '2px solid yellow';
      break;
    case 'intense':
      labelsInInfo[i].style.borderBottom = '2px solid orange';
      break
    default:
      labelsInInfo[i].style.borderBottom = '2px solid red';
      break;
  }
}

// Lösung: Einfach die Klasse mit classList.contains() testen:
for (const label of labelsInInfo) {
  if (label.classList.contains('mild')) {
    label.style.borderBottom = '2px solid yellow';
  } else if (label.classList.contains('intense')) {
    label.style.borderBottom = '2px solid orange';
  } else {
    label.style.borderBottom = '2px solid red';
  }
}


// Aufgabe 04
// Alle Kinder von `ul.nav-list` zum Element `ul.site-map` kopieren:
const navList = document.querySelector('ul.nav-list');
const siteMap = document.querySelector('ul.site-map');

// Option 1: Zum Kopieren einfach das innerHTML überschreiben:
siteMap.innerHTML = navList.innerHTML;

// Option 2: cloneNode(isDeepClone)
// Es gibt eine Helferfunktion namens cloneNode(), mit der wir Kopien von HTML-Elementen erstellen können.
// Parameter: isDeepClone: Boolean => gibt an, ob die Kinder mitkopiert werden sollen
for (const child of navList.children) {
  const copy = child.cloneNode(true);
  siteMap.append(copy);
}

// Option 3:
const navListItems = document.querySelectorAll('ul.nav-list > li'); // Nur li-Elemente, die direkte Kinder sind
const siteMap02 = document.querySelector('ul.site-map');

navListItems.forEach(item => {
  siteMap02.appendChild(item.cloneNode(true)); // Clone each item and append it to site-map
});