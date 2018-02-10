class Boggle{
	constructor(size){
		this.size = size
		this.dictio = ['APPLE','SIT','TRIP','TURN','SUPER','APE','RUN']
		this.board = this.print_board()
		this.position = []
		this.result = []
		this.check = []

	}

	print_board(){
		let board = []
		const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		for(let i =0;i<this.size;i++){
			let inside = []
			for(let j =0;j<this.size;j++){
				let random = Math.floor(Math.random()*alpha.length)
				inside.push(alpha[random])
			}
			board.push(inside)
		}
		return board
	}

	solve(){
		for(let i =0;i<this.board.length;i++){
			for(let j=0;j<this.board.length;j++){
				for(let k=0;k<this.dictio.length;k++){
					if(this.board[i][j]===this.dictio[k][0]){
						this.position.push(i,j)
						// console.log(this.board)
						console.log('row',this.position[0],'col',this.position[1],'word',this.dictio[k])
					}
				}
				this.position =[]
			}
		}
	}

	check_compass(row,col,value){
		for(let i=0;i<=8;i++){
			//check NW
			if(i===0 && row !== 0 && col !== 0){
				if(this.board[row-1][col-1] === value){
					this.position.push(row-1,col-1)
					return true
				}
			}
			//check N
			if(i===1 && row !== 0){
				if(this.board[row-1][col] === value){
					this.position.push(row-1,col)
					return true
				}
			}
			//check NE
			if(i===2 && row !== 0 && col !== this.board.length-1){
				if(this.board[row-1][col+1] === value){
					this.position.push(row-1,col+1)
					return true
				}
			}
			//check W
			if(i===3 && col !== 0){
				if(this.board[row][col-1] === value){
					this.position.push(row,col-1)
					return true
				}
			}
			//check E
			if(i===4 && col !== this.board.length-1){
				if(this.board[row][col+1] === value){
					this.position.push(row,col+1)
					return true
				}
			}
			//check SW
			if(i===5 && row !== this.board.length-1 && col!== 0){
				if(this.board[row+1][col-1] === value){
					this.position.push(row+1,col-1)
					return true
				}
			}
			//check S
			if(i===6 && row !== this.board.length-1){
				if(this.board[row+1][col] === value){
					this.position.push(row+1,col)
					return true
				}
			}
			//check SE
			if(i===7 && row !== this.board.length-1 && col!==this.board.length-1){
				if(this.board[row+1][col+1] === value){
					this.position.push(row+1,col+1)
					return true
				}
			}
			if(i === 8){
				return false
			}
		}
	}

	check_Awal(word){
		for(let i =0;i<word.length;i++){
			if(this.check_compass(this.position[0],this.position[1],word[i])){
				this.check.push(word[i])
			}
			
		}



	}
	
}


let newGame = new Boggle(4)
console.log(newGame.print_board())
console.log(newGame.solve())