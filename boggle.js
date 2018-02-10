'use strict'

class Boggle{
  constructor(words,length){
    this.words=words;
    this.length=length;
    this.alphabet='abcdefghijklmnopqrstuvwxyz';
    this.boardWords=this.board();
  }

  board(){
    var arrBoard=[];
    for(let i=0;i<this.length;i++){
      arrBoard.push([]);
      for(let j=0;j<this.length;j++){
        arrBoard[i].push(this.alphabet[Math.floor(Math.random() * this.alphabet.length)]);
      }
    }
    return arrBoard;
  }

  checkWords(){
    var maxlgth=0;
    var arrWords=[];
    let joinWords;
    var fixWords=[];
    var fixWordsRev=[];
    var sign=0;
    var mapCol;
    var joinWordsCol;
    var revWords;
    var revWordsCol;
    for(let i=0;i<this.words.length-1;i++){
      arrWords.push(this.words[i]);
    }
    for(let j=0;j<arrWords.length;j++){
      if(arrWords[j].length > maxlgth){
        var maxlgth = arrWords[j].length;
      }
    }
    var minlgth=maxlgth;
    for(let k=0;k<arrWords.length;k++){
      if(arrWords[k].length < minlgth){
        var minlgth = arrWords[k].length;
      }
    }

    var arrayColumn = (arr, n) => arr.map(x => x[n]);

    for(let r=0;r<this.boardWords.length;r++){
      mapCol=arrayColumn(this.boardWords, r);
      for(let s=0;s<mapCol.length;s++){
        for(let t=minlgth;t<=maxlgth;t++){
          for(let u=s;u<s+t;u++){
            joinWordsCol+=mapCol[u];
          }

          revWordsCol=joinWordsCol.split('').reverse().join('');
          if(this.getWords(joinWordsCol)===true){
              fixWords.push(joinWordsCol);
          }
          if(this.getWords(revWordsCol)===true){
             fixWords.push(revWordsCol);
          }
          revWordsCol='';
          joinWordsCol='';
        }
      }
    }

    for(let a=0;a<this.boardWords.length;a++){
      for(let b=0;b<this.boardWords.length;b++){
        for(let c=minlgth;c<=maxlgth;c++){
          for(let d=b;d<b+c;d++){
            joinWords+=this.boardWords[a][d];
          }
          revWords=joinWords.split('').reverse().join('');
          if(this.getWords(joinWords)===true){
              fixWords.push(joinWords);
          }
          if(this.getWords(revWords)===true){
             fixWords.push(revWords);
          }
          revWords='';
          joinWords='';
        }
      }
    }

    var uniqueArray = fixWords.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })

    console.log(this.boardWords);
    if(uniqueArray.length>0){
      return 'Matching Word : '+uniqueArray;
    }
    else{
      return 'Matching Word : Not Found';
    }
  }
  getWords(matchWord){

    for(let i=0;i<this.words.length-1;i++){
      if(matchWord===this.words[i]){
        return true;
      }
    }
  }
}

var fs = require('fs')
var words = fs.readFileSync('kamusdata.txt')
  .toString()
  .split(",")

var newBoggle = new Boggle(words,10);
//console.log(newBoggle.board());
//console.log(newBoggle.words);
//console.log(newBoggle.words.length);
console.log(newBoggle.checkWords());
