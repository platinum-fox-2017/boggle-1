"use strict"

class Boggle{
  constructor(size){
    this.board_game = []
    this.size = size || 3
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.dict = dict_string.split(',')

  }

  solver(){

  }

  board(size){
    for(let i=0; i<this.size; i++){
      this.board_game.push([])
      for(let j=0; j<this.size; j++){
        let random = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
        this.board_game[i].push(random)
      }
    }
    return this.board_game
  }

  search(){
    let word = []
    let firstIndex = []
    let index = ''
    let count = 0
    while(count < this.dict.length){
      for(let i=0; i<this.board_game.length; i++){
        // console.log(this.board_game[i])
        for(let j=0; j<this.board_game[i].length; j++){
          index = this.dict[count]
          firstIndex = index[0]
          if(this.board_game[i][j] === firstIndex && word.indexOf(index) === -1){
            word.push(this.dict[count])
          }
        }
      }
      count ++
    }
    return word
  }

  check_pos(){

  }

}

var fs = require('fs')
var dict_string = fs.readFileSync('dict.txt').toString().split("\n")[0]


var game = new Boggle(4)
console.log(game.board())
// console.log(game.dict.length)
console.log(game.search())
