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
    var _args = Test.toArray.apply(null, arguments);
    return {
      description: _args[0],
      fn: _args[1]
    }
  };

  Test.prototype.beforeEach = function () {
  };

  Test.prototype.equals = function () {
    // does it equals?
   if (Test.eql.apply(null, Test.toArray.apply(null, arguments))) {
    console.log('========== NICE =============');
     return;
   }

   console.log('========== BAD =============');
  }

  Test.prototype.notEquals = function () {
    // does it equals?
   if (!Test.eql.apply(null, Test.toArray.apply(null, arguments))) {
    console.log('========== NICE =============');
     return;
   }

   console.log('========== BAD =============');
  }

  Test.eql = function (a, b) {
    return a === b;
  };

  Test.toArray = function () {
    return Array.prototype.slice.call(arguments);
  }

  // ### Version
  Test.VERSION = '0.0.1';

  // attach to `window` for browser.
  root.TestSuite = new Test();

}(this);
