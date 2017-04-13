'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  $('.authText').text('THANKS FOR SIGNING UP')
  $('.authText').show()
}

const signUpFailure = () => {
  $('.authText').text('Unsuccessful sign up')
  $('.authText').show()
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

  // store the user object as per below
  store.user = data.user
}

const signInFailure = () => {
  $('.authText').text('Unsuccessful sign in')
  $('.authText').show()
}

const changePasswordSuccess = (data) => {
  $('.authText').text('Successful password change')
  $('.authText').show()
}

const changePasswordFailure = () => {
  $('.authText').text('Unsuccessful password change')
  $('.authText').show()
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
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  $('.authText').text('Unsuccessful sign out')
  $('.authText').show()
}

const createGameSuccess = (data) => {
  console.log('data is', data)
  store.game = data.game
}

const createGameFailure = () => {
  console.log('game not created successfully')
}

// const updateGameSuccess = (data) => {
//   console.log('data is', data)
//   store.game = data.game
// }
// const updateGameFailure = () => {
//   console.log('game patch failed')
// }

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
  createGameFailure
}
