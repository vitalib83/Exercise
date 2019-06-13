class Dog{
    constructor(name, type, age,  isCuddle){
        this.name = name;
        this.type = type;
        this.age = age;
        this.isCuddle = isCuddle;
    }
}
let dog1 = new Dog("blacky", "buldog", 6, true );
let dog2 = new Dog("chocho", "poodle", 2, false);
let dog3 = new Dog("mika","Charles Spaniel", 1, true);
var dog4 = new Dog("nana", "Labrador", 2, false);
var dog5 = new Dog("biko", "Labrador", 6, true);
var dogs = [dog1, dog2, dog3, dog4, dog5];


function getDogsOfType(type,dogs){
    let newArrayOfDogs = [];
    for(let i = 0; i<dogs.length; i++){
        if(type === dogs[i].type){
            newArrayOfDogs.push(dogs[i].name);
        }
    }
    return newArrayOfDogs;
}

 let arrOfDogsName = getDogsOfType("buldog",dogs);









