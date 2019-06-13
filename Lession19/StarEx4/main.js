class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
}

let player = new player(name);
function play(player) {
  let num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  var isEven = function(number) {
    if (isEven % 2 === 0) {
      console.log(`player win!`);
    } else {
        console.log(`player lose!`);
    }
  };
}
