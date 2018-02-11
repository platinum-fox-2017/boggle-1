// const Dictionary = require('./dictionary.js')
const Dictionary = require('./data.js')

class Boggle {
    constructor (size){
        this._dictionary = new Dictionary()
        this._size = size || 4
        this._shake = this.shake()
        this._availableLetter = this.availableLetters()
        this._unavailableLetter = this.unavailableLetter()
        this._filter = this.filter()
    }
    // generate board based on letters from dictionary
    shake (){
        let board = []
        for (let i = 0; i < this._size; i++){
            board.push([])
            for (let j = 0; j < this._size; j++){
                let randomWord = this._dictionary._dictionary[Math.floor(Math.random()*(this._dictionary._dictionary.length))]
                let randomLetterFromWord = randomWord[Math.floor(Math.random()*randomWord.length)]
                board[i].push(randomLetterFromWord)
            }
        }
        return board
    }
    availableLetters (){
        let letterInBoard = []
        for (let i = 0; i < this._shake.length; i++){
            for (let j = 0; j < this._shake[i].length; j++){
                if (letterInBoard.indexOf(this._shake[i][j]) == -1){
                    letterInBoard.push(this._shake[i][j])
                }
            }
        }
        return letterInBoard.sort()
    } 
    unavailableLetter (){
        let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','-']
        return alphabet.filter(x => !this._availableLetter.includes(x))
    }
    // reduce amount of word in dictionary by matching first letter of each word to board letters
    filter (){
        let words = []
        let count = 0
        let list = this._dictionary._dictionary.sort()
        while (count < list.length){
            for(let i = 0; i < this._shake.length; i++){
                for(let j = 0; j < this._shake[i].length; j++){
                    let word = list[count]
                    let firstLetter = word[0]
                    if (this._shake[i][j] == firstLetter && words.indexOf(word) == -1){
                        words.push(list[count])
                    }
                }
            }
            count++
        }        
        // filters words by any letter that is not in board
        for(let i = 0; i < this._unavailableLetter.length; i++){
            words = words.filter(a => !a.includes(this._unavailableLetter[i]))
        }
        // filters any word with length greater than the board size itself
        return words.filter(x => x.length <= 16)    
    }

    checkAdjacent (pos, word, wordLength, letterIndex){
        if (wordLength == letterIndex){
            return true
        } else {
            for (let i = Math.max(0, pos[0]-1); i <= Math.min(this._shake.length-1, pos[0]+1); i++){
                for (let j = Math.max(0, pos[1]-1); j <= Math.min(this._shake.length-1, pos[1]+1); j++){
                    if (this._shake[i][j] == word[letterIndex] && i != pos[0] && j != pos[1]){
                        return this.checkAdjacent([i,j], word, wordLength, letterIndex+1) 
                    }
                }
            }
            return false
        }
    }

    solve (){
        let count = 0
        let result = []
        let found

        while (count < this._filter.length){
            let letterIndex = 0
            let found = false

            for (let i = 0; i < this._shake.length; i++){
                for (let j = 0; j < this._shake[i].length; j++){
                    let word = this._filter[count]
                    let wordLength = word.length
                    let letterCheck = word[letterIndex]

                    if (this._shake[i][j] == letterCheck && result.indexOf(word) == -1){
                        let pos = [i,j]
                        if (this.checkAdjacent(pos, word, wordLength, letterIndex+1)){
                            found = true
                            result.push(word)
                        } 
                    }
                }
            } 
            if (!found){
                count++
            }
        }
        return result
    }
}

const game = new Boggle(4)

console.log(game._shake) 
// console.log(game._filter)
console.log(game.solve())