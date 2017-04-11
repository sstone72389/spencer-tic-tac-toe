'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  alert('You have signed up')
}

const signUpFailure = (error) => {
  console.error(error)
  alert('Unsuccessful sign up')
}

const signInSuccess = (data) => {
  console.log(data)
  alert('You have signed in')
  // store the user object as per below
  store.user = data.user
}

const signInFailure = (error) => {
  console.error(error)
  alert('Unsuccessful sign in')
}

const changePasswordSuccess = (data) => {
  console.log('password changed', data)
  alert('Successful PW Change')
}

const changePasswordFailure = (error) => {
  console.error(error)
  alert('Unsuccessful PW change')
}

const signOutSuccess = (data) => {
  console.log('You have signed out!')
  alert('You have signed out')
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = (error) => {
  console.error(error)
  alert('Unsuccessful sign in')
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
