'use strict'
const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp,
  signIn
}
