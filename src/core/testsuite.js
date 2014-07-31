/*
 * @class Test
 *
 * Initial start for Test class,
 * reponsible for create modules and tests giving a report
 * */
;(function(root) {
  'use strict';

  // initiates the class with a report object
  function Test() {
    this.report = {
      failures: 0,
      success: 0,
      errorMessages: []
    };
  }

  /*
   * Creates a module of tests
   *
   * @method module
   * @param {String} description The description of the module
   * @param {Function} fn Method to exec your module
   * @return {Null}
   * */
  Test.prototype.module = function (description, fn) {
    // log
    Test.methods.Logger('message', description);

    // exec
    fn.call(this, new Test());
  };

  /*
   * Creates a test
   *
   * @method test
   * @param {String} description The description of the test
   * @param {Function} fn Method to exec your test
   * @return {Null}
   * */
  Test.prototype.test = function (description, fn) {

    // is any beforeEach registered?
    if (this.before) this.before();

    var test = new Test();

    // exec the tests
    fn.call(fn, test);

    // report the test
    Test.methods.Report(test.report, description);
  };

  /*
   * Registers a method to run before each given tests
   *
   * @method beforeEach
   * @param {Function} fn Method to exec before the tests
   * @return {Function} The registered method
   * */
  Test.prototype.beforeEach = function (fn) {
    this.before = function () {
      fn.call(this);
    };
  };

  Test.methods = {};
  root.Test = Test;
  root.TestSuite = new Test();

} (this));
