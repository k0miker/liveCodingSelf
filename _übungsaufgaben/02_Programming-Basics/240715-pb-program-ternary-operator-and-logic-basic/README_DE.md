# Ternärer Operator und Logik


## Aufgabe 1

Korrigiere den untenstehenden Code so, dass:

- wenn die Stunde größer oder gleich 9 ist, die Nachricht "Es ist spät, wach auf!" 
in der Konsole ausgegeben wird. 
- Andernfalls, wenn sie kleiner als 9 ist, wird die Nachricht "Geh zurück ins Bett" ausgegeben

```js
let hour = 9;
let action =  ? "Es ist spät, wach auf!" : "Geh zurück ins Bett";

console.log(action);
```


## Aufgabe 2

Korrigiere den untenstehenden Code so, dass:

- wenn cartTotal größer oder gleich 50 ist, beträgt shippingCosts 0
- wenn cartTotal kleiner als 50 ist, beträgt shippingCosts 9.99 


```js
let cartTotal = 50;
let shippingCosts = cartTotal >= 50 ? : ;

console.log(
  `Mit einem Warenkorb von ${cartTotal}€ betragen die Versandkosten ${shippingCosts}€`
);
```


## Aufgabe 03

Korrigiere den untenstehenden Code so, dass:
- wenn der Tag Samstag oder Sonntag ist, lautet die Ausgabe "Juhu!, es ist Wochenende"
- ansonsten lautet die Ausgabe "Arbeit :("

```js
let day = "Sunday";
let mood = day === "Saturday" ? "Juhu!, es ist Wochenende" : "Arbeit :(";

console.log(mood);
```



## Aufgabe 04

Korrigiere den untenstehenden Code so, dass:

- Gina ist nur dann eine Full-Stack-Entwicklerin, wenn die ersten beiden Booleans wahr sind


```js
let isBackEndDeveloper = false;
let isFrontEndDeveloper = true;

let isFullStackDeveloper = isBackEndDeveloper || isFrontEndDeveloper;

console.log(
  `Gina ${isFullStackDeveloper ? "ist" : "ist keine"} Full-Stack-Entwicklerin`
);
```



## Aufgabe 05

Korrigiere den untenstehenden Code so, dass:

- nur wenn beide Booleans wahr sind, sehen wir die Nachricht "Du hast dich erfolgreich eingeloggt"
- ansonsten sehen wir die zweite Nachricht

```js
let isEmailCorrect = true;
let isPasswordCorrect = true;

let message =
  ? "Du hast dich erfolgreich eingeloggt!" : "Die eingegebene E-Mail oder das Passwort waren nicht korrekt. Versuche es erneut.";

console.log(message);
```

## Aufgabe 6

Korrigiere den untenstehenden Code so, dass:

- wenn der Benutzer nicht eingeloggt ist, wird die richtige Nachricht ausgegeben


```js
let isLoggedIn = false;

let message = isLoggedIn ? "Bitte logge dich ein, bevor du fortfährst." : "Willkommen!";

console.log(message);
```
