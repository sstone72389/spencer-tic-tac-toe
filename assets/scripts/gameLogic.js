'use strict'
let currentPlayer = 'x'
const gameArray = ['', '', '', '', '', '', '', '', '']
const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 5], [2, 5, 8],
[0, 4, 8], [2, 4, 6]]

$('.inner[data-id]').on('click', function () {
  console.log(this.dataset.id)
  if (currentPlayer === 'x' && gameArray[this.dataset.id] === '') {
    $(this).text('x')
    gameArray[this.dataset.id] = 'x'
    currentPlayer = 'o'
  } else if (currentPlayer === 'o' && gameArray[this.dataset.id] === '') {
    $(this).text('o')
    gameArray[this.dataset.id] = 'o'
    currentPlayer = 'x'
  }
  console.log(gameArray)
})
