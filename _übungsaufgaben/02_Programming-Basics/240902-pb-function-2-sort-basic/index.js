// I M P O R T   O F   F U N C T I O N S
import { separator, space, whatTask, whatTopic } from "./divFunctions.js";

// C O D E
whatTask(1);
/*
Task 1

Given an array of books, sort them according to the rating 
in descending order

Fix the code to get the correct output.
*/

const books = [
  {
    title: "The Handmaid's Tale",
    authors: ["Margaret Atwood"],
    rating: 4.13,
    genres: ["fiction", "dystopia"],
  },
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    authors: ["Gabrielle Zevin"],
    rating: 4.26,
    genres: ["fiction"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

function descendingRating(bookA, bookB) {
  return bookB.rating - bookA.rating;
}

let result = [...books].sort(descendingRating);
// let result = [...books].sort((a, b) => b.rating - a.rating);

console.log(result);
separator();

whatTask(2);
/*
Task 2

Given an array of books, sort them according to the rating 
in ascending order

Fix the code to get the correct output.
*/

function ascendingRating(bookA, bookB) {
  return bookA.rating - bookB.rating;
}

let result2 = [...books].sort(ascendingRating);
// let result2 = [...books].sort((a, b) => a.rating - b.rating);

// console.log(result2);
separator();

whatTask(3);
/*
Task 3

Given an array of books, sort them by title, in alphabetical
order, from "a" to "z"

Fix the code to get the correct output.
*/

function orderByTitle(bookA, bookB) {
  return bookA.title.localeCompare(bookB.title);
}

let result3 = [...books].sort(orderByTitle);
// let result3 = [...books].sort((a, b) => a.title.localeCompare(b.title));

// console.log(result3);

separator();
