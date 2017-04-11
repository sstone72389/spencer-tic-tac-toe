'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  // store the user object as per below
  store.user = data.user
}

const signInFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}