// DOM manipulation:
const container = document.getElementById("container");
const heading = document.createElement("h1");
heading.textContent = "Storm Library";
heading.className = "main-heading";

const newBtn = document.createElement("button");
newBtn.textContent = "New Book";

const dialog = document.createElement("dialog");
dialog.id = "my-dialog";
const exitBtn = document.createElement("button");
exitBtn.textContent = "Cancel";

const newBookForm = document.createElement("form");
newBookForm.className = "book-form";

const newTitle = document.createElement("label");
newTitle.setAttribute("for", "title");
newTitle.textContent = "Title: ";
const titleInput = document.createElement("input");
titleInput.placeholder = "Dune";
titleInput.type = "text";
titleInput.name = "title";
titleInput.id = "title";
titleInput.required = true;

const newAuthor = document.createElement("label");
newAuthor.textContent = "Author: ";
newAuthor.setAttribute("for", "author");
const authorInput = document.createElement("input");
authorInput.placeholder = "Frank Herbert";
authorInput.type = "text";
authorInput.name = "author";
authorInput.id = "author";
authorInput.required = true;

const newYear = document.createElement("label");
newYear.textContent = "Year Published: ";
newYear.setAttribute("for", "year");
const yearInput = document.createElement("input");
yearInput.placeholder = "1965";
yearInput.type = "number";
yearInput.min = "1000";
yearInput.max = "9999";
yearInput.step = "1";
yearInput.name = "year";
yearInput.id = "year";
yearInput.required = true;

const newGenre = document.createElement("label");
newGenre.textContent = "Genre: ";
newGenre.setAttribute("for", "genre");
const genreInput = document.createElement("input");
genreInput.placeholder = "Science Fiction";
genreInput.type = "text";
genreInput.name = "genre";
genreInput.id = "genre";
genreInput.required = true;

const read = document.createElement("label");
read.textContent = "Read: ";
read.setAttribute("for", "read");
const readInput = document.createElement("input");
readInput.type = "radio";
readInput.name = "read";
readInput.id = "read";
read.required = true;

const addBtn = document.createElement("button");
addBtn.textContent = "Add Book";
addBtn.type = "submit";

// appending main content:
container.appendChild(heading);

container.appendChild(newBtn);
container.appendChild(dialog);

// appending dialog:
dialog.appendChild(newBookForm);
newBookForm.appendChild(newTitle);
newBookForm.appendChild(titleInput);
newBookForm.appendChild(newAuthor);
newBookForm.appendChild(authorInput);
newBookForm.appendChild(newYear);
newBookForm.appendChild(yearInput);
newBookForm.appendChild(newGenre);
newBookForm.appendChild(genreInput);
newBookForm.appendChild(read);
newBookForm.appendChild(readInput);
newBookForm.appendChild(addBtn);
dialog.appendChild(exitBtn);

// Button eventListeners:

exitBtn.addEventListener("click", () => {
  dialog.close();
});

newBtn.addEventListener("click", () => {
  dialog.showModal();
});

const bookContainer = document.createElement("div");
bookContainer.className = "book-container";
container.appendChild(bookContainer);

const myLibrary = [];

// function object constructor:

function Book(title, author, year, genre, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.read = read;
  this.id = self.crypto.randomUUID();
}

const bookOne = new Book(
  "The Caretaker",
  "Marcus Kliewer",
  2026,
  "Thriller",
  false,
);

const bookTwo = new Book(
  "Dune Messiah",
  "Frank Herbert",
  1969,
  "Science Fiction",
  true,
);

const bookThree = new Book(
  "Dr. Jekyll and Mr. Hyde",
  "Robert Louis Stevenson",
  1886,
  "Horror",
  true,
);

console.log(bookThree.genre);
