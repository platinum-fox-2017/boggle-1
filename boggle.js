const data = require('./data');

class Boggle{
    constructor(){
        
    }

    shake(length){
        let board = [];
        for(let i=0; i<length; i++){
            let row = [];
            for(let j=0; j<length; j++){
                row.push(this.randomString());
            }
            board.push(row);
        }
        return board;
    }

    randomString(){
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let i = Math.floor(Math.random() * alphabet.length)
        return alphabet[i];
    }

}

var boggle = new Boggle();
console.log(boggle.shake(5));