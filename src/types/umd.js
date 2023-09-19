(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.Greeting = factory()
  }
})(typeof self !== 'undefined' ? self : this, function () {
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

  return Greeting
})
