/** testsuite -v0.0.0
* Copyright (c) 2014 Weslley Araujo
* Licensed MIT
*/

!function(root) {
  'use strict';

  // ### TestSuite class constructor
  function Test() {};

  Test.prototype.module = function (description, fn) {

    // is before?
    this.before && this.before();

    // log
    console.log(description);

    // exec
    fn.call(this, new Test);
  };

  Test.prototype.test = Test.prototype.module;

  Test.prototype.beforeEach = function (fn) {
    this.before = function () {
      fn.call(this);
    };
  };

  Test.methods = {};
  root.Test = Test;

}(this);
