let dictionary = ['APPLE', 'SIT']

class Boggle {
    constructor(data) {
        this.data = data
        this.board = new Array()
        this.dictionary = dictionary
        this.search = new Array()
        this.position = new Array()
        this.result = new Array()
    }

    //generate board
    createBoard() {
        let example = 'ABCTFPHIJPLSPQRE';
        let alphabet = 'ABCDEFGHJIKLMOPQRSTUVWXYZ'
        let count = 0;
        
        for (let i = 0; i < this.data; i++) {
            let temp = new Array()
            for (let j = 0; j < this.data; j++) {
                //testing case
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
               for (let k = 0; k < this.dictionary.length; k++) {
                   //if found first position
                   if (board[i][j] === this.dictionary[k][0]) {
                        this.search = new Array()
                        this.position.push([i,j])
                        this.search.push(this.dictionary[k][0])
                        this.findFirstArr(this.dictionary[k])

                        if (this.search.length === this.dictionary[k].length) {
                            this.result.push(this.search)
                        }
                   }
                   this.position = new Array();
               }           
           }
        }
        
       
        let arr = new Array()
        for (let g = 0; g < this.result.length; g++) {
            arr.push(this.result[g].join(''))
        }

        console.log(this.board)
        console.log(`Found ${this.result.length} matches words!`)
        console.log(arr.join('\n'))

    }


    findFirstArr(words) {
        // console.log(this.position)
        // console.log(this.position[this.position.length-1][1])
        for (let i = 1; i < words.length; i++) {
           if (this.checker(this.position[this.position.length-1][0], this.position[this.position.length-1][1], words[i])) {
               this.search.push(words[i])
           }
        }
    }

    checker(row, col, num) {
        for (let i = 0; i < 9; i++) {

            //check top position
            if (i === 0 && row !== 0 && this.record(row - 1, col)) {
                if (this.board[row-1][col] === num) {
                    this.position.push([row - 1, col])
                    return true
                }
            }

            //check right top position
            if (i === 1 && row !== 0 && col !== this.board.length-1 && this.record(row - 1, col+1)) {
                if (this.board[row - 1][col + 1] === num) {
                    this.position.push([row - 1, col + 1])
                    return true
                }
            }

            //check right
            if (i === 2 && col !== this.board.length-1 && this.record(row, col +1)) {
                if (this.board[row][col +1] === num) {
                    this.position.push([row, col+1]);
                    return true
                }
            }

            //check bottom right
            if(i === 3 && row !== this.board.length-1 && col !== this.board.length-1 && this.record(row+1, col+1)) {
                if (this.board[row+1][col+1] === num) {
                    this.position.push([row+1, col+1])
                    return true
                }
            }

            //check bottom
            if(i === 4 && row !== this.board.length-1 && this.record(row+1, col)) {
                if (this.board[row+1][col] === num) {
                    this.position.push([row+1, col])
                    return true
                }
            }

            //check left bottom
            if(i === 5 && row !== this.board.length-1 && col !== 0 && this.record(row+1, col-1)) {
                if (this.board[row+1][col-1] === num) {
                    this.position.push([row+1, col-1])
                    return true
                }
            }

            //check left
            if (i === 6 && col !== 0 && this.record(row, col-1)) {
                if (this.board[row][col-1] === num) {
                    this.position.push([row, col-1])
                    return true
                }
            }

            //check left top
            if (i === 7 && row !== 0 && col !== 0  && this.record(row-1, col-1)) {
                if (this.board[row-1][col-1] === num) {
                    this.position.push([row-1, col-1])
                    return true
                }
            }

            if (i === 8) {
                return false
            }
        }
    }

    record(row, col) {
        for (let i = 0; i <= this.position.length; i++) {
            if (i === this.position.length) return true
            if (this.position[i][0] === row && this.position[i][1] === col) return false 
        }
    }

}


boggle = new Boggle(4)
boggle.createBoard();
boggle.solve()
// boggle.findFirstArr()