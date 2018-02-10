class Boggle {
    constructor(string,length){
        this.string = string;
        this.length = length || 4;
        this.words = this.random_words();
        this.board = this.create_board();
        this.newString = this.turn_1d_string();
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
    turn_1d_string(){
        this.board.push([]);
        this.board.unshift([]);
        for(let i=0; i<this.board.length; i++){
            if(this.board[i][0] === undefined){
                do{
                    this.board[i].push('|');
                } while (this.board[i].length !== this.board.length-2);
            }
            this.board[i].push('|');
            this.board[i].unshift('|');
        }
        let new_string = String(this.board);
        return (new_string);
    }
    // check_if_true(input){
     
    //     let check = [];
    //     let current_word =0;
    //     let counter = 0;
    //     let check_word_container =[];
    //     let check_index_at_string =[];
    //     this.newString = this.newString.split(',')
    //     this.newString.forEach((item,index) => {
    //     let surrounding_positions = ()=> {
    //         let n = (this.board.length);
    //         let i= counter;
    //         let surrounding_position = [
    //             i-n-1,i-n,i-n+1,
    //             i-1,        i+1,
    //             i+n-1,i+n,i+n+1]
    //             return surrounding_position;
    //     }
    //        if(item !== '|'){
    //            if(item === input[current_word][counter]){
    //             console.log(item,index+` FIRST OUTER LOOP >>`+input[current_word][counter]+`<< `+input);

    //             for(let i=0; i<input[current_word].length; i++){
    //                 for(let j=0; j<surrounding_positions().length; j++){

    //                     console.log(surrounding_positions());
    //                 }
    //             }
    //            }
    //        }
    //    });
    //     return check_word_container;
    // }

    check_index_manual(input){
        let found = '';
        let new_string_index_in_array = [];
        let corressponding_alphabet =[];
        let new_string = this.newString.split(',');
        for(let i=0; i<input.length; i++){
            for(let j=0; j<input[i].length; j++){
                for(let k=0; k<new_string.length; k++){
                    if(input[i][j] === new_string[k]){
                        corressponding_alphabet.push(input[i][j]);
                        new_string_index_in_array.push(k);
                    }
                }
            }
        }
       

        for(let i=0; i<new_string_index_in_array.length; i++){
            const x = parseInt(new_string_index_in_array[i]);
            let n = this.board.length;

            let north_west = x-n-1;  let north = x-n; let north_east = x-n+1;
            let west = x-1;                           let east = x+1;
            let south_west = x+n-1;  let south = x+n; let south_east = x+n+1;

                if ((new_string_index_in_array[i+1] === north_west)
                || new_string_index_in_array[i+1]=== north
                || new_string_index_in_array[i+1]== north_east
                || new_string_index_in_array[i+1]== east
                || new_string_index_in_array[i+1]== south_east
                || new_string_index_in_array[i+1]== south
                || new_string_index_in_array[i+1]== south_west
                || new_string_index_in_array[i+1]== west){
                    
                    found += corressponding_alphabet[i];
                    if(found.length === input[0].length-1){
                        found += corressponding_alphabet[i+1];
                    }
                }
        }
        if(found.length !== input[0].length) return `WORD NOT FOUND`;
        else return `FOUND: `+ found;
    }
}
let new_string = 'DGHIKLPSYEUTEORN';
let known_words = ['TURN'];
let new_boggle = new Boggle(new_string);

// console.log(new_boggle.random_words());
console.log(new_boggle.create_board());
// console.log(new_boggle.shake_board());
// console.log(new_boggle.turn_1d_string());
// console.log(new_boggle.check_if_true(known_words));
// console.log(new_boggle.surrounding_positions());
console.log(new_boggle.check_index_manual(known_words));