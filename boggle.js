var dictionary = require('./words.js');
class Boggle {
  constructor(dictionary){
    this.dictionary = dictionary;
    this.board = this.shake();
    this.size = 4;
    this.wordFound = [];
    this.boxVisited = this.setAllToUnvisited();
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
    let wordFound = [];
    for(var i = 0; i < this.dictionary.length; i++){
       this.boxVisited = this.setAllToUnvisited();
       if(this.isFoundWord(this.dictionary[i])) {
         wordFound.push(this.dictionary[i]);
       }
    }
    this.wordFound = wordFound;

  }
  setAllToUnvisited(){
    
    let arr = [];
    for(var i = 0; i < this.size; i++){
      let row = [];
      for(var j = 0; j < this.size; j++)  {
        row.push(false);
      }
      arr.push(row);
    }
    return arr;
    
  }
  isFoundWord(word){
    let indexFirstChar = this.checkFirstChar(word[0]); 
    if(indexFirstChar === -1) return false;
    if(indexFirstChar.length > 1){
      var isFound = false;
      for(var i = 0; i < indexFirstChar.length; i++){
        if(this.checkNextChar(word,indexFirstChar[i].row,indexFirstChar[i].col))  {
          isFound = true;
        }
      }
      if(!isFound){
       return false;  
      }
    } else {
      if(!this.checkNextChar(word,indexFirstChar[0].row,indexFirstChar[0].col)) return false;
    }
    return true;
  }
  checkFirstChar(char){
    var indexChar = [];
    for(var i = 0 ; i < this.board.length; i++)  {
      for(var j = 0; j < this.board[i].length; j++)  {
        if(char == this.board[i][j])  {
          indexChar.push({row: i, col: j});
        }
      }
    }
    if(indexChar.length === 0){
      return -1 ;
    } else {
      return indexChar ;
    }
  }
  checkNextChar(char,row,col){
    //sampai akhir gak ada yang salah maka word nya benar
    if(char.length === 0) {
      return true;  
    }
    if(!this.isSameChar(char[0],row,col)) return false;
    //atas
    if(this.checkNextChar(char.slice(1),row - 1, col)) return true;
    //atas kanan
    if(this.checkNextChar(char.slice(1),row - 1, col + 1)) return true;
    //atas kiri
    if(this.checkNextChar(char.slice(1),row - 1, col - 1)) return true;
    //bawah
    if(this.checkNextChar(char.slice(1),row + 1, col)) return true;
    // bawah kanan
    if(this.checkNextChar(char.slice(1),row + 1, col + 1)) return true;
    //bawah kiri
    if(this.checkNextChar(char.slice(1),row + 1, col - 1)) return true;
    //kanan
    if(this.checkNextChar(char.slice(1),row, col + 1)) return true;
    //kiri
    if(this.checkNextChar(char.slice(1),row, col - 1)) return true;
    this.boxVisited[row][col] = true;
    return false;
  }
  isSameChar(char,row,col){
    if(this.isStillInBoard(row,col)){
      this.boxVisited[row][col] = true;
      if(this.board[row][col] == char) {
        return true;   
      }
    }
    return false;
    
  }
  isStillInBoard(row,col){
    if(row >= this.size || col >= this.size)  {
     return false;  
    } else if(row < 0 || col < 0 ){
     return false; 
    } else if( this.boxVisited[row][col]){
     return false;  
    }
    return true;
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
  printWordFound(){
    if(this.wordFound.length === 0)  {
      console.log("No Word Found!");
    } else {
      console.log('Words Found :',this.wordFound.join(', '))  
    }
  }
}

const boggle = new Boggle(dictionary);

boggle.printBoard();
boggle.solve();
boggle.printWordFound();
