const words = require('./data')
// console.log(words)
class Boggle{
	constructor(size){
		this.size = size
		this.dictio = words		
		this.board = this.print_board()
		this.check = []
		this.position = []
		this.result = []

	}

	print_board(){
		let boardArr = []
		const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		for(let i =0;i<this.size;i++){
			let inside = []
			for(let j =0;j<this.size;j++){
				let random = Math.floor(Math.random()*alpha.length)
				inside.push(alpha[random])
			}
			boardArr.push(inside)
		}
		return boardArr
	}

	solve(){
		console.log(this.board)
		for(let i =0;i<this.board.length;i++){
			for(let j=0;j<this.board.length;j++){
				for(let k=0;k<this.dictio.length;k++){
					if(this.board[i][j]===this.dictio[k][0]){
						this.check = []
						this.position.push([i,j])
						this.check.push(this.dictio[k][0])
						this.check_Awal(this.dictio[k])
						if(this.check.length === this.dictio[k].length && this.result.indexOf(this.check)===-1){
							this.result.push(this.check)
						}
						
					}
					this.position =[]
				}
				
			}
		}	
		// console.log(`${this.result.length} word(s) found:`)
		let listWord =[]
		for(let l=0;l<this.result.length;l++){
			// console.log(`${l+1}. ${this.result[l].join('')}`)
			listWord.push(this.result[l].join(''))

		}
		// console.log(listWords)
		let sortWord =[]
		for(let m=0;m<listWord.length;m++){
			if(sortWord.indexOf(listWord[m])===-1){
				sortWord.push(listWord[m])	
			}
		}
		console.log(`${sortWord.length} word(s) found:`)
		for(let n=0;n<sortWord.length;n++){
			console.log(`${n+1}. ${sortWord[n]}`)
		}
	}

	check_compass(row,col,value){
		for(let i=0;i<=8;i++){
			//check NW kiri atas
			if(i===0 && row !== 0 && col !== 0 && this.check_return(row-1,col-1)){
				if(this.board[row-1][col-1] === value){
					this.position.push([row-1,col-1])
					return true
				}
			}
			//check N atas
			if(i===1 && row !== 0 && this.check_return(row-1,col)){
				if(this.board[row-1][col] === value){
					this.position.push([row-1,col])
					return true
				}
			}
			//check NE kanan atas
			if(i===2 && row !== 0 && col !== this.board.length-1 && this.check_return(row-1,col+1)){
				if(this.board[row-1][col+1] === value){
					this.position.push([row-1,col+1])
					return true
				}
			}
			//check W kiri
			if(i===7 && col !== 0 && this.check_return(row,col-1)){
				if(this.board[row][col-1] === value){
					this.position.push([row,col-1])
					return true
				}
			}
			//check E kanan
			if(i===3 && col !== this.board.length-1 && this.check_return(row,col+1)){
				if(this.board[row][col+1] === value){
					this.position.push([row,col+1])
					return true
				}
			}
			//check SW kiri bawah
			if(i===6 && row !== this.board.length-1 && col!== 0 && this.check_return(row+1,col-1)){
				if(this.board[row+1][col-1] === value){
					this.position.push([row+1,col-1])
					return true
				}
			}
			//check S bawah
			if(i===5 && row !== this.board.length-1 && this.check_return(row+1,col)){
				if(this.board[row+1][col] === value){
					this.position.push([row+1,col])
					return true
				}
			}
			//check SE kanan bawah
			if(i===4 && row !== this.board.length-1 && col!==this.board.length-1 && this.check_return(row+1,col+1)){
				if(this.board[row+1][col+1] === value){
					this.position.push([row+1,col+1])
					return true
				}
			}
			if(i === 8){
				return false
			}
		}
	}

	check_Awal(word){
		for(let i =1;i<word.length;i++){
			if(this.check_compass(this.position[this.position.length-1][0],this.position[this.position.length-1][1],word[i])){
				this.check.push(word[i])
			}else{
				break;
			}	
		}
	}

	check_return(row,col){
		for(let i=0;i<=this.position.length;i++){
			if(i === this.position.length){
				return true
			}
			if(this.position[i][0] === row && this.position[i][1]===col){
				return false
			}
		}
	}
	
}


let newGame = new Boggle(6)
// console.log(newGame)
// console.log(newGame.print_board())
newGame.solve()