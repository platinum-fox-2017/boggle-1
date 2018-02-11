

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
    this.backtrack = false
  }

  cardinal_search(new_board_coords, cardinal,s){ // {row: rows, collumn: col};

    let test_coords = new_board_coords
    test_coords.row += cardinal.coords[0]
    test_coords.collumn += cardinal.coords[1]
    let rows = test_coords.row
    let cols = test_coords.collumn
    // if (this.backtrack === true) {
    //   // this.occupied=this.occupied.slice(0, this.occupied.length)
    //   console.log(this.occupied[this.occupied.length-1]);
    // }

    // if (cardinal.coords[0] === 1 && cardinal.coords[1] === 0) {console.log(this.occupied) }
    // console.log(this.occupied.slice(5), s);

    if (this.board[rows] !== undefined) {
      if (this.board[rows][cols] !== undefined) {
        // console.log(new_board_coords, 'input');
        for (let v = 0; v < this.occupied.length-1; v++) {
          // console.log(this.occupied[v], 'occupied');
          if (this.occupied[v].row === test_coords.row && this.occupied[v].collumn === test_coords.collumn){
            test_coords.row -= cardinal.coords[0]
            test_coords.collumn -= cardinal.coords[1]
            return false
          }
        }
        for (let t = 0; t < this.visited.length; t++) {
          if (this.visited[t].row === new_board_coords.row && this.visited[t].collumn === new_board_coords.collumn){
            // console.log('visited trigger');
            test_coords.row -= cardinal.coords[0]
            test_coords.collumn -= cardinal.coords[1]
            return false
          }
        }
        return true

      } else {
        test_coords.row -= cardinal.coords[0]
        test_coords.collumn -= cardinal.coords[1]
        return false
      }
    }
    test_coords.row -= cardinal.coords[0]
    test_coords.collumn -= cardinal.coords[1]
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
      this.backtrack = false
      for (var s = 0; s < this.boardVol && s >= 0;) {
        // console.log(new_board_coords, s);
        // console.log(old_board_coords, s);
        if (this.wordConstruct.length < 16 && this.backtrack !== true) {
          if (s !== 0) {

            this.occupied.push(new_board_coords);
            this.wordConstruct += this.board[new_board_coords.row][new_board_coords.collumn]
          } else {
            this.occupied.push(index)
            this.wordConstruct += this.board[board_row][board_col]
          }
        }

        // cardinal_search
        let fault = 0;
        if (s === 0){
          var new_board_coords = {row: index.row, collumn: index.collumn}
        } else {
          var new_board_coords = {row: new_board_coords.row, collumn: new_board_coords.collumn}
        }
        // console.log(this.occupied, s)
        for (let d=0; d < this.cardinal_pos.length; d++) {

          let cardinal = this.cardinal_pos[d]
          var old_board_coords = this.occupied[this.occupied.length-1]
          if (this.backtrack === true) {
            // console.log(s, 'search from old');
            if (this.cardinal_search(old_board_coords, cardinal,s)) {
              // console.log('move');
              // can move
              this.backtrack = false
              d=8
              s++
            } else {
              fault++
            }
          } else {
            if (this.cardinal_search(new_board_coords, cardinal,s)) {
              this.backtrack = false
              d=8
              s++
            } else {
              fault++
            }
          }
        }

        if (fault >= 8) {
          console.log(this.wordConstruct, s, fault);
          console.log(this.occupied, this.visited);
          // if no path
          this.backtrack = true
          if (this.visited.length > 1){
            this.visited = this.visited.slice(0,1);
          }
          this.wordConstruct = this.wordConstruct.substr(0, this.wordConstruct.length-1)
          let hasBeenVisited = this.occupied[this.occupied.length-1];
          // console.log(this.occupied);
          this.occupied.pop()
          this.visited.push(hasBeenVisited)
          s--
          fault = 0
        }
        console.log(this.wordConstruct, s, fault);
        console.log(this.occupied, this.visited);
      }

    }

    // console.log(this.wordConstruct, this.wordConstruct.length);
    return console.log(this.wordConfirm)
  }

}

var strInput = 'rjdoykihsaijlehs'

var boggle = new Boggle(4, strInput);
// console.log(boggle.board);
boggle.log_board();
boggle.solve();
// boggle.log_board(boggle.shake())
