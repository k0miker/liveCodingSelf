# Function challenges 2

## Task 1 - Is item in array?

Create a function called `isItemInArray` that takes an array and a string in input and returns:

- `true`: if the array contains the item
- `false`: if the array does not contain the item

For example:

```js
console.log(isItemInArray(["apple", "pear", "banana"], "kiwi")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "mango")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "apple")); // true
```

## Task 2 - get index of

Create a function called `getIndexOf` that takes an array and a string in input and returns:

- the index of the string in the array
- `-1` if the array doesn't contain that string

For example:

```js
console.log(getIndexOf(["apple", "pear", "banana"], "kiwi")); // -1
console.log(getIndexOf(["apple", "pear", "banana"], "banana")); // 2
console.log(getIndexOf(["apple", "pear", "banana"], "apple")); // 0
```

## Task 3 - reverse a string

Create a function called `reverseString` that takes in input a string and returns the same string reversed.

For example:

```js
console.log(reverseString("table")); // "elbat"
console.log(reverseString("blabla")); // "albalb"
console.log(reverseString("")); // ""
console.log(reverseString("tomato")); // "otamot"
console.log(reverseString("cat")); // "tac"
```

## Task 4 - repeat string

Create a function called `repeatString` that takes in input a string and a number and returns that string repeated n times depending on the number

For example:

```js
console.log(repeatString("table", 3)); // "tabletabletable"
console.log(repeatString("cat", 5)); // "catcatcatcatcat"
console.log(repeatString("dog", 0)); // ""
console.log(repeatString("", 5)); // ""
console.log(repeatString("+", 10)); // "++++++++++"
```

## Task 5 - Remove vowel

Create a function called `removeVowels` that takes a string in input and returns the same string with the vowels removed

```js
console.log(removeVowels("table")); // "tbl"
console.log(removeVowels("JavaScript")); // "JvScrpt"
console.log(removeVowels("AEIOU")); // ""
console.log(removeVowels("ABCDe")); // "BCD"
```
