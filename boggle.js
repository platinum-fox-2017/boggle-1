class Boogle{
    constructor (boardLength){
        this.boardLength = boardLength      
        this.board = this.boogleBoard()
        this.dict = ['MONTH', 'DAY']
        this.firstlettet = []
    }

    boogleBoard(){
        let sample = 'DMONAYYTEAHRGHTJ'
        let counter = 0
        let board = []
        for (let i=0; i<this.boardLength; i++){
            board.push([])
            for(let j=0; j<this.boardLength; j++){
                board[i].push(sample[counter])
                counter++
            }
        }
        return board
    }
    checkFirstLetter(){
        let firstChars = []
        for(let i=0; i<this.board.length; i++){         
            for(let j=0; j<this.board.length; j++){
                for(let k=0; k<this.dict.length; k++){
                    if(this.board[i][j] === this.dict[k].charAt(0)){
                        firstChars.push([i,j])
                    }
                }
            }
        }
       return firstChars;

    }



}

let boogle = new Boogle(4)
console.log(boogle.checkFirstLetter())