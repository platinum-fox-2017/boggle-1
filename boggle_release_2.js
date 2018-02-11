

class Boggle {
  constructor(length , strInput) {
    this.string = strInput
    this.boardSize = length || 4
    this.boardVol = this.boardSize*this.boardSize
    this.coordinates = []
    this.board = this.make_board()
    this.dictionary = ['aikido','shale','shies','leaks','dial','easy','heal','kale','laid','said','seal','slay','aid','kid','ale','sky','she','lay']
    this.visited = []
    this.matching = []
  }
  make_board(){
    let board = [];
    let wordOrder = 0
    for (let rows = 0; rows < this.boardSize; rows++){
      board.push([])
      for (let col = 0; col < this.boardSize; col++) {
        let boxLocation = [rows,col];
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

  check_adjadent(startPos, direction, occupied){ // [0,0], 0-7
    let coords    = [ [ -1,  0 ], // up
                      [ -1,  1 ], // upRight
                      [  0,  1 ], // right
                      [  1,  1 ], // downRight
                      [  1,  0 ], // down
                      [  1, -1 ], // downLeft
                      [  0, -1 ], // left
                      [ -1, -1 ] ]// upLeft

    let testPos = [ (startPos[0]+coords[direction][0]) , (startPos[1]+coords[direction][1]) ];
    if (this.board[testPos[0]] !== undefined) {
      if (this.board[testPos[0]][testPos[1]] !== undefined) {
        for (let o = 0; o < occupied.length; o++) {
          if(occupied[o][0]===testPos[0] && occupied[o][1]===testPos[1]){
            return false
          }
        }
        for (let v = 0; v < this.visited.length; v++) {
          if(this.visited[v][0]===testPos[0] && this.visited[v][1]===testPos[1]){
            return false
          }
        }
        return testPos
      } else {
        return false
      }
    } else {
      return false
    }
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  step(startingPoint, occupied, word){
    let d = 0
    while (d<8 && d>=0) {
      let matchingWord = word
      var targetPos;
      // this.sleep(10)
      targetPos = this.check_adjadent(startingPoint, d, occupied)
      if(targetPos === false){
        d++
      } else {
        d++
        // pick letter
        matchingWord += this.board[targetPos[0]][targetPos[1]].toLowerCase()
        // matching with dictionary
        for (let dict = 0; d < this.dictionary.length; dict++) {
          if(matchingWord === this.dictionary[dict].substr(0, matchingWord.length)){
            d=8
            occupied.push(targetPos)
            for (let f = 0; f < this.dictionary.length; f++) {
              if (matchingWord === this.dictionary[f]) {
                for (let m = 0; m < this.matching.length; m++) {
                  var overwrite = false
                  if (matchingWord === this.matching[m]) {
                    overwrite = true
                  }
                }
                if (overwrite !== true) {
                  this.matching.push(matchingWord);
                }
              }
            }
            return this.step(targetPos, occupied, matchingWord)
          }
        }
      }
    }
    if (targetPos === false){
      if (occupied.length+this.visited.length === this.boardVol) {
        // console.log(occupied);
        return -1
      }
      this.visited = [occupied[occupied.length-1]]
      if (occupied.length > 1) {
        occupied.pop()
      }
      let old = occupied[occupied.length-1]
      return this.step(old, occupied, word)
    }

  }

  solve(){
    let startingPoint;
    for (let start = 0; start < this.boardVol; start++){
      let occupied = []
      let word = ''
      startingPoint = this.coordinates[start]
      occupied.push(startingPoint)
      let firstCheck = this.board[startingPoint[0]][startingPoint[1]].toLowerCase()
      word += firstCheck
      for (let d = 0; d < this.dictionary.length; d++) {
        if(firstCheck === this.dictionary[d][0]){
          this.step(startingPoint, occupied, word)
        }
      }
    }
    return console.log('result', this.matching);
  }

}

var strInput = 'rjdoykihsaijlehs'

var boggle = new Boggle(4, strInput);
console.log(boggle.board);
boggle.log_board();
console.log('----------------------');
boggle.solve()
