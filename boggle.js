const Dictionary = require('./dictionary.js')

class Boggle {
    constructor (size){
        this._dictionary = new Dictionary()
        this._alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        this._size = size || 4
        this._shake = this.shake()
    }
    shake (){
        let board = []
        for (let i = 0; i < this._size; i++){
            board.push([])
            for (let j = 0; j < this._size; j++){
                board[i].push(this._alphabet[Math.floor(Math.random()*(this._alphabet.length))])
            }
        }
        return board
    }
}

const game = new Boggle()

console.log(game._shake)