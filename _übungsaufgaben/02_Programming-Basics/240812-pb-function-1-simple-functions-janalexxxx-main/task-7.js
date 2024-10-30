/*
Task 7

Write a function called getRandomLetter that returns a random
letter of the alphabet (from a to z) every time is called

For example:

getRandomLetter(); // f
getRandomLetter(); // z 
getRandomLetter(); // h 
getRandomLetter(); // d 

**HINT**
You can start by using a string with all the available letters:

```js
"abcdefghijklmnopqrstuvwxyz"
```

*/



function getRandomLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}

console.log(getRandomLetter()); // f
console.log(getRandomLetter()); // z 
console.log(getRandomLetter()); // h 
console.log(getRandomLetter()); // d 