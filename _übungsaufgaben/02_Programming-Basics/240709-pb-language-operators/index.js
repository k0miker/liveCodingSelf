// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
let jeansPrice = 30;
let shoesPrice = 20;
let hatPrice = 10;
let total = jeansPrice + shoesPrice + hatPrice;
let string = `Kosten ${total} €`;
console.log(string);

separator();

whatTask(2);
// This variable contains the total that you'll calculate at the end
let total2 = 0;

/*
Step 1

Assign 3 prices to the variables below
*/

let pencilPrice = 1;
let penPrice = 2;
let paperPrice = 0.5;

/* 
Step 2

Create 3 variables to store the quantity of each product and set them to 0
*/
let pencilQuantity = 0;
let penQuantity = 0;
let paperQuantity = 0;

/*
Step 3

You decide to buy 2 pencils and 1 pen.
Increase the quantity for these products accordingly.
*/
pencilQuantity += 2;
penQuantity++;
// console.log(pencilQuantity, penQuantity);

/*
Step 4

After some thought, you realise you need 3 more pens.
Increment the current quantity by 3
*/
penQuantity += 3;
// console.log(penQuantity);

/*
Step 5

You also decide to buy 50 sheets of paper.
Increase the value of the variable accordingly
*/
paperQuantity += 50;
// console.log(paperQuantity);

/*
Step 6

On a second thought, you probably don't need so many pens
Remove 2 from the current quantity
*/
penQuantity -= 2;
// console.log(penQuantity);

/*
Step 7

And probably you need one more pencil
Increase the quantity by 1
*/
// pencilQuantity += 1;
pencilQuantity++;
// console.log(pencilQuantity);

/*
Step 8

50 sheets of paper are too many
Reduce the quantity by half
*/
paperQuantity /= 2;
// paperQuantity = paperQuantity / 2;
// console.log(paperQuantity);

/*
Step 9

It's time to calculate the total:
Using the price and quantity for each product, calculate how much you're going 
to spend
*/
total2 =
  paperQuantity * paperPrice +
  penQuantity * penPrice +
  pencilQuantity * pencilPrice;

/* 
Step 10

Print the result to the console
*/
console.log(total2);

separator();

whatTask(3);
let videoGamePrice = 59;
let savings = 20;
let pocketMoney = 6;
let birthdayPresent = 10;
let moneyTotal = savings + pocketMoney + birthdayPresent;
console.log("Ich habe insgesamt " + moneyTotal + "€");
console.log("Videogameprice: " + videoGamePrice + " €");
console.log(
  "Kann ich mir das Spiel leisten? " + (moneyTotal >= videoGamePrice)
);
space();
console.log("Ich habe insgesamt ", moneyTotal, "€");
console.log("Videogameprice: ", videoGamePrice, "€");
console.log(
  "Kann ich mir das Spiel leisten? " + (moneyTotal >= videoGamePrice)
);
space();
console.log(`Ich habe insgesamt ${moneyTotal} €`);
console.log(`Videogameprice: ${videoGamePrice} €`);
console.log(`Kann ich mir das Spiel leisten? ${moneyTotal >= videoGamePrice}`);

separator();

whatTask(4);
let brookMünzen = 10;
let brookNeffen = 3;
console.log("jeder Neffe bekommt", Math.floor(brookMünzen / brookNeffen), "€");
console.log("es bleibt ein Rest von", brookMünzen % brookNeffen, "€");
