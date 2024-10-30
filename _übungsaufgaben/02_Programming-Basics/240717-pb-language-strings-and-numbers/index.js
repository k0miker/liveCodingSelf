// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
space();
whatTask(1);
let jacobBirthdate = "20/06/1995";
let fionaBirthdate = "12/11/1992";

// let date1 = jacobBirthdate.substring(6);
// let date2 = fionaBirthdate.substring(6);
// let date1 = jacobBirthdate.slice(6);
// let date2 = fionaBirthdate.slice(6);
let jacobBirthYear = jacobBirthdate.slice(-4);
let fionaBirthYear = fionaBirthdate.slice(-4);

// let difference = date1 <= date2 ? "älter" : "jünger";
// console.log(difference);
let message =
  jacobBirthYear > fionaBirthYear
    ? "Fiona is older than Jacob"
    : jacobBirthYear < fionaBirthYear
    ? "Jacob is older than Fiona"
    : "Jacob and Fiona are the same age";
console.log(message);

separator();

whatTask(1.1);
// let bDay = date1 > date2 ? date1 - date2 : date2 - date1;
// console.log(`Jacob ist ${bDay} Jahr"e" ${difference} als Fiona.`);
let whoIsOlder =
  jacobBirthYear > fionaBirthYear
    ? `Fiona is ${jacobBirthYear - fionaBirthYear} years older than Jacob`
    : jacobBirthYear < fionaBirthYear
    ? `Jacob is ${fionaBirthYear - jacobBirthYear} years older than Fiona`
    : "Jacob and Fiona are the same age";
console.log(whoIsOlder);

separator();

whatTask(2);
let divWidth = "960px";
let divHeight = "320px";

// let width = parseInt(divWidth.replace("px", ""));
// let height = parseInt(divHeight.replace("px", ""));
let width = parseInt(divWidth);
let height = parseInt(divHeight);

let area = width * height;

console.log(`Die Fläche des Div beträgt ${area} Quadratpixel.`);

separator();

whatTask(3);
let breakfastPrice = "12€";
let lunchPrice = "18.71€";
let dinnerPrice = "43.63€";

// let breakfastTotal;
// let lunchTotal;
// let dinnerTotal;

let breakfastTotal = Math.ceil(parseFloat(breakfastPrice) * 1.1);
let lunchTotal = Math.ceil(parseFloat(lunchPrice) * 1.1);
let dinnerTotal = Math.ceil(parseFloat(dinnerPrice) * 1.1);

console.log(`Breakfast total: ${breakfastTotal}€`);
console.log(`Lunch total: ${lunchTotal}€`);
console.log(`Dinner total: ${dinnerTotal}€`);

console.log(
  `Brekafast total: ${breakfastPrice} => ${parseFloat(
    breakfastPrice
  )} + 10% = ${(parseFloat(breakfastPrice) * 1.1).toFixed(
    2
  )}, rounded up = ${breakfastTotal}`
);
console.log(
  `Lunch total: ${lunchPrice} => ${parseFloat(lunchPrice)} + 10% = ${(
    parseFloat(lunchPrice) * 1.1
  ).toFixed(2)}, rounded up = ${lunchTotal}`
);
console.log(
  `Dinner total: ${dinnerPrice} => ${parseFloat(dinnerPrice)} + 10% = ${(
    parseFloat(dinnerPrice) * 1.1
  ).toFixed(2)}, rounded up = ${dinnerTotal}`
);

separator();

// let jacobBirthdate = "20/06/1995";
// let fionaBirthdate = "12/11/1992";

// let jacobYear = parseInt(jacobBirthdate.split("/")[2]);
// //   0     1      2
// // ["20", "06", "1995" ]
// let fionaYear = parseInt(fionaBirthdate.split("/")[2]);

// let message = jacobYear > fionaYear ? "Fiona is older than Jacob" : "Jacob is older than Fiona";
// console.log(message);

// let ageDifference = Math.abs(jacobYear - fionaYear);

// if (jacobYear > fionaYear) {
//     console.log(`Fiona is ${ageDifference} years older than Jacob`);
// } else {
//     console.log(`Jacob is ${ag
