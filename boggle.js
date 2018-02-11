"use strict"

const dict = require('./dictionary');

class BoggleBoard {
  constructor(size) {
    this.size = size;
    this.boggleBoard = this.shake();
    this.word = ''
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
    if(wordIndex === this.word.length) {
      return true;
    }

    visited[`${row},${col}`] = true;

    for(let i = 0; i < neighbors.length; i++) {
      if((!visited[`${neighbors[i][0]},${neighbors[i][1]}`]) && (this.boggleBoard[neighbors[i][0]][neighbors[i][1]] === this.word[wordIndex].toUpperCase())) {
        if(this.find_word(neighbors[i][0], neighbors[i][1], wordIndex+1, visited)) {
          return true;
        }
      }
    }

    return false;
  }

  check_word(word) {
    for(let i = 0; i < this.boggleBoard.length; i++) {
      for(let j = 0; j < this.boggleBoard.length; j++) {
        if(this.boggleBoard[i][j] === word.toUpperCase().charAt(0)) {
          this.word = word;
          if(this.find_word(i, j, 1, {})) {
            return true;
          }
        }
      }
    }
    this.word = '';
    return false;
  }

  solve() {
    console.log(this.boggleBoard);
    let result = [];

    for(let i = 0; i < dict.length; i ++) {
      if(this.check_word(dict[i])) {
        if(result.indexOf(dict[i]) === -1) {
          result.push(dict[i]);
        }
      }
    }

    if(result.length === 1) {
      console.log(`1 word found: \n${result[0]}`);
    } else {
      console.log(`${result.length} words found:`);
      for(let i = 0; i < result.length; i++) {
        console.log(`${result[i]}`)
      }
    }
  }
}

// var test_board = [ [ 'J', 'C', 'C', 'V', 'W', 'I' ],
//                    [ 'O', 'E', 'S', 'O', 'J', 'I' ],
//                    [ 'R', 'D', 'D', 'T', 'H', 'O' ],
//                    [ 'E', 'A', 'M', 'B', 'F', 'V' ],
//                    [ 'W', 'J', 'H', 'T', 'S', 'P' ],
//                    [ 'V', 'J', 'C', 'L', 'V', 'T' ] ];
// var test_word = 'WEAR';

var argv = process.argv;
var boggle = new BoggleBoard(argv[2]);

if(!argv[2] || argv[2] < 4) {
  console.log(`please enter the number for board size: >= 4`)
} else {
  boggle.solve()
}