class Boogle{
    constructor (length){  
        this.board = this.shake(length)
        this.dict = require('./data.js')
    }

    shake(length){
        let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let board = []
        for (let i=0; i<length; i++){
            board.push([])
            for(let j=0; j<length; j++){
                board[i].push(alpha[Math.floor(Math.random()*alpha.length)])
            }
        }
        return board
    }
  
    checkFirstLetter(word){
        let firstChars = []
        for(let i=0; i<this.board.length; i++){         
            for(let j=0; j<this.board.length; j++){
                if(this.board[i][j] === word.charAt(0)) firstChars.push([i,j])                   
            }
        }
       return firstChars;
    }

    checkPossibleMove(word, slicedWord, start, visited, result){
        let path = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]]
        for(let i = 0; i<path.length; i++){
        let nextRow = start[0] + path[i][0]
        let nextCol = start[1] + path[i][1]
        
            if(nextRow>=0 && nextRow<this.board.length && nextCol>=0 && nextCol<this.board.length){
                if(this.move([nextRow, nextCol], visited)){
                    if(this.board[nextRow][nextCol] === slicedWord[0] ){
                        let newStart = [nextRow, nextCol]
                        let newWord = slicedWord.slice(1)
                        if(newWord.length === 0){
                            result.push(word)
                            return result
                        }else{
                            visited.push(newStart)
                            this.checkPossibleMove(word, newWord, newStart, visited, result)
                        }
                    }
                }
            } 
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

    solve(){
        let result = []
          for(let i = 0; i<this.dict.length; i++){
          let word = this.dict[i]
          let start = this.checkFirstLetter(word)
          if(start.length>0){
              let newWord = word.slice(1)
              for(let i = 0; i<start.length; i++){
                  this.checkPossibleMove(word, newWord, start[i], [start[i]],result)
              }
              
          }
      }
      console.log(`${result.length} words found :`);
      for (let i = 0; i < result.length; i++) {
          console.log(result[i]);
      }
  }
}

let length = process.argv[2]
let boogle = new Boogle(length)
if(length >=4){
    console.log(boogle.board)
    boogle.solve()
}else{
    console.log('board length must be at least 4')
} 
