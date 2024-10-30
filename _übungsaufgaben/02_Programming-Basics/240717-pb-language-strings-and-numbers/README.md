# Strings and numbers 

## Tasks

### Task 1

You have 2 variables containing the birthdates of 2 persons

- extract the year from the 2 dates and save them into 2 new variables
- using the ternary operator on these 2 variables, print a message to the console like "Fiona is older than Jacob" or  "Jacob is older than Fiona", depending on the comparison between the 2 years

```js
let jacobBirthdate = "20/06/1995";
let fionaBirthdate = "12/11/1992";
```

### Task 1.1 

Using the variables from Task 1, calculate the age difference between Jacob and Fiona.

Print a message to the console, like:

`Fiona is 3 years older than Jacob`

Use a conditional statement if needed.

Make sure that your solution works with every date you use.

### Task 2

You have 2 variables with the measurements of a div on a web page and you want to calculate the area of the div.

The 2 values are strings, containing also the unit.

- use JavaScript to convert the 2 strings to numbers 
- calculate the area of the div
- print a message to the console with the right result 

```js
let divWidth = "960px";
let divHeight = "320px";
```

### Task 3

Every time you eat outside you have the habit to tip the 10% of what you paid and then round the amount up to the closest integer number.

Using the prices below, calculate how much you are going to pay.

Output the result to the console

For example:
```
price: 10.56€ => 10.56 + 10% => 11.61, rounded up => 12
price: 37€ => 37 + 10% => 40.7, rounded up => 41
```

**IMPORTANT**: To add the 10% simply multiply the price by 1.1

```js
let breakfastPrice = "12€";
let lunchPrice = "18.71€";
let dinnerPrice = "43.63€";

let breakfastTotal;
let lunchTotal;
let dinnerTotal;
```
