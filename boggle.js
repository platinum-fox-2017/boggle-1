class Boogle{
    constructor (boardLength){
        this.boardLength = boardLength      
        this.board = this.boogleBoard()
        this.dict = ['DAY','JOIN','HEART','YEAR']
        this.firstCoordinate = this.checkFirstLetter()
    }

    boogleBoard(){
        let sample = 'DMONAYHTEHRAARTJ'
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

    checkVisibleMove(word, slicedWord, start, visited, result){
        if(slicedWord.length === 0){
            result.push(word);
            return result
        }
        let path = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]]
        for(let i = 0; i<path.length-1; i++){
        let nextRow = start[0] + path[i][0]
        let nextCol = start[1] + path[i][1]
            if(0<=nextRow && nextRow<this.board.length && 0<=nextCol && nextCol<this.board.length){
                if(this.move([nextRow, nextCol], visited)){
                    if(this.board[nextRow][nextCol] === slicedWord[0] ){
                        let newStart = [nextRow, nextCol]
                        let newWord = slicedWord.slice(1)
                        if(newWord.length === 0){
                            result.push(word)
                            return result
                        }else{
                            visited.push(newStart)
                            this.checkVisibleMove(word, newWord, newStart, visited, result)
                        }
                    }
                }
            } 
        }
     }

    solve(){
        let result = []
        let start = this.firstCoordinate
        for(let i = 0; i<this.dict.length; i++){
            let word = this.dict[i]
            if(start.length>0){
                let newWord = word.slice(1)
                for(let j = 0; j<start.length; j++){
                    this.checkVisibleMove(word, newWord, start[i], [start[i]],result)
                }
                
            }
        }
        console.log("Found words are:");
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }

    move(tested, visited){
        for(let i = 0; i<visited.length; i++){
            if(tested[0] === visited[i][0] && tested[1] === visited[i][1]){
                return false
            }
        }
        return true
    }



}

let boogle = new Boogle(4)
console.log(boogle.boogleBoard())
console.log(boogle.solve())