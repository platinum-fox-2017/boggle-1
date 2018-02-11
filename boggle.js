class Boggle {
  constructor(size, dictionary){
    this.size = size;
    this.dictionary = dictionary;
    this.board = this.shake();
  }

  shake(){
    let array = [];
    let abjad = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0; i<this.size; i++){
      array.push([]);
      for(let j=0; j<this.size; j++){
        let random = abjad[(Math.floor(Math.random()*abjad.length))];
        array[i].push(random);
      }
    }
    return array;
  }

  // narrowedScan(){
  //   let array = [];
  //   for(let k=0; k<this.dictionary.length; k++){
  //     for(let l=0; l<this.board.length; l++){
  //       for(let m=0; m<this.board[l].length; m++){
  //         if(this.dictionary[k][0]===this.board[l][m]){
  //           array.push(this.dictionary[k]);
  //         }
  //         // break;
  //       }
  //     }
  //   }
  //   return array;
  // }

}

var dictionary = ['makan','tidur','uang','rendang','kasur','smartphone'];

const game = new Boggle(10, dictionary);

console.log(game.narrowedScan());
