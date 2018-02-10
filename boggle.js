let dictionary = ['APPLE']

class Boggle {
    constructor(data) {
        this.data = data
        this.board = new Array()
        this.dictionary = dictionary
        this.search = new Array()
        this.position = new Array()
    }

    createBoard() {
        let count = 0;
        for (let i = 0; i < 4; i++) {
            let temp = new Array()
            for (let j = 0; j < 4; j++) {
                temp.push(this.data[count])
                count++
            }
            this.board.push(temp)
        }
    }

    solve() {
        let board = this.board
        for (let i = 0; i < board.length; i++) {
           for (let j = 0; j < board.length; j++) {
               for (let k = 0; k < this.dictionary.length; k++) {
                   if (board[i][j] === this.dictionary[k][0]) {
                        this.search = new Array()
                        this.position.push([i,j])
                   }
               }           
           }
        }
        console.log(board)
        console.log(this.position)
    }

    findFirstArr() {
        console.log(dictionary)
    }

}

let example = 'XACEAPHIJPLOPQRE';
boggle = new Boggle(example)

console.log(boggle.createBoard());
// console.log(boggle.findFirstArr())
console.log(boggle.solve());