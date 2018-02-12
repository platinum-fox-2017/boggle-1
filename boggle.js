class BoggleBoard {
    constructor(dictionary){
        this.board = [];
        this.kata = [];
    }

    shake(num){
        let result = [];

        for(let i=0; i<num; i++){
            let temp = [];
            for(let j=0; j<num; j++){
                let random = Math.floor(Math.random()*dictionary.length);
                temp.push(dictionary[random]);
            }
            result.push(temp);
        }
        this.board = result;
        return this.board;
    }

    solve(){

    }

    checker(letter,row,col){
        for(let i=1; i<coba.length; i++){
            // if()
        }

    }

    checker_first(){
        let arr = [];

        for(let i=0; i<this.board.length; i++){
            for(let j=0; j<this.board.length; j++){
                for(let k=0; k<this.first_letter().length; k++){
                    if(this.board[i][j] == this.first_letter()[k]){
                        arr.push(this.first_letter()[k]);
                        // return true;
                    }
                }
            }
        }

        this.kata = arr;
        return this.kata;
    }

    carisekitar (kanan, bawah, papan) {
        let sekitar = [];
        for (let i = bawah-1; i <= bawah+1; i++) {
            for (let j = kanan-1; j <= kanan+1; j++) {
                if (i === bawah && j === kanan) continue;
                if ((i > -1 && i < papan.length) && (j > -1 && j < papan.length) ) {
                        sekitar.push(papan[i][j]);
                     }
            }
        }
            return sekitar;
    }

    first_letter(){
        let hurufAwal = [];

        for(let i=0; i<kamus.length; i++){
            hurufAwal.push(kamus[i][0]);
        }
        return hurufAwal;
    }

}

let coba =
[ [ 'B', 'C', 'U', 'M' ],
  [ 'T', 'A', 'K', 'A' ],
  [ 'B', 'D', 'E', 'C' ],
  [ 'U', 'S', 'T', 'I' ] ];

let kamus = ['AKU', 'KAMU', 'DIA', 'KAMI', 'KITA', 'MEREKA'];
let dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let boggle = new BoggleBoard(dictionary);

// console.log(kamus[1][0]);

// console.log(coba);
// boggle.shake(4)
// console.log(boggle.shake(4));

console.log(boggle.carisekitar(1, 1, coba))

// console.log(boggle.checker_first());
