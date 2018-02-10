"use strict"

class Boggle{
  constructor(){
    this.board_game = []
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  }

  solver(){

  }

  board(size){
    for(let i=0; i<size; i++){
      this.board_game.push([])
      for(let j=0; j<size; j++){
        let random = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
        this.board_game[i].push(random)
      }
    }
    return this.board_game
  }

}

var fs = require('fs')
var dict_string = fs.readFileSync('dict.txt').toString()

console.log(dict_string)
var game = new Boggle()
console.log(game.board(9))
