var library = require('./data1');

class Boggle {
    constructor(n){
        this.boardArr = new Array();
        this.size = n;
        this.boardMap = new Array();
        // this.shake();
    }

    // Scramble the box character
    shake(){
        for(let i = 0; i < number; i++){
            let tempArr = new Array();
            for(let j = 0; j < number; j++){
                tempArr.push(String.fromCharCode('A'.charCodeAt()+Math.floor(Math.random()*26)));
            }
            this.boardArr.push(tempArr);
        }
    }

    create_example_box(){
        this.boardArr = [
            ['A','B','W','I'],
            ['A','I','D','D'],
            ['A','H','E','C'],
            ['A','U','E','M']];
    }

    map_board(){
        for(let i = 0; i < this.size; i++){
            let tempArray = new Array();
            for(let j = 0; j < this.size; j++){
                tempArr.push(1);
            }
            this.boardMap.push(tempArr);
        }
    }

    check_library(str){

    }
}


var boggle = new Boggle(6);
boggle.create_example_box();
console.log(boggle.boardArr);
