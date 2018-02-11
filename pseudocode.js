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
    // keep track of coordnates with
    // set boxLocation as an array containing rows,collumn
    // push boxLocation into this.coordinates
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
// add dictionary list to match words switch
// set visited to track cells
// set matching to contain matching result


// find_coords()
// loop through the board
//
// loop rows from 0 to boardSize with increment of 1
  // loop col from 0 to boardSize with increment of 1
    // let boxLocation as {coords: [rows][col], mark: false}
    // push boxLocation to this.coordinates
//


// solve()
// command to solve current board
// create a variable startingPoint
// loop start from 0 to boardVol with increment of 1
  // set starting point from the coordinates at [start]
  // set a variable occupied to contain all non valid cells as []
  // set a variable word to contain combination of letters as ''
  // push startingPoint to occupied (cannot move to startingPoint)
  // create a variable firstCheck as the value at startingPoint
  // add firstCheck as the first letter of word

  // check if the first letter (firstCheck) has any possible combination in the dictionary
  // loop through this.dictionary
    // if firstCheck is equal to any of the first letter of dictionary word
      // execute this.step with parameter startingPoint, occupied, word
  // when all of the board is searched, return log of this. matching


#################################################
// step(startingPoint, occupied, word)
// receiving startingPoint, occupied, word from solve()
// searching valid move directions
// set d = 0, while d is between 0 and 8 (d>=0 && d<8)
  // set a variable matchingWord as word
  // set a variable targetPos as check_adjadent with param startingPoint, d, occupied
  // if targetPos is false
    // increment d++
  // else
    // increment d++
    // pick letter.
    // matchingWord is added with value at targetPos, lowercased
    // loop through dictionary (dict)
      // if matchingWord is equal to dictionary letter as long as length of matchingWord
        // set d to 8 (stop while)
        // push targetPos to occupied
        // loop through dictionary (f)
          // if matchingWord is equal to dictionary word at f
            // loop through this.matching
              // set variable overwrite as false
              // if matchingWord match any value from this.matching
                // set overwrite as false
            // if overwrite false,
              // push matchingWord into this. matching
        // return this.step with parameter targetPos, occupied, matchingWord
// if targetPos is false
  // if coords amount in occupied and this.visited is equal to boardVol
    // return -1
  // set this.visited as last value of occupied
  // if occupied amount is still >0
    // remove the last value
  // create a variable old as last value of occupied
  // return this.step with parameter old, occupied, word

*****************************************************

// check_adjadent(startPos, direction, occupied)
// to theck whether the next cell is valid move or not
// has parameters of starting position, direction to move, and list of unavailable cells
// add coordinates as : [ [ -1,  0 ],
                          [ -1,  1 ],
                          [  0,  1 ],
                          [  1,  1 ],
                          [  1,  0 ],
                          [  1, -1 ],
                          [  0, -1 ],
                          [ -1, -1 ] ]

// create a variable testPos to contain starting position that is modified with coordinates. the coordinates applicable is set by direction
// if the board at row from testPos is not undefined and
  // if the board at collumn from testPos is not undefined then
    // find if testPos is matching any coordnates from occupied
      // loop through occupied
        // if testPos rows and collumn is the same as occupied
          // if found then is illegal move. return false
    // find if testPos is matching any coordnates from this.visited
      // loop through this.visited
        // if testPos rows and collumn is the same as this.visited
          // if found then is illegal move. return false
    // otherwise, return the testPos as a valid cell target
  // else the value is undefined / not part of the board
  // return false
// else the value is undefined / not part of the board
// return false





// set module.exports on small dictionary
// set require on main file












*/
