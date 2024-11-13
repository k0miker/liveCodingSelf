## Routenparameter (routes parameters)
- Routenparameter sind eine Möglichkeit, Teile unseres Routenpfads **dynamisch** zu gestalten
- Angenommen: 
	- wir hätten  50.000 Benutzer in unserer Datenbank oder unserem Array
    - Jeder Benutzer hat eine ID und eine Profilseite
    - Die Profilseiten-URLs basieren auf Benutzer-IDs (z.B. `meine-website.de/user/1`)
    -  Wir wollen offensichtlich nicht 50.000 Routen und Komponenten haben

```jsx
const router = createBrowserRouter([
    {
    path: '/user/1',
    element: <UserProfile1 />
  },
  {
    path: '/user/2',
    element: <UserProfile2 />
  },    
  {
    path: '/user/3',
    element: <UserProfile3 />
  },
  ...
]);
```

Oder in `BrowserRouter` Syntax
```jsx
<Route path="/user/1" component={UserProfile1} />
<Route path="/user/2" component={UserProfile2} />
<Route path="/user/3" component={UserProfile3} />
```


- Stattdessen würden wir eine **dynamische Route** und Komponente verwenden
    - => wir machen den ID-Teil des Pfades variabel und lesen ihn in der `UserProfile` Komponente aus


```jsx
<Route path="/user/:id" component={UserProfile} />
```

Jetzt: Siehe Live Code

## Zusammenfassung

- Wir können Teile einer Route mit Routenparametern dynamisch gestalten
- Wir können Routenparameter in Komponenten mit dem `useParams` Hook lesen
- Wir haben mehr Zustände und useEffect und Fetching geübt
- SEHR COOL, das fängt an, wie eine komplexe Seite auszusehen!
- Was denkst du? Ist das verständlich? Zu komplex? Kommst du mit?