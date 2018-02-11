class Boggle {
    constructor(num) {
        this.num = num;
        this.boggle_board = [];
    }

    generateBoard() {
        for (var i = 0; i < this.num; i++) {
            var array = [];
            for (var j = 0; j < this.num; j++) {
                array.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
            }
            this.boggle_board.push(array);
        }
        return this.boggle_board;
    }
}

var boggle = new Boggle(5);
console.log(boggle.generateBoard());

