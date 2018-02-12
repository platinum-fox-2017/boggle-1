const library = require('./data').words;

class Boggle {
    constructor(n = 4) {
        this.boardArr = new Array();
        this.size = n;
        this.boardMap = new Array();
        this.result = new Array();
        this.map_board_init();
        // this.shake();
    }

    // Scramble the box character
    shake() {
        for (let i = 0; i < this.size; i++) {
            let tempArr = new Array();
            for (let j = 0; j < this.size; j++) {
                tempArr.push(String.fromCharCode('A'.charCodeAt() + Math.floor(Math.random() * 26)));
            }
            this.boardArr.push(tempArr);
        }
    }

    // Create example of box
    create_example_box() {
        this.boardArr = [
            ['A', 'B', 'W', 'I'],
            ['A', 'I', 'D', 'D'],
            ['A', 'D', 'E', 'C'],
            ['A', 'U', 'A', 'M']
        ];
    }

    // Map the value in board
    map_board_init() {
        for (let i = 0; i < this.size; i++) {
            let tempArray = new Array();
            for (let j = 0; j < this.size; j++) {
                tempArray.push(1);
            }
            this.boardMap.push(tempArray);
        }
    }

    solve() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                // console.log("Posisi yang sedang di cek: "+this.boardArr[i][j]+" - "+i+" - "+j);
                for (let k = 0; k < library.length; k++) {
                    this.check_library(library[k], "", 1, i, j);
                }
                // console.log("Check Library: "+this.check_library("",1,i,j));
            }
        }
    }

    check_library(library, str, length, y, x) {
        if (str == library) {
            if (this.result_check(str)) {
                this.result.push(library);
                // console.log("finished: " + library);
            }
            // return true;
        }

        if (!this.possible(y, x)) return false;
        // console.log(this.boardMap);
        str += this.boardArr[y][x];
        // console.log(library+ " - " + str);

        if (library.slice(0, length) == str) {
            // console.log("Ini str: " + str);

            if (this.check_library(library,str, length + 1, y, x + 1)) return true;
            if (this.check_library(library,str, length + 1, y, x - 1)) return true;
            if (this.check_library(library,str, length + 1, y + 1, x)) return true;
            if (this.check_library(library,str, length + 1, y - 1, x)) return true;
            if (this.check_library(library,str, length + 1, y + 1, x + 1)) return true;
            if (this.check_library(library,str, length + 1, y - 1, x + 1)) return true;
            if (this.check_library(library,str, length + 1, y + 1, x - 1)) return true;
            if (this.check_library(library,str, length + 1, y - 1, x - 1)) return true;

        }
        this.boardMap[y][x] = 1;
        return false;

    }

    result_check(str) {
        for (let i = 0; i < this.result.length; i++) {
            if (this.result[i] == str)
                return false
        }
        return true;
    }

    possible(y, x) {
        if (y >= 0 && x >= 0 && y < this.size && x < this.size) {
            if (this.boardMap[y][x] == 1) {
                this.boardMap[y][x] = 0;
                return true;
            }
        }
        return false;
    }


}


var boggle = new Boggle(4);
// boggle.create_example_box();
boggle.shake();
console.log(boggle.boardArr);
boggle.solve();
console.log(boggle.result);
