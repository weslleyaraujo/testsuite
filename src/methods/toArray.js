!function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};

  Test.methods.toArray = function () {
    return Array.prototype.slice.call(arguments);
  }

}(this, this.Test);
