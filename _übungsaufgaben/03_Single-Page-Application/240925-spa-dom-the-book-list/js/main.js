const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Norman, Don",
    img: "images/camp-7103189_640.png",
  },
  {
    title: "The Most Human Human",
    author: "Christian, Brian",
    img: "images/cupcakes-2887270_640.jpg",
  },
  {
    title: "Thinking with Type",
    author: "Lupton, Ellen",
    img: "images/manufacturing-35087_640.png",
  },
  {
    title: "Eloquent JavaScript",
    author: "Haverbeke, Marijn",
    img: "images/snake-eagle-6591348_640.jpg",
  },
];

// C O D E

// Define elements
const bookList = document.querySelector(".book-list");

// Sort the books by title
books.sort((a, b) => a.author.localeCompare(b.author));

// Create elements
books.forEach((book) => {
  // Create elements
  const bookListItem = document.createElement("li");
  const bookImage = document.createElement("img");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("p");

  // Append elements
  bookList.appendChild(bookListItem);
  bookListItem.appendChild(bookImage);
  bookListItem.appendChild(bookTitle);
  bookListItem.appendChild(bookAuthor);

  // Set content
  bookImage.src = book.img;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;

  // Add classes
  bookListItem.classList.add("book");
  bookImage.classList.add("book-img");
  bookTitle.classList.add("book-title");
  bookAuthor.classList.add("book-author");
});
