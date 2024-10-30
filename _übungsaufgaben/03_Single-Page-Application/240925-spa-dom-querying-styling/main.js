// C O D E

// TASK 1
// Define the elements
const body = document.querySelector("body");
const title = document.querySelector(".title");

// Style the elements
body.style.fontFamily = "Arial, sans-serif";
title.style.textAlign = "center";

// TASK 2
// Define the elements
const allCategoryUl = document.querySelectorAll(".category");

// Style the elements
allCategoryUl.forEach((category) => {
  category.style.fontStyle = "italic";
  category.style.fontSize = "2rem";
  category.style.borderBottom = "1px solid black";
});

// TASK 3
// Define the elements
const main = document.querySelector("main");

// Style the elements
main.style.display = "flex";
main.style.flexFlow = "row wrap";
main.style.justifyContent = "space-around";
main.style.boxSizing = "border-box";

// TASK 4
// Define the elements
const foodItems = document.querySelectorAll(".food-item");

// Style the elements
foodItems.forEach((foodItem) => {
  foodItem.style.margin = "1rem";
  foodItem.style.listStyle = "none";
});

// TASK 5
// Define the elements
const allMenuCategoryUl = document.querySelectorAll(".menu-category");

// Style the elements
allMenuCategoryUl.forEach((menuCategory) => {
  menuCategory.style.minWidth = "300px";
  menuCategory.style.height = "10rem";
  menuCategory.style.textAlign = "center";
  menuCategory.style.padding = "1rem";
  menuCategory.style.borderRadius = "5px";
});

// TASK 6
function colorGenerator() {
  return Math.floor(Math.random() * 256);
}

// Define the elements
// siehe Aufgabe 4

// Style the elements
allMenuCategoryUl.forEach((menuCategory) => {
  menuCategory.style.backgroundColor = `rgb(${colorGenerator()}, ${colorGenerator()}, ${colorGenerator()})`;
});
