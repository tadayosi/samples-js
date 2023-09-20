/**
 * @module umd
 */
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.GreetingUmd = factory()
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict'

  // preprocess-iife: BEGIN
  /**
   * Greeting.
   *
   * @constructor
   * @param {string} name
   */
  function GreetingUmd(name) {
    if (!new.target) {
      return new GreetingUmd(name)
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

  return GreetingUmd
})
