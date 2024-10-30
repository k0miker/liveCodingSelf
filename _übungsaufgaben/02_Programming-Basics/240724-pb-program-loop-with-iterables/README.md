# Loop practice

Each task has their own javascript file prepared for you to work in. Good luck, have fun!

## Task 1

Given a string in input, write a for loop to print each individual letter to the console

```javascript
const string = "hello";
```

Expected output:

```plaintext
h
e
l
l
o
```

## Task 2

Given an array containing some animals, use a for loop to print each one of them to the console

```javascript
const animals = ["cat", "dog", "bird", "koala", "giraffe"];
```

Expected output:
```plaintext
cat
dog
bird
koala
giraffe
```

## Task 3

Given an array with names of colors, print each color and their position in the array, but starting at 1

```javascript
const colors = ["green", "pink", "yellow", "red", "violet"];
```

Expected output:
```plaintext
1. green
2. pink 
3. yellow
4. red
5. violet
```

## Task 4

Given an array of cities, print to the console only city names that contain the letter `l` 

```javascript
const cities = ["Berlin", "London", "Messina", "Los Angeles", "Madrid", "Tokyo", "Sidney", "New Delhi", "La Plata"];
```

Expected output:
```plaintext
Berlin
London
Los Angeles
New Delhi
La Plata
```
**Hint**: use the array method `includes()`

<details>
<summary>Click for more hints</summary>

`includes()` can be used with a string to check if it contains a certain character or, in general, another string.

It returns a `boolean`

For example:

```js
let string = "hello";
string.includes("l"); // true
string.includes("llo"); // true
string.includes("q"); // false
```

When you have an array of strings, be careful on how to access the string:

```js
let strings = ["foo", "bar", "bla"];

strings[0]; // "foo"
strings[0].includes("o"); // true
strings[1].includes("o"); // false
```

</details>

## Task 5

Given an array of years, print to the console each year that is a multiple of 4

```javascript
const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
```

Expected output:
```plaintext
2012
2016
2020
```

**HINT**: to check if a number is a multiple of 4, use the remainder `%` operator

## Task 6

Given an array of letters, output to the console only letters that are in an even index in the array. For example, letters at index 0, 2, 4 and so on.

```javascript
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
```

Expected output:
```plaintext
a
c
e
g
i
```

## Task 7

Given a string in input, use a for loop to print the string in reversed order to the console.

Try doing it without using the `reverse()` method, and rely only on the for loop

```javascript
const sentence = "I'm something of a developer myself";
```

Expected output:

```plaintext
f
l
e
s
y
m
 
r
e
p
...
```

## Task 8

Given a string in input and a string containing the vowels, use a for loop to print only the vowels from the first string

```javascript
const quote = "Possessions never meant anything to me";
const vowels = "aeiou";
```

Expected output:

```plaintext
o
e
i
o
e
e
e
a
a
i
o
e
```

Hint: use the `includes()` method

## Task 9

Given an array containing a list of prices, use a loop to add 
the euro sign € after each value

- save the modified values to a new array
- print the result to the console

Expected output:

```plaintext
[ '9.99€', '12.5€', '120€', '748€', '2.99€', '500€' ]
```
