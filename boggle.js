class Boggle {
    constructor(size) {
        this.dict = ['FOOD', 'MAU', 'MAKAN', 'OI']
        this.size = size
        this.board = this.printBoard()
        this.coordinate = []
        this.matchword = []
    }

    printBoard() {
        let arrayBoard = []
        let word = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (let i = 0; i < this.size; i++) {
            arrayBoard.push([])
            for (let j = 0; j < this.size; j++) {
                arrayBoard[i].push(word.charAt(Math.floor(Math.random() * word.length - 1)))
            }
        }
        return arrayBoard
    }

    solve() {
        let result = []
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                for (let k = 0; k < this.dict.length; k++) {
                    if (this.board[i][j] === this.dict[k][0]) {
                        this.coordinate.push([i][j])
                        // new array
                        this.matchword = []
                        this.matchword.push(this.dict[k][0])

                        if (this.matchword.length === this.dict[k].length) {
                            result.push(this.matchword)
                        }
                    }
                    this.coordinate = []
                }
            }
        }
        // hasil akhir dikeluarkan di sini
    }

    checkArea(row, col, value) {
        for (let i = 0; i <= this.size * 2; i++) {
            // check top [row - 1][col]
            // check top right [row - 1][col + 1]
            // check right [row][col + 1]
            // check bottom right [row + 1][col + 1]
            // check bottom [row + 1][col]
            // check bottom left [row + 1] [col - 1]
            // check left [row][col - 1]
            // check top left [row - 1][col - 1]
        }
    }

}


const boggle = new Boggle(4)
console.log(boggle.printBoard())
console.log(boggle.checkFirst(0));
