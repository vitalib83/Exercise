class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
};
     didWin(){
         if(this.score>30){
             console.log(`higher than 30`);
         }


     }
}
    let player = new Player(`dani`);
    player.score = 32;


    player.didWin();





