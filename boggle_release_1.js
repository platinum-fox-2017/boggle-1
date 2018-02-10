

class Boggle {
    this.string = strInput
    this.boardSize = length || 4
    this.boardVol = this.boardSize*this.boardSize
    this.board = this.make_board()
  }

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

  log_board(inputBoard){
    if (inputBoard === undefined) {
      inputBoard = this.board;
    }
    for (let rows = 0; rows < this.boardSize; rows++) {
      console.log(inputBoard[rows].join(' '));
    }
  }

  generate_random_letter(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArr = alphabet.split('')
    let randomized = ''

    for (var i = 0; i < alphabet.length; i++) {
      let rngIndex = this.rng(alphabetArr.length-1)
      randomized += alphabetArr[rngIndex].toUpperCase();
      alphabetArr.splice(rngIndex, 1)
    }
    return randomized
  }

  rng(length){
    if (length === undefined) {
      length = 1
    }
    return Math.round(Math.random()*length)
  }

  shake(){
    let boardShaken = [];
    let randomized = this.generate_random_letter()
    console.log('');
    for (let rows = 0; rows < this.boardSize; rows++){
      boardShaken.push([])
      for (let col = 0; col < this.boardSize; col++) {
        boardShaken[rows].push(randomized[col])
      }
      randomized = randomized.substr(this.boardSize)
    }
    return boardShaken
  }



}

var strInput = 'predefinedsentence'

var boggle = new Boggle(4, strInput);
// console.log(boggle.board);
// boggle.log_board();
boggle.log_board(boggle.shake())
