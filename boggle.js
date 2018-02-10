"use strict"

class Boogle {
	constructor(dictionary) {
		this.dictionary = dictionary;
		this.size = 0;
		// this.board_arr = [
		// 					['A', 'N', 'T', 'I'],
		// 					['P', 'P', 'R', 'P'],
		// 					['P', 'R', 'L', 'E'],
		// 					['L', 'U', 'B', 'O'],
		// 				];
		this.board_arr = [];
		this.board_visit = [];
	}

	shake(size) {
		let result = [];
		for (let i = 0; i < size; i++) {
			let temp = [];
			for (let j = 0; j < size; j++) {
				let randomChar = String.fromCharCode(Math.floor(Math.random() * (26)) + 65);
				temp.push(randomChar);
			}
			result.push(temp);
		}

		this.size = size;
		this.board_arr = result;
	}

	solve()
	{
		let result = [];

		for (var i = 0; i < this.dictionary.length; i++) {
			this.board_visit = this.setAllMap(true, this.size);
			if (this.isFound(this.dictionary[i])) result.push(this.dictionary[i]);
		}

		console.log(`${result.length} kata ditemukan:\n${result.join(', ')}`);
	}

	isFound(str) {
		let index = { row: 0, column: 0 };

		if (!this.findChar(str[0], index)) return false;


		if (!this.findNextChar(str, index)) return false;

		return true;
	}


	findChar(char, index) {
	    for (index.row = 0; index.row < this.board_arr.length; index.row++) {
	    	for (index.column = 0; index.column < this.board_arr.length; index.column++) {
		        if (this.board_arr[index.row][index.column] == char) return true;
		    }
		}
		return false;
	}

	findNextChar(str, index) {
		if (str.length == 0) return true;

		if (!this.isSafe(str[0], index.row, index.column)) return false;

		if (this.findNextChar(str.slice(1), this.goTop(index))) return true;
		if (this.findNextChar(str.slice(1), this.goTopRight(index))) return true;
		if (this.findNextChar(str.slice(1), this.goRight(index))) return true;
		if (this.findNextChar(str.slice(1), this.goBottomRight(index))) return true;
		if (this.findNextChar(str.slice(1), this.goBottom(index))) return true;
		if (this.findNextChar(str.slice(1), this.goBottomLeft(index))) return true;
		if (this.findNextChar(str.slice(1), this.goLeft(index))) return true;
		if (this.findNextChar(str.slice(1), this.goTopLeft(index))) return true;

		this.board_visit[index.row][index.column] = true;

		return false;
	}

	goTop(index) {
		return { row: index.row-1, column: index.column};
	}

	goTopRight(index) {
		return { row: index.row-1, column: index.column+1};
	}

	goRight(index) {
		return { row: index.row, column: index.column+1};
	}

	goBottomRight(index) {
		return { row: index.row+1, column: index.column+1};
	}

	goBottom(index) {
		return { row: index.row+1, column: index.column};
	}

	goBottomLeft(index) {
		return { row: index.row+1, column: index.column-1};
	}

	goLeft(index) {
		return { row: index.row, column: index.column-1};
	}

	goTopLeft(index) {
		return { row: index.row-1, column: index.column-1};
	}

	isSafe(char, row, column) {
	  	if (row >= 0 && column >= 0 && 
	  		row < this.size && column < this.size && 
	  		this.board_arr[row][column] == char &&
	  		this.board_visit[row][column]) {

	  		this.board_visit[row][column] = false;
	  		return true;
	  	}
	  	return false;
	}

	setAllMap(condition, num) {
	    let arr = [];
	    for (let i = 0; i < num; ++i) {
	    	let temp = [];
	    	for (let j = 0; j < num; j++) {
	    		temp.push(condition);
	    	}
	        arr.push(temp);
	    }

	    return arr;
	}

	showBoard() {
		console.log(this.board_arr);
	}
}

const data = require('./data_sample')
console.log(`Dictionary: ${data.join(', ')}`);
var game = new Boogle(data);
game.shake(10);
game.showBoard();
game.solve();