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
readInput.type = "checkbox";
readInput.name = "read";
readInput.id = "read";

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

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let title = titleInput.value;
  let author = authorInput.value;
  let year = Number(yearInput.value);
  let genre = genreInput.value;
  let read = readInput.checked;
  let newBooks = new Book(title, author, year, genre, read);

  addBookToLibrary(newBooks);
  dialog.close();
});

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

// function for creating books + push into array

function addBookToLibrary(book) {
  myLibrary.push(book);
}
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

// for loop for book elements

const bookContainer = document.createElement("div");
bookContainer.className = "book-container";
container.appendChild(bookContainer);

for (const element of myLibrary) {
  const card = document.createElement("div");
  card.className = "book-card";
  bookContainer.appendChild(card);

  const title = document.createElement("h2");
  title.className = "book-title";
  title.textContent = element.title;
  card.appendChild(title);

  const author = document.createElement("p");
  author.className = "book-author";
  author.textContent = element.author;
  card.appendChild(author);

  const year = document.createElement("p");
  year.className = "book-year";
  year.textContent = element.year;
  card.appendChild(year);

  const genre = document.createElement("p");
  genre.className = "book-genre";
  genre.textContent = element.genre;
  card.appendChild(genre);

  const readStatus = document.createElement("p");
  readStatus.className = "read-status";
  if (element.read === true) {
    readStatus.textContent = "Read!";
  } else {
    readStatus.textContent = "Not read!";
  }
  card.appendChild(readStatus);
}
