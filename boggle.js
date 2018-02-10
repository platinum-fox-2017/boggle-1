"use strict"

const dict = require('./dictionary');

class BoggleBoard {
  constructor(size) {
    this.size = size;
    this.boggleBoard = this.shake();
  }

  shake() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let board = [];

    for(let i = 0; i < this.size; i++) {
      var rows = [];
      for(let j = 0; j < this.size; j++) {
        let random = chars.charAt(Math.floor(Math.random()*chars.length))
        rows.push(random);
      }
      board.push(rows);
    }
    
    return board;
  }

  surrounding(row, col) {
    let checkSurr = [
      [row-1, col-1], [row-1, col], [row-1, col+1],
      [row,   col-1],               [row,   col+1],
      [row+1, col-1], [row+1, col], [row+1, col+1] ];
    let surr = [];

    for(let i = 0; i < checkSurr.length; i++) {
      if((checkSurr[i][0] >= 0) && (checkSurr[i][0] < this.boggleBoard.length) && (checkSurr[i][1] >= 0) && (checkSurr[i][1] < this.boggleBoard.length)) {
        surr.push(checkSurr[i]);
      } 
    }

    return surr;
  }

  find_word(row, col, wordIndex, visited) {
    let neighbors = this.surrounding(row, col);
    if(wordIndex === word.length) {
      return true;
    }

    visited[`${row},${col}`] = true;

    for(let i = 0; i < neighbors.length; i++) {
      if((!visited[`${neighbors[i][0]},${neighbors[i][1]}`]) && (this.boggleBoard[neighbors[i][0]][neighbors[i][1]] === word[wordIndex].toUpperCase())) {
        if(this.find_word(neighbors[i][0], neighbors[i][1], wordIndex+1, visited)) {
          return true;
        }
      }
    }

    return false;
  }

  check_word(word) {
    console.log(this.boggleBoard)
    for(let i = 0; i < this.boggleBoard.length; i++) {
      for(let j = 0; j < this.boggleBoard.length; j++) {
        if(this.boggleBoard[i][j] === word.toUpperCase().charAt(0)) {
          if(this.find_word(i, j, 1, {})) {
            return true;
          }
        }
      }
    }
    
    return false;
  }
}

var test_board = [ [ 'J', 'C', 'C', 'V', 'W', 'I' ],
                   [ 'O', 'E', 'S', 'O', 'J', 'I' ],
                   [ 'R', 'D', 'D', 'T', 'H', 'O' ],
                   [ 'E', 'A', 'M', 'B', 'F', 'V' ],
                   [ 'W', 'J', 'H', 'T', 'S', 'P' ],
                   [ 'V', 'J', 'C', 'L', 'V', 'T' ] ];
var word = 'HEI';
var boggle = new BoggleBoard(6);
console.log(boggle.check_word(word));