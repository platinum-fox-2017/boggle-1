var dictionary = require('./words.js');
class Boggle {
  constructor(dictionary){
    this.dictionary = dictionary;
    this.board = this.shake();
  }

  shake(){
     let baordSize = 4;
     let actualSize = 4 * 4;
     let wholeBoard = [];
     let rowBoard = []
     let barisKe = 0;
     for(var i = 0; i < actualSize; i++){
       barisKe++;
       let char = this.randomChar();
       rowBoard.push(char);
       if(barisKe % 4 === 0 && barisKe > 0 ){
         wholeBoard.push(rowBoard);
         rowBoard = [];
       }
     }
     return wholeBoard;
  }
  solve(){
    
  }
  randomChar(){
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var char = possible.charAt(Math.floor(Math.random() * possible.length));
    return char;   
  }
  printBoard(){
    for(var i = 0; i < this.board.length; i++){
    }
    console.log(this.board.join('\n'));
  }
}

const boggle = new Boggle(dictionary);

console.log(boggle.dictionary);
boggle.printBoard();
