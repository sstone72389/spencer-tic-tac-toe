'use strict'
let currentPlayer = 'x'
let turnNumber = 1
let gameArray = ['', '', '', '', '', '', '', '', '']
const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 5],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
$('.inner[data-id]').on('click', function () {
  if (currentPlayer === 'x' && gameArray[this.dataset.id] === '') {
    $(this).text('x')
    turnNumber += 1
    gameArray[this.dataset.id] = 'x'
    currentPlayer = 'o'
    $('.authText').text('It\'s O\'s Turn Now!')
    document.querySelector('.authText').style.display = 'block'
  } else if (currentPlayer === 'o' && gameArray[this.dataset.id] === '') {
    $(this).text('o')
    turnNumber += 1
    gameArray[this.dataset.id] = 'o'
    currentPlayer = 'x'
    $('.authText').text('It\'s X\'s Turn Now!')
    document.querySelector('.authText').style.display = 'block'
  }
  if (turnNumber === 10) {
    document.querySelector('.authText').style.display = 'none'
  }
  console.log(gameArray)
})
// reset button to reset board
$('.resetButton').on('click', function () {
  $('.inner[data-id]').text('')
  gameArray = ['', '', '', '', '', '', '', '', '']
  turnNumber = 1
})
