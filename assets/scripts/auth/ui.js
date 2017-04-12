'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  $('.authText').text('THANKS FOR SIGNING UP')
  document.querySelector('.authText').style.display = 'block'
}

const signUpFailure = () => {
  $('.authText').text('Unsuccessful sign up')
  document.querySelector('.authText').style.display = 'block'
}

const signInSuccess = (data) => {
  document.querySelector('.authText').style.display = 'none'
  document.querySelector('.signedIn').style.display = 'none'
  document.querySelector('.container').style.display = 'block'
  document.querySelector('.hideOnStart').style.display = 'inline'
  document.querySelector('.hideOnStartTwo').style.display = 'inline'
  document.querySelector('.hideOnSignIn').style.display = 'none'
  document.querySelector('.hideOnSignInTwo').style.display = 'none'

  // store the user object as per below
  store.user = data.user
}

const signInFailure = () => {
  $('.authText').text('Unsuccessful sign in')
  document.querySelector('.authText').style.display = 'block'
}

const changePasswordSuccess = (data) => {
  $('.authText').text('Successful password change')
  document.querySelector('.authText').style.display = 'block'
}

const changePasswordFailure = () => {
  $('.authText').text('Unsuccessful password change')
  document.querySelector('.authText').style.display = 'block'
}

const signOutSuccess = (data) => {
  document.querySelector('.signedIn').style.display = 'block'
  document.querySelector('.container').style.display = 'none'
  document.querySelector('.authText').style.display = 'none'
  document.querySelector('.hideOnStart').style.display = 'none'
  document.querySelector('.hideOnStartTwo').style.display = 'none'
  document.querySelector('.hideOnSignIn').style.display = 'inline'
  document.querySelector('.hideOnSignInTwo').style.display = 'inline'
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  $('.authText').text('Unsuccessful sign out')
  document.querySelector('.authText').style.display = 'block'
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
