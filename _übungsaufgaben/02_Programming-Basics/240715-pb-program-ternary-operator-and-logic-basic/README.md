# Ternary operator and logic


## Task 1

Fix the code below so that:

- if hour is larger than or equal to 9, the message "It's late, wake up!" 
is printed to the console. 
- Otherwise, if it's smaller than 9, the message "Go back to bed" is printed

```js
let hour = 9;
let action =  ? "It's late, wake up!" : "Go back to bed";

console.log(action);
```


## Task 2

Fix the code below so that:

- if cartTotal is larger than or equal to 50, shippingCosts is 0
- if cartTotal is less than 50, shippingCosts is 9.99 


```js
let cartTotal = 50;
let shippingCosts = cartTotal > 50 ?  : ;

console.log(
  `With a cart of ${cartTotal}€ the shipping costs amount to ${shippingCosts}€`
);
```


## Task 03

Fix the code below so that:
- if day is Saturday or Sunday, the output is "YAY!, it's the weekend"
- otherwise, the output is "work :("

```js
let day = "Sunday";
let mood = day === "Saturday" ? "YAY!, it's the weekend" : "work :(";

console.log(mood);
```



## Task 04

Fix the code below so that:

- Gina is a full-stack developer only if both the first 2 booleans are true


```js
let isBackEndDeveloper = false;
let isFrontEndDeveloper = true;

let isFullStackDeveloper = isBackEndDeveloper || isFrontEndDeveloper;

console.log(
  `Gina ${isFullStackDeveloper ? "is" : "is not"} a full-stack developer`
);
```



## Task 05

Fix the code below so that:

- only if both the booleans are true, we see the message "You logged in successfully"
- otherwise we see the second message

```js
let isEmailCorrect = true;
let isPasswordCorrect = true;

let message =
    ? "You logged in successfully!"
    : "The email or the password you typed were not correct. Try again.";

console.log(message);
```

## Task 6

Fix the code below so that:

- if the user is not logged in, the right message is printed


```js
let isLoggedIn = false;

let message = isLoggedIn ? "Please login before proceeding." : "Welcome!";

console.log(message);
```
