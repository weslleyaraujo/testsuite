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
   * Creates a module
   *
   * @method module
   * @param description {String} a description message for the module
   * @param description {Function} callback method to execut your module
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
   * @param description {String} a description message for the module
   * @param description {Function} callback method to execut your test
   * @return {null}
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
   * Registers a beforeEach method
   *
   * @method test
   * @param description {String} a description message for the module
   * @param description {Function} callback method to execut your test
   * @return {Function} the registered methods to execute
   * */
  Test.prototype.beforeEach = function (fn) {
    this.before = function () {
      fn.call(this);
    };
  };

  Test.methods = {};
  root.Test = Test;
  root.TestSuite = new Test();

}(this));
