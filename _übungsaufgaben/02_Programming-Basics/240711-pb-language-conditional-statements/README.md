# Conditional statements

## Task 1

Declare a variable `username` and assign a string to it.

Write a conditional statement to check the value of the variable `username`:

- if it's an empty string, print the message `Hello, guest!`
- otherwise, print the message `Welcome back, <username>!`

In the second message, replace `<username>` with the value of the variable

## Task 2

Create 4 variables:
- `person1Name`
- `person1Age`
- `person2Name`
- `person2Age`

Assign names and ages of your choice then write a conditional statement to print the name of the younger person of the 2.

For example:
```plaintext
// Finn is 18 year old
// Jess is 21 year old

// Output
Finn is the youngest person
```

## Task 3

Create 3 variables:
- `mode`
- `backgroundColor`
- `textColor`

Assign the value `dark` or `light` to the variable `mode`, then write a conditional statement to change the value of `backgroundColor` and `textColor`:
- if `mode` is `dark`, then the `backgroundColor` should be `black` and the `textColor` should be `white`
- if `mode` is `light`, then the `backgroundColor` should be `white` and the `textColor` should be `black`
- if `mode` is neithr `dark` nor `light`, print a message saying that the `mode` is not valid 

At the end, print a message like this:
```plaintext
Current mode: dark 
Background color: black
Text color: white 
```

## Task 4

Create 3 variables:

- `isMilkAvailable`
- `isBreadAvailable`
- `isAppleAvailable`

Assign any boolean value to them, then write a conditional statement to establish what you'll have for breakfast.

- if there is bread, print the message `Eat a sandwich`
- if there's no bread, but there is milk, print the message `Some milk with cereals will be ok`
- if thre's no milk either, but there is an apple, print the message `Ok, I guess I'll just eat an apple`
- if nothing is available, print the message `I'll have breakfast outside!`

## Task 5

Create a variable `n` and assign a number to it.

Write a conditional statement to print if number is even or odd. 

**Note**: a number is even if it's divisible by 2

## Task 6

Create two variables `x` and `y` and assign two numbers to them.

Write a conditional statement that prints one of three messages:
- `x is greater than y`
- `y is greater than x`
- `x and y are equal`

## Task 7

Write a program that performs a basic password validation.

Create a variable `password` and assign a string to it.

Write a program that prints a message telling you if the password is valid or not.

The password is valid if:

- it is longer than 8 characters
- the first and last character are different
- it is different from "12345678"
- the first character is not an empty space
- the last character is not a !

Some possible outputs:
```plaintext
Is the password 12345678 valid? false 

Is the password abc valid? false 

Is the password 1234abcde valid? true

Is the password slkafjwter! valid? false
```

