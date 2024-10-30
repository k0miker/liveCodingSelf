# Simple functions

## Task 1

Create 4 functions called:

- `add`: it takes 2 numbers in input and returns the result of their sum
- `subtract`: it takes 2 numbers in input and returns the result of their subtraction 
- `multiply`: it takes 2 numbers in input and returns the result of their multiplication
- `divide`: it takes 2 numbers in input and returns the result of their division

For example:

```js
add(2, 4); // 6
subtract(2, 4); // -2
multiply(2, 4); // 8
divide(2, 4); // 0.5 
```

Call the functions with different values and print the result to the console

## Task 2

Create 3 functions called:

- `isDivisbleBy3`: it takes a number in input and returns:
    - `true`: if the number is divisible by 3
    - `false`: if the number is not divisible by 3
- `isDivisbleBy5`: same, with number 5
- `isDivisbleBy7`: same, with number 7


Call the functions with different values and output the result to the console


For example:
```js
isDivisbleBy3(9);  // true
isDivisbleBy3(8);  // false

isDivisbleBy5(9);  // false
isDivisbleBy5(10);  // true

isDivisbleBy7(21);  // true
isDivisbleBy7(10);  // false
```

**NOTE**: to know if a number is divisible by another number, you have to check if the remainder of the division is equal to 0

## Task 3

Create a function called `isDivisibleBy`.

The function takes 2 numbers in input and returns:
- `true`: if the first number is divisible by the second
- `false`: if the first number is NOT divisible by the second

For example:

```js
// is 9 divisible by 3?
isDivisibleBy(9, 3); // true

// is 10 divisible by 2?
isDivisibleBy(10, 2); // true

// is 15 divisible by 7?
isDivisibleBy(15, 7); // false
```

## Task 4

Write a function called `startsWithCapitalLetter` that takes a string in input and returns:

- `true`: if the first character is an uppercase letter
- `false`: if the first character is NOT an uppercase letter

Assume that the input string always starts with a letter from the alphabet and it can't be a number or a symbol.

For example:

```js
startsWithCapitalLetter("Hello"); // true
startsWithCapitalLetter("javascript"); // false
startsWithCapitalLetter("Python"); // true
```

**HINT**:
How to check if a letter is uppercase?

```js
let letter = "x";
// is "x" capital?
letter === letter.toUpperCase(); // false

let capitalLetter = "Q";
// is "Q" capital?
capitalLetter === capitalLetter.toUpperCase(); // true
```

## Task 5

Write a function called `capitalise` that takes a string in input and returns the same string with:

- the first letter transformed to upper case
- the rest of the string to lower case

For example:

```js
capitalise("hello"); // Hello
capitalise("wE pUt tHe FUN in fUnCtIOns"); // We put the fun in functions
capitalise("BERLIN"); Berlin
```

**HINT**
We can use slice() to get the string without the first character

```js
let s = "hello world";
s.slice(1); // ello world
```

## Task 6

Write a function called `randomInt` that takes a number in input and returns a random integer between 0 and that number

For example:

```
// a random integer between 0 and 10
randomInt(10); // 7 
randomInt(10); // 8 
randomInt(10); // 2 
randomInt(10); // 10 
randomInt(10); // 0 
```

**HINT**
The formula to get a random number between 0 and any number 
`n` is:

```js
let n = 5;
Math.floor(Math.random() * (n + 1));
```

## Task 7

Write a function called getRandomLetter that returns a random letter of the alphabet (from a to z) every time is called

For example:

```js
getRandomLetter(); // f
getRandomLetter(); // z 
getRandomLetter(); // h 
getRandomLetter(); // d 
```

**HINT**
You can start by using a string with all the available letters:

```js
"abcdefghijklmnopqrstuvwxyz"
```