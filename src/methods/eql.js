/*
 * @method eql
 *
 * Compare to values to be equal
 * @param {Any} a first value to compare
 * @return {Boolean} true if the values are equal
 * */
;(function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};

  Test.methods.eql = function (a, b) {
    return a === b;
  };

}(this, this.Test));
