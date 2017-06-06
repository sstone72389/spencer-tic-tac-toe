'use strict'
// requires api.js to send requests to server
const updatedGame = require('./auth/api.js').updatedGame

const startGame = function () {
  let currentPlayer = 'x'
  let turnNumber = 1
  let gameArray = ['', '', '', '', '', '', '', '', '']
  let win = false

// button that initializes game, resets board and is also used for POST
  $('.initButton').on('click', function () {
    $('.inner[data-id]').text('')
    gameArray = ['', '', '', '', '', '', '', '', '']
    turnNumber = 1
    $('.authText').hide()
    $('.winStatement').hide()
    $('.drawStatement').hide()
    currentPlayer = 'x'
    win = false
    $('.container-fluid').show()
    $('.getText').hide()
  })
  // winning arrays to be looped through
  const checkWin = function () {
    const winArr = [
    [gameArray[0], gameArray[1], gameArray[2]],
    [gameArray[3], gameArray[4], gameArray[5]],
    [gameArray[6], gameArray[7], gameArray[8]],
    [gameArray[0], gameArray[4], gameArray[8]],
    [gameArray[2], gameArray[4], gameArray[6]],
    [gameArray[0], gameArray[3], gameArray[6]],
    [gameArray[1], gameArray[4], gameArray[7]],
    [gameArray[2], gameArray[5], gameArray[8]]
    ]
    for (const i in winArr) {
      if ((winArr[i][0] === 'x' || winArr[i][0] === 'o') && (winArr[i][0] === winArr[i][1] && winArr[i][1] === winArr[i][2])) {
        $('.winStatement').text(currentPlayer + ' has won!')
        $('.winStatement').show()
        win = true
      }
    }
  }
  // uses callback function that determines which div has been clicked
  $('.inner[data-id]').on('click', function () {
    // define update as a variable that contains an object within an object
    // when a cell is clicked: update the index value of the object with
    // the value of the cell clicked. Pass which player clicked.
    const update = {cell: {index: this.dataset.id, value: currentPlayer}}
    // if currentPlayer is x, the div is empty and no one has won, allow move,
    // add to count (to check for draw at end), check if anyone won and finally
    // switch the player if the game is still active
    if (currentPlayer === 'x' && gameArray[this.dataset.id] === '' && win === false) {
      $(this).text('x')
      turnNumber += 1
      gameArray[this.dataset.id] = 'x'
      checkWin()
      currentPlayer = 'o'
      // checks same data as above
    } else if (currentPlayer === 'o' && gameArray[this.dataset.id] === '' && win === false) {
      $(this).text('x')
      $(this).text('o')
      turnNumber += 1
      gameArray[this.dataset.id] = 'o'
      checkWin()
      currentPlayer = 'x'
    }
    // if all turns have been used and no one won......
    if (turnNumber === 10 && win === false) {
      // sets game as complete
      update.over = true
      $('.drawStatement').show()
    } else if (win === true) {
      // sets game as complete
      update.over = true
    }
    // call function to pass data to API
    updatedGame({game: update})
  })
}

module.exports = {
  startGame
}
