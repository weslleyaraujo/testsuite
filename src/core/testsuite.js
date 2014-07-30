;(function(root) {
  'use strict';

  // ### TestSuite class constructor
  function Test() {
    this.report = {
      failures: 0,
      success: 0,
      errorMessages: []
    };
  }

  Test.prototype.module = function (description, fn) {
    // log
    Test.methods.Logger('message', description);

    // exec
    fn.call(this, new Test());
  };

  Test.prototype.test = function (description, fn) {
    // is before?
    if (this.before) this.before();

    var test = new Test();

    // exec the tests
    fn.call(fn, test);

    // report the test
    Test.methods.Report(test.report, description);
  };

  Test.prototype.beforeEach = function (fn) {
    this.before = function () {
      fn.call(this);
    };
  };

  Test.methods = {};
  root.Test = Test;
  root.TestSuite = new Test();

}(this));
