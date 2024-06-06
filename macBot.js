class MacBot{
  constructor(name){
    this.name = name;
  }
  setPlayer1(player1){
    this.isPlayer1 = player1;
  }
  /*wells is a 12 element int array of the number of pieces in each space (shown below)
  S1 and S2 are the player's stores, which decides the score for each player.
  
                      ||  Opponent
                      \/       
           +====================================+
           |    | 11 | 10 | 9  | 8 | 7 | 6 |    |
           | S2 |==========================| S1 |
           |    | 0  | 1  | 2  | 3 | 4 | 5 |    |
           +====================================+
                                /\
                        Player  ||
  */
  getMove(wells, store1, store2){
      let depth = 1;
        // for(let i=5;i>=0;i--){

        //   if(wells[i]==(6-i)){

        //     return i;
        //   }
        // }
    
        let move = [0,0,0,0,0,0];
        for(let i=0;i<6;i++){
            if(wells[i]%12!=0){
                let n = i+wells[i];
                // n=(n>5)?n-1:n;
                if(n>5){
                  n--;
                }
                
                n=n%12;
              if(wells[i]==(6-i)){
                  move[i]+=6+i
              }
                move[i] += wells[n]
          }
        }
    let best = 5;
    for(let i=0;i<6;i++){
      if(wells[i]>0 && move[i]>move[best]){
        best = i;
      }
    }
    return best;
  }
  
  getName(){
    return this.name
  }
  
  
}
