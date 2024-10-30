# Conditional statements basic

## Task 1

Complete the code below to print one of the 2 messages:

- if hour is greater than 8, print `Get up`
- otherwise, print `Go back to sleep`


```javascript
const hour = 10;

if () {
  console.log("Get up");
} else {
  console.log("Go back to sleep");
}
```

## Task 2

Complete the code below so that the message `Play videogames` is printed only if the boolean `hasFinishedHomework` is `true`


```javascript
const hasFinishedHomework = false;

if (hasFinishedHomework === false) {
  console.log("Keep studying");
}

console.log("Play videogames");
```


## Task 3

Complete the code below so that if `cartValue` is less than 40, the delivery costs are added to the total


```javascript
const cartValue = 50;
const deliveryCost = 9.99;
let total = cartValue;

total = total + deliveryCost

console.log(`The total amount is: ${total}€`);
```

## Task 4

Complete the code below so that the right message is printed to the console if `n` is divisible by 3 or not

```javascript
const n = 9;

if (n % 3 === ) {
    console.log(`${n} is divisible by 3`);
} else {
    console.log(`${n} is not divisible by 3`);
}
```