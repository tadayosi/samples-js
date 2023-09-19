'use strict'

function Greeting(name) {
  if (!new.target) {
    return new Greeting(name)
  }

  this.name = name

  this.hello = function () {
    return `Hello ${this.name}!`
  }
}

module.exports = Greeting
