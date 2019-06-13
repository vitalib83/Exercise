class Book {
  constructor(title, author, alreadyRead) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
  }
}
let book1 = new Book("The Hobbit", "J.R.R. Tolkien", true);
let book2 = new Book("Twilight", "Stephenie Meyer", false);
let book3 = new Book("Captain Nemo", "Jules Verne", true);
let books = [book1, book2, book3];
function logBook(book) {
  console.log(`${book.title} by ${book.author}`);
}
function booksNotRead(bookArray) {
  let array = [];
  for (let i = 0; i < bookArray.length; i++) {
    if (bookArray[i].alreadyRead === false) {
      array.push(bookArray[i]);
    }
  }
  return arry;
}
logBook(book1);
var a = booksNotRead(books);

// qewewqfwe