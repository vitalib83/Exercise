class Shoes {
    constructor(name, sizes) {
        this.name = name;
        this.sizes = sizes;
    }
    isAvailable(size) {
        return this.sizes.indexOf(size) !== -1;
    };
}

var adidas = new Shoes("Adidas", [34, 36, 37, 38, 40, 42, 44]);
console.assert(adidas.isAvailable(41) === false);
console.assert(adidas.isAvailable(44) === true);