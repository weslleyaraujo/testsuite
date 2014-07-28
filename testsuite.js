!function(root) {
  'use strict';

  // ### TestSuite class constructor
  function TestSuite() {
    this.clear();
  };

  /**
   *
   *
   **/
  TestSuite.prototype.clear = function () {
    this.results = {
      nTests: 0,
      pass: 0,
      failure: 0
    };
  };

  TestSuite.prototype.module = function (name, fn) {
    fn.apply(this, this.asserts);
  };

  // ### Version
  TestSuite.VERSION = '0.0.1';

  // Export for Node, attach to `window` for browser.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = new TestSuite();
  } else {
    root.TestSuite = new TestSuite();
  }

}(this);


// module.TestSuite.module("Module A", function(module) {
// });

