## Styled Components
![styled components](https://miro.medium.com/v2/resize:fit:652/1*N0XV3gco7Ed4brMoxwdjVg.png)

- NOCH EIN Weg des Stylings
- Styled Components ist eine NPM-Bibliothek: https://www.npmjs.com/package/styled-components
- Sie bietet keine vorgefertigten Komponenten an
- Aber sie ermöglicht es dir, echtes CSS direkt in deinen Komponenten zu verwenden

- Styled Components basieren stark auf "Tagged Template Literals"
    -  Zur Erinnerung: Dies ist eine Funktion von JS, die im Grunde genommen Template Literals und Funktionen kombiniert
     - Wir werden sie einfach verwenden, ohne tief einzutauchen


### Wozu styled components?

-  **Scoping** (Gültigkeitsbereich)
    - In einer großen App könntest du Tausende von Komponenten haben
    - Oft hat jede Komponente ihre eigene (S)CSS-Datei
    - Was, wenn zwei von ihnen die Klasse `selected` verwenden?
        - Eine hebt ein Element als pink hervor
        - Eine hebt ein Element als gelb hervor
    - Diejenige, die _zufällig_ unten in CSS steht, wird wirksam

- Es gibt übrigens mehrere Möglichkeiten, dein (S)CSS so zu begrenzen, dass es nur die Komponente beeinflusst
    - Styled Component machen das automatisch
    - es gibt z.B. auch css modules

## Welche Styling-Methode für mein Projekt?
- Wiege die Vor- und Nachteile ab
- Welche Methode interessiert dich bzw. spricht dich an?
- Was fühlt sich für dich bequem an?

## Zusammenfassung

- Viele Optionen für das Styling
- Gestylte Komponenten bieten uns eine interessante Option von CSS-in-JS