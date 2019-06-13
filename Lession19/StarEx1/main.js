class Dog{
    constructor(name, type, age,  isCuddle){
        this.name = name;
        this.type = type;
        this.age = age;
        this.isCuddle = isCuddle;
    }
}
let dog1 = new Dog("blacky", "buldog", 6, "not loves" );
let dog2 = new Dog("chocho", "poodle", 2, "loves");
let dog3 = new Dog("mika","Charles Spaniel", 1, "not loves");

function describe(dog){
    for(let prop in dog){
        console.log(`this is ${dog.name} a ${dog.type}.He is ${dog.age} years old and ${dog.isCuddle} to cuddle `);
    }
}
 describe(dog1);
 describe(dog2);
 describe(dog3);   









