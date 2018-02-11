let dict = ['APPLE', 'SIT', 'TRIP', 'TURN', 'SUPER']

class Boggle {
    constructor(data) {
        this.data = data
        this.board = []
        this.dict = dict
        this.search = []
        this.position = []
        this.result = []
    }
    //generate board
    createBoard() {
        let example = 'APSITPTRSTRIPUPERUNLE';
        let alphabet = 'ABCDEFGHJIKLMOPQRSTUVWXYZ'
        let count = 0;

        for (let i = 0; i < this.data; i++) {
            let temp = []
            for (let j = 1; j < this.data; j++) {
                // temp.push(example[Math.floor(count * Math.random())])
                // temp.push(alphabet[count])
                temp.push(example[count])
                count++
            }
            this.board.push(temp)
        }
    }
    solve() {
        let board = this.board
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                for (let k = 0; k < this.dict.length; k++) {
                    if (board[i][j] === this.dict[k][0]) {
                        this.search = []
                        this.position.push([i, j])
                        this.search.push(this.dict[k][0])
                        this.findFirstArr(this.dict[k])
                        if (this.search.length === this.dict[k].length) {
                            this.result.push(this.search)
                        }
                    }
                    this.position = [];
                }
            }
        }
        let arr = []
        for (let i = 0; i < this.result.length; i++) {
            // if (this.result[i] === this.result[i+1]) {
                arr.push(this.result[i].join(''))   
            // }
        }
        console.log(this.board)
        console.log(`Found ${this.result.length} matches words!`)
        console.log(arr.join('\n'))
    }
    findFirstArr(words) {
        for (let i = 1; i < words.length; i++) {
            if (this.checker(this.position[this.position.length - 1][0], this.position[this.position.length - 1][1], words[i])) {
                this.search.push(words[i])
            }
        }
    }
    checker(row, col, num) {
        for (let i = 0; i < 9; i++) {
            //check top position
            if (i === 0 && row !== 0 && this.temp(row - 1, col)) {
                if (this.board[row - 1][col] === num) {
                    this.position.push([row - 1, col])
                    return true
                }
            }
            //check right top position
            if (i === 1 && row !== 0 && col !== this.board.length - 1 && this.temp(row - 1, col + 1)) {
                if (this.board[row - 1][col + 1] === num) {
                    this.position.push([row - 1, col + 1])
                    return true
                }
            }
            //check right
            if (i === 2 && col !== this.board.length - 1 && this.temp(row, col + 1)) {
                if (this.board[row][col + 1] === num) {
                    this.position.push([row, col + 1]);
                    return true
                }
            }
            //check bottom right
            if (i === 3 && row !== this.board.length - 1 && col !== this.board.length - 1 && this.temp(row + 1, col + 1)) {
                if (this.board[row + 1][col + 1] === num) {
                    this.position.push([row + 1, col + 1])
                    return true
                }
            }
            //check bottom
            if (i === 4 && row !== this.board.length - 1 && this.temp(row + 1, col)) {
                if (this.board[row + 1][col] === num) {
                    this.position.push([row + 1, col])
                    return true
                }
            }
            //check left bottom
            if (i === 5 && row !== this.board.length - 1 && col !== 0 && this.temp(row + 1, col - 1)) {
                if (this.board[row + 1][col - 1] === num) {
                    this.position.push([row + 1, col - 1])
                    return true
                }
            }
            //check left
            if (i === 6 && col !== 0 && this.temp(row, col - 1)) {
                if (this.board[row][col - 1] === num) {
                    this.position.push([row, col - 1])
                    return true
                }
            }
            //check left top
            if (i === 7 && row !== 0 && col !== 0 && this.temp(row - 1, col - 1)) {
                if (this.board[row - 1][col - 1] === num) {
                    this.position.push([row - 1, col - 1])
                    return true
                }
            }
            if (i === 8) {
                return false
            }
        }
    }
    temp(row, col) {
        for (let i = 0; i <= this.position.length; i++) {
            if (i === this.position.length) return true
            if (this.position[i][0] === row && this.position[i][1] === col) return false
        }
    }
}
start = new Boggle(5)
start.createBoard();
start.solve()