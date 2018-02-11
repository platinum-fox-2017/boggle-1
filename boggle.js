const listkata=require('./data.js')

class shake{
  constructor(angka,listkata){
    this.papan=this.board(angka)
    this.words=listkata
    this.board=this.papan.map(function (array) {return array.slice()});
    this.answer=[]
  }

  randomhuruf(){
    return Math.floor((Math.random()*11))
  }

  board(num){
    var numtohuruf='AZBKUTYDOIJM'
    var arrboard=[]
    for(let i=0;i<num;i++){
      arrboard.push([])
      for(let j=0;j<num;j++){
        var convertnilaitoangka=numtohuruf[this.randomhuruf()]
        arrboard[i].push(convertnilaitoangka)
      }
    }
    return arrboard
    // var arrboard=[ [ 'A', 'E', 'N', 'Q' ],
    //               [ 'I', 'K', 'K', 'B' ],
    //               [ 'S', 'U', 'F', 'O' ],
    //               [ 'I', 'Y', 'L', 'I' ] ]
    // return arrboard
  }

  proses(){
    for(let i=0;i<this.papan.length;i++){
      var simpan=''
      for (let j=0;j<this.papan.length;j++){
          simpan+="| "+this.papan[i][j]+" | "
        }
      console.log(" ___   ___   ___   ___ ")
      console.log(simpan)
      console.log(" ___   ___   ___   ___ ")
    }



    for(let i=0;i<this.papan.length;i++){
      for(let j=0;j<this.papan.length;j++){
        for(let k=0;k<this.words.length;k++){
          var kata=this.words[k][0]
          if(kata===this.board[i][j]){
            var kato=this.words[k]
            if(this.carikata(kato,i,j)){
              this.answer.push(kato)
            }
          }
        }
      }
    }
    return this.answer
  }

    carikata(kato, x, y){
          this.board = this.papan.map(function (array) {return array.slice()});
          let copianboard = this.board
          for (let i = 1; i < kato.length; i++) {
            copianboard[x][y] = '#'
              let sekitar = this.carisekitar(y, x, copianboard)
              let sekitarindex = sekitar.num.indexOf(kato[i]);
              if (sekitarindex === -1) {
                this.board = this.papan.map(function (array) {return array.slice()});
              return false;
              }
              else {
                  x = sekitar.index[sekitarindex][0]
                  y = sekitar.index[sekitarindex][1]
              }
          }

          let index = this.words.indexOf(kato);
          this.words[index] = 'zzz';
          this.board = this.papan.map(function (array) { return array.slice()});

          return true;
      }

      carisekitar (posx, posy, board) {
            let sekitar = [];
            let indexes = [];
            for (let i = posy-1; i <= posy+1; i++) {
                for (let j = posx-1; j <= posx+1; j++) {
                    if (i === posy && j === posx) continue;
                    if ((i > -1 && i < this.board.length) &&
                        (j > -1 && j < this.board.length) ) {
                            sekitar.push(board[i][j]);
                            let coordinate = [i , j]
                            indexes.push(coordinate);
                         }
                }
            }
            let answer= {}
            answer.num = sekitar;
            answer.index = indexes;
            return answer;
        }
}


var shakes = new shake(4,listkata)
let wordsanswer=shakes.proses()
wordsanswer.length>0 ? console.log("kata yang di temukan adalah = "+wordsanswer.join()):console.log("tidak ada kata yang ditemukan");
