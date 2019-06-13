class Jewel {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

let ring = new Jewel("ring", 200);
let bracelet = new Jewel("bracelet", 300);

function getHigherPrice(obj1, obj2) {
  if (obj1>obj2) {
      return (obj1);
  }
      return (obj2);  
}
   console.log(getHigherPrice(ring.price,bracelet.price));