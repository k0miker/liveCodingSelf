# Input arguments

The purpose of this exercise is to practice reading input passed from the terminal and using it inside the programs we write to make them more dynamic

## Task 1

Use the `process.argv` property to output the path of the JavaScript file to the console.

For example, if your JavaScript file is called `main.js` and is inside a folder `/home/dci/exercise`, the expected output would be:

```plaintext
/home/dci/exercise/main.js
```

## Task 2

Write a program that accepts an argument with a name from the terminal.

The program should save the name in a variable and then output a greeting, like:

For example:
```plaintext
> node task-2.js Sandy
Hello Sandy!

> node task-2.js Mike 
Hello Mike!
```

## Task 3

Similar to Task 2, this time the program should work with 2 arguments from the terminal:

- a greeting
- a name

Save the 2 values in 2 separate variables and then print a greeting message depending on the arguments, for example:

```plaintext
> node task-3.js Hello Sandy
Hello Sandy!

> node task-3.js Hi Mike 
Hi Mike!

> node task-3.js Hey Tom 
Hey Tom!
```

## Task 4

Same as Task 3, but this time the program should accept 3 arguments:

- a greeting
- a first name 
- a last name 

The output should be a short introduction message, for example:
```plaintext
> node task-4.js Hello Martha Blue 
Hello, my name is Martha Blue.

> node task-4.js Hi Rob Green 
Hi, my name is Rob Green.
```

## Task 5

Write a program that reads 2 numerical arguments from the terminal, calculates their sum and outputs the result to the console

For example:
```plaintext
> node task-5.js 2 4
6

> node task-5.js 6 9
15

> node task-5.js -100 9
-91

> node task-5.js 5 2.25 
7.25
```

## Bonus tasks

### Bonus task 1

Continuing from the solution for Task 1, output only the filename without the whole path.

Following the example from the before, the expected output would be:

```plaintext
main.js
```

**HINT**: try to use the string methods `split()` or `slice()`:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

### Bonus task 2

Improve the solution for Task 2 so that if no argument is sent to program, the output will be `Hello guest!`

For example:
```plaintext
> node task-2.js Sarah
Hello Sarah!

> node task-2.js
Hello guest!
```

### Bonus task 3

Can you think of a way to pass the first and last name as a single argument, maintaining the space between them?
