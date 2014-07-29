!function(root) {
  'use strict';

  // ### TestSuite class constructor
  function Test() {

  };

  Test.prototype.module = function () {
    var stage = Test.Prepare.apply(null, arguments)
    console.log(stage.description);
    stage.fn.call(this, new Test);
  };

  Test.prototype.test = Test.prototype.module;

  Test.Prepare = function () {
    var _args = Test.getArgs.apply(null, arguments);
    return {
      description: _args[0],
      fn: _args[1]
    }
  };

  Test.prototype.equals = function () {
    // does it equals?
   if (Test.eql.apply(null, Test.getArgs.apply(null, arguments))) {
    console.log('========== NICE =============');
     return;
   }

   console.log('========== BAD =============');
  }

  Test.prototype.notEquals = function () {
    // does it equals?
   if (!Test.eql.apply(null, Test.getArgs.apply(null, arguments))) {
    console.log('========== NICE =============');
     return;
   }

   console.log('========== BAD =============');
  }

  Test.prototype.notEquals = function () {
    // does it equals?
   return !Test.eql(null, Test.getArgs.apply(null, arguments));
  }

  Test.eql = function (a, b) {
    return a === b;
  };

  Test.getArgs = function () {
    return Array.prototype.slice.call(arguments);
  }

  // ### Version
  Test.VERSION = '0.0.1';

  // attach to `window` for browser.
  root.TestSuite = new Test();

}(this);
