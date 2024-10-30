# Array challenges

## Task 1

Working in task-1.js, given included string with a date, use a method to:

- separate the day, month and year
- save them in 3 variables called `day`, `month`, `year`
- print them to the console

Expected output:

```plaintext
Day: 21
Month: 07
Year: 1993
```

## Task 2

Working in task-2.js, given the array of strings, create a new string that:

- starts with the words "Packing list:"
- it's followed by the list of items in the array
- each item should be separated by a comma and a space

For example:

```js
const clothes = ["t-shirt", "socks", "jeans", "shoes", "hat"];
```

Expected output:

```plaintext
Packing list: t-shirt, socks, jeans, shoes, hat
```

## Task 3

Work in task-3.js. Next to your bed, you have a pile of stuff to read, a mix of books and comics.

- They are organised in a JavaScript array
- the first element is the one at the bottom of the pile
- every night, you pick the one at the top and start reading it

Your task is to:

- print a message saying how many books you have left to read
- print a message with the next book you are going to read 
- remove the book you finished to read and then:
    - print a message with its title
    - print a message with the number of books left
    - print a message with the title of the next book

Repeat the last part 3 times.

Input array:

```javascript

const booksToRead = [
  "Heartstopper",
  "Paper Girls",
  "Tomorrow, and Tomorrow, and Tomorrow",
  "Ghost World",
  "Normal People",
  "One Piece vol. 102",
  "The Hitchhiker's Guide to the Galaxy",
  "This One Summer",
];
```

Expected output:

```plaintext
I have 8 books to read.
I'm starting with: "This One Summer"

I finished reading "This One Summer"
Now I have 7 books to read.
Next one is: "The Hitchhiker's Guide to the Galaxy"

I finished reading "The Hitchhiker's Guide to the Galaxy"
Now I have 6 books to read.
Next one is: "One Piece vol. 102"

I finished reading "One Piece vol. 102"
Now I have 5 books to read.
Next one is: "Normal People"
```

## Task 4

Work in task-4.js. You are going shopping.

For this task, follow the instructions in the comments of the file `task-4.js`
