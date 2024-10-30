# Function challenges 1

## Task 1

Create a function that takes a string in input and returns a new string with the first and last character from the input string.

If the input string is an empty string, it returns an empty string


```javascript
function firstAndLastCharacter() { }

console.log(firstAndLastCharacter("")); // ""
console.log(firstAndLastCharacter("table")); // te
console.log(firstAndLastCharacter("cat")); // ct
console.log(firstAndLastCharacter("js")); // js
```

## Task 2

Create a function that takes 2 numbers in input and returns the largest of the 2.

If the numbers are equal, it returns the first one. 


```javascript
function largestOf2() { }

console.log(largestOf2(2, 5)); // 5
console.log(largestOf2(6, 3)); // 6
console.log(largestOf2(10, 10)); // 10
console.log(largestOf2(-1, -5)); // -1
```

## Task 3

Create a function that takes a string in input and returns the same string with the first and last character capitalised

If the input string is an empty string, it returns an empty string


```javascript
function capitaliseFirstAndLast() { }

console.log(capitaliseFirstAndLast("table")); // TablE
console.log(capitaliseFirstAndLast("cat")); // CaT
console.log(capitaliseFirstAndLast("js")); // JS
console.log(capitaliseFirstAndLast("")); // ""
```

## Task 4
 
 Create a function that takes 2 parameters:
 
 - `length`: a number
 - `character`: a string
 
 The function returns an array with a length equal to the first parameter, containing only `character` as its items
 
 For example:
 
 ```plaintext
 fillArray(3, "*") => ["*", "*", "*"]
 ```
 
 

```javascript
function fillArray() { }

console.log(fillArray(3, "*")); // [ '*', '*', '*' ]
console.log(fillArray(5, "a")); // [ 'a', 'a', 'a', 'a', 'a' ]
console.log(fillArray(0, "+")); // [] 
console.log(fillArray(10, "-")); // [ '-', '-', '-', '-', '-', '-', '-', '-', '-', '-' ]
```

## Task 5 - isInRange

Write a function called `isInRange` that checks if a number is between a specific range.

For example: 
- is 3 greater than or equal to 5 and less than or equal to 10 (in the range between 5 and 10)? => false
- is 21 greater than or equal to 10 and less than or equal to 50 (in the range between 10 and 50)? => true 

The function takes 3 numerical values in input:

- `number`: the number we want to check
- `min`: the smallest value of the range
- `max`: the largest value of the range

Examples:
```plaintext
isInRange(2, 0, 5); // true
isInRange(10, 0, 5); // false
isInRange(100, 50, 500); // true
isInRange(-1, -50, 50); // true
isInRange(0, -50, 50); // true
```

## Task 6 - containsVowel

Write a function called `containsVowel` that takes a string in input and checks if it contains at least a vowel (any letter between: a, e, i, o, u). 


The function returns:

- `true`: if there's at least a vowel in the string
- `false`: if there are no vowels 

The function must be **case insensitive**.

You can rely on the string method `includes()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


Examples:
```plaintext
containsVowel("table"); // true
containsVowel("bcdfg"); // false
containsVowel("a"); // true
containsVowel("aeiou"); // true
containsVowel("AEIOU"); // true
containsVowel(""); // false
containsVowel("Abc"); // true
```

## Task 7 - containsNumber

Write a function called `containsNumber`.

The function takes a string in input.

It returns:

- `true`: if any of the characters in the string is a valid number
- `false`: if there are no numbers in the string

Examples:
```plaintext
containsNumber("123"); // true
containsNumber("abc"); // false
containsNumber("a2c"); // true
containsNumber("100px"); // true
containsNumber("1"); // true
containsNumber("0"); // true
containsNumber("$23.00"); // true
containsNumber("T-shirts x2"); // true
```

## Task 8 - isFirstLetterUpperCase 

Write a function called `isFirstLetterUpperCase`.

The function takes a string in input.

It returns:

- `true`: if the first letter is upper case
- `false` otherwise.

Examples:
```plaintext
isFirstLetterUpperCase("hello"); // false
isFirstLetterUpperCase("Hello"); // true
isFirstLetterUpperCase("Bianca"); // true
isFirstLetterUpperCase("jim"); // false
isFirstLetterUpperCase(""); // false
isFirstLetterUpperCase("A"); // true
```