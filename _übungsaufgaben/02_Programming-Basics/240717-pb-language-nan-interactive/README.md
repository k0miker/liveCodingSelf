# NaN interactive

Before starting to work on the exercise, run the command `npm install` (or `npm i`) to install all the necessary dependencies.

## Tasks

### Task 1

Use the library `readline-sync` to create a program that asks the user for:

- their age
- the current year

Using the data in input, the program will calculate the birth year of the user.

For example:

```plaintext
Enter your age:
> 23
Enter the current year:
> 2023

You were born in the year 2000
```

### Task 1.1

As an extra, continuing from the solution to task 1, display an error message if the user types a value that is not a number.

For example:

```
Enter your age:
> asd 
Enter the current year:
> 2023

ERROR: I'm sorry, but it seems that one of the values you entered was not a number.
```

## Task 2

Write a program that asks the user to enter a PIN (Personal Identification Number, like a password, made only of numbers).

The rules for a valid PIN are:

- it must contain only numbers (digits from 0 to 9)
- it should be 4 digits long

After asking the user to choose a PIN the program should print one of two messages:

- `ERROR: the pin you entered is not valid`: if the PIN has not the right length or contains non valid digits
- `Thank you. The pin you chose was saved correctly.`: if the PIN is valid

### Bonus

There are cases where some characters, like `-`, `+` and `.` are also accepted.

Test your solution with these inputs and make sure that they are NOT considered valid:

- `-123`
- `+123`
- `12.3`