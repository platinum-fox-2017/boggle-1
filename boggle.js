class Boggle {
    constructor(size) {
        this.size = size
        this.board = this.printBoard()
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
}


const boggle = new Boggle(4)
console.log(boggle.printBoard())