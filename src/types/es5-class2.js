'use strict'

const _factory = function () {
  // preprocess-iife: BEGIN
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
  // preprocess-iife: END

  return Greeting
}

module.exports = _factory()
