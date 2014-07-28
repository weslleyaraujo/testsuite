!function(root) {
  'use strict';

  // ### TestSuite class constructor
  function TestSuite() {
    options = options || {};
  }

  // ### Version
  TestSuite.VERSION = '0.0.1';

  // Export for Node, attach to `window` for browser.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestSuite;
  } else {
    root.TestSuite = TestSuite;
  }

}(this);
