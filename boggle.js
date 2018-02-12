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

    // Solve all the answer
    solve() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                for (let k = 0; k < library.length; k++) {
                    this.check_library(library[k], "", 1, i, j);
                }
            }
        }
    }

    // Check every box and combination of words using recursive function
    check_library(library, str, length, y, x) {
        if (str == library) {
            if (this.result_check(str)) {
                this.result.push(library);
            }
        }

        if (!this.possible(y, x)) return false;
        str += this.boardArr[y][x];

        if (library.slice(0, length) == str) {
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

    // Check does the answer already on the result array or not
    result_check(str) {
        for (let i = 0; i < this.result.length; i++) {
            if (this.result[i] == str)
                return false
        }
        return true;
    }

    // Check is it possible to check the index x and y (must be inside the box)
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
// Release 0: Using example box
// var boggle = new Boggle();
// boggle.create_example_box();

// Release 2: Using data library and customize box size
var boggle = new Boggle(4);
boggle.shake();
console.log(boggle.boardArr);
boggle.solve();
console.log(boggle.result);
