/*
Boogle 1 Basic Board Generation
Release 0
*/

class Boggle {
    constructor() {

    }

    shake(num) {
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
        var arrHasil = [];
        for (var j = 0; j < num; j++) {
            var arr = []
            for (var i = 0; i < num; i++) {
                var angkaRandom = Math.round(Math.random()*(alphabet.length-1));
                arr.push(alphabet[angkaRandom].toUpperCase());
            }
            arrHasil.push(arr);
        }
        return arrHasil;
    }

}


var game = new Boggle();

console.log(game.shake(4));




/*
FUNCTION METHOD

function shake(num) {

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // console.log(alphabet.length); // 26

    // console.log(angkaRandom);
    var arrHasil = [];
    for (var j = 0; j < num; j++) {
        var arr = []
        for (var i = 0; i < num; i++) {
            var angkaRandom = Math.round(Math.random()*25);
            arr.push(alphabet[angkaRandom].toUpperCase());
        }
        arrHasil.push(arr);
    }


    return arrHasil;

}

console.log(shake(4));

*/
