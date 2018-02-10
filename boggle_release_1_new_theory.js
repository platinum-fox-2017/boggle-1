

class Boggle {
  constructor(length , strInput) {
    this.string = strInput
    this.boardSize = length || 4
    this.boardVol = this.boardSize*this.boardSize
    this.coordinates = [];
    this.board = this.make_board()
    this.cardinal_pos = [   {coords : [ -1,  0 ]}, // up
                            {coords : [ -1,  1 ]}, // upRight
                            {coords : [  0,  1 ]}, // right
                            {coords : [  1,  1 ]}, // downRight
                            {coords : [  1,  0 ]}, // down
                            {coords : [  1, -1 ]}, // downLeft
                            {coords : [  0, -1 ]}, // left
                            {coords : [ -1, -1 ]} ]// upLeft
    // this.cardinal_pos[i].coords[0/1]
    this.wordConstruct = ''
    this.wordConfirm = []
    this.dictionary = ['aikido','shale','shies','leaks','dial','easy','heal','kale','laid','said','seal','slay','aid','kid','ale','sky','she','lay']
    this.occupied = []
    this.visited = []
  }

  cardinal_search(new_board_coords){ // {row: rows, collumn: col};
    let rows = new_board_coords.row
    let cols = new_board_coords.collumn
    if (this.board[rows] !== undefined) {
      if (this.board[rows][cols] !== undefined) {
        for (let v = 0; v < this.occupied.length; v++) {
          if (this.occupied[v] === new_board_coords){
            return false
          }
        }
        for (let t = 0; t < this.visited.length; t++) {
          if (this.visited[t] === new_board_coords){
            return false
          }
        }
        return true

      } else {
        return false
      }
    }
    return false
  }

  make_board(){
    let board = [];
    let wordOrder = 0
    for (let rows = 0; rows < this.boardSize; rows++){
      board.push([])
      for (let col = 0; col < this.boardSize; col++) {
        let boxLocation = {row: rows, collumn: col};
        this.coordinates.push(boxLocation)
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
    let rngIndex = this.rng(25)
    return alphabet[rngIndex].toUpperCase();
  }

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

  // this.coordinates[i].row
  // this.coordinates[i].collumn
  solve(){
    for (let boardIndex = 0; boardIndex < 1/*this.boardVol*/; boardIndex++) {
      this.occupied = []
      this.visited = []
      this.wordConstruct = ''

      let index = {row:this.coordinates[boardIndex].row, collumn:this.coordinates[boardIndex].collumn}
      this.visited.push(index)
      let board_row = index.row;
      let board_col = index.collumn;
      console.log(this.occupied);
      for (var s = 0; s < this.boardVol;) {
        console.log(s);
        // console.log(this.board[board_row][board_col]);


        if (s !== 0) {
          this.occupied.push(new_board_coords);
          this.wordConstruct += this.board[new_board_coords.row][new_board_coords.collumn]
        } else {
          this.occupied.push(index)
          this.wordConstruct += this.board[board_row][board_col]
        }

        // cardinal_search
        let fault = 0
        for (let d=0; d < this.cardinal_pos.length; d++) {
          // console.log(d);
          var new_board_coords = {row: index.row, collumn: index.collumn}
          // {row: rows, collumn: col, mark: false};
          // this.cardinal_pos[d].coords[0/1]
          new_board_coords.row += this.cardinal_pos[d].coords[0]
          new_board_coords.collumn += this.cardinal_pos[d].coords[1]
          if (this.cardinal_search(new_board_coords)) {
            // console.log('found?');
            // can move
            d=8
            s++
          } else {
            // console.log('fault');
            fault++
          }
        }

        if (fault >= 8) {
          // if no path
          this.visited = [];
          let hasBeenVisited = this.occupied[this.occupied.length-1];
          this.occupied.pop
          this.visited.push(hasBeenVisited)
          s--
        }

      }

    }
    console.log(this.wordConstruct, this.wordConstruct.length);
    return console.log(this.wordConfirm)
  }

}

var strInput = 'rjdoykihsaijlehs'

var boggle = new Boggle(4, strInput);
// console.log(boggle.board);
boggle.log_board();
boggle.solve();
// boggle.log_board(boggle.shake())
