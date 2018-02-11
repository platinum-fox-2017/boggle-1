const targetKata = require('./data.js')

class Boggle {
  constructor(words){
    this.board = []
  }

  createBoard(){
    let kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < 4; i++) {
      this.board.push([])
      for (var j = 0; j < 4; j++) {
        let random = Math.round(Math.random()*25)
        this.board[i].push(kamus[random])
      }
    }
  return this.board
  }
}

var bogel = new Boggle(targetKata)

bogel.createBoard()
console.log(bogel.board);
