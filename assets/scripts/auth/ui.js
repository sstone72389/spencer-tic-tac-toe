'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  $('.authText').text('THANKS FOR SIGNING UP')
  $('.authText').show()
  $('#signUpModal').modal('hide')
  $('input').val('')
}

const signUpFailure = () => {
  $('.authText').text('Unsuccessful sign up')
  $('.authText').show()
  $('#signUpModal').modal('hide')
  $('input').val('')
}

const signInSuccess = (data) => {
  $('.signedIn').hide()
  $('.hideOnStart').show()
  $('.hideOnStartTwo').show()
  $('.authText').show()
  $('.hideOnSignIn').hide()
  $('.hideOnSignInTwo').hide()
  $('.init').show()
  $('.authText').hide()
  $('.getGamesDiv').show()
  $('#signInModal').modal('hide')
  $('input').val('')

  // store the user object as per below
  store.user = data.user
}

const signInFailure = () => {
  $('.authText').text('Unsuccessful sign in')
  $('.authText').show()
  $('#signInModal').modal('hide')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  $('.authText').text('Successful password change')
  $('.authText').show()
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const changePasswordFailure = () => {
  $('.authText').text('Unsuccessful password change')
  $('.authText').show()
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const signOutSuccess = (data) => {
  $('.signedIn').show()
  $('.container').hide()
  $('.authText').hide()
  $('.hideOnStart').hide()
  $('.hideOnStartTwo').hide()
  $('.hideOnSignIn').show()
  $('.hideOnSignInTwo').show()
  $('.init').hide()
  $('.winStatement').hide()
  $('.drawStatement').hide()
  $('.getGamesDiv').hide()
  $('.getText').hide()
  $('#signOutModal').modal('hide')
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  $('.authText').text('Unsuccessful sign out')
  $('.authText').show()
  $('#signOutModal').modal('hide')
}

const createGameSuccess = (data) => {
  store.game = data.game
}

const createGameFailure = () => {
  $('.authText').text('game not created successfully')
  $('.authText').show()
}

const displayGamesSuccess = (response) => {
  if (response.games.length === 0) {
    $('.getText').text('You haven\'t played any games yet :(')
    $('.getText').show()
  } else if (response.games.length === 1) {
    $('.getText').text('You played ' + response.games.length + ' game')
    $('.getText').show()
  } else {
    $('.getText').text('You played ' + response.games.length + ' games')
    $('.getText').show()
  }
}
const displayGamesFailure = () => {
  $('.getText').text('Failed to display game count')
  $('.getText').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  createGameSuccess,
  createGameFailure,
  displayGamesSuccess,
  displayGamesFailure
}
