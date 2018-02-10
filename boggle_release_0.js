

class Boggle {
  // set constructor
  // string as the input strin.
    // currently set as a predfined input
    // or randomly generated
  // boardSize as length or 4
  // boardVol as the total amount of entries
  // board to set the base board
  constructor(length , strInput) {
    this.string = strInput
    this.boardSize = length || 4
    this.boardVol = this.boardSize*this.boardSize
    this.board = this.make_board()
  }

  // make board as array in array with boardSize * boardSize
  // set wordOrder to 0 for counting index of inputted string
  // loop rows from 0 to boardSize
    // push an empty array into board
    // loop collumn from 0 to boardSize
      // push string of letters generated/ prepared from index wordOrder, uppercased
      // increment wordOrder
  // return board
  make_board(){
    let board = [];
    let wordOrder = 0
    for (let rows = 0; rows < this.boardSize; rows++){
      board.push([])
      for (let col = 0; col < this.boardSize; col++) {
        board[rows].push(this.string[wordOrder].toUpperCase())
        wordOrder++
      }
    }
    return board
  }

  // print board on console
  // loop rows from 0 to boardSize
  // log board rows joined with ' ' inbetween
  log_board(inputBoard){
    if (inputBoard === undefined) {
      inputBoard = this.board;
    }
    for (let rows = 0; rows < this.boardSize; rows++) {
      console.log(inputBoard[rows].join(' '));
    }
  }

  // generate a random letter
  // let alphabet contain a-z
  // let rngIndex to generate index from 0 25
  // return alphabet at index 'rngIndex' uppercased
  generate_random_letter(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let rngIndex = this.rng(25)
    return alphabet[rngIndex].toUpperCase();
  }

  // rng generator using math random.
  // has parameter of length
  // if length is undefined set as 1
  // return math random * length and then rounded
  rng(length){
    if (length === undefined) {
      length = 1
    }
    return Math.round(Math.random()*length)
  }

  // to shuffle the board contents
  shake(){
    let boardShaken = [];
    console.log('');
    for (let rows = 0; rows < this.boardSize; rows++){
      boardShaken.push([])
      for (let col = 0; col < this.boardSize; col++) {
        boardShaken[rows].push(this.generate_random_letter())
      }
    }
    return boardShaken
  }

}

var strInput = 'predefinedsentence'

var boggle = new Boggle(4, strInput);
// console.log(boggle.board);
boggle.log_board();
boggle.log_board(boggle.shake())
