// Establish an object (book1) with properties(name, author, year)
var book1 = {
    name:"foundation",
    author:"isaac asimov",
    year:"1951",
    genre:"fiction",
};
    
var book2 = {
    name:"book of coding",
    author:"toti shmoti",
    year:"2019",
    genre:"education",
};
// Open a new function
var bookUtils = {};
// create a new function getFirstPublished (with parameters book1, book2)within the last function (bookUtils)
bookUtils.getFirstPublished = function(book1, book2) {
    //If book1 is greater than book2, print book2 else print book1
    if(book1.year>book2.year)
    return book2;
    else
    return book1;
    
};
//create new function setNewEdition with parameters (book, edition)
bookUtils.setNewEdition = function(book, edition){
    //set the value of property "latestEdition" to the INPUT parameter (edition)
   book.latestEdition = edition;
}

//Create a new function setLanguage INSIDE bookUtils with INPUT parameters (book, language)
bookUtils.setLanguage = function(book, language){
   book.newLanguage = language;
}

//create a new function setTranslation within the bookUtils function
bookUtils.setTranslation = function (book, language, translator) {
    //Create a new object with two properties. (This is the correct syntax for more than one property because the computer doesn't know how to associate.)
    return book.translation = {
        language: language,
        translator: translator
    } 
}
//how to call a function within a function
bookUtils.setTranslation(book1, "chinese", "john");
//how to call a function by itself
setTranslation(book1, "chinese", "john");




