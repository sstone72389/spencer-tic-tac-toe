'use strict'
let currentPlayer = 'x'
let turnNumber = 1
let gameArray = ['', '', '', '', '', '', '', '', '']
let win = false

// const winning = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 5],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

const checkWin = function () {
  if (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2] && gameArray[0] !== '') {
    $('.winStatement').text(currentPlayer + ' has won!')
    document.querySelector('.winStatement').style.display = 'block'
    win = true
  } else if (gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5] && gameArray[3] !== '') {
    $('.winStatement').text(currentPlayer + ' has won!')
    document.querySelector('.winStatement').style.display = 'block'
    win = true
  } else if (gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8] && gameArray[6] !== '') {
    $('.winStatement').text(currentPlayer + ' has won!')
    document.querySelector('.winStatement').style.display = 'block'
    win = true
  } else if (gameArray[0] === gameArray[3] && gameArray[3] === gameArray[3] && gameArray[0] !== '') {
    $('.winStatement').text(currentPlayer + ' has won!')
    document.querySelector('.winStatement').style.display = 'block'
    win = true
  } else if (gameArray[1] === gameArray[4] && gameArray[4] === gameArray[5] && gameArray[1] !== '') {
    $('.winStatement').text(currentPlayer + ' has won!')
    document.querySelector('.winStatement').style.display = 'block'
    win = true
  } else if (gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8] && gameArray[2] !== '') {
    $('.winStatement').text(currentPlayer + ' has won!')
    document.querySelector('.winStatement').style.display = 'block'
    win = true
  } else if (gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8] && gameArray[0] !== '') {
    $('.winStatement').text(currentPlayer + ' has won!')
    document.querySelector('.winStatement').style.display = 'block'
    win = true
  } else if (gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6] && gameArray[2] !== '') {
    $('.winStatement').text(currentPlayer + ' has won!')
    document.querySelector('.winStatement').style.display = 'block'
    win = true
  }
}

$('.inner[data-id]').on('click', function () {
  if (currentPlayer === 'x' && gameArray[this.dataset.id] === '' && win === false) {
    $(this).text('x')
    turnNumber += 1
    gameArray[this.dataset.id] = 'x'
    checkWin()
    currentPlayer = 'o'
  } else if (currentPlayer === 'o' && gameArray[this.dataset.id] === '' && win === false) {
    $(this).text('x')
    $(this).text('o')
    turnNumber += 1
    gameArray[this.dataset.id] = 'o'
    checkWin()
    currentPlayer = 'x'
  }
  if (turnNumber === 10 && win === false) {
    document.querySelector('.drawStatement').style.display = 'block'
  }
  console.log(gameArray)
})
// reset button to reset board
$('.resetButton').on('click', function () {
  $('.inner[data-id]').text('')
  gameArray = ['', '', '', '', '', '', '', '', '']
  turnNumber = 1
  document.querySelector('.authText').style.display = 'none'
  document.querySelector('.winStatement').style.display = 'none'
  document.querySelector('.drawStatement').style.display = 'none'
  currentPlayer = 'x'
  win = false
})
