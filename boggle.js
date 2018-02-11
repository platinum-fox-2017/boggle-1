"use strict";

class Boogle{
    constructor(kamus, size){
        this.kamus = kamus
        this.size = size
        this.tigaEnamPuluh = [
        [1,1],
        [1,0],
        [1,-1],
        [0,-1],
        [-1,-1],
        [-1,0],
        [-1,1],
        [0,1]
        ];
    }

    board(){
        // bikin papan 4x4, dan random kata dari a-z
        var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var boards = [];
        for(let r=0; r<this.size; r++){
            let row = [];
            for(let c=0; c<this.size; c++){
                var random = abjad[Math.floor(Math.random()*abjad.length)] //+ ' ' +  [r,c] ;
                row.push(random);
            }
            boards.push(row);
        }
        return boards;
    }
    cek360(char){ 
        console.log(this.kamus[0])
        
    }
    scanKamus(){ // kirim persatu kata ke cek360
        // var 
        for(let i=0; i<this.kamus.length; i++){
            var kata = [];
            for(let j=0; j<this.kamus.length; j++){
                // kata.push(this.kamus[j]);
                // this.cek360(this.kamus[i][j])
            } 
        }
        // return kata;
    }

}
var size = 4;
var kamus = ['MAKAN', 'MAIN', 'MANDI', 'MACUL', 'MASAK', 'MANJAT', 'DIA', 'AKU', 'KAMU', 'BUDI', 'SIP', 'KUY', 'EXO',
             'INI', 'ITU', 'HIU', 'HAI', 'JAUH', 'DEKAT', 'ENAK', 'CUY', 'GAN', 'OI', 'ANI', 'TONO', 'ROH', 'DKV', 'LPG',
             'HELO', 'HALO', 'SIAPA', 'MUNCUL', 'BETE', 'BERES', 'NEM', 'UI', 'KITA', 'IKI', 'AKI', 'TUA', 'SNI',
             'LAPER', 'LAPET', 'KENYANG', 'BOY', 'GIRL', 'HAH', 'UHU', 'KWI', 'KTP', 'SIM', 'CD', 'DC', 'LUCU', 'LGBT',
             'AU', 'AD', 'ADE', 'GILA', 'KOIL', 'DEWA','TUR','UN', 'UIN', 'USU'];

var boogle = new Boogle(kamus, size);

console.log(boogle.board());
console.log(boogle.cek360());
console.log(boogle.scanKamus());