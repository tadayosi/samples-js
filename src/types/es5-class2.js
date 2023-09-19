'use strict'

const _factory = function () {
  function Greeting(name) {
    if (!new.target) {
      return new Greeting(name)
    }

    this.name = name

    this.hello = function () {
      return `Hello ${this.name}!`
    }
  }
  return Greeting
}

module.exports = _factory()
