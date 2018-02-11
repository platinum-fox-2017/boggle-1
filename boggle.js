var words = require('./data')

//buat papan dengan isi huruf abjad diakses secara random
//import kamus dari data.js
//buat sistem check untuk mengecek kecocokan antara kamus dan huruf yang ada di papan
//lalukan pengulangan untuk setiap huruf di papan dan dibandingkan dengan setiap target yang ada di kamus
//jika huruf pertama di kamus dan huruf di papan sama, lakukan seleksi
//push koordinat huruf di papan ke array koordinat untuk membantu pengecekan history agar huruf tidak bisa balik ke tempat asal
//push kata dari kamus ke array temporary untuk pengecekan
//buat function pengecekan ke 8 arah yang akan dipakai di solve
//panjang kata di kamus yang ditaruh di temporary sama dengan hasil pencarian di board dengan pengecekan arah mata angin, hasilnya push ke result
//tampilkan result

class Boggle {
  constructor(){
    this.result = []
    this.board = []
    this.kamus = words
    this.coordinate = []
    this.temp = []
  }

  createBoard(){
    let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < 4; i++) {
      this.board.push([])
      for (var j = 0; j < 4; j++) {
        let random = Math.round(Math.random()*25)
        this.board[i].push(abjad[random])
      }
    }
  return this.board
  }

  solve(){
    for(let i = 0;i<4;i++){
      for(let j = 0;j<4;j++){
        // console.log(this.kamus);
        for(let k =0;k<this.kamus.length;k++){
          if(this.board[i][j] == this.kamus[k][0]){
            this.temp = []
            this.coordinate.push([i,j])
            // console.log(this.coordinate);
            this.temp.push(this.kamus[k][0])
            // console.log(this.temp);
            this.checkFirstLetter(this.kamus[k])
            // console.log(this.checkWords(this.kamus[k]));
            if(this.temp.length == this.kamus[k].length){
              this.result.push(this.temp)
            }
          }
        }
        this.coordinate = []
      }
    }
    console.log("ditemukan ",this.result.length," kata");
    for(let i = 0;i<this.result.length;i++){
      console.log(`${i+1}.`,this.result[i].join(''))
    }
  }

  checkFirstLetter(kata){
    for (var i = 1; i < kata.length; i++) {
      if(this.checkArea(this.coordinate[this.coordinate.length-1][0],this.coordinate[this.coordinate.length-1][1],kata[i])){
        this.temp.push(kata[i])
      }
    }
  }

  checkArea(row,col,value){
    // console.log(`ROW : ${row}, COL : ${col}, Kata : ${value}`);
    for (var i = 0; i <= 8; i++) {
      //cek atas
      if(i == 0 && row!==0 && this.checkHistory(row-1,col)){
          if(this.board[row-1][col] == value){
          this.coordinate.push([row-1,col])
          return true
        }
      }
      //cek kanan atas
      if(i == 1 && row!==0 && col !== this.board.length-1 && this.checkHistory(row-1,col+1)){
         if(this.board[row-1][col+1] == value){
          this.coordinate.push([row-1,col+1])
          return true
        }
      }
      //cek kanan
      if(i == 2 && col !== this.board.length-1 && this.checkHistory(row,col+1)){
        if(this.board[row][col+1] == value){
         this.coordinate.push([row,col+1])
         return true
       }
      }
      //cek kanan bawah
      if(i == 3 && row !== this.board.length-1 && col !== this.board.length-1 && this.checkHistory(row+1,col+1)){
        if(this.board[row+1][col+1] == value){
          this.coordinate.push([row+1,col+1])
          return true
        }
      }
      //cek bawah
      if(i == 4 && row !== this.board.length-1 && this.checkHistory(row+1,col)){
        if(this.board[row+1][col] == value){
          this.coordinate.push([row+1,col])
          return true
        }
      }
      //bawah kiri
      if(i == 5 && row !== this.board.length-1 && col !== 0 && this.checkHistory(row+1,col-1)){
        if(this.board[row+1][col-1] == value){
          this.coordinate.push([row+1,col-1])
          return true
        }
      }
      //kiri
      if(i == 6 && col !== 0 && this.checkHistory(row,col-1) && this.checkHistory(row,col-1)){
        if(this.board[row][col-1] == value){
          this.coordinate.push([row,col-1])
          return true
        }
      }
      //kiri atas
      if (i == 7 && row !== 0 && col !== 0 && this.checkHistory(row-1,col-1)) {
        if(this.board[row-1][col-1] == value){
          this.coordinate.push([row-1,col-1])
          return true
        }
      }
      if(i == 8){
        return false
      }
    }
  }

  checkHistory(row,col){
    for (var i = 0; i <= this.coordinate.length; i++) {
      if (i == this.coordinate.length) {
        return true
      }

      if(this.coordinate[i][0] == row && this.coordinate[i][1] == col){
        return false
      }
    }
  }
}

var bogel = new Boggle()

bogel.createBoard()
console.log(bogel.board);
bogel.solve()
