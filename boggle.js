class Boogle{
    constructor (){     
        this.board = this.shake(4)
        this.dict = ['DAY','JOIN','HEART','YEAR','MONTH']
    }

    shake(length){
        let sample = 'DMONAYHTEHRAARTJ'
        let counter = 0
        let board = []
        for (let i=0; i<length; i++){
            board.push([])
            for(let j=0; j<length; j++){
                board[i].push(sample[counter])
                counter++
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

    checkVisibleMove(word, slicedWord, start, visited, result){
        let path = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]]
        for(let i = 0; i<path.length; i++){
        let nextRow = start[0] + path[i][0]
        let nextCol = start[1] + path[i][1]

        // console.log('visited : ',visited)
        // console.log('next :',[nextRow, nextCol])
        
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
                            this.checkVisibleMove(word, newWord, newStart, visited, result)
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
                  this.checkVisibleMove(word, newWord, start[i], [start[i]],result)
              }
              
          }
      }
      console.log(`${result.length} words found :`);
      for (let i = 0; i < result.length; i++) {
          console.log(result[i]);
      }
  }


}

let boogle = new Boogle()
console.log(boogle.shake(4))
boogle.solve()