# Function challenge 3

## Task 1 - is number in range?

Create a function called `isNumberInRange` with 3 numerical parameters:

- `number`
- `min`
- `max`

The function returns:

- `true`: if `number` is in the range between `min` and `max`
- `false`: if `number` is not in the range between `min` and `max`

For example:

```js
console.log(isInRange(2, 0, 5)); // true
console.log(isInRange(10, 0, 5)); // false
console.log(isInRange(100, 50, 500)); // true
console.log(isInRange(-1, -50, 50)); // true
console.log(isInRange(0, -50, 50)); // true
```

## Task 2 - ends with "ing"?

Create a function called `endsWithIng` that accepts a string in input and returns:

- `true`: if the string ends with `"ing"`
- `false`: if the string does not end with `"ing"`

Make sure that the function is case **insensitive**.

For example:

```js
endsWithIng("hello"); // false
endsWithIng("going"); // true
endsWithIng("ALAN TURING"); // true
endsWithIng("ding ding"); // true
endsWithIng("making of"); // false
```

## Task 3 - starts with "the"?

Create a function called `startsWithThe` that accepts a string in input and returns:

- `true`: if the string starts with `"the"`
- `false`: if the string does not start with `"the"`

Make sure that the function is case **insensitive**.

For example:

```js
startsWithThe("hello"); // false
startsWithThe("theremin"); // true
startsWithThe("The Clash"); // true
startsWithThe("ding ding"); // false 
startsWithThe("making of"); // false
```

## Task 4 - is first letter lower case?

Create a function called `isFirstLetterLowercase` that takes a string in input and returns:

- `true`: if the first letter is lower case 
- `false`: if the first letter is not lower case or if the string is an empty string

For example:

```js
isFirstLetterLowerCase("hello"); // true
isFirstLetterLowerCase("Hello"); // false
isFirstLetterLowerCase("Bianca"); // false
isFirstLetterLowerCase("jim"); // true
isFirstLetterLowerCase(""); // false
isFirstLetterLowerCase("A"); // false 
```

## Task 5 - cheaperThan

Write a function called `cheaperThan` that takes in input an array containing a list of prices and a number.

It returns a new array with only the prices that are smaller than the number 

For example:
```js
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20); // [19.99, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90); // [19.99, 29.87, 12.99, 5.00, 2.90]
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0); // []
cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 5); // [2.9]
```

## Task 6 - wordsThatEndWithIng

Write a function called `wordsThatEndWithIng` that takes an array of strings in input and returns a new array containing only words that end with `ing`.

The function should be case **insensitive**.

For examples:
```js
wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"]); // ["working", "ping"]
wordsThatEndWithIng(["table", "jeans", "small"]); // []
wordsThatEndWithIng(["walking", "ing"]); // ["walking", "ing"]
```

## Task 7 - numbersDivisibleBy3

Write a function called `numbersDivisibleBy3` that takes an array of number in input and returns a new array containing only the numbers from the original array that are divisible by 3.

For example:
```js
numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [3, 6, 9]
numbersDivisibleBy3([2, 4, 8]); // []
numbersDivisibleBy3([9]); // [9]
```

## Task 8 - onlyLongWords

Create a function `onlyLongWords` that takes a string in input and returns new string containing only the words that are 5 or more characters long.

For example:

```js
onlyLongWords("Welcome to Wikipedia the free encyclopedia that anyone can edit"); // "Welcome Wikipedia encyclopedia anyone"
onlyLongWords("The cat is on the table"); // "table"
onlyLongWords("not many long ones here"); // ""
```

## Task 9 - addLeadingZero

Write a function called `addLeadingZero` that takes an array of numbers in input and returns a new array containing the same numbers where if the number is only 1 digit long, a zero is added at the beginning. Also, the numbers in the final array should be strings.

For example:
```js
addLeadingZero([0, 1, 2, 3, 10, 11, 12]); ["00", "01", "02", "03", "10", "11", "12"]
addLeadingZero([1, 100]); ["01", "100"]
addLeadingZero([1, 2, 3]); ["01", "02", "03"]
```

## Task 10 - cutStrings

Write a function called `cutStrings` which takes in input an array with a few sentences and a number. It returns a new array containing the sentences from the input array shortened to the length specified in the number. It also adds three dots `...` at the end of each cut sentence

For example:
```js
cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10); ["Hello my n...", "Today is q...", "Cats are t...", "This movie..."]

cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2); ["He...", "To...", "Ca...", "Th..."]
```
## Task 11 - duration in hours

Write a function called `durationInHours` that takes in input an array with numbers representing the duration of movies in minutes and returns a new array containing the duration expressed in hours. If the result is not an integer number, discard the decimal part.

For example:
```js
durationInHours([120, 60, 80, 90, 100]); // [2, 1, 1, 1, 1]
durationInHours([50, 20, 180]); // [0, 0, 3]
```
## Task 12 - reverse words

Write a function called `reverseWords` that takes in input an array of words and returns a new array with all the words reversed

For example:
```js
reverseWords(["cat", "shoe", "one", "sos", "hello"]); // ["tac", "eohs", "eno", "sos", "olleh"]
```

## Task 13 - count consonants

Write a function called `countConsonants` that takes a string in input and returns the number of consonants (letters that are not: a, e, i, o, u) in the string. Empty space and other symbols are also not consonants.

For example:
```js
countConsonants("hello"); // 3
countConsonants("aeiou"); // 0
countConsonants("be right back"); // 8
countConsonants("JavaScript"); // 7
```

## Task 14 - sum even numbers 

Write a function called `sumEvenNumbers` that takes an array in input and returns the sum of all the even numbers in the array.

For example:
```js
sumEvenNumbers([1, 2, 3, 4, 5, 6]); 12
sumEvenNumbers([100]); 100
sumEvenNumbers([100, 1, 3]); 100
sumEvenNumbers([-2, 4, 3]); 2 
```

## Task 15 - count by color 

Write a function called `countByColor` that takes in input an array with objects of 3 possible colors: red, yellow, green.

It returns a new array where:
- at index 0, there is the number of red objects in the array
- at index 1, there is the number of yellow objects in the array
- at index 2, there is the number of green objects in the array

For example:
```js
countByColor(["Red pen", "Yellow shirt"]); // [1, 1, 0]
countByColor(["Red pen", "Yellow shirt", "Green salad"]); // [1, 1, 1]
countByColor(["Pink hair", "Blue sky"]); // [0, 0, 0]
countByColor(["Yellow table", "Yellow piano", "Green guitar]); // [0, 2, 1]
```
## Task 16 - sumEvenOdd

Write a function called `sumEvenOdd` that takes in input an array of numbers and returns a new array where:

- at index 0 there is the sum of all the even numbers in the array
- at index 1 there is the sum of all the odd numbers in the array

for example:
```js
sumEvenOdd([1, 2, 3, 4, 5, 6]);  // [12, 9]
sumEvenOdd([0, -2, 11]);  // [-2, 11]
sumEvenOdd([1, 3, 15]);  // [0, 19]
```
