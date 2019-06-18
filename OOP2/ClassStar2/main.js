class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  didWin() {
    return this.score > 30;
  }
  checkIfPlayerWon() {
    if (this.didwin()) {
      console.log(`${this.name} has won!`);
    }
  }
}

let player = new Player(`dani`);
player.score = 32;

player.didWin();
