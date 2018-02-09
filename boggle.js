class Boggle {
    constructor(string,length){
        this.string = string;
        this.length = length || 4;
        // this.words = this.random_words();
        this.board = this.create_board();
    }
    random_words(){
        let alphabet ='abcdefghijklmnopqrstuvwxyz'
        let random = Math.round((Math.random() * 25));
        return alphabet[random].toUpperCase();
    }
    create_board(){
        let counter =0;
        let outside =[]
        for(let i=0; i<this.length; i++){
            outside.push([]);
            for(let j=0; j<this.length; j++){
                outside[i].push(this.string[counter]);
                counter++;
            }
        }
        return outside;
    }
    shake_board(){
        let string = (this.board.toString(''));
        string = (string.split(','));
        let outside =[]
        for(let i=0; i<this.length; i++){
            outside.push([]);
            for(let j=0; j<this.length; j++){
                let random = Math.floor(Math.random()*string.length);
                outside[i].push(string[random]);
                string.splice(random,1);
            }
        }
        return outside;
    }
}
let new_string = 'AKJDZAOHGEBRTFJV';
let new_boggle = new Boggle(new_string);

// console.log(new_boggle.random_words());
// console.log(new_boggle.create_board());
console.log(new_boggle.shake_board());
