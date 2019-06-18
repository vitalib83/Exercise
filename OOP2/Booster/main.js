class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
    }

    toString() {
        return this.title + " - directed by " + this.director;
    }
}

var movie = new Movie("Spirited Away", "Hayao Miyazaki");
var movie2 = new Movie("Howl's moving castle", "Hayao Miyazaki");

movie.toString();
movie2.toString();