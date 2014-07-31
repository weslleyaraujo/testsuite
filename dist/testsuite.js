/** testsuite -v0.0.0
* Copyright (c) 2014 Weslley Araujo
* Licensed MIT
*/

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

/*
 * @method Logger
 *
 * Logs a message referring to a type
 * @param {String} type
 * Accept values:
 *      - message
 *      - failure
 *      - success
 * @param {String} message The message to display on log
 * */
;(function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};
  var defaults = {
    types: {
      message: {
        bgColor: '#EEE',
        color: '#333'
      },

      failure: {
        bgColor: '#B03911',
        color: '#EEE'
      },

      success: {
        bgColor: '#5E7D00',
        color: '#EEE'
      }
    }
  };

  Test.methods.Logger = function (type, message) {
    try {
      console.log('%c '+ message + ' ',
          'width: 100%; background-color: '+ defaults.types[type].bgColor +'; color:' + defaults.types[type].color);
    } catch (e) {
      throw new Error('Type message named "' + type + '" does not exist.');
    }
  };

} (this, this.Test));

/*
 * @method Report
 *
 *
 * @param {Object} report All information about the test
 * @param {String} description The description of the test
 * */
;(function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};

  /*
   * @method ErrorLog
   *
   * Logs descritive error
   * @param {String} error Description of error
   * */
  Test.methods.ErrorLog = function (error) {
    Test.methods.Logger('message', '----> ' + error + '\n');
  };

  Test.methods.Report = function (report, description) {

    if (report.failures === 0) {
      Test.methods.Logger('success', description);
      return;
    }

    // test are not okay
    Test.methods.Logger('failure', description);
    report.errorMessages.forEach(Test.methods.ErrorLog);
  };

} (this, this.Test));

/*
 * @method toArray
 *
 * Transform arguments (Object like) of a method into a array
 * */
;(function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};

  Test.methods.toArray = function () {
    return Array.prototype.slice.call(arguments);
  };

} (this, this.Test));

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

} (this, this.Test));

/*
 * @method equals
 *
 * Assert values to equals
 * @return {Boolean} true if the values are equal
 * */
;(function(Test, Methods) {
  'use strict';

  Test.prototype.equals = function () {
    var _args = Methods.toArray.apply(null, arguments);

    if (_args.length !== 2) {
      this.report.failures++;
      this.report.errorMessages.push('Assert "equals" must have two arguments.');
      return false;
    }

    // does it equals?
    if (Methods.eql.apply(null, _args)) {
      this.report.success++;
      return true;
    }

    this.report.failures++;
    this.report.errorMessages.push('Expected ' + _args[0] + '(' + typeof (_args[0]) + ')'
          + ' to be ' + _args[1] + '('+ typeof (_args[1]) +')');

    return false;
  };

} (this.Test, this.Test.methods));

/*
 * @method notEquals
 *
 * Assert values not to equals
 * @return {Boolean} true if the values are not equal
 * */
;(function(Test, Methods) {
  'use strict';

  Test.prototype.notEquals = function () {
    var _args = Methods.toArray.apply(null, arguments);

    // does it equals?
    if (!Methods.eql.apply(null, _args)) {
      this.report.success++;
      return true;
    }

    this.report.failures++;
    this.report.errorMessages.push('Expected ' + _args[0] + '(' + typeof (_args[0]) + ')'
          + ' not to be ' + _args[1] + '('+ typeof (_args[1]) +')');
    return false;
  };

}(this.Test, this.Test.methods));
