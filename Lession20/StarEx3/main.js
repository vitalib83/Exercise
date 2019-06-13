class Book{
    constructor(title, author, ifReadingBook){
        this.title = title;
        this.author = author;
        this.ifReadingBook = ifReadingBook;
    }
}


    let book1 = new Book("The Hobbit","J.R.R. Tolkien", true);
    let book2 = new Book("Twilight","Stephenie Meyer", false);
    let book3 = new Book("Captain Nemo", "Jules Verne", true);
    let books = [book1, book2, book3];
    function logBook(book){
        console.log(`${book.title} by ${book.author}`);

    }

        function booksNotRead(bookarry){
            let arry = [];
            for (let i = 0; i < bookarry.length; i++) {
                if(bookarry[i].ifReadingBook === false){
                    arry.push(bookarry[i]);
                }
                
            }
            return arry;



        }
        
        logBook(book1);
        var a = booksNotRead(books);



    





