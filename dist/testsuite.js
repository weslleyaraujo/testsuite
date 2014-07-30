/** testsuite -v0.0.0
* Copyright (c) 2014 Weslley Araujo
* Licensed MIT
*/

!function(root) {
  'use strict';

  // ### TestSuite class constructor
  function Test() {
    this.report = {
      failures: 0,
      success: 0,
      errorMessages: []
    }
  }

  Test.prototype.module = function (description, fn) {
    // log
    Test.methods.Logger('message', description);

    // exec
    fn.call(this, new Test);
  };

  Test.prototype.test = function (description, fn) {
    // is before?
    this.before && this.before();

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

}(this);

!function(root, Test) {
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
    console.log('%c '+ message + ' ',
        'width: 100%; background-color: '+ defaults.types[type].bgColor +'; color:' + defaults.types[type].color);
  };

}(this, this.Test);

!function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};

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

}(this, this.Test);

!function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};

  Test.methods.toArray = function () {
    return Array.prototype.slice.call(arguments);
  }

}(this, this.Test);

!function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};

  Test.methods.eql = function (a, b) {
    return a === b;
  };

}(this, this.Test);

!function(Test, Methods) {
  'use strict';

  Test.prototype.equals = function () {
    var _args = Methods.toArray.apply(null, arguments);

    // does it equals?
    if (Methods.eql.apply(null, _args)) {
      this.report.success++;
      return true;
    }

    this.report.failures++;
    this.report.errorMessages.push('Expected ' + _args[0] + ' to be ' + _args[1]);
    return false;
  }

}(this.Test, this.Test.methods);
