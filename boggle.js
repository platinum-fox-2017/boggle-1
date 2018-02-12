class BoggleBoard {
    constructor() {
        this.char = char;
        // this.iseng = [[ 'A', 'E', 'N', 'P' ],
        //               [ 'A', 'F', 'A', 'E' ],
        //               [ 'I', 'O', 'V', 'O' ],
        //               [ 'I', 'D', 'B', 'J' ]];
        this.kamus = kamus
    }

    shake(num) {
        let char = this.char.length;
        let board = [];
        for(let i = 0; i < num; i++) {
            let randomWord = [];
            for(let j = 0; j < num; j++) {
                randomWord.push((this.char[Math.floor(Math.random() * char)]));
            }
            board.push(randomWord);
        }
        this.board = board
        return board;
    }

    check_first_letter() {
      let tampungFirst = []
      for (var i = 0; i < this.kamus.length; i++) {
        // console.log(this.kamus[i][0]);
        tampungFirst.push(this.kamus[i][0])
      }
      let firstArr = []
      for (var i = 0; i < this.board.length; i++) {
        for (var j = 0; j < this.kamus.length; j++) {
          for (var k = 0; k < tampungFirst.length; k++) {
            if (this.board[i][j] == tampungFirst[k]) {
              // console.log(this.board[i][j]);
              firstArr.push(this.board[i][j])
            }
          }
        }
      }
    this.firstLetter = firstArr
    return this.firstLetter
  }

  findaround (right, down, papan) {
          let around = [];
          for (let i = down-1; i <= down+1; i++) {
              for (let j = right-1; j <= right+1; j++) {
                  if (i === down && j === right) continue;
                  if ((i > -1 && i < papan.length) &&
                      (j > -1 && j < papan.length) ) {
                          around.push(papan[i][j]);
                        }
              }
          }
        return around
      }

}
let iseng = [[ 'A', 'E', 'N', 'P' ],
          [ 'A', 'F', 'A', 'E' ],
          [ 'I', 'O', 'V', 'O' ],
          [ 'I', 'D', 'B', 'J' ]]
let kamus = ["ABCD","BCAD","CBAD","DCAB"]
let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let boggleBoard = new BoggleBoard(char);
// console.log(boggleBoard.shake(4));
// console.log(boggleBoard.check_first_letter());
console.log(boggleBoard.findaround(1, 1, iseng));
