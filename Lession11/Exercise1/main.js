function getBookDescription(book) {
    return `The book ${book.name} was written by ${book.author} in the year ${book.year}`;

}

var book = {
    name: "foundation",
    author: "Isaac Asimov",
    year: 1951,
    genre: "science fintion"
}

console.assert(getBookDescription(book) === "The book foundation was written by Isaac Asimov in the year 1951");