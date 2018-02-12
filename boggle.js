/*
1. bikin board untuk menyimpan huruf2 random dari alphabet (26 kata)
2. lakukan looping di board dan di data.js untuk menyamakan huruf awal pada board dengan kata di data.js
3. jika di temukan dilakukan validasi kata awal tersebut
4. jika di board terdapat huruf selanjutnya dari data.js(ex:'apel') maka akan mereturn huruf selanjutnya(awalnya masuk huruf 'a' dillanjutkan 'p')
5. jika yang di boardnya cmn ada kata('ape') dan di data.jsnya tidak sesuai ('apel') maka tidak akan dipush ke result
*/

const data = require('./data');

class Boogle{
  constructor(square){
    this.square = square
    this.data = data
    this.find = []
    this.coordinate = []
    this.result = []
    this.board = []
    this.length = []
  }

  print_board(){
    let dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0 ; i < this.square ; i ++){
      this.board.push([])
      for(let j = 0 ; j<this.square ; j++){
        this.board[i].push(dictionary[Math.floor(Math.random()*26)])
      }
    }
    return this.board
  }

  solve(){
    for(let i = 0 ; i < this.board.length ;i++){
      for(let j = 0 ; j < this.board.length ; j++){
        for(let k = 0 ; k < this.data.length ; k++){
          if(this.board[i][j] === this.data[k][0]){
            this.find = []
            this.coordinate.push([i,j])
            this.find.push(this.data[k][0])
            this.check_first_letter(this.data[k])
            if(this.data[k].length === this.find.length){
              this.result.push(this.find)
            }
          }
          this.coordinate = []
        }
      }
    }
    for(let l = 0 ; l < this.result.length ; l++){
      for(let m = 0 ; m < this.result.length ; m++){
        if(this.result[l].join('') === this.result[m].join('')){
          this.result.splice(m,1)
        }
      }
    }
    console.log(`jumlah kata yang ditemukan : ${this.result.length}`)
    for(let kata = 0 ; kata < this.result.length ; kata++){
      console.log(`${kata+1}. ${this.result[kata].join('')}`)
    }
  }

  check_first_letter(word){
    for(let i = 1 ; i <word.length ; i++){
      if(this.check_area(this.coordinate[this.coordinate.length-1][0],this.coordinate[this.coordinate.length-1][1],word[i])){
        this.find.push(word[i])
      }
    }
  }

  check_area(row,col,letter){
    for(let i = 0 ; i <= 8 ; i++){
        //up
        if(i === 0 && row !== 0 && this.check_noturn_back(row-1,col)){
          if(this.board[row-1][col] === letter){
            this.coordinate.push([row-1,col])
            return true
          }
        }
        //up-right
        if(i === 1 && row !== 0 && col !== this.square-1 && this.check_noturn_back(row-1,col+1)){
          if(this.board[row-1][col+1] === letter){
            this.coordinate.push([row-1,col+1])
          }
        }
        //right
        if(i === 2 && col !== this.square-1 && this.check_noturn_back(row,col+1)){
          if(this.board[row][col+1] === letter){
            this.coordinate.push([row,col+1])
            return true
          }
        }
        //down-right
        if(i === 3 && row !== this.square-1 && col !== this.square -1 && this.check_noturn_back(row+1,col+1)){
          if(this.board[row+1][col+1] === letter){
            this.coordinate.push([row+1,col+1])
          }
        }
        //down
        if(i === 4 && row !== this.square-1 && this.check_noturn_back(row+1,col)){
          if(this.board[row+1][col] === letter){
            this.coordinate.push([row+1,col])
            return true
          }
        }
        //left-down
        if(i === 5 && row !== this.square-1 && col !== this.square-1 && this.check_noturn_back(row+1,col-1)){
          if(this.board[row+1][col-1] === letter){
            this.coordinate.push([row+1,col-1])
            return true
          }
        }
        //left
        if(i === 6 && row !== this.square-1 && this.check_noturn_back(row,col-1)){
          if(this.board[row][col-1] === letter){
            this.coordinate.push([row,col-1])
            return true

          }
        }
        //left-up
        if(i === 7 && row !== 0 && col !== 0 && this.check_noturn_back(row-1,col-1)){
          if(this.board[row-1][col-1] == letter){
          this.coordinate.push([row-1,col-1])
          return true
          }
        }

        if(i === 8){
          return false
        }
    }
  }

  check_noturn_back(row,col){
    for(let i = 0 ; i <= this.coordinate.length ; i++){
      if(i === this.coordinate.length){
        return true
      }

      if(this.coordinate[i][0] === row && this.coordinate [i][1] === col){
        return false
      }
    }
  }

}

let game = new Boogle(6)
console.log(game.print_board())
game.solve()
