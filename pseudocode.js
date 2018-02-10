/* Boggle

### Basic ###
// Class Boggle
// set constructor
// string as the input strin.
  // currently set as a predfined input
  // or randomly generated
// boardSize as length or 4
// boardVol as the total amount of entries
// board to set the base board

// make_board()
// make board as array in array with boardSize * boardSize
// set wordOrder to 0 for counting index of inputted string
// loop rows from 0 to boardSize
  // push an empty array into board
  // loop collumn from 0 to boardSize
    // push string of letters generated/ prepared from index wordOrder, uppercased
    // increment wordOrder
// return board

// log_board()
// print board on console
// loop rows from 0 to boardSize
// log board rows joined with ' ' inbetween

// generate_random_letter()
// let alphabet contain a-z
// let alphabetArr to contain array with alphabet values
// let randomized as empty string as the randomized alphabet
// loop from 0 to alphabet length with increment of 1
  // let rngIndex to call rng() from 0 to alphabet length every loop
  pick letter form alphabetArr with rngIndex and add to randomized
  // remove the letter from alphabetArr with rngIndex
// return randomized

// rng()
// has parameter of length
// if length is undefined set as 1
// return math random * length and then rounded

// shake()
// to shuffle the board contents
// let boardShaken as empty array to contain new board result
// let randomized to call generate_random_letter()
// log '' as a separator
// loop rows from 0 to boardSize with increment of 1
  // push [] to boardShaken
  // loop col from 0 to boardSize with increment of 1
    // fill current boardShaken rows with randomized at[col]
  // reassign randomized as the substr with length of boardSize
// return boardShaken

############################ ADVANCED #############################
// constructor
// add coordinates as [] to contain the coords of boxes
// add cardinal_pos as : {   up        : [ -1,  0 ],
                             upRight   : [ -1,  1 ],
                             right     : [  0,  1 ],
                             downRight : [  1,  1 ],
                             down      : [  1,  0 ],
                             downLeft  : [  1, -1 ],
                             left      : [  0, -1 ],
                             upLeft    : [ -1, -1 ] }
// set wordConstruct as a way to contain temporary letters
// set wordConfirm as a way to store words that are confirmed by dictionary file


// find_coords()
// loop through the board
//
// loop rows from 0 to boardSize with increment of 1
  // loop col from 0 to boardSize with increment of 1
    // let boxLocation as {coords: [rows][col], mark: false}
    // mark to set if the location is traced by step()
    // push boxLocation to this.coordinates
//


// solve()
// will loop through the board as boardIndex = 0 to boardVol
// increment ++ when this location is done calculating
// increment -- (when above 0) when backtracking
  // set stepCounter = 0 for each board location
  // set thi.wordConstruct to empty string
  // set board_coords = this.coordinates at [i]
#################################################
  // loop stepCounter from 0 to boardVol - 1
    // stepCounter ++
    // pick curent letter from current position to wordConstruct
    // mark this.coordinates.mark as true, value is picked

    // combine wordConstruct, and check if valid from dictionary
      // if true then add to wordConfirm,

    // searching next area
    // loop d from 0 to 8, no increment
      // let new_board_coords as board_coords coordinates
      // use cardinal_pos at [d] to modify new_board_coords
      // check board value with cardinal_search(new_board_coords)
        // if true move to next box
          // d++ (this cardinal direction is used)
          // else (does not have value/ has true mark)
              // d++ (this direction is not valid)
  // reaching here means no valid cardinal direction is valid
  // go back 1 step
  // unmark this board_coords


** recursion is to far reaching for me
** switch to simple loop and back track from there

// recursion step(new_board_coords)
*****************************************************

// cardinal_search(new_board_coords)
// all share same principles,
// difference being coordinates.
// direction :
  // 1. up()        || return [ -1,  0 ]
  // 2. upRight()   || return [ -1,  1 ]
  // 3. right()     || return [  0,  1 ]
  // 4. downRight() || return [  1,  1 ]
  // 5. down()      || return [  1,  0 ]
  // 6. downLeft()  || return [  1, -1 ]
  // 7. left()      || return [  0, -1 ]
  // 8. upLeft()    || return [ -1, -1 ]
// set const as [ [ -1,  0 ], [ -1,  1 ], [  0,  1 ],
//                [  1,  1 ], [  1,  0 ], [  1, -1 ],
//                [  0, -1 ], [ -1, -1 ] ]

// usage : step will input directions from loop
// return true/ false if the direction has value
// and NOT marked
// if board at coordinates !== undefined and mark !== true
  // return true
// else return false



// set module.exports on small dictionary
// set require on main file












*/
