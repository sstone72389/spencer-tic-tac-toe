'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  document.querySelector('.authText').style.display = 'block'
}

const signUpFailure = () => {
  $('.authText').text('Unsuccessful sign up')
  document.querySelector('.authText').style.display = 'block'
}

const signInSuccess = (data) => {
  document.querySelector('.signedIn').style.display = 'none'
  $('.authText').text('Thank you for signing in')
  document.querySelector('.authText').style.display = 'block'
  document.querySelector('.container').style.display = 'block'
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
