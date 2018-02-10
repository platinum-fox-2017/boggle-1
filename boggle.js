"use strict"

var templateBoard=[ [ 'U', 'A', 'B', 'P' ],
[ 'A', 'N', 'A', 'R' ],
[ 'B', 'J', 'T', 'F' ],
[ 'E', 'W', 'P', 'Q' ] ]
var templateWords=['AUNT','ANT','BEE','BANK','CAR','DICE','END','FINE','GAS','HELP','IDLE','JAM']

class Boogle {
    constructor(size,words) {
        this.board = this.shuffle(size) || templateBoard
        this.word = words || templateWords
        this.match = this.searchWord(this.word)
    }

    shuffle(size) {
        if(size===undefined) return templateBoard
        let board=[]
        for(let i=0; i<size; i++) {
            let col=[]
            board.push(col);
            for(let j=0; j<size; j++) {
                let randomizer=String.fromCharCode(Math.floor(65+(Math.random()*26)))
                board[i].push(randomizer)
            }
        }
        return board;
    }

    showBoard() {
        console.log(this.board)
    }

    searchWord(list) {
        let match=[];
        for(let i in list) {
            let matchedObj={};
            let matchedIndex=[];
            matchedObj.word=list[i];
            let index=[]
            for(let j=0; j<list[i].length; j++) {
                let charIndex=this.searchChar(list[i][j]);
                if(charIndex[0]!==undefined) {index.push(charIndex);}
                else {j=list[i].length}
            }
            let combination=[];
            if(index.length===list[i].length) {
                this.mixCombination([],combination,index);
                matchedObj.indexCombination=combination;
                if(combination.length!==0) {match.push(matchedObj);}
            }
        }
        return match
    }

    searchChar(char) {
        let index=[]
        let board=this.board
        for(let i=0; i<board.length; i++)
            for(let j=0; j<board[i].length; j++)
                if(board[i][j]===char)
                    index.push([i,j]);
        return index;
    }

    mixCombination(comb,res,list) {
        let tempList=list.slice();
        if(list.length<1) {
            if(!this.checkDuplicate(comb)){
                res.push(comb);
            }
        }
        else {
          if(list[0].length===1) {
            comb.push(list[0][0])
            this.mixCombination(comb,res,list.slice(1));
          }
          else if(list[0].length>1) {
            for(let i=0; i<list[0].length; i++) {
              let tempComb=comb.slice();
              tempComb.push(list[0][i]);
              this.mixCombination(tempComb,res,list.slice(1));
            }
          }
        }
    }

    checkNext(before,after) {
        let delta0=Math.abs(before[0]-after[0]);
        let delta1=Math.abs(before[1]-after[1]);
        console.log(delta0,delta1)
        if(delta0+delta1!==0 && delta0<2 && delta1<2) {return true;}
        else {return false}
    }
    checkDuplicate(list) {
        if(list.length<1) {return false}
        for(let i=1; i<list.length; i++) {
          let yValue=list[0][0]===list[i][0];
          let xValue=list[0][1]===list[i][1];
          if(xValue===true && yValue===true) return true
        }
        let tempList=list.slice(1)
        return this.checkDuplicate(tempList)
    }
}


var game = new Boogle()

game.showBoard()
for(let i in game.match) {
    console.log(`${game.match[i].word}:`);
    for(let j in game.match[i].indexCombination) {
        console.log(`${Number(j)+1}. ${game.match[i].indexCombination[j].join(' | ')}`)
    }
}