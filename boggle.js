const library = require('./data1').words;

class Boggle {
    constructor(n=4){
        this.boardArr = new Array();
        this.size = n;
        this.boardMap = new Array();
        this.result = new Array();
        this.result = new Array();
        this.map_board_init();
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

    // Create example of box
    create_example_box(){
        this.boardArr = [
            ['A','B','W','I'],
            ['A','I','D','D'],
            ['A','H','E','C'],
            ['A','U','E','M']];
    }

    // Map the value in board
    map_board_init(){
        for(let i = 0; i < this.size; i++){
            let tempArray = new Array();
            for(let j = 0; j < this.size; j++){
                tempArray.push(1);
            }
            this.boardMap.push(tempArray);
        }
    }

    solve(){
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                this.check_library("",1,i,j);
            }
        }
    }

    check_library(str,length,y,x){
        for(let i = 0; i < library.length; i++){
            if(str==library[i]){
                if(this.result_check(str)){
                    this.result.push(library[i]);
                    console.log("finished: "+library[i]);
                }
                // return true;
            }

            if(!this.possible(y,x))return false;
            console.log(this.boardMap);
            str += this.boardArr[y][x];

            if(library[i].slice(0,length)==str){
                console.log("Ini str: "+str);

                if(this.check_library(str,length+1,y,x+1))return true;
                if(this.check_library(str,length+1,y,x-1))return true;
                if(this.check_library(str,length+1,y+1,x))return true;
                if(this.check_library(str,length+1,y-1,x))return true;
                if(this.check_library(str,length+1,y+1,x+1))return true;
                if(this.check_library(str,length+1,y-1,x+1))return true;
                if(this.check_library(str,length+1,y+1,x-1))return true;
                if(this.check_library(str,length+1,y,x-1))return true;
                this.boardMap[y][x] = 1;
            }
            return false;
        }
    }

    result_check(str){
        for(let i = 0; i < this.result.length; i++){
            if(this.result[i]==str)
                return false
        }
        return true;
    }

    possible(y,x){
        if(y>=0 && x>=0 && y<this.size && x<this.size){
            if(this.boardMap[y][x] == 1){
                this.boardMap[y][x] = 0;
                return true;
            }
        }
        return false;
    }


}


var boggle = new Boggle();
boggle.create_example_box();
console.log(boggle.boardArr);
boggle.solve();
console.log(boggle.result);
