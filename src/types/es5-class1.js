'use strict'

/**
 * Greeting.
 *
 * @constructor
 * @param {string} name
 */
function Greeting(name) {
  if (!new.target) {
    return new Greeting(name)
  }

  /**
   * Name.
   *
   * @type {string}
   */
  this.name = name

  /**
   * Say hello.
   *
   * @returns {string}
   */
  this.hello = function () {
    return `Hello ${this.name}!`
  }
}

module.exports = Greeting
